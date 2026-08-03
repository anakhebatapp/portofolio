import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wendrabagas.my.id'),
  title: {
    default: 'Wendra Bagas Saputra | Guru PPLG & Full-Stack Developer',
    template: '%s | Wendra Bagas Saputra',
  },
  description:
    'Website Portofolio Profesional Wendra Bagas Saputra, S.Pd — Guru PPLG di SMKN 1 Kawunganten, Guru Penggerak Angkatan 10, & Full-Stack Software Developer spesialis Sistem Web Sekolah dan Aplikasi Android Play Store.',
  keywords: [
    'Wendra Bagas Saputra',
    'Portofolio Wendra Bagas',
    'Guru PPLG SMKN 1 Kawunganten',
    'Guru Penggerak Cilacap',
    'ePKL SMKN 1 Kawunganten',
    'Full Stack Developer Cilacap',
    'EdTech Developer Indonesia',
    'Aplikasi ebusafilla',
    'ANAK HEBAT Habit Tracker',
    'wendrabagas.my.id',
  ],
  authors: [{ name: 'Wendra Bagas Saputra', url: 'https://wendrabagas.my.id' }],
  creator: 'Wendra Bagas Saputra',
  openGraph: {
    title: 'Wendra Bagas Saputra | Guru PPLG & Full-Stack Developer',
    description:
      'Portofolio Sistem Web & Aplikasi Mobile Karya Wendra Bagas Saputra. Guru PPLG SMKN 1 Kawunganten & Developer.',
    url: 'https://wendrabagas.my.id',
    siteName: 'Portofolio Wendra Bagas Saputra',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wendra Bagas Saputra | Guru PPLG & Full-Stack Developer',
    description:
      'Portofolio Sistem Web & Aplikasi Mobile Karya Wendra Bagas Saputra.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth h-full`}>
      <body className="min-h-full flex flex-col bg-[#070b14] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
