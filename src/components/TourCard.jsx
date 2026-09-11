import React from 'react';
import { Star, MapPin, Clock, Calendar, Heart, Play, ArrowRight, UserCheck, Phone, Mail } from 'lucide-react';

export default function TourCard({
  tour,
  onSelectTour,
  onPlayVideo,
  isFavorite,
  onToggleFavorite,
  onContactOrganizer
}) {
  const isOngoing = tour.status === 'ongoing';

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 relative">
      
      {/* Image Thumbnail & Overlays */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectTour(tour)}>
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Live Status Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
          {isOngoing ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500 text-white shadow-md animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Ongoing Expedition
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/85 backdrop-blur-md text-white shadow-md">
              <Calendar className="w-3 h-3 text-rose-400" />
              Upcoming Departure
            </span>
          )}
        </div>

        {/* Action buttons (Wishlist & Video Quick Preview) */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
          {tour.videoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlayVideo(tour);
              }}
              className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-slate-800 hover:text-rose-500 flex items-center justify-center shadow-md hover:scale-110 transition-all"
              title="Watch Tour Video Preview"
            >
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(tour.id);
            }}
            className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-slate-700 hover:text-rose-500 flex items-center justify-center shadow-md hover:scale-110 transition-all"
            title="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Rating Floating Tag */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{tour.rating}</span>
          <span className="text-slate-400 font-normal">({tour.reviewsCount})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Duration */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
            <div className="flex items-center gap-1 text-slate-600 font-semibold truncate">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 shrink-0">
              <Clock className="w-3 h-3" />
              <span>{tour.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectTour(tour)}
            className="font-bold text-base text-slate-900 line-clamp-1 group-hover:text-rose-600 transition-colors cursor-pointer"
          >
            {tour.title}
          </h3>

          <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {tour.description}
          </p>

          {/* Organizer tag */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-semibold">{tour.guide}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">{tour.guideRole?.split(' ')[0]} Director</span>
          </div>
        </div>

        {/* View Details CTA */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold">Est. Cost</div>
            <div className="text-lg font-black text-slate-900">${tour.price} <span className="text-[10px] text-slate-400 font-normal">/ person</span></div>
          </div>

          <button
            onClick={() => onSelectTour(tour)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-rose-500 transition-all flex items-center gap-1 shadow-sm"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
