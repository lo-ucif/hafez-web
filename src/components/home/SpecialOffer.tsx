import SectionTitle from '../common/SectionTitle';
import ArabicBg from '../common/ArabicBg';

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

      {/* Blue Banner with Gold Border matching Figma node 196:447 */}
      <div
        className="
          bg-[#1a5a81] border-[#cab178] border-[3.5px] border-solid
          relative rounded-[8px] overflow-hidden
          w-full max-w-[918px] min-h-[150px]
          flex flex-col items-center justify-center gap-4 py-6 px-4
          shadow-lg
        "
      >
        {/* Background Calligraphy Watermark */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="flex justify-center items-center h-full w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <ArabicBg
                key={i}
                positionClass="relative shrink-0 -mx-10"
                sizeClass="size-[290px]"
                opacityClass="opacity-6"
              />
            ))}
          </div>
        </div>

        {/* Title: مدرسة قرآنية */}
        <h3
          dir="auto"
          className="
            font-['Almarai:Regular'] not-italic text-[20px] md:text-[22px]
            text-center text-white tracking-wide m-0 relative z-10
          "
        >
          مدرسة قرآنية
        </h3>

        {/* White Badge / Button: مجانا لفترة محدودة */}
        <div
          className="
            relative z-10 bg-white
            px-7 py-2.5 rounded-[6px] shadow-md
            flex items-center justify-center
            w-auto min-w-[210px]
          "
        >
          <span
            dir="auto"
            className="
              font-['Almarai:Bold'] not-italic text-[#1a5a81]
              text-[16px] md:text-[18px] text-center whitespace-nowrap leading-tight
            "
          >
            مجانا لفترة محدودة
          </span>
        </div>
      </div>
    </section>
  );
}
