import { getLink } from '../data/links';

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Turns a translated sentence into HTML, resolving `[text](key)` against
 * `src/data/links.ts`. `[](key)` uses the link's default label.
 * An unknown key stops the build instead of shipping a dead link.
 */
export function rich(template: string): string {
  return escapeHtml(template).replace(
    /\[([^\]]*)\]\(([A-Za-z0-9]+)\)/g,
    (_match, text: string, key: string) => {
      const link = getLink(key);
      if (!link) {
        throw new Error(`Unknown link "${key}" in translation: ${template}`);
      }
      const lang = !text && link.lang ? ` lang="${link.lang}"` : '';
      return `<a href="${escapeHtml(link.href)}"${lang}>${text || escapeHtml(link.label)}</a>`;
    },
  );
}
