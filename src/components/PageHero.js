import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import Rings from './Rings';

export default function PageHero({ eyebrow, title, lead, image, imageAlt = '', crumbs, children }) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-950 text-white">
      {image && (
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="ken-burns z-0 object-cover opacity-45" />
      )}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/30" aria-hidden="true" />
      <div className="bg-grid absolute inset-0 z-0" aria-hidden="true" />
      <Rings className="absolute -bottom-40 right-0 z-0 hidden w-[34rem] opacity-90 md:block xl:right-[max(2rem,calc((100vw-78rem)/2))]" />
      <div className="wrap pb-16 pt-10 lg:pb-24 lg:pt-14">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="hero-in mt-10 max-w-3xl lg:mt-14">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="h-xl mt-4">{title}</h1>
          <span className="rule mt-6" aria-hidden="true" />
          {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-spark-500 via-spark-400 to-transparent" aria-hidden="true" />
    </section>
  );
}
