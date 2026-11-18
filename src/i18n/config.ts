/**
 * Languages the site is published in.
 *
 * English is the default: its pages live at the root (`/projects/`), every
 * other language under its code (`/zh/projects/`). Adding a code here makes
 * the type checker demand a full dictionary for it in `./locales/`.
 */
export const locales = ['en', 'zh', 'ja', 'ko', 'es', 'de', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

interface LocaleInfo {
  /** The language's own name, shown in the language menu. */
  name: string;
  /** BCP 47 tag for `<html lang>`, `hreflang`, and `Intl` formatting. */
  tag: string;
  /** Open Graph locale. */
  og: string;
}

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { name: 'English', tag: 'en', og: 'en_US' },
  zh: { name: '中文', tag: 'zh-Hans', og: 'zh_CN' },
  ja: { name: '日本語', tag: 'ja', og: 'ja_JP' },
  ko: { name: '한국어', tag: 'ko', og: 'ko_KR' },
  es: { name: 'Español', tag: 'es', og: 'es_ES' },
  de: { name: 'Deutsch', tag: 'de', og: 'de_DE' },
  ru: { name: 'Русский', tag: 'ru', og: 'ru_RU' },
};

export function isLocale(value: unknown): value is Locale {
  return (locales as readonly unknown[]).includes(value);
}

/** `/projects/` + `zh` → `/zh/projects/`; the default language keeps the bare path. */
export function localizePath(path: string, locale: Locale): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** `/zh/projects/` → `{ locale: 'zh', path: '/projects/' }`. */
export function splitPath(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/');
  if (isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: `/${rest.join('/')}` };
  }
  return { locale: defaultLocale, path: pathname };
}

/**
 * `getStaticPaths` for a page under `src/pages/[...locale]/`: one copy per
 * language, with the default language at the unprefixed path.
 */
export function localeStaticPaths() {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}

/** "August 2026" for a `YYYY-MM` value, in the given language. */
export function formatMonth(yearMonth: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeInfo[locale].tag, {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${yearMonth}-01T00:00:00Z`));
}

/** "August 14, 2026" for a full date, in the given language. */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeInfo[locale].tag, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Fills `{name}` placeholders in a translated string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) => values[name] ?? match);
}
