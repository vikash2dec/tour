import React, { useState } from 'react';
import { Compass, Mail, Send, Phone, MapPin, Heart, Shield, Award, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onExploreClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.9 }
    });
  };

  const destinationThumbnails = [
    { title: 'Dubai Skyline', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
    { title: 'Santorini Domes', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
    { title: 'Amalfi Coast', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80' },
    { title: 'Eiffel Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
    { title: 'Venice Canals', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <footer id="destinations" className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      
      {/* Plan Your Next Trip Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-rose-950/40 rounded-3xl p-8 sm:p-14 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Plan Your Next Expedition With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">
                Confidence And Direct Guidance
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Get personalized itineraries, real-time ongoing expedition alerts, and direct contact with licensed expedition leaders.
            </p>

            {/* CTA button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onExploreClick}
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-xl shadow-rose-500/30 hover:scale-105 transition-all"
              >
                Explore Destinations & Tours
              </button>
            </div>

            {/* Destination Thumbnail strip matching design */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 mt-12 max-w-4xl mx-auto">
              {destinationThumbnails.map((dest, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-slate-700/60 shadow-md hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={dest.img}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white leading-tight">{dest.title}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-500 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Tripp<span className="text-rose-500">oo</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We curate high-end global travel experiences, immersive expeditions, ongoing tour updates, and cinematic 4K video previews directly with certified tour directors.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4" /> Subscribed to expedition & tour updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-l-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-r-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: About & Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">About & Team</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">Our Mission & Values</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Tour Directors & Guides</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Safety Standards</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Traveler Testimonials</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">4K Video Feeds</a></li>
            </ul>
          </div>

          {/* Col 3: Expeditions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Expeditions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#tours" className="hover:text-white transition-colors">Ongoing Expeditions</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Upcoming Departures</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">High Altitude Treks</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Island Discoveries</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Cultural Citadels</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Direct</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span>direct@trippoo.travel</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>+1 (800) 459-TRIP</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Zurich & San Francisco HQ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Trippoo Expeditions. Direct local organizer connection platform.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Exploration</a>
            <a href="#" className="hover:text-slate-400">Leader Accreditations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
