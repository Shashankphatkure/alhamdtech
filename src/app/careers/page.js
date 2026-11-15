import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';
import { CheckList } from '@/components/Cards';
import { pageMeta } from '@/lib/seo';
import { site, fullAddress, whatsappLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Careers: Lathe Operator & Machinist Jobs in Rabale, Navi Mumbai',
  description:
    'Alhamd Technologies is hiring skilled lathe operators and machinists at its Rabale, Navi Mumbai workshop. Call +91 90227 26250 or email to apply or refer someone.',
  path: '/careers',
});

const roles = [
  {
    icon: 'rotate-cw',
    title: 'Lathe operator',
    text: 'Turning, boring, facing and thread cutting on conventional lathes, working from drawings and samples.',
  },
  {
    icon: 'cog',
    title: 'Machinist',
    text: 'Milling, drilling, tapping and slotting work, setting up jobs and measuring to drawing.',
  },
];

export default function CareersPage() {
  const message = `Hello ${site.name}, I would like to apply for a lathe operator / machinist job.`;
  return (
    <>
      <PageHero
        eyebrow="We are hiring"
        title="Skilled lathe operators and machinists wanted"
        lead="Join a workshop founded and run by a machinist. If you take pride in holding a size and finishing a job properly, we would like to hear from you."
        image="/images/generated/lathe-work.webp"
        crumbs={[{ name: 'Careers', href: '/careers' }]}
      >
        <a href={site.phoneHref} className="btn btn-primary">
          <Icon name="phone" size={17} />
          Call {site.phone}
        </a>
        <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
          <Icon name="whatsapp" size={18} />
          Apply on WhatsApp
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Open roles" title="Who we are looking for" />
            <div className="reveal-group mt-12 grid gap-5 sm:grid-cols-2">
              {roles.map((r) => (
                <div key={r.title} className="card card-hover reveal p-6">
                  <span className="icon-tile">
                    <Icon name={r.icon} size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">{r.text}</p>
                </div>
              ))}
            </div>

            <h2 className="h-md mt-12">What helps</h2>
            <div className="mt-6">
              <CheckList
                items={[
                  'Hands-on experience on lathe or milling machines',
                  'Ability to read engineering drawings',
                  'Confident with vernier and micrometer',
                  'Care for accuracy, finish and deadlines',
                ]}
              />
            </div>

            <h2 className="h-md mt-12">Know someone suitable?</h2>
            <p className="lead mt-3">Referrals are welcome. Call or email us with their name and number.</p>
          </div>

          <aside className="card self-start p-6 sm:p-8">
            <h2 className="h-md">How to apply</h2>
            <ul className="mt-6 grid gap-4 text-steel-800">
              <li>
                <a href={site.phoneHref} className="flex gap-3 font-semibold text-navy-900 hover:text-navy-700">
                  <Icon name="phone" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent('Job application')}`} className="flex gap-3 break-all font-semibold text-navy-900 hover:text-navy-700">
                  <Icon name="mail" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="map-pin" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                <address className="text-sm not-italic leading-relaxed">{fullAddress}</address>
              </li>
              <li className="flex gap-3 text-sm">
                <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-spark-500" />
                Visit the workshop {site.hours.days}, {site.hours.label}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
