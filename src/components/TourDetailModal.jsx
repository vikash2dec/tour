import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  UserCheck, 
  Play, 
  Heart,
  Phone,
  Mail,
  Send,
  MessageSquare
} from 'lucide-react';

export default function TourDetailModal({
  tour,
  onClose,
  onPlayVideo,
  isFavorite,
  onToggleFavorite
}) {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');

  if (!tour) return null;

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryText('');
      setInquiryEmail('');
    }, 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${tour.guide}, I am interested in the ${tour.title} on Trippoo and would like more details!`
  );
  const whatsappUrl = `https://wa.me/918544013663?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in w-full max-w-full">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto max-h-[95vh] flex flex-col">
        
        {/* Cover image & action header */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Quick video button */}
          {tour.videoUrl && (
            <button
              onClick={() => onPlayVideo(tour)}
              className="absolute bottom-4 right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 hover:bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-md hover:scale-105 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> Watch Video Tour
            </button>
          )}

          {/* Top Title Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-6 right-36 sm:right-44 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                tour.status === 'ongoing' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}>
                {tour.statusBadge}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-rose-400 shrink-0" /> {tour.location}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-white line-clamp-1">{tour.title}</h2>
          </div>
        </div>

        {/* Content body with internal scroll */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1">
          
          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Duration</span>
              <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-rose-500" /> {tour.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Rating</span>
              <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {tour.rating} ({tour.reviewsCount})
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Departure</span>
              <span className="text-xs sm:text-sm font-black text-slate-800 flex items-center justify-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" /> {tour.startDate}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Est. Cost</span>
              <span className="text-xs sm:text-sm font-black text-rose-600 mt-0.5 block">
                ${tour.price} <span className="text-[10px] text-slate-400 font-normal">/ pp</span>
              </span>
            </div>
          </div>

          {/* Lead Organizer Direct WhatsApp & Call Bar */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-rose-50 to-slate-50 rounded-2xl border border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">Lead Tour Organizer</span>
                <h4 className="text-sm sm:text-base font-black text-slate-900">{tour.guide}</h4>
                <p className="text-xs text-slate-500">{tour.guideRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp: 8544013663</span>
              </a>

              <a
                href="tel:8544013663"
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Expedition Overview</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tour.description}</p>
          </div>

          {/* Highlights & Itinerary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500" /> Key Expedition Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {tour.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-500" /> Daily Itinerary Schedule
              </h4>
              <div className="space-y-1.5 text-xs">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 text-white font-bold text-[10px] shrink-0">
                      Day {day.day}
                    </span>
                    <span className="font-medium text-slate-700">{day.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => onToggleFavorite(tour.id)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 flex items-center gap-2 text-xs font-semibold"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
              <span>{isFavorite ? 'Saved' : 'Save To Wishlist'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
