import Link from 'next/link';
import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { pageMeta } from '@/lib/seo';
import { site, fullAddress } from '@/lib/site';
import { locations } from '@/data/locations';

export const metadata = pageMeta({
  title: 'Areas We Serve in Navi Mumbai, Thane & Mumbai',
  description:
    'Alhamd Technologies provides machining and fabrication job work across Navi Mumbai, Thane and Mumbai from its Rabale MIDC workshop: Rabale, Airoli, Ghansoli, Mahape, Turbhe, Taloja and more.',
  path: '/locations',
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we serve"
        title="Machining job work across Navi Mumbai, Thane and Mumbai"
        lead="One workshop in Rabale MIDC, on the Thane-Belapur Road, within easy reach of every TTC industrial node."
        image="/images/generated/about-workshop.webp"
        crumbs={[{ name: 'Areas we serve', href: '/locations' }]}
      >
        <QuoteButtons />
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {locations.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`} className="card card-hover group flex gap-5 p-6">
              <span className="icon-tile">
                <Icon name="map-pin" size={21} />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-navy-900">{l.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-steel-600">{l.intro}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-spark-600">
                  {l.title}
                  <Icon name="arrow-right" size={16} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section-bottom">
        <div className="card overflow-hidden">
          <iframe
            src={site.mapEmbed}
            title="Map showing Alhamd Technologies in Rabale, Navi Mumbai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[26rem] w-full border-0"
          />
          <p className="flex items-start gap-3 p-5 text-sm text-steel-600">
            <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-spark-500" />
            {fullAddress}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
