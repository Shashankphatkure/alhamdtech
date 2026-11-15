// Single source of truth for business details. Update here and every page,
// schema block and sitemap entry follows.

export const site = {
  name: 'Alhamd Technologies',
  shortName: 'Alhamd Tech',
  // Set NEXT_PUBLIC_SITE_URL in the hosting dashboard when a custom domain is connected.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://alhamdtech.vercel.app').replace(/\/$/, ''),
  tagline: 'Precision machining & fabrication job work in Navi Mumbai',
  description:
    'Alhamd Technologies is a machining and fabrication workshop in Rabale, Navi Mumbai. CNC machining, lathe and milling job work, welding, EDM wire cut, laser and plasma cutting for industrial components.',
  phone: '+91 90227 26250',
  phoneHref: 'tel:+919022726250',
  whatsapp: '919022726250',
  email: 'thealhamdtechnologies@gmail.com',
  youtube: 'https://www.youtube.com/@TheAlhamdTechnologies',
  address: {
    line1: 'H No. 1890, Bhim Nagar, MIDC Road',
    line2: 'Opp. R-303, near Masjid, Rabale Naka',
    locality: 'Rabale, Navi Mumbai',
    region: 'Maharashtra',
    postalCode: '400701',
    country: 'IN',
  },
  geo: { lat: 19.146332, lng: 73.005869 },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9442112511206!2d73.00586867475159!3d19.146331982088835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfb90f07b83d%3A0xcbb920ab0abea5f6!2sAlhamd%20Technologies!5e0!3m2!1sen!2sin!4v1715093525421!5m2!1sen!2sin',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Alhamd+Technologies+Rabale+Navi+Mumbai',
  hours: { opens: '08:00', closes: '22:00', label: '8:00 am – 10:00 pm', days: 'Monday – Sunday' },
};

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

export function whatsappLink(message) {
  const text = message || `Hello ${site.name}, I would like a quote for a machining job.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = '/') {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Materials', href: '/materials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
