import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import { navLinks } from "../../data/navigation";
import type { NavLink } from "../../data/navigation";
import ArabicBg from "../common/ArabicBg";
import { useNavigation } from "../../context/NavigationContext";

/**
 * Site-wide Navbar with Framer Motion animations & dynamic active link coloring.
 * - Colors the clicked title in gold (#cab178) with animated indicator.
 * - Automatically tracks active section on scroll via scroll spy.
 * - Navbar is transparent at the top of Home page.
 * - Navbar becomes colored after scrolling.
 * - Animated mobile drawer from the right.
 */
export default function Navbar() {
  const { currentPage, navigateTo } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeId, setActiveId] = useState<string>(() => {
    if (currentPage !== "home") return "home";
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

  // Keep "الرئيسية" active whenever on Terms or Privacy pages
  useEffect(() => {
    if (currentPage !== "home") {
      setActiveId("home");
    }
  }, [currentPage]);

  // Sync active link with hash changes
  useEffect(() => {
    if (currentPage !== "home") {
      setActiveId("home");
      return;
    }

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
  }, [currentPage]);

  // Scroll Spy: dynamically highlight the title matching the section on screen
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      setIsScrolled(currentScroll > 15);

      // When on subpages (Terms & Conditions / Privacy Policy), always keep "الرئيسية" colored
      if (currentPage !== "home") {
        setActiveId("home");
        return;
      }

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
  }, [currentPage]);

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

    if (currentPage !== "home") {
      navigateTo("home", link.href);
      return;
    }

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

  // Handle "طلب نسخة" button click -> navigates to Order page
  const handleRequestCopyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo("order");
  };

  // Handle Contact button click ("تواصل معنا")
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId("contact");
    setMobileMenuOpen(false);

    if (currentPage !== "home") {
      navigateTo("home", "#contact");
      return;
    }

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
    if (e) e.preventDefault();
    setActiveId("home");
    setMobileMenuOpen(false);

    if (currentPage !== "home") {
      navigateTo("home");
      return;
    }

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
              href="/"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="الصفحة الرئيسية"
              className="relative shrink-0 flex items-center justify-center h-[46px] xl:h-[54px] w-auto transition-transform duration-200 cursor-pointer"
            >
              <img
                alt="شعار حافظ"
                className="h-full w-auto max-h-[46px] xl:max-h-[54px] object-contain block drop-shadow-sm select-none"
                src="/hafez-logo.svg"
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
                        className={`relative flex flex-col items-center justify-center px-1 xl:px-2.5 2xl:px-3 py-1.5 text-[12px] xl:text-[14px] 2xl:text-[15.5px] transition-colors cursor-pointer group no-underline whitespace-nowrap ${
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
            href="/"
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

      {/* ── Mobile Navbar Overlay (Opens from Top Right to fill Full Screen) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              clipPath: "circle(24px at calc(100% - 36px) 30px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              clipPath: "circle(160% at calc(100% - 36px) 30px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              clipPath: "circle(24px at calc(100% - 36px) 30px)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "top right" }}
            className="
              fixed inset-0 z-50 lg:hidden
              w-screen w-full h-screen h-[100dvh]
              bg-[#1a5a81]
              flex flex-col justify-between
              py-6 px-6 sm:px-8
              overflow-y-auto
            "
            data-node-id="308:144"
            data-name="MobileMenu"
          >
            {/* Calligraphy Watermarks */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <ArabicBg
                positionClass="top-10 -right-10"
                sizeClass="size-[360px]"
                opacityClass="opacity-15"
              />
              <ArabicBg
                positionClass="bottom-0 -left-10"
                sizeClass="size-[360px]"
                opacityClass="opacity-15"
              />
            </div>

            {/* Top Bar: Close Button on Right, Logo on Left (matching RTL header) */}
            <div
              className="flex items-center justify-between w-full relative z-10 shrink-0 pb-4 border-b border-white/10"
              dir="rtl"
            >
              {/* Close Button on Right */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="إغلاق القائمة"
                className="
                  size-[42px] flex items-center justify-center
                  rounded-lg text-white hover:text-[#cab178] hover:bg-white/10
                  transition-colors cursor-pointer
                "
                data-node-id="308:163"
              >
                <svg
                  className="size-[28px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>

              {/* Logo on Left */}
              <a
                href="/"
                onClick={handleLogoClick}
                aria-label="الصفحة الرئيسية"
                className="relative shrink-0 flex items-center justify-center h-[42px] w-auto cursor-pointer"
                data-node-id="308:147"
              >
                <img
                  alt="شعار حافظ"
                  className="h-full w-auto max-h-[42px] object-contain block select-none"
                  src="/hafez-logo.svg"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div
              className="flex flex-col items-stretch justify-center w-full my-auto py-6 relative z-10"
              data-node-id="308:165"
              dir="rtl"
            >
              <nav className="w-full flex flex-col gap-3 sm:gap-4" data-node-id="308:166" aria-label="روابط الموبايل">
                {navLinks.map((link, idx) => {
                  const isLinkActive = activeId === link.id;

                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(link, e)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + idx * 0.04,
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-between no-underline cursor-pointer group py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {/* Title Text on the RIGHT in RTL */}
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

                      {/* Active Gold Indicator Dot on the LEFT in RTL */}
                      {isLinkActive ? (
                        <div
                          className="bg-[#cab178] rounded-full shrink-0 size-[12px] sm:size-[14px] shadow-[0_0_12px_#cab178]"
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="flex flex-col gap-3 w-full pb-2 shrink-0 relative z-10"
              dir="rtl"
            >
              {/* Button 1: طلب نسخة */}
              <motion.button
                type="button"
                onClick={handleRequestCopyClick}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className="
                  bg-white hover:bg-slate-50 text-[#1a5a81]
                  w-full py-[13px] sm:py-[15px]
                  flex items-center justify-center
                  font-['Changa:Bold'] font-bold text-[18px] sm:text-[20px] leading-none
                  rounded-[10px] shadow-lg
                  transition-all cursor-pointer whitespace-nowrap
                "
                dir="auto"
              >
                طلب نسخة
              </motion.button>

              {/* Button 2: تواصل معنا */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleContactClick}
                className="
                  bg-white/10 hover:bg-white/15 text-white border border-white/20
                  w-full py-[13px] sm:py-[15px]
                  flex items-center justify-center
                  font-['Changa:SemiBold'] font-semibold text-[18px] sm:text-[20px] leading-none
                  rounded-[10px] shadow-sm backdrop-blur-sm
                  transition-all cursor-pointer whitespace-nowrap
                "
                dir="auto"
              >
                تواصل معنا
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
