import type { Locale } from './settings';

export interface DiplomaFile {
  label: string;
  path: string;
  type: 'image' | 'pdf';
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  thesis?: string;
  note?: string;
  files?: DiplomaFile[];
  order: number;
}

type BaseEducationItem = Pick<EducationItem, 'id' | 'institution' | 'location' | 'startYear' | 'endYear' | 'order'>;
type LocalizedEducationItem = Omit<EducationItem, 'id' | 'institution' | 'location' | 'startYear' | 'endYear' | 'order'>;

// ─── Formal education ─────────────────────────────────────────────────────────

const educationBase: BaseEducationItem[] = [
  { id: 'edu01', institution: 'University of New South Wales (UNSW)', location: 'Sydney, Australia',   startYear: 2002, endYear: 2005, order: 1 },
  { id: 'edu02', institution: 'University of New South Wales (UNSW)', location: 'Sydney, Australia',   startYear: 1996, endYear: 1998, order: 2 },
  { id: 'edu03', institution: 'Universidad de los Andes',             location: 'Bogotá, Colombia',    startYear: 1999, endYear: 2000, order: 3 },
  { id: 'edu04', institution: 'Universidad de los Andes',             location: 'Bogotá, Colombia',    startYear: 1992, endYear: 1993, order: 4 },
  { id: 'edu05', institution: 'Universidad de los Andes',             location: 'Bogotá, Colombia',    startYear: 1986, endYear: 1991, order: 5 },
  { id: 'edu06', institution: 'Colegio Andino — Deutsche Schule',     location: 'Bogotá, Colombia',    startYear: 1974, endYear: 1985, order: 6 },
  { id: 'edu07', institution: 'Aeroclub de Colombia',                 location: 'Bogotá, Colombia',    startYear: 1991, endYear: 1993, order: 7 },
];

