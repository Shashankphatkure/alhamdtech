import SectionHeading from '@/components/SectionHeading';
import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { ServiceCard } from '@/components/Cards';
import { pageMeta } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';
import { services } from '@/data/services';
import { process } from '@/data/content';

export const metadata = pageMeta({
  title: 'Machining & Fabrication Services in Navi Mumbai',
  description:
    'All machining and fabrication services at Alhamd Technologies, Rabale: CNC machining, lathe work, milling, drilling, tapping, slotting, band saw cutting, welding, wire cut EDM, laser and plasma cutting.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Machining and fabrication services"
        lead="Eight processes in one Rabale workshop, so your component is cut, machined, welded and finished without changing hands."
        image="/images/generated/hero-workshop.webp"
        crumbs={[{ name: 'Services', href: '/services' }]}
      >
        <QuoteButtons />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="reveal-group grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} item={s} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap">
          <SectionHeading center eyebrow="How it works" title="One process for every job, large or small." />
          <ol className="reveal-group mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <li key={step.title} className="card card-hover reveal relative p-6">
                <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-navy-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="icon-tile">
                  <Icon name={step.icon} size={21} />
                </span>
                <h3 className="mt-5 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="section-top">
        <CtaBand />
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Machining and fabrication services',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        }}
      />
    </>
  );
}
