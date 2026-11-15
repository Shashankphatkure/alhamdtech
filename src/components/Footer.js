import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import { site, fullAddress, whatsappLink } from '@/lib/site';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';

const company = [
  { label: 'About us', href: '/about' },
  { label: 'Materials we machine', href: '/materials' },
  { label: 'Work gallery', href: '/gallery' },
  { label: 'Blog & guides', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Areas we serve', href: '/locations' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

function Column({ title, children }) {
  return (
    <div>
      <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] !text-white">{title}</h2>
      <ul className="grid gap-2.5 text-sm text-white/65">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-spark-400">
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="wrap relative pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_3fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Precision machining and fabrication workshop in Rabale, Navi Mumbai. Est. 2008. Custom parts and repairs,
              made to your sample or drawing.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-white/80">
              <li className="flex gap-3">
                <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-spark-400" />
                <address className="not-italic leading-relaxed">{fullAddress}</address>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                  <Icon name="phone" size={18} className="shrink-0 text-spark-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                  <Icon name="mail" size={18} className="shrink-0 text-spark-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="clock" size={18} className="shrink-0 text-spark-400" />
                {site.hours.days}, {site.hours.label}
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Alhamd Technologies"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-spark-500"
              >
                <Icon name="whatsapp" size={19} />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alhamd Technologies on YouTube"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-spark-500"
              >
                <Icon name="youtube" size={19} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            <Column title="Services">
              {services.map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                  {s.navTitle}
                </FooterLink>
              ))}
            </Column>
            <Column title="Industries">
              {industries.map((i) => (
                <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                  {i.navTitle}
                </FooterLink>
              ))}
            </Column>
            <Column title="Areas served">
              {locations.map((l) => (
                <FooterLink key={l.slug} href={`/locations/${l.slug}`}>
                  {l.name}
                </FooterLink>
              ))}
            </Column>
            <Column title="Company">
              {company.map((c) => (
                <FooterLink key={c.href} href={c.href}>
                  {c.label}
                </FooterLink>
              ))}
            </Column>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
