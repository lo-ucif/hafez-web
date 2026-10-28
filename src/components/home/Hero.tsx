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
        min-h-screen min-h-[100dvh]
        pt-[60px] sm:pt-[80px] md:pt-[100px] pb-8 sm:pb-12 md:pb-16
      "
      data-node-id="196:178"
      data-name="post"
    >
      {/* Decorative Arabic Calligraphy Watermark matching user screenshot */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[2283px] top-1/2 pointer-events-none z-0"
        data-node-id="196:232"
        data-name="خلفية الحروف العربية2 2"
        aria-hidden="true"
      >
        <motion.img
          animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          alt=""
          className="absolute inset-0 max-w-none object-cover opacity-[0.03] pointer-events-none size-full select-none"
          src={IMAGES.arabicBg}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] md:gap-[36px] my-auto">
        {/* Row: In RTL:
            - 1st item (Logo) renders on the RIGHT on desktop
            - 2nd item (Divider) renders in the MIDDLE on desktop
            - 3rd item (Text) renders on the LEFT on desktop
            On mobile: flex-col with Logo first, then Text, Divider hidden
        */}
        <div
          className="
            flex flex-col lg:flex-row items-center justify-center
            gap-6 sm:gap-8 lg:gap-5 xl:gap-8
            w-full
          "
          data-node-id="196:212"
        >
          {/* Logo Illustration (Right side on desktop in RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative shrink-0
              w-[240px] h-[205px]
              sm:w-[280px] sm:h-[240px]
              md:w-[320px] md:h-[273px]
              lg:w-[370px] lg:h-[315px]
              xl:w-[410px] xl:h-[350px]
              flex items-center justify-center
            "
            data-node-id="196:213"
          >
            <motion.img
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              alt="شعار منصة حافظ"
              src={IMAGES.heroLogo}
              className="w-full h-full object-contain block max-w-none select-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* Middle Vertical Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center shrink-0 h-[175px] xl:h-[200px] px-1"
            data-node-id="330:1329"
            aria-hidden="true"
          >
            <img
              alt=""
              src={IMAGES.heroDivider}
              className="h-full w-auto max-w-none block object-contain select-none"
            />
          </motion.div>

          {/* Text Column: Title + Description (Left side on desktop in RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="
              flex flex-col items-center lg:items-start text-center lg:text-right
              text-white max-w-[560px] xl:max-w-[590px] w-full shrink-0
              gap-3 sm:gap-4 lg:gap-4
            "
            data-node-id="330:1328"
          >
            {/* Title matching user reference image */}
            <h1
              dir="rtl"
              className="
                font-['Almarai'] font-bold not-italic
                text-[42px] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[88px]
                leading-[1.12] text-white m-0 tracking-tight
                w-full text-center lg:text-right
              "
              data-node-id="196:229"
            >
              منصة حافظ
            </h1>

            {/* Description matching user reference image */}
            <div
              dir="rtl"
              className="
                font-['Almarai'] font-normal not-italic
                text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]
                leading-[1.7] sm:leading-[1.75]
                text-white/95 text-center lg:text-right w-full
              "
              data-node-id="330:1331"
            >
              <p className="m-0">
                من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم{" "}
                <br className="hidden sm:inline" />
                ومراجعته أكثر سهولة وتنظيمًا واستمرارية توفر المنصة بيئة{" "}
                <br className="hidden sm:inline" />
                تساعد المستخدمين على تنظيم الحفظ، متابعة التقدم، وتطوير{" "}
                <br className="hidden sm:inline" />
                عادة يومية ثابتة مع كتاب الله.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button matching user reference image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-1 sm:mt-2"
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
              w-[180px] sm:w-[200px] h-[42px] sm:h-[46px]
              rounded-[8px]
              cursor-pointer no-underline
              shadow-[0px_4px_16px_rgba(0,0,0,0.16)]
            "
            data-node-id="330:1341"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[16px] sm:text-[17.5px] text-white whitespace-nowrap
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
