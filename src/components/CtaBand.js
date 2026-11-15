import Link from 'next/link';
import Icon from './Icon';
import QuoteButtons from './QuoteButtons';

export default function CtaBand({
  title = 'Have a drawing or a broken part? Send it over.',
  text = 'Share a drawing, a sample or a photo with dimensions. We will come back with price and delivery, usually the same day.',
  subject,
}) {
  return (
    <section className="wrap pb-20 lg:pb-28">
      <div className="on-dark relative isolate overflow-hidden reveal rounded-[1.75rem] bg-brand px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="glow drift -right-24 -top-24 -z-10 h-80 w-80 bg-spark-500/40" aria-hidden="true" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="h-lg">{title}</h2>
            <p className="lead mt-4 max-w-xl">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row lg:justify-end">
            <QuoteButtons subject={subject} />
          </div>
        </div>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
          Or use the enquiry form
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </section>
  );
}
