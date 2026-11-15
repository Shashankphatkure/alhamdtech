'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { site, nav, whatsappLink } from '@/lib/site';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const groups = [
    { label: 'Services', href: '/services', base: '/services', items: services },
    { label: 'Industries', href: '/industries', base: '/industries', items: industries },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-11 w-11 place-items-center rounded-xl border border-steel-200 bg-white text-navy-900"
      >
        <Icon name="menu" size={22} />
      </button>

      {open &&
        createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" aria-label="Close menu" className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="animate-[drawer-in_0.28s_ease-out] absolute inset-y-0 right-0 flex w-[min(22rem,90vw)] flex-col bg-white shadow-2xl">
            <div className="flex h-[4.25rem] items-center justify-between border-b border-steel-200 px-5">
              <span className="font-display text-lg font-extrabold text-navy-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-xl border border-steel-200 text-navy-900"
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
              {groups.map((group) => (
                <details key={group.href} className="border-b border-steel-100 py-1">
                  <summary className="flex items-center justify-between py-3 text-base font-semibold text-navy-900">
                    {group.label}
                    <Icon name="plus" size={18} className="faq-plus text-steel-400 transition-transform" />
                  </summary>
                  <div className="grid gap-1 pb-3">
                    <Link href={group.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-spark-600">
                      All {group.label.toLowerCase()}
                    </Link>
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`${group.base}/${item.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-steel-800 hover:bg-navy-50"
                      >
                        <Icon name={item.icon} size={16} className="text-navy-700" />
                        {item.navTitle}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              {nav.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-steel-100 py-4 text-base font-semibold text-navy-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="grid gap-2 border-t border-steel-200 p-5">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="whatsapp" size={18} />
                WhatsApp for a quote
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                <Icon name="phone" size={17} />
                {site.phone}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
