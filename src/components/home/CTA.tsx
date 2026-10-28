import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟"
 * Exactly matches Figma node 343:378 / 343:402 (PC) and node 344:419 (Mobile).
 * Fully dynamic and fluid across all responsive screen sizes.
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
          - PC: Fluid landscape with aspect-[1196/478] up to 1196px x 478px
          - Mobile: Fixed portrait 295px x 444px (Figma node 344:419)
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
          sm:aspect-[1196/478] sm:h-auto sm:min-h-[260px] sm:max-h-[478px]
          flex flex-col sm:flex-row
          items-center justify-start sm:justify-between
          overflow-hidden select-none
          rounded-[24px] sm:rounded-[clamp(24px,2.6vw,36px)]
          shadow-[0_8px_30px_rgba(26,90,129,0.12)]
        "
        data-node-id="343:402"
        data-name="post"
      >
        {/* Background Shape on Desktop & Tablet (Figma node 343:403) */}
        <div
          className="hidden sm:block absolute inset-0 pointer-events-none z-0"
          data-node-id="343:403"
        >
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShape}
          />
        </div>

        {/* Background Shape on Mobile (Figma node 344:420) */}
        <div
          className="block sm:hidden absolute inset-0 pointer-events-none z-0"
          data-node-id="344:420"
        >
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.ctaBgShapeMobile}
          />
        </div>

        {/* Left / Top Side: Boy reading Quran illustration
            - Mobile: Exact node 344:423
            - Desktop: Dynamic fluid scaling (w-[35%] of card) at all responsive sizes
        */}
        <div
          className="
            relative z-10 shrink-0
            w-[178px] h-[198px]
            sm:w-[60%] sm:max-w-[580px] sm:h-full
            flex items-end justify-center sm:justify-start
            pt-3 sm:pt-0
            sm:pl-[clamp(12px,2.5vw,40px)]
            select-none pointer-events-none
          "
          data-node-id="344:423"
        >
          <img
            alt="طالب يقرأ القرآن الكريم"
            src={IMAGES.ctaBoyQuran}
            className="
              h-[90%] sm:h-full
              w-auto sm:w-full max-w-full
              object-contain object-bottom sm:object-bottom-left
              block drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)]
            "
          />
        </div>

        {/* Right / Bottom Side: Text & Button */}
        <div
          dir="rtl"
          className="
            relative z-10 flex flex-col shrink-0 sm:shrink min-w-0
            items-center sm:items-start
            text-center sm:text-right
            justify-center
            w-[236px] sm:w-auto sm:flex-1 h-auto sm:h-full
            px-2 sm:px-0
            sm:pr-[clamp(16px,4vw,64px)]
            gap-[24px] sm:gap-[clamp(16px,3.5vw,50px)]
            mt-2 sm:mt-0
          "
          data-node-id="343:407"
        >
          {/* Headline matching Figma node 344:425 (Mobile) and 343:408 (Desktop) */}
          <div
            className="
              w-full font-['Almarai'] font-bold text-white
              text-[22px] xs:text-[24px] sm:text-[clamp(17px,2.8vw,48px)]
              leading-[32px] sm:leading-[1.35]
              tracking-tight m-0
            "
            data-node-id="343:408"
          >
            <p className="m-0 mb-0.5 sm:mb-[clamp(2px,0.6vw,8px)]" dir="auto">
              لديكم مدرسة قرآنية؟
            </p>
            <p className="m-0 text-white" dir="auto">
              {/* Mobile (node 344:425): Unchanged */}
              <span className="block sm:hidden">
                لا تتردّد واطلب
                <br />
                نسختك مجانا الآن!
              </span>
              {/* PC / Desktop (node 343:408): "لا تتردّد واطلب نسختك مجانا" on line 2, "الآن!" on line 3 */}
              <span className="hidden sm:inline">
                لا تتردّد واطلب نسختك مجانا
                <br />
                الآن!
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
              w-[143px] sm:w-[clamp(130px,18vw,239px)]
              h-[32px] sm:h-[clamp(32px,4.2vw,54px)]
              rounded-[6px] sm:rounded-[clamp(6px,0.8vw,10px)]
              cursor-pointer no-underline
              shadow-[0px_3px_12px_rgba(0,0,0,0.16)]
            "
            data-node-id="343:409"
          >
            <span
              className="
                font-['Almarai'] font-bold leading-normal not-italic
                text-[14px] sm:text-[clamp(13px,1.8vw,24px)]
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
