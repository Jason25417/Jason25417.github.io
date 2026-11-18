import type { Dictionary } from './en';

const de: Dictionary = {
  site: {
    description:
      'Jason Tu – Mathematik und Data Analytics an der Ohio State University, Open-Source-Arbeit an Rust-Infrastruktur und Apps für Apple-Plattformen.',
  },
  a11y: {
    skip: 'Zum Inhalt springen',
    primaryNav: 'Hauptnavigation',
    language: 'Sprache',
  },
  nav: {
    home: 'Startseite',
    projects: 'Projekte',
    writing: 'Texte',
    about: 'Über mich',
  },
  kinds: {
    research: 'Forschung',
    openSource: 'Open Source',
    apps: 'Apps',
  },
  home: {
    eyebrow: 'The Ohio State University',
    lede: 'Mathematik (Honors, Theorie-Schwerpunkt) und Data Analytics an der Ohio State University.',
    coauthor: 'Koautor',
    openSource:
      '38 gemergte Pull Requests in [](hotaruMqtt) und das übergeordnete Rust-Webframework [](hotaru): MQTT-v5-Wire-Format und Versionsaushandlung, ein laufzeitunabhängiger Kern, eine no_std-Portierung und die Härtung des Brokers.',
    writeAccess: 'Schreibzugriff seit August 2026',
    scritto: 'Transkription und Übersetzung direkt auf dem Gerät',
    appsNote: 'Kostenlos im App Store · [Entwicklerseite](appStoreDeveloper)',
    allProjects: 'Alle Projekte',
  },
  projects: {
    title: 'Projekte',
    description: 'Forschung, Open-Source-Arbeit und Apps von Jason Tu.',
    lede: 'Ein Paper über dynamische Systeme, Arbeit an einem MQTT-Stack in Rust und Apps für Apple-Plattformen.',
    free: 'Kostenlos',
    developerPage: 'Entwicklerseite im App Store',
    items: {
      'ifs-paper': {
        description:
          'Gemeinsam verfasstes Paper in der Mathematik (dynamische Systeme).',
      },
      hotaru: {
        title: 'hotaru und hotaru_mqtt',
        description:
          '38 gemergte Pull Requests in hotaru_mqtt und das übergeordnete Rust-Webframework hotaru: MQTT-v5-Wire-Format und Versionsaushandlung, ein laufzeitunabhängiger Kern, eine no_std-Portierung und die Härtung des Brokers.',
        note: 'Schreibzugriff seit August 2026.',
      },
      scritto: {
        description: 'Transkription und Übersetzung direkt auf dem Gerät.',
      },
    },
  },
  writing: {
    title: 'Texte',
    description:
      'Notizen von Jason Tu über Mathematik, Rust und Softwareentwicklung.',
    lede: 'Notizen über Mathematik, Rust und Softwareentwicklung – für alles, was nicht in ein Paper oder einen Pull Request passt.',
    emptyLabel: 'Noch keine Texte',
    emptyTitle: 'Hier stehen künftig die längeren Notizen.',
    emptyBody:
      'Mathematik, Rust-Interna und was ich beim Entwickeln von Apps lerne. Bisher ist nichts veröffentlicht; der erste Text erscheint unter dieser Adresse.',
    emptyCode: 'Bis dahin liegt der Code auf [](github).',
    englishOnly: 'Diesen Text gibt es nur auf Englisch.',
  },
  about: {
    title: 'Über mich',
    description:
      'Jason Tu studiert Mathematik und Data Analytics an der Ohio State University und arbeitet an dynamischen Systemen, Rust-Infrastruktur und Apple-Apps.',
    intro:
      'Ich bin Jason Tu und studiere im Bachelor Mathematik (Honors, Theorie-Schwerpunkt) und Data Analytics an der Ohio State University.',
    body: 'Meine Arbeit verläuft in drei Richtungen. In der Forschung bin ich Koautor von [](paper), im August 2026 auf arXiv erschienen. Im Open-Source-Bereich habe ich 38 gemergte Pull Requests in [](hotaruMqtt) und das übergeordnete Rust-Webframework [](hotaru); sie betreffen das MQTT-v5-Wire-Format und die Versionsaushandlung, einen laufzeitunabhängigen Kern, eine no_std-Portierung und die Härtung des Brokers. Seit August 2026 habe ich Schreibzugriff. Außerdem entwickle ich Apps für Apple-Plattformen: [](scritto) (Transkription und Übersetzung direkt auf dem Gerät), [](easyReminder) und [](wanyu). Alle sind kostenlos im App Store erhältlich.',
    elsewhere: 'Anderswo',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    description:
      'Diese Seite gibt es nicht. Die Startseite, die Projekte und die Texte sind gute Ausgangspunkte.',
    eyebrow: 'Fehler 404',
    heading: 'Diese Seite gibt es nicht.',
    body: 'Vielleicht hat sich die Adresse geändert, oder die Seite wurde nie veröffentlicht. Auf der Startseite steht, was es gibt.',
  },
};

export default de;
