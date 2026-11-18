# jasontu.dev

Personal site for Jason Tu, built with Astro. Static output, no UI framework.
The only client-side script is a few lines in the layout that pick the
visitor's language.

## Run locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks (incl. translations), then writes dist/
npm run check     # type-check .astro and .ts files
npm run preview   # serves the built site
```

Node 22.23 or newer is required.

## Languages

The site is published in English, Chinese, Japanese, Korean, Spanish, German,
and Russian. English is the source and lives at the root (`/projects/`); the
others live under their code (`/zh/projects/`, `/de/projects/`, …).

- **Where the text is.** One file per language in `src/i18n/locales/`.
  `en.ts` defines the shape; every other file must have exactly the same
  keys, or `npm run build` fails and names the missing key. To change or add
  a sentence, edit `en.ts` first, then the other six.
- **Links inside sentences** are written `[text](key)`, with keys from
  `src/data/links.ts`; `[](key)` uses the link's own name. URLs are never
  repeated in the language files.
- **Pages** exist once, in `src/pages/[...locale]/`, and are built for every
  language.
- **Which language a visitor sees.** Opening an unprefixed (English) address
  sends a first-time visitor to their browser's language when the site has
  it. Choosing a language in the menu is remembered in that browser and wins
  from then on. An address that already carries a language code is shown as
  is.
- **Adding a language.** Add its code to `locales` and `localeInfo` in
  `src/i18n/config.ts`, add `src/i18n/locales/<code>.ts`, and register it in
  `src/i18n/index.ts`. The type checker lists everything still missing.

## Add a post

Create a Markdown file in `src/content/writing/en/`. The filename becomes the
URL: `src/content/writing/en/on-mqtt-v5.md` is served at
`/writing/on-mqtt-v5/`.

```md
---
title: On MQTT v5
description: One sentence for the writing index and link previews.
date: 2026-09-01
---

Body text starts here.
```

`title`, `description`, and `date` are required. Add `draft: true` to keep a
post out of the build. Posts are listed newest first; the empty state on
`/writing/` disappears once the first one exists.

To translate a post, put a file with the **same filename** in another
language's folder, e.g. `src/content/writing/zh/on-mqtt-v5.md`. Every post
needs an English version; a language without its own version shows the
English text with a one-line notice.

## Add a project

1. Add the facts to the `projects` array in `src/data/projects.ts`:

   ```ts
   {
     id: 'short-anchor',     // used as /projects/#short-anchor
     kind: 'openSource',     // 'research' | 'openSource' | 'apps'
     title: 'Project name',  // a proper name, shown as is in every language
     date: '2026-08',        // optional; shown as a localized month
     free: true,             // optional; shows the localized word for "Free"
     links: [{ label: 'GitHub', href: 'https://github.com/…' }],
   }
   ```

2. If it needs a description, a note, or a translated title, add
   `projects.items['short-anchor']` to `src/i18n/locales/en.ts` and to the
   other language files.

The projects page groups entries by `kind` in the order research, open
source, apps. The home page has its own short summary and does not read this
file.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and
can be run manually from the Actions tab. In the repository settings, set
Pages → Build and deployment → Source to **GitHub Actions**.

The site is served at `https://jasontu.dev/` (custom domain set in the
repository's Pages settings; DNS is on Cloudflare, records set to DNS only).
`https://jason25417.github.io/` redirects there. There is no `base` prefix;
internal links start with `/`.
