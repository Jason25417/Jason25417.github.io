import { links, type LinkKey } from './links';

export type ProjectKind = 'research' | 'openSource' | 'apps';

/** Order of the groups on /projects/. */
export const projectKinds: ProjectKind[] = ['research', 'openSource', 'apps'];

export interface ProjectLink {
  /** A proper name, the same in every language. */
  label: string;
  href: string;
}

export interface Project {
  /** Stable anchor id; also the key for translated text in `src/i18n/locales/`. */
  id: string;
  kind: ProjectKind;
  /** A proper name or original title. A translation may override it. */
  title: string;
  /** Language of `title` when it should not be read as the page's language. */
  titleLang?: string;
  /** `YYYY-MM`, shown as a localized month in the meta column. */
  date?: string;
  /** Shows the localized word for "Free" in the meta column. */
  free?: boolean;
  links: ProjectLink[];
}

const link = (key: LinkKey, label: string = links[key].label): ProjectLink => ({
  label,
  href: links[key].href,
});

/**
 * Single source of truth for /projects/. Facts live here; sentences about a
 * project live under `projects.items.<id>` in each language file.
 */
export const projects: Project[] = [
  {
    id: 'ifs-paper',
    kind: 'research',
    title: links.paper.label,
    titleLang: 'en',
    date: '2026-08',
    links: [link('paper', 'arXiv:2608.18426')],
  },
  {
    id: 'hotaru',
    kind: 'openSource',
    title: 'hotaru and hotaru_mqtt',
    date: '2026-08',
    links: [link('hotaruMqtt'), link('hotaru')],
  },
  {
    id: 'scritto',
    kind: 'apps',
    title: 'Scritto',
    free: true,
    links: [link('scritto', 'App Store')],
  },
  {
    id: 'easyreminder-ics',
    kind: 'apps',
    title: 'EasyReminder ICS',
    free: true,
    links: [link('easyReminder', 'App Store')],
  },
  {
    id: 'wanyu',
    kind: 'apps',
    title: '腕语',
    titleLang: 'zh-Hans',
    free: true,
    links: [link('wanyu', 'App Store')],
  },
];

export interface ProjectText {
  title?: string;
  description?: string;
  note?: string;
}
