import Icon from './Icon';
import { site, whatsappLink } from '@/lib/site';

export default function QuoteButtons({ subject, dark = true }) {
  const message = subject
    ? `Hello Alhamd Technologies, I need a quote for ${subject}.`
    : undefined;
  return (
    <>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        <Icon name="whatsapp" size={18} />
        Get a quote on WhatsApp
      </a>
      <a href={site.phoneHref} className={`btn ${dark ? 'btn-glass' : 'btn-outline'}`}>
        <Icon name="phone" size={17} />
        {site.phone}
      </a>
    </>
  );
}
