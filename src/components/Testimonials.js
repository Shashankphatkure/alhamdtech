import React, { useState, useEffect } from 'react';
import { isBrowser } from '../utils/clientUtils';

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex items-center bg-gradient-to-br from-[#000080] to-[#000080] text-white overflow-hidden w-full max-w-full min-h-[600px] md:min-h-[700px] py-12 md:py-16 relative">
      {/* Grid background effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 pb-4 md:pb-6 w-full max-w-full overflow-hidden relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 pb-4">
          <div className="md:max-w-2xl">
            <div className="inline-block px-3 py-1 bg-[#000080]/20 text-[#000080] rounded-full text-sm font-medium tracking-wide mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Our <span className="text-white">Clients Say</span>
            </h2>
            <p className="text-white/70 text-base max-w-3xl">
              Don't just take our word for it. Here's what some of our valued clients have to say about our precision machining services.
            </p>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <a href="#contact" className="w-full md:w-auto inline-block px-6 py-3 bg-white text-[#000080] font-medium rounded-lg hover:bg-[#000080]/20 transition-all duration-300 shadow-lg text-center">
              Work With Us
            </a>
          </div>
        </div>
        
        <div className="overflow-hidden w-full">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}

// Testimonial Slider Component
function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Industrial Machinery Manufacturer",
      quote: "Bahut badhiya kaam karte hain Alhamd Technologies. Unka precision machining ka kaam bilkul perfect hai. Humari production line ke liye bahut important hai.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Automotive Components Supplier",
      quote: "Alhamd Technologies ka quality control bahut strong hai. Unke CNC machining services ne humari productivity ko double kar diya hai. Time pe delivery bhi milti hai.",
      rating: 5
    },
    {
      id: 3,
      name: "Arun Patel",
      role: "Heavy Equipment Manufacturer",
      quote: "Hum 5 saal se Alhamd Technologies ke saath kaam kar rahe hain. Unka technical expertise aur attention to detail bahut impressive hai. Koi bhi complex component banane mein expert hain.",
      rating: 5
    },
    {
      id: 4,
      name: "Meera Gupta",
      role: "Industrial Tools Manufacturer",
      quote: "Alhamd Technologies ne humari manufacturing process ko completely transform kar diya hai. Unka precision engineering ka kaam bahut reliable hai. Cost-effective bhi hai.",
      rating: 5
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Construction Equipment Supplier",
      quote: "Alhamd Technologies ka kaam dekh kar hum bahut impressed hain. Unke CNC machines ka precision level bahut high hai. Humari quality standards ko exceed karte hain.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Calculate visible slides based on screen size
  const [visibleSlides, setVisibleSlides] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      // Only run on client side
      if (!isBrowser()) return;
      
      // Set visible slides based on screen width
      setVisibleSlides(window.innerWidth >= 768 ? 3 : 1);
    };
    
    // Initial setup
    handleResize();
    
    // Add event listener for window resize
    if (isBrowser()) {
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - (visibleSlides - 1)));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        (prevIndex - 1 + (testimonials.length - (visibleSlides - 1))) % 
        (testimonials.length - (visibleSlides - 1))
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [visibleSlides]);

  return (
    <div className="relative h-full overflow-hidden">
      {/* Decorative elements - hidden to prevent overflow */}
      
      {/* Slider container */}
      <div className="flex flex-col justify-between h-full">
        <div className="relative z-10 overflow-hidden flex-grow">
          <div 
            className="transition-all duration-500 ease-in-out w-full h-full flex items-center"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {/* Testimonial slides - responsive */}
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  style={{ width: `${100 / visibleSlides}%` }}
                  className="px-2 flex-shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-md p-3 md:p-5 rounded-lg h-full flex flex-col hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-xl border border-white/10">
                    <div className="mb-4">
                      <blockquote className="text-lg mb-2 flex-grow leading-relaxed font-light">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="mt-auto">
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-white text-sm">{testimonial.role}</p>
                      </div>
                      
                      <div className="flex mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 z-20 left-0">
            <button 
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/30 rounded-full p-2 backdrop-blur-md transition-all duration-300 shadow-lg border border-white/10 group"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/30 rounded-full p-2 backdrop-blur-md transition-all duration-300 shadow-lg border border-white/10 group"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-2 space-x-2 pb-1">
          {Array.from({ length: testimonials.length - (visibleSlides - 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white w-6" 
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 