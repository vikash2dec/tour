import React, { useState } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  MapPin, 
  Sparkles, 
  Users
} from 'lucide-react';

export default function VideoModal({ video, onClose, onBookTour }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerMode, setPlayerMode] = useState('html5');
  const videoRef = React.useRef(null);

  if (!video) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto w-full max-w-full animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col my-auto max-h-[95vh]">
        
        {/* Top bar */}
        <div className="flex items-center justify-between p-3 sm:p-4 px-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 text-white gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-rose-500 text-white uppercase shrink-0">
              {video.resolution || '4K UHD'}
            </span>
            <div className="min-w-0 truncate">
              <h3 className="text-xs sm:text-base font-bold text-white truncate">{video.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-rose-400 shrink-0" /> {video.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group w-full">
          {playerMode === 'youtube' && video.youtubeEmbed ? (
            <iframe
              src={video.youtubeEmbed}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={video.videoSrc || video.videoUrl}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Tap to Play/Pause overlay */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 hover:bg-black/20"
              >
                {!isPlaying && (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>
                )}
              </div>

              {/* Controls Bar */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-md p-2 sm:p-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl border border-slate-800 text-white text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-800 text-white flex items-center gap-1 font-bold"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-800 text-slate-200 flex items-center gap-1"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookTour();
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-rose-500 text-white font-bold text-[10px] sm:text-xs shrink-0"
                >
                  Contact Organizer
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
