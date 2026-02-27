'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { isBrowser } from '../utils/clientUtils';

const Hero = () => {
  const scrollToServiceAndShowPopup = (serviceId) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        const event = new CustomEvent('openServicePopup', {
          detail: { serviceId }
        });
        document.dispatchEvent(event);
      }, 800);
    }
  };

  const [isCustomWidthRange, setIsCustomWidthRange] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (!isBrowser()) return;
      const width = window.innerWidth;
      setIsCustomWidthRange(width >= 1152 && width <= 1250);
    };

    checkScreenSize();

    if (isBrowser()) {
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background image */}
      <img
        src="/hero-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Background decoration */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#898989] via-[#000080] to-[#898989]"></div>
        <div className="absolute -top-64 -right-64 w-[30rem] h-[30rem] rounded-full bg-[#000080]/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute -bottom-32 -left-32 w-[25rem] h-[25rem] rounded-full bg-[#000080]/30 blur-[100px] hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] rounded-full bg-[#000080]/10 blur-[120px]"></div>
      </div>

      <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isCustomWidthRange ? '!px-8' : ''}`}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <div className="mb-2 sm:mb-3">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#000080]/20 via-[#000080]/30 to-[#000080]/20 text-white text-[10px] sm:text-xs font-semibold tracking-wider rounded-full mb-3 sm:mb-4 backdrop-blur-sm border border-[#000080]/20">
              INNOVATIVE TECHNOLOGY SOLUTIONS
            </span>
          </div>

          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white whitespace-nowrap">
            ALHAMD TECHNOLOGIES
          </h1>

          <p className="text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 max-w-2xl text-white font-light leading-relaxed px-2 sm:px-0">
            Experience the difference with Alhamd Technologies – where excellence is not just a goal, but a guarantee. We deliver cutting-edge solutions tailored to transform your business in today's digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8 w-full justify-center">
            <Link href="#services" className="w-full sm:w-auto">
              <button className="px-5 py-2.5 sm:py-2 text-sm bg-gradient-to-r from-[#000080] to-[#000080] rounded-full text-white font-medium shadow-md shadow-[#000080]/30 w-full">
                Explore Our Services
              </button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="px-5 py-2.5 sm:py-2 text-sm bg-transparent border border-[#000080]/30 rounded-full text-white font-medium backdrop-blur-sm w-full">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8 w-full max-w-2xl">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Completed' },
              { value: '50+', label: 'Team Members' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-slate-900/30 backdrop-blur-md rounded-lg p-1.5 sm:p-2 md:p-3 border border-[#000080]/20"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5">{stat.value}</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
              {[
                { name: "Milling Work", id: 1 },
                { name: "Lathe Work", id: 2 },
                { name: "CNC Work", id: 3 },
                { name: "Fabrication & Welding", id: 4 },
                { name: "Band Saw Machine", id: 5 },
                { name: "Drilling & Tapping", id: 6 }
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToServiceAndShowPopup(service.id)}
                  className={`text-white text-[10px] sm:text-xs md:text-sm font-medium tracking-wide bg-slate-900/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full cursor-pointer border border-[#000080]/20 backdrop-blur-sm mb-1.5 ${index >= 3 ? 'hidden sm:block' : ''}`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
