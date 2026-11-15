import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import QuoteButtons from '@/components/QuoteButtons';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import VideoGrid from '@/components/VideoGrid';
import Rings from '@/components/Rings';
import ScrollRow from '@/components/ScrollRow';
import { ServiceCard, IndustryTile, PostCard } from '@/components/Cards';
import { site } from '@/lib/site';
import { pageMeta } from '@/lib/seo';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';
import { posts } from '@/data/posts';
import { stats, process, strengths, generalFaqs, testimonials, videos, gallery } from '@/data/content';

export const metadata = pageMeta({
  title: 'Alhamd Technologies | CNC Machining, Lathe & Fabrication Job Work in Navi Mumbai',
  absoluteTitle: true,
  description:
    'Precision machining and fabrication workshop in Rabale, Navi Mumbai, est. 2008. CNC machining, lathe and milling job work, welding, wire cut EDM, laser and plasma cutting. Open 8 am – 10 pm daily. Call +91 90227 26250.',
  path: '/',
  keywords: [
    'machining job work Navi Mumbai',
    'CNC machining Navi Mumbai',
    'lathe job work Rabale',
    'milling job work',
    'fabrication and welding Navi Mumbai',
    'precision components manufacturer',
    'Alhamd Technologies',
  ],
});

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/generated/hero-workshop.webp"
          alt="Lathes and milling machines on an engineering workshop floor"
          fill
          priority
          sizes="100vw"
          className="ken-burns -z-20 object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-900/20" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-transparent" aria-hidden="true" />
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <Rings className="absolute -right-48 top-10 -z-10 hidden w-[46rem] md:block xl:-right-24" />

        <div className="wrap pb-10 pt-16 lg:pt-28">
          <div className="hero-in max-w-3xl">
            <p className="mb-6 flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 text-xs font-medium text-white/85 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open today until 10 pm · Urgent breakdown jobs accepted
            </p>
            <p className="eyebrow">Lathe · Milling · Welding · Est. 2008</p>
            <h1 className="h-xl mt-5">
              Precision machining &amp; fabrication, <span className="text-gradient">made to your drawing.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl">
              Custom parts and repairs from a workshop built on 25+ years of hands-on machining experience. Lathe,
              milling, CNC, welding and cutting under one roof, for one urgent spare or a repeat order.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <QuoteButtons />
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              {['No minimum quantity', 'Drawing or sample accepted', 'Open 7 days, 8 am – 10 pm'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="circle-check" size={17} className="text-spark-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <dl className="hero-in mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md lg:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-950/60 px-5 py-5 sm:px-7 sm:py-6">
                <dd className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Capability marquee */}
      <div className="marquee border-b border-steel-200 bg-white py-5" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <ul key={n} className="flex shrink-0 items-center">
              {[...services, ...industries].map((item) => (
                <li key={item.slug} className="flex items-center gap-2.5 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-steel-400">
                  <Icon name={item.icon} size={17} className="text-spark-500" />
                  {item.navTitle}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="From raw bar to finished part."
              lead="Most parts need more than one operation. Keeping cutting, machining and welding together means your job moves from raw material to finished component without leaving the building."
            />
            <Link href="/services" className="btn btn-outline self-start lg:self-auto">
              All services
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
          <div className="mt-12 reveal-group grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <div className="reveal relative pb-8 lg:sticky lg:top-32 lg:pb-0">
            <div className="relative aspect-[4/3] h-full overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] lg:aspect-auto lg:h-[36rem]">
              <Image
                src="/images/generated/quality-inspection.webp"
                alt="Turned steel shaft being measured with a digital vernier caliper"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden="true" />
              <div className="on-dark absolute left-5 top-5 rounded-2xl border border-white/15 bg-navy-950/60 px-5 py-4 text-white backdrop-blur-md">
                <p className="font-display text-3xl font-semibold leading-none">25+</p>
                <p className="mt-1.5 text-xs text-white/70">years on the tools</p>
              </div>
            </div>
            <div className="card absolute bottom-0 left-5 right-5 flex items-center gap-4 p-4 sm:right-auto sm:p-5 lg:bottom-6 lg:left-6">
              <span className="icon-tile">
                <Icon name="badge-check" size={22} />
              </span>
              <p className="text-sm leading-snug text-steel-600">
                <strong className="block font-display text-base text-navy-900">Checked before dispatch</strong>
                Against your drawing or mating part
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Alhamd Technologies"
              title="A workshop that treats your breakdown like its own."
              lead="Started in 2008 by Mr. N. Hassan Khan, a machinist with over 25 years of experience in Indian and Gulf workshops. Send us your drawing. We will make the part."
            />
            <div className="reveal-group mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title} className="reveal flex gap-4 rounded-2xl border border-steel-200 bg-steel-50 p-5 transition-colors hover:border-navy-300 hover:bg-white">
                  <span className="icon-tile">
                    <Icon name={s.icon} size={21} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel-600">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-10 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-spark-600">
              More about the workshop
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="on-dark section relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Specialisations"
              title="Components for demanding industries."
              lead="From refinery flanges to soap plodder worms, we make and repair the parts that keep plants running."
            />
            <Link href="/industries" className="btn btn-glass self-start lg:self-auto">
              All industries
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
        <ScrollRow className="mt-10">
          {industries.map((i) => (
            <div key={i.slug} className="w-[min(19rem,78vw)]">
              <IndustryTile item={i} />
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[15rem] w-[min(19rem,78vw)] flex-col justify-between rounded-2xl border border-dashed border-white/25 bg-white/5 p-5 transition-colors hover:bg-white/10"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-spark-500 text-white">
              <Icon name="plus" size={20} />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold text-white">Different industry?</span>
              <span className="mt-1.5 block text-sm text-white/70">
                If it is made of metal and has a drawing or a sample, we can probably make it. Ask us.
              </span>
            </span>
          </Link>
        </ScrollRow>
      </section>

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            center
            eyebrow="How it works"
            title="From enquiry to finished part in five steps."
          />
          <ol className="reveal-group mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* Real work */}
      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="From our shop floor"
              title="Real jobs, straight off the machines."
              lead="Photos and videos of work done at our Rabale workshop."
            />
            <Link href="/gallery" className="btn btn-outline self-start lg:self-auto">
              <Icon name="images" size={17} />
              View gallery
            </Link>
          </div>
        </div>
        <ScrollRow reverse className="mt-8">
          {gallery.slice(0, 8).map((img) => (
            <Link key={img.src} href="/gallery" className="group relative block h-72 w-56 overflow-hidden rounded-2xl bg-navy-900 sm:h-80 sm:w-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="256px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
          ))}
        </ScrollRow>
        <div className="wrap">
          <div className="mt-10">
            <VideoGrid videos={videos} />
          </div>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-spark-600"
          >
            <Icon name="youtube" size={20} />
            Watch more on our YouTube channel
            <Icon name="arrow-up-right" size={16} />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="wrap">
          <SectionHeading eyebrow="Customer feedback" title="What our customers say." />
        </div>
        <ScrollRow className="mt-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex w-[min(24rem,82vw)] flex-col p-6">
              <Icon name="quote" size={28} className="text-spark-500" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-steel-800" lang="hi-Latn">
                {t.quote}
              </blockquote>
              <figcaption className="dotted-top mt-6 flex items-center gap-3 pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-display font-semibold text-white">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy-900">{t.name}</span>
                  <span className="block text-xs text-steel-400">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
          <div className="on-dark bg-brand flex w-[min(24rem,82vw)] flex-col justify-between rounded-[1.1rem] p-6 text-white">
            <div>
              <Icon name="message-circle" size={28} className="text-spark-400" />
              <h3 className="mt-4 text-xl font-semibold">Have a job in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Send a photo of the part or your drawing and get a clear answer on price and timing.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary mt-6 self-start">
              Request a quote
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </ScrollRow>
      </section>

      {/* Areas */}
      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Areas we serve"
            title="On the Thane-Belapur Road, close to every TTC node."
            lead="Our workshop is in Rabale MIDC. We serve factories and maintenance teams across Navi Mumbai, Thane and Mumbai, and send parts to other cities by transport."
          />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="card card-hover flex h-full items-center gap-2.5 px-4 py-3.5 text-sm font-semibold text-navy-900"
                >
                  <Icon name="map-pin" size={17} className="shrink-0 text-spark-500" />
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Guides"
              title="Practical machining advice."
              lead="Plain-language articles for maintenance engineers and buyers."
            />
            <Link href="/blog" className="btn btn-outline self-start lg:self-auto">
              All articles
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
          <div className="mt-12 reveal-group grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-steel-200 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions we hear every day."
              lead="Not answered here? Call or message us and speak to someone on the shop floor."
            />
            <Link href="/faq" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-spark-600">
              See all questions
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
          <Faq items={generalFaqs.slice(0, 6)} />
        </div>
      </section>

      <div className="bg-white pt-4">
        <CtaBand />
      </div>
    </>
  );
}
