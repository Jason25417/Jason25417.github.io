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

## What is where

| Part of the site | Where its words live |
|---|---|
| Home introduction, Now, About | `src/content/pages/<language>/home.md`, `now.md`, `about.md` |
| Work (one page per project) | `src/content/work/<language>/<id>.md`, plus facts in `src/data/work.ts` |
| Notes | `src/content/notes/<language>/<name>.md` |
| Menus, headings, short labels | `src/i18n/locales/<language>.ts` |
| Outbound links | `src/data/links.ts` |

## Languages

The site is published in English, Chinese, Japanese, Korean, Spanish, German,
and Russian. English is the source and lives at the root (`/work/`); the
others live under their code (`/zh/work/`, `/de/work/`, …).

- **Long text is Markdown, one folder per language.** Every file needs an
  English version. A language that has no file of the same name shows the
  English text with a one-line notice, so a page can go out before all seven
  translations exist.
- **Short interface text** is one file per language in `src/i18n/locales/`.
  `en.ts` defines the shape; every other file must have exactly the same
  keys, or `npm run build` fails and names the missing key.
- **Which language a visitor sees.** Opening an unprefixed (English) address
  sends a first-time visitor to their browser's language when the site has
  it. Choosing a language in the menu is remembered in that browser and wins
  from then on. An address that already carries a language code is shown as
  is.
- **Links inside Markdown** to other pages of the site carry the language
  themselves: `/work/hotaru/` in an English file, `/zh/work/hotaru/` in a
  Chinese one.
- **Adding a language.** Add its code to `locales` and `localeInfo` in
  `src/i18n/config.ts`, add `src/i18n/locales/<code>.ts`, and register it in
  `src/i18n/index.ts`. The type checker lists everything still missing.

## Update the Now page

Edit `src/content/pages/en/now.md` (and the other languages). Change
`updated:` to today's date; `summary:` is the sentence shown on the home page.

## Add a note

Create `src/content/notes/en/<name>.md`; it is served at `/notes/<name>/`.

```md
---
title: On MQTT v5
description: One sentence for the notes index and link previews.
date: 2026-09-01
---

Body text starts here.
```

Add `draft: true` to keep a note out of the build. To translate it, put a
file with the same name in another language's folder.

## Add a piece of work

1. Add its facts to the `work` array in `src/data/work.ts`: an `id`, which of
   the four lines it belongs to, an optional `since` month, and its links
   (addresses go in `src/data/links.ts`). The array order is the display
   order.
2. Write `src/content/work/en/<id>.md` with a `title`, a one-sentence
   `summary`, and the page body.

The build stops if an id has no English page or a page has no id.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and
can be run manually from the Actions tab. In the repository settings, set
Pages → Build and deployment → Source to **GitHub Actions**.

The site is served at `https://jasontu.dev/` (custom domain set in the
repository's Pages settings; DNS is on Cloudflare, records set to DNS only).
`https://jason25417.github.io/` redirects there. There is no `base` prefix;
internal links start with `/`.
