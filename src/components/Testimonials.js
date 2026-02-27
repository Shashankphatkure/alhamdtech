import React, { useState, useEffect } from 'react';
import { isBrowser } from '../utils/clientUtils';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#000080] text-white overflow-hidden w-full py-14 sm:py-12 md:py-16 lg:py-20 relative min-h-[500px] sm:min-h-0">
      {/* Dot background effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium tracking-wide mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              What Our Clients Say
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl">
              Don't just take our word for it. Here's what some of our valued clients have to say about our precision machining services.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="#contact" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#000080] font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Work With Us
            </a>
          </div>
        </div>

        <TestimonialSlider />
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
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!isBrowser()) return;

      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleSlides(3);
      } else if (width >= 640) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    handleResize();

    if (isBrowser()) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Reset currentIndex when visibleSlides changes
  useEffect(() => {
    const maxIndex = testimonials.length - visibleSlides;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleSlides, currentIndex, testimonials.length]);

  const maxIndex = testimonials.length - visibleSlides;

  const nextSlide = () => {
    if (!isAnimating && currentIndex < maxIndex) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    } else if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(0);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    } else if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(maxIndex);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleSlides, currentIndex]);

  const slideWidth = 100 / visibleSlides;

  return (
    <div className="relative">
      {/* Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${slideWidth}%` }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg h-full flex flex-col hover:bg-white/15 transition-all duration-300 border border-white/10">
                <blockquote className="text-sm sm:text-base lg:text-lg mb-2 leading-relaxed line-clamp-4 min-h-[5rem] sm:min-h-[6rem]">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mt-auto pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-white/70 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Navigation arrows and dots */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-2.5 backdrop-blur-sm transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white w-6"
                  : "bg-white/40 hover:bg-white/70 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 rounded-full p-2 sm:p-2.5 backdrop-blur-sm transition-all duration-300"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
