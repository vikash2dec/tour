import React from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Compass, 
  Award, 
  Users2, 
  CheckCircle2, 
  HeartHandshake, 
  TreePine,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ABOUT_INFO, STATS } from '../data/travelData';

export default function AboutSection({ onExploreClick }) {
  const pillars = [
    {
      icon: Compass,
      title: '100% Local Field Expertise',
      desc: 'All expeditions are personally curated and guided by certified on-ground directors with a minimum of 8+ years experience.'
    },
    {
      icon: TreePine,
      title: 'Eco-Conscious & Sustainable',
      desc: 'We follow Leave No Trace principles, support local family-owned accommodations, and invest 5% of all proceeds into habitat conservation.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Safety & Medical Ready',
      desc: 'Every tour includes comprehensive emergency communication, GPS satellite beacons, and wilderness first-responder leaders.'
    },
    {
      icon: HeartHandshake,
      title: 'Small-Group Intimacy',
      desc: 'Capped at 8–12 explorers per expedition to guarantee immersive cultural exchanges and undisturbed natural wonder.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> About Trippoo Expeditions
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Redefining Travel Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-amber-500">
                Authentic Human Connection
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded in 2021 across Zurich and San Francisco, Trippoo was built on a singular conviction: travel should not be a rushed checklist of tourist monuments, but a profound, unhurried immersion into our planet’s most majestic landscapes and living cultures.
            </p>

            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block">Our Core Mission</span>
              <p className="text-sm font-semibold text-slate-800 italic">
                "{ABOUT_INFO.mission}"
              </p>
            </div>

            {/* Certifications badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Official Accreditations & Partnerships:</span>
              <div className="flex flex-wrap gap-2">
                {ABOUT_INFO.certifications.map((cert, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                  alt="Scenic expedition"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-lg space-y-1">
                <div className="text-3xl font-black text-rose-400 font-mono">45+</div>
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">Licensed Tour Directors</div>
                <p className="text-[11px] text-slate-400 mt-1">Based in Europe, Asia, Americas & Middle East.</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="text-3xl font-black text-slate-900 font-mono">180+</div>
                <div className="text-xs font-bold text-rose-500 uppercase tracking-wider">Curated Destinations</div>
                <p className="text-[11px] text-slate-500 mt-1">From Alpine summits to pristine secret beaches.</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                  alt="Lush island"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{pil.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pil.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
