interface ExternalLink {
  href: string;
  /** Default link text: a proper name that is the same in every language. */
  label: string;
  /** Language of `label` when it is not the page's language. */
  lang?: string;
}

/**
 * Every outbound address the site's own pages refer to, in one place, so a
 * URL is never repeated across languages. Used by the layout, by
 * `src/data/work.ts`, and by `[text](key)` links in the language files.
 */
export const links = {
  github: { href: 'https://github.com/Jason25417', label: 'GitHub' },
  paper: {
    href: 'https://arxiv.org/abs/2608.18426',
    label: 'arXiv:2608.18426',
  },
  hotaruMqtt: {
    href: 'https://github.com/fds-pmine/hotaru_mqtt',
    label: 'hotaru_mqtt',
  },
  hotaru: {
    href: 'https://github.com/Field-of-Dream-Studio/hotaru',
    label: 'hotaru',
  },
  scritto: {
    href: 'https://apps.apple.com/us/app/scritto-%E8%A8%80%E5%BD%95/id6787353058',
    label: 'App Store',
  },
  easyReminder: {
    href: 'https://apps.apple.com/us/app/easyreminder-ics/id6789404034',
    label: 'App Store',
  },
  easyReminderSource: {
    href: 'https://github.com/Jason25417/EasyReminder',
    label: 'GitHub',
  },
  sotto: {
    href: 'https://apps.apple.com/us/app/sotto-ai-chat-on-your-wrist/id6787396039',
    label: 'App Store',
  },
  betterCalendarSource: {
    href: 'https://github.com/Jason25417/BetterCalendar',
    label: 'GitHub',
  },
  dashboardFleetKit: {
    href: 'https://github.com/Jason25417/dashboard-fleet-kit',
    label: 'dashboard-fleet-kit',
  },
  issueTreeDashboard: {
    href: 'https://github.com/Jason25417/issue-tree-dashboard',
    label: 'issue-tree-dashboard',
  },
  dshComposerTweaks: {
    href: 'https://github.com/Jason25417/dsh-composer-tweaks',
    label: 'dsh-composer-tweaks',
  },
  dshExternalBridge: {
    href: 'https://github.com/Jason25417/dsh-external-bridge',
    label: 'dsh-external-bridge',
  },
  dshSessionAutoRename: {
    href: 'https://github.com/Jason25417/dsh-session-auto-rename',
    label: 'dsh-session-auto-rename',
  },
  appStoreDeveloper: {
    href: 'https://apps.apple.com/developer/id6785333743',
    label: 'App Store',
  },
} satisfies Record<string, ExternalLink>;

export type LinkKey = keyof typeof links;

export function getLink(key: string): ExternalLink | undefined {
  return (links as Record<string, ExternalLink>)[key];
}
