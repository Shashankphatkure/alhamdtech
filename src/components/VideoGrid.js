'use client';

import Image from 'next/image';
import { useState } from 'react';
import Icon from './Icon';

// Lightweight YouTube embeds: only the thumbnail loads until the visitor presses play.
export default function VideoGrid({ videos }) {
  const [playing, setPlaying] = useState(null);
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {videos.map((video) => (
        <figure key={video.id} className="card overflow-hidden">
          <div className="relative aspect-video bg-navy-950">
            {playing === video.id ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button type="button" onClick={() => setPlaying(video.id)} className="group absolute inset-0" aria-label={`Play video: ${video.title}`}>
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-navy-950/30" />
                <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-spark-500 text-white shadow-xl transition-transform group-hover:scale-110">
                  <Icon name="play" size={26} className="ml-1 fill-current" />
                </span>
              </button>
            )}
          </div>
          <figcaption className="p-4 text-sm font-semibold leading-snug text-navy-900">{video.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
