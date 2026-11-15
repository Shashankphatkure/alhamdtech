import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { pageMeta, businessId } from '@/lib/seo';
import { site, fullAddress, whatsappLink, absoluteUrl } from '@/lib/site';
import { services } from '@/data/services';

export const metadata = pageMeta({
  title: 'Contact & Request a Quote',
  description:
    'Contact Alhamd Technologies, Rabale, Navi Mumbai for machining and fabrication quotes. Call +91 90227 26250, WhatsApp your drawing or visit the workshop. Open 8 am – 10 pm, all days.',
  path: '/contact',
});

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ContactPage() {
  const channels = [
    { icon: 'phone', label: 'Call us', value: site.phone, href: site.phoneHref, note: 'Speak to the workshop directly' },
    { icon: 'whatsapp', label: 'WhatsApp', value: 'Send drawing or photos', href: whatsappLink(), note: 'Fastest way to get a quote', external: true },
    { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}`, note: 'For drawings and purchase orders' },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote or talk to the workshop"
        lead="Send a drawing, a sample photo or just a description. We will reply with price and delivery time."
        image="/images/generated/engineering-drawing.webp"
        crumbs={[{ name: 'Contact', href: '/contact' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card card-hover flex min-w-0 items-center gap-4 p-5"
              >
                <span className="icon-tile !h-12 !w-12">
                  <Icon name={c.icon} size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-steel-400">{c.label}</span>
                  <span className="block truncate font-display text-base font-semibold text-navy-900">{c.value}</span>
                  <span className="block text-xs text-steel-600">{c.note}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <ContactForm serviceOptions={services.map((s) => s.title)} />

            <div className="grid gap-5 self-start">
              <div className="card p-6">
                <h2 className="h-md flex items-center gap-3">
                  <Icon name="clock" size={22} className="text-spark-500" />
                  Business hours
                </h2>
                <dl className="mt-5 grid gap-1.5 text-sm">
                  {days.map((d) => (
                    <div key={d} className="flex items-center justify-between rounded-lg px-3 py-2 odd:bg-steel-50">
                      <dt className="font-medium text-steel-800">{d}</dt>
                      <dd className="font-semibold text-navy-700">{site.hours.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs font-medium text-steel-600">We are available to serve you every day.</p>
              </div>

              <div className="on-dark rounded-[1.1rem] bg-brand p-6 text-white">
                <h2 className="h-md">Workshop address</h2>
                <address className="mt-3 text-sm not-italic leading-relaxed text-white/80">{fullAddress}</address>
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">
                  <Icon name="navigation" size={17} />
                  Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="card mt-8 overflow-hidden">
            <iframe
              src={site.mapEmbed}
              title="Alhamd Technologies location on Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full border-0"
            />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: absoluteUrl('/contact'),
          name: `Contact ${site.name}`,
          mainEntity: { '@id': businessId },
        }}
      />
    </>
  );
}
