'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Import ClientMobileMenu dynamically
const ClientMobileMenu = dynamic(() => import('./client/ClientMobileMenu'));

// Define pages for search results
const pages = [
  { title: 'Home', path: '#home', description: 'Main landing page with company overview' },
  { title: 'Services', path: '#services', description: 'Our comprehensive service offerings' },
  { title: 'About', path: '#about', description: 'Learn about our company history and mission' },
  { title: 'Testimonials', path: '#testimonials', description: 'What our clients say about us' },
  { title: 'Videos', path: '#videos', description: 'Watch videos of our work and projects' },
  { title: 'Contact Us', path: '#contact', description: 'Get in touch with our team' },
];

// Import services from Services component
const services = [
  {
    id: 1,
    title: "Milling Work",
    description: "Precision milling services for various materials and specifications.",
    path: "#services"
  },
  {
    id: 2,
    title: "Lathe Work",
    description: "Expert lathe operations for turning, boring, threading, and facing materials.",
    path: "#services"
  },
  {
    id: 3,
    title: "CNC Work",
    description: "State-of-the-art CNC machining for complex parts with high precision.",
    path: "#services"
  },
  {
    id: 4,
    title: "Fabrication and Welding",
    description: "Assembly and joining of components with quality welding techniques.",
    path: "#services"
  },
  {
    id: 5,
    title: "Marine Ship Parts",
    description: "Specialized components engineered for maritime environments.",
    path: "#services"
  },
  {
    id: 6,
    title: "Oil and Gas Equipment",
    description: "Precision-engineered components for oil and gas exploration.",
    path: "#services"
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ pages: [], services: [] });
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHeaderVisible(false); // Scrolling down - hide header
      } else {
        setHeaderVisible(true); // Scrolling up - show header
      }
      
      lastScrollY.current = currentScrollY;
      
      // Enhanced active section detection with improved threshold calculation
      const sections = ['home', 'services', 'about', 'testimonials', 'videos', 'contact'];
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.15; // 15% of viewport height
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= scrollThreshold && rect.bottom >= scrollThreshold;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
      
      // Apply subtle parallax effect to header
      if (headerRef.current) {
        const opacity = Math.min(1, 0.8 + (scrollPosition / 1000));
        headerRef.current.style.setProperty('--header-opacity', opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Focus search input when search is opened
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    // Close search when clicking outside
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Simulate notification after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setSearchResults({ pages: [], services: [] });
    // Show the popup with a small delay
    if (!isSearchOpen) {
      setTimeout(() => {
        const popupOverlay = document.querySelector('.search-popup-overlay');
        if (popupOverlay) {
          popupOverlay.style.opacity = '1';
        }
      }, 50);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults({ pages: [], services: [] });
      return;
    }
    
    // Filter pages and services based on search query
    const filteredPages = pages.filter(page => 
      page.title.toLowerCase().includes(query.toLowerCase()) || 
      page.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const filteredServices = services.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) || 
      service.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults({
      pages: filteredPages,
      services: filteredServices
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // Fade out popup first
    const popupOverlay = document.querySelector('.search-popup-overlay');
    if (popupOverlay) {
      popupOverlay.style.opacity = '0';
      setTimeout(() => {
        setIsSearchOpen(false);
      }, 200);
    } else {
      setIsSearchOpen(false);
    }
  };

  const handleSearchResultClick = (path) => {
    setIsSearchOpen(false);
    // Navigate to the selected result
    window.location.href = path;
  };

  // Clean up blur effect when component unmounts
  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  // Remove blur when search is closed
  useEffect(() => {
    if (!isSearchOpen) {
      // Nothing needed here anymore
    }
  }, [isSearchOpen]);

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full py-2 md:py-3 px-4 md:px-8 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      } ${
        headerVisible 
          ? 'translate-y-0' 
          : '-translate-y-full'
      }`}
      style={{
        '--header-opacity': 1,
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="flex justify-between items-center w-full">
        {/* Enhanced Logo with Gradient and Subtle Animation */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-purple-200">
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="text-white font-bold text-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-purple-600 transition-colors duration-300">ALHAMD</h1>
            <p className="text-xs font-medium text-gray-600 -mt-1 tracking-wider opacity-90">TECHNOLOGIES</p>
          </div>
        </Link>
        
        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['home', 'services', 'about', 'testimonials', 'videos', 'contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item}`} 
              className={`text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group px-3 py-1.5 ${
                activeSection === item ? 'text-purple-600' : ''
              }`}
            >
              <span className="relative z-10">
                {item === 'contact' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              
              {/* Enhanced active indicator with animation */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-600 transition-all duration-300 ease-out ${
                activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>
          ))}
        </nav>
        
        {/* Enhanced Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="p-1.5 rounded-full text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-200 relative overflow-hidden"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            {/* Ripple effect on click */}
            <span className="absolute inset-0 bg-purple-100 opacity-30 transform scale-0 group-active:scale-100 transition-transform duration-500 rounded-full"></span>
          </button>
          
          {/* Enhanced CTA Button */}
          <a 
            href="#contact" 
            className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-md hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-sm hover:shadow-md focus:ring-2 focus:ring-purple-300 focus:outline-none transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Enhanced Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={toggleSearch}
            className="p-1.5 rounded-full text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-100"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            className="p-1.5 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Enhanced Search Popup with Results */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 search-popup-overlay pointer-events-auto opacity-0 transition-opacity duration-200"
          onClick={(e) => e.target === e.currentTarget && setIsSearchOpen(false)}
          style={{ transitionDelay: '50ms' }}
        >
          <div 
            ref={searchContainerRef}
            className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 animate-fadeIn z-[10000] search-popup-content"
            style={{ filter: 'blur(0)', transform: 'translateY(0)' }}
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search pages, services..."
                className="w-full bg-transparent pl-14 pr-12 py-4 text-gray-800 focus:outline-none text-lg border-b border-gray-200"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 px-3 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
                aria-label="Submit search"
              >
                Search
              </button>
            </form>
            
            <div className="max-h-[60vh] overflow-y-auto">
              {/* Search Results */}
              {searchQuery.trim() !== '' && (
                <div className="px-6 py-4">
                  {/* Services Results - Now First */}
                  {searchResults.services.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Services</h3>
                      <div className="space-y-3">
                        {searchResults.services.map((service) => (
                          <div 
                            key={service.id} 
                            className="p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors duration-200"
                            onClick={() => handleSearchResultClick(service.path)}
                          >
                            <h4 className="text-md font-medium text-purple-700">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Pages Results - Now Second */}
                  {searchResults.pages.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Pages</h3>
                      <div className="space-y-3">
                        {searchResults.pages.map((page) => (
                          <div 
                            key={page.path} 
                            className="p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors duration-200"
                            onClick={() => handleSearchResultClick(page.path)}
                          >
                            <h4 className="text-md font-medium text-purple-700">{page.title}</h4>
                            <p className="text-sm text-gray-600">{page.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* No Results */}
                  {searchResults.pages.length === 0 && searchResults.services.length === 0 && (
                    <div className="py-8 text-center">
                      <p className="text-gray-500">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Popular Searches and Services List */}
              {searchQuery.trim() === '' && (
                <div>
                  {/* Services List - Now First */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-600 mb-3">Our Services:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div 
                          key={service.id} 
                          className="p-3 border border-gray-100 hover:border-purple-200 hover:bg-purple-50 rounded-lg cursor-pointer transition-all duration-200"
                          onClick={() => handleSearchResultClick(service.path)}
                        >
                          <h4 className="text-md font-medium text-purple-700">{service.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Popular Searches - Now Second */}
                  <div className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Milling Work', 'CNC Work', 'Lathe Work', 'Marine Ship Parts', 'Contact'].map((term) => (
                        <button 
                          key={term}
                          className="px-3 py-1 bg-gray-100 hover:bg-purple-50 rounded-full text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => {
                            setSearchQuery(term);
                            handleSearchChange({ target: { value: term } });
                          }}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <ClientMobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} activeSection={activeSection} />
    </header>
  );
}

// Add these animations to your global CSS
/* 
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}

.blur-background > *:not(.z-50) {
  filter: blur(5px);
  transition: filter 0.3s ease-out;
}
*/ 