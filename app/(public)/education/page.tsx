import type { Metadata } from 'next';
import Image from 'next/image';
import { education, certifications } from '@/lib/data/education';
import type { DiplomaFile } from '@/lib/data/education';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Educación — Fernando Camacho',
  description: 'PhD, Maestría, Ingeniería y más en tres continentes',
};

function DiplomaLinks({ files }: { files: DiplomaFile[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
      {files.map((f) =>
        f.type === 'image' ? (
          <a
            key={f.path}
            href={f.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-text-secondary hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Image src={f.path} alt="" width={14} height={14} className="opacity-60" unoptimized />
            {f.label}
          </a>
        ) : (
          <a
            key={f.path}
            href={f.path}
            download
            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-text-secondary hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {f.label}
          </a>
        )
      )}
    </div>
  );
}

export default function EducationPage() {
  const sortedEdu   = [...education].sort((a, b) => a.order - b.order);
  const sortedCerts = [...certifications].sort((a, b) => a.order - b.order);

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Educación"
          subtitle="PhD, Maestría, Ingeniería y más en tres continentes"
        />

        <div className="space-y-5">
          {sortedEdu.map((edu) => (
            <Card key={edu.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-text-primary">{edu.degree}</h2>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">{edu.location}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-text-muted">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>

              {edu.field && (
                <p className="mt-2 text-sm text-text-secondary">{edu.field}</p>
              )}

              {edu.thesis && (
                <p className="mt-3 border-l-2 border-primary-200 pl-3 text-xs italic text-text-muted dark:border-primary-800">
                  Tesis: {edu.thesis}
                </p>
              )}

              {edu.note && (
                <p className="mt-2 text-xs font-semibold text-primary-600 dark:text-primary-400">
                  ★ {edu.note}
                </p>
              )}

              {edu.files && edu.files.length > 0 && (
                <DiplomaLinks files={edu.files} />
              )}
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="mt-12 mb-5 text-xl font-bold text-text-primary">Certificaciones</h2>
        <div className="space-y-4">
          {sortedCerts.map((cert) => (
            <Card key={cert.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {cert.institution}
                  </p>
                  <p className="text-sm text-text-primary">{cert.field}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-text-muted">{cert.endYear}</span>
              </div>
              {cert.files && cert.files.length > 0 && (
                <DiplomaLinks files={cert.files} />
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
