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
      className="bg-white relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
      data-node-id="343:378"
    >
      {/* Outer Banner Container matching Figma node 343:402 (Desktop) and 344:419 (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        dir="ltr"
        className="
          relative w-full max-w-[1240px]
          h-[190px] sm:h-[240px] md:h-[320px] lg:h-[400px] xl:h-[478px]
          flex flex-row items-center justify-between
          overflow-hidden select-none
          rounded-[16px] sm:rounded-[22px] md:rounded-[28px] lg:rounded-[36px]
          shadow-[0_8px_30px_rgba(26,90,129,0.12)]
        "
        data-node-id="343:402"
        data-name="post"
      >
        {/* Background Shape on Desktop & Tablet (node 343:403) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-0" data-node-id="343:403">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShape}
          />
        </div>

        {/* Background Shape on Mobile (node 344:420) */}
        <div className="block sm:hidden absolute inset-0 pointer-events-none z-0" data-node-id="344:420">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShapeMobile}
          />
        </div>

        {/* Left Side: Boy reading Quran illustration (node 343:406 & 344:423) */}
        <div
          className="
            relative z-10 shrink-0
            w-[42%] sm:w-[42%] md:w-[44%] max-w-[500px] h-full
            flex items-end justify-start
            select-none pointer-events-none
            overflow-hidden
          "
          data-node-id="344:423"
        >
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="
              h-[92%] sm:h-[94%] md:h-[96%]
              w-auto max-w-none
              object-contain object-bottom-left
              block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]
              -translate-x-[16%] sm:-translate-x-[8%] md:translate-x-0
            "
          />
        </div>

        {/* Right Side: Text & Button (node 343:407 & 344:424) */}
        <div
          dir="rtl"
          className="
            relative z-10 flex flex-col items-start text-right
            justify-center flex-1 h-full
            pr-3 sm:pr-6 md:pr-10 lg:pr-14 xl:pr-16
            pl-2 sm:pl-4
            gap-2.5 sm:gap-4 md:gap-6 lg:gap-8
          "
          data-node-id="344:424"
        >
          {/* Headline matching node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              w-full text-right font-['Almarai'] font-bold text-white
              text-[13px] xs:text-[15px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px]
              leading-[1.3] md:leading-[1.35] tracking-tight m-0
            "
            data-node-id="344:425"
          >
            <p className="m-0 mb-1 sm:mb-2 md:mb-2.5" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              لا تتردّد واطلب نسختك مجانا الآن!
            </p>
          </div>

          {/* CTA Button matching node 344:426 (Mobile) and 343:409 (Desktop) */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 6px 20px rgba(202, 177, 120, 0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              self-start
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              px-3.5 sm:px-5 md:px-8 lg:px-10
              py-1.5 sm:py-2 md:py-3 lg:py-3.5
              rounded-[5px] sm:rounded-[8px] lg:rounded-[12px]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="344:426"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[10px] sm:text-[13px] md:text-[17px] lg:text-[22px]
                text-white whitespace-nowrap
              "
              dir="auto"
              data-node-id="344:428"
            >
              طلب نسخة
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
