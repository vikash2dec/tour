import React from 'react';
import { CATEGORIES, TOUR_STATUSES } from '../data/travelData';
import { Compass, Flame, ArrowRight, CalendarCheck } from 'lucide-react';
import TourCard from './TourCard';

export default function TourSection({
  tours,
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
  onSelectTour,
  onPlayVideo,
  favorites,
  onToggleFavorite,
  onContactOrganizer
}) {
  const ongoingCount = tours.filter(t => t.status === 'ongoing').length;
  const upcomingCount = tours.filter(t => t.status === 'upcoming').length;

  return (
    <section id="tours" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" /> Handpicked Expeditions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ongoing & Upcoming Tours
          </h2>
          <p className="mt-1 sm:mt-2 text-slate-500 text-xs sm:text-sm max-w-xl">
            Browse itineraries, check departure dates, and connect directly with certified trip organizers.
          </p>
        </div>

        {/* Live Status Switcher Pill */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80 overflow-x-auto no-scrollbar w-full sm:w-auto">
          {TOUR_STATUSES.map((status) => {
            const isActive = selectedStatus === status.id;
            return (
              <button
                key={status.id}
                onClick={() => onSelectStatus(status.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status.id === 'ongoing' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                )}
                {status.id === 'upcoming' && (
                  <CalendarCheck className="w-3.5 h-3.5 text-rose-500" />
                )}
                {status.id === 'popular' && (
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                )}
                <span>{status.label}</span>
                {status.id === 'ongoing' && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-700 font-bold">
                    {ongoingCount}
                  </span>
                )}
                {status.id === 'upcoming' && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-rose-700 font-bold">
                    {upcomingCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-6 sm:mb-8 overflow-x-auto no-scrollbar w-full">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                isSelected
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Tours Grid */}
      {tours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelectTour={onSelectTour}
              onPlayVideo={onPlayVideo}
              isFavorite={favorites.includes(tour.id)}
              onToggleFavorite={onToggleFavorite}
              onContactOrganizer={onContactOrganizer}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-6">
          <Compass className="w-10 h-10 text-rose-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No expeditions found matching this filter</h3>
          <button
            onClick={() => {
              onSelectCategory('all');
              onSelectStatus('all');
            }}
            className="mt-4 px-5 py-2 rounded-full bg-rose-500 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
}
