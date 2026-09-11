import React, { useState } from 'react';
import { MapPin, Calendar, Search, Sparkles, Mountain, Palmtree, Landmark, Compass } from 'lucide-react';

export default function Hero({ onSearchSubmit, onExploreClick }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [destination, setDestination] = useState('Zurich, Switzerland');
  const [departureMonth, setDepartureMonth] = useState('2026-10');

  const quickFilters = [
    { id: 'all', label: 'All Expeditions', icon: Compass },
    { id: 'mountains', label: 'High Peaks', icon: Mountain },
    { id: 'beaches', label: 'Coastal & Islands', icon: Palmtree },
    { id: 'historical', label: 'Heritage Cities', icon: Landmark },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit({
      category: activeCategory,
      destination,
      departureMonth
    });
  };

  return (
    <section id="home" className="relative pt-20 pb-16 sm:pt-28 sm:pb-28 overflow-hidden w-full max-w-full">
      {/* Background Image with gradient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=85"
          alt="Breathtaking mountain traveler"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14 pb-8 sm:pb-12">
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping shrink-0" />
          <span>Curated Expeditions 2026 / 2027</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-md break-words">
          Your Journey Starts <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-300">
            Before You Go
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow px-2">
          Discover ongoing & upcoming world expeditions, watch 4K cinematic video previews, and connect directly with certified local organizers.
        </p>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all"
          >
            <span>Explore Tours & Status</span>
            <span className="text-rose-500 font-bold">→</span>
          </button>
        </div>

        {/* Floating Search Container */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-slate-100/80 w-full overflow-hidden">
          
          {/* Quick Filter Tabs with smooth touch scroll */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pb-3.5 border-b border-slate-100 overflow-x-auto no-scrollbar w-full">
            {quickFilters.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? 'text-rose-600 bg-rose-50 border border-rose-200 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Inputs */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4 items-center text-left">
            {/* Location Input */}
            <div className="sm:col-span-6 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
              <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-500 shrink-0" /> Search Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Zurich, Bali, Italy"
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Departure Month */}
            <div className="sm:col-span-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
              <label className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-rose-500 shrink-0" /> Departure Season
              </label>
              <select
                value={departureMonth}
                onChange={(e) => setDepartureMonth(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="all">Any Upcoming Season</option>
                <option value="2026-09">September (Ongoing)</option>
                <option value="2026-10">October 2026</option>
                <option value="2026-11">November 2026</option>
                <option value="2027">Early 2027</option>
              </select>
            </div>

            {/* Search CTA */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full h-11 sm:h-[54px] rounded-xl sm:rounded-2xl bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/25 transition-all font-bold text-xs sm:text-sm"
              >
                <Search className="w-4 h-4 mr-1" /> Find
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
