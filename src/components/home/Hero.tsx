import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * Hero section strictly matching Figma node 196:178 ("post").
 * Features:
 * - Clean dark blue background (#1a5a81)
 * - Single centered Arabic calligraphy watermark (2283px)
 * - Hero logo (429px × 366px) with smooth entrance
 * - Headline: "منصة ذكية لإدارة حلقات القرآن" (48px Almarai)
 * - Golden CTA button: "طلب نسخة" (285px × 64px, rounded-12px)
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="الرئيسية"
      className="
        bg-[#1a5a81] relative w-full overflow-hidden
        flex flex-col items-center justify-center
        min-h-[600px] md:min-h-[800px] lg:min-h-[860px]
        pt-[90px] sm:pt-[110px] md:pt-[120px] pb-[50px] sm:pb-[70px] md:pb-[80px]
      "
      data-node-id="196:178"
      data-name="post"
    >
      {/* Decorative Arabic Calligraphy Watermark matching Figma node 196:232 */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[2283px] top-1/2 pointer-events-none z-0"
        data-node-id="196:232"
        data-name="خلفية الحروف العربية2 2"
        aria-hidden="true"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover opacity-[0.045] pointer-events-none size-full"
          src={IMAGES.arabicBg}
        />
      </div>

      {/* Main Content Column matching Figma node 196:212 */}
      <div
        className="flex flex-col gap-6 sm:gap-[30px] md:gap-[33px] items-center relative z-10 w-full max-w-[615px] px-4"
        data-node-id="196:212"
      >
        {/* Hafez Platform Logo matching Figma node 196:213 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-[220px] w-[258px] sm:h-[280px] sm:w-[328px] md:h-[365.98px] md:w-[429.06px] relative shrink-0"
          data-node-id="196:213"
        >
          <img
            alt="شعار منصة حافظ"
            className="absolute block inset-0 max-w-none size-full object-contain"
            src={IMAGES.heroLogo}
          />
        </motion.div>

        {/* Headline matching Figma node 196:229 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          dir="auto"
          className="
            font-['Almarai:Regular'] font-normal not-italic
            text-[28px] sm:text-[36px] md:text-[48px]
            text-center text-white leading-[1.3] md:leading-[normal]
            whitespace-pre-wrap m-0
          "
          data-node-id="196:229"
        >
          <span className="block">منصة ذكية لإدارة حلقات</span>
          <span className="block">القرآن</span>
        </motion.h1>

        {/* CTA Button matching Figma node 279:423 */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 8px 24px rgba(202, 177, 120, 0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-[#cab178] hover:bg-[#bfa56a]
            transition-all duration-200
            flex items-center justify-center
            w-[240px] sm:w-[285px] h-[54px] sm:h-[64px]
            rounded-[12px]
            cursor-pointer no-underline
            shadow-[0px_4px_16px_rgba(0,0,0,0.12)]
          "
          data-node-id="279:423"
        >
          <span
            className="
              font-['Almarai:Bold'] font-bold leading-normal not-italic
              text-[20px] sm:text-[24px] text-white whitespace-nowrap
            "
            dir="auto"
            data-node-id="279:425"
          >
            طلب نسخة
          </span>
        </motion.a>
      </div>
    </section>
  );
}
