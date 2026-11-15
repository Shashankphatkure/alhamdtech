# Alhamd Technologies website

Marketing site for Alhamd Technologies, a machining and fabrication workshop in Rabale, Navi Mumbai.
Built with Next.js (App Router) and Tailwind CSS v4. Every page is statically generated.

## Run locally

```bash
npm install
npm run dev
```

## Where things live

| What | File |
| --- | --- |
| Phone, email, address, hours, site URL | `src/lib/site.js` |
| Services (8 pages) | `src/data/services.js` |
| Industries (7 pages) | `src/data/industries.js` |
| Area pages (8 pages) | `src/data/locations.js` |
| Blog articles | `src/data/posts.js` |
| Stats, FAQs, testimonials, gallery, videos, materials | `src/data/content.js` |
| Colours, typography, animations | `src/app/globals.css` |
| Metadata and JSON-LD helpers | `src/lib/seo.js` |

Adding an entry to a data file creates the page, adds it to the navigation and footer, and adds it to
`/sitemap.xml` automatically.

## SEO setup

- Canonical URLs, Open Graph and Twitter tags on every page (`pageMeta` in `src/lib/seo.js`)
- JSON-LD: LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting, ImageGallery, VideoObject
- `/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest` are generated from the data files

Environment variables (optional):

- `NEXT_PUBLIC_SITE_URL` – set when a custom domain is connected (defaults to `https://alhamdtech.vercel.app`)
- `NEXT_PUBLIC_GSC_VERIFICATION` – Google Search Console verification token

## Images

`public/images/generated/` holds AI-generated illustrative images used for services, industries and articles.
`public/images/*.webp` are real photographs from the workshop, shown in the gallery.
