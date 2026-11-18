import type { Dictionary } from './en';

const ja: Dictionary = {
  site: {
    description:
      'Jason Tu — オハイオ州立大学で数学とデータ分析を専攻。Rust 製インフラのオープンソース開発と、Apple プラットフォーム向けアプリの開発に取り組んでいます。',
  },
  a11y: {
    skip: '本文へスキップ',
    primaryNav: 'メインナビゲーション',
    language: '言語',
  },
  nav: {
    home: 'ホーム',
    projects: 'プロジェクト',
    writing: '記事',
    about: 'プロフィール',
  },
  kinds: {
    research: '研究',
    openSource: 'オープンソース',
    apps: 'アプリ',
  },
  home: {
    eyebrow: 'オハイオ州立大学',
    lede: 'オハイオ州立大学で数学（優等課程・理論トラック）とデータ分析を専攻しています。',
    coauthor: '共著',
    openSource:
      '[](hotaruMqtt) と、その親プロジェクトである Rust 製 Web フレームワーク [](hotaru) に、38 件のプルリクエストがマージされました。内容は MQTT v5 のワイヤフォーマットとバージョンネゴシエーション、ランタイムに依存しないコア、no_std 対応、ブローカーの堅牢化です。',
    writeAccess: '2026年8月より書き込み権限を保持',
    scritto: 'デバイス上で動作する文字起こしと翻訳',
    appsNote: 'App Store で無料配信中 · [デベロッパページ](appStoreDeveloper)',
    allProjects: 'すべてのプロジェクト',
  },
  projects: {
    title: 'プロジェクト',
    description: 'Jason Tu の研究、オープンソース活動、アプリ。',
    lede: '力学系の論文、Rust 製 MQTT スタックへの貢献、そして Apple プラットフォーム向けのアプリ。',
    free: '無料',
    developerPage: 'App Store デベロッパページ',
    items: {
      'ifs-paper': {
        description: '数学（力学系）分野の共著論文。',
      },
      hotaru: {
        title: 'hotaru と hotaru_mqtt',
        description:
          'hotaru_mqtt と、その親プロジェクトである Rust 製 Web フレームワーク hotaru に、38 件のプルリクエストがマージされました。内容は MQTT v5 のワイヤフォーマットとバージョンネゴシエーション、ランタイムに依存しないコア、no_std 対応、ブローカーの堅牢化です。',
        note: '2026年8月より書き込み権限を保持。',
      },
      scritto: {
        description: 'デバイス上で動作する文字起こしと翻訳。',
      },
    },
  },
  writing: {
    title: '記事',
    description: 'Jason Tu による、数学・Rust・ソフトウェア開発についてのノート。',
    lede: '数学、Rust、ソフトウェア開発についてのノート。論文やプルリクエストには収まらないことを書きます。',
    emptyLabel: 'まだ記事はありません',
    emptyTitle: '長めのノートはここに置きます。',
    emptyBody:
      '数学、Rust の内部構造、アプリ開発で学んだこと。まだ何も公開していませんが、最初の記事はこのアドレスに掲載されます。',
    emptyCode: 'それまでの間、コードは [](github) にあります。',
    englishOnly: 'この記事は英語版のみです。',
  },
  about: {
    title: 'プロフィール',
    description:
      'Jason Tu はオハイオ州立大学で数学とデータ分析を学び、力学系、Rust 製インフラ、Apple 向けアプリに取り組んでいます。',
    intro:
      'Jason Tu です。オハイオ州立大学の学部生で、数学（優等課程・理論トラック）とデータ分析を専攻しています。',
    body: '取り組んでいることは三つあります。研究では、論文 [](paper) の共著者です（2026年8月に arXiv で公開）。オープンソースでは、[](hotaruMqtt) と、その親プロジェクトである Rust 製 Web フレームワーク [](hotaru) に 38 件のプルリクエストがマージされました。MQTT v5 のワイヤフォーマットとバージョンネゴシエーション、ランタイムに依存しないコア、no_std 対応、ブローカーの堅牢化を扱い、2026年8月からは書き込み権限を持っています。ソフトウェアでは、Apple プラットフォーム向けのアプリを開発しています。[](scritto)（デバイス上で動作する文字起こしと翻訳）、[](easyReminder)、[](wanyu) の三つで、いずれも App Store で無料です。',
    elsewhere: 'リンク',
  },
  notFound: {
    title: 'ページが見つかりません',
    description:
      'お探しのページはありません。ホーム、プロジェクト、記事からご覧ください。',
    eyebrow: 'エラー 404',
    heading: 'このページはありません。',
    body: 'アドレスが変更されたか、もともと公開されていないページです。ホームに現在の内容をまとめています。',
  },
};

export default ja;
