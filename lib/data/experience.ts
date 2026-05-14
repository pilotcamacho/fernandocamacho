import type { Locale } from './settings';

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

type BaseExperienceItem = Pick<ExperienceItem, 'id' | 'company' | 'location' | 'order'>;
type LocalizedExperienceItem = Omit<ExperienceItem, 'id' | 'company' | 'location' | 'order'>;

const experienceBase: BaseExperienceItem[] = [
  { id: 'exp01', company: 'Open English',                              location: 'Bogotá, Colombia',   order: 1 },
  { id: 'exp02', company: 'Universidad de la Sabana',                  location: 'Chía, Colombia',     order: 2 },
  { id: 'exp03', company: 'Woobsing S.A.S. / Emoxional S.A.S. / Red I5 S.A.S.', location: 'Bogotá, Colombia', order: 3 },
  { id: 'exp04', company: 'Eco-Citi S.A.',                             location: 'Bogotá, Colombia',   order: 4 },
  { id: 'exp05', company: 'Universidad de los Andes',                  location: 'Bogotá, Colombia',   order: 5 },
  { id: 'exp06', company: 'AMD Telemedicine',                          location: 'Lowell, MA, EE. UU.', order: 6 },
  { id: 'exp07', company: 'Diseño Informático Ltda.',                  location: 'Bogotá, Colombia',   order: 7 },
];

