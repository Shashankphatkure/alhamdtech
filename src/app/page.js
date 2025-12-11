'use client';

// Import client components
import Header from '../components/Header';
import dynamic from 'next/dynamic';

// Dynamically import client components
const ClientHero = dynamic(() => import('../components/client/ClientHero'), { ssr: false });

// Import regular components
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ClientHero />
        <Services />
        <About />
        <Testimonials />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
