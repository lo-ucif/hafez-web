import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";
import Button from "../common/Button";
import ArabicBg from "../common/ArabicBg";

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟" full-width banner
 * with mascot book cover, gold badge, and request button.
 * Responsive for phone mode and desktop mode.
 */
export default function CTA() {
  return (
    <section
      aria-label="طلب نسخة"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col items-center justify-center
        py-6 md:py-10 px-4 sm:px-8
      "
    >
      {/* Diagonal Ribbon matching Figma node 196:515 */}
      <div className="absolute top-0 right-0 w-[160px] sm:w-[220px] md:w-[280px] h-[160px] sm:h-[220px] md:h-[280px] pointer-events-none overflow-hidden z-20">
        <div
          className="
            absolute bg-[#cab178] text-white
            font-['Almarai:Bold'] text-[16px] sm:text-[18px] md:text-[22px]
            py-5 sm:py-6 text-center shadow-md
            w-[220px] sm:w-[320px] md:w-[400px]
            top-[20px] sm:top-[45px] md:top-[60px] -right-[55px] sm:-right-[70px] md:-right-[85px]
            rotate-45 select-none tracking-wide
          "
          dir="auto"
        >
          اطلب نسختك الآن!
        </div>
      </div>

      <div className="-translate-x-1/2 absolute flex h-[350px] items-center left-1/2 top-0 w-[1440px] pointer-events-none opacity-30">
        {Array.from({ length: 5 }).map((_, i) => (
          <ArabicBg
            key={i}
            positionClass="relative"
            sizeClass="size-[413px] mr-[-100px]"
            opacityClass="opacity-3"
          />
        ))}
      </div>

      <div
        className="
          flex flex-col md:flex-row-reverse gap-8 md:gap-16 lg:gap-24 items-center justify-center
          w-full max-w-[1200px] relative z-10
        "
      >
        {/* Book cover / Mascot illustration */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-[350px] sm:w-[290px] md:w-[400px] h-auto aspect-[308/350] relative  shrink-0 overflow-hidden cursor-pointer"
        >
          <img alt="غلاف كتاب طلب نسخة" src={IMAGES.ctaBookCover} />
        </motion.div>

        {/* Text + button */}
        <div
          dir="rtl"
          className="flex flex-col gap-6 md:gap-[24px] items-center md:items-start justify-center max-w-[480px] text-center md:text-right"
        >
          <h2
            dir="auto"
            className="
              font-['Almarai:Bold'] not-italic
              text-[26px] sm:text-[30px] md:text-[36px]
              text-white leading-snug md:leading-[55px]
              whitespace-pre-wrap m-0
            "
          >
            <span className="block">لديكم مدرسة قرآنية؟</span>
            <span className="block">{` لا تتردّد واطلب نسختك الآن!`}</span>
          </h2>

          <Button
            variant="gold"
            size="lg"
            className="rounded-[12px] w-full max-w-[180px] h-[40px] sm:h-[50px] text-[20px] sm:text-[24px]"
          >
            طلب نسخة
          </Button>
        </div>
      </div>
    </section>
  );
}
