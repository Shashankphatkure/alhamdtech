import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import { readingMinutes } from '@/data/posts';

export function ServiceCard({ item, base = '/services', priority = false }) {
  return (
    <Link href={`${base}/${item.slug}`} className="card card-hover reveal group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy-900">
        <Image
          src={item.image}
          alt={`${item.title} at Alhamd Technologies`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl bg-white text-navy-700 shadow-lg">
          <Icon name={item.icon} size={21} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">{item.navTitle}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{item.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-spark-600">
          Learn more
          <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function IndustryTile({ item }) {
  return (
    <Link
      href={`/industries/${item.slug}`}
      className="reveal group relative isolate flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-5 text-white"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" aria-hidden="true" />
      <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-spark-400 backdrop-blur">
        <Icon name={item.icon} size={19} />
      </span>
      <h3 className="text-lg font-bold leading-snug !text-white">{item.navTitle}</h3>
      <p className="mt-1.5 text-sm leading-snug text-white/70">{item.short}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-spark-400">
        View parts we make
        <Icon name="arrow-up-right" size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function PostCard({ post }) {
  const date = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <Link href={`/blog/${post.slug}`} className="card card-hover reveal group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-none bg-white/95 px-3 py-1 text-xs font-semibold text-navy-700">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-steel-400">
          <time dateTime={post.date}>{date}</time> · {readingMinutes(post)} min read
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-navy-700">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 group-hover:text-spark-600">
          Read article
          <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function CheckList({ items, columns = 2 }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-steel-800">
          <Icon name="circle-check" size={20} className="mt-0.5 shrink-0 text-spark-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
