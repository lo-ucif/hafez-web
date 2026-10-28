import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟"
 * Exactly matches Figma node 343:378 / 343:402 (PC) and node 344:419 (Mobile).
 */
export default function CTA() {
  return (
    <section
      id="offers"
      aria-label="العروض - طلب نسخة"
      className="bg-white relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
      data-node-id="343:378"
    >
      {/* Outer Banner Container:
          - PC: Landscape 1196px x 478px (Figma node 343:402)
          - Mobile: Portrait 295px x 444px (Figma node 344:419)
      */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        dir="ltr"
        className="
          relative
          w-[295px] max-w-[92vw] h-[444px]
          sm:w-full sm:max-w-[1196px]
          sm:h-[340px] md:h-[400px] lg:h-[478px]
          flex flex-col sm:flex-row
          items-center justify-start sm:justify-between
          overflow-hidden select-none
          rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]
          shadow-[0_8px_30px_rgba(26,90,129,0.12)]
        "
        data-node-id="343:402"
        data-name="post"
      >
        {/* Background Shape on Desktop & Tablet (Figma node 343:403) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-0" data-node-id="343:403">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShape}
          />
        </div>

        {/* Background Shape on Mobile (Figma node 344:420) */}
        <div className="block sm:hidden absolute inset-0 pointer-events-none z-0" data-node-id="344:420">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShapeMobile}
          />
        </div>

        {/* Left / Top Side: Boy reading Quran illustration (Figma node 343:406 & 344:423) */}
        <div
          className="
            relative z-10 shrink-0
            w-[178px] h-[198px]
            sm:w-[320px] md:w-[370px] lg:w-[580px] sm:h-full
            flex items-end justify-center sm:justify-start
            pt-3 sm:pt-0
            sm:pl-4 md:pl-6 lg:pl-10
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
              h-[90%] sm:h-[92%]
              w-auto max-w-full
              object-contain object-bottom sm:object-bottom-left
              block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]
            "
          />
        </div>

        {/* Right / Bottom Side: Text & Button (Figma node 343:407 & 344:424) */}
        <div
          dir="rtl"
          className="
            relative z-10 flex flex-col shrink-0
            items-center sm:items-start
            text-center sm:text-right
            justify-center
            w-[236px] sm:w-[420px] md:w-[480px] lg:w-[552px] h-auto sm:h-full
            px-2 sm:px-0
            sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16
            gap-[24px] sm:gap-[30px] md:gap-[38px] lg:gap-[50px]
            mt-2 sm:mt-0
          "
          data-node-id="343:407"
        >
          {/* Headline matching Figma node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              w-full font-['Almarai'] font-bold text-white
              text-[22px] xs:text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px]
              leading-[32px] sm:leading-[1.3] lg:leading-[65px]
              tracking-tight m-0
            "
            data-node-id="343:408"
          >
            <p className="m-0 mb-0.5 sm:mb-1 lg:mb-2" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              {/* Mobile (node 344:425): "لا تتردّد واطلب" on line 2, "نسختك مجانا الآن!" on line 3 */}
              <span className="block sm:hidden">
                لا تتردّد واطلب
                <br />
                نسختك مجانا الآن!
              </span>
              {/* PC / Desktop (node 343:408): "لا تتردّد واطلب نسختك" on line 2, "مجانا الآن!" on line 3 */}
              <span className="hidden sm:inline">
                لا تتردّد واطلب نسختك
                <br />
                مجانا الآن!
              </span>
            </p>
          </div>

          {/* CTA Button matching Figma node 344:426 (Mobile) and 343:409 (Desktop) */}
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
              w-[143px] sm:w-[190px] md:w-[215px] lg:w-[239px]
              h-[32px] sm:h-[44px] md:h-[48px] lg:h-[54px]
              rounded-[6px] sm:rounded-[8px] lg:rounded-[10px]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="343:409"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[14px] sm:text-[18px] md:text-[21px] lg:text-[24px]
                text-white whitespace-nowrap
              "
              dir="auto"
              data-node-id="343:411"
            >
              طلب نسخة
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
