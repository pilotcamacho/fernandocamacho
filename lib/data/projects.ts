export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  tags: string[];
  order: number;
}

export const projects: ProjectItem[] = [
  {
    id: 'p01',
    title: 'Sistema de asignación óptima de profesores',
    company: 'Open English',
    date: '2020',
    description:
      'Modelo de optimización para la asignación de profesores a clases en vivo, maximizando la compatibilidad pedagógica y la eficiencia operacional. Lideré un equipo multidisciplinario que logró una reducción de costos del 30% mediante simulación de escenarios y un ciclo de mejora continua basado en KPIs internos.',
    tags: ['EdTech', 'Optimización', 'Python', 'Machine Learning'],
    order: 1,
  },
  {
    id: 'p02',
    title: 'Modelo estadístico de reserva de clases',
    company: 'Open English',
    date: '2018',
    description:
      'Sistema predictivo para anticipar la demanda de clases en vivo, optimizando la disponibilidad de profesores y reduciendo tiempos de espera de estudiantes. Integra series temporales con variables conductuales del estudiante.',
    tags: ['EdTech', 'Estadística', 'Python', 'MSSQL'],
    order: 2,
  },
  {
    id: 'p03',
    title: 'Predicción de resultados académicos',
    company: 'Universidad de la Sabana',
    date: '2017',
    description:
      'Modelo de machine learning para predecir el rendimiento de estudiantes en pruebas estandarizadas, permitiendo intervención temprana personalizada. Desarrollado con Human Centered Design en estrecha colaboración con docentes y directivos.',
    tags: ['Education Analytics', 'Machine Learning', 'Big Data'],
    order: 3,
  },
  {
    id: 'p04',
    title: 'Identificación de usuarios por cadencia de escritura',
    company: 'Universidad de la Sabana',
    date: '2017',
    description:
      'Sistema biométrico de identificación mediante el análisis del patrón de escritura en teclado (keystroke dynamics) para autenticación de usuarios en entornos educativos digitales.',
    tags: ['Biometría', 'Seguridad', 'Machine Learning'],
    order: 4,
  },
  {
    id: 'p05',
    title: 'Plataforma de Education Analytics',
    company: 'Universidad de la Sabana',
    date: '2015',
    description:
      'Plataforma integral de análisis educativo desarrollada con enfoque de Human Centered Design, que integra métricas de rendimiento, comportamiento y engagement de estudiantes, profesores y directivos universitarios.',
    tags: ['Education Analytics', 'HCD', 'Dashboard', 'Big Data'],
    order: 5,
  },
  {
    id: 'p06',
    title: 'Modelos de comportamiento humano con Big Data',
    company: 'Universidad de la Sabana',
    date: '2014',
    description:
      'Investigación aplicada en el desarrollo de modelos conductuales usando grandes volúmenes de datos, aplicados a la gestión de la diversidad organizacional e internacionalización empresarial.',
    tags: ['Big Data', 'Comportamiento Humano', 'Investigación'],
    order: 6,
  },
  {
    id: 'p07',
    title: 'Sistema Long Tail de Marketing SEO',
    company: 'Woobsing S.A.S.',
    date: '2013',
    description:
      'Sistema de marketing digital ganador del Premio Nacional de Innovación Innova 2013 (Innpulsa Colombia). Utiliza técnicas de long tail para optimización en motores de búsqueda con impacto demostrable en los KPIs del cliente, acompañado de un programa de adopción y capacitación continua.',
    tags: ['Marketing Digital', 'SEO', 'Innovación', 'Premio Nacional'],
    order: 7,
  },
  {
    id: 'p08',
    title: 'Herramienta de análisis de neuromarketing',
    company: 'Emoxional S.A.S.',
    date: '2012',
    description:
      'Plataforma de neurociencia aplicada a los negocios para análisis de mercados, ambiente laboral y comportamiento humano. Integra medición emocional y biométrica para apoyar decisiones estratégicas en empresas de múltiples sectores.',
    tags: ['Neurociencia', 'Marketing', 'Comportamiento', 'Biometría'],
    order: 8,
  },
  {
    id: 'p09',
    title: 'Sistema de valoración inmobiliaria',
    company: 'Red I5 S.A.S.',
    date: '2009',
    description:
      'Herramienta de análisis de datos para evaluar precios y demanda en el mercado inmobiliario colombiano. Adoptada por una red de agentes inmobiliarios organizados en equipos de trabajo para promover su uso en el mercado.',
    tags: ['Bienes Raíces', 'Análisis de Datos', 'Colombia'],
    order: 9,
  },
  {
    id: 'p10',
    title: 'Sistema de información — vehículo eléctrico',
    company: 'Eco-Citi S.A.',
    date: '2008',
    description:
      'Sistema de información para el seguimiento y análisis integral del diseño e implementación del vehículo ultraligero, incluyendo optimización de la línea de producción y análisis de desempeño del vehículo.',
    tags: ['Sistemas de Información', 'Vehículo Eléctrico', 'Optimización'],
    order: 10,
  },
  {
    id: 'p11',
    title: 'Diseño de vehículo ultraligero eléctrico',
    company: 'Eco-Citi S.A.',
    date: '2007',
    description:
      'Dirección del proyecto de diseño e implementación de un vehículo urbano ultraligero eléctrico, desde la concepción hasta la producción, con gestión de equipo multidisciplinario y análisis técnico de rendimiento.',
    tags: ['Vehículo Eléctrico', 'Ingeniería', 'Dirección de Proyecto'],
    order: 11,
  },
  {
    id: 'p12',
    title: 'Sistema de telemedicina — República de Sudán',
    company: 'AMD Telemedicine',
    date: '2004',
    description:
      'Implementación de un sistema completo de telemedicina en cuatro ciudades regionales y la capital Jartum. Coordiné con organizaciones internacionales de salud, autoridades locales e integradores de sistemas, viajando a cada sede para supervisar el arranque del proyecto.',
    tags: ['Telemedicina', 'Salud Internacional', 'África', 'Gestión de Proyectos'],
    order: 12,
  },
  {
    id: 'p13',
    title: 'Despliegues internacionales de telemedicina',
    company: 'AMD Telemedicine',
    date: '2002',
    description:
      'Gestión de múltiples proyectos de telemedicina en varios países, conectando sistemas de salud rurales y urbanos con tecnología de diagnóstico remoto avanzada. Desarrollo de relaciones con organizaciones de salud y autoridades gubernamentales.',
    tags: ['Telemedicina', 'Salud', 'Internacional', 'Ventas'],
    order: 13,
  },
  {
    id: 'p14',
    title: 'Modelo de evaluación de telemedicina',
    company: 'Universidad de los Andes',
    date: '1999',
    description:
      'Investigación sobre optimización de recursos técnicos y médicos para la prestación de servicios de salud en comunidades de difícil acceso mediante telemedicina.',
    tags: ['Telemedicina', 'Investigación', 'Salud Rural'],
    order: 14,
  },
  {
    id: 'p15',
    title: 'Análisis estadístico de presión arterial aórtica (PhD)',
    company: 'UNSW — Sydney',
    date: '2003',
    description:
      'Investigación doctoral sobre análisis estadístico de parámetros de presión aórtica central derivados del pulso periférico. Aplicación de análisis de componentes principales y regresión múltiple por pasos para cuantificar riesgos cardiovasculares.',
    tags: ['Investigación', 'Bioingeniería', 'Estadística', 'PhD'],
    order: 15,
  },
  {
    id: 'p16',
    title: 'Prototipo de biorreactor de fibra hueca',
    company: 'UNSW — Sydney',
    date: '1997',
    description:
      'Desarrollo de un prototipo de sistema biorreactor de fibra hueca para aplicaciones de ingeniería de tejidos, como proyecto de Maestría en Ingeniería Biomédica. Primer sistema de este tipo desarrollado en el laboratorio.',
    tags: ['Ingeniería Biomédica', 'Biotecnología', 'Investigación'],
    order: 16,
  },
  {
    id: 'p17',
    title: 'Sistemas de control en planta fabril',
    company: 'Diseño Informático Ltda.',
    date: '1995',
    description:
      'Consultoría e implementación de sistemas de automatización y control en plantas industriales para múltiples empresas manufactureras y gubernamentales líderes de Colombia, como revendedor de valor agregado de sistemas de Auto ID y automatización.',
    tags: ['Automatización Industrial', 'Control', 'Manufacturing'],
    order: 17,
  },
  {
    id: 'p18',
    title: 'Introducción de National Instruments a Colombia',
    company: 'Diseño Informático Ltda.',
    date: '1993',
    description:
      'Liderazgo en la introducción y expansión de National Instruments en Colombia, estableciendo equipos de ventas y soporte técnico. Construimos una red de clientes desde las universidades más prestigiosas hasta instituciones de gobierno y las principales empresas manufactureras del país.',
    tags: ['National Instruments', 'Ventas Técnicas', 'Tecnología'],
    order: 18,
  },
  {
    id: 'p19',
    title: 'Software educativo de control de procesos',
    company: 'Universidad de los Andes',
    date: '1993',
    description:
      'Desarrollo de software educativo para la enseñanza de sistemas de control de procesos industriales, como proyecto de tesis de la Especialización en Automatización de Procesos Industriales. Primero de la clase.',
    tags: ['Educación', 'Control de Procesos', 'Software'],
    order: 19,
  },
  {
    id: 'p20',
    title: 'Desarrollo de equipo Holter',
    company: 'Universidad de los Andes',
    date: '1991',
    description:
      'Diseño e implementación de un equipo Holter para monitorización cardíaca continua ambulatoria, como tesis de grado en Ingeniería Eléctrica y Electrónica. Incluye hardware y software de registro y análisis de señales.',
    tags: ['Ingeniería Biomédica', 'Electrónica', 'Cardiología'],
    order: 20,
  },
];
