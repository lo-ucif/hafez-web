import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Users from '../components/home/Users';
import Institutions from '../components/home/Institutions';
import Pricing from '../components/home/Pricing';
import AdditionalServices from '../components/home/AdditionalServices';
import Organisations from '../components/home/Organisations';
import Gallery from '../components/home/Gallery';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';

/**
 * Home page — composes layout + section components.
 * Matches both Figma desktop design and phone mode (node 173:282).
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden" dir="rtl">
      <Navbar />

      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Features />
        <Users />
        <Institutions />
        <Pricing />
        <AdditionalServices />
        <Organisations />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