const localized: Record<Locale, Record<string, LocalizedExperienceItem>> = {

  // ── Español ─────────────────────────────────────────────────────────────────
  es: {
    exp01: {
      role: 'Senior Education Data Analyst',
      startDate: 'Enero 2018',
      endDate: null,
      description:
        'Analítica de datos aplicada a la mejora de la calidad, eficiencia y experiencia de aprendizaje. Integración de inteligencia de negocios, educación y comportamiento humano para optimizar el desempeño empresarial y la propuesta de valor al cliente. Trabajo con MSSQL, Java, Python y SpotFire.',
      achievements: [
        'Reducción de costos del 30% mediante la implementación exitosa de un nuevo método de entrega de clases en vivo, liderando un equipo multidisciplinario de simulación de escenarios y ejecución del proyecto.',
        'Creación de un ciclo de mejora continua basado en KPIs internos para la optimización permanente del sistema.',
        'Desarrollo de modelos estadísticos predictivos para la asignación de profesores y reserva de clases.',
      ],
    },
    exp02: {
      role: 'Investigador y Profesor',
      startDate: 'Agosto 2014',
      endDate: 'Diciembre 2017',
      description:
        'Investigación en Human Centered Design y modelos de comportamiento usando Big Data. Profesor en la Maestría en Ingeniería de Gestión, Inteligencia de Negocios y Probabilidad y Estadística.',
      achievements: [
        'Desarrollo de una plataforma de Education Analytics que responde a las necesidades del entorno de aprendizaje complejo, integrando analítica individualizada y retroalimentación basada en métricas.',
        'Trabajo directo con profesores, estudiantes y directivos universitarios para definir requerimientos y plan de adopción.',
        'Investigación en modelos conductuales aplicados a la gestión de la diversidad organizacional e internacionalización.',
      ],
    },
    exp03: {
      role: 'Consultor Independiente e Innovación',
      startDate: 'Junio 2007',
      endDate: 'Abril 2014',
      description:
        'Consultor de innovación y nuevos desarrollos. Dirección de múltiples emprendimientos tecnológicos: sistema Long Tail SEO (Woobsing), herramienta de neuromarketing (Emoxional) y sistema de valoración inmobiliaria (Red I5).',
      achievements: [
        'Premio Nacional de Innovación Innova 2013 por el sistema Long Tail SEO, seleccionado por Innpulsa Colombia.',
        'Desarrollo de herramienta de neurociencia aplicada a negocios (Emoxional), liderando el equipo de ventas y marketing para la adopción de la tecnología por clientes corporativos.',
        'Creación de sistema de valoración inmobiliaria basado en datos para el mercado colombiano, con adopción por una red de agentes inmobiliarios.',
      ],
    },
    exp04: {
      role: 'Director de Proyecto',
      startDate: '2007',
      endDate: '2008',
      description:
        'Dirección del proyecto de diseño e implementación de un vehículo urbano ultraligero eléctrico. Supervisión de la optimización de la línea de producción y análisis del desempeño del vehículo, con implementación de sistema de información para seguimiento integral del proyecto.',
      achievements: [
        'Liderazgo de equipo multidisciplinario de ingeniería para el diseño y desarrollo del vehículo.',
        'Implementación de sistema de información para el seguimiento completo del ciclo de diseño e implementación.',
      ],
    },
    exp05: {
      role: 'Investigador y Docente',
      startDate: '2006',
      endDate: '2007',
      description:
        'Investigación en métodos estadísticos y telemedicina. Docencia en Optimización, Estadística, Instrumentación e Instrumentos Médicos.',
      achievements: [
        'Fortalecimiento del enfoque analítico y basado en datos mediante la experiencia combinada de investigador y docente universitario.',
        'Desarrollo de metodología de trabajo altamente organizada y capacidad creativa en situaciones de alta complejidad.',
      ],
    },
    exp06: {
      role: 'International Account Manager',
      startDate: '2000',
      endDate: '2005',
      description:
        'Ventas y marketing internacional de sistemas de telemedicina. Contacto con organizaciones internacionales de salud, autoridades locales e integradores de sistemas en múltiples países. Asesor de confianza para clientes gubernamentales y del sector salud a nivel mundial.',
      achievements: [
        'Implementación de un sistema completo de telemedicina en la República de Sudán, cuatro ciudades regionales y la capital Jartum, coordinando todos los actores desde organismos de salud internacionales hasta autoridades locales.',
        'Gestión de proyectos de telemedicina en múltiples países con análisis de valor financiero y social de cada proyecto.',
        'Seguimiento completo de oportunidades comerciales desde su concepción hasta la implementación final en campo.',
      ],
    },
    exp07: {
      role: 'Socio Senior — Consultor en Sistemas de Control',
      startDate: '1992',
      endDate: '1996',
      description:
        'Liderazgo en la introducción de National Instruments a Colombia como revendedor de valor agregado de sistemas de Auto ID y automatización. Establecimiento y gestión de equipos de ventas y soporte técnico.',
      achievements: [
        'Construcción de una red de clientes desde las universidades más prestigiosas hasta instituciones de gobierno y las principales empresas manufactureras del país.',
        'Gestión de la expansión rápida y exitosa de la marca en el mercado colombiano, con equipos de ventas y soporte.',
      ],
    },
  },

  // ── English ──────────────────────────────────────────────────────────────────
  en: {
    exp01: {
      role: 'Senior Education Data Analyst',
      startDate: 'January 2018',
      endDate: null,
      description:
        'Data analytics applied to improving quality, efficiency and the learning experience. Integration of business intelligence, education and human behaviour to optimise business performance and the customer value proposition. Working with MSSQL, Java, Python and SpotFire.',
      achievements: [
        '30% cost reduction through the successful implementation of a new live-class delivery method, leading a multidisciplinary scenario-simulation and project-execution team.',
        'Creation of a continuous improvement cycle based on internal KPIs for permanent system optimisation.',
        'Development of predictive statistical models for teacher allocation and class reservation.',
      ],
    },
    exp02: {
      role: 'Researcher and Professor',
      startDate: 'August 2014',
      endDate: 'December 2017',
      description:
        'Research in Human Centred Design and behaviour models using Big Data. Professor in the Master\'s programmes in Management Engineering, Business Intelligence, and Probability & Statistics.',
      achievements: [
        'Development of an Education Analytics platform responding to the needs of a complex learning environment, integrating individualised analytics and metrics-based feedback.',
        'Direct collaboration with professors, students and university management to define requirements and an adoption plan.',
        'Research in behavioural models applied to organisational diversity management and business internationalisation.',
      ],
    },
    exp03: {
      role: 'Independent Consultant & Innovation',
      startDate: 'June 2007',
      endDate: 'April 2014',
      description:
        'Innovation consultant and new ventures director. Leadership of multiple technology start-ups: Long Tail SEO system (Woobsing), neuromarketing tool (Emoxional) and real estate valuation system (Red I5).',
      achievements: [
        'National Innovation Award Innova 2013 for the Long Tail SEO system, selected by Innpulsa Colombia.',
        'Development of a neuroscience tool applied to business (Emoxional), leading the sales and marketing team for corporate client adoption of the technology.',
        'Creation of a data-driven real estate valuation system for the Colombian market, adopted by a network of real estate agents.',
      ],
    },
    exp04: {
      role: 'Project Director',
      startDate: '2007',
      endDate: '2008',
      description:
        'Direction of the design and implementation project of an ultra-light urban electric vehicle. Supervision of production line optimisation and vehicle performance analysis, with implementation of an information system for comprehensive project tracking.',
      achievements: [
        'Leadership of a multidisciplinary engineering team for vehicle design and development.',
        'Implementation of an information system for complete tracking of the design and implementation cycle.',
      ],
    },
    exp05: {
      role: 'Researcher and Lecturer',
      startDate: '2006',
      endDate: '2007',
      description:
        'Research in statistical methods and telemedicine. Teaching in Optimisation, Statistics, Instrumentation and Medical Instruments.',
      achievements: [
        'Strengthening of the analytical and data-driven approach through the combined experience of researcher and university lecturer.',
        'Development of a highly organised working methodology and creative capacity in highly complex situations.',
      ],
    },
    exp06: {
      role: 'International Account Manager',
      startDate: '2000',
      endDate: '2005',
      description:
        'International sales and marketing of telemedicine systems. Contact with international health organisations, local authorities and system integrators across multiple countries. Trusted advisor to governmental and healthcare sector clients worldwide.',
      achievements: [
        'Implementation of a complete telemedicine system in the Republic of Sudan — four regional cities and the capital Khartoum — coordinating all stakeholders from international health bodies to local authorities.',
        'Management of telemedicine projects in multiple countries with financial and social value analysis for each project.',
        'Complete tracking of commercial opportunities from inception to final field implementation.',
      ],
    },
    exp07: {
      role: 'Senior Partner — Control Systems Consultant',
      startDate: '1992',
      endDate: '1996',
      description:
        'Leadership in introducing National Instruments to Colombia as a value-added reseller of Auto ID and automation systems. Establishment and management of sales and technical support teams.',
      achievements: [
        'Building a client network ranging from the most prestigious universities to government institutions and the country\'s leading manufacturing companies.',
        'Management of the rapid and successful expansion of the brand in the Colombian market, with sales and support teams.',
      ],
    },
  },

  // ── Deutsch ──────────────────────────────────────────────────────────────────
  de: {
    exp01: {
      role: 'Senior Education Data Analyst',
      startDate: 'Januar 2018',
      endDate: null,
      description:
        'Datenanalyse zur Verbesserung von Qualität, Effizienz und Lernerfahrung. Integration von Business Intelligence, Bildung und menschlichem Verhalten zur Optimierung der Unternehmensleistung und des Kundenwertangebots. Arbeit mit MSSQL, Java, Python und SpotFire.',
      achievements: [
        '30 % Kostensenkung durch die erfolgreiche Implementierung einer neuen Methode zur Live-Unterrichtslieferung, Leitung eines multidisziplinären Teams für Szenariosimulation und Projektdurchführung.',
        'Erstellung eines kontinuierlichen Verbesserungszyklus auf Basis interner KPIs zur dauerhaften Systemoptimierung.',
        'Entwicklung prädiktiver statistischer Modelle für die Lehrerzuteilung und Kursreservierung.',
      ],
    },
    exp02: {
      role: 'Forscher und Dozent',
      startDate: 'August 2014',
      endDate: 'Dezember 2017',
      description:
        'Forschung in Human Centred Design und Verhaltensmodellen mit Big Data. Dozent in den Masterstudiengängen Managementingenieurwesen, Business Intelligence sowie Wahrscheinlichkeit und Statistik.',
      achievements: [
        'Entwicklung einer Education-Analytics-Plattform, die auf die Anforderungen einer komplexen Lernumgebung eingeht und individualisierte Analytik sowie metrikbasiertes Feedback integriert.',
        'Direkte Zusammenarbeit mit Dozenten, Studierenden und Universitätsleitung zur Definition von Anforderungen und Adoptionsplan.',
        'Forschung in Verhaltensmodellen angewandt auf organisationales Diversitätsmanagement und Unternehmensinternationalisierung.',
      ],
    },
    exp03: {
      role: 'Selbstständiger Berater & Innovation',
      startDate: 'Juni 2007',
      endDate: 'April 2014',
      description:
        'Innovationsberater und Leiter neuer Entwicklungen. Leitung mehrerer Technologie-Start-ups: Long-Tail-SEO-System (Woobsing), Neuromarketing-Tool (Emoxional) und Immobilienbewertungssystem (Red I5).',
      achievements: [
        'Nationaler Innovationspreis Innova 2013 für das Long-Tail-SEO-System, ausgewählt von Innpulsa Colombia.',
        'Entwicklung eines Neurowissenschafts-Tools für Unternehmen (Emoxional), Leitung des Vertriebs- und Marketingteams für die Adoption durch Unternehmenskunden.',
        'Erstellung eines datengetriebenen Immobilienbewertungssystems für den kolumbianischen Markt, das von einem Netzwerk von Immobilienmaklern übernommen wurde.',
      ],
    },
    exp04: {
      role: 'Projektleiter',
      startDate: '2007',
      endDate: '2008',
      description:
        'Leitung des Design- und Implementierungsprojekts eines ultraleichten städtischen Elektrofahrzeugs. Überwachung der Produktionslinienoptimierung und Fahrzeugleistungsanalyse, mit Implementierung eines Informationssystems für das umfassende Projekttracking.',
      achievements: [
        'Leitung eines multidisziplinären Ingenieurteams für Fahrzeugdesign und -entwicklung.',
        'Implementierung eines Informationssystems für das vollständige Tracking des Design- und Implementierungszyklus.',
      ],
    },
    exp05: {
      role: 'Forscher und Dozent',
      startDate: '2006',
      endDate: '2007',
      description:
        'Forschung in statistischen Methoden und Telemedizin. Lehrtätigkeit in Optimierung, Statistik, Instrumentierung und medizinischen Geräten.',
      achievements: [
        'Stärkung des analytischen und datengetriebenen Ansatzes durch die kombinierte Erfahrung als Forscher und Universitätsdozent.',
        'Entwicklung einer hochorganisierten Arbeitsmethodik und kreativer Kapazität in hochkomplexen Situationen.',
      ],
    },
    exp06: {
      role: 'International Account Manager',
      startDate: '2000',
      endDate: '2005',
      description:
        'Internationaler Vertrieb und Marketing von Telemedizinsystemen. Kontakt mit internationalen Gesundheitsorganisationen, lokalen Behörden und Systemintegratoren in mehreren Ländern. Vertrauensberater für staatliche und Gesundheitssektor-Kunden weltweit.',
      achievements: [
        'Implementierung eines vollständigen Telemedizinsystems in der Republik Sudan — vier regionale Städte und die Hauptstadt Khartum — mit Koordination aller Akteure von internationalen Gesundheitsbehörden bis zu lokalen Behörden.',
        'Management von Telemedizinprojekten in mehreren Ländern mit Finanz- und Sozialwertanalyse für jedes Projekt.',
        'Vollständiges Tracking von Geschäftsmöglichkeiten von der Konzeption bis zur endgültigen Feldumsetzung.',
      ],
    },
    exp07: {
      role: 'Seniorpartner — Berater für Steuerungssysteme',
      startDate: '1992',
      endDate: '1996',
      description:
        'Führung bei der Einführung von National Instruments in Kolumbien als Value-Added-Reseller für Auto-ID- und Automatisierungssysteme. Aufbau und Leitung von Vertriebs- und technischen Supportteams.',
      achievements: [
        'Aufbau eines Kundennetzwerks von den renommiertesten Universitäten bis zu Regierungsinstitutionen und den führenden Fertigungsunternehmen des Landes.',
        'Management der schnellen und erfolgreichen Expansion der Marke auf dem kolumbianischen Markt mit Vertriebs- und Supportteams.',
      ],
    },
  },
};

export function getExperience(locale: Locale): ExperienceItem[] {
  return experienceBase.map((base) => ({ ...base, ...localized[locale][base.id] }));
}

// Fallback for non-locale contexts
export const experience = experienceBase.map((base) => ({ ...base, ...localized.es[base.id] }));
