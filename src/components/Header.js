import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { site, nav, whatsappLink } from '@/lib/site';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

function Dropdown({ label, href, items, base, columns = 1 }) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-steel-800 transition-colors hover:text-navy-700"
      >
        {label}
        <Icon name="chevron-down" size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className={`card grid gap-1 p-3 ${columns === 2 ? 'w-[38rem] grid-cols-2' : 'w-80'}`}>
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${base}/${item.slug}`}
              className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-navy-50"
            >
              <span className="icon-tile !h-9 !w-9 !rounded-lg">
                <Icon name={item.icon} size={17} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">{item.navTitle}</span>
                <span className="mt-0.5 block text-xs leading-snug text-steel-600">{item.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-navy-900 text-white/80 md:block">
        <div className="wrap flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Icon name="map-pin" size={14} className="text-spark-400" />
            MIDC Road, Rabale, Navi Mumbai 400701
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="clock" size={14} className="text-spark-400" />
              Open daily {site.hours.label}
            </span>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Icon name="mail" size={14} className="text-spark-400" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-steel-200 bg-white/90 backdrop-blur-xl">
        <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center lg:flex" aria-label="Main">
            <Dropdown label="Services" href="/services" items={services} base="/services" columns={2} />
            <Dropdown label="Industries" href="/industries" items={industries} base="/industries" columns={2} />
            {nav.slice(2).filter((item) => item.href !== '/careers').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-steel-800 transition-colors hover:text-navy-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="hidden items-center gap-2.5 pr-2 xl:flex">
              <span className="icon-tile !h-10 !w-10">
                <Icon name="phone" size={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-steel-400">Call us</span>
                <span className="block text-sm font-bold text-navy-900">{site.phone}</span>
              </span>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary !hidden sm:!inline-flex">
              Get a quote
              <Icon name="arrow-right" size={17} />
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
