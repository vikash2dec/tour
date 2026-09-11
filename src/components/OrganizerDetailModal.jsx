import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Star, 
  Award, 
  Languages, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Clock,
  Compass,
  Sparkles
} from 'lucide-react';

export default function OrganizerDetailModal({ organizer, onClose, onSelectTour }) {
  const [inquiryText, setInquiryText] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  if (!organizer) return null;

  const handleSendDirectInquiry = (e) => {
    e.preventDefault();
    if (!senderEmail || !inquiryText) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryText('');
      setSenderName('');
      setSenderEmail('');
    }, 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${organizer.name}, I am contacting you from Trippoo regarding your upcoming expeditions and tour itineraries.`
  );
  const whatsappUrl = `https://wa.me/${organizer.whatsapp || '918544013663'}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in w-full max-w-full">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-rose-950/70 p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={organizer.avatar}
                alt={organizer.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <span className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-extrabold uppercase tracking-wider">
                <Award className="w-3 h-3" /> Certified Expedition Leader
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">{organizer.name}</h2>
              <p className="text-xs sm:text-sm text-slate-300">{organizer.role}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400" /> {organizer.location}
              </p>
            </div>
          </div>

          {/* Quick Connect Floating Bar */}
          <div className="mt-6 pt-5 border-t border-slate-700/60 flex flex-wrap items-center gap-3">
            {/* WhatsApp Direct */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct ({organizer.phone || '8544013663'})</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${organizer.phone || '8544013663'}`}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-500" />
              <span>Call: {organizer.phone || '8544013663'}</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Rating</span>
              <span className="text-sm font-black text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {organizer.rating} / 5.0
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Field Experience</span>
              <span className="text-sm font-black text-slate-900 mt-0.5 block">{organizer.experience}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Expeditions Led</span>
              <span className="text-sm font-black text-rose-600 mt-0.5 block">{organizer.toursLed}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Languages</span>
              <span className="text-xs font-black text-slate-900 mt-0.5 block">{organizer.languages?.join(', ')}</span>
            </div>
          </div>

          {/* Full Biography & Background */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Expedition Leader Profile & Story</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {organizer.fullStory || organizer.bio}
            </p>
          </div>

          {/* Accreditations & Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-rose-500" /> Official Accreditations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {organizer.accreditations?.map((acc, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{acc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" /> Core Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {organizer.specialties?.map((spec, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 font-semibold text-xs border border-rose-100">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Active Tours Handled By This Organizer */}
          {organizer.activeTours && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-rose-500" /> Active Expeditions Supervised By {organizer.name.split(' ')[0]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {organizer.activeTours.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t.title}</div>
                      <div className="text-[10px] text-rose-500 font-medium">{t.dates}</div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                      Active Guide
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Message Form */}
          <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Send Direct Message to {organizer.name}</h4>
              <p className="text-xs text-slate-500">
                You can also message directly via WhatsApp on <strong>+91 8544013663</strong> or fill out the form below.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Message sent directly to {organizer.name}. They will reply to your email shortly!</span>
              </div>
            ) : (
              <form onSubmit={handleSendDirectInquiry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-rose-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-rose-500"
                  />
                </div>
                <textarea
                  rows={2}
                  required
                  placeholder={`Ask ${organizer.name.split(' ')[0]} about tour dates, preparation, or custom itineraries...`}
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-rose-500"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">Response time: usually under 2 hours</span>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-rose-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
