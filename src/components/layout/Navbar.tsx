import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import { navLinks } from "../../data/navigation";
import type { NavLink } from "../../data/navigation";
import ArabicBg from "../common/ArabicBg";

/**
 * Site-wide Navbar with Framer Motion animations & dynamic active link coloring.
 * - Colors the clicked title in gold (#cab178) with animated indicator.
 * - Automatically tracks active section on scroll via scroll spy.
 * - Navbar is transparent at the top of Home page.
 * - Navbar becomes colored after scrolling.
 * - Animated mobile drawer from the right.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeId, setActiveId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash === "#features") return "features";
    if (hash === "#roles" || hash === "#users") return "roles";
    if (hash === "#institutions") return "institutions";
    if (hash === "#organisations") return "organisations";
    if (hash === "#gallery") return "gallery";
    if (hash === "#testimonials") return "testimonials";

    return "home";
  });

  const [isScrolled, setIsScrolled] = useState(() => {
    return window.scrollY > 10;
  });

  useEffect(() => {
    const handleNavbarScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleNavbarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  const navbarBackground = !isScrolled
    ? "bg-[#1A5A81]/95 md:bg-transparent"
    : "bg-[#1A5A81] shadow-md";

  // Sync active link with hash changes
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash;

      if (hash === "#features") {
        setActiveId("features");
      } else if (hash === "#roles" || hash === "#users") {
        setActiveId("roles");
      } else if (hash === "#institutions") {
        setActiveId("institutions");
      } else if (hash === "#organisations") {
        setActiveId("organisations");
      } else if (hash === "#gallery") {
        setActiveId("gallery");
      } else if (hash === "#testimonials") {
        setActiveId("testimonials");
      } else if (hash === "#home" || !hash) {
        setActiveId("home");
      }
    };

    updateFromHash();

    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  // Scroll Spy: dynamically highlight the title matching the section on screen
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      setIsScrolled(currentScroll > 15);

      // If scrolled close to bottom of page, highlight testimonials
      if (
        window.innerHeight + currentScroll >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveId("testimonials");
        return;
      }

      const offsetThreshold = window.innerWidth < 768 ? 80 : 140;
      const scrollPosition = currentScroll + offsetThreshold;

      const sections = [
        { id: "home", linkId: "home" },
        { id: "features", linkId: "features" },
        { id: "roles", linkId: "roles" },
        { id: "institutions", linkId: "institutions" },
        { id: "organisations", linkId: "organisations" },
        { id: "gallery", linkId: "gallery" },
        { id: "testimonials", linkId: "testimonials" },
      ];

      for (const item of [...sections].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + currentScroll;
          if (scrollPosition >= top) {
            setActiveId(item.linkId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle clicking a navigation link
  const handleNavClick = (link: NavLink, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setActiveId(link.id);
    setMobileMenuOpen(false);

    const targetId = link.href.replace("#", "");
    const el = document.getElementById(targetId);

    if (el) {
      const isMobile = window.innerWidth < 1024;
      const headerHeight = isMobile ? 54 : 76;
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      const targetY =
        el.getBoundingClientRect().top + currentScroll - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });

      window.history.pushState(null, "", link.href);
    }
  };

  // Handle "طلب نسخة" button click -> scrolls directly to the CTA section ("لديكم مدرسة قرآنية؟")
  const handleRequestCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId("offers");
    setMobileMenuOpen(false);

    const el = document.getElementById("offers");
    if (el) {
      const isMobile = window.innerWidth < 1024;
      const headerHeight = isMobile ? 54 : 76;
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      const targetY =
        el.getBoundingClientRect().top + currentScroll - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });

      window.history.pushState(null, "", "#offers");
    }
  };

  // Handle Contact button click ("تواصل معنا")
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId("contact");
    setMobileMenuOpen(false);

    const el = document.getElementById("contact");

    if (el) {
      const isMobile = window.innerWidth < 1024;
      const headerHeight = isMobile ? 54 : 76;
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      const targetY =
        el.getBoundingClientRect().top + currentScroll - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });

      window.history.pushState(null, "", "#contact");
    }
  };

  // Handle Logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    setActiveId("home");
    setMobileMenuOpen(false);

    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#home");
  };

  return (
    <>
      {/* ── Fixed Header Bar across all web pages ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed top-0 left-0 right-0 z-40 w-full
          ${navbarBackground}
          transition-colors duration-300 ease-in-out
          overflow-hidden
        `}
      >
        {/* Subtle Arabic calligraphy watermark pattern matching Figma Desktop - 7 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <ArabicBg
            positionClass="top-[-100px] left-1/2 -translate-x-1/2"
            sizeClass="w-[1440px] h-[300px]"
            opacityClass="opacity-20"
          />
        </div>

        {/* ── Desktop Navigation (lg and up) matching Figma node 196:180 ── */}
        <div
          className="
            hidden lg:flex items-center justify-between
            h-[68px] xl:h-[76px] px-4 lg:px-6 xl:px-10 w-full max-w-[1440px] mx-auto relative z-10
          "
          dir="ltr"
        >
          {/* Left Side Buttons (LTR): تواصل معنا + طلب نسخة matching Figma node 330:994 */}
          <div className="flex items-center gap-2 xl:gap-3.5 shrink-0" dir="ltr" data-node-id="330:994">
            {/* Button 1: تواصل معنا (Figma node 330:995) */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleContactClick}
              className="
                bg-[#e6edf1] hover:bg-[#d8e4eb] text-[#1a5a81]
                font-['Changa:SemiBold'] font-semibold
                text-[13px] xl:text-[15px] leading-none
                h-[32px] xl:h-[36px] px-3 xl:px-[16px] py-1.5 xl:py-[10px]
                rounded-[6px] shadow-sm
                transition-all duration-200
                cursor-pointer whitespace-nowrap
                flex items-center justify-center
              "
              dir="auto"
              data-node-id="330:995"
            >
              تواصل معنا
            </motion.button>

            {/* Button 2: طلب نسخة (Figma node 330:997) -> Scrolls to CTA section */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRequestCopyClick}
              className="
                bg-[#1a5a81] hover:bg-[#154664] text-white
                border border-white/30
                font-['Changa:SemiBold'] font-semibold
                text-[13px] xl:text-[15px] leading-none
                h-[32px] xl:h-[36px] px-3 xl:px-[16px] py-1.5 xl:py-[10px]
                rounded-[6px] shadow-sm
                transition-all duration-200
                cursor-pointer whitespace-nowrap
                flex items-center justify-center
              "
              dir="auto"
              data-node-id="330:997"
            >
              طلب نسخة
            </motion.button>
          </div>

          {/* Right Group: Nav Links + Logo in RTL */}
          <div className="flex items-center gap-2 xl:gap-6 min-w-0" dir="rtl">
            {/* Logo on the far right (first child in RTL) */}
            <motion.a
              href="#home"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              aria-label="الصفحة الرئيسية"
              className="relative shrink-0 h-[48px] xl:h-[56.75px] w-[56px] xl:w-[66px] transition-transform duration-200 cursor-pointer"
            >
              <img
                alt=""
                aria-hidden="true"
                className="absolute h-[48px] xl:h-[56.75px] left-[34px] xl:left-[39.9px] top-0 w-[4.6px] xl:w-[5.448px] max-w-none block"
                src={IMAGES.logoBarTop}
              />
              <img
                alt="شعار حافظ"
                className="absolute h-[35px] xl:h-[41.612px] left-0 top-[7px] xl:top-[8.15px] w-[31px] xl:w-[37.218px] max-w-none block"
                src={IMAGES.logoPartHa}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute h-[30px] xl:h-[35.776px] left-[32px] xl:left-[38.3px] top-[11px] xl:top-[12.89px] w-[20px] xl:w-[23.314px] max-w-none block"
                src={IMAGES.logoPartHin}
              />
              <img
                alt=""
                aria-hidden="true"
                className="absolute h-[16px] xl:h-[19.551px] left-[35px] xl:left-[40.81px] top-[25px] xl:top-[29.03px] w-[22px] xl:w-[25.722px] max-w-none block"
                src={IMAGES.logoBarBottom}
              />
            </motion.a>

            {/* Nav links to the left of the Logo matching requested style */}
            <nav aria-label="التنقل الرئيسي" className="flex items-center gap-0 xl:gap-0.5 2xl:gap-1 min-w-0">
              <ul className="flex items-center list-none m-0 p-0" dir="rtl">
                {navLinks.map((link) => {
                  const isLinkActive = activeId === link.id;

                  return (
                    <li key={link.id} className="relative flex items-center shrink-0">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(link, e)}
                        dir="auto"
                        className={`relative flex flex-col items-center justify-center px-1 xl:px-2.5 2xl:px-3 py-1.5 text-[12px] xl:text-[14px] 2xl:text-[15.5px] transition-colors cursor-pointer group select-none no-underline whitespace-nowrap ${
                          isLinkActive
                            ? "text-[#cab178] font-semibold"
                            : "text-white/90 hover:text-[#cab178] font-medium"
                        }`}
                      >
                        <span>{link.label}</span>
                        {/* Smooth Animated Active indicator dot */}
                        <span className="h-2 flex items-center justify-center mt-1">
                          {isLinkActive ? (
                            <motion.span
                              layoutId="navActiveIndicator"
                              className="w-2 h-2 rounded-full bg-[#cab178]"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 28,
                              }}
                            />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-transparent" />
                          )}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* ── Mobile Navigation Header Bar ── */}
        <div
          className="
            flex lg:hidden
            items-center justify-between
            px-5 py-3
            w-full relative
          "
          dir="rtl"
        >
          {/* Hamburger Menu Toggle */}
          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              flex items-center justify-center
              p-2 rounded-lg text-white
              hover:bg-white/10
              active:scale-95
              transition-colors
              cursor-pointer
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

          {/* Logo for Mobile Header */}
          <motion.a
            href="#home"
            onClick={handleLogoClick}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="الصفحة الرئيسية"
            className="
              relative shrink-0
              h-[36px] w-[42px]
              cursor-pointer
            "
          >
            <img
              alt="شعار حافظ"
              className="
                block size-full
                object-contain
              "
              src={IMAGES.footerLogo}
            />
          </motion.a>
        </div>

      </motion.header>

      {/* ── Mobile Navbar Drawer (Figma node 308:144 - Opens from Right, Height = Device Height) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Drawer from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                mass: 0.8,
              }}
              className="
                fixed top-0 bottom-0 right-0 z-50
                w-[300px] sm:w-[340px] max-w-[85vw]
                h-screen h-[100dvh]
                bg-[#1a5a81]
                border-l border-white/20
                shadow-[-10px_0_40px_rgba(0,0,0,0.5)]
                flex flex-col justify-between
                py-6 px-5 sm:px-6
                overflow-y-auto
                relative
              "
              data-node-id="308:144"
              data-name="Hero"
            >
              {/* Calligraphy Watermarks */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <ArabicBg
                  positionClass="top-10 -right-10"
                  sizeClass="size-[320px]"
                  opacityClass="opacity-15"
                />
                <ArabicBg
                  positionClass="bottom-0 -left-10"
                  sizeClass="size-[320px]"
                  opacityClass="opacity-15"
                />
              </div>

              {/* Top Bar: Logo on Left, Close Button on Right (LTR flex) */}
              <div
                className="flex items-center justify-between w-full relative z-10 shrink-0 pb-3 border-b border-white/10"
                data-node-id="308:145"
                dir="ltr"
              >
                {/* Logo (Figma node 308:146) */}
                <a
                  href="#home"
                  onClick={handleLogoClick}
                  aria-label="الصفحة الرئيسية"
                  className="relative shrink-0 h-[48px] w-[56px] cursor-pointer"
                  data-node-id="308:147"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute h-[48px] left-[33.8px] top-0 w-[4.6px] max-w-none block"
                    src={IMAGES.logoBarTop}
                  />
                  <img
                    alt="شعار حافظ"
                    className="absolute h-[35.2px] left-0 top-[6.9px] w-[31.5px] max-w-none block"
                    src={IMAGES.logoPartHa}
                  />
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute h-[30.3px] left-[32.4px] top-[10.9px] w-[19.7px] max-w-none block"
                    src={IMAGES.logoPartHin}
                  />
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute h-[16.5px] left-[34.6px] top-[24.6px] w-[21.8px] max-w-none block"
                    src={IMAGES.logoBarBottom}
                  />
                </a>

                {/* Close Button (Figma node 308:163) */}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="
                    size-[40px] flex items-center justify-center
                    text-white hover:text-[#cab178]
                    transition-colors cursor-pointer
                  "
                  data-node-id="308:163"
                >
                  <svg
                    className="size-[28px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links (Figma node 308:165) */}
              <div
                className="flex flex-col items-center justify-center w-full my-auto py-5 relative z-10"
                data-node-id="308:165"
                dir="rtl"
              >
                <nav className="w-full flex flex-col gap-3 sm:gap-[18px]" data-node-id="308:166" aria-label="روابط الموبايل">
                  {navLinks.map((link) => {
                    const isLinkActive = activeId === link.id;

                    return (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleNavClick(link, e)}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between no-underline cursor-pointer select-none group py-1"
                      >
                        {/* Title Text (Figma nodes 308:169-174) on the RIGHT in RTL */}
                        <span
                          dir="auto"
                          className={`
                            font-['Almarai:Bold'] font-bold
                            text-[20px] sm:text-[22px] text-right
                            transition-colors duration-200
                            ${
                              isLinkActive
                                ? "text-[#cab178]"
                                : "text-white group-hover:text-[#cab178]"
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        {/* Active Gold Indicator Dot (Figma node 308:168) on the far-LEFT in RTL */}
                        {isLinkActive ? (
                          <div
                            className="bg-[#cab178] rounded-[84px] shrink-0 size-[12px] sm:size-[14px] shadow-[0_0_10px_#cab178]"
                            data-node-id="308:168"
                          />
                        ) : (
                          <div className="size-[12px] sm:size-[14px] shrink-0" />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Action Buttons: طلب نسخة + تواصل معنا */}
              <div
                className="flex flex-col gap-3 w-full pb-2 shrink-0 relative z-10"
                dir="rtl"
              >
                {/* Button 1: طلب نسخة -> Scrolls to CTA section */}
                <motion.button
                  type="button"
                  onClick={handleRequestCopyClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    bg-white hover:bg-slate-50 text-[#1a5a81]
                    w-full py-[12px] sm:py-[14px]
                    flex items-center justify-center
                    font-['Changa:SemiBold'] font-semibold text-[18px] sm:text-[20px] leading-none
                    rounded-[6px] shadow-md
                    transition-all cursor-pointer whitespace-nowrap
                  "
                  dir="auto"
                >
                  طلب نسخة
                </motion.button>

                {/* Button 2: تواصل معنا */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleContactClick}
                  className="
                    bg-[#e6edf1] hover:bg-[#d8e4eb] text-[#1a5a81]
                    w-full py-[12px] sm:py-[14px]
                    flex items-center justify-center
                    font-['Changa:SemiBold'] font-semibold text-[18px] sm:text-[20px] leading-none
                    rounded-[6px] shadow-md
                    transition-all cursor-pointer whitespace-nowrap
                  "
                  dir="auto"
                >
                  تواصل معنا
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
