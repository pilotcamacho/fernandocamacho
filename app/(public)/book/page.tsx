import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Propiología — Fernando Camacho',
  description:
    'Propiología: una exploración transdisciplinaria del concepto de la propiedad como fenómeno humano. Disponible en Kindle.',
};

export default function BookPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title="Propiología" subtitle="Mi libro — disponible en Kindle" />

        <Card className="mb-6">
          <h2 className="text-xl font-bold text-text-primary">
            Propiología: La ciencia de lo propio
          </h2>
          <p className="mt-1 text-sm text-text-muted">Fernando Camacho Ospina</p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
            <p>
              <em>Propiología</em> es una exploración transdisciplinaria del concepto de la
              propiedad — no solo en el sentido legal y económico, sino como fenómeno humano
              profundo que atraviesa la identidad, la cultura, la biología y la organización
              social.
            </p>
            <p>
              El libro propone un marco teórico original para entender cómo la apropiación de
              objetos, ideas y territorios ha dado forma a la civilización humana, y cómo este
              impulso sigue siendo una fuerza fundamental en la sociedad contemporánea.
            </p>
            <p>
              Escrito con rigor académico y accesibilidad narrativa, <em>Propiología</em> combina
              perspectivas de la economía, la psicología, la filosofía, la antropología y la
              neurociencia para ofrecer una visión integrada y novedosa del concepto de lo propio.
            </p>
          </div>

          {/* TODO: replace href with the actual Kindle/Amazon URL */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Ver en Kindle →
            </a>
          </div>
        </Card>

        <Card>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Sobre el autor
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            Fernando Camacho Ospina es PhD en Estadística Aplicada a la Ingeniería Biomédica
            (UNSW Sydney) con más de 25 años de experiencia en proyectos de innovación, análisis
            de datos e investigación. Colombo-australiano, piloto privado y apasionado por la
            intersección de la tecnología, la cultura y el pensamiento humano.
          </p>
        </Card>
      </div>
    </main>
  );
}
