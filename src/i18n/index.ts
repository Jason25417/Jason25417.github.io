import type { Locale } from './config';
import en, { type Dictionary } from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';
import ko from './locales/ko';
import es from './locales/es';
import de from './locales/de';
import ru from './locales/ru';

const dictionaries: Record<Locale, Dictionary> = { en, zh, ja, ko, es, de, ru };

/** The site's text in one language. */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from './config';
export { rich } from './rich';
