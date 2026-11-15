import { absoluteUrl } from '@/lib/site';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';
import { posts } from '@/data/posts';

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = 'monthly', lastModified = now) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page('/', 1, 'weekly'),
    page('/services', 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page('/industries', 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8)),
    page('/locations', 0.7),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.7)),
    page('/materials', 0.7),
    page('/about', 0.6),
    page('/gallery', 0.6),
    page('/contact', 0.8),
    page('/faq', 0.6),
    page('/blog', 0.7, 'weekly'),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.6, 'yearly', new Date(p.date))),
    page('/privacy-policy', 0.2, 'yearly'),
  ];
}
