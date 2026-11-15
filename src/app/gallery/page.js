import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import GalleryGrid from '@/components/GalleryGrid';
import VideoGrid from '@/components/VideoGrid';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { pageMeta } from '@/lib/seo';
import { site, absoluteUrl } from '@/lib/site';
import { gallery, videos } from '@/data/content';

export const metadata = pageMeta({
  title: 'Work Gallery: Machined Parts & Workshop Videos',
  description:
    'Photos and videos of machined components and lathe and milling work carried out at the Alhamd Technologies workshop in Rabale, Navi Mumbai.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Work from our shop floor"
        lead="Unfiltered photos of real jobs: shafts, flanges, bushes and discs machined at our Rabale workshop."
        image="/images/generated/shaft-repair.webp"
        crumbs={[{ name: 'Gallery', href: '/gallery' }]}
      />

      <section className="section">
        <div className="wrap">
          <GalleryGrid images={gallery} />
        </div>
      </section>

      <section className="section border-y border-steel-200 bg-white">
        <div className="wrap">
          <SectionHeading eyebrow="Videos" title="See the machines at work." lead="Clips from our YouTube channel." />
          <div className="mt-10">
            <VideoGrid videos={videos} />
          </div>
          <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-8">
            <Icon name="youtube" size={19} />
            Visit our YouTube channel
          </a>
        </div>
      </section>

      <div className="pt-20 lg:pt-28">
        <CtaBand />
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: `${site.name} work gallery`,
          url: absoluteUrl('/gallery'),
          image: gallery.map((g) => ({ '@type': 'ImageObject', contentUrl: absoluteUrl(g.src), caption: g.alt })),
        }}
      />
      {videos.map((v) => (
        <JsonLd
          key={v.id}
          data={{
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: v.title,
            description: `${v.title}. Video from the ${site.name} workshop in Rabale, Navi Mumbai.`,
            thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
            embedUrl: `https://www.youtube.com/embed/${v.id}`,
            contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
          }}
        />
      ))}
    </>
  );
}
