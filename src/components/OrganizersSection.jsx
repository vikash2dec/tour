import React, { useState } from 'react';
import { ORGANIZERS } from '../data/travelData';
import { 
  UserCheck, 
  ShieldCheck, 
  Star, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import OrganizerDetailModal from './OrganizerDetailModal';

export default function OrganizersSection() {
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  return (
    <section id="organizers" className="py-16 sm:py-20 bg-white border-y border-slate-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5" /> Certified Tour Directors
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Meet Our Tour Organizers
            </h2>
            <p className="mt-1 sm:mt-2 text-slate-500 text-xs sm:text-sm max-w-xl">
              Click on any organizer card to view full credentials, bio, and connect instantly via WhatsApp or direct call.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918544013663?text=Hello%20Trippoo%20Support,%20I%20have%20an%20inquiry%20about%20tours%20and%20organizers."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp Helpline: 8544013663</span>
            </a>
          </div>
        </div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANIZERS.map((org) => {
            const whatsappUrl = `https://wa.me/918544013663?text=${encodeURIComponent(
              `Hello ${org.name}, I found your profile on Trippoo and would like to ask about your expeditions.`
            )}`;

            return (
              <div
                key={org.id}
                onClick={() => setSelectedOrganizer(org)}
                className="bg-slate-50 rounded-3xl p-5 sm:p-6 border border-slate-100 hover:border-rose-300 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Avatar & Badges */}
                  <div className="relative mb-4 text-center">
                    <div className="relative inline-block">
                      <img
                        src={org.avatar}
                        alt={org.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute bottom-0 right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="Verified Organizer">
                        <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 group-hover:text-rose-600 transition-colors">
                      {org.name}
                    </h3>
                    <p className="text-xs font-semibold text-rose-500 line-clamp-1">{org.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{org.organization}</p>
                  </div>

                  {/* Rating & Stats */}
                  <div className="flex items-center justify-around py-2 px-2 bg-white rounded-2xl border border-slate-100 text-center mb-4 shadow-xs">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Rating</span>
                      <span className="text-xs font-black text-slate-800 flex items-center justify-center gap-0.5 mt-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {org.rating}
                      </span>
                    </div>
                    <div className="w-px h-5 bg-slate-100" />
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Experience</span>
                      <span className="text-xs font-black text-slate-800 mt-0.5 block">{org.experience.split(' ')[0]}</span>
                    </div>
                    <div className="w-px h-5 bg-slate-100" />
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Led</span>
                      <span className="text-xs font-black text-slate-800 mt-0.5 block">{org.toursLed.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {org.bio}
                  </p>
                </div>

                {/* Card Action buttons */}
                <div className="pt-3 border-t border-slate-200/60 space-y-2">
                  <div className="flex items-center gap-2">
                    {/* Direct WhatsApp button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 px-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] shadow-sm transition-all flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Direct Call button */}
                    <a
                      href="tel:8544013663"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition-all flex items-center justify-center"
                      title="Call: 8544013663"
                    >
                      <Phone className="w-3.5 h-3.5 text-rose-500" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedOrganizer(org)}
                    className="w-full py-2 rounded-xl bg-slate-900 group-hover:bg-rose-500 text-white font-bold text-[11px] transition-all flex items-center justify-center gap-1"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Full Organizer Detail Modal */}
      {selectedOrganizer && (
        <OrganizerDetailModal
          organizer={selectedOrganizer}
          onClose={() => setSelectedOrganizer(null)}
        />
      )}

    </section>
  );
}
