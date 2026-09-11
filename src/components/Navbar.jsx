import React, { useState } from 'react';
import { Compass, User, Globe, Menu, X, Heart, ShieldCheck, Info, UserCheck } from 'lucide-react';

export default function Navbar({ savedCount = 0, onOpenWishlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tours & Status', href: '#tours' },
    { label: '4K Video Gallery', href: '#videos' },
    { label: 'About Us', href: '#about' },
    { label: 'Tour Organizers', href: '#organizers' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-400 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                Tripp<span className="text-rose-500">oo</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Expeditions</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-rose-500 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
              title="Saved Tours"
            >
              <Heart className={`w-5 h-5 ${savedCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {savedCount}
                </span>
              )}
            </button>

            <a
              href="#organizers"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-rose-500 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Contact Organizers</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <button
              onClick={onOpenWishlist}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-700 relative"
            >
              <Heart className={`w-5 h-5 ${savedCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-5 py-4 space-y-3 shadow-xl max-w-full">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-rose-500 py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#organizers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-slate-900 hover:bg-rose-500 shadow-md flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-4 h-4" />
              <span>Contact Organizers</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
