import type { Metadata } from 'next';
import './globals.css';
import AmplifyProvider from '@/components/providers/AmplifyProvider';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
