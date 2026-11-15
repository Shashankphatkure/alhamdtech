import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { pageMeta, businessId } from '@/lib/seo';
import { site, fullAddress, absoluteUrl } from '@/lib/site';
import { services } from '@/data/services';
import { stats, strengths } from '@/data/content';

export const metadata = pageMeta({
  title: 'About Alhamd Technologies: Machine Workshop in Rabale, Navi Mumbai',
  description:
    'About Alhamd Technologies, a machining and fabrication workshop on MIDC Road, Rabale, Navi Mumbai. Established in 2008 by machinist N. Hassan Khan. Lathe, milling, CNC and welding job work for industry.',
  path: '/about',
  image: '/images/generated/about-workshop.webp',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Where excellence is not just a goal, but a guarantee."
        lead="A precision machining workshop in Rabale, Navi Mumbai, started in 2008 by a machinist with over 25 years on the tools. Custom parts and repairs, made to your sample or drawing."
        image="/images/generated/about-workshop.webp"
        crumbs={[{ name: 'About', href: '/about' }]}
      >
        <QuoteButtons />
      </PageHero>

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story · Est. 2008" title="Built on hands-on experience." />
            <div className="prose-body mt-6">
              <p>
                Alhamd Technologies was started in Navi Mumbai in 2008 by Mr. N. Hassan Khan, a machinist with over 25
                years of experience in Indian and Gulf workshops, from heavy-duty machining for oil and marine work to
                CNC operation. The workshop is built on that hands-on experience.
              </p>
              <p>
                Since then we have built our reputation one job at a time: the
                shaft that had to be back in the crusher by morning, the plodder worm copied from a part worn beyond
                recognition, the batch of flanges needed before a shutdown ended.
              </p>
              <p>
                Our approach is simple. We listen to what the part has to do, choose the right process and material,
                machine it carefully and check it before it leaves. When a cheaper method will do the job, or when a
                repair is not going to last, we say so.
              </p>
              <p>
                Because cutting, turning, milling, drilling, welding and EDM are all handled from one workshop, most
                components are completed without being passed between vendors. That keeps lead times short and
                responsibility clear.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
              <Image src="/images/generated/about-workshop.webp" alt="Engineering workshop interior with lathes and finished components" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900">
              <Image src="/images/3.webp" alt="Entrance of the Alhamd Technologies workshop in Rabale" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900">
              <Image src="/images/9.webp" alt="Large disc being machined on a lathe at Alhamd Technologies" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-navy-950 py-14 text-white">
        <div className="bg-grid absolute inset-0 z-0" aria-hidden="true" />
        <dl className="wrap grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading center eyebrow="How we work" title="Six things you can expect from us." />
          <div className="mt-12 reveal-group grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title} className="card card-hover reveal p-6">
                <span className="icon-tile">
                  <Icon name={s.icon} size={21} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Facilities & capabilities" title="What the workshop is equipped to do." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="card card-hover flex items-center gap-3 p-4">
                    <span className="icon-tile !h-10 !w-10">
                      <Icon name={s.icon} size={19} />
                    </span>
                    <span className="text-sm font-semibold text-navy-900">{s.navTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="card self-start p-6 sm:p-8">
            <h2 className="h-md">Visit the workshop</h2>
            <ul className="mt-6 grid gap-4 text-steel-800">
              <li className="flex gap-3">
                <Icon name="map-pin" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                <address className="not-italic leading-relaxed">{fullAddress}</address>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                {site.hours.days}, {site.hours.label}
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 font-semibold text-navy-900 hover:text-navy-700">
                  <Icon name="phone" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                <Icon name="navigation" size={17} />
                Get directions
              </a>
              <Link href="/gallery" className="btn btn-outline">
                <Icon name="images" size={17} />
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-top">
        <CtaBand />
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: absoluteUrl('/about'),
          name: `About ${site.name}`,
          mainEntity: { '@id': businessId },
        }}
      />
    </>
  );
}
