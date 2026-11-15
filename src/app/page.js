import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import QuoteButtons from '@/components/QuoteButtons';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import VideoGrid from '@/components/VideoGrid';
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
        <div className="glow drift -right-40 -top-40 -z-10 h-[34rem] w-[34rem] bg-navy-600/45" aria-hidden="true" />
        <div className="glow drift-slow -bottom-40 left-1/3 -z-10 h-[26rem] w-[26rem] bg-spark-500/20" aria-hidden="true" />

        <div className="wrap pb-10 pt-16 lg:pt-28">
          <div className="hero-in max-w-3xl">
            <p className="mb-6 flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 text-xs font-medium text-white/85 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open today until 10 pm · Urgent breakdown jobs accepted
            </p>
            <p className="eyebrow">Rabale, Navi Mumbai · Est. 2008</p>
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
                <dd className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{s.value}</dd>
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
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
              <Image
                src="/images/generated/quality-inspection.webp"
                alt="Turned steel shaft being measured with a digital vernier caliper"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="card reveal absolute -bottom-6 left-4 flex items-center gap-4 p-4 sm:left-8 sm:p-5">
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
            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title} className="reveal flex gap-4">
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
          <div className="mt-12 reveal-group grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <IndustryTile key={i.slug} item={i} />
            ))}
            <Link
              href="/contact"
              className="flex min-h-[15rem] flex-col justify-between rounded-2xl border border-dashed border-white/25 bg-white/5 p-5 transition-colors hover:bg-white/10"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-spark-500 text-white">
                <Icon name="plus" size={20} />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-white">Different industry?</span>
                <span className="mt-1.5 block text-sm text-white/70">
                  If it is made of metal and has a drawing or a sample, we can probably make it. Ask us.
                </span>
              </span>
            </Link>
          </div>
        </div>
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
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-navy-100">
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
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.slice(1, 5).map((img) => (
              <Link key={img.src} href="/gallery" className="reveal group relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy-900">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
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
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card card-hover reveal flex flex-col p-6">
                <Icon name="quote" size={28} className="text-spark-500" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-steel-800" lang="hi-Latn">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-steel-100 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-700 font-display font-bold text-white">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy-900">{t.name}</span>
                    <span className="block text-xs text-steel-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="on-dark flex flex-col justify-between rounded-[1.1rem] bg-brand p-6 text-white">
              <div>
                <Icon name="message-circle" size={28} className="text-spark-400" />
                <h3 className="mt-4 text-xl font-bold">Have a job in mind?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Send a photo of the part or your drawing and get a clear answer on price and timing.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 self-start">
                Request a quote
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>
          </div>
        </div>
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
