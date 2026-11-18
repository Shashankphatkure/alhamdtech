import Image from 'next/image';
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
import { site } from '@/lib/site';
import { services, getService } from '@/data/services';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter(Boolean);
  const usedBy = industries.filter((i) => i.services.includes(service.slug));

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={`${service.title} in Navi Mumbai`}
        lead={service.short}
        image={service.image}
        crumbs={[
          { name: 'Services', href: '/services' },
          { name: service.navTitle, href: `/services/${service.slug}` },
        ]}
      >
        <QuoteButtons subject={service.title.toLowerCase()} />
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-lg">{service.title}: how we handle it.</h2>
            <div className="prose-body mt-6">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
              <Image
                src={service.image}
                alt={`${service.title} in progress`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-steel-400">Representative image of the process.</p>

            <h2 className="h-md mt-12">What we can do</h2>
            <div className="mt-6">
              <CheckList items={service.capabilities} />
            </div>

            <h2 className="h-md mt-12">Typical parts and applications</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {service.applications.map((a) => (
                <li key={a} className="rounded-none border border-steel-200 bg-white px-4 py-2 text-sm font-medium text-steel-800">
                  {a}
                </li>
              ))}
            </ul>

            {usedBy.length > 0 && (
              <>
                <h2 className="h-md mt-12">Industries that use this service</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {usedBy.map((i) => (
                    <Link key={i.slug} href={`/industries/${i.slug}`} className="card card-hover flex items-center gap-3 p-4">
                      <span className="icon-tile">
                        <Icon name={i.icon} size={20} />
                      </span>
                      <span className="text-sm font-semibold text-navy-900">{i.navTitle}</span>
                      <Icon name="arrow-right" size={16} className="ml-auto text-steel-400" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="h-md">Get a quote for {service.title.toLowerCase()}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">Send us these four things and we will reply with price and delivery.</p>
              <ul className="mt-5 grid gap-3 text-sm text-steel-800">
                {[
                  ['file-text', 'Drawing, model or photo of the sample'],
                  ['layers', 'Material and grade'],
                  ['boxes', 'Quantity required'],
                  ['calendar', 'Date you need it by'],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="icon-tile !h-9 !w-9 !rounded-lg">
                      <Icon name={icon} size={17} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-2.5">
                <QuoteButtons subject={service.title.toLowerCase()} dark={false} />
                <Link href="/contact" className="btn btn-navy">
                  Open enquiry form
                  <Icon name="arrow-right" size={17} />
                </Link>
              </div>
              <p className="mt-5 flex items-start gap-2 border-t border-steel-100 pt-4 text-xs leading-relaxed text-steel-600">
                <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-spark-500" />
                Open {site.hours.days}, {site.hours.label}
              </p>
            </div>

            <div className="mt-5 rounded-none border border-steel-200 bg-navy-50 p-6">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">Available across</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/locations/${l.slug}`} className="inline-block rounded-none bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-100 hover:ring-navy-700">
                      {l.label || l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title={`${service.title}: common questions`} />
          <Faq items={service.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Related services" title="Often combined with" />
          <div className="mt-12 reveal-group grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} item={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand subject={service.title.toLowerCase()} />

      <JsonLd
        data={serviceSchema({
          name: `${service.title} in Navi Mumbai`,
          serviceType: service.title,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
          image: service.image,
        })}
      />
    </>
  );
}
