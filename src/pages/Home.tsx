import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Users from '../components/home/Users';
import Pricing from '../components/home/Pricing';
import AdditionalServices from '../components/home/AdditionalServices';
import Organisations from '../components/home/Organisations';
import Gallery from '../components/home/Gallery';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';

/**
 * Home page — composes layout + section components only.
 * No business logic or inline JSX content lives here.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Users />
        <Pricing />
        <AdditionalServices />
        <Organisations />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
