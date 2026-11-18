export type ProjectKind = 'Research' | 'Open source' | 'Apps';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Stable anchor and list ordering id. */
  id: string;
  title: string;
  kind: ProjectKind;
  /** Short year or date label, as shown in the meta column. */
  date: string;
  description?: string;
  note?: string;
  links: ProjectLink[];
}

/**
 * Single source of truth for /projects/.
 * Add an entry here and it appears on the projects page; the home page
 * keeps its own shorter summary of the three areas.
 */
export const projects: Project[] = [
  {
    id: 'ifs-paper',
    title: 'A Relative Variational Principle for Expanding Iterated Function Systems',
    kind: 'Research',
    date: 'August 2026',
    description:
      'Co-authored paper in mathematics (dynamical systems).',
    links: [
      { label: 'arXiv:2608.18426', href: 'https://arxiv.org/abs/2608.18426' },
    ],
  },
  {
    id: 'hotaru',
    title: 'hotaru and hotaru_mqtt',
    kind: 'Open source',
    date: 'August 2026',
    description:
      '38 merged pull requests into hotaru_mqtt and its parent Rust web framework hotaru: MQTT v5 wire format and version negotiation, a runtime-agnostic core, a no_std port, and broker hardening.',
    note: 'Write access since August 2026.',
    links: [
      { label: 'hotaru_mqtt', href: 'https://github.com/fds-pmine/hotaru_mqtt' },
      { label: 'hotaru', href: 'https://github.com/Field-of-Dream-Studio/hotaru' },
    ],
  },
  {
    id: 'scritto',
    title: 'Scritto',
    kind: 'Apps',
    date: 'Free',
    description: 'On-device transcription and translation.',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/scritto-%E8%A8%80%E5%BD%95/id6787353058',
      },
    ],
  },
  {
    id: 'easyreminder-ics',
    title: 'EasyReminder ICS',
    kind: 'Apps',
    date: 'Free',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/easyreminder-ics/id6789404034',
      },
    ],
  },
  {
    id: 'wanyu',
    title: '腕语',
    kind: 'Apps',
    date: 'Free',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/%E8%85%95%E8%AF%AD/id6787396039',
      },
    ],
  },
];

export const appStoreDeveloperPage = 'https://apps.apple.com/developer/id6785333743';
