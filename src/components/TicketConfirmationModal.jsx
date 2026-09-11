import React from 'react';
import { X, CheckCircle, Calendar, MapPin, Users, QrCode, Download, Share2, Compass, Sparkles } from 'lucide-react';

export default function TicketConfirmationModal({ ticket, onClose }) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
        
        {/* Top Celebration banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white text-center relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-2 text-white">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black">Expedition Confirmed!</h3>
          <p className="text-xs text-emerald-100 mt-1">Your electronic Trippoo Pass is now active and ready.</p>
        </div>

        {/* Boarding Pass Style Ticket */}
        <div className="p-6 space-y-6">
          
          {/* Ticket Body */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 relative">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center text-white">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-sm text-slate-900">Trippoo Official Pass</span>
              </div>
              <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
                {ticket.bookingRef}
              </span>
            </div>

            {/* Tour info */}
            <div className="py-4 space-y-3">
              <div>
                <h4 className="font-extrabold text-base text-slate-900">{ticket.tour.title}</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" /> {ticket.tour.location}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Lead Traveler</span>
                  <span className="font-bold text-slate-800">{ticket.customerName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Departure Date</span>
                  <span className="font-bold text-slate-800">{ticket.selectedDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Party Size</span>
                  <span className="font-bold text-slate-800">{ticket.guestCount} Travelers</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Tier / Status</span>
                  <span className="font-bold text-emerald-600 uppercase">{ticket.selectedTier} • Confirmed</span>
                </div>
              </div>
            </div>

            {/* Barcode & Total Paid */}
            <div className="pt-4 border-t border-dashed border-slate-300 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Amount Paid</div>
                <div className="text-lg font-black text-slate-900">${ticket.totalPrice}</div>
              </div>
              
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 p-1 flex items-center justify-center">
                <QrCode className="w-9 h-9 text-slate-800" />
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                alert(`Travel Pass downloaded for ${ticket.customerName}! Check your downloads.`);
              }}
              className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Download PDF Pass
            </button>

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
