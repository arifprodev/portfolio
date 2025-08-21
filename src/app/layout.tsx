import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/providers';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/next';

/** Local Fonts */
const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBolditalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Thin.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});

const neueMontrealMono = localFont({
  src: [
    {
      path: '../../public/fonts/mono/PPNeueMontrealMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mono/PPNeueMontrealMono-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mono/PPNeueMontrealMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mono/PPNeueMontrealMono-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/mono/PPNeueMontrealMono-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Arif H | Professional Portfolio',
    template: '%s | Arif H'
  },
  description: 'Professional portfolio showcasing my work, skills, and experience in MERN developer.',
  keywords: ['portfolio', 'web developer', 'designer', 'mern stack developer', 'skills'],
  authors: [{ name: 'Arif H', url: 'https://arifprodev.vercel.app' }],
  creator: 'Arif H',
  publisher: 'Arif H',
  metadataBase: new URL('https://arifprodev.vercel.app'),
  openGraph: {
    title: 'Arif H | Professional Portfolio',
    description: 'Professional portfolio showcasing my work and skills',
    url: 'https://arifprodev.vercel.app',
    siteName: 'Arif H Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arif H | Professional Portfolio',
    description: 'Professional portfolio showcasing my work and skills',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${neueMontreal?.className} ${neueMontrealMono?.variable} antialiased`}>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          <header>  <Header /></header>
          <main className="min-h-screen">
            {children}
          </main>
          <Analytics
            debug={process.env.NEXT_NODE_ENV === 'development'}
          />
        </Providers>
      </body>
    </html>
  );
}