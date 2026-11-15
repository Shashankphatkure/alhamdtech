import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';
import { pageMeta } from '@/lib/seo';
import { generalFaqs } from '@/data/content';
import { services } from '@/data/services';

export const metadata = pageMeta({
  title: 'Frequently Asked Questions about Machining Job Work',
  description:
    'Answers to common questions about machining and fabrication job work at Alhamd Technologies: quotes, minimum quantity, materials, turnaround, working hours and areas served.',
  path: '/faq',
});

export default function FaqPage() {
  const serviceFaqs = services.map((s) => ({ title: s.title, slug: s.slug, items: s.faqs.slice(0, 2) }));
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Straight answers about how we work, what we can make and how to get a quote."
        image="/images/generated/quality-inspection.webp"
        crumbs={[{ name: 'FAQ', href: '/faq' }]}
      />
      <section className="section">
        <div className="wrap max-w-4xl">
          <SectionHeading eyebrow="General" title="Working with Alhamd Technologies" />
          <div className="mt-8">
            <Faq items={[...generalFaqs, ...serviceFaqs.flatMap((g) => g.items)]} schema />
          </div>
        </div>
      </section>
      <CtaBand title="Still have a question?" text="Call or message us and talk to someone who works on the machines." />
    </>
  );
}
