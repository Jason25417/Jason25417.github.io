import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Long-form text lives in Markdown, one folder per language:
 * `src/content/<collection>/<language>/<name>.md`. English is the source;
 * see `src/i18n/content.ts` for how other languages fall back to it.
 */
const byLanguage = (collection: string) =>
  glob({ pattern: '*/**/*.md', base: `./src/content/${collection}` });

/** Notes: dated writing, long or short. Served at /notes/<name>/. */
const notes = defineCollection({
  loader: byLanguage('notes'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

/** Work: one page per project. Facts (links, dates) are in src/data/work.ts. */
const work = defineCollection({
  loader: byLanguage('work'),
  schema: z.object({
    title: z.string(),
    /** One sentence, shown on the home page and the work index. */
    summary: z.string(),
  }),
});

/** Standing pages: `home` (the introduction), `now`, and `about`. */
const pages = defineCollection({
  loader: byLanguage('pages'),
  schema: z.object({
    description: z.string().optional(),
    /** One or two sentences shown on the home page (used by `now`). */
    summary: z.string().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { notes, work, pages };
