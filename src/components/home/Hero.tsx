import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * Hero section strictly matching Figma node 196:178 ("post").
 *
 * Features:
 * - Dark blue brand background (#1a5a81)
 * - Centered Arabic calligraphy watermark background (2283px)
 * - Right column: Title "منصة حافظ" (96px Almarai) + detailed Arabic description (24px)
 * - Middle: Exact vertical divider (hero-divider.svg, ~200px height)
 * - Left column: Stylized "حافظ" calligraphy logo with golden quill & open Quran (385.7px × 329px)
 * - Below: Golden CTA button "طلب نسخة" (217px × 49px, rounded-9px, #cab178)
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="الرئيسية"
      className="
        bg-[#1a5a81] relative w-full overflow-hidden
        flex flex-col items-center justify-center
        min-h-[580px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px]
        pt-[90px] sm:pt-[110px] md:pt-[125px] pb-[60px] sm:pb-[70px] md:pb-[80px]
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
          className="absolute inset-0 max-w-none object-cover opacity-[0.035] pointer-events-none size-full select-none"
          src={IMAGES.arabicBg}
        />
      </div>

      {/* Main Content Container matching Figma layout */}
      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] md:gap-[32px]">
        {/* Row matching Figma node 196:212 */}
        <div
          className="
            flex flex-col lg:flex-row items-center justify-center
            gap-6 sm:gap-8 lg:gap-[24px] xl:gap-[32px]
            w-full
          "
          data-node-id="196:212"
        >
          {/* Right Column: Title + Description matching Figma node 330:1328 */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="
              flex flex-col items-center lg:items-start text-center lg:text-right
              text-white max-w-[698px] w-full shrink-0
              gap-4 sm:gap-5 lg:gap-[20px]
            "
            data-node-id="330:1328"
          >
            {/* Title matching Figma node 196:229 */}
            <h1
              dir="auto"
              className="
                font-['Almarai'] font-bold lg:font-normal not-italic
                text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] xl:text-[96px]
                leading-[1.1] text-white m-0 tracking-tight
              "
              data-node-id="196:229"
            >
              منصة حافظ
            </h1>

            {/* Description matching Figma node 330:1331 */}
            <div
              dir="auto"
              className="
                font-['Almarai'] font-normal not-italic
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]
                leading-[1.65] sm:leading-[1.7] lg:leading-[1.5]
                text-white/95 whitespace-pre-wrap
              "
              data-node-id="330:1331"
            >
              <p className="m-0">
                من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم ومراجعته{" "}
                أكثر سهولة وتنظيمًا واستمرارية توفر المنصة بيئة تساعد المستخدمين{" "}
                على تنظيم الحفظ، متابعة التقدم، وتطوير عادة يومية ثابتة مع كتاب الله.
              </p>
            </div>
          </motion.div>

          {/* Middle Vertical Divider matching Figma node 330:1329 */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.5 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center shrink-0 h-[170px] xl:h-[198.6px] px-1"
            data-node-id="330:1329"
            aria-hidden="true"
          >
            <img
              alt=""
              src={IMAGES.heroDivider}
              className="h-full w-auto max-w-none block object-contain select-none"
            />
          </motion.div>

          {/* Left Column: Logo Illustration matching Figma node 196:213 */}
          <motion.div
            initial={{ opacity: 0, x: -25, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative shrink-0
              w-[240px] h-[205px]
              sm:w-[290px] sm:h-[247px]
              md:w-[330px] md:h-[281px]
              lg:w-[385.71px] lg:h-[329px]
              flex items-center justify-center
            "
            data-node-id="196:213"
          >
            <img
              alt="شعار منصة حافظ"
              src={IMAGES.heroLogo}
              className="w-full h-full object-contain block max-w-none select-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            />
          </motion.div>
        </div>

        {/* CTA Button matching Figma node 330:1340 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-2 sm:mt-3"
          data-node-id="330:1340"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 8px 24px rgba(202, 177, 120, 0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              w-[190px] sm:w-[216.9px] h-[44px] sm:h-[48.7px]
              rounded-[9.13px]
              cursor-pointer no-underline
              shadow-[0px_4px_16px_rgba(0,0,0,0.16)]
            "
            data-node-id="330:1341"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[16px] sm:text-[18.27px] text-white whitespace-nowrap
              "
              dir="auto"
              data-node-id="330:1342"
            >
              طلب نسخة
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
