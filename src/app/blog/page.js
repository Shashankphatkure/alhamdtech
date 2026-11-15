import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { PostCard } from '@/components/Cards';
import { pageMeta } from '@/lib/seo';
import { site, absoluteUrl } from '@/lib/site';
import { posts } from '@/data/posts';

export const metadata = pageMeta({
  title: 'Machining Blog: Guides for Engineers & Buyers',
  description:
    'Practical machining and fabrication guides from Alhamd Technologies: choosing materials, getting accurate quotes, CNC vs conventional machining, thread types, shaft repair and more.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Machining guides from the shop floor"
        lead="Plain-language advice for maintenance engineers, designers and purchase teams."
        image="/images/generated/engineering-drawing.webp"
        crumbs={[{ name: 'Blog', href: '/blog' }]}
      />
      <section className="section">
        <div className="wrap reveal-group grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: `${site.name} blog`,
          url: absoluteUrl('/blog'),
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.date,
          })),
        }}
      />
    </>
  );
}
