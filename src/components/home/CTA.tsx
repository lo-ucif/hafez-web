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
            w-[42%] max-w-[500px] h-full
            flex items-end justify-start
            pl-1.5 sm:pl-3 md:pl-5 lg:pl-8
            select-none pointer-events-none
          "
          data-node-id="344:423"
        >
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="w-full max-h-full object-contain object-bottom-left block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
          />
        </div>

        {/* Right Side: Text & Button (node 343:407 & 344:424) */}
        <div
          dir="rtl"
          className="
            relative z-10 flex flex-col items-end text-right
            justify-center shrink-0
            w-[58%] max-w-[620px] h-full
            pr-3 sm:pr-5 md:pr-7 lg:pr-10 xl:pr-14
            gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9
          "
          data-node-id="344:424"
        >
          {/* Headline matching node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              font-['Almarai'] font-bold text-white
              text-[11.5px] sm:text-[15px] md:text-[21px] lg:text-[28px] xl:text-[36px]
              leading-[1.3] lg:leading-[1.35] tracking-tight m-0
            "
            data-node-id="344:425"
          >
            <p className="m-0 mb-0.5 sm:mb-1" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              <span>لا تتردّد واطلب </span>
              <br className="inline sm:hidden" />
              <span>نسختك مجانا الآن!</span>
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
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              px-2.5 sm:px-4 md:px-6 lg:px-9
              py-1 sm:py-1.5 md:py-2.5 lg:py-3.5
              rounded-[4px] sm:rounded-[6px] lg:rounded-[10px]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="344:426"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[9px] sm:text-[11px] md:text-[15px] lg:text-[21px]
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
