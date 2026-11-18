/**
 * Visitor statistics (Umami Cloud). Cookieless: it counts visits and where
 * they came from without identifying anyone.
 *
 * Leave `websiteId` empty to switch tracking off entirely. `domains` keeps
 * local previews and copies of the site on other hosts out of the numbers.
 */
export const analytics = {
  script: 'https://cloud.umami.is/script.js',
  websiteId: 'f443ca3d-bd10-4feb-b1ce-1538b52f3049',
  domains: 'jasontu.dev',
};
