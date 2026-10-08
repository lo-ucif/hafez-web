import { IMAGES } from '../../constants/images';
import Button from '../common/Button';
import ArabicBg from '../common/ArabicBg';

/**
 * CTA (Call-to-Action) section — "لديكم مدرسة قرآنية؟" full-width banner
 * with book cover and request-copy button.
 */
export default function CTA() {
  return (
    <section
      aria-label="طلب نسخة"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col items-center justify-center
      "
    >
      {/* Decorative Arabic bg row */}
      <div className="-translate-x-1/2 absolute flex h-[350px] items-center left-1/2 top-[0.43px] w-[1440px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <ArabicBg
            key={i}
            positionClass="relative"
            sizeClass="size-[413px] mr-[-100px]"
            opacityClass="opacity-3"
          />
        ))}
      </div>

      <div className="content-center flex flex-wrap gap-[10px_390px] items-center w-full relative">
        {/* Book cover */}
        <div className="h-[350.659px] relative rounded-[12.878px] w-[308px]">
          <img
            alt="غلاف كتاب طلب نسخة"
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.878px] size-full"
            src={IMAGES.ctaBookCover}
          />
        </div>

        {/* Text + button */}
        <div
          dir="rtl"
          className="flex flex-col gap-[20px] items-end justify-center w-[437px]"
        >
          <h2
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[36px] text-right text-white leading-[60px] whitespace-pre-wrap min-w-full w-[min-content]"
          >
            <span className="block">لديكم مدرسة قرآنية؟</span>
            <span className="block">{` لا تتردّد واطلب نسختك الآن!`}</span>
          </h2>

          <Button variant="gold" size="lg" className="rounded-[12px] w-[285px] h-[64px]">
            طلب نسخة
          </Button>
        </div>
      </div>
    </section>
  );
}
