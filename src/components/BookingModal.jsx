import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, Star, CheckCircle, Shield, Award, Clock, ArrowRight, Sparkles, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ tour, onClose, onBookingSuccess }) {
  const [selectedTier, setSelectedTier] = useState('deluxe');
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState(tour?.startDate || '2026-10-15');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState(true);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  if (!tour) return null;

  const tierMultiplier = {
    standard: 1,
    deluxe: 1.25,
    luxury: 1.6
  };

  const basePricePerPerson = Math.round(tour.price * tierMultiplier[selectedTier]);
  const addonsTotal = (includeInsurance ? 35 : 0) + (includeAirportTransfer ? 45 : 0);
  const totalPrice = (basePricePerPerson * guestCount) + addonsTotal;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    onBookingSuccess({
      tour,
      customerName,
      customerEmail,
      guestCount,
      selectedDate,
      selectedTier,
      totalPrice,
      bookingRef: `TRP-${Math.floor(100000 + Math.random() * 900000)}`
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-900 text-white">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[11px] font-bold uppercase mb-1">
              <Sparkles className="w-3 h-3" /> Guaranteed Instant Confirmation
            </div>
            <h3 className="text-xl sm:text-2xl font-black">{tour.title}</h3>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> {tour.location} • {tour.duration}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Left Form Settings */}
          <form onSubmit={handleConfirmBooking} className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Package Tier */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                1. Select Experience Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard', desc: '4-Star Stay', mult: 1 },
                  { id: 'deluxe', name: 'Deluxe', desc: '5-Star Resort + VIP', mult: 1.25 },
                  { id: 'luxury', name: 'Ultra Luxury', desc: 'Private Suite + Yacht', mult: 1.6 }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedTier === tier.id
                        ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{tier.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{tier.desc}</div>
                    <div className="text-xs font-extrabold text-rose-600 mt-2">
                      ${Math.round(tour.price * tier.mult)} <span className="text-[9px] font-normal text-slate-400">/pp</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" /> Departure Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-rose-500" /> Number of Guests
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="px-4 py-2.5 bg-slate-50 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-xs font-bold text-slate-800">
                    {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="px-4 py-2.5 bg-slate-50 text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Traveler details */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                2. Primary Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Legal Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email for Travel Pass"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                />
              </div>
            </div>

            {/* Addons */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                3. Optional Expeditions & Care
              </label>
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                    className="w-4 h-4 text-rose-500 rounded accent-rose-500"
                  />
                  <div className="text-xs font-medium text-slate-800">100% Medical & Trip Interruption Cover</div>
                </div>
                <span className="text-xs font-bold text-slate-900">+$35</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeAirportTransfer}
                    onChange={(e) => setIncludeAirportTransfer(e.target.checked)}
                    className="w-4 h-4 text-rose-500 rounded accent-rose-500"
                  />
                  <div className="text-xs font-medium text-slate-800">VIP Private Airport Chauffeur Pickup</div>
                </div>
                <span className="text-xs font-bold text-slate-900">+$45</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-bold text-sm shadow-xl shadow-rose-500/30 transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Complete Booking & Generate Pass (${totalPrice})</span>
            </button>
          </form>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full aspect-video rounded-xl object-cover shadow-sm"
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Selected Tier:</span>
                  <span className="font-bold text-slate-900 uppercase">{selectedTier}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Base Rate ({guestCount}x):</span>
                  <span className="font-bold text-slate-900">${basePricePerPerson * guestCount}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Addons & Protections:</span>
                  <span className="font-bold text-slate-900">${addonsTotal}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Taxes & Port Fees:</span>
                  <span className="text-emerald-600 font-bold">INCLUDED ($0)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Total Investment</div>
                  <div className="text-2xl font-black text-slate-900">${totalPrice}</div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Free cancellation
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-200">
                <h5 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Package Inclusions:</h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {tour.highlights?.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 text-[10px] text-slate-400 text-center">
              🔒 256-Bit SSL Encrypted & Protected by Trippoo Travel Guarantee
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
