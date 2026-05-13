import type { Metadata } from 'next';
import './globals.css';
import AmplifyProvider from '@/components/providers/AmplifyProvider';

// Injected before React hydrates — reads localStorage and applies .dark to <html>
// to prevent flash of wrong theme on first load.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: 'Fernando Camacho',
    template: '%s — Fernando Camacho',
  },
  description:
    'PhD Data Scientist, Engineer, Author, and Private Pilot. Expert in AI, Big Data, and educational analytics.',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://fernandocamacho.com',
    siteName: 'Fernando Camacho',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-surface text-text-primary antialiased">
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
