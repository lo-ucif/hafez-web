import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import ArabicBg from "../common/ArabicBg";

/**
 * Special Offer Banner — "عروض المنصة: مدرسة قرآنية - مجانا لفترة محدودة"
 * Corresponds to Figma desktop node 196:434.
 * Styled with dark blue background, gold border, Arabic calligraphy watermark,
 * and prominent "مجانا لفترة محدودة" badge.
 */
export default function SpecialOffer() {
  return (
    <section
      aria-label="عرض المدرسة القرآنية"
      className="
        bg-white flex flex-col gap-10 md:gap-[60px] items-center
        pb-10 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      <SectionTitle title="عروض المنصة" />

      <div className="bg-gradient-to-br from-[#1a5a81] to-[#15455E] text-white rounded-xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-center">
        <ArabicBg
          positionClass="absolute top-0 md:left-105 "
          sizeClass="size-[400px]"
          opacityClass="md:opacity-6 opacity-0"
        />
        <ArabicBg
          positionClass="absolute top-0 md:right-120"
          sizeClass="size-[400px]"
          opacityClass="md:opacity-6 opacity-0"
        />
        <ArabicBg
          positionClass="absolute top-0 left-1/2 -translate-x-1/2"
          sizeClass="size-[400px]"
          opacityClass="opacity-6"
        />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
          <span className="text-[16px] font-bold text-[#cab178] tracking-widest uppercase">
            منصة حافظ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight m-0 text-white">
            هل ترغب في تجربة مجانية لفترة محدودة !
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed m-0">
            احصل على نسختك الخاصة المجانية لفترة محدودة
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
            <a
              href="#pricing"
              className="
                          bg-[#cab178] hover:bg-[#bfa56a] text-white font-bold
                          px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl
                          no-underline text-base
                        "
            >
              طلب نسخة تجريبية
            </a>

            <a
              href="#contact"
              className="
                          bg-white/10 hover:bg-white/20 text-white font-bold
                          px-6 py-3 rounded-xl transition-all border border-white/20
                          no-underline text-base
                        "
            >
              تواصل مع فريق الدعم
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
