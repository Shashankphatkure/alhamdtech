import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex justify-end"
      style={{ zIndex: 60 }}
      onClick={(e) => {
        // Close menu when clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full h-screen shadow-xl transform transition-transform duration-300 animate-slide-in-right flex flex-col">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#000080] to-[#000080] p-5 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/20 focus:outline-none p-2 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-5 bg-white flex-grow overflow-y-auto">
          <ul className="space-y-3">
            {['home', 'services', 'about', 'testimonials', 'videos', 'contact'].map((item) => (
              <li key={item}>
              <Link 
                  href={`#${item}`}
                  className={`flex items-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === item 
                      ? 'bg-[#000080]/20 text-[#000080] shadow-sm' 
                      : 'text-gray-700 hover:bg-[#000080]/10 hover:text-[#000080]'
                  }`}
                onClick={onClose}
              >
                  {/* Icon for each menu item */}
                  <span className="mr-3">
                    {item === 'home' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {item === 'services' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {item === 'about' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {item === 'testimonials' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )}
                    {item === 'videos' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item === 'contact' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </span>
                  {item === 'contact' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact section moved to bottom */}
        <div className="p-5 border-t border-gray-200 bg-gray-50">
          <div className="mb-5 space-y-4">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-3 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              <span className="text-sm">+1 (234) 567-8900</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-3 text-[#000080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">info@company.com</span>
            </div>
          </div>
          <a 
            href="#contact" 
            onClick={onClose}
            className="group relative block w-full py-3.5 text-center text-white rounded-lg font-medium overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#000080] to-[#000080] transition-all duration-300 group-hover:from-[#000080] group-hover:to-[#000080]"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center">
              Get in Touch
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute inset-0 shadow-md group-hover:shadow-lg group-hover:shadow-[#000080]/100/25 transition-shadow duration-300"></span>
          </a>
        </div>
        
        {/* Footer */}
        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-200 bg-gray-100">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
} 

// Add this to your global CSS
/*
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-slide-in-right {
  animation: slideInRight 0.3s ease-out forwards;
}
*/ 