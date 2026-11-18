/**
 * English is the source text. Its shape is the contract every other
 * language file must match: a missing or extra key fails `npm run build`.
 *
 * Links are written `[text](key)` with keys from `src/data/links.ts`;
 * `[](key)` uses the link's own name.
 */
const en = {
  site: {
    description:
      'Jason Tu — mathematics and data analytics at The Ohio State University, open-source work on Rust infrastructure, and apps for Apple platforms.',
  },
  a11y: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    language: 'Language',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    writing: 'Writing',
    about: 'About',
  },
  kinds: {
    research: 'Research',
    openSource: 'Open source',
    apps: 'Apps',
  },
  home: {
    eyebrow: 'The Ohio State University',
    lede: 'Mathematics (honors, theory track) and data analytics at The Ohio State University.',
    coauthor: 'co-author',
    openSource:
      '38 merged pull requests into [](hotaruMqtt) and its parent Rust web framework [](hotaru): MQTT v5 wire format and version negotiation, a runtime-agnostic core, a no_std port, and broker hardening.',
    writeAccess: 'Write access since August 2026',
    scritto: 'on-device transcription and translation',
    appsNote: 'Free on the App Store · [developer page](appStoreDeveloper)',
    allProjects: 'All projects',
  },
  projects: {
    title: 'Projects',
    description: 'Research, open-source work, and apps by Jason Tu.',
    lede: 'A paper in dynamical systems, work on a Rust MQTT stack, and apps for Apple platforms.',
    free: 'Free',
    developerPage: 'App Store developer page',
    items: {
      'ifs-paper': {
        description: 'Co-authored paper in mathematics (dynamical systems).',
      },
      hotaru: {
        title: 'hotaru and hotaru_mqtt',
        description:
          '38 merged pull requests into hotaru_mqtt and its parent Rust web framework hotaru: MQTT v5 wire format and version negotiation, a runtime-agnostic core, a no_std port, and broker hardening.',
        note: 'Write access since August 2026.',
      },
      scritto: {
        description: 'On-device transcription and translation.',
      },
    },
  },
  writing: {
    title: 'Writing',
    description: 'Notes by Jason Tu on mathematics, Rust, and building software.',
    lede: "Notes on mathematics, Rust, and building software, for the things that don't fit in a paper or a pull request.",
    emptyLabel: 'No posts yet',
    emptyTitle: 'The longer notes will live here.',
    emptyBody:
      'Mathematics, Rust internals, and what I learn building apps. Nothing is published yet; the first post will appear at this address.',
    emptyCode: 'In the meantime, the code is on [](github).',
    englishOnly: 'This post is available in English only.',
  },
  about: {
    title: 'About',
    description:
      'Jason Tu studies mathematics and data analytics at The Ohio State University and works on dynamical systems, Rust infrastructure, and Apple apps.',
    intro:
      "I'm Jason Tu, an undergraduate at The Ohio State University studying mathematics (honors, theory track) and data analytics.",
    body: 'My work runs along three lines. In research, I co-authored [](paper), published on arXiv in August 2026. In open source, I have 38 merged pull requests into [](hotaruMqtt) and its parent Rust web framework [](hotaru), covering MQTT v5 wire format and version negotiation, a runtime-agnostic core, a no_std port, and broker hardening. I have had write access since August 2026. In software, I build apps for Apple platforms: [](scritto), on-device transcription and translation; [](easyReminder); and [](wanyu). All are free on the App Store.',
    elsewhere: 'Elsewhere',
  },
  notFound: {
    title: 'Page not found',
    description:
      "That page isn't here. Start from the home page, projects, or writing.",
    eyebrow: 'Error 404',
    heading: "This page isn't here.",
    body: 'The address may have changed, or the page was never published. The home page lists what there is.',
  },
};

export type Dictionary = typeof en;

export default en;
