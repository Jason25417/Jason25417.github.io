import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, type Locale } from './config';

type Entry = CollectionEntry<'writing'>;

export interface LocalizedPost {
  /** URL segment, shared by every language version of the post. */
  slug: string;
  entry: Entry;
  /** Language the text is actually written in. */
  contentLocale: Locale;
  /** True when the reader's language has no version and English is shown. */
  isFallback: boolean;
}

/**
 * Posts as a reader of `locale` sees them, newest first.
 *
 * A post lives at `src/content/writing/<locale>/<slug>.md`. English is the
 * source: every post needs an English version, translations are optional,
 * and a language without one shows the English text with a notice.
 */
export async function getPosts(locale: Locale): Promise<LocalizedPost[]> {
  const entries = await getCollection('writing', ({ data }) => !data.draft);
  const versions = new Map<string, Partial<Record<Locale, Entry>>>();

  for (const entry of entries) {
    const [folder, ...rest] = entry.id.split('/');
    if (!isLocale(folder) || rest.length === 0) {
      throw new Error(
        `Post "${entry.id}" must be at src/content/writing/<language>/<name>.md`,
      );
    }
    const slug = rest.join('/');
    versions.set(slug, { ...versions.get(slug), [folder]: entry });
  }

  const posts: LocalizedPost[] = [];
  for (const [slug, byLocale] of versions) {
    const source = byLocale[defaultLocale];
    if (!source) {
      throw new Error(
        `Post "${slug}" has no English version at src/content/writing/${defaultLocale}/${slug}.md`,
      );
    }
    const own = byLocale[locale];
    posts.push({
      slug,
      entry: own ?? source,
      contentLocale: own ? locale : defaultLocale,
      isFallback: !own,
    });
  }

  return posts.sort(
    (a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf(),
  );
}