const localizedEducation: Record<Locale, Record<string, LocalizedEducationItem>> = {

  // ── Español ───────────────────────────────────────────────────────────────────
  es: {
    edu01: {
      degree: 'Doctorado (PhD)',
      field:  'Análisis Estadístico en Ingeniería Biomédica',
      thesis: 'Statistical Analysis of Central Aortic Blood Pressure Parameters Derived From the Peripheral Pulse',
      files: [
        { label: 'Diploma (p.1)',   path: '/diplomas/diploma-doctorado-01.jpg', type: 'image' },
        { label: 'Diploma (p.2)',   path: '/diplomas/diploma-doctorado-02.jpg', type: 'image' },
        { label: 'Tesis doctoral',  path: '/diplomas/thesis-phd.pdf',           type: 'pdf'   },
      ],
    },
    edu02: {
      degree: 'Maestría en Ingeniería Biomédica',
      field:  'Biomedical Engineering',
      thesis: 'Development of a Prototype Hollow Fiber Bioreactor System',
      files: [
        { label: 'Diploma',        path: '/diplomas/diploma-maestria.jpg', type: 'image' },
        { label: 'Tesis de grado', path: '/diplomas/thesis-masters.pdf',   type: 'pdf'   },
      ],
    },
    edu03: {
      degree: 'Investigación',
      field:  'Optimización de Recursos para Servicios de Salud — Telemedicina',
    },
    edu04: {
      degree: 'Especialización',
      field:  'Automatización de Procesos Industriales',
      thesis: 'Software Educativo de Control de Procesos',
      note:   'Primero de la clase',
      files: [
        { label: 'Diploma', path: '/diplomas/diploma-especializacion.jpg', type: 'image' },
      ],
    },
    edu05: {
      degree: 'Ingeniería Eléctrica y Electrónica',
      field:  'Énfasis en Electrónica de Computadores',
      thesis: 'Desarrollo e implementación de equipo Holter',
      note:   'Top 5% de la promoción',
      files: [
        { label: 'Diploma', path: '/diplomas/diploma-ingenieria-electrica.jpg', type: 'image' },
      ],
    },
    edu06: {
      degree: 'Bachillerato — Deutsches Sprachdiplom (C1)',
      field:  'Ciencias y Matemáticas',
      files: [
        { label: 'Sprachdiplom',        path: '/diplomas/diploma-deutsches-sprachdiplom.jpg', type: 'image' },
        { label: 'Diploma bachiller',   path: '/diplomas/diploma-bachiller.jpg',              type: 'image' },
        { label: 'Certificado C1 CEFR', path: '/diplomas/cert-c1-cefr.pdf',                  type: 'pdf'   },
      ],
    },
    edu07: {
      degree: 'Piloto Privado e Instructor de Planeadores',
      field:  'Aviación General',
    },
  },

  // ── English ───────────────────────────────────────────────────────────────────
  en: {
    edu01: {
      degree: 'PhD',
      field:  'Statistical Analysis in Biomedical Engineering',
      thesis: 'Statistical Analysis of Central Aortic Blood Pressure Parameters Derived From the Peripheral Pulse',
      files: [
        { label: 'Diploma (p.1)',    path: '/diplomas/diploma-doctorado-01.jpg', type: 'image' },
        { label: 'Diploma (p.2)',    path: '/diplomas/diploma-doctorado-02.jpg', type: 'image' },
        { label: 'Doctoral Thesis',  path: '/diplomas/thesis-phd.pdf',           type: 'pdf'   },
      ],
    },
    edu02: {
      degree: 'Master of Biomedical Engineering',
      field:  'Biomedical Engineering',
      thesis: 'Development of a Prototype Hollow Fiber Bioreactor System',
      files: [
        { label: 'Diploma',         path: '/diplomas/diploma-maestria.jpg', type: 'image' },
        { label: "Master's Thesis", path: '/diplomas/thesis-masters.pdf',   type: 'pdf'   },
      ],
    },
    edu03: {
      degree: 'Research',
      field:  'Resource Optimisation for Health Services — Telemedicine',
    },
    edu04: {
      degree: 'Graduate Specialisation',
      field:  'Industrial Process Automation',
      thesis: 'Educational Software for Process Control',
      note:   'First in class',
      files: [
        { label: 'Diploma', path: '/diplomas/diploma-especializacion.jpg', type: 'image' },
      ],
    },
    edu05: {
      degree: 'Electrical and Electronic Engineering',
      field:  'Specialisation in Computer Electronics',
      thesis: 'Design and implementation of Holter equipment',
      note:   'Top 5% of graduating class',
      files: [
        { label: 'Diploma', path: '/diplomas/diploma-ingenieria-electrica.jpg', type: 'image' },
      ],
    },
    edu06: {
      degree: 'High School — German Language Diploma (C1)',
      field:  'Sciences and Mathematics',
      files: [
        { label: 'Language Diploma',     path: '/diplomas/diploma-deutsches-sprachdiplom.jpg', type: 'image' },
        { label: 'High School Diploma',  path: '/diplomas/diploma-bachiller.jpg',              type: 'image' },
        { label: 'C1 CEFR Certificate',  path: '/diplomas/cert-c1-cefr.pdf',                  type: 'pdf'   },
      ],
    },
    edu07: {
      degree: 'Private Pilot & Glider Instructor',
      field:  'General Aviation',
    },
  },

  // ── Deutsch ───────────────────────────────────────────────────────────────────
  de: {
    edu01: {
      degree: 'Promotion (PhD)',
      field:  'Statistische Analyse in der Biomedizintechnik',
      thesis: 'Statistical Analysis of Central Aortic Blood Pressure Parameters Derived From the Peripheral Pulse',
      files: [
        { label: 'Diplom (S.1)',    path: '/diplomas/diploma-doctorado-01.jpg', type: 'image' },
        { label: 'Diplom (S.2)',    path: '/diplomas/diploma-doctorado-02.jpg', type: 'image' },
        { label: 'Doktorarbeit',    path: '/diplomas/thesis-phd.pdf',           type: 'pdf'   },
      ],
    },
    edu02: {
      degree: 'Master in Biomedizintechnik',
      field:  'Biomedical Engineering',
      thesis: 'Development of a Prototype Hollow Fiber Bioreactor System',
      files: [
        { label: 'Diplom',       path: '/diplomas/diploma-maestria.jpg', type: 'image' },
        { label: 'Masterarbeit', path: '/diplomas/thesis-masters.pdf',   type: 'pdf'   },
      ],
    },
    edu03: {
      degree: 'Forschung',
      field:  'Ressourcenoptimierung für Gesundheitsdienstleistungen — Telemedizin',
    },
    edu04: {
      degree: 'Aufbaustudium',
      field:  'Industrielle Prozessautomatisierung',
      thesis: 'Lernprogramm für Prozesssteuerung',
      note:   'Klassenbester',
      files: [
        { label: 'Diplom', path: '/diplomas/diploma-especializacion.jpg', type: 'image' },
      ],
    },
    edu05: {
      degree: 'Elektro- und Elektronikingenieurwesen',
      field:  'Schwerpunkt Computerelektronik',
      thesis: 'Entwicklung und Implementierung eines Holter-Geräts',
      note:   'Top 5 % des Abschlussjahrgangs',
      files: [
        { label: 'Diplom', path: '/diplomas/diploma-ingenieria-electrica.jpg', type: 'image' },
      ],
    },
    edu06: {
      degree: 'Abitur — Deutsches Sprachdiplom (C1)',
      field:  'Naturwissenschaften und Mathematik',
      files: [
        { label: 'Sprachdiplom',       path: '/diplomas/diploma-deutsches-sprachdiplom.jpg', type: 'image' },
        { label: 'Abiturzeugnis',       path: '/diplomas/diploma-bachiller.jpg',              type: 'image' },
        { label: 'C1-CEFR-Zertifikat', path: '/diplomas/cert-c1-cefr.pdf',                  type: 'pdf'   },
      ],
    },
    edu07: {
      degree: 'Privatpilot und Segelflugzeugausbilder',
      field:  'Allgemeine Luftfahrt',
    },
  },
};

