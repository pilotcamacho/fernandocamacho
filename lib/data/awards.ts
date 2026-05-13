export interface AwardItem {
  id: string;
  name: string;
  year: number;
  issuer: string;
  description: string;
  order: number;
}

export const awards: AwardItem[] = [
  {
    id: 'aw01',
    name: 'Premio Innova 2013',
    year: 2013,
    issuer: 'Innpulsa Colombia',
    description:
      'Premio Nacional de Innovación otorgado por Innpulsa Colombia al sistema de marketing digital Long Tail SEO desarrollado para Woobsing S.A.S. El proyecto fue reconocido por su impacto demostrable en los indicadores clave de desempeño de los clientes y por su enfoque innovador en la optimización de motores de búsqueda para el mercado hispano.',
    order: 1,
  },
  {
    id: 'aw02',
    name: 'Beca Doctoral — Industria y Gobierno',
    year: 2001,
    issuer: 'Gobierno Australiano / Sector Industrial',
    description:
      'Beca doctoral conjunta entre la industria australiana y el gobierno para la realización del PhD en la University of New South Wales (UNSW), Sydney. La beca financia la investigación sobre análisis estadístico de parámetros de presión aórtica, con aplicación directa en la evaluación de riesgo cardiovascular.',
    order: 2,
  },
  {
    id: 'aw03',
    name: 'Beca Colfuturo',
    year: 1996,
    issuer: 'Colfuturo — Colombia',
    description:
      'Beca-crédito de Colfuturo para la realización de la Maestría en Ingeniería Biomédica en la University of New South Wales (UNSW), Sydney, Australia. Colfuturo apoya a los mejores profesionales colombianos para realizar estudios de posgrado en universidades de excelencia en el exterior.',
    order: 3,
  },
];
