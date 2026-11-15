import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { ServiceCard, CheckList } from '@/components/Cards';
import { pageMeta, serviceSchema } from '@/lib/seo';
import { site, fullAddress } from '@/lib/site';
import { locations, getLocation } from '@/data/locations';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMeta({ title: loc.title, description: loc.metaDescription, path: `/locations/${loc.slug}`, image: '/images/generated/about-workshop.webp' });
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const faqs = [
    {
      q: `Do you take machining job work from ${loc.name}?`,
      a: `Yes. We regularly serve customers in ${loc.name} from our workshop at ${site.address.line1}, Rabale, Navi Mumbai. ${loc.access}`,
    },
    {
      q: `How do I send a job from ${loc.name}?`,
      a: 'Send the drawing or photos of the sample on WhatsApp or email for a quote. Once confirmed, drop the material or sample at the workshop, or ask us to source the material. Finished parts can be collected or sent by local transport.',
    },
    {
      q: 'What are your working hours?',
      a: `We are open ${site.hours.days}, ${site.hours.label}, so jobs can be dropped off or collected after regular shift hours.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Serving ${loc.name}`}
        title={loc.title}
        lead={loc.intro}
        image="/images/generated/about-workshop.webp"
        crumbs={[
          { name: 'Areas we serve', href: '/locations' },
          { name: loc.name, href: `/locations/${loc.slug}` },
        ]}
      >
        <QuoteButtons subject={`a machining job (${loc.name})`} />
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-lg">A machine shop within reach of {loc.name}.</h2>
            <div className="prose-body mt-6">
              {loc.local.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h2 className="h-md mt-12">Who we work with in {loc.name}</h2>
            <div className="mt-6">
              <CheckList items={loc.customers} />
            </div>
          </div>
          <aside className="card self-start p-6">
            <h2 className="h-md">Find the workshop</h2>
            <ul className="mt-5 grid gap-4 text-sm leading-relaxed text-steel-800">
              <li className="flex gap-3">
                <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-spark-500" />
                <address className="not-italic">{fullAddress}</address>
              </li>
              <li className="flex gap-3">
                <Icon name="route" size={18} className="mt-0.5 shrink-0 text-spark-500" />
                {loc.access}
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-spark-500" />
                {site.hours.days}, {site.hours.label}
              </li>
            </ul>
            <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-navy mt-6 w-full">
              <Icon name="navigation" size={17} />
              Open in Google Maps
            </a>
          </aside>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap">
          <SectionHeading eyebrow="Services" title={`Job work available for ${loc.name}`} />
          <div className="mt-10 reveal-group grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} item={s} />
            ))}
          </div>
          <h3 className="h-md mt-14">Industry specialisations</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="card card-hover flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-navy-900">
                  <Icon name={i.icon} size={17} className="text-spark-500" />
                  {i.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title={`Job work from ${loc.name}`} />
            <h3 className="mt-10 font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-900">Other areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {locations
                .filter((l) => l.slug !== loc.slug)
                .map((l) => (
                  <li key={l.slug}>
                    <Link href={`/locations/${l.slug}`} className="inline-block rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-steel-200 hover:ring-navy-700">
                      {l.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand subject={`a machining job (${loc.name})`} />

      <JsonLd
        data={{
          ...serviceSchema({
            name: loc.title,
            serviceType: 'Machining and fabrication job work',
            description: loc.metaDescription,
            path: `/locations/${loc.slug}`,
          }),
          areaServed: { '@type': 'Place', name: `${loc.name}, Maharashtra, India` },
        }}
      />
    </>
  );
}
