import Breadcrumbs from '@/components/Breadcrumbs';
import { pageMeta } from '@/lib/seo';
import { site, fullAddress } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: `How ${site.name} handles information shared through this website, WhatsApp, phone and email.`,
  path: '/privacy-policy',
});

export default function PrivacyPage() {
  return (
    <div className="wrap section max-w-3xl">
      <Breadcrumbs dark={false} items={[{ name: 'Privacy policy', href: '/privacy-policy' }]} />
      <h1 className="h-lg mt-8">Privacy policy</h1>
      <div className="prose-body mt-8">
        <p>
          This website is operated by {site.name}, {fullAddress}. This page explains what information we receive when you
          use the site or contact us, and how it is used.
        </p>
        <h2>Information you send us</h2>
        <p>
          The enquiry form on this website does not store your details on the site. When you press send, your message
          opens in your own WhatsApp or email application and is delivered to us through that service. We receive only
          what you choose to send: typically your name, phone number, company and details of the job.
        </p>
        <h2>How we use it</h2>
        <p>
          We use the information to prepare quotations, carry out the work you order and stay in touch about your job.
          We do not sell or rent customer information to anyone.
        </p>
        <h2>Drawings and samples</h2>
        <p>
          Drawings, models and samples you share are used only to quote for and manufacture your parts. They are not
          passed to third parties except where an outside process you have asked for requires it.
        </p>
        <h2>Third-party services</h2>
        <p>
          Pages on this site embed Google Maps and YouTube videos. These services may set their own cookies and collect
          usage data under their own privacy policies when you interact with them.
        </p>
        <h2>Contact</h2>
        <p>
          To ask about information we hold or to have it removed, call {site.phone} or write to {site.email}.
        </p>
      </div>
    </div>
  );
}
