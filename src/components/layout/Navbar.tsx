import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import { navLinks } from '../../data/navigation';
import type { NavLink } from '../../data/navigation';
import ArabicBg from '../common/ArabicBg';

interface NavbarProps {
  activePage?: 'home' | 'terms';
}

/**
 * Site-wide Navbar with Framer Motion animations & dynamic active link coloring.
 * - Colors the clicked title in gold (#cab178) with animated underline.
 * - Automatically tracks active section on scroll via scroll spy.
 * - Supports multi-page navigation (Home vs Terms & Conditions).
 * - Animated mobile drawer from the right.
 */
export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(() => {
    if (activePage === 'terms') return 'terms';
    const hash = window.location.hash;
    if (hash === '#features') return 'features';
    if (hash === '#pricing') return 'offers';
    if (hash === '#contact') return 'support';
    if (hash === '#terms') return 'terms';
    return 'home';
  });

  // Sync active link with hash changes and activePage prop
  useEffect(() => {
    if (activePage === 'terms') {
      setActiveId('terms');
      return;
    }

    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#features') setActiveId('features');
      else if (hash === '#pricing') setActiveId('offers');
      else if (hash === '#contact') setActiveId('support');
      else if (hash === '#terms') setActiveId('terms');
      else if (hash === '#home' || !hash) setActiveId('home');
    };

    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, [activePage]);

  // Scroll Spy: dynamically highlight the title matching the section on screen
  useEffect(() => {
    if (activePage !== 'home') return;

    const sections = [
      { id: 'home', linkId: 'home' },
      { id: 'features', linkId: 'features' },
      { id: 'pricing', linkId: 'offers' },
      { id: 'contact', linkId: 'support' },
    ];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 250;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                setActiveId(sections[i].linkId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle clicking a navigation link
  const handleNavClick = (link: NavLink, e: React.MouseEvent) => {
    setActiveId(link.id);
    setMobileMenuOpen(false);

    if (link.id === 'terms') {
      window.location.hash = '#terms';
      return;
    }

    if (activePage === 'terms') {
      // Navigating from Terms back to Home section
      window.location.hash = link.href;
    } else {
      // Smooth scroll on Home page
      const targetId = link.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', link.href);
      }
    }
  };

  // Handle CTA button click
  const handleCtaClick = () => {
    setActiveId('offers');
    setMobileMenuOpen(false);
    if (activePage === 'terms') {
      window.location.hash = '#pricing';
    } else {
      const el = document.getElementById('pricing') || document.getElementById('cta');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#pricing');
      }
    }
  };

  // Handle Logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    setActiveId('home');
    setMobileMenuOpen(false);
    if (activePage === 'terms') {
      window.location.hash = '#home';
    } else {
      const el = document.getElementById('home');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#home');
      }
    }
  };

  return (
    <>
      {/* ── Fixed Header Bar across all web pages ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 w-full bg-[#1a5a81]/90 backdrop-blur-md shadow-md border-b border-white/15 transition-colors duration-300"
      >
        {/* ── Desktop Navigation (md and up) ── */}
        <div
          className="
            hidden md:flex items-center justify-between
            h-[95.667px] px-6 lg:px-12 w-full max-w-[1440px] mx-auto
          "
          dir="ltr"
        >
          {/* CTA Button (left side in LTR) */}
          <div className="flex items-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCtaClick}
              className="
                bg-[#cab178] hover:bg-[#bfa56a] text-white
                font-['Almarai:Bold'] font-bold
                text-[16px] lg:text-[18px] leading-none
                px-6 py-3 rounded-[8px]
                transition-colors duration-200
                cursor-pointer shadow-md
              "
              dir="auto"
            >
              طلب نسخة
            </motion.button>
          </div>

          {/* Center: nav links with dynamic active coloring */}
          <nav aria-label="التنقل الرئيسي">
            <ul className="flex gap-6 lg:gap-8 items-center list-none m-0 p-0" dir="rtl">
              {navLinks.map((link) => {
                const isLinkActive = activeId === link.id;

                return (
                  <motion.li
                    key={link.id}
                    whileHover={{ y: -2 }}
                    className="relative flex flex-col items-center gap-[5px]"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(link, e)}
                      dir="auto"
                      className={`
                        font-['Almarai:Bold'] not-italic text-[18px] lg:text-[20px] leading-[normal]
                        whitespace-nowrap no-underline transition-all duration-200 cursor-pointer
                        ${
                          isLinkActive
                            ? 'text-[#cab178] font-bold drop-shadow-[0_2px_10px_rgba(202,177,120,0.45)] scale-105'
                            : 'text-white/90 hover:text-[#cab178]'
                        }
                      `}
                    >
                      {link.label}
                    </a>
                    {isLinkActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="h-0 w-[30.27px] relative block"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-[-2.16px_0_0_0] block max-w-none size-full"
                          src={IMAGES.navUnderline}
                        />
                      </motion.span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Logo (right side in LTR) */}
          <motion.a
            href="#home"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="الصفحة الرئيسية"
            className="relative shrink-0 h-[56.75px] w-[66px] transition-transform duration-200 cursor-pointer"
          >
            <ArabicBg positionClass="inset-0" opacityClass="opacity-0" />
            <img
              alt=""
              aria-hidden="true"
              className="absolute h-[56.75px] left-[39.9px] top-0 w-[5.448px] max-w-none block"
              src={IMAGES.logoBarTop}
            />
            <img
              alt="شعار حافظ"
              className="absolute h-[41.612px] left-0 top-[8.15px] w-[37.218px] max-w-none block"
              src={IMAGES.logoPartHa}
            />
            <img
              alt=""
              aria-hidden="true"
              className="absolute h-[35.776px] left-[38.3px] top-[12.89px] w-[23.314px] max-w-none block"
              src={IMAGES.logoPartHin}
            />
            <img
              alt=""
              aria-hidden="true"
              className="absolute h-[19.551px] left-[40.81px] top-[29.03px] w-[25.722px] max-w-none block"
              src={IMAGES.logoBarBottom}
            />
          </motion.a>
        </div>

        {/* ── Mobile Navigation Header Bar ── */}
        <div className="flex md:hidden items-center justify-between px-5 py-3 w-full relative" dir="rtl">
          {/* Hamburger Menu Toggle (on the RIGHT in RTL) */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              flex items-center justify-center p-2 rounded-lg text-white
              hover:bg-white/10 active:scale-95 transition-colors cursor-pointer
            "
          >
            <svg
              className="w-7 h-5 text-white"
              viewBox="0 0 30 21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="0" y1="2" x2="30" y2="2" />
              <line x1="0" y1="10.5" x2="30" y2="10.5" />
              <line x1="0" y1="19" x2="30" y2="19" />
            </svg>
          </motion.button>

          {/* Logo for Mobile Header (on the LEFT in RTL) */}
          <motion.a
            href="#home"
            onClick={handleLogoClick}
            whileTap={{ scale: 0.95 }}
            aria-label="الصفحة الرئيسية"
            className="relative shrink-0 h-[36px] w-[42px] cursor-pointer"
          >
            <img
              alt="شعار حافظ"
              className="block size-full object-contain"
              src={IMAGES.footerLogo}
            />
          </motion.a>
        </div>

        {/* Line under mobile navbar (the .line) */}
        <div className="block md:hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[#cab178] to-transparent shadow-xs" />
      </motion.header>

      {/* ── Mobile Slide-out Drawer with AnimatePresence (Figma node 205:1602) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" dir="rtl">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer from the RIGHT matching Figma node 205:1602 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="
                absolute right-0 top-0 bottom-0
                w-[280px] sm:w-[320px] max-w-[85vw]
                h-screen h-[100dvh]
                bg-[#1a5a81] border-l border-white/20
                shadow-2xl flex flex-col justify-between
                px-6 py-6 z-10 overflow-hidden
              "
            >
              {/* Calligraphy Watermark in Mobile Drawer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <ArabicBg positionClass="top-10 -right-10" sizeClass="size-[350px]" opacityClass="opacity-10" />
                <ArabicBg positionClass="bottom-0 -left-10" sizeClass="size-[350px]" opacityClass="opacity-10" />
              </div>

              {/* Drawer Top: Close button on right + Logo on left */}
              <div className="flex items-center justify-between w-full relative z-10 pb-4 border-b border-white/15">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="text-white hover:text-[#cab178] p-2 transition-colors cursor-pointer flex items-center justify-center -mr-2"
                >
                  <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>

                <a
                  href="#home"
                  onClick={handleLogoClick}
                  aria-label="الصفحة الرئيسية"
                  className="relative shrink-0 h-[50px] w-[58px] cursor-pointer"
                >
                  <img
                    alt="شعار حافظ"
                    className="block size-full object-contain"
                    src={IMAGES.footerLogo}
                  />
                </a>
              </div>

              {/* Navigation links with dynamic active coloring */}
              <nav className="my-auto py-8 relative z-10" aria-label="روابط الموبايل">
                <ul className="flex flex-col gap-6 items-end w-full list-none p-0 m-0">
                  {navLinks.map((link, idx) => {
                    const isLinkActive = activeId === link.id;

                    return (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * (idx + 1), duration: 0.25 }}
                        className="w-full text-right"
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(link, e)}
                          className={`
                            block font-['Almarai:Bold'] text-[24px] font-bold text-right leading-tight
                            transition-all duration-200 no-underline cursor-pointer
                            ${
                              isLinkActive
                                ? 'text-[#cab178] drop-shadow-[0_2px_8px_rgba(202,177,120,0.5)] scale-105 pr-2 border-r-4 border-[#cab178]'
                                : 'text-white hover:text-[#cab178]'
                            }
                          `}
                          dir="auto"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer Bottom: CTA Button "طلب نسخة" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="w-full relative z-10 pt-4 pb-2 flex justify-center"
              >
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCtaClick}
                  className="
                    bg-[#cab178] hover:bg-[#bfa56a] text-white
                    w-full h-[60px] sm:h-[64px] rounded-[12px]
                    flex items-center justify-center
                    font-['Almarai:Bold'] font-bold text-[22px] sm:text-[24px] text-center
                    shadow-lg hover:shadow-xl cursor-pointer transition-colors
                  "
                  dir="auto"
                >
                  طلب نسخة
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
