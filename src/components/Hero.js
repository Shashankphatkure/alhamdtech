'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { isBrowser } from '../utils/clientUtils';

const Hero = () => {
  // Add a scroll handler function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  // Function to scroll to services section and trigger popup
  const scrollToServiceAndShowPopup = (serviceId) => {
    // First scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // After scrolling, dispatch custom event to open the popup
      setTimeout(() => {
        const event = new CustomEvent('openServicePopup', { 
          detail: { serviceId } 
        });
        document.dispatchEvent(event);
      }, 800); // Delay to allow scroll to complete
    }
  };

  // State to track if screen width is in the custom range
  const [isCustomWidthRange, setIsCustomWidthRange] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (!isBrowser()) return;
      
      const width = window.innerWidth;
      setIsCustomWidthRange(width >= 1152 && width <= 1250);
    };
    
    // Check on initial render
    checkScreenSize();
    
    // Add event listener for window resize
    if (isBrowser()) {
      window.addEventListener('resize', checkScreenSize);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white pt-16 pb-8 sm:py-0">
      {/* Background image */}
      <img
        src="https://img.freepik.com/premium-vector/dark-blue-background-with-blue-gradient_1055519-2175.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Background decoration with improved effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#898989] via-[#000080] to-[#898989]"></div>
        <div className="absolute -top-64 -right-64 w-[30rem] h-[30rem] rounded-full bg-[#000080]/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute -bottom-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-[#000080]/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] rounded-full bg-[#000080]/10 blur-[120px]"></div>
        
        {/* Enhanced animated floating elements - hide smallest ones on mobile */}
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 backdrop-blur-md rounded-full opacity-20 hidden sm:block"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-[#898989]/20 backdrop-blur-md rounded-full opacity-20"
        />
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            opacity: [0.07, 0.15, 0.07]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 right-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-[#898989]/20 backdrop-blur-md rounded-full opacity-20 hidden sm:block"
        />
      </div>
      
      <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 relative z-10 ${isCustomWidthRange ? '!px-8' : ''}`}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-2 sm:mb-3"
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#000080]/20 via-[#000080]/30 to-[#000080]/20 text-white text-[10px] sm:text-xs font-semibold tracking-wider rounded-full mb-3 sm:mb-4 backdrop-blur-sm border border-[#000080]/20">
              INNOVATIVE TECHNOLOGY SOLUTIONS
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white whitespace-nowrap"
          >
            ALHAMD TECHNOLOGIES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 max-w-2xl text-white font-light leading-relaxed px-2 sm:px-0"
          >
            Experience the difference with Alhamd Technologies – where excellence is not just a goal, but a guarantee. We deliver cutting-edge solutions tailored to transform your business in today's digital landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8 w-full justify-center"
          >
            <Link href="#services" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 sm:py-2 text-sm bg-gradient-to-r from-[#000080] to-[#000080] rounded-full text-white font-medium shadow-md shadow-[#000080]/30 hover:shadow-[#000080]/50 transition-all duration-300 w-full"
              >
                Explore Our Services
              </motion.button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 sm:py-2 text-sm bg-transparent border border-[#000080]/30 hover:border-[#000080]/80 rounded-full text-white font-medium backdrop-blur-sm hover:bg-[#000080]/10 transition-all duration-300 w-full"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8 w-full max-w-2xl"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '50+', label: 'Team Members' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center bg-slate-900/30 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 border border-[#000080]/20 hover:border-[#000080]/50 transition-all duration-300 hover:bg-[#000080]/40"
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">{stat.value}</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-full"
          >
            <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
              {[
                { name: "Milling Work", id: 1 },
                { name: "Lathe Work", id: 2 },
                { name: "CNC Work", id: 3 },
                { name: "Fabrication & Welding", id: 4 },
                { name: "Band Saw Machine", id: 5 },
                { name: "Drilling & Tapping", id: 6 }
              ].map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToServiceAndShowPopup(service.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-white text-[10px] sm:text-xs md:text-sm font-medium tracking-wide bg-slate-900/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-[#000080]/40 transition-colors cursor-pointer border border-[#000080]/20 hover:border-[#000080]/50 backdrop-blur-sm mb-1.5 ${index >= 3 ? 'hidden sm:block' : ''}`}
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 