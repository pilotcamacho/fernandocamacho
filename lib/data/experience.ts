export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  order: number;
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp01',
    company: 'Open English',
    role: 'Senior Education Data Analyst',
    location: 'Bogotá, Colombia',
    startDate: 'Enero 2018',
    endDate: null,
    description:
      'Analítica de datos aplicada a la mejora de la calidad, eficiencia y experiencia de aprendizaje. Integración de inteligencia de negocios, educación y comportamiento humano para optimizar el desempeño empresarial y la propuesta de valor al cliente. Trabajo con MSSQL, Java, Python y SpotFire.',
    achievements: [
      'Reducción de costos del 30% mediante la implementación exitosa de un nuevo método de entrega de clases en vivo, liderando un equipo multidisciplinario de simulación de escenarios y ejecución del proyecto.',
      'Creación de un ciclo de mejora continua basado en KPIs internos para la optimización permanente del sistema.',
      'Desarrollo de modelos estadísticos predictivos para la asignación de profesores y reserva de clases.',
    ],
    order: 1,
  },
  {
    id: 'exp02',
    company: 'Universidad de la Sabana',
    role: 'Investigador y Profesor',
    location: 'Chía, Colombia',
    startDate: 'Agosto 2014',
    endDate: 'Diciembre 2017',
    description:
      'Investigación en Human Centered Design y modelos de comportamiento usando Big Data. Profesor en la Maestría en Ingeniería de Gestión, Inteligencia de Negocios y Probabilidad y Estadística.',
    achievements: [
      'Desarrollo de una plataforma de Education Analytics que responde a las necesidades del entorno de aprendizaje complejo, integrando analítica individualizada y retroalimentación basada en métricas.',
      'Trabajo directo con profesores, estudiantes y directivos universitarios para definir requerimientos y plan de adopción.',
      'Investigación en modelos conductuales aplicados a la gestión de la diversidad organizacional e internacionalización.',
    ],
    order: 2,
  },
  {
    id: 'exp03',
    company: 'Woobsing S.A.S. / Emoxional S.A.S. / Red I5 S.A.S.',
    role: 'Consultor Independiente e Innovación',
    location: 'Bogotá, Colombia',
    startDate: 'Junio 2007',
    endDate: 'Abril 2014',
    description:
      'Consultor de innovación y nuevos desarrollos. Dirección de múltiples emprendimientos tecnológicos: sistema Long Tail SEO (Woobsing), herramienta de neuromarketing (Emoxional) y sistema de valoración inmobiliaria (Red I5).',
    achievements: [
      'Premio Nacional de Innovación Innova 2013 por el sistema Long Tail SEO, seleccionado por Innpulsa Colombia.',
      'Desarrollo de herramienta de neurociencia aplicada a negocios (Emoxional), liderando el equipo de ventas y marketing para la adopción de la tecnología por clientes corporativos.',
      'Creación de sistema de valoración inmobiliaria basado en datos para el mercado colombiano, con adopción por una red de agentes inmobiliarios.',
    ],
    order: 3,
  },
  {
    id: 'exp04',
    company: 'Eco-Citi S.A.',
    role: 'Director de Proyecto',
    location: 'Bogotá, Colombia',
    startDate: '2007',
    endDate: '2008',
    description:
      'Dirección del proyecto de diseño e implementación de un vehículo urbano ultraligero eléctrico. Supervisión de la optimización de la línea de producción y análisis del desempeño del vehículo, con implementación de sistema de información para seguimiento integral del proyecto.',
    achievements: [
      'Liderazgo de equipo multidisciplinario de ingeniería para el diseño y desarrollo del vehículo.',
      'Implementación de sistema de información para el seguimiento completo del ciclo de diseño e implementación.',
    ],
    order: 4,
  },
  {
    id: 'exp05',
    company: 'Universidad de los Andes',
    role: 'Investigador y Docente',
    location: 'Bogotá, Colombia',
    startDate: '2006',
    endDate: '2007',
    description:
      'Investigación en métodos estadísticos y telemedicina. Docencia en Optimización, Estadística, Instrumentación e Instrumentos Médicos.',
    achievements: [
      'Fortalecimiento del enfoque analítico y basado en datos mediante la experiencia combinada de investigador y docente universitario.',
      'Desarrollo de metodología de trabajo altamente organizada y capacidad creativa en situaciones de alta complejidad.',
    ],
    order: 5,
  },
  {
    id: 'exp06',
    company: 'AMD Telemedicine',
    role: 'International Account Manager',
    location: 'Lowell, MA, EE. UU.',
    startDate: '2000',
    endDate: '2005',
    description:
      'Ventas y marketing internacional de sistemas de telemedicina. Contacto con organizaciones internacionales de salud, autoridades locales e integradores de sistemas en múltiples países. Asesor de confianza para clientes gubernamentales y del sector salud a nivel mundial.',
    achievements: [
      'Implementación de un sistema completo de telemedicina en la República de Sudán, cuatro ciudades regionales y la capital Jartum, coordinando todos los actores desde organismos de salud internacionales hasta autoridades locales.',
      'Gestión de proyectos de telemedicina en múltiples países con análisis de valor financiero y social de cada proyecto.',
      'Seguimiento completo de oportunidades comerciales desde su concepción hasta la implementación final en campo.',
    ],
    order: 6,
  },
  {
    id: 'exp07',
    company: 'Diseño Informático Ltda.',
    role: 'Socio Senior — Consultor en Sistemas de Control',
    location: 'Bogotá, Colombia',
    startDate: '1992',
    endDate: '1996',
    description:
      'Liderazgo en la introducción de National Instruments a Colombia como revendedor de valor agregado de sistemas de Auto ID y automatización. Establecimiento y gestión de equipos de ventas y soporte técnico.',
    achievements: [
      'Construcción de una red de clientes desde las universidades más prestigiosas hasta instituciones de gobierno y las principales empresas manufactureras del país.',
      'Gestión de la expansión rápida y exitosa de la marca en el mercado colombiano, con equipos de ventas y soporte.',
    ],
    order: 7,
  },
];
