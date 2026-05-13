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

export const education: EducationItem[] = [
  {
    id: 'edu01',
    institution: 'University of New South Wales (UNSW)',
    location: 'Sydney, Australia',
    degree: 'Doctorado (PhD)',
    field: 'Análisis Estadístico en Ingeniería Biomédica',
    startYear: 2002,
    endYear: 2005,
    thesis:
      'Statistical Analysis of Central Aortic Blood Pressure Parameters Derived From the Peripheral Pulse',
    files: [
      { label: 'Diploma (p.1)',  path: '/diplomas/diploma-doctorado-01.jpg', type: 'image' },
      { label: 'Diploma (p.2)',  path: '/diplomas/diploma-doctorado-02.jpg', type: 'image' },
      { label: 'Tesis doctoral', path: '/diplomas/thesis-phd.pdf',           type: 'pdf'   },
    ],
    order: 1,
  },
  {
    id: 'edu02',
    institution: 'University of New South Wales (UNSW)',
    location: 'Sydney, Australia',
    degree: 'Maestría en Ingeniería Biomédica',
    field: 'Biomedical Engineering',
    startYear: 1996,
    endYear: 1998,
    thesis: 'Development of a Prototype Hollow Fiber Bioreactor System',
    files: [
      { label: 'Diploma',        path: '/diplomas/diploma-maestria.jpg',  type: 'image' },
      { label: 'Tesis de grado', path: '/diplomas/thesis-masters.pdf',    type: 'pdf'   },
    ],
    order: 2,
  },
  {
    id: 'edu03',
    institution: 'Universidad de los Andes',
    location: 'Bogotá, Colombia',
    degree: 'Investigación',
    field: 'Optimización de Recursos para Servicios de Salud — Telemedicina',
    startYear: 1999,
    endYear: 2000,
    order: 3,
  },
  {
    id: 'edu04',
    institution: 'Universidad de los Andes',
    location: 'Bogotá, Colombia',
    degree: 'Especialización',
    field: 'Automatización de Procesos Industriales',
    startYear: 1992,
    endYear: 1993,
    thesis: 'Software Educativo de Control de Procesos',
    note: 'Primero de la clase',
    files: [
      { label: 'Diploma', path: '/diplomas/diploma-especializacion.jpg', type: 'image' },
    ],
    order: 4,
  },
  {
    id: 'edu05',
    institution: 'Universidad de los Andes',
    location: 'Bogotá, Colombia',
    degree: 'Ingeniería Eléctrica y Electrónica',
    field: 'Énfasis en Electrónica de Computadores',
    startYear: 1986,
    endYear: 1991,
    thesis: 'Desarrollo e implementación de equipo Holter',
    note: 'Top 5% de la promoción',
    files: [
      { label: 'Diploma', path: '/diplomas/diploma-ingenieria-electrica.jpg', type: 'image' },
    ],
    order: 5,
  },
  {
    id: 'edu06',
    institution: 'Colegio Andino — Deutsche Schule',
    location: 'Bogotá, Colombia',
    degree: 'Bachillerato — Deutsches Sprachdiplom (C1)',
    field: 'Ciencias y Matemáticas',
    startYear: 1974,
    endYear: 1985,
    files: [
      { label: 'Sprachdiplom', path: '/diplomas/diploma-deutsches-sprachdiplom.jpg', type: 'image' },
      { label: 'Diploma bachiller', path: '/diplomas/diploma-bachiller.jpg',          type: 'image' },
      { label: 'Certificado C1 CEFR', path: '/diplomas/cert-c1-cefr.pdf',            type: 'pdf'   },
    ],
    order: 6,
  },
  {
    id: 'edu07',
    institution: 'Aeroclub de Colombia',
    location: 'Bogotá, Colombia',
    degree: 'Piloto Privado e Instructor de Planeadores',
    field: 'Aviación General',
    startYear: 1991,
    endYear: 1993,
    order: 7,
  },
];

export const certifications: EducationItem[] = [
  {
    id: 'cert01',
    institution: 'MIT — Massachusetts Institute of Technology',
    location: 'Online',
    degree: 'Certificado',
    field: 'Big Data Challenge',
    startYear: 2014,
    endYear: 2014,
    files: [
      { label: 'Certificado', path: '/diplomas/cert-mit-big-data.pdf', type: 'pdf' },
    ],
    order: 1,
  },
  {
    id: 'cert02',
    institution: 'IDEO / Coursera',
    location: 'Online',
    degree: 'Certificado',
    field: 'Human-Centered Design (Design Kit)',
    startYear: 2014,
    endYear: 2014,
    files: [
      { label: 'Certificado (PDF)', path: '/diplomas/cert-hcd.pdf', type: 'pdf'   },
      { label: 'Diploma (imagen)',  path: '/diplomas/cert-hcd.png', type: 'image' },
    ],
    order: 2,
  },
  {
    id: 'cert03',
    institution: 'Coursera',
    location: 'Online',
    degree: 'Certificado',
    field: 'Neuroeconomics',
    startYear: 2014,
    endYear: 2014,
    files: [
      { label: 'Certificado', path: '/diplomas/cert-coursera-neuro.pdf', type: 'pdf' },
    ],
    order: 3,
  },
  {
    id: 'cert04',
    institution: 'Coursera',
    location: 'Online',
    degree: 'Certificado',
    field: 'Social Psychology',
    startYear: 2014,
    endYear: 2014,
    files: [
      { label: 'Certificado', path: '/diplomas/cert-coursera-social-psych.pdf', type: 'pdf' },
    ],
    order: 4,
  },
];
