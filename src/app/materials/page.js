import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import Icon from '@/components/Icon';
import { pageMeta } from '@/lib/seo';
import { materials } from '@/data/content';

export const metadata = pageMeta({
  title: 'Materials We Machine: Steel, Stainless, Aluminium, Brass & More',
  description:
    'Materials machined at Alhamd Technologies, Navi Mumbai: mild steel, EN8, EN19, EN24, stainless steel 304 and 316, aluminium, brass, bronze, cast iron and engineering plastics. Customer-supplied material accepted.',
  path: '/materials',
  image: '/images/generated/raw-materials.webp',
});

const faqs = [
  { q: 'Can I supply my own material?', a: 'Yes. Customer-supplied bar, plate, castings and forgings are welcome. The material is kept identified through the job and offcuts are returned on request.' },
  { q: 'Can you source material with a test certificate?', a: 'Tell us when you enquire that a material test certificate is required and we will source the material accordingly.' },
  { q: 'I do not know what my old part is made of. What should I do?', a: 'Tell us what the part does and the conditions it works in. In most cases a suitable grade can be chosen from the application. For critical parts the old material can be tested.' },
  { q: 'Do you machine hardened parts?', a: 'Parts are normally machined before hardening. Where a hardened part needs a profile cut or corrected, wire cut EDM is used.' },
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials"
        title="Materials we machine and fabricate"
        lead="The right grade is half the life of a part. Here is what we work with every week, and where each one makes sense."
        image="/images/generated/raw-materials.webp"
        crumbs={[{ name: 'Materials', href: '/materials' }]}
      >
        <QuoteButtons />
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-5 md:grid-cols-2">
            {materials.map((m) => (
              <article key={m.name} className="card card-hover reveal p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="h-md">{m.name}</h2>
                  <span className="icon-tile">
                    <Icon name="cylinder" size={20} />
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-spark-600">{m.grades}</p>
                <p className="mt-4 leading-relaxed text-steel-600">{m.notes}</p>
                <p className="mt-5 flex items-start gap-2.5 border-t border-steel-100 pt-4 text-sm text-steel-800">
                  <Icon name="wrench" size={16} className="mt-0.5 shrink-0 text-navy-700" />
                  <span>
                    <strong className="font-semibold">Typical uses:</strong> {m.uses}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
            <Image src="/images/generated/raw-materials.webp" alt="Rack of steel, stainless steel, brass and aluminium bar stock" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Not sure which grade?"
              title="Tell us the duty. We will suggest the material."
              lead="Describe what the part does, what it runs against and whether it sees water, chemicals, heat or shock. That is usually enough to choose a grade that lasts without over-spending."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/blog/choosing-the-right-material-for-machined-parts" className="inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-spark-600">
                Guide: choosing the right material
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link href="/blog/ss-304-vs-ss-316-for-food-and-marine-parts" className="inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-spark-600">
                Guide: SS 304 vs SS 316
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title="Material questions" />
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
