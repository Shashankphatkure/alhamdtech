import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex items-center bg-gradient-to-br from-purple-700 to-purple-900 text-white h-screen">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div className="md:max-w-2xl">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium tracking-wide mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Our <span className="text-purple-200">Clients Say</span>
            </h2>
            <p className="text-purple-100 text-base max-w-3xl">
              Don't just take our word for it. Here's what some of our valued clients have to say about our precision machining services.
            </p>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-auto">
            <a href="#contact" className="w-full md:w-auto inline-block px-6 py-3 bg-white text-purple-800 font-medium rounded-lg hover:bg-purple-100 transition-all duration-300 shadow-lg text-center">
              Work With Us
            </a>
          </div>
        </div>
        
        <div className="h-[400px] md:h-[420px] pb-2">
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
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Bahut badhiya kaam karte hain Alhamd Technologies. Unka precision machining ka kaam bilkul perfect hai. Humari production line ke liye bahut important hai.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Automotive Components Supplier",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Alhamd Technologies ka quality control bahut strong hai. Unke CNC machining services ne humari productivity ko double kar diya hai. Time pe delivery bhi milti hai.",
      rating: 5
    },
    {
      id: 3,
      name: "Arun Patel",
      role: "Heavy Equipment Manufacturer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "Hum 5 saal se Alhamd Technologies ke saath kaam kar rahe hain. Unka technical expertise aur attention to detail bahut impressive hai. Koi bhi complex component banane mein expert hain.",
      rating: 5
    },
    {
      id: 4,
      name: "Meera Gupta",
      role: "Industrial Tools Manufacturer",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "Alhamd Technologies ne humari manufacturing process ko completely transform kar diya hai. Unka precision engineering ka kaam bahut reliable hai. Cost-effective bhi hai.",
      rating: 5
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Construction Equipment Supplier",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
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
      // Set visible slides based on screen width
      setVisibleSlides(window.innerWidth >= 768 ? 3 : 1);
    };
    
    // Initial setup
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
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
    <div className="bg-transparent p-2 md:p-4 rounded-3xl shadow-2xl text-white relative overflow-hidden h-full backdrop-blur-sm border border-white/10">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-400 opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
      
      {/* Slider container */}
      <div className="flex flex-col justify-between h-full">
        <div className="relative z-10 overflow-hidden flex-grow">
          <div 
            className="transition-all duration-500 ease-in-out w-full h-full flex items-center"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {/* Testimonial slides - responsive */}
            <div className="flex w-full">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`${visibleSlides === 1 ? 'w-full' : 'w-1/3'} px-2 flex-shrink-0`}
                >
                  <div className="bg-white/10 backdrop-blur-md p-3 md:p-5 rounded-2xl h-full flex flex-col hover:bg-white/15 hover:scale-105 transition-all duration-500 shadow-xl border border-white/10">
                    <div className="mb-4">
                      <blockquote className="text-lg italic mb-6 flex-grow leading-relaxed font-light">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full border-2 border-white/50 mr-3 object-cover shadow-lg"
                        />
                        <div>
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-purple-200 text-sm">{testimonial.role}</p>
                        </div>
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