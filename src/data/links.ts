interface ExternalLink {
  href: string;
  /** Default link text: a proper name that is the same in every language. */
  label: string;
  /** Language of `label` when it is not the page's language. */
  lang?: string;
}

/**
 * Every outbound address the site's text refers to, in one place.
 * Translations point at these by key — `[link text](key)`, or `[](key)` to
 * use the default label — so a URL is never repeated across languages.
 */
export const links = {
  github: { href: 'https://github.com/Jason25417', label: 'GitHub' },
  paper: {
    href: 'https://arxiv.org/abs/2608.18426',
    label: 'A Relative Variational Principle for Expanding Iterated Function Systems',
    lang: 'en',
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
    label: 'Scritto',
  },
  easyReminder: {
    href: 'https://apps.apple.com/us/app/easyreminder-ics/id6789404034',
    label: 'EasyReminder ICS',
  },
  wanyu: {
    href: 'https://apps.apple.com/us/app/%E8%85%95%E8%AF%AD/id6787396039',
    label: '腕语',
    lang: 'zh-Hans',
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
