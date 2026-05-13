import type { Metadata } from 'next';
import Link from 'next/link';
import { settings } from '@/lib/data/settings';
import { BioToggle } from '@/components/home/BioToggle';

export const metadata: Metadata = {
  title: 'Fernando Camacho — PhD Data Scientist · Engineer · Author · Private Pilot',
  description: settings.bioBrief,
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
            {settings.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary-600 dark:text-primary-400">
            {settings.tagline}
          </p>
          <p className="mt-1 text-sm text-text-muted">{settings.location}</p>
          <div className="mt-6">
            <BioToggle brief={settings.bioBrief} full={settings.bioFull} />
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {settings.navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:border-primary-200 hover:shadow-elevated dark:hover:border-primary-800"
              >
                <h2 className="text-base font-semibold text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {card.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
