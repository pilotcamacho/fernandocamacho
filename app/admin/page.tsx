import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin — Dashboard',
};

const sections = [
  { label: 'Proyectos',      href: '/admin/projects',      description: 'Gestiona los proyectos del portfolio' },
  { label: 'Publicaciones',  href: '/admin/publications',  description: 'Artículos y conferencias académicas' },
  { label: 'Experiencia',    href: '/admin/experience',    description: 'Historial de trabajo profesional' },
  { label: 'Educación',      href: '/admin/education',     description: 'Títulos, diplomas y certificaciones' },
  { label: 'Premios',        href: '/admin/awards',        description: 'Reconocimientos y becas' },
  { label: 'Mensajes',       href: '/admin/contacts',      description: 'Mensajes del formulario de contacto' },
  { label: 'Configuración',  href: '/admin/settings',      description: 'Bio, tagline y enlaces del sitio' },
];

export default function AdminDashboard() {
  return (
    <main className="flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="mt-1 text-sm text-text-muted mb-8">Gestiona el contenido del portal.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl border border-border bg-surface p-5 shadow-card hover:shadow-elevated hover:border-primary-200 dark:hover:border-primary-800 transition-all"
            >
              <p className="font-semibold text-text-primary">{item.label}</p>
              <p className="mt-1 text-xs text-text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
