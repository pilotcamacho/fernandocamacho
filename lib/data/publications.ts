import type { Locale } from './settings';

export interface PublicationItem {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi?: string;
  pdfPath?: string;
  order: number;
}

export const publications: PublicationItem[] = [
  {
    id: 'pub01',
    authors:
      'Zwerg-Villegas, A. M., Bernal-Torres, C. A., Thoene, U., Camacho, F., Guzmán-Ibarra, L. E., & Torralba-Chávez, E.',
    title:
      'The Relationship between Human Resource Diversity, Innovation Activity and Internationalization Intensity in Colombian and Mexican Firms',
    venue: 'Global Business Review',
    year: 2022,
    doi: '10.1177/09721509221129680',
    pdfPath: '/publications/pub-2022-diversity-innovation.pdf',
    order: 1,
  },
  {
    id: 'pub02',
    authors:
      'Blanco-Valbuena, C. E., Bernal-Torres, C. A., Camacho, F., & Díaz-Olaya, M.',
    title:
      'Creative and Cultural Industries: Study from the Knowledge Management Approach',
    venue: 'Información Tecnológica, vol. 29, no. 3',
    year: 2018,
    order: 2,
  },
  {
    id: 'pub03',
    authors: 'Camacho, F. & Avolio, A. P.',
    title:
      'The use of central aortic pressure for determination of cardiovascular risk — effect of heart rate',
    venue:
      '16th Scientific Meeting of the European Society of Hypertension, Madrid, Spain (Poster)',
    year: 2006,
    pdfPath: '/publications/pub-2006-aortic-pressure-esh.pdf',
    order: 3,
  },
  {
    id: 'pub04',
    authors:
      'Lauto, A., Hook, J., Doran, M., Camacho, F., Pool-Warren, L. A., Avolio, A., & Foster, L. J. R.',
    title: 'Chitosan Adhesive for Laser Tissue Repair: In Vitro Characterization',
    venue: 'Lasers in Surgery and Medicine, 36, 193–201',
    year: 2005,
    pdfPath: '/publications/pub-2005-chitosan-laser.pdf',
    order: 4,
  },
  {
    id: 'pub05',
    authors: 'Camacho, F., Walsh, A., & Avolio, A.',
    title:
      'Principal Components Analysis for Characterisation of the Arterial Pressure Pulse',
    venue:
      '15th Scientific Meeting of the European Society of Hypertension, Milan, Italy (Poster)',
    year: 2005,
    order: 5,
  },
  {
    id: 'pub06',
    authors: 'Camacho, F., Avolio, A., & Lovell, N. H.',
    title:
      'Estimation of Pressure Pulse Amplification Between Aorta and Brachial Artery using Stepwise Multiple Regression Method',
    venue: 'Physiological Measurement, 25, 879–889',
    year: 2004,
    pdfPath: '/publications/pub-2004-physiological-measurement.pdf',
    order: 6,
  },
  {
    id: 'pub07',
    authors: 'Akay, M. (Ed.) — Camacho, F. (contributor)',
    title:
      'Nonlinear Biomedical Signal Processing: Dynamic Analysis and Modeling',
    venue: 'IEEE Press Series in Biomedical Engineering',
    year: 2001,
    order: 7,
  },
  {
    id: 'pub08',
    authors: 'Qasem, A., Avolio, A., Camacho, F., Stephans, T., & Frangakis, G.',
    title:
      'A New Technique for Non-invasive Assessment of Aortic Pressure Modulations during Treadmill Running',
    venue: 'Euriscon, Athens, Greece',
    year: 1998,
    order: 8,
  },
];

// Academic paper titles and venues are published in English and remain unchanged across locales.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getPublications(_locale: Locale): PublicationItem[] {
  return publications;
}
