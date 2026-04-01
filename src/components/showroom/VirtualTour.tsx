'use client';

import { useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function VirtualTour() {
  const [expanded, setExpanded] = useState(false);

  // Replace this URL with your actual Metareal Stage tour URL
  const tourUrl = 'https://app.metareal.com/player/tour/example-tour-id';

  return (
    <div className="relative">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-body text-sm text-silver-400">
          Click and drag to explore. Use scroll to zoom.
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-royal-500/30 rounded-lg text-sm text-silver-300 hover:text-white transition-all"
        >
          {expanded ? (
            <>
              <Minimize2 className="w-4 h-4" /> Exit Fullscreen
            </>
          ) : (
            <>
              <Maximize2 className="w-4 h-4" /> Fullscreen
            </>
          )}
        </button>
      </div>

      {/* iFrame Container */}
      <div
        className={`relative rounded-xl overflow-hidden border border-white/10 transition-all duration-500 ${
          expanded
            ? 'fixed inset-4 z-50 rounded-2xl'
            : 'aspect-video'
        }`}
      >
        {/* Fullscreen backdrop */}
        {expanded && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm -z-10"
            onClick={() => setExpanded(false)}
          />
        )}

        <iframe
          src={tourUrl}
          title="Sky Consults Virtual Showroom Tour"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
          allowFullScreen
        />

        {/* Placeholder overlay — remove this once you have a real tour URL */}
        <div className="absolute inset-0 bg-silver-900/90 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-royal-500/10 border border-royal-500/20 flex items-center justify-center mb-4">
            <Maximize2 className="w-8 h-8 text-royal-500/40" />
          </div>
          <p className="font-display text-xl text-silver-400 mb-2">
            360° Virtual Tour
          </p>
          <p className="font-body text-sm text-silver-600 max-w-sm text-center">
            Replace the tour URL in
            <code className="mx-1 px-2 py-0.5 bg-white/5 rounded text-xs text-royal-400">
              VirtualTour.tsx
            </code>
            with your Metareal Stage embed link
          </p>
        </div>
      </div>

      {/* Fullscreen close button */}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <Minimize2 className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}