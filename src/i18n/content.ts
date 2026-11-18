import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, locales, type Locale } from './config';

type LocalizedCollection = 'notes' | 'work' | 'pages';

export interface Localized<C extends LocalizedCollection> {
  /** URL segment and file name, shared by every language version. */
  slug: string;
  entry: CollectionEntry<C>;
  /** Language the text is actually written in. */
  contentLocale: Locale;
  /** True when the reader's language has no version and English is shown. */
  isFallback: boolean;
  /** Languages this entry was really written in, for search engines. */
  translatedIn: Locale[];
}

/**
 * Entries of a collection as a reader of `locale` sees them.
 *
 * A file lives at `src/content/<collection>/<language>/<name>.md`. English
 * is the source: every entry needs an English version, translations are
 * optional, and a language without one shows the English text with a notice.
 */
export async function getLocalized<C extends LocalizedCollection>(
  collection: C,
  locale: Locale,
): Promise<Localized<C>[]> {
  const entries = await getCollection(collection);
  const versions = new Map<string, Partial<Record<Locale, CollectionEntry<C>>>>();

  for (const entry of entries) {
    if ((entry.data as { draft?: boolean }).draft) continue;
    const [folder, ...rest] = entry.id.split('/');
    if (!isLocale(folder) || rest.length === 0) {
      throw new Error(
        `"${entry.id}" must be at src/content/${collection}/<language>/<name>.md`,
      );
    }
    const slug = rest.join('/');
    versions.set(slug, { ...versions.get(slug), [folder]: entry });
  }

  const result: Localized<C>[] = [];
  for (const [slug, byLocale] of versions) {
    const source = byLocale[defaultLocale];
    if (!source) {
      throw new Error(
        `"${slug}" has no English version at src/content/${collection}/${defaultLocale}/${slug}.md`,
      );
    }
    const own = byLocale[locale];
    result.push({
      slug,
      entry: own ?? source,
      contentLocale: own ? locale : defaultLocale,
      isFallback: !own,
      translatedIn: locales.filter((candidate) => byLocale[candidate]),
    });
  }
  return result;
}

/** One entry by name; a missing one stops the build. */
export async function getLocalizedEntry<C extends LocalizedCollection>(
  collection: C,
  slug: string,
  locale: Locale,
): Promise<Localized<C>> {
  const found = (await getLocalized(collection, locale)).find(
    (item) => item.slug === slug,
  );
  if (!found) {
    throw new Error(`Missing src/content/${collection}/${defaultLocale}/${slug}.md`);
  }
  return found;
}

/** Notes, newest first. */
export async function getNotes(locale: Locale) {
  return (await getLocalized('notes', locale)).sort(
    (a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf(),
  );
}
