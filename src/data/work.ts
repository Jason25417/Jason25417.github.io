import { links, type LinkKey } from './links';

/** The four lines of work, in the order they appear on the site. */
export const workLines = ['research', 'openSource', 'apps', 'tools'] as const;

export type WorkLine = (typeof workLines)[number];

export interface WorkItem {
  /** File name of its page: `src/content/work/<language>/<id>.md`. */
  id: string;
  line: WorkLine;
  /** `YYYY-MM` the work was published or begun; shown as a localized month. */
  since?: string;
  links: { label: string; href: string }[];
}

const link = (key: LinkKey, label: string = links[key].label) => ({
  label,
  href: links[key].href,
});

/**
 * Facts about each piece of work, in display order. The words — title,
 * one-line summary, and the page itself — are in `src/content/work/`.
 * Every id here needs an English page there, and the reverse; the build
 * stops if the two disagree.
 */
export const work: WorkItem[] = [
  { id: 'ifs-paper', line: 'research', since: '2026-08', links: [link('paper')] },
  {
    id: 'hotaru',
    line: 'openSource',
    since: '2026-07',
    links: [link('hotaruMqtt'), link('hotaru')],
  },
  { id: 'scritto', line: 'apps', links: [link('scritto')] },
  {
    id: 'easyreminder',
    line: 'apps',
    links: [link('easyReminder'), link('easyReminderSource')],
  },
  { id: 'sotto', line: 'apps', links: [link('sotto')] },
  { id: 'bettercalendar', line: 'apps', links: [link('betterCalendarSource')] },
  { id: 'agent-memory', line: 'tools', links: [] },
  {
    id: 'dashboard-fleet-kit',
    line: 'tools',
    since: '2026-08',
    links: [link('dashboardFleetKit'), link('issueTreeDashboard')],
  },
  {
    id: 'dsh-plugins',
    line: 'tools',
    links: [
      link('dshComposerTweaks'),
      link('dshExternalBridge'),
      link('dshSessionAutoRename'),
    ],
  },
];
