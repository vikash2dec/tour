import React from 'react';
import { TRUST_FEATURES, STATS } from '../data/travelData';
import { ShieldCheck, HeartHandshake, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OurStoryAndTrust({ onExploreClick }) {
  return (
    <section id="story" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Our Story Block (matching top right card in screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Our Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Our Story: Driven By <br />
              <span className="text-rose-500">Wanderlust</span>, Powered <br />
              By Experience
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe that travel is more than just visiting a new place — it’s about creating lasting memories, forging authentic connections with local hosts, and experiencing cultures with deep respect.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExploreClick}
                className="px-7 py-3 rounded-full text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-md shadow-rose-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Discover Expeditions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collage Images matching design */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-white">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                  alt="Lush nature"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-rose-500">100%</div>
                <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">Verified Escorted Tours</div>
                <p className="text-xs text-slate-500 mt-2">Zero hidden charges with end-to-end transparent ground transfers.</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-white relative group">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                  alt="Mountain hikers"
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex items-end p-5">
                  <span className="text-white text-xs font-bold">Matterhorn Summit Ridge</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Travellers Trust Us Header & Grid (matching middle section of screenshot) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-500" /> Guaranteed Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Travellers Trust Us
          </h2>
          <p className="text-slate-500 text-sm">
            We eliminate the stress of vacation planning with uncompromised quality, transparent rates, and round-the-clock safety.
          </p>
        </div>

        {/* 3 Trust Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_FEATURES.map((feat) => (
            <div
              key={feat.number}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              <div className="text-4xl font-black text-rose-500/20 group-hover:text-rose-500/40 transition-colors font-mono mb-4">
                {feat.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-rose-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
