import Icon from './Icon';
import JsonLd from './JsonLd';

export default function Faq({ items, schema = true }) {
  return (
    <>
      <div className="reveal-group grid gap-3">
        {items.map((item) => (
          <details key={item.q} className="card reveal group px-5 py-1 open:border-navy-300 open:shadow-[var(--shadow-lift)] sm:px-6">
            <summary className="flex items-center justify-between gap-4 py-4">
              <h3 className="text-base font-semibold leading-snug text-navy-900 sm:text-[1.05rem]">{item.q}</h3>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-700">
                <Icon name="plus" size={17} className="faq-plus transition-transform duration-200" />
              </span>
            </summary>
            <p className="pb-5 pr-10 leading-relaxed text-steel-600">{item.a}</p>
          </details>
        ))}
      </div>
      {schema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }}
        />
      )}
    </>
  );
}
