import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟"
 * Matches Figma node 343:378.
 */
export default function CTA() {
  return (
    <section
      id="offers"
      aria-label="العروض - طلب نسخة"
      className="bg-white relative w-full overflow-hidden py-12 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
      data-node-id="343:378"
    >
      {/* Outer Banner Container matching Figma node 343:402 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        dir="ltr"
        className="
          relative w-full max-w-[1240px] min-h-[380px] md:min-h-[460px] lg:h-[478px]
          flex flex-col lg:flex-row items-center justify-between
          overflow-visible
        "
        data-node-id="343:402"
        data-name="post"
      >
        {/* Background Shape on Desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0" data-node-id="343:403">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShape}
          />
        </div>

        {/* Fallback solid background on Mobile/Tablet */}
        <div className="block lg:hidden absolute inset-0 bg-[#1A5A81] rounded-[24px] pointer-events-none z-0 overflow-hidden">
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#cab178] rounded-full opacity-30 blur-2xl" />
        </div>

        {/* Left Side: Boy reading Quran illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="
            relative z-10 shrink-0
            w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[513px]
            h-[260px] sm:h-[340px] md:h-[400px] lg:h-[476px]
            flex items-end justify-center lg:justify-start
            lg:pl-4 xl:pl-6
            select-none pointer-events-none
          "
          data-node-id="343:406"
        >
          <img
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="w-full h-full object-contain block drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        {/* Right Side: Text & Button */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          dir="rtl"
          className="
            relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right
            justify-center w-full lg:max-w-[560px]
            py-8 px-6 sm:px-10 lg:py-0 lg:px-0 lg:pr-12 xl:pr-16
            gap-6 sm:gap-8 lg:gap-[45px]
          "
          data-node-id="343:407"
        >
          {/* Headline */}
          <div
            className="font-['Almarai'] font-bold text-white text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] lg:leading-[1.35] tracking-tight m-0"
            data-node-id="343:408"
          >
            <p className="m-0 mb-1 lg:mb-2" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              لا تتردّد واطلب نسختك مجانا الآن!
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(202, 177, 120, 0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              w-[200px] sm:w-[238px] h-[48px] sm:h-[54px]
              rounded-[10px]
              cursor-pointer no-underline
              shadow-[0px_4px_16px_rgba(0,0,0,0.16)]
            "
            data-node-id="343:409"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[18px] sm:text-[22px] lg:text-[24px] text-white whitespace-nowrap
              "
              dir="auto"
              data-node-id="343:411"
            >
              طلب نسخة
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
