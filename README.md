# jason25417.github.io

Personal site for Jason Tu, built with Astro. Static output, no UI framework,
and no client-side JavaScript.

## Run locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # writes dist/
npm run check     # type-check .astro and .ts files
npm run preview   # serves the built site
```

Node 22.23 or newer is required.

## Add a post

Create a Markdown file in `src/content/writing/`. The filename becomes the URL:
`src/content/writing/on-mqtt-v5.md` is served at `/writing/on-mqtt-v5/`.

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

## Add a project

Edit the `projects` array in `src/data/projects.ts`. Each entry takes:

```ts
{
  id: 'short-anchor',          // used as /projects/#short-anchor
  title: 'Project name',
  kind: 'Research',            // 'Research' | 'Open source' | 'Apps'
  date: 'August 2026',         // shown in the right-hand meta column
  description: 'Optional one or two sentences.',
  note: 'Optional secondary line.',
  links: [{ label: 'GitHub', href: 'https://github.com/…' }],
}
```

The projects page groups entries by `kind` in the order Research, Open source,
Apps. The home page has its own short summary and does not read this file.

## Deploy

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, and
can be run manually from the Actions tab. In the repository settings, set
Pages → Build and deployment → Source to **GitHub Actions**.

The site is served at `https://jasontu.dev/` (custom domain set in the
repository's Pages settings; DNS is on Cloudflare, records set to DNS only).
`https://jason25417.github.io/` redirects there. There is no `base` prefix;
internal links start with `/`.
