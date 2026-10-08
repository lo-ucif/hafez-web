import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import { navLinks } from '../../data/navigation';
import ArabicBg from '../common/ArabicBg';

/**
 * Site-wide Navbar with Framer Motion animations.
 * - Fixed across the entire web page with glassmorphism blur (backdrop-blur-md).
 * - Animated mobile button on the RIGHT side, mobile sidebar on the RIGHT side with spring slide.
 * - AnimatePresence for butter-smooth mobile drawer transitions.
 * - Staggered entrance for drawer links.
 * - Button hover & tap physics.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              onClick={() => {
                const el = document.getElementById('pricing') || document.getElementById('cta');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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

          {/* Center: nav links */}
          <nav aria-label="التنقل الرئيسي">
            <ul className="flex gap-6 lg:gap-8 items-center list-none m-0 p-0" dir="rtl">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ y: -2 }}
                  className="relative flex flex-col items-center gap-[5px]"
                >
                  <a
                    href={link.href}
                    dir="auto"
                    className={`
                      font-['Almarai:Regular'] not-italic text-[18px] lg:text-[20px] leading-[normal]
                      whitespace-nowrap no-underline transition-colors duration-200
                      hover:text-[#cab178]
                      ${link.isActive ? 'text-[#cab178] font-bold' : 'text-white'}
                    `}
                  >
                    {link.label}
                  </a>
                  {link.isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="h-0 w-[30.27px] relative block"
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
              ))}
            </ul>
          </nav>

          {/* Logo (right side in LTR) */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="الصفحة الرئيسية"
            className="relative shrink-0 h-[56.75px] w-[66px] transition-transform duration-200"
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
            whileTap={{ scale: 0.95 }}
            aria-label="الصفحة الرئيسية"
            className="relative shrink-0 h-[36px] w-[42px]"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer content panel on the RIGHT side with spring slide */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="
                fixed top-0 right-0 bottom-0 h-screen h-[100dvh] w-[82%] max-w-[320px] bg-[#1a5a81] shadow-2xl
                flex flex-col justify-between py-6 px-7 z-50 overflow-y-auto overflow-x-hidden
                border-l border-white/10
              "
            >
              {/* Background Arabic calligraphy watermark */}
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 size-[600px] pointer-events-none opacity-5">
                <img
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 size-full object-cover max-w-none"
                  src={IMAGES.arabicBg}
                />
              </div>

              {/* Drawer Top Row: Close X on the LEFT, Hafiz Logo on the RIGHT */}
              <div className="flex items-center justify-between w-full relative z-10 pt-2">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.85 }}
                  aria-label="إغلاق القائمة"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#cab178] p-2 transition-colors cursor-pointer flex items-center justify-center -mr-2"
                >
                  <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>

                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="الصفحة الرئيسية"
                  className="relative shrink-0 h-[50px] w-[58px]"
                >
                  <img
                    alt="شعار حافظ"
                    className="block size-full object-contain"
                    src={IMAGES.footerLogo}
                  />
                </a>
              </div>

              {/* Navigation links with staggered fade & slide */}
              <nav className="my-auto py-8 relative z-10" aria-label="روابط الموبايل">
                <ul className="flex flex-col gap-6 items-end w-full list-none p-0 m-0">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * (idx + 1), duration: 0.25 }}
                      className="w-full text-right"
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          block font-['Almarai:Bold'] text-[24px] font-bold text-right leading-tight
                          transition-colors duration-200 no-underline
                          ${
                            link.isActive
                              ? 'text-[#cab178]'
                              : 'text-white hover:text-[#cab178]'
                          }
                        `}
                        dir="auto"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
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
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('pricing') || document.getElementById('cta');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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
