import { motion } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import { socialLinks, footerQuickLinks } from '../../data/navigation';

/**
 * Site-wide Footer.
 * Corresponds to Figma desktop node 196:572 ("Footer / 1 /").
 * Features 3-column layout: Quick Links, Social Links with icons, and the large Hafiz Logo.
 * Uses Tajawal and Almarai typography.
 * Enhanced with Framer Motion interactive hover and scroll entrance animations.
 */
export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        bg-[#15455e] relative w-full overflow-clip
        flex flex-col items-center
        pb-8 md:pb-[60px] pt-12 md:pt-[60px] px-6 md:px-[40px]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-10 md:gap-[40px] items-center justify-center max-w-[1280px] w-full relative z-10"
      >
        {/* ── 3 Main Columns matching Figma node 201:1376 ── */}
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[40px] items-start md:items-center justify-between w-full">
          {/* Column 1: Quick Links matching Figma node 201:1395 */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full min-w-[240px] max-w-[300px]">
            <h4
              className="font-['Tajawal:Bold'] text-[18px] md:text-[20px] text-white leading-[1.5] w-full m-0 text-right"
              dir="auto"
            >
              روابط سريعة
            </h4>
            <nav aria-label="روابط سريعة" className="w-full">
              <ul className="flex flex-col items-start w-full list-none m-0 p-0">
                {footerQuickLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <motion.a
                      href={link.href}
                      dir="auto"
                      whileHover={{ x: -6, color: '#cab178' }}
                      transition={{ duration: 0.2 }}
                      className="
                        block py-2 w-full text-right no-underline
                        font-['Tajawal:Regular'] text-[15px] md:text-[16px] text-white/90
                        transition-colors
                      "
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2: Social Links matching Figma node 201:1377 */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full min-w-[240px] max-w-[300px]">
            <h4
              className="font-['Tajawal:Bold'] text-[18px] md:text-[20px] text-white leading-[1.5] w-full m-0 text-right"
              dir="auto"
            >
              تابعنا
            </h4>
            <nav aria-label="روابط التواصل الاجتماعي" className="w-full">
              <ul className="flex flex-col items-end w-full list-none m-0 p-0">
                {socialLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: -6, color: '#cab178' }}
                      transition={{ duration: 0.2 }}
                      className="
                        flex gap-3 items-center justify-start py-2 w-full no-underline
                        text-white/90 transition-colors
                      "
                      aria-label={link.label}
                    >
                      <img
                        src={link.icon}
                        alt=""
                        aria-hidden="true"
                        className="size-[22px] md:size-[24px] shrink-0"
                      />
                      <span
                        className="font-['Tajawal:Regular'] text-[15px] md:text-[16px] leading-[1.5] whitespace-nowrap"
                        dir="auto"
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Big Hafiz Logo matching Figma node 201:1414 */}
          <div className="flex flex-1 items-center justify-center md:justify-end w-full min-w-[240px] max-w-[320px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="h-[180px] md:h-[235px] w-[220px] md:w-[276px] relative shrink-0 cursor-pointer"
            >
              <img
                alt="شعار حافظ"
                className="absolute block inset-0 max-w-none size-full object-contain"
                src={IMAGES.heroLogo}
              />
            </motion.div>
          </div>
        </div>

        {/* ── Credits / Copyright divider row matching Figma node 196:666 ── */}
        <div className="flex flex-col gap-6 items-start w-full">
          {/* Divider */}
          <div className="h-0 w-full relative shrink-0 border-t border-white/20" />

          {/* Copyright row */}
          <div
            dir="auto"
            className="
              flex flex-col sm:flex-row gap-3 items-center justify-between
              text-white text-center sm:text-right w-full leading-normal
            "
          >
            <p className="font-['Tajawal:Bold'] text-[15px] sm:text-[17px] m-0" dir="auto">
              من إنجاز منصة حافظ
            </p>
            <p className="font-['Tajawal:Regular'] text-[14px] sm:text-[16px] text-white/80 m-0" dir="auto">
              © 2026 منصة حافظ. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

