import React, { useState, useEffect } from 'react';
import { isBrowser } from '../utils/clientUtils';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'fullscreen'
  const [isLoading, setIsLoading] = useState(true);
  
  const galleryImages = [
    {
      url: "/images/1.webp",
      alt: "Precision Machining at Alhamd Technologies"
    },
    {
      url: "/images/2.webp",
      alt: "CNC Machining Process"
    },
    {
      url: "/images/3.webp",
      alt: "Manufacturing Facility"
    },
    {
      url: "/images/4.webp",
      alt: "Quality Control Process"
    },
    {
      url: "/images/5.webp",
      alt: "Advanced Engineering"
    },
    {
      url: "/images/6.webp",
      alt: "Precision Parts Manufacturing"
    },
    {
      url: "/images/7.webp",
      alt: "Industrial Equipment"
    },
    {
      url: "/images/8.webp",
      alt: "Technical Measurements"
    },
    {
      url: "/images/9.webp",
      alt: "Factory Production Line"
    },
    {
      url: "/images/10.webp",
      alt: "Modern Machining Technology"
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    if (!isBrowser()) return;
    
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          if (viewMode === 'fullscreen') {
            setViewMode('grid');
            setSelectedImageIndex(null);
          } else {
            closeModal();
          }
          break;
        case 'ArrowRight':
          if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => 
              prev === galleryImages.length - 1 ? 0 : prev + 1
            );
          }
          break;
        case 'ArrowLeft':
          if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => 
              prev === 0 ? galleryImages.length - 1 : prev - 1
            );
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, selectedImageIndex, galleryImages.length, viewMode]);

  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
      // Preload all images
      const preloadImages = galleryImages.map(img => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.url;
          image.onload = resolve;
        });
      });
      
      Promise.all(preloadImages).then(() => {
        setIsLoading(false);
      });
    }
  }, [isModalOpen, galleryImages]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setViewMode('grid');
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const selectImage = (index) => {
    setSelectedImageIndex(index);
    setViewMode('fullscreen');
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleBackToGrid = () => {
    setViewMode('grid');
    setSelectedImageIndex(null);
  };

  return (
    <section id="about" className="py-18 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Right Image - 50% - Moved to top on mobile */}
          <div className="w-full md:w-1/2 relative order-first md:order-last mb-8 md:mb-0">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#000080] rounded-xl opacity-10 transform rotate-2 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-xl opacity-10 transform -rotate-2 hidden md:block"></div>
            <div className="relative h-full overflow-hidden rounded-xl shadow-2xl cursor-pointer group" onClick={openModal}>
              <img 
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-full min-h-[350px] md:min-h-[500px] object-cover md:max-h-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Excellence in Every Detail</h3>
                  <p className="opacity-80">Precision engineering at its finest</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          {/* Left Content - 50% - Moved to bottom on mobile */}
          <div className="w-full md:w-1/2 md:pr-12 order-last md:order-first">
            <div className="flex flex-col items-start text-left">
            <div className="inline-block px-4 py-1.5 bg-[#000080]/20 text-[#000080] rounded-full text-sm font-medium tracking-wide mb-4">
              ABOUT US
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6 uppercase">
              We are <span className="text-[#000080] relative inline-block">
                Alhamd Technologies
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#000080] opacity-30 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-left">
              Welcome to Alhamd Technologies, your premier destination for precision machining solutions. 
              With over a decade of experience in the manufacturing industry, we have established ourselves as trusted leaders 
              in CNC machining, fabrication, and custom manufacturing services. Our commitment to excellence 
              and attention to detail have made us the preferred partner for businesses seeking reliable 
              engineering solutions.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CNC Machining */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#000080]/20 hover:border-[#898989] hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center p-4 bg-gradient-to-r from-[#000080]/10 to-white">
                  <div className="bg-[#000080]/20 rounded-lg p-3 mr-4 group-hover:bg-[#000080]/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#000080]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">CNC Machining</h3>
                </div>
                <div className="p-4 pt-2 border-t border-[#000080]/10">
                  <p className="text-gray-600 text-left">Precision CNC machining for complex parts with tight tolerances. Our 5-axis machines create intricate components for multiple industries.</p>
                  <div className="mt-3 flex items-center text-[#000080] text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Drilling & Tapping */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#000080]/20 hover:border-[#898989] hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center p-4 bg-gradient-to-r from-[#000080]/10 to-white">
                  <div className="bg-[#000080]/20 rounded-lg p-3 mr-4 group-hover:bg-[#000080]/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#000080]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Drilling & Tapping</h3>
                </div>
                <div className="p-4 pt-2 border-t border-[#000080]/10">
                  <p className="text-gray-600 text-left">Expert drilling and tapping services with exact depth control and perfect thread pitch alignment for diverse applications.</p>
                  <div className="mt-3 flex items-center text-[#000080] text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Band Saw Cutting */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#000080]/20 hover:border-[#898989] hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center p-4 bg-gradient-to-r from-[#000080]/10 to-white">
                  <div className="bg-[#000080]/20 rounded-lg p-3 mr-4 group-hover:bg-[#000080]/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#000080]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Band Saw Cutting</h3>
                </div>
                <div className="p-4 pt-2 border-t border-[#000080]/10">
                  <p className="text-gray-600 text-left">Precise material cutting with advanced band saw technology for clean, accurate cuts on various metals and alloys with minimal waste.</p>
                  <div className="mt-3 flex items-center text-[#000080] text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Custom Solutions */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#000080]/20 hover:border-[#898989] hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center p-4 bg-gradient-to-r from-[#000080]/10 to-white">
                  <div className="bg-[#000080]/20 rounded-lg p-3 mr-4 group-hover:bg-[#000080]/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#000080]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Custom Solutions</h3>
                </div>
                <div className="p-4 pt-2 border-t border-[#000080]/10">
                  <p className="text-gray-600 text-left">Tailored engineering solutions for unique challenges. We design, prototype, and manufacture custom parts that perfectly meet your specific requirements.</p>
                  <div className="mt-3 flex items-center text-[#000080] text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black overflow-hidden" onClick={closeModal}>
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-60">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#000080]"></div>
            </div>
          )}
          
          <div 
            className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} h-full flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid Gallery View */}
            {viewMode === 'grid' && (
              <div className="h-full flex flex-col">
                {/* Gallery Header */}
                <div className="flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent sticky top-0 z-30">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Our Project Gallery</h3>
                  <button 
                    onClick={closeModal}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Masonry Gallery - Full Width with Scroll */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
                  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                    {galleryImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mb-4 bg-white/5 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectImage(index);
                        }}
                      >
                        <div className="relative transition-transform duration-300 group">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full h-auto object-cover"
                            style={{ 
                              height: `${index % 5 === 0 ? '400px' : 
                                    index % 3 === 0 ? '350px' : 
                                    index % 2 === 0 ? '300px' : '250px'}`
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                            <p className="text-white font-medium opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">{image.alt}</p>
                          </div>
                          <div className="absolute inset-0 bg-[#000080]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Fullscreen Image View */}
            {viewMode === 'fullscreen' && selectedImageIndex !== null && (
              <div className="h-full flex flex-col">
                {/* Navigation Header - Fixed */}
                <div className="sticky top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-30">
                  <button 
                    onClick={handleBackToGrid}
                    className="text-white flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to gallery</span>
                  </button>
                  <div className="flex items-center space-x-6">
                    <div className="text-white/80 text-sm">
                      {selectedImageIndex + 1} / {galleryImages.length}
                    </div>
                    <button 
                      onClick={closeModal}
                      className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Main Image - Full Screen with Scroll */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                  <div className="min-h-full flex items-center justify-center p-4 md:p-8 relative">
                    <img 
                      src={galleryImages[selectedImageIndex].url} 
                      alt={galleryImages[selectedImageIndex].alt}
                      className="max-w-full max-h-[calc(100vh-200px)] object-contain mx-auto z-10"
                    />
                    
                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                      <p className="text-white font-medium text-center max-w-3xl mx-auto">
                        {galleryImages[selectedImageIndex].alt}
                      </p>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                      className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 md:p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 md:p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Thumbnail Navigation - Fixed to Bottom */}
                <div className="sticky bottom-0 left-0 right-0 bg-black/80 p-4 overflow-x-auto custom-scrollbar-x z-30">
                  <div className="flex space-x-2 max-w-full px-4">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        className={`relative flex-shrink-0 h-16 w-20 rounded-md overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index ? 'border-[#000080] scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectImage(index);
                        }}
                      >
                        <img 
                          src={image.url} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track,
        .custom-scrollbar-x::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb,
        .custom-scrollbar-x::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover,
        .custom-scrollbar-x::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .custom-scrollbar-x::-webkit-scrollbar {
          width: 6px;
          height: 4px;
        }
      `}</style>
    </section>
  );
} 