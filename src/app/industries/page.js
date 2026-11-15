import PageHero from '@/components/PageHero';
import QuoteButtons from '@/components/QuoteButtons';
import CtaBand from '@/components/CtaBand';
import { ServiceCard } from '@/components/Cards';
import { pageMeta } from '@/lib/seo';
import { industries } from '@/data/industries';

export const metadata = pageMeta({
  title: 'Industries We Serve: Custom Machined Components',
  description:
    'Custom machined and fabricated components for petroleum and petrochemical, oil and gas, soap manufacturing, crushing, food processing and marine industries, made in Rabale, Navi Mumbai.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Components for the industries that cannot afford downtime"
        lead="Every sector has its own materials, wear patterns and deadlines. These are the ones we know best."
        image="/images/generated/petroleum-petrochemical.webp"
        crumbs={[{ name: 'Industries', href: '/industries' }]}
      >
        <QuoteButtons />
      </PageHero>
      <section className="section">
        <div className="wrap reveal-group grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((i, idx) => (
            <ServiceCard key={i.slug} item={i} base="/industries" priority={idx < 4} />
          ))}
        </div>
      </section>
      <CtaBand title="Your industry not listed?" text="We make parts for general engineering of every kind. If you have a drawing or a sample, send it and we will tell you what is possible." />
    </>
  );
}
