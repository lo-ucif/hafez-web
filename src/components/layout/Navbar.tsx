import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import { navLinks } from "../../data/navigation";
import type { NavLink } from "../../data/navigation";
import ArabicBg from "../common/ArabicBg";

interface NavbarProps {
  activePage?: "home" | "roles";
}

function navigateToHash(hash: string) {
  window.history.pushState(null, "", hash);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

/**
 * Site-wide Navbar with Framer Motion animations & dynamic active link coloring.
 * - Colors the clicked title in gold (#cab178) with animated indicator.
 * - Automatically tracks active section on scroll via scroll spy.
 * - Navbar is transparent at the top of Home page.
 * - Navbar becomes colored after scrolling.
 * - Animated mobile drawer from the right.
 */
export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeId, setActiveId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash === "#features") return "features";
    if (hash === "#roles" || hash === "#users") return "roles";
    if (hash === "#gallery") return "gallery";
    if (hash === "#offers") return "offers";
    if (hash === "#contact") return "contact";

    return "home";
  });

  const [isScrolled, setIsScrolled] = useState(() => {
    return activePage !== "home" || window.scrollY > 10;
  });

  useEffect(() => {
    if (activePage !== "home") return;

    const handleNavbarScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleNavbarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, [activePage]);

  const navbarBackground =
    activePage === "home" && !isScrolled
      ? "bg-[#1A5A81]/95 md:bg-transparent"
      : "bg-[#1A5A81] shadow-md";

  // Sync active link with hash changes and activePage prop
  useEffect(() => {
    if (activePage !== "home") return;

    const updateFromHash = () => {
      const hash = window.location.hash;

      if (hash === "#features") {
        setActiveId("features");
      } else if (hash === "#roles" || hash === "#users") {
        setActiveId("roles");
      } else if (hash === "#gallery") {
        setActiveId("gallery");
      } else if (hash === "#offers") {
        setActiveId("offers");
      } else if (hash === "#contact") {
        setActiveId("contact");
      } else if (hash === "#home" || !hash) {
        setActiveId("home");
      }
    };

    updateFromHash();

    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [activePage]);

  // Scroll Spy: dynamically highlight the title matching the section on screen
  useEffect(() => {
    if (activePage !== "home") return;

    const handleScroll = () => {
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      setIsScrolled(currentScroll > 15);

      // If scrolled close to bottom of page, highlight the last item (contact)
      if (
        window.innerHeight + currentScroll >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveId("contact");
        return;
      }

      const offsetThreshold = window.innerWidth < 768 ? 80 : 140;
      const scrollPosition = currentScroll + offsetThreshold;

      const sections = [
        { id: "home", linkId: "home" },
        { id: "features", linkId: "features" },
        { id: "roles", linkId: "roles" },
        { id: "gallery", linkId: "gallery" },
        { id: "offers", linkId: "offers" },
        { id: "contact", linkId: "contact" },
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
  }, [activePage]);

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

    if (activePage !== "home") {
      navigateToHash(link.href);
    } else {
      const targetId = link.href.replace("#", "");
      const el = document.getElementById(targetId);

      if (el) {
        const isMobile = window.innerWidth < 768;
        const headerHeight = isMobile ? 54 : 84;
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
    }
  };

  // Handle CTA button click ("طلب نسخة")
  const handleCtaClick = () => {
    setActiveId("offers");
    setMobileMenuOpen(false);

    if (activePage !== "home") {
      navigateToHash("#offers");
    } else {
      const el = document.getElementById("offers") || document.getElementById("contact");

      if (el) {
        const isMobile = window.innerWidth < 768;
        const headerHeight = isMobile ? 54 : 84;
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
    }
  };

  // Handle Contact button click ("تواصل معنا")
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId("contact");
    setMobileMenuOpen(false);

    if (activePage !== "home") {
      navigateToHash("#contact");
    } else {
      const el = document.getElementById("contact");

      if (el) {
        const isMobile = window.innerWidth < 768;
        const headerHeight = isMobile ? 54 : 84;
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
    }
  };

  // Handle Logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    setActiveId("home");
    setMobileMenuOpen(false);

    if (activePage !== "home") {
      navigateToHash("#home");
    } else {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#home");
    }
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

        {/* ── Desktop Navigation (md and up) matching Figma node 196:180 ── */}
        <div
          className="
            hidden md:flex items-center justify-between
            h-[76px] px-6 lg:px-8 xl:px-12 w-full max-w-[1440px] mx-auto relative z-10
          "
          dir="ltr"
        >
          {/* Left Side Buttons (LTR): تواصل معنا + طلب نسخة */}
          <div className="flex items-center gap-4 lg:gap-6">
            <motion.a
              href="#contact"
              onClick={handleContactClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
                font-['Changa'] font-semibold
                text-[15px] lg:text-[16px] text-white hover:text-[#cab178]
                px-[14px] lg:px-[20px] py-[8px]
                transition-colors duration-200 cursor-pointer no-underline whitespace-nowrap
              "
              dir="auto"
            >
              تواصل معنا
            </motion.a>

            <motion.button
              type="button"
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 6px 16px rgba(0,0,0,0.18)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={handleCtaClick}
              className="
                bg-white hover:bg-slate-50 text-[#1a5a81]
                font-['Changa'] font-semibold
                text-[15px] lg:text-[16px] leading-none
                px-[20px] lg:px-[23px] py-[10px]
                rounded-[2px] shadow-sm
                transition-all duration-200
                cursor-pointer whitespace-nowrap
              "
              dir="auto"
            >
              طلب نسخة
            </motion.button>
          </div>

          {/* Right Group: Nav Links + Logo in RTL */}
          <div className="flex items-center gap-3 lg:gap-5 xl:gap-8" dir="rtl">
            {/* Logo on the far right (first child in RTL) */}
            <motion.a
              href="#home"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              aria-label="الصفحة الرئيسية"
              className="relative shrink-0 h-[56.75px] w-[66px] transition-transform duration-200 cursor-pointer"
            >
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

            {/* Nav links to the left of the Logo matching requested style */}
            <nav aria-label="التنقل الرئيسي" className="hidden md:flex items-center gap-0.5 lg:gap-1">
              <ul className="flex items-center list-none m-0 p-0" dir="rtl">
                {navLinks.map((link) => {
                  const isLinkActive = activeId === link.id;

                  return (
                    <li key={link.id} className="relative flex items-center">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(link, e)}
                        dir="auto"
                        className={`relative flex flex-col items-center justify-center px-2 lg:px-3 xl:px-3.5 py-2 text-[15px] lg:text-[16px] xl:text-[17px] transition-colors cursor-pointer group select-none no-underline whitespace-nowrap ${
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
            flex md:hidden
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

      {/* ── Mobile Slide-out Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" dir="rtl">
            {/* Backdrop overlay */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute inset-0
                bg-black/60
                backdrop-blur-xs
              "
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
              }}
              className="
                absolute right-0 top-0 bottom-0
                w-[280px] sm:w-[320px]
                max-w-[85vw]
                h-screen h-[100dvh]
                bg-[#1a5a81]
                border-l border-white/20
                shadow-2xl
                flex flex-col
                justify-between
                px-6 py-6
                z-10
                overflow-hidden
              "
            >
              {/* Calligraphy Watermark */}
              <div
                className="
                  absolute inset-0
                  pointer-events-none
                  overflow-hidden
                  opacity-10
                "
              >
                <ArabicBg
                  positionClass="top-10 -right-10"
                  sizeClass="size-[350px]"
                  opacityClass="opacity-10"
                />

                <ArabicBg
                  positionClass="bottom-0 -left-10"
                  sizeClass="size-[350px]"
                  opacityClass="opacity-10"
                />
              </div>

              {/* Drawer Top */}
              <div
                className="
                  flex items-center
                  justify-between
                  w-full relative z-10
                  pb-4
                  border-b border-white/15
                "
              >
                {/* Close button */}
                <motion.button
                  type="button"
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                  className="
                    text-white
                    hover:text-[#cab178]
                    p-2
                    transition-colors
                    cursor-pointer
                    flex items-center
                    justify-center
                    -mr-2
                  "
                >
                  <svg
                    className="size-8"
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

                {/* Drawer Logo */}
                <a
                  href="#home"
                  onClick={handleLogoClick}
                  aria-label="الصفحة الرئيسية"
                  className="
                    relative shrink-0
                    h-[50px] w-[58px]
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
                </a>
              </div>

              {/* Navigation links */}
              <nav
                className="
                  my-auto py-8
                  relative z-10
                "
                aria-label="روابط الموبايل"
              >
                <ul
                  className="
                    flex flex-col gap-6
                    items-end
                    w-full
                    list-none p-0 m-0
                  "
                >
                  {navLinks.map((link, idx) => {
                    const isLinkActive = activeId === link.id;

                    return (
                      <motion.li
                        key={link.id}
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.08 * (idx + 1),
                          duration: 0.25,
                        }}
                        className="
                          w-full
                          text-right
                        "
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(link, e)}
                          className={`
                            py-3 px-2 border-b border-white/10
                            flex items-center justify-between
                            font-['Almarai'] text-[20px]
                            transition-colors duration-200
                            no-underline cursor-pointer select-none
                            ${
                              isLinkActive
                                ? "text-[#cab178] font-bold"
                                : "text-white/90 hover:text-[#cab178] font-medium"
                            }
                          `}
                          dir="auto"
                        >
                          <span>{link.label}</span>
                          {isLinkActive && (
                            <span className="w-2 h-2 rounded-full bg-[#cab178]" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer Bottom: CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.3,
                }}
                className="
                  w-full
                  relative z-10
                  pt-4 pb-2
                  flex justify-center
                "
              >
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={handleCtaClick}
                  className="
                    bg-[#cab178]
                    hover:bg-[#bfa56a]
                    text-white
                    w-full
                    h-[60px]
                    sm:h-[64px]
                    rounded-[12px]
                    flex items-center
                    justify-center
                    font-['Almarai:Bold']
                    font-bold
                    text-[22px]
                    sm:text-[24px]
                    text-center
                    shadow-lg
                    hover:shadow-xl
                    cursor-pointer
                    transition-colors
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
