import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟"
 * Matches Figma node 343:378 (Desktop) & node 344:419 (Mobile).
 */
export default function CTA() {
  return (
    <section
      id="offers"
      aria-label="العروض - طلب نسخة"
      className="bg-white relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
      data-node-id="343:378"
    >
      {/* Outer Banner Container: Portrait on mobile (node 344:419), Landscape on desktop (node 343:402) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        dir="ltr"
        className="
          relative
          w-[300px] max-w-[92vw] h-[450px]
          sm:w-full sm:max-w-[1240px]
          sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-[478px]
          flex flex-col sm:flex-row
          items-center justify-start sm:justify-between
          overflow-hidden select-none
          rounded-[22px] sm:rounded-[24px] md:rounded-[30px] lg:rounded-[36px]
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

        {/* Boy reading Quran illustration (node 343:406 & 344:423) */}
        <div
          className="
            relative z-10 shrink-0
            w-full sm:w-[44%] md:w-[42%] max-w-[480px]
            h-[195px] sm:h-full
            flex items-end justify-center sm:justify-start
            pt-4 sm:pt-0
            sm:pl-3 md:pl-6 lg:pl-8
            select-none pointer-events-none
          "
          data-node-id="344:423"
        >
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="
              h-[90%] sm:h-full
              w-auto max-w-full
              object-contain object-bottom sm:object-bottom-left
              block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]
            "
          />
        </div>

        {/* Text & Button: Centered on mobile (node 344:424), Right-aligned on desktop (node 343:407) */}
        <div
          dir="rtl"
          className="
            relative z-10 flex flex-col shrink-0 sm:shrink
            items-center sm:items-start
            text-center sm:text-right
            justify-center
            w-full sm:flex-1 h-auto sm:h-full
            px-4 sm:px-0
            sm:pr-6 md:pr-10 lg:pr-14 xl:pr-16
            sm:pl-2 md:pl-4
            gap-4 sm:gap-4 md:gap-6 lg:gap-8
            mt-1 sm:mt-0
          "
          data-node-id="344:424"
        >
          {/* Headline matching node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              w-full text-center sm:text-right font-['Almarai'] font-bold text-white
              text-[21px] xs:text-[23px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[48px]
              leading-[1.35] lg:leading-[1.4] tracking-tight m-0
            "
            data-node-id="344:425"
          >
            <p className="m-0 mb-1 sm:mb-2 md:mb-3" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              <span>لا تتردّد واطلب </span>
              <br className="block sm:hidden" />
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
              self-center sm:self-start
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              px-7 sm:px-6 md:px-8 lg:px-10
              py-2.5 sm:py-2 md:py-3 lg:py-3.5
              rounded-[6px] sm:rounded-[8px] lg:rounded-[12px]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="344:426"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px]
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
