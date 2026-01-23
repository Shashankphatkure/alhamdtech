import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    title: "Milling Work",
    description: "Milling is a fundamental machining process that involves removing material to create intricate shapes and features. Whether it's flat surfaces, contours, or complex 3D profiles, we excel in all types of milling work to meet your specifications.",
    image: "/images/placeholder-blue.jpg",
    icon: "M10 12a2 2 0 100-4 2 2 0 000 4zm0 0v5m0 0l-2-2m2 2l2-2m-6-4a2 2 0 100-4 2 2 0 000 4z M14 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    id: 2,
    title: "Lathe Work",
    description: "Lathe work involves rotating a workpiece against a cutting tool to shape it symmetrically. Our proficiency in lathe operations allows us to turn, bore, thread, and face materials to exact specifications, ensuring precise dimensions and finishes.",
    image: "/images/placeholder-indigo.jpg",
    icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
  },
  {
    id: 3,
    title: "CNC Work",
    description: "Our state-of-the-art CNC machines allow us to achieve precise and complex shapes with high repeatability. This technology enables us to produce intricate parts and components for a wide range of industries with exceptional accuracy.",
    image: "/images/placeholder-slate.jpg",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    id: 4,
    title: "Fabrication and Welding Work",
    description: "Our fabrication and welding capabilities expand our service offerings to include the assembly and joining of various components. Whether it's sheet metal work or larger structures, we possess the skills and equipment to deliver high-quality results.",
    image: "/images/placeholder-red.jpg",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
  },
  {
    id: 5,
    title: "Band Saw Machine",
    description: "Our cutting facility, equipped with advanced Band Saw Machines, ensures clean and precise cuts on various materials. This capability is essential for shaping raw materials into specific sizes and forms required for your projects.",
    image: "/images/placeholder-orange.jpg",
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
  },
  {
    id: 6,
    title: "Drilling, Tapping, Slotting",
    description: "Our expertise in drilling, tapping, and slotting processes enables us to create holes, threads, and precise slots in a wide variety of materials. This is crucial for assembling and fitting components accurately.",
    image: "/images/placeholder-yellow.jpg",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  },
  {
    id: 7,
    title: "Petroleum & Petrochemical Components",
    description: "We design and manufacture custom parts and systems specifically engineered for the demanding environments of the oil and chemical sector, ensuring durability and reliability under extreme conditions.",
    image: "/images/placeholder-green.jpg",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    id: 8,
    title: "Oil and Gas Field Equipment",
    description: "Our precision-engineered components for oil and gas exploration withstand the most challenging conditions. We provide reliable parts that meet strict industry standards and specifications.",
    image: "/images/placeholder-teal.jpg",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
  },
  {
    id: 9,
    title: "Soap Factory Parts",
    description: "We specialize in creating equipment and parts used in soap manufacturing facilities, delivering custom components that enhance production efficiency and product quality.",
    image: "/images/placeholder-cyan.jpg",
    icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  },
  {
    id: 10,
    title: "Crusher Machine Components",
    description: "Our heavy-duty parts for crushing applications are built to withstand extreme wear and pressure, providing longer service life and reduced maintenance costs for crushing operations.",
    image: "/images/placeholder-blue.jpg",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    id: 11,
    title: "Food Machinery Components",
    description: "We produce custom food-grade components for food processing equipment, meeting strict hygiene standards while ensuring optimal performance and longevity in food production environments.",
    image: "/images/placeholder-indigo.jpg",
    icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
  },
  {
    id: 12,
    title: "Marine Ship Parts",
    description: "Our specialized marine industry components are engineered to withstand corrosion and the harsh maritime environment, providing reliable operation for various types of ships and vessels.",
    image: "/images/placeholder-slate.jpg",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 13,
    title: "Shaft Thread and Fitting Parts",
    description: "We produce precision threaded shafts and custom fittings for industrial applications, ensuring perfect alignment and secure connections for critical mechanical systems.",
    image: "/images/placeholder-red.jpg",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    id: 14,
    title: "Wire Cut and EDM",
    description: "Our Electrical Discharge Machining services provide extremely precise cuts and shapes in hard metals and complex geometries that traditional machining cannot achieve.",
    image: "/images/placeholder-orange.jpg",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 15,
    title: "Laser and Plasma Cutting",
    description: "We offer advanced laser and plasma cutting services for exceptional precision and edge quality on a wide range of materials, enabling complex designs and tight tolerances.",
    image: "/images/placeholder-yellow.jpg",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
];

