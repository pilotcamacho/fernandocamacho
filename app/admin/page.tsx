import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — Dashboard',
};

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-surface-muted p-8">
      <h1 className="text-2xl font-bold text-text-primary mb-2">Panel de administración</h1>
      <p className="text-text-muted text-sm mb-8">Gestiona el contenido del portal.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Proyectos', href: '/admin/projects' },
          { label: 'Publicaciones', href: '/admin/publications' },
          { label: 'Experiencia', href: '/admin/experience' },
          { label: 'Educación', href: '/admin/education' },
          { label: 'Reconocimientos', href: '/admin/awards' },
          { label: 'Mensajes', href: '/admin/contacts' },
          { label: 'Configuración', href: '/admin/settings' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-xl bg-white p-6 shadow-card hover:shadow-elevated transition-shadow border border-border"
          >
            <span className="font-semibold text-text-primary">{item.label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
