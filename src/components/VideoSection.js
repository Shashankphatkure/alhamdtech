import React, { useState, useEffect, useRef } from 'react';
import { getOrigin } from '../utils/clientUtils';

const VideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const playerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const [origin, setOrigin] = useState('');
  
  const videos = [
    {
      id: "phdfzUwINZw",
      title: "Alhamd Technologies Mechanical Workshop in Rabale",
      description: "6 ans d'action solidaire, plus de 19 millions d'euros de dons, 479 projets d'associations soutenues, 144 heures d'émissions et de bénévolat, des centaines de milliers d'auditeurs, de téléspectateurs et d'internautes sensibilisés à la cause...",
      thumbnail: "https://img.youtube.com/vi/phdfzUwINZw/hqdefault.jpg",
      duration: "13:45",
      channelUrl: "https://www.youtube.com/@TheAlhamdTechnologies"
    },
    {
      id: "e_INgbU8E-E",
      title: "Working of Lathe Machine & Milling Machine",
      description: "Rejoignez-nous pour cette nouvelle édition de solidarité et de générosité.",
      thumbnail: "https://img.youtube.com/vi/e_INgbU8E-E/hqdefault.jpg",
      duration: "8:32",
      channelUrl: "https://www.youtube.com/@TheAlhamdTechnologies"
    },
    {
      id: "Rem8Uo1ToHM",
      title: "Working of Lathe Machine",
      description: "Rejoignez-nous pour cette nouvelle édition de solidarité et de générosité.",
      thumbnail: "https://img.youtube.com/vi/Rem8Uo1ToHM/hqdefault.jpg",
      duration: "15:20",
      channelUrl: "https://www.youtube.com/@TheAlhamdTechnologies"
    }
  ];
  
  // Set origin on client-side only
  useEffect(() => {
    setOrigin(getOrigin());
  }, []);
  
  // Setup YouTube API
  useEffect(() => {
    // Add YouTube iframe API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Add CSS to hide YouTube controls
    const style = document.createElement('style');
    style.innerHTML = `
      .video-container iframe {
        pointer-events: none;
      }
      .video-container .ytp-chrome-top,
      .video-container .ytp-chrome-bottom,
      .video-container .ytp-watermark {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      const scriptTags = document.getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        if (scriptTags[i].src.includes('youtube.com/iframe_api')) {
          scriptTags[i].parentNode.removeChild(scriptTags[i]);
          break;
        }
      }
      document.head.removeChild(style);
    };
  }, []);
  
  // Auto-rotate slides every 20 seconds, but only if video is playing
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isPlaying]);
  
  // Controls show/hide logic
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);
  
  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };
  
  const changeSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    setIsPlaying(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const nextSlide = () => {
    changeSlide((activeIndex + 1) % videos.length);
  };
  
  const prevSlide = () => {
    changeSlide((activeIndex - 1 + videos.length) % videos.length);
  };
  
  const togglePlayPause = () => {
    try {
      const iframe = document.querySelector(`iframe[title="${videos[activeIndex].title}"]`);
      if (!iframe) return;
      
      if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error controlling YouTube player:", error);
    }
  };

  const handleVideoFrameClick = () => {
    togglePlayPause();
  };

  return (
    <section id="videos" className="relative w-full bg-gradient-to-br from-white via-[#000080]/10 to-[#000080]/10 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-[#000080]/20/40 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#000080]/20/40 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full bg-[#000080]/20/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="md:max-w-2xl">
            <span className="px-4 py-1.5 bg-[#000080]/20 text-[#000080] text-xs font-semibold tracking-wider rounded-full mb-4 inline-block">
              OUR COLLECTION
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-[#898989]">
              Hardware Projects
            </h2>
            <p className="text-gray-600 mb-2">
              Explore our collection of videos featuring innovative hardware solutions and engineering excellence.
            </p>
          </div>
          
          <a href="https://www.youtube.com/@TheAlhamdTechnologies" target="_blank" rel="noopener noreferrer" 
             className="mt-6 md:mt-0 flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium 
                      bg-gradient-to-r from-[#000080] to-[#898989] text-white shadow-lg shadow-[#000080]/20 
                      hover:shadow-[#000080]/40 transition-all duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Visit our YouTube Channel
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main video display - full width */}
          <div className="w-full">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-[#000080]/20 group transform transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"></div>
              
              {/* Video background */}
              <div className="relative w-full pt-[56.25%] video-container transition-all duration-300">
                <iframe 
                  ref={playerRef}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[activeIndex].id}?autoplay=0&mute=0&controls=0&modestbranding=1&rel=0&enablejsapi=1&origin=${origin}&showinfo=0&fs=1&disablekb=1&iv_load_policy=3&color=white`}
                  title={videos[activeIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Clickable overlay to play/pause */}
                <div 
                  className="absolute inset-0 z-20 cursor-pointer"
                  onClick={handleVideoFrameClick}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                ></div>
                
                {/* Play icon overlay when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 bg-[#000080]/60 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl shadow-[#000080]/20 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Custom video controls overlay */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 z-30 p-5 bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={togglePlayPause}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={prevSlide}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                        aria-label="Previous video"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={nextSlide}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                        aria-label="Next video"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => {
                          const iframe = document.querySelector(`iframe[title="${videos[activeIndex].title}"]`);
                          if (iframe) {
                            if (document.fullscreenElement) {
                              document.exitFullscreen();
                            } else {
                              iframe.requestFullscreen();
                            }
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                        aria-label="Toggle fullscreen"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video thumbnails carousel */}
        <div className="mt-8">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {videos.map((video, index) => (
              <button 
                key={index}
                onClick={() => changeSlide(index)}
                className={`flex-none w-64 transition-all duration-300 relative ${
                  index === activeIndex ? 'scale-105' : 'scale-100 hover:scale-105'
                }`}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className={`w-full h-36 object-cover transition-all duration-300 ${
                      index === activeIndex ? 'brightness-100' : 'brightness-75 hover:brightness-100'
                    }`}
                  />
                  <div className={`absolute inset-0 ${
                    index === activeIndex ? 'bg-[#000080]/10 border-2 border-[#000080]' : 'bg-black/40'
                  } rounded-xl`}></div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
                  
                  {index === activeIndex && isPlaying && (
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                      <div className="w-1.5 h-3 bg-[#000080] rounded-sm animate-pulse"></div>
                      <div className="w-1.5 h-4 bg-[#000080] rounded-sm animate-pulse delay-75"></div>
                      <div className="w-1.5 h-2.5 bg-[#000080] rounded-sm animate-pulse delay-150"></div>
                    </div>
                  )}
                </div>
                
                <div className="mt-3">
                  <h4 className={`font-medium line-clamp-1 ${
                    index === activeIndex ? 'text-[#000080]' : 'text-gray-700'
                  }`}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {video.tag}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 