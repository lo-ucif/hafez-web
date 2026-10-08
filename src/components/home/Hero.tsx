import { IMAGES } from '../../constants/images';
import ArabicBg from '../common/ArabicBg';

/**
 * Hero section — full-width blue banner with platform logo,
 * headline text, and CTA button.
 * Responsive: matches mobile phone mode (Figma node 173-282) on small screens
 * and expands gracefully on desktop screens.
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="الرئيسية"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col items-center justify-center
        min-h-[480px] md:h-[798px] py-10 md:py-0
      "
    >
      {/* Decorative black blur at the bottom */}
      <div
        className="
          -translate-x-1/2 absolute bg-black
          blur-[40px] md:blur-[124px]
          bottom-[-40px] md:top-[716px] md:bottom-auto
          h-[120px] md:h-[375px] left-1/2
          w-[360px] sm:w-[450px] md:w-[1500px] pointer-events-none
        "
      />

      {/* Decorative Arabic-bg overlays */}
      <ArabicBg positionClass="-translate-x-1/2 left-1/2 top-[-19px]" sizeClass="size-[600px] md:size-[836px]" />
      <ArabicBg positionClass="-translate-y-1/2 left-[-292px] top-1/2 hidden md:block" sizeClass="size-[840px]" />
      <ArabicBg positionClass="-translate-y-1/2 left-[896px] top-1/2 hidden md:block" sizeClass="size-[830px]" />

      {/* Main Content */}
      <div className="flex flex-col gap-5 md:gap-[33px] items-center relative z-10 w-full max-w-[615px] px-4">
        {/* Platform logo illustration */}
        <div className="h-[210px] w-[246px] sm:h-[238px] sm:w-[279px] md:h-[366px] md:w-[429px] relative shrink-0 transition-all duration-300">
          <img
            alt="شعار منصة حافظ"
            className="absolute block inset-0 max-w-none size-full object-contain"
            src={IMAGES.heroLogo}
          />
        </div>

        {/* Headline */}
        <h1
          dir="auto"
          className="
            font-['Almarai:Regular'] not-italic
            text-[28px] sm:text-[31.2px] md:text-[48px]
            text-center text-white leading-tight md:leading-normal
            whitespace-pre-wrap m-0
          "
        >
          <span className="block">منصة ذكية لإدارة حلقات</span>
          <span className="block">{` القرآن`}</span>
        </h1>

        {/* CTA Button matching Figma mobile node 173:335 */}
        <a
          href="#about"
          className="
            bg-[#cab178] hover:bg-[#b89f66] active:scale-95
            transition-all duration-200
            flex items-center justify-center
            px-4 py-2 sm:px-[15px] sm:py-[6.5px] md:px-7 md:py-2.5
            rounded-[4px] md:rounded-[6px]
            w-auto min-w-[88px] cursor-pointer no-underline
            shadow-sm hover:shadow-md
          "
        >
          <span
            className="
              font-['Almarai:Regular'] leading-none not-italic
              text-[12px] md:text-[16px] text-white whitespace-nowrap
            "
            dir="auto"
          >
            متابعة
          </span>
        </a>
      </div>
    </section>
  );
}
