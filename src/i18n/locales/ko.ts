import type { Dictionary } from './en';

const ko: Dictionary = {
  site: {
    description:
      'Jason Tu — 오하이오 주립대학교에서 수학과 데이터 분석을 전공하고, Rust 인프라 오픈소스에 기여하며, Apple 플랫폼용 앱을 만듭니다.',
  },
  a11y: {
    skip: '본문으로 건너뛰기',
    primaryNav: '주요 메뉴',
    language: '언어',
  },
  nav: {
    home: '홈',
    projects: '프로젝트',
    writing: '글',
    about: '소개',
  },
  kinds: {
    research: '연구',
    openSource: '오픈소스',
    apps: '앱',
  },
  home: {
    eyebrow: '오하이오 주립대학교',
    lede: '오하이오 주립대학교에서 수학(아너스, 이론 트랙)과 데이터 분석을 전공하고 있습니다.',
    coauthor: '공저',
    openSource:
      '[](hotaruMqtt)와 그 상위 프로젝트인 Rust 웹 프레임워크 [](hotaru)에 풀 리퀘스트 38건이 병합되었습니다. MQTT v5 와이어 포맷과 버전 협상, 런타임에 독립적인 코어, no_std 포팅, 브로커 안정성 강화를 다뤘습니다.',
    writeAccess: '2026년 8월부터 쓰기 권한 보유',
    scritto: '기기 안에서 처리하는 받아쓰기와 번역',
    appsNote: 'App Store에서 무료 제공 · [개발자 페이지](appStoreDeveloper)',
    allProjects: '모든 프로젝트',
  },
  projects: {
    title: '프로젝트',
    description: 'Jason Tu의 연구, 오픈소스 작업, 앱.',
    lede: '동역학계 논문 한 편, Rust MQTT 스택 작업, 그리고 Apple 플랫폼용 앱.',
    free: '무료',
    developerPage: 'App Store 개발자 페이지',
    items: {
      'ifs-paper': {
        description: '수학(동역학계) 분야의 공저 논문.',
      },
      hotaru: {
        title: 'hotaru와 hotaru_mqtt',
        description:
          'hotaru_mqtt와 그 상위 프로젝트인 Rust 웹 프레임워크 hotaru에 풀 리퀘스트 38건이 병합되었습니다. MQTT v5 와이어 포맷과 버전 협상, 런타임에 독립적인 코어, no_std 포팅, 브로커 안정성 강화를 다뤘습니다.',
        note: '2026년 8월부터 쓰기 권한 보유.',
      },
      scritto: {
        description: '기기 안에서 처리하는 받아쓰기와 번역.',
      },
    },
  },
  writing: {
    title: '글',
    description: 'Jason Tu가 수학, Rust, 소프트웨어 개발에 대해 쓴 노트.',
    lede: '수학, Rust, 소프트웨어 개발에 관한 노트입니다. 논문이나 풀 리퀘스트에 담기 어려운 이야기를 씁니다.',
    emptyLabel: '아직 글이 없습니다',
    emptyTitle: '긴 글은 이곳에 올라옵니다.',
    emptyBody:
      '수학, Rust 내부 구조, 앱을 만들며 배운 것들. 아직 공개된 글은 없으며, 첫 글은 이 주소에 올라올 예정입니다.',
    emptyCode: '그동안 코드는 [](github)에서 볼 수 있습니다.',
    englishOnly: '이 글은 영어로만 제공됩니다.',
  },
  about: {
    title: '소개',
    description:
      'Jason Tu는 오하이오 주립대학교에서 수학과 데이터 분석을 공부하며 동역학계, Rust 인프라, Apple 앱을 다룹니다.',
    intro:
      '저는 Jason Tu입니다. 오하이오 주립대학교 학부생으로 수학(아너스, 이론 트랙)과 데이터 분석을 전공하고 있습니다.',
    body: '하는 일은 크게 세 갈래입니다. 연구에서는 논문 [](paper)의 공저자이며, 이 논문은 2026년 8월 arXiv에 공개되었습니다. 오픈소스에서는 [](hotaruMqtt)와 그 상위 프로젝트인 Rust 웹 프레임워크 [](hotaru)에 풀 리퀘스트 38건이 병합되었고, MQTT v5 와이어 포맷과 버전 협상, 런타임에 독립적인 코어, no_std 포팅, 브로커 안정성 강화를 다뤘습니다. 2026년 8월부터 쓰기 권한을 갖고 있습니다. 소프트웨어에서는 Apple 플랫폼용 앱을 만듭니다. [](scritto)(기기 안에서 처리하는 받아쓰기와 번역), [](easyReminder), [](wanyu)이며 모두 App Store에서 무료입니다.',
    elsewhere: '링크',
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다',
    description:
      '찾으시는 페이지가 없습니다. 홈, 프로젝트, 글에서 시작해 보세요.',
    eyebrow: '오류 404',
    heading: '이 페이지는 없습니다.',
    body: '주소가 바뀌었거나 처음부터 공개되지 않은 페이지입니다. 홈에서 현재 내용을 확인할 수 있습니다.',
  },
};

export default ko;
