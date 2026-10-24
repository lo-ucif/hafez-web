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
      className="bg-white relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center"
      data-node-id="343:378"
    >
      {/* Outer Banner Container matching Figma node 343:402 (Desktop) and 344:419 (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        dir="ltr"
        className="
          relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[680px] lg:max-w-[1240px]
          h-[197px] sm:h-[258px] md:h-[380px] lg:h-[478px]
          flex flex-row items-center justify-between
          overflow-visible select-none
        "
        data-node-id="343:402"
        data-name="post"
      >
        {/* Background Shape on Desktop (node 343:403) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0" data-node-id="343:403">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShape}
          />
        </div>

        {/* Background Shape on Mobile & Tablet (node 344:420) */}
        <div className="block lg:hidden absolute inset-0 pointer-events-none z-0" data-node-id="344:420">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShapeMobile}
          />
        </div>

        {/* Left Side: Boy reading Quran illustration (node 343:406 & 344:423) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: -15 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="
            relative z-10 shrink-0
            w-[230px] sm:w-[260px] md:w-[360px] lg:w-[520px] xl:w-[600px]
            h-[190px] sm:h-[250px] md:h-[370px] lg:h-[476px]
            flex items-end justify-start
            pl-1 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8
            select-none pointer-events-none
          "
          data-node-id="344:423"
        >
          <img
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="w-full h-full object-contain object-bottom-left block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
          />
        </motion.div>

        {/* Right Side: Text & Button (node 343:407 & 344:424) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          dir="rtl"
          className="
            relative z-10 flex flex-col items-end text-right
            justify-center shrink-0
            w-[145px] sm:w-[190px] md:w-[280px] lg:max-w-[560px] lg:w-auto
            pr-3 sm:pr-5 md:pr-8 lg:pr-12 xl:pr-16
            gap-[14px] sm:gap-[20px] md:gap-[30px] lg:gap-[45px]
          "
          data-node-id="344:424"
        >
          {/* Headline matching node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              font-['Almarai'] font-bold text-white
              text-[12.5px] sm:text-[17px] md:text-[25px] lg:text-[38px] xl:text-[40px]
              leading-[1.3] lg:leading-[1.35] tracking-tight m-0
            "
            data-node-id="344:425"
          >
            <p className="m-0 mb-0.5 sm:mb-1 lg:mb-2" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              <span className="lg:inline">لا تتردّد واطلب </span>
              <br className="inline lg:hidden" />
              <span className="lg:inline">نسختك مجانا الآن!</span>
            </p>
          </div>

          {/* CTA Button matching node 344:426 (Mobile) and 343:409 (Desktop) */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 20px rgba(202, 177, 120, 0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-[#cab178] hover:bg-[#bfa56a]
              transition-colors duration-200
              flex items-center justify-center
              w-[78px] sm:w-[105px] md:w-[150px] lg:w-[238px]
              h-[22px] sm:h-[30px] md:h-[40px] lg:h-[54px]
              rounded-[4px] sm:rounded-[6px] lg:rounded-[10px]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="344:426"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[9px] sm:text-[12px] md:text-[16px] lg:text-[24px]
                text-white whitespace-nowrap
              "
              dir="auto"
              data-node-id="344:428"
            >
              طلب نسخة
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
