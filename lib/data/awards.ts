import type { Locale } from './settings';

export interface AwardItem {
  id: string;
  name: string;
  year: number;
  issuer: string;
  description: string;
  order: number;
}

type BaseAwardItem = Pick<AwardItem, 'id' | 'year' | 'order'>;
type LocalizedAwardItem = Omit<AwardItem, 'id' | 'year' | 'order'>;

const awardsBase: BaseAwardItem[] = [
  { id: 'aw01', year: 2013, order: 1 },
  { id: 'aw02', year: 2001, order: 2 },
  { id: 'aw03', year: 1996, order: 3 },
];

const localized: Record<Locale, Record<string, LocalizedAwardItem>> = {

  // ── Español ─────────────────────────────────────────────────────────────────
  es: {
    aw01: {
      name:    'Premio Innova 2013',
      issuer:  'Innpulsa Colombia',
      description:
        'Premio Nacional de Innovación otorgado por Innpulsa Colombia al sistema de marketing digital Long Tail SEO desarrollado para Woobsing S.A.S. El proyecto fue reconocido por su impacto demostrable en los indicadores clave de desempeño de los clientes y por su enfoque innovador en la optimización de motores de búsqueda para el mercado hispano.',
    },
    aw02: {
      name:    'Beca Doctoral — Industria y Gobierno',
      issuer:  'Gobierno Australiano / Sector Industrial',
      description:
        'Beca doctoral conjunta entre la industria australiana y el gobierno para la realización del PhD en la University of New South Wales (UNSW), Sydney. La beca financia la investigación sobre análisis estadístico de parámetros de presión aórtica, con aplicación directa en la evaluación de riesgo cardiovascular.',
    },
    aw03: {
      name:    'Beca Colfuturo',
      issuer:  'Colfuturo — Colombia',
      description:
        'Beca-crédito de Colfuturo para la realización de la Maestría en Ingeniería Biomédica en la University of New South Wales (UNSW), Sydney, Australia. Colfuturo apoya a los mejores profesionales colombianos para realizar estudios de posgrado en universidades de excelencia en el exterior.',
    },
  },

  // ── English ──────────────────────────────────────────────────────────────────
  en: {
    aw01: {
      name:    'Innova Prize 2013',
      issuer:  'Innpulsa Colombia',
      description:
        'National Innovation Award granted by Innpulsa Colombia for the Long Tail SEO digital marketing system developed for Woobsing S.A.S. The project was recognised for its demonstrable impact on clients\' key performance indicators and for its innovative approach to search engine optimisation for the Hispanic market.',
    },
    aw02: {
      name:    'Doctoral Scholarship — Industry and Government',
      issuer:  'Australian Government / Industrial Sector',
      description:
        'Joint doctoral scholarship between Australian industry and the government to carry out the PhD at the University of New South Wales (UNSW), Sydney. The scholarship funded research on statistical analysis of aortic pressure parameters, with direct application in the assessment of cardiovascular risk.',
    },
    aw03: {
      name:    'Colfuturo Scholarship',
      issuer:  'Colfuturo — Colombia',
      description:
        'Colfuturo scholarship-loan for the Master of Biomedical Engineering at the University of New South Wales (UNSW), Sydney, Australia. Colfuturo supports Colombia\'s best professionals to pursue graduate studies at excellent universities abroad.',
    },
  },

  // ── Deutsch ──────────────────────────────────────────────────────────────────
  de: {
    aw01: {
      name:    'Innova-Preis 2013',
      issuer:  'Innpulsa Colombia',
      description:
        'Nationaler Innovationspreis, verliehen von Innpulsa Colombia für das Long-Tail-SEO-Digitalmarketingsystem, entwickelt für Woobsing S.A.S. Das Projekt wurde für seinen nachweisbaren Einfluss auf die Schlüsselleistungsindikatoren der Kunden und seinen innovativen Ansatz zur Suchmaschinenoptimierung für den hispanischen Markt ausgezeichnet.',
    },
    aw02: {
      name:    'Doktorandenstipendium — Industrie und Regierung',
      issuer:  'Australische Regierung / Industriesektor',
      description:
        'Gemeinsames Doktorandenstipendium der australischen Industrie und Regierung für die Durchführung der Promotion an der University of New South Wales (UNSW), Sydney. Das Stipendium finanzierte die Forschung zur statistischen Analyse von Aortendruck-Parametern mit direkter Anwendung in der Bewertung kardiovaskulärer Risiken.',
    },
    aw03: {
      name:    'Colfuturo-Stipendium',
      issuer:  'Colfuturo — Colombia',
      description:
        'Colfuturo-Stipendiendarlehen für den Master in Biomedizintechnik an der University of New South Wales (UNSW), Sydney, Australien. Colfuturo unterstützt Kolumbiens beste Fachkräfte bei Postgraduiertenstudien an herausragenden Universitäten im Ausland.',
    },
  },
};

export function getAwards(locale: Locale): AwardItem[] {
  return awardsBase.map((base) => ({ ...base, ...localized[locale][base.id] }));
}

// Fallback for non-locale contexts
export const awards = awardsBase.map((base) => ({ ...base, ...localized['es'][base.id] }));
