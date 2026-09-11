import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourSection from './components/TourSection';
import VideoGallerySection from './components/VideoGallerySection';
import AboutSection from './components/AboutSection';
import OrganizersSection from './components/OrganizersSection';
import TravelerStories from './components/TravelerStories';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import TourDetailModal from './components/TourDetailModal';
import { TOURS_DATA, VIDEO_GALLERY } from './data/travelData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTourDetail, setActiveTourDetail] = useState(null);
  const [favorites, setFavorites] = useState(['amalfi-coast', 'bali-indonesia']);

  // Filter tours
  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      // Category filter
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (selectedStatus === 'ongoing' && tour.status !== 'ongoing') {
        return false;
      }
      if (selectedStatus === 'upcoming' && tour.status !== 'upcoming') {
        return false;
      }
      if (selectedStatus === 'popular' && tour.rating < 4.93) {
        return false;
      }
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matches = 
          tour.title.toLowerCase().includes(query) ||
          tour.location.toLowerCase().includes(query) ||
          tour.description.toLowerCase().includes(query);
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  const handleToggleFavorite = (tourId) => {
    setFavorites(prev => 
      prev.includes(tourId) ? prev.filter(id => id !== tourId) : [...prev, tourId]
    );
  };

  const handleSearchSubmit = (searchParams) => {
    if (searchParams.destination) {
      setSearchQuery(searchParams.destination);
    }
    if (searchParams.category) {
      setSelectedCategory(searchParams.category);
    }
    const toursEl = document.getElementById('tours');
    if (toursEl) {
      toursEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-rose-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        savedCount={favorites.length}
        onOpenWishlist={() => {
          setSelectedStatus('all');
          setSelectedCategory('all');
          const toursEl = document.getElementById('tours');
          if (toursEl) toursEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <Hero
        onSearchSubmit={handleSearchSubmit}
        onExploreClick={() => {
          const toursEl = document.getElementById('tours');
          if (toursEl) toursEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Tour Catalog & Live Statuses */}
      <TourSection
        tours={filteredTours}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        onSelectStatus={setSelectedStatus}
        onSelectTour={(tour) => setActiveTourDetail(tour)}
        onPlayVideo={(tour) => {
          const matchedVideo = VIDEO_GALLERY.find(v => v.location.includes(tour.location.split(',')[0])) || {
            title: tour.title,
            location: tour.location,
            videoSrc: tour.videoUrl,
            resolution: '4K Ultra HD'
          };
          setActiveVideo(matchedVideo);
        }}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onContactOrganizer={() => {
          const orgEl = document.getElementById('organizers');
          if (orgEl) orgEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 4K Real Video Gallery Section */}
      <VideoGallerySection
        onOpenVideoModal={(video) => setActiveVideo(video)}
      />

      {/* Dedicated About Section */}
      <AboutSection
        onExploreClick={() => {
          const toursEl = document.getElementById('tours');
          if (toursEl) toursEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Dedicated Tour Organizers & Directors Section */}
      <OrganizersSection />

      {/* Traveler Stories & Verified Reviews */}
      <TravelerStories />

      {/* Footer */}
      <Footer
        onExploreClick={() => {
          const toursEl = document.getElementById('tours');
          if (toursEl) toursEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          onBookTour={() => {
            const orgEl = document.getElementById('organizers');
            if (orgEl) orgEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* Tour Detail Modal with Itinerary & Direct Organizer Inquiry */}
      {activeTourDetail && (
        <TourDetailModal
          tour={activeTourDetail}
          onClose={() => setActiveTourDetail(null)}
          onPlayVideo={(tour) => {
            setActiveVideo({
              title: tour.title,
              location: tour.location,
              videoSrc: tour.videoUrl,
              resolution: '4K Ultra HD'
            });
          }}
          isFavorite={favorites.includes(activeTourDetail.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

    </div>
  );
}
