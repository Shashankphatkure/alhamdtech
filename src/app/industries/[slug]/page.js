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
import { industries, getIndustry } from '@/data/industries';
import { getService } from '@/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMeta({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    image: industry.image,
  });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const used = industry.services.map(getService).filter(Boolean);
  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        lead={industry.short}
        image={industry.image}
        crumbs={[
          { name: 'Industries', href: '/industries' },
          { name: industry.navTitle, href: `/industries/${industry.slug}` },
        ]}
      >
        <QuoteButtons subject={industry.title.toLowerCase()} />
      </PageHero>

      <section className="section">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h-lg">Made for the conditions your equipment works in.</h2>
            <div className="prose-body mt-6">
              {industry.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h2 className="h-md mt-12">Parts we make and repair</h2>
            <div className="mt-6">
              <CheckList items={industry.parts} />
            </div>
          </div>
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
              <Image src={industry.image} alt={industry.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-3 text-xs text-steel-400">Representative image.</p>
          </div>
        </div>
      </section>

      <section className="on-dark section relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="wrap">
          <SectionHeading eyebrow="What matters here" title="How we approach this work." />
          <div className="mt-12 reveal-group grid gap-5 md:grid-cols-3">
            {industry.considerations.map((c, i) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="font-display text-sm font-bold text-spark-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Processes used" title="Services behind these components" />
          <div className="mt-10 reveal-group grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {used.map((s) => (
              <ServiceCard key={s.slug} item={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Faq items={industry.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-md">Other industries we serve</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((i) => (
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

      <CtaBand subject={industry.title.toLowerCase()} />

      <JsonLd
        data={serviceSchema({
          name: industry.title,
          serviceType: `${industry.navTitle} component machining`,
          description: industry.metaDescription,
          path: `/industries/${industry.slug}`,
          image: industry.image,
        })}
      />
    </>
  );
}
