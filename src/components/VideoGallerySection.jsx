import React, { useState } from 'react';
import { 
  Play, 
  Eye, 
  Compass, 
  Sparkles,
  Radio
} from 'lucide-react';
import { VIDEO_GALLERY } from '../data/travelData';

export default function VideoGallerySection({ onOpenVideoModal }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState(null);
  
  const tags = ['All', 'Trending', 'Staff Pick', 'Featured', 'Popular', 'Expedition'];

  const filteredVideos = selectedTag === 'All' 
    ? VIDEO_GALLERY 
    : VIDEO_GALLERY.filter(v => v.tag.toLowerCase() === selectedTag.toLowerCase());

  return (
    <section id="videos" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
              <Radio className="w-3.5 h-3.5 ml-0.5" /> 4K Real Video Gallery
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Watch The Real Expedition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300">
                In 4K Ultra High Definition
              </span>
            </h2>
            
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Real high-resolution streaming travel videos from actual locations. Hover or tap to preview in cinema mode.
            </p>
          </div>

          {/* Tags Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video) => {
            const isHovered = hoveredVideo === video.id;
            return (
              <div
                key={video.id}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => onOpenVideoModal(video)}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl hover:border-rose-500/60 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1.5"
              >
                {/* Media Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  {isHovered && video.videoSrc ? (
                    <video
                      src={video.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-85"
                      loading="lazy"
                    />
                  )}

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-slate-950/90 text-white border border-slate-700/60 uppercase">
                      {video.resolution}
                    </span>
                    {video.tag && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-rose-500 text-white">
                        {video.tag}
                      </span>
                    )}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/90 text-white text-[10px] sm:text-[11px] font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-rose-400 font-bold mb-1">
                      <span>{video.category}</span>
                      <span className="text-slate-400 flex items-center gap-1 font-normal text-[11px]">
                        <Eye className="w-3 h-3" /> {video.views}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <Compass className="w-3 h-3 text-rose-500 shrink-0" /> {video.location}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium text-[11px] sm:text-xs">
                      Director: {video.organizer}
                    </span>
                    <span className="text-rose-400 font-bold flex items-center gap-1 text-[11px] sm:text-xs">
                      Watch <Play className="w-3 h-3 fill-current" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
