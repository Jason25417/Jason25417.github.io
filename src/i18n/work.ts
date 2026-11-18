import { work, workLines, type WorkItem, type WorkLine } from '../data/work';
import type { Locale } from './config';
import { getLocalized, type Localized } from './content';

export interface WorkEntry extends WorkItem {
  page: Localized<'work'>;
}

/** Every piece of work with its page in the reader's language, in display order. */
export async function getWork(locale: Locale): Promise<WorkEntry[]> {
  const pages = await getLocalized('work', locale);
  const bySlug = new Map(pages.map((page) => [page.slug, page]));

  const orphan = pages.find((page) => !work.some((item) => item.id === page.slug));
  if (orphan) {
    throw new Error(
      `src/content/work/…/${orphan.slug}.md has no entry in src/data/work.ts`,
    );
  }

  return work.map((item) => {
    const page = bySlug.get(item.id);
    if (!page) {
      throw new Error(
        `"${item.id}" in src/data/work.ts has no page at src/content/work/en/${item.id}.md`,
      );
    }
    return { ...item, page };
  });
}

/** The same, grouped by line; lines with nothing in them are left out. */
export async function getWorkByLine(
  locale: Locale,
): Promise<{ line: WorkLine; items: WorkEntry[] }[]> {
  const all = await getWork(locale);
  return workLines
    .map((line) => ({ line, items: all.filter((item) => item.line === line) }))
    .filter((group) => group.items.length > 0);
}
