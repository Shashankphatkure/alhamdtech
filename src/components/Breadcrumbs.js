import Link from 'next/link';
import Icon from './Icon';
import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

// items: [{ name, href }] excluding Home. The last item is the current page.
export default function Breadcrumbs({ items, dark = true }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-xs font-medium ${dark ? 'text-white/60' : 'text-steel-400'}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={dark ? 'text-white' : 'text-navy-900'}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className={dark ? 'hover:text-white' : 'hover:text-navy-700'}>
                      {item.name}
                    </Link>
                    <Icon name="chevron-right" size={13} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: absoluteUrl(item.href),
          })),
        }}
      />
    </>
  );
}
