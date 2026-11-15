import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { PostCard } from '@/components/Cards';
import { pageMeta, businessId } from '@/lib/seo';
import { site, absoluteUrl } from '@/lib/site';
import { posts, getPost, readingMinutes } from '@/data/posts';
import { getService } from '@/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    extra: { publishedTime: post.date, authors: [site.name], section: post.category },
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const related = post.services.map(getService).filter(Boolean);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-steel-200 bg-white">
          <div className="wrap max-w-4xl pb-10 pt-8">
            <Breadcrumbs
              dark={false}
              items={[
                { name: 'Blog', href: '/blog' },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="h-xl mt-4 !text-[clamp(2rem,4.4vw,3.25rem)]">{post.title}</h1>
            <p className="lead mt-5">{post.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-steel-600">
              <span className="flex items-center gap-2">
                <Icon name="calendar" size={16} className="text-spark-500" />
                <time dateTime={post.date}>{date}</time>
              </span>
              <span className="flex items-center gap-2">
                <Icon name="clock" size={16} className="text-spark-500" />
                {readingMinutes(post)} min read
              </span>
              <span className="flex items-center gap-2">
                <Icon name="hard-hat" size={16} className="text-spark-500" />
                By the {site.name} team
              </span>
            </p>
          </div>
        </header>

        <div className="wrap max-w-4xl py-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-navy-900 shadow-[var(--shadow-lift)] reveal">
            <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 860px, 100vw" className="object-cover" />
          </div>

          <div className="prose-body mx-auto mt-12 max-w-3xl">
            {post.sections.map((section, i) => (
              <section key={section.h || i}>
                {section.h && <h2>{section.h}</h2>}
                {section.p?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <aside className="mx-auto mt-14 max-w-3xl rounded-[1.1rem] border border-navy-100 bg-navy-50 p-6">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">Related services</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 ring-1 ring-navy-100 hover:ring-navy-700">
                      <Icon name={s.icon} size={17} className="text-spark-500" />
                      {s.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <section className="section border-t border-steel-200 bg-white">
        <div className="wrap">
          <h2 className="h-lg">More guides</h2>
          <div className="mt-10 reveal-group grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <CtaBand />
      </div>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.image),
          datePublished: post.date,
          dateModified: post.date,
          articleSection: post.category,
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          author: { '@type': 'Organization', name: site.name, url: site.url },
          publisher: { '@id': businessId },
        }}
      />
    </>
  );
}
