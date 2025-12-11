import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#000080] via-[#000080] to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#898989] via-[#000080] to-[#898989]"></div>
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-[#000080]/30 blur-[100px]"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#000080]/30 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#000080]/20 blur-[120px]"></div>
      
      {/* Newsletter Section - Before Grid */}
      <div className="container mx-auto px-3 sm:px-4 mb-10 sm:mb-16 relative z-10">
        <div className="bg-gradient-to-r from-[#000080]/20 via-[#000080]/30 to-[#000080]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-[#000080]/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-base font-semibold relative inline-block mb-2">
                <span className="text-white">Stay updated</span>
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#898989] to-[#000080]"></span>
              </h3>
              <p className="text-white text-sm max-w-md">Join our newsletter for the latest updates and exclusive offers.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-3 py-2 sm:px-4 sm:py-3 bg-[#000080]/30 backdrop-blur-md border border-[#000080]/20 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#898989] text-white placeholder:text-white/60 w-full md:w-64 text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#000080] to-[#000080] text-white font-medium rounded-lg sm:rounded-xl shadow-lg shadow-[#000080]/30 hover:shadow-[#000080]/50 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Horizontal Navigation Menu - Removed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Column 1: A ALHAMD TECH */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#000080] to-[#000080] rounded-lg flex items-center justify-center shadow-lg mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#898989] to-white">
                  ALHAMD TECH
                </span>
              </h2>
            </div>
            
            <p className="text-white leading-relaxed">
              Where excellence is not just a goal, but a guarantee. We deliver innovative solutions tailored to your business needs.
            </p>
            
            <div className="flex space-x-3 pt-4">
              {/* Social Icons with modern styling */}
              <a href="https://www.youtube.com/@TheAlhamdTechnologies" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-lg bg-[#000080]/30 hover:bg-[#000080] flex items-center justify-center backdrop-blur-sm border border-[#000080]/10 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Column 2: Get in Touch */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Get in Touch</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#898989] to-[#000080]"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start text-white group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#000080]/30 backdrop-blur-md flex items-center justify-center border border-[#000080]/20 mr-3 group-hover:bg-[#000080]/40 transition-colors mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="text-sm">
                  <p>H No.1890, BHIM NAGAR, MIDC Rd,</p>
                  <p>opp. R-303, near Masjid, Naka, Rabale,</p>
                  <p>Navi Mumbai, Maharashtra 400701</p>
                </div>
              </div>
              <div className="flex items-center text-white group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#000080]/30 backdrop-blur-md flex items-center justify-center border border-[#000080]/20 mr-3 group-hover:bg-[#000080]/40 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-sm">thealhamdtechnologies@gmail.com</span>
              </div>
              <div className="flex items-center text-white group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#000080]/30 backdrop-blur-md flex items-center justify-center border border-[#000080]/20 mr-3 group-hover:bg-[#000080]/40 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-sm">+91 90227 26250</span>
              </div>
            </div>
          </div>
          
          {/* Column 3: Specialization */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Specialization</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#898989] to-[#000080]"></span>
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-3">
              {[
                { id: 1, name: "Petroleum & Petrochemical" },
                { id: 2, name: "Oil & Gas Field Equipment" },
                { id: 3, name: "Soap Factory Parts" },
                { id: 4, name: "Crusher Machine Components" },
                { id: 7, name: "Food Machinery Components" },
                { id: 8, name: "Marine Ship Parts" },
                { id: 9, name: "Shaft Thread & Fitting Parts" }
              ].map((item) => (
                <Link 
                  key={item.id}
                  href={`#specializations?id=${item.id}`}
                  className="text-white hover:text-white flex items-center group text-xs sm:text-sm"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 line-clamp-2 sm:line-clamp-none">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          {/* Column 4: Facilities & Capabilities */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-base font-semibold relative inline-block mb-4">
              <span className="text-white">Facilities & Capabilities</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#898989] to-[#000080]"></span>
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-3">
              <Link href="#services?id=14" className="text-white hover:text-white text-xs sm:text-sm">
                CNC Precision Works
              </Link>
              <Link href="#services?id=15" className="text-white hover:text-white text-xs sm:text-sm">
                All Types of Lathe Work
              </Link>
              <Link href="#services?id=5" className="text-white hover:text-white text-xs sm:text-sm">
                All Type of Milling Work
              </Link>
              <Link href="#services?id=6" className="text-white hover:text-white text-xs sm:text-sm">
                Fabrication and Welding
              </Link>
              <Link href="#services?id=16" className="text-white hover:text-white text-xs sm:text-sm">
                Cutting Facilities
              </Link>
              <Link href="#services?id=17" className="text-white hover:text-white text-xs sm:text-sm">
                Wire Cut and EDM
              </Link>
              <Link href="#services?id=18" className="text-white hover:text-white text-xs sm:text-sm">
                Laser and Plasma Cutting
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#000080]/50 flex justify-center items-center">
          <p className="text-white/70 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Alhamd Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 