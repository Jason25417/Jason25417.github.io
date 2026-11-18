import { defineConfig } from 'astro/config';

// Addresses from the site's first layout, kept working.
const moved = { projects: 'work', writing: 'notes' };
const languages = ['', 'zh/', 'ja/', 'ko/', 'es/', 'de/', 'ru/'];
const redirects = Object.fromEntries(
  languages.flatMap((prefix) =>
    Object.entries(moved).map(([from, to]) => [
      `/${prefix}${from}`,
      `/${prefix}${to}/`,
    ]),
  ),
);

export default defineConfig({
  site: 'https://jasontu.dev',
  redirects,
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
