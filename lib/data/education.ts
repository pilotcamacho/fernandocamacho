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
