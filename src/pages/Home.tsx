import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Users from "../components/home/Users";
import Institutions from "../components/home/Institutions";
import Organisations from "../components/home/Organisations";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";

/**
 * Home page — composes layout + section components.
 * Matches both Figma desktop design (node 196:177) and phone mode (node 173:282).
 * Styled with Almarai font throughout.
 */
export default function Home() {
  // Smooth scroll when landing on a section hash from another page (e.g. returning to #features)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#home" || hash.startsWith("#/role")) return;

    const id = hash.replace(/^#\/?/, "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        const headerHeight = window.innerWidth < 768 ? 54 : 84;
        const currentScroll = window.scrollY || window.pageYOffset || 0;
        const targetY = el.getBoundingClientRect().top + currentScroll - headerHeight;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden font-['Almarai']"
      dir="rtl"
    >
      <Navbar activePage="home" />

      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Users />
        <Institutions />
        <Organisations />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
