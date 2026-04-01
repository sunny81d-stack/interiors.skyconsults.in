'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ProjectMedia } from '@/types';

interface ProjectGalleryProps {
  media: ProjectMedia;
  title: string;
}

export default function ProjectGallery({ media, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Build a flat array of displayable items from the media object
  const allImages: string[] = [];

  if (media.thumbnail) allImages.push(media.thumbnail);
  if (media.gallery?.length) allImages.push(...media.gallery);

  if (allImages.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={allImages[selectedIndex]}
          alt={`${title} - Image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority={selectedIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Video Embeds */}
      {(media.video?.youtube || media.video?.vimeo) && (
        <div className="flex gap-4 flex-wrap">
          {media.video.youtube && (
            <a
              href={media.video.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-silver-300 hover:bg-white/10 transition-colors"
            >
              ▶ Watch on YouTube
            </a>
          )}
          {media.video.vimeo && (
            <a
              href={media.video.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-silver-300 hover:bg-white/10 transition-colors"
            >
              ▶ Watch on Vimeo
            </a>
          )}
        </div>
      )}

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {allImages.map((src, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 
                ${
                  selectedIndex === index
                    ? 'border-royal-400 opacity-100 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-80'
                }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      )}

      {/* 3D Model Link */}
      {media.model3d && (
        <a
          href={media.model3d}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-royal-500/10 border border-royal-500/20 rounded-lg text-sm text-royal-300 hover:bg-royal-500/20 transition-colors"
        >
          🏗️ View 3D Model
        </a>
      )}
    </div>
  );
}