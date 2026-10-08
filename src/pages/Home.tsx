import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Users from '../components/home/Users';
import Institutions from '../components/home/Institutions';
import SpecialOffer from '../components/home/SpecialOffer';
import Organisations from '../components/home/Organisations';
import Pricing from '../components/home/Pricing';
import AdditionalServices from '../components/home/AdditionalServices';
import Gallery from '../components/home/Gallery';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';

/**
 * Home page — composes layout + section components.
 * Matches both Figma desktop design (node 196:177) and phone mode (node 173:282).
 * Styled with Almarai font throughout.
 */
export default function Home() {
  // Smooth scroll to initial section if hash exists
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden font-['Almarai']" dir="rtl">
      <Navbar activePage="home" />


      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Users />
        <Institutions />
        <SpecialOffer />
        <Organisations />
        <Pricing />
        <AdditionalServices />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
