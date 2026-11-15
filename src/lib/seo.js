import { site, absoluteUrl, fullAddress } from './site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const DEFAULT_IMAGE = '/og.jpg';

// Builds a complete metadata object (canonical, Open Graph, Twitter) for a page.
export function pageMeta({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website', keywords, absoluteTitle = false, extra = {} }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: 'en_IN',
      type,
      images: [{ url: image, alt: title }],
      ...extra,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}

export const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: '+919022726250',
    email: site.email,
    image: absoluteUrl(DEFAULT_IMAGE),
    logo: absoluteUrl('/icon.svg'),
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: 'Navi Mumbai',
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapLink,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    areaServed: ['Navi Mumbai', 'Thane', 'Mumbai', ...locations.map((l) => l.name)].filter((v, i, a) => a.indexOf(v) === i),
    sameAs: [site.youtube],
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Machining and fabrication services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
  };
}

export function serviceSchema({ name, description, path, image, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: serviceType || name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : undefined,
    provider: { '@id': businessId },
    areaServed: ['Navi Mumbai', 'Thane', 'Mumbai'],
  };
}

export { fullAddress };
