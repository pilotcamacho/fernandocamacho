export type Locale = 'es' | 'en' | 'de';

type Language = { lang: string; level: string };
type NavCard  = { href: string; title: string; description: string };

type LocalizedContent = {
  tagline: string;
  bioBrief: string;
  bioFull: string;
  nationalities: string;
  languages: Language[];
  hobbies: string[];
  navCards: NavCard[];
};

// ─── Locale-independent fields ───────────────────────────────────────────────
const base = {
  name:     'Fernando Camacho Ospina',
  email:    'f.camacho@peopleart.co',
  location: 'Bogotá, Colombia',
} as const;

// ─── Locale-specific content ──────────────────────────────────────────────────
const localized: Record<Locale, LocalizedContent> = {

  // ── Español ─────────────────────────────────────────────────────────────────
  es: {
    tagline: 'PhD Data Scientist · Ingeniero · Autor · Piloto Privado',

    bioBrief:
      'PhD en Estadística Aplicada a la Ingeniería Biomédica con más de 25 años de experiencia en desarrollo de productos basados en datos, inteligencia artificial y análisis del comportamiento humano. Líder en proyectos internacionales de alto impacto en EdTech, salud, telemedicina y nuevas tecnologías.',

    bioFull:
      'Innovador y creativo, con amplia experiencia en el desarrollo de productos basados en datos. Sólidos conocimientos estadísticos, excelente modelado matemático y grandes habilidades de programación. Líder en la creación y aplicación de soluciones de vanguardia en entornos industriales y gubernamentales.\n\n' +
      'Con una formación multicultural, conocimiento multidisciplinario, el rigor de la academia, una comprensión clara de las necesidades del cliente y excelentes habilidades de gestión, he liderado y trabajado directamente en numerosos proyectos: desde el diseño de un vehículo eléctrico ultraligero, la implementación de un sistema de telemedicina completo en la República de Sudán, la reestructuración total de la entrega de clases en vivo en una plataforma de educación en línea, hasta un proyecto de marketing digital ganador de un Premio Nacional de Innovación.\n\n' +
      'Gran líder de equipos y colaborador. Fluido en español, inglés y alemán.',

    nationalities: 'Colombiano y Australiano',

    languages: [
      { lang: 'Español', level: 'Lengua materna' },
      { lang: 'Inglés',  level: 'C2 — Fluido' },
      { lang: 'Alemán',  level: 'C1 — Avanzado' },
      { lang: 'Francés', level: 'Básico' },
    ],

    hobbies: ['Aviación', 'Fotografía', 'Idiomas y culturas', 'Tecnología', 'Matemáticas', 'Buceo', 'Natación'],

    navCards: [
      { href: '/about',        title: 'Sobre mí',       description: 'Trayectoria, idiomas e intereses personales' },
      { href: '/experience',   title: 'Experiencia',    description: '25+ años en EdTech, salud, consultoría y tecnología' },
      { href: '/projects',     title: 'Proyectos',      description: '20+ proyectos desde 1991 hasta el presente' },
      { href: '/education',    title: 'Educación',      description: 'PhD, Maestría, Ingeniería y más en tres continentes' },
      { href: '/publications', title: 'Publicaciones',  description: 'Artículos académicos y presentaciones internacionales' },
      { href: '/awards',       title: 'Premios y Becas',description: 'Reconocimientos nacionales e internacionales' },
      { href: '/book',         title: 'Propiología',    description: 'Mi libro — disponible en Kindle' },
      { href: '/contact',      title: 'Contacto',       description: 'Escríbeme, con gusto respondo' },
    ],
  },

  // ── English ──────────────────────────────────────────────────────────────────
  en: {
    tagline: 'PhD Data Scientist · Engineer · Author · Private Pilot',

    bioBrief:
      'PhD in Applied Statistics in Biomedical Engineering with 25+ years of experience in data-driven product development, artificial intelligence and human behaviour analytics. Leader in high-impact international projects in EdTech, healthcare, telemedicine and new technologies.',

    bioFull:
      'Innovative and creative, with extensive experience in data-driven product development. Strong statistical knowledge, excellent mathematical modelling and outstanding programming skills. Leader in the creation and application of cutting-edge solutions in industrial and governmental environments.\n\n' +
      'With a multicultural background, multidisciplinary knowledge, academic rigour, a clear understanding of client needs and excellent management skills, I have led and worked directly on numerous projects: from designing an ultra-light electric vehicle, implementing a full telemedicine system in the Republic of Sudan and restructuring live class delivery on an online education platform, to a digital marketing project that won a National Innovation Award.\n\n' +
      'Strong team leader and collaborator. Fluent in Spanish, English and German.',

    nationalities: 'Colombian and Australian',

    languages: [
      { lang: 'Spanish', level: 'Native' },
      { lang: 'English', level: 'C2 — Fluent' },
      { lang: 'German',  level: 'C1 — Advanced' },
      { lang: 'French',  level: 'Basic' },
    ],

    hobbies: ['Aviation', 'Photography', 'Languages & cultures', 'Technology', 'Mathematics', 'Diving', 'Swimming'],

    navCards: [
      { href: '/about',        title: 'About',               description: 'Background, languages and personal interests' },
      { href: '/experience',   title: 'Experience',          description: '25+ years in EdTech, healthcare, consulting and technology' },
      { href: '/projects',     title: 'Projects',            description: '20+ projects from 1991 to the present' },
      { href: '/education',    title: 'Education',           description: 'PhD, Master\'s, Engineering and more on three continents' },
      { href: '/publications', title: 'Publications',        description: 'Academic articles and international presentations' },
      { href: '/awards',       title: 'Awards & Scholarships',description: 'National and international recognition' },
      { href: '/book',         title: 'Propiología',         description: 'My book — available on Kindle' },
      { href: '/contact',      title: 'Contact',             description: 'Write to me, I\'ll be happy to respond' },
    ],
  },

  // ── Deutsch ──────────────────────────────────────────────────────────────────
  de: {
    tagline: 'PhD-Datenwissenschaftler · Ingenieur · Autor · Privatpilot',

    bioBrief:
      'Promotion in Angewandter Statistik in der Biomedizintechnik mit 25+ Jahren Erfahrung in datengetriebener Produktentwicklung, Künstlicher Intelligenz und menschlicher Verhaltensanalyse. Leiter internationaler Hochleistungsprojekte in EdTech, Gesundheitswesen, Telemedizin und neuen Technologien.',

    bioFull:
      'Innovativ und kreativ, mit umfangreicher Erfahrung in der datengetriebenen Produktentwicklung. Fundierte statistische Kenntnisse, exzellentes mathematisches Modellieren und ausgeprägte Programmierfähigkeiten. Führungspersönlichkeit bei der Entwicklung und Anwendung hochmoderner Lösungen in industriellen und staatlichen Umgebungen.\n\n' +
      'Mit einem multikulturellen Hintergrund, multidisziplinärem Wissen, akademischer Strenge, einem klaren Verständnis für Kundenbedürfnisse und ausgezeichneten Managementfähigkeiten habe ich zahlreiche Projekte geleitet: vom Entwurf eines ultraleichten Elektrofahrzeugs über die Implementierung eines vollständigen Telemedizinsystems in der Republik Sudan und die Umstrukturierung der Live-Unterrichtslieferung auf einer Online-Bildungsplattform bis hin zu einem Digitalmarketing-Projekt, das einen Nationalen Innovationspreis gewann.\n\n' +
      'Erfahrener Teamleiter und Kollaborateur. Fließend in Spanisch, Englisch und Deutsch.',

    nationalities: 'Kolumbianisch und Australisch',

    languages: [
      { lang: 'Spanisch',    level: 'Muttersprache' },
      { lang: 'Englisch',    level: 'C2 — Fließend' },
      { lang: 'Deutsch',     level: 'C1 — Fortgeschritten' },
      { lang: 'Französisch', level: 'Grundkenntnisse' },
    ],

    hobbies: ['Luftfahrt', 'Fotografie', 'Sprachen & Kulturen', 'Technologie', 'Mathematik', 'Tauchen', 'Schwimmen'],

    navCards: [
      { href: '/about',        title: 'Über mich',                 description: 'Werdegang, Sprachen und persönliche Interessen' },
      { href: '/experience',   title: 'Erfahrung',                 description: '25+ Jahre in EdTech, Gesundheitswesen, Beratung und Technologie' },
      { href: '/projects',     title: 'Projekte',                  description: '20+ Projekte von 1991 bis heute' },
      { href: '/education',    title: 'Ausbildung',                description: 'Promotion, Master, Ingenieurwesen und mehr auf drei Kontinenten' },
      { href: '/publications', title: 'Publikationen',             description: 'Wissenschaftliche Artikel und internationale Präsentationen' },
      { href: '/awards',       title: 'Auszeichnungen & Stipendien',description: 'Nationale und internationale Anerkennung' },
      { href: '/book',         title: 'Propiología',               description: 'Mein Buch — auf Kindle erhältlich' },
      { href: '/contact',      title: 'Kontakt',                   description: 'Schreib mir, ich antworte gerne' },
    ],
  },
};

// ─── Public API ───────────────────────────────────────────────────────────────

export function getSettings(locale: Locale) {
  return { ...base, ...localized[locale] };
}

// Fallback for non-locale contexts (admin, API routes, etc.)
export const settings = { ...base, ...localized.es };
