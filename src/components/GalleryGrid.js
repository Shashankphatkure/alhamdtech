'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback((d) => setActive((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-steel-200 bg-navy-900 shadow-[var(--shadow-card)]"
            aria-label={`Open photo: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center bg-navy-950/0 text-white opacity-0 transition-all group-hover:bg-navy-950/40 group-hover:opacity-100">
              <Icon name="search" size={26} />
            </span>
          </button>
        ))}
      </div>

      {active !== null &&
        createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <Icon name="x" size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="chevron-right" size={22} className="rotate-180" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].w}
              height={images[active].h}
              sizes="90vw"
              className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">{images[active].alt}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="chevron-right" size={22} />
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
