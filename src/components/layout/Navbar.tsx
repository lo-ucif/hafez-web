import { useState, useEffect } from 'react';
import { IMAGES } from '../../constants/images';
import { navLinks } from '../../data/navigation';
import Button from '../common/Button';
import ArabicBg from '../common/ArabicBg';

/**
 * Site-wide Navbar.
 * Supports both Desktop Mode and Mobile Mode (matching Figma mobile node 173-282).
 * On mobile: displays top bar with hamburger menu and logo, opening a responsive drawer.
 * On desktop: displays full navigation bar with auth buttons, center links, and logo.
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
    <header className="bg-[#1a5a81] sticky top-0 z-50 w-full shadow-md">
      {/* ── Desktop Navigation (md and up) ── */}
      <div
        className="
          hidden md:flex items-center justify-between
          h-[95.667px] px-6 lg:px-12 w-full max-w-[1440px] mx-auto
        "
        dir="ltr"
      >
        {/* Auth buttons (left side in LTR) */}
        <div className="flex items-center gap-3">
          <Button variant="primary" size="md">
            تسجيل الدخول
          </Button>
          <button
            type="button"
            className="
              bg-white text-[#1a5a81] cursor-pointer
              font-['Almarai:Bold'] font-bold
              text-[16px] leading-none
              px-5 py-2.5 rounded-[4px]
              transition-all duration-200
              hover:bg-gray-100 active:scale-95
            "
          >
            إنشاء حساب
          </button>
        </div>

        {/* Center: nav links */}
        <nav aria-label="التنقل الرئيسي">
          <ul className="flex gap-6 lg:gap-8 items-center list-none m-0 p-0" dir="rtl">
            {navLinks.map((link) => (
              <li key={link.id} className="relative flex flex-col items-center gap-[5px]">
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
                  <span className="h-0 w-[30.27px] relative block">
                    <img
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-[-2.16px_0_0_0] block max-w-none size-full"
                      src={IMAGES.navUnderline}
                    />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo (right side in LTR) */}
        <a
          href="#home"
          aria-label="الصفحة الرئيسية"
          className="relative shrink-0 h-[56.75px] w-[66px] transition-transform duration-200 hover:scale-105"
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
        </a>
      </div>

      {/* ── Mobile Navigation Header Bar (Figma Mobile Mode: node 180:1144) ── */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 w-full">
        {/* Hamburger Menu Toggle (Figma node 180:1146) */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="
            flex items-center justify-center p-2 rounded-lg text-white
            hover:bg-white/10 active:scale-95 transition-all
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
        </button>

        {/* Small Logo for Mobile Header (Figma node 180:1164) */}
        <a href="#home" aria-label="الصفحة الرئيسية" className="relative shrink-0 h-[28px] w-[33px]">
          <img
            alt="شعار حافظ"
            className="block size-full object-contain"
            src={IMAGES.footerLogo}
          />
        </a>
      </div>

      {/* ── Mobile Slide-out Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex" dir="rtl">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content panel */}
          <div
            className="
              relative mr-auto w-[85%] max-w-[320px] bg-[#1a5a81] h-full shadow-2xl
              flex flex-col justify-between p-6 z-10 overflow-y-auto
              border-l border-white/10
            "
          >
            {/* Drawer top: Logo + Close button */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <img
                    alt="شعار حافظ"
                    className="h-8 w-auto object-contain"
                    src={IMAGES.footerLogo}
                  />
                  <span className="font-['Almarai:Bold'] text-white text-lg">منصة حافظ</span>
                </div>
                <button
                  type="button"
                  aria-label="إغلاق القائمة"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6" aria-label="روابط الموبايل">
                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          block py-2 px-3 rounded-md font-['Almarai:Regular'] text-lg transition-colors
                          ${link.isActive ? 'text-[#cab178] font-bold bg-white/5' : 'text-white hover:text-[#cab178] hover:bg-white/5'}
                        `}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Drawer bottom: CTA buttons */}
            <div className="pt-6 border-t border-white/15 flex flex-col gap-3">
              <Button
                variant="gold"
                size="md"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              >
                طلب نسخة
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تسجيل الدخول
                </Button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    flex-1 bg-white text-[#1a5a81] cursor-pointer
                    font-['Almarai:Bold'] font-bold
                    text-[15px] py-2 px-3 rounded-[4px]
                    text-center transition-colors hover:bg-gray-100
                  "
                >
                  إنشاء حساب
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
