/**
 * Interface text: labels, headings, and one-line descriptions. English is
 * the source; its shape is the contract every other language file must
 * match, and a missing or extra key fails `npm run build`.
 *
 * Longer text (the introduction, Now, About, work pages, notes) is Markdown
 * in `src/content/`.
 *
 * Links are written `[text](key)` with keys from `src/data/links.ts`;
 * `[](key)` uses the link's own name.
 */
const en = {
  site: {
    description:
      'Jason Tu — mathematics student, open-source contributor, and app developer. What I have made, what I am doing now, and notes on how I work.',
  },
  a11y: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    language: 'Language',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    notes: 'Notes',
    now: 'Now',
    about: 'About',
  },
  lines: {
    research: 'Research',
    openSource: 'Open source',
    apps: 'Apps',
    tools: 'Agent tooling',
  },
  common: {
    updated: 'Updated {date}',
    englishOnly: 'This page is available in English only.',
  },
  home: {
    nowLink: 'What I am doing now',
    allWork: 'All work',
    allNotes: 'All notes',
  },
  work: {
    title: 'Work',
    description:
      'Research, open-source contributions, apps, and agent tooling by Jason Tu.',
    lede: 'Everything I have made that is worth showing, in four lines: research, open source, apps, and the tooling I use to work with AI agents.',
  },
  notes: {
    title: 'Notes',
    description: 'Notes by Jason Tu on mathematics, software, and ways of working.',
    lede: 'Long and short. Mathematics, software, and the methods I work by.',
    emptyLabel: 'No notes yet',
    emptyTitle: 'Notes will live here.',
    emptyBody: 'Nothing is published yet; the first note will appear at this address.',
    emptyCode: 'In the meantime, the code is on [](github).',
  },
  now: {
    title: 'Now',
    description: 'What Jason Tu is working on at the moment.',
  },
  about: {
    title: 'About',
    description:
      'Who Jason Tu is and where else to find him.',
    elsewhere: 'Elsewhere',
    developerPage: 'App Store developer page',
  },
  notFound: {
    title: 'Page not found',
    description: "That page isn't here. Start from the home page, work, or notes.",
    eyebrow: 'Error 404',
    heading: "This page isn't here.",
    body: 'The address may have changed, or the page was never published. The home page lists what there is.',
  },
};

export type Dictionary = typeof en;

export default en;
