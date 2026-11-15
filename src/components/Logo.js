import Link from 'next/link';

export default function Logo({ dark = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Alhamd Technologies home">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-spark-500 text-white shadow-[0_8px_20px_-8px_rgb(238_101_16/0.8)] transition-transform group-hover:-rotate-6">
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 5 6 27h4.6l1.9-4.5h7l1.900 4.500H26L16 5Zm-1.900 13.800L16 14.200l1.900 4.600h-3.800Z" fill="currentColor" />
          <path d="M4 27h24" stroke="#fff" opacity="0.55" strokeWidth="2.400" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-sans text-[1.05rem] font-extrabold tracking-[0.08em] ${dark ? 'text-white' : 'text-navy-900'}`}>
          ALHAMD
        </span>
        <span className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/60' : 'text-steel-400'}`}>
          Technologies
        </span>
      </span>
    </Link>
  );
}
