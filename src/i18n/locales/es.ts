import type { Dictionary } from './en';

const es: Dictionary = {
  site: {
    description:
      'Jason Tu: matemáticas y análisis de datos en The Ohio State University, código abierto en infraestructura Rust y apps para plataformas Apple.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    primaryNav: 'Principal',
    language: 'Idioma',
  },
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    writing: 'Escritos',
    about: 'Acerca de',
  },
  kinds: {
    research: 'Investigación',
    openSource: 'Código abierto',
    apps: 'Apps',
  },
  home: {
    eyebrow: 'The Ohio State University',
    lede: 'Matemáticas (programa de honores, itinerario teórico) y análisis de datos en The Ohio State University.',
    coauthor: 'coautor',
    openSource:
      '38 pull requests fusionados en [](hotaruMqtt) y en su proyecto matriz, el framework web en Rust [](hotaru): formato de trama y negociación de versión de MQTT v5, un núcleo independiente del runtime, una adaptación a no_std y refuerzo del broker.',
    writeAccess: 'Acceso de escritura desde agosto de 2026',
    scritto: 'transcripción y traducción en el propio dispositivo',
    appsNote: 'Gratis en el App Store · [página de desarrollador](appStoreDeveloper)',
    allProjects: 'Todos los proyectos',
  },
  projects: {
    title: 'Proyectos',
    description: 'Investigación, código abierto y apps de Jason Tu.',
    lede: 'Un artículo sobre sistemas dinámicos, trabajo en un stack MQTT en Rust y apps para plataformas Apple.',
    free: 'Gratis',
    developerPage: 'Página de desarrollador en el App Store',
    items: {
      'ifs-paper': {
        description: 'Artículo en coautoría en matemáticas (sistemas dinámicos).',
      },
      hotaru: {
        title: 'hotaru y hotaru_mqtt',
        description:
          '38 pull requests fusionados en hotaru_mqtt y en su proyecto matriz, el framework web en Rust hotaru: formato de trama y negociación de versión de MQTT v5, un núcleo independiente del runtime, una adaptación a no_std y refuerzo del broker.',
        note: 'Acceso de escritura desde agosto de 2026.',
      },
      scritto: {
        description: 'Transcripción y traducción en el propio dispositivo.',
      },
    },
  },
  writing: {
    title: 'Escritos',
    description:
      'Notas de Jason Tu sobre matemáticas, Rust y desarrollo de software.',
    lede: 'Notas sobre matemáticas, Rust y desarrollo de software, para lo que no cabe en un artículo ni en un pull request.',
    emptyLabel: 'Aún no hay textos',
    emptyTitle: 'Las notas más largas vivirán aquí.',
    emptyBody:
      'Matemáticas, las entrañas de Rust y lo que aprendo creando apps. Todavía no hay nada publicado; el primer texto aparecerá en esta dirección.',
    emptyCode: 'Mientras tanto, el código está en [](github).',
    englishOnly: 'Este texto solo está disponible en inglés.',
  },
  about: {
    title: 'Acerca de',
    description:
      'Jason Tu estudia matemáticas y análisis de datos en The Ohio State University y trabaja en sistemas dinámicos, infraestructura Rust y apps para Apple.',
    intro:
      'Soy Jason Tu, estudiante de grado en The Ohio State University, donde curso matemáticas (programa de honores, itinerario teórico) y análisis de datos.',
    body: 'Mi trabajo sigue tres líneas. En investigación, soy coautor de [](paper), publicado en arXiv en agosto de 2026. En código abierto, tengo 38 pull requests fusionados en [](hotaruMqtt) y en su proyecto matriz, el framework web en Rust [](hotaru), que abarcan el formato de trama y la negociación de versión de MQTT v5, un núcleo independiente del runtime, una adaptación a no_std y el refuerzo del broker. Tengo acceso de escritura desde agosto de 2026. En software, desarrollo apps para plataformas Apple: [](scritto), transcripción y traducción en el propio dispositivo; [](easyReminder); y [](wanyu). Todas son gratuitas en el App Store.',
    elsewhere: 'En otros sitios',
  },
  notFound: {
    title: 'Página no encontrada',
    description:
      'Esa página no está aquí. Empieza por el inicio, los proyectos o los escritos.',
    eyebrow: 'Error 404',
    heading: 'Esta página no está aquí.',
    body: 'Puede que la dirección haya cambiado o que la página nunca se haya publicado. En la página de inicio está todo lo que hay.',
  },
};

export default es;