// ─── Certifications ───────────────────────────────────────────────────────────

const certificationsBase: BaseEducationItem[] = [
  { id: 'cert01', institution: 'MIT — Massachusetts Institute of Technology', location: 'Online', startYear: 2014, endYear: 2014, order: 1 },
  { id: 'cert02', institution: 'IDEO / Coursera',                             location: 'Online', startYear: 2014, endYear: 2014, order: 2 },
  { id: 'cert03', institution: 'Coursera',                                    location: 'Online', startYear: 2014, endYear: 2014, order: 3 },
  { id: 'cert04', institution: 'Coursera',                                    location: 'Online', startYear: 2014, endYear: 2014, order: 4 },
];

const localizedCertifications: Record<Locale, Record<string, LocalizedEducationItem>> = {

  // ── Español ───────────────────────────────────────────────────────────────────
  es: {
    cert01: {
      degree: 'Certificado',
      field:  'Big Data Challenge',
      files: [{ label: 'Certificado', path: '/diplomas/cert-mit-big-data.pdf', type: 'pdf' }],
    },
    cert02: {
      degree: 'Certificado',
      field:  'Human-Centered Design (Design Kit)',
      files: [
        { label: 'Certificado (PDF)', path: '/diplomas/cert-hcd.pdf', type: 'pdf'   },
        { label: 'Diploma (imagen)',  path: '/diplomas/cert-hcd.png', type: 'image' },
      ],
    },
    cert03: {
      degree: 'Certificado',
      field:  'Neuroeconomics',
      files: [{ label: 'Certificado', path: '/diplomas/cert-coursera-neuro.pdf', type: 'pdf' }],
    },
    cert04: {
      degree: 'Certificado',
      field:  'Social Psychology',
      files: [{ label: 'Certificado', path: '/diplomas/cert-coursera-social-psych.pdf', type: 'pdf' }],
    },
  },

  // ── English ───────────────────────────────────────────────────────────────────
  en: {
    cert01: {
      degree: 'Certificate',
      field:  'Big Data Challenge',
      files: [{ label: 'Certificate', path: '/diplomas/cert-mit-big-data.pdf', type: 'pdf' }],
    },
    cert02: {
      degree: 'Certificate',
      field:  'Human-Centered Design (Design Kit)',
      files: [
        { label: 'Certificate (PDF)', path: '/diplomas/cert-hcd.pdf', type: 'pdf'   },
        { label: 'Diploma (image)',   path: '/diplomas/cert-hcd.png', type: 'image' },
      ],
    },
    cert03: {
      degree: 'Certificate',
      field:  'Neuroeconomics',
      files: [{ label: 'Certificate', path: '/diplomas/cert-coursera-neuro.pdf', type: 'pdf' }],
    },
    cert04: {
      degree: 'Certificate',
      field:  'Social Psychology',
      files: [{ label: 'Certificate', path: '/diplomas/cert-coursera-social-psych.pdf', type: 'pdf' }],
    },
  },

  // ── Deutsch ───────────────────────────────────────────────────────────────────
  de: {
    cert01: {
      degree: 'Zertifikat',
      field:  'Big Data Challenge',
      files: [{ label: 'Zertifikat', path: '/diplomas/cert-mit-big-data.pdf', type: 'pdf' }],
    },
    cert02: {
      degree: 'Zertifikat',
      field:  'Human-Centered Design (Design Kit)',
      files: [
        { label: 'Zertifikat (PDF)', path: '/diplomas/cert-hcd.pdf', type: 'pdf'   },
        { label: 'Diplom (Bild)',    path: '/diplomas/cert-hcd.png', type: 'image' },
      ],
    },
    cert03: {
      degree: 'Zertifikat',
      field:  'Neuroeconomics',
      files: [{ label: 'Zertifikat', path: '/diplomas/cert-coursera-neuro.pdf', type: 'pdf' }],
    },
    cert04: {
      degree: 'Zertifikat',
      field:  'Social Psychology',
      files: [{ label: 'Zertifikat', path: '/diplomas/cert-coursera-social-psych.pdf', type: 'pdf' }],
    },
  },
};

// ─── Public API ───────────────────────────────────────────────────────────────

export function getEducation(locale: Locale): EducationItem[] {
  return educationBase.map((base) => ({ ...base, ...localizedEducation[locale][base.id] }));
}

export function getCertifications(locale: Locale): EducationItem[] {
  return certificationsBase.map((base) => ({ ...base, ...localizedCertifications[locale][base.id] }));
}

// Fallbacks for non-locale contexts
export const education      = educationBase.map((base)      => ({ ...base, ...localizedEducation['es'][base.id] }));
export const certifications = certificationsBase.map((base) => ({ ...base, ...localizedCertifications['es'][base.id] }));