// Modal component for service details
const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-6xl overflow-hidden animate-modal"
        onClick={e => e.stopPropagation()}
      >
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <button 
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors shadow-md"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-2/5 h-48 sm:h-64 lg:h-auto relative bg-gradient-to-r from-[#000080] to-[#000080]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 sm:h-24 w-16 sm:w-24 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/20">
              <Image 
                src={service.image || "/images/placeholder-slate.jpg"}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="mix-blend-overlay opacity-60"
              />
            </div>
            
            {/* Add service summary card */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 sm:p-4 text-white hidden sm:block">
              <h4 className="font-bold mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Why Choose Our {service.title}</h4>
              <ul className="text-[10px] sm:text-xs md:text-sm space-y-0.5 sm:space-y-1">
                <li className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#898989]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Premium Quality Materials
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#898989]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Industry-Leading Precision
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#898989]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Long-Term Reliability
                </li>
              </ul>
            </div>
          </div>
        
          {/* Right side - Content */}
          <div className="p-4 sm:p-6 lg:p-8 lg:w-3/5">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center mb-2">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#000080]/20 dark:bg-[#000080]/40 text-[#000080] dark:text-[#898989] text-[10px] sm:text-xs font-semibold tracking-wider rounded-full mr-2 sm:mr-3">
                  PREMIUM SERVICE
                </span>
                <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow"></div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">{service.title}</h3>
              <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#000080] mb-3 sm:mb-4"></div>
            </div>
            
            <div className="prose prose-slate dark:prose-invert mb-4 sm:mb-6">
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{service.description}</p>
            
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                Our team of experts uses state-of-the-art equipment and follows industry best practices to deliver exceptional results. 
                We pride ourselves on precision, reliability, and meeting tight deadlines for all our {service.title.toLowerCase()} projects.
              </p>
            </div>
            
            {/* Features and Benefits */}
            <div className="bg-[#000080]/10 dark:bg-[#000080]/20 p-3 sm:p-5 rounded-lg mb-4 sm:mb-6">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-center text-xs sm:text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[#000080] dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Service Benefits
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#000080] dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="dark:text-gray-300 text-[10px] sm:text-xs md:text-sm">Custom-tailored to your specific requirements</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#000080] dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="dark:text-gray-300 text-[10px] sm:text-xs md:text-sm">Highly durable components that last longer</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#000080] dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="dark:text-gray-300 text-[10px] sm:text-xs md:text-sm">Optimized for maximum performance</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#000080] dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="dark:text-gray-300 text-[10px] sm:text-xs md:text-sm">Cost-effective solutions with superior quality</span>
                </div>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 sm:pt-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-[#000080] hover:bg-[#000080] text-white text-xs sm:text-sm font-medium rounded-lg transition-colors inline-flex items-center whitespace-nowrap"
                >
                  Get a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Contact icons */}
                <a href="tel:+919022726250" className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#000080]/30 dark:border-[#000080] hover:bg-[#000080]/10 dark:hover:bg-[#000080]/30 transition-colors text-[#000080] dark:text-[#898989] text-xs sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  <span>Call Us</span>
                </a>
                <a href="mailto:thealhamdtechnologies@gmail.com" className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-[#000080]/30 dark:border-[#000080] hover:bg-[#000080]/10 dark:hover:bg-[#000080]/30 transition-colors text-[#000080] dark:text-[#898989] text-xs sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ServiceCard({ service, onClick }) {
  const { title, description, icon } = service;
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden flex flex-col h-full transform hover:scale-102 transition-all duration-300 border border-[#000080]/20 shadow-lg hover:shadow-xl hover:shadow-[#000080]/30/30 group cursor-pointer"
      onClick={() => onClick(service)}
    >
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#000080]/10 rounded-bl-full opacity-30"></div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#000080]/20 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-[#000080]/30 transition-all duration-300 relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-[#000080] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 flex-grow text-xs md:text-sm leading-relaxed">{description}</p>
        <div className="mt-3 sm:mt-4 md:mt-5 pt-2 sm:pt-3 border-t border-gray-100">
          <span className="text-[#000080] text-xs md:text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  
  // Listen for custom event from Hero.js
  useEffect(() => {
    const handleOpenServicePopup = (event) => {
      const serviceId = event.detail.serviceId;
      const service = services.find(s => s.id === serviceId);
      
      if (service) {
        handleServiceClick(service);
      }
    };
    
    document.addEventListener('openServicePopup', handleOpenServicePopup);
    
    return () => {
      document.removeEventListener('openServicePopup', handleOpenServicePopup);
    };
  }, []);
  
  return (
    <section id="services" className="py-12 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-[#000080]/20/40 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#000080]/20/40 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-8xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left side - Introduction */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-top mt-7">
            <div className="">
              <span className="px-4 py-1.5 bg-[#000080]/20 text-[#000080] text-xs font-semibold tracking-wider rounded-full mb-6 inline-block">
                WHAT WE OFFER
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-[#000080]">
                OUR SERVICES
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-8 font-medium">
                We provide specialized machining and manufacturing services across multiple industries, 
                delivering <span className="text-[#000080] font-bold">precision components</span> and <span className="text-[#000080] font-bold">reliable solutions</span>.
              </p>
              
              {/* Key points with icons */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#000080]/20 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Decades of Experience</h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Over <span className="text-[#000080] font-semibold">20+ years</span> of expertise with skilled engineers and technicians utilizing <span className="text-[#000080] font-semibold">cutting-edge technology</span> for exceptional quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#000080]/20 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Precision & Quality</h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      From custom fabrication to precision machining, we meet the <span className="text-[#000080] font-semibold">most demanding specifications</span> with competitive pricing and timely delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#000080]/20 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Trusted Industry Partner</h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Our commitment to excellence has made us a trusted partner for businesses in <span className="text-[#000080] font-semibold">petroleum, manufacturing, marine, and food processing</span> industries.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Get a Quote Button */}
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="w-full px-8 py-3 bg-[#000080] hover:bg-[#000080] text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg inline-flex items-center justify-center group"
                >
                  Get a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Service cards grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.slice(0, 4).map((service) => (
                <ServiceCard 
                  key={service.id}
                  service={service}
                  onClick={handleServiceClick}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="w-full pt-2 border-t border-[#898989]/50 mb-8"></div>
            <span className="px-4 py-1.5 bg-[#000080]/20 text-[#000080] text-xs font-semibold tracking-wider rounded-full mb-4 inline-block">
              INDUSTRY SOLUTIONS
            </span>
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-[#000080]">
                <span id="specializations">OUR SPECIALIZATIONS</span>
              </span>
            </h3>
            <p className="text-gray-600 text-xs md:text-base max-w-2xl mx-auto">
              We deliver precision-engineered components and solutions for specialized industries with unique requirements and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            {services.slice(6, 13).map((service, index) => (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Card with hover effects */}
                <div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#000080]/10 group-hover:border-[#000080]/30 cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Top accent bar */}
                  <div className="h-2 bg-gradient-to-r from-[#000080] to-[#000080]"></div>
                  
                  {/* Card content wrapper */}
                  <div className="p-5 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#000080]/20 flex items-center justify-center mb-4 group-hover:bg-[#000080]/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#000080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-[#000080] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex justify-end mt-auto">
                      <button className="text-[#000080] text-xs sm:text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        View details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-center mb-12">
            <div className="w-full pt-2 border-t border-[#898989]/50 mb-8"></div>
            <span className="px-4 py-1.5 bg-[#000080]/20 text-[#000080] text-xs font-semibold tracking-wider rounded-full mb-4 inline-block">
              EQUIPMENT & TECHNOLOGY
            </span>
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-[#000080]">
                FACILITIES & CAPABILITIES
              </span>
            </h3>
            <p className="text-gray-600 text-xs md:text-base max-w-2xl mx-auto">
              Our advanced facilities and specialized equipment enable us to deliver exceptional precision and quality across all projects.
            </p>
          </div>
          
          {/* Facilities & Capabilities cards with horizontal layout */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...services.slice(4, 6), ...services.slice(13, 15)].map((service) => (
                <div 
                key={service.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#000080]/10 hover:shadow-xl transition-all duration-300 group"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Icon */}
                    <div className="md:w-1/3 bg-gradient-to-br from-[#000080] to-[#000080] p-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="md:w-2/3 p-3 sm:p-4 md:p-6 flex flex-col">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-[#000080] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3 sm:mb-4 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex justify-end">
                        <button className="text-[#000080] text-xs sm:text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          View details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      
      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal {
          animation: modalFadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );

} 
