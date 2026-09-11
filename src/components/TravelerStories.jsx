import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { TRAVELER_STORIES } from '../data/travelData';

export default function TravelerStories() {
  const [stories, setStories] = useState(TRAVELER_STORIES);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    tour: 'Amalfi Coast Drive & Cliffside Odyssey',
    quote: '',
    rating: 5
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;
    
    const created = {
      id: `s-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || 'Global Explorer',
      tour: newReview.tour,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      quote: `“${newReview.quote}”`,
      rating: Number(newReview.rating),
      date: 'Just now'
    };

    setStories([created, ...stories]);
    setShowReviewModal(false);
    setNewReview({ name: '', location: '', tour: 'Amalfi Coast Drive & Cliffside Odyssey', quote: '', rating: 5 });
  };

  return (
    <section id="reviews" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" /> Real Verified Travelers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Traveler Stories & Reviews
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-lg">
            Hear first-hand experiences from travelers who just returned from their expeditions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-200"
          >
            + Share Your Experience
          </button>
        </div>
      </div>

      {/* Stories Grid matching the screenshot cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              {/* Photo top */}
              {story.image && (
                <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-5 bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < story.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-700 italic font-medium leading-relaxed mb-4">
                {story.quote}
              </p>
            </div>

            {/* Author details */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <img
                src={story.avatar}
                alt={story.name}
                className="w-10 h-10 rounded-full object-cover border border-rose-200"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{story.name}</h4>
                <p className="text-[11px] text-slate-400">{story.location} • <span className="text-rose-500 font-medium">{story.tour}</span></p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Write Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scale-up">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Share Your Journey Story</h3>
            <p className="text-xs text-slate-500 mb-6">Let other travelers know how your tour experience went.</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Liam Evans"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your City / Country</label>
                <input
                  type="text"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  placeholder="e.g. Melbourne, Australia"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5/5) Exceptional</option>
                  <option value={4}>⭐⭐⭐⭐ (4/5) Very Good</option>
                  <option value={3}>⭐⭐⭐ (3/5) Good</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Feedback / Story</label>
                <textarea
                  rows={3}
                  required
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  placeholder="What was the most memorable part of the expedition?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-rose-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-xs font-bold text-white shadow-md shadow-rose-500/20"
                >
                  Publish Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
