import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <div className="wrap flex flex-col items-center py-28 text-center">
      <span className="icon-tile !h-16 !w-16">
        <Icon name="wrench" size={30} />
      </span>
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="h-lg mt-3">This page is off the drawing.</h1>
      <p className="lead mt-4 max-w-md">The page you are looking for has moved or never existed. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-navy">Back to home</Link>
        <Link href="/services" className="btn btn-outline">View services</Link>
        <Link href="/contact" className="btn btn-outline">Contact us</Link>
      </div>
    </div>
  );
}
