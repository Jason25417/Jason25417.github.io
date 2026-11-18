import type { Dictionary } from './en';

const zh: Dictionary = {
  site: {
    description:
      'Jason Tu：俄亥俄州立大学数学与数据分析专业在读，参与 Rust 基础设施的开源开发，并制作 Apple 平台应用。',
  },
  a11y: {
    skip: '跳到正文',
    primaryNav: '主导航',
    language: '语言',
  },
  nav: {
    home: '首页',
    projects: '项目',
    writing: '文章',
    about: '关于',
  },
  kinds: {
    research: '研究',
    openSource: '开源',
    apps: '应用',
  },
  home: {
    eyebrow: '俄亥俄州立大学',
    lede: '俄亥俄州立大学数学（荣誉课程，理论方向）与数据分析专业。',
    coauthor: '合著者',
    openSource:
      '向 [](hotaruMqtt) 及其上游的 Rust Web 框架 [](hotaru) 合并了 38 个 pull request，内容包括 MQTT v5 的报文格式与版本协商、不依赖特定运行时的核心、no_std 移植，以及 broker 加固。',
    writeAccess: '自 2026 年 8 月起拥有写入权限',
    scritto: '在设备本地完成的转写与翻译',
    appsNote: '均在 App Store 免费提供 · [开发者主页](appStoreDeveloper)',
    allProjects: '全部项目',
  },
  projects: {
    title: '项目',
    description: 'Jason Tu 的研究、开源工作与应用。',
    lede: '一篇动力系统方向的论文，一套 Rust MQTT 技术栈上的工作，以及几款 Apple 平台应用。',
    free: '免费',
    developerPage: 'App Store 开发者主页',
    items: {
      'ifs-paper': {
        description: '数学（动力系统）方向的合著论文。',
      },
      hotaru: {
        title: 'hotaru 与 hotaru_mqtt',
        description:
          '向 hotaru_mqtt 及其上游的 Rust Web 框架 hotaru 合并了 38 个 pull request，内容包括 MQTT v5 的报文格式与版本协商、不依赖特定运行时的核心、no_std 移植，以及 broker 加固。',
        note: '自 2026 年 8 月起拥有写入权限。',
      },
      scritto: {
        description: '在设备本地完成的转写与翻译。',
      },
    },
  },
  writing: {
    title: '文章',
    description: 'Jason Tu 关于数学、Rust 与软件开发的笔记。',
    lede: '关于数学、Rust 与软件开发的笔记，写那些放不进论文或 pull request 的内容。',
    emptyLabel: '暂无文章',
    emptyTitle: '篇幅较长的笔记会放在这里。',
    emptyBody:
      '数学、Rust 的内部机制，以及做应用时学到的东西。目前还没有发布任何文章，第一篇会出现在这个地址。',
    emptyCode: '在此之前，代码都在 [](github) 上。',
    englishOnly: '本文目前只有英文版。',
  },
  about: {
    title: '关于',
    description:
      'Jason Tu 在俄亥俄州立大学学习数学与数据分析，工作涉及动力系统、Rust 基础设施和 Apple 应用。',
    intro:
      '我是 Jason Tu，俄亥俄州立大学本科生，主修数学（荣誉课程，理论方向）与数据分析。',
    body: '我的工作分三条线。研究方面，我是论文 [](paper) 的合著者，该文于 2026 年 8 月发布在 arXiv。开源方面，我向 [](hotaruMqtt) 及其上游的 Rust Web 框架 [](hotaru) 合并了 38 个 pull request，涉及 MQTT v5 的报文格式与版本协商、不依赖特定运行时的核心、no_std 移植，以及 broker 加固；自 2026 年 8 月起我拥有写入权限。软件方面，我制作 Apple 平台应用：[](scritto)（在设备本地完成的转写与翻译）、[](easyReminder) 和 [](wanyu)，均可在 App Store 免费下载。',
    elsewhere: '其他地方',
  },
  notFound: {
    title: '页面不存在',
    description: '这个页面不存在。可以从首页、项目或文章开始浏览。',
    eyebrow: '错误 404',
    heading: '这个页面不存在。',
    body: '地址可能已经变更，或者这个页面从未发布。首页列出了目前所有的内容。',
  },
};

export default zh;
