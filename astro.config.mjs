import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jason25417.github.io',
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
