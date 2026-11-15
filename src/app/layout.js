import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import { site, whatsappLink } from '@/lib/site';
import { localBusinessSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | CNC Machining, Lathe & Fabrication Job Work in Navi Mumbai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: 'Manufacturing',
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Add the Google Search Console token in NEXT_PUBLIC_GSC_VERIFICATION to verify the site.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export const viewport = {
  themeColor: '#1a3be0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Alhamd Technologies on WhatsApp"
          className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.8)] pulse-ring transition-transform hover:scale-110"
        >
          <Icon name="whatsapp" size={28} />
        </a>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${site.url}/#website`,
            url: site.url,
            name: site.name,
            inLanguage: 'en-IN',
            publisher: { '@id': `${site.url}/#business` },
          }}
        />
      </body>
    </html>
  );
}
