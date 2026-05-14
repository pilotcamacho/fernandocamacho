import type { Locale } from './settings';

export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  tags: string[];
  order: number;
}

type BaseProjectItem = Pick<ProjectItem, 'id' | 'company' | 'date' | 'order'>;
type LocalizedProjectItem = Omit<ProjectItem, 'id' | 'company' | 'date' | 'order'>;

const projectsBase: BaseProjectItem[] = [
  { id: 'p01', company: 'Open English',                order: 1,  date: '2020' },
  { id: 'p02', company: 'Open English',                order: 2,  date: '2018' },
  { id: 'p03', company: 'Universidad de la Sabana',    order: 3,  date: '2017' },
  { id: 'p04', company: 'Universidad de la Sabana',    order: 4,  date: '2017' },
  { id: 'p05', company: 'Universidad de la Sabana',    order: 5,  date: '2015' },
  { id: 'p06', company: 'Universidad de la Sabana',    order: 6,  date: '2014' },
  { id: 'p07', company: 'Woobsing S.A.S.',             order: 7,  date: '2013' },
  { id: 'p08', company: 'Emoxional S.A.S.',            order: 8,  date: '2012' },
  { id: 'p09', company: 'Red I5 S.A.S.',               order: 9,  date: '2009' },
  { id: 'p10', company: 'Eco-Citi S.A.',               order: 10, date: '2008' },
  { id: 'p11', company: 'Eco-Citi S.A.',               order: 11, date: '2007' },
  { id: 'p12', company: 'AMD Telemedicine',            order: 12, date: '2004' },
  { id: 'p13', company: 'AMD Telemedicine',            order: 13, date: '2002' },
  { id: 'p14', company: 'Universidad de los Andes',   order: 14, date: '1999' },
  { id: 'p15', company: 'UNSW — Sydney',               order: 15, date: '2003' },
  { id: 'p16', company: 'UNSW — Sydney',               order: 16, date: '1997' },
  { id: 'p17', company: 'Diseño Informático Ltda.',    order: 17, date: '1995' },
  { id: 'p18', company: 'Diseño Informático Ltda.',    order: 18, date: '1993' },
  { id: 'p19', company: 'Universidad de los Andes',   order: 19, date: '1993' },
  { id: 'p20', company: 'Universidad de los Andes',   order: 20, date: '1991' },
];

const localized: Record<Locale, Record<string, LocalizedProjectItem>> = {

  // ── Español ─────────────────────────────────────────────────────────────────
  es: {
    p01: {
      title: 'Sistema de asignación óptima de profesores',
      description: 'Modelo de optimización para la asignación de profesores a clases en vivo, maximizando la compatibilidad pedagógica y la eficiencia operacional. Lideré un equipo multidisciplinario que logró una reducción de costos del 30% mediante simulación de escenarios y un ciclo de mejora continua basado en KPIs internos.',
      tags: ['EdTech', 'Optimización', 'Python', 'Machine Learning'],
    },
    p02: {
      title: 'Modelo estadístico de reserva de clases',
      description: 'Sistema predictivo para anticipar la demanda de clases en vivo, optimizando la disponibilidad de profesores y reduciendo tiempos de espera de estudiantes. Integra series temporales con variables conductuales del estudiante.',
      tags: ['EdTech', 'Estadística', 'Python', 'MSSQL'],
    },
    p03: {
      title: 'Predicción de resultados académicos',
      description: 'Modelo de machine learning para predecir el rendimiento de estudiantes en pruebas estandarizadas, permitiendo intervención temprana personalizada. Desarrollado con Human Centered Design en estrecha colaboración con docentes y directivos.',
      tags: ['Education Analytics', 'Machine Learning', 'Big Data'],
    },
    p04: {
      title: 'Identificación de usuarios por cadencia de escritura',
      description: 'Sistema biométrico de identificación mediante el análisis del patrón de escritura en teclado (keystroke dynamics) para autenticación de usuarios en entornos educativos digitales.',
      tags: ['Biometría', 'Seguridad', 'Machine Learning'],
    },
    p05: {
      title: 'Plataforma de Education Analytics',
      description: 'Plataforma integral de análisis educativo desarrollada con enfoque de Human Centered Design, que integra métricas de rendimiento, comportamiento y engagement de estudiantes, profesores y directivos universitarios.',
      tags: ['Education Analytics', 'HCD', 'Dashboard', 'Big Data'],
    },
    p06: {
      title: 'Modelos de comportamiento humano con Big Data',
      description: 'Investigación aplicada en el desarrollo de modelos conductuales usando grandes volúmenes de datos, aplicados a la gestión de la diversidad organizacional e internacionalización empresarial.',
      tags: ['Big Data', 'Comportamiento Humano', 'Investigación'],
    },
    p07: {
      title: 'Sistema Long Tail de Marketing SEO',
      description: 'Sistema de marketing digital ganador del Premio Nacional de Innovación Innova 2013 (Innpulsa Colombia). Utiliza técnicas de long tail para optimización en motores de búsqueda con impacto demostrable en los KPIs del cliente, acompañado de un programa de adopción y capacitación continua.',
      tags: ['Marketing Digital', 'SEO', 'Innovación', 'Premio Nacional'],
    },
    p08: {
      title: 'Herramienta de análisis de neuromarketing',
      description: 'Plataforma de neurociencia aplicada a los negocios para análisis de mercados, ambiente laboral y comportamiento humano. Integra medición emocional y biométrica para apoyar decisiones estratégicas en empresas de múltiples sectores.',
      tags: ['Neurociencia', 'Marketing', 'Comportamiento', 'Biometría'],
    },
    p09: {
      title: 'Sistema de valoración inmobiliaria',
      description: 'Herramienta de análisis de datos para evaluar precios y demanda en el mercado inmobiliario colombiano. Adoptada por una red de agentes inmobiliarios organizados en equipos de trabajo para promover su uso en el mercado.',
      tags: ['Bienes Raíces', 'Análisis de Datos', 'Colombia'],
    },
    p10: {
      title: 'Sistema de información — vehículo eléctrico',
      description: 'Sistema de información para el seguimiento y análisis integral del diseño e implementación del vehículo ultraligero, incluyendo optimización de la línea de producción y análisis de desempeño del vehículo.',
      tags: ['Sistemas de Información', 'Vehículo Eléctrico', 'Optimización'],
    },
    p11: {
      title: 'Diseño de vehículo ultraligero eléctrico',
      description: 'Dirección del proyecto de diseño e implementación de un vehículo urbano ultraligero eléctrico, desde la concepción hasta la producción, con gestión de equipo multidisciplinario y análisis técnico de rendimiento.',
      tags: ['Vehículo Eléctrico', 'Ingeniería', 'Dirección de Proyecto'],
    },
    p12: {
      title: 'Sistema de telemedicina — República de Sudán',
      description: 'Implementación de un sistema completo de telemedicina en cuatro ciudades regionales y la capital Jartum. Coordiné con organizaciones internacionales de salud, autoridades locales e integradores de sistemas, viajando a cada sede para supervisar el arranque del proyecto.',
      tags: ['Telemedicina', 'Salud Internacional', 'África', 'Gestión de Proyectos'],
    },
    p13: {
      title: 'Despliegues internacionales de telemedicina',
      description: 'Gestión de múltiples proyectos de telemedicina en varios países, conectando sistemas de salud rurales y urbanos con tecnología de diagnóstico remoto avanzada. Desarrollo de relaciones con organizaciones de salud y autoridades gubernamentales.',
      tags: ['Telemedicina', 'Salud', 'Internacional', 'Ventas'],
    },
    p14: {
      title: 'Modelo de evaluación de telemedicina',
      description: 'Investigación sobre optimización de recursos técnicos y médicos para la prestación de servicios de salud en comunidades de difícil acceso mediante telemedicina.',
      tags: ['Telemedicina', 'Investigación', 'Salud Rural'],
    },
    p15: {
      title: 'Análisis estadístico de presión arterial aórtica (PhD)',
      description: 'Investigación doctoral sobre análisis estadístico de parámetros de presión aórtica central derivados del pulso periférico. Aplicación de análisis de componentes principales y regresión múltiple por pasos para cuantificar riesgos cardiovasculares.',
      tags: ['Investigación', 'Bioingeniería', 'Estadística', 'PhD'],
    },
    p16: {
      title: 'Prototipo de biorreactor de fibra hueca',
      description: 'Desarrollo de un prototipo de sistema biorreactor de fibra hueca para aplicaciones de ingeniería de tejidos, como proyecto de Maestría en Ingeniería Biomédica. Primer sistema de este tipo desarrollado en el laboratorio.',
      tags: ['Ingeniería Biomédica', 'Biotecnología', 'Investigación'],
    },
    p17: {
      title: 'Sistemas de control en planta fabril',
      description: 'Consultoría e implementación de sistemas de automatización y control en plantas industriales para múltiples empresas manufactureras y gubernamentales líderes de Colombia, como revendedor de valor agregado de sistemas de Auto ID y automatización.',
      tags: ['Automatización Industrial', 'Control', 'Manufacturing'],
    },
    p18: {
      title: 'Introducción de National Instruments a Colombia',
      description: 'Liderazgo en la introducción y expansión de National Instruments en Colombia, estableciendo equipos de ventas y soporte técnico. Construimos una red de clientes desde las universidades más prestigiosas hasta instituciones de gobierno y las principales empresas manufactureras del país.',
      tags: ['National Instruments', 'Ventas Técnicas', 'Tecnología'],
    },
    p19: {
      title: 'Software educativo de control de procesos',
      description: 'Desarrollo de software educativo para la enseñanza de sistemas de control de procesos industriales, como proyecto de tesis de la Especialización en Automatización de Procesos Industriales. Primero de la clase.',
      tags: ['Educación', 'Control de Procesos', 'Software'],
    },
    p20: {
      title: 'Desarrollo de equipo Holter',
      description: 'Diseño e implementación de un equipo Holter para monitorización cardíaca continua ambulatoria, como tesis de grado en Ingeniería Eléctrica y Electrónica. Incluye hardware y software de registro y análisis de señales.',
      tags: ['Ingeniería Biomédica', 'Electrónica', 'Cardiología'],
    },
  },

  // ── English ──────────────────────────────────────────────────────────────────
  en: {
    p01: {
      title: 'Optimal teacher allocation system',
      description: 'Optimisation model for assigning teachers to live classes, maximising pedagogical compatibility and operational efficiency. I led a multidisciplinary team that achieved a 30% cost reduction through scenario simulation and a continuous improvement cycle based on internal KPIs.',
      tags: ['EdTech', 'Optimisation', 'Python', 'Machine Learning'],
    },
    p02: {
      title: 'Statistical class reservation model',
      description: 'Predictive system for anticipating live class demand, optimising teacher availability and reducing student waiting times. Integrates time series with student behavioural variables.',
      tags: ['EdTech', 'Statistics', 'Python', 'MSSQL'],
    },
    p03: {
      title: 'Academic outcome prediction',
      description: 'Machine learning model to predict student performance in standardised tests, enabling personalised early intervention. Developed with Human Centred Design in close collaboration with teachers and university management.',
      tags: ['Education Analytics', 'Machine Learning', 'Big Data'],
    },
    p04: {
      title: 'Keystroke dynamics user identification',
      description: 'Biometric identification system through keyboard typing pattern analysis (keystroke dynamics) for user authentication in digital educational environments.',
      tags: ['Biometrics', 'Security', 'Machine Learning'],
    },
    p05: {
      title: 'Education Analytics platform',
      description: 'Comprehensive educational analytics platform developed with a Human Centred Design approach, integrating performance, behaviour and engagement metrics for students, teachers and university management.',
      tags: ['Education Analytics', 'HCD', 'Dashboard', 'Big Data'],
    },
    p06: {
      title: 'Human behaviour models with Big Data',
      description: 'Applied research in the development of behavioural models using large volumes of data, applied to organisational diversity management and business internationalisation.',
      tags: ['Big Data', 'Human Behaviour', 'Research'],
    },
    p07: {
      title: 'Long Tail SEO Marketing System',
      description: 'Digital marketing system winner of the National Innovation Award Innova 2013 (Innpulsa Colombia). Uses long tail techniques for search engine optimisation with demonstrable impact on client KPIs, accompanied by an adoption and continuous training programme.',
      tags: ['Digital Marketing', 'SEO', 'Innovation', 'National Award'],
    },
    p08: {
      title: 'Neuromarketing analysis tool',
      description: 'Neuroscience platform applied to business for market analysis, work environment and human behaviour. Integrates emotional and biometric measurement to support strategic decisions in companies across multiple sectors.',
      tags: ['Neuroscience', 'Marketing', 'Behaviour', 'Biometrics'],
    },
    p09: {
      title: 'Real estate valuation system',
      description: 'Data analysis tool for evaluating prices and demand in the Colombian real estate market. Adopted by a network of real estate agents organised in work teams to promote its use in the market.',
      tags: ['Real Estate', 'Data Analysis', 'Colombia'],
    },
    p10: {
      title: 'Information system — electric vehicle',
      description: 'Information system for comprehensive tracking and analysis of the design and implementation of the ultra-light vehicle, including production line optimisation and vehicle performance analysis.',
      tags: ['Information Systems', 'Electric Vehicle', 'Optimisation'],
    },
    p11: {
      title: 'Ultra-light electric vehicle design',
      description: 'Direction of the design and implementation project of an ultra-light urban electric vehicle, from concept to production, with multidisciplinary team management and technical performance analysis.',
      tags: ['Electric Vehicle', 'Engineering', 'Project Management'],
    },
    p12: {
      title: 'Telemedicine system — Republic of Sudan',
      description: 'Implementation of a complete telemedicine system in four regional cities and the capital Khartoum. I coordinated with international health organisations, local authorities and system integrators, travelling to each site to oversee project start-up.',
      tags: ['Telemedicine', 'International Health', 'Africa', 'Project Management'],
    },
    p13: {
      title: 'International telemedicine deployments',
      description: 'Management of multiple telemedicine projects across several countries, connecting rural and urban health systems with advanced remote diagnostic technology. Development of relationships with health organisations and government authorities.',
      tags: ['Telemedicine', 'Health', 'International', 'Sales'],
    },
    p14: {
      title: 'Telemedicine evaluation model',
      description: 'Research on optimisation of technical and medical resources for the provision of health services in hard-to-reach communities through telemedicine.',
      tags: ['Telemedicine', 'Research', 'Rural Health'],
    },
    p15: {
      title: 'Statistical analysis of aortic blood pressure (PhD)',
      description: 'Doctoral research on statistical analysis of central aortic pressure parameters derived from the peripheral pulse. Application of principal component analysis and stepwise multiple regression to quantify cardiovascular risks.',
      tags: ['Research', 'Bioengineering', 'Statistics', 'PhD'],
    },
    p16: {
      title: 'Hollow fibre bioreactor prototype',
      description: 'Development of a hollow fibre bioreactor system prototype for tissue engineering applications, as a Master\'s project in Biomedical Engineering. First system of this type developed in the laboratory.',
      tags: ['Biomedical Engineering', 'Biotechnology', 'Research'],
    },
    p17: {
      title: 'Control systems in manufacturing plants',
      description: 'Consulting and implementation of automation and control systems in industrial plants for multiple leading Colombian manufacturing and government companies, as a value-added reseller of Auto ID and automation systems.',
      tags: ['Industrial Automation', 'Control Systems', 'Manufacturing'],
    },
    p18: {
      title: 'Introduction of National Instruments to Colombia',
      description: 'Leadership in introducing and expanding National Instruments in Colombia, establishing sales and technical support teams. We built a client network from the most prestigious universities to government institutions and the country\'s leading manufacturing companies.',
      tags: ['National Instruments', 'Technical Sales', 'Technology'],
    },
    p19: {
      title: 'Process control educational software',
      description: 'Development of educational software for teaching industrial process control systems, as a thesis project for the Graduate Studies in Industrial Process Automation. First in class.',
      tags: ['Education', 'Process Control', 'Software'],
    },
    p20: {
      title: 'Holter equipment development',
      description: 'Design and implementation of a Holter device for continuous ambulatory cardiac monitoring, as a degree thesis in Electrical and Electronic Engineering. Includes hardware and software for signal recording and analysis.',
      tags: ['Biomedical Engineering', 'Electronics', 'Cardiology'],
    },
  },

  // ── Deutsch ──────────────────────────────────────────────────────────────────
  de: {
    p01: {
      title: 'Optimales Lehrerzuteilungssystem',
      description: 'Optimierungsmodell für die Zuteilung von Lehrern zu Live-Kursen, das pädagogische Kompatibilität und betriebliche Effizienz maximiert. Ich leitete ein multidisziplinäres Team, das durch Szenariosimulation und einen kontinuierlichen Verbesserungszyklus auf Basis interner KPIs eine Kostensenkung von 30 % erzielte.',
      tags: ['EdTech', 'Optimierung', 'Python', 'Machine Learning'],
    },
    p02: {
      title: 'Statistisches Kursreservierungsmodell',
      description: 'Prädiktives System zur Antizipation der Live-Kursnachfrage, Optimierung der Lehrerverfügbarkeit und Reduzierung der Wartezeiten der Studierenden. Integriert Zeitreihen mit verhaltensbezogenen Variablen der Studierenden.',
      tags: ['EdTech', 'Statistik', 'Python', 'MSSQL'],
    },
    p03: {
      title: 'Vorhersage akademischer Leistungen',
      description: 'Machine-Learning-Modell zur Vorhersage von Schülerleistungen in standardisierten Tests, das personalisierte Frühintervention ermöglicht. Entwickelt mit Human Centred Design in enger Zusammenarbeit mit Lehrkräften und Universitätsleitung.',
      tags: ['Education Analytics', 'Machine Learning', 'Big Data'],
    },
    p04: {
      title: 'Benutzeridentifikation durch Tastenanschlagsdynamik',
      description: 'Biometrisches Identifikationssystem durch Analyse des Tastaturschreibmusters (Keystroke Dynamics) zur Benutzerauthentifizierung in digitalen Bildungsumgebungen.',
      tags: ['Biometrie', 'Sicherheit', 'Machine Learning'],
    },
    p05: {
      title: 'Education-Analytics-Plattform',
      description: 'Umfassende Bildungsanalyseplattform, entwickelt mit einem Human-Centred-Design-Ansatz, die Leistungs-, Verhaltens- und Engagement-Metriken für Studierende, Lehrkräfte und Universitätsleitung integriert.',
      tags: ['Education Analytics', 'HCD', 'Dashboard', 'Big Data'],
    },
    p06: {
      title: 'Menschliche Verhaltensmodelle mit Big Data',
      description: 'Angewandte Forschung zur Entwicklung von Verhaltensmodellen mit großen Datenmengen, angewandt auf organisationales Diversitätsmanagement und Unternehmensinternationalisierung.',
      tags: ['Big Data', 'Menschliches Verhalten', 'Forschung'],
    },
    p07: {
      title: 'Long-Tail-SEO-Marketingsystem',
      description: 'Digitales Marketingsystem, Gewinner des Nationalen Innovationspreises Innova 2013 (Innpulsa Colombia). Nutzt Long-Tail-Techniken für die Suchmaschinenoptimierung mit messbarem Einfluss auf die KPIs des Kunden, begleitet von einem Adoptions- und kontinuierlichen Schulungsprogramm.',
      tags: ['Digitales Marketing', 'SEO', 'Innovation', 'Nationaler Preis'],
    },
    p08: {
      title: 'Neuromarketing-Analysetool',
      description: 'Neurowissenschaftsplattform für Unternehmen zur Marktanalyse, Arbeitsumgebung und menschlichem Verhalten. Integriert emotionale und biometrische Messungen zur Unterstützung strategischer Entscheidungen in Unternehmen verschiedener Branchen.',
      tags: ['Neurowissenschaft', 'Marketing', 'Verhalten', 'Biometrie'],
    },
    p09: {
      title: 'Immobilienbewertungssystem',
      description: 'Datenanalysetool zur Bewertung von Preisen und Nachfrage auf dem kolumbianischen Immobilienmarkt. Von einem Netzwerk von Immobilienmaklern übernommen, die in Arbeitsteams organisiert sind.',
      tags: ['Immobilien', 'Datenanalyse', 'Kolumbien'],
    },
    p10: {
      title: 'Informationssystem — Elektrofahrzeug',
      description: 'Informationssystem für das umfassende Tracking und die Analyse des Designs und der Implementierung des Ultraleichtfahrzeugs, einschließlich Produktionslinienoptimierung und Fahrzeugleistungsanalyse.',
      tags: ['Informationssysteme', 'Elektrofahrzeug', 'Optimierung'],
    },
    p11: {
      title: 'Design eines ultraleichten Elektrofahrzeugs',
      description: 'Leitung des Design- und Implementierungsprojekts eines ultraleichten städtischen Elektrofahrzeugs, von der Konzeption bis zur Produktion, mit Management eines multidisziplinären Teams und technischer Leistungsanalyse.',
      tags: ['Elektrofahrzeug', 'Ingenieurwesen', 'Projektmanagement'],
    },
    p12: {
      title: 'Telemedizinsystem — Republik Sudan',
      description: 'Implementierung eines vollständigen Telemedizinsystems in vier regionalen Städten und der Hauptstadt Khartum. Ich koordinierte mit internationalen Gesundheitsorganisationen, lokalen Behörden und Systemintegratoren und reiste zu jedem Standort, um den Projektstart zu überwachen.',
      tags: ['Telemedizin', 'Internationale Gesundheit', 'Afrika', 'Projektmanagement'],
    },
    p13: {
      title: 'Internationale Telemedizin-Implementierungen',
      description: 'Management mehrerer Telemedizinprojekte in verschiedenen Ländern, Verbindung ländlicher und städtischer Gesundheitssysteme mit fortschrittlicher Ferndiagnosetechnologie. Entwicklung von Beziehungen zu Gesundheitsorganisationen und Regierungsbehörden.',
      tags: ['Telemedizin', 'Gesundheit', 'International', 'Vertrieb'],
    },
    p14: {
      title: 'Telemedizin-Bewertungsmodell',
      description: 'Forschung zur Optimierung technischer und medizinischer Ressourcen für die Bereitstellung von Gesundheitsdienstleistungen in schwer zugänglichen Gemeinschaften durch Telemedizin.',
      tags: ['Telemedizin', 'Forschung', 'Ländliche Gesundheit'],
    },
    p15: {
      title: 'Statistische Analyse des aortalen Blutdrucks (Promotion)',
      description: 'Promotionsforschung über die statistische Analyse zentraler Aortendruck-Parameter, abgeleitet aus dem peripheren Puls. Anwendung von Hauptkomponentenanalyse und schrittweiser multipler Regression zur Quantifizierung kardiovaskulärer Risiken.',
      tags: ['Forschung', 'Bioingenieurwesen', 'Statistik', 'Promotion'],
    },
    p16: {
      title: 'Prototyp eines Hohlfaser-Bioreaktors',
      description: 'Entwicklung eines Hohlfaser-Bioreaktor-System-Prototyps für Tissue-Engineering-Anwendungen als Masterprojekt in Biomedizintechnik. Erstes System dieser Art, das im Labor entwickelt wurde.',
      tags: ['Biomedizintechnik', 'Biotechnologie', 'Forschung'],
    },
    p17: {
      title: 'Steuerungssysteme in Fertigungsanlagen',
      description: 'Beratung und Implementierung von Automatisierungs- und Steuerungssystemen in Industrieanlagen für mehrere führende kolumbianische Fertigungs- und Regierungsunternehmen als Value-Added-Reseller für Auto-ID- und Automatisierungssysteme.',
      tags: ['Industrieautomatisierung', 'Steuerungssysteme', 'Fertigung'],
    },
    p18: {
      title: 'Einführung von National Instruments in Kolumbien',
      description: 'Führung bei der Einführung und Expansion von National Instruments in Kolumbien, Aufbau von Vertriebs- und technischen Supportteams. Wir bauten ein Kundennetzwerk von den renommiertesten Universitäten bis zu Regierungsinstitutionen und den führenden Fertigungsunternehmen des Landes auf.',
      tags: ['National Instruments', 'Technischer Vertrieb', 'Technologie'],
    },
    p19: {
      title: 'Pädagogische Software für Prozesssteuerung',
      description: 'Entwicklung von Lernsoftware für den Unterricht in industriellen Prozesssteuerungssystemen als Abschlussarbeit des Aufbaustudiums in industrieller Prozessautomatisierung. Klassenbester.',
      tags: ['Bildung', 'Prozesssteuerung', 'Software'],
    },
    p20: {
      title: 'Entwicklung eines Holter-Geräts',
      description: 'Design und Implementierung eines Holter-Geräts für die kontinuierliche ambulante Herzüberwachung als Abschlussarbeit in Elektro- und Elektronikingenieurwesen. Beinhaltet Hardware und Software für Signalaufzeichnung und -analyse.',
      tags: ['Biomedizintechnik', 'Elektronik', 'Kardiologie'],
    },
  },
};

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsBase.map((base) => ({ ...base, ...localized[locale][base.id] }));
}

// Fallback for non-locale contexts
export const projects = projectsBase.map((base) => ({ ...base, ...localized.es[base.id] }));
