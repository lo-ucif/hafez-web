import { IMAGES } from '../../constants/images';
import Button from '../common/Button';
import ArabicBg from '../common/ArabicBg';

/**
 * Hero section — full-width blue banner with platform logo,
 * headline text, and CTA button.
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="الرئيسية"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col gap-[50px] h-[798px] items-center
      "
    >
      {/* Decorative black blur at the bottom */}
      <div className="absolute bg-black blur-[124.044px] h-[375.333px] left-[-30px] top-[716px] w-[1501.333px]" />

      {/* Decorative Arabic-bg overlays */}
      <ArabicBg positionClass="-translate-x-1/2 left-1/2 top-[-19px]" sizeClass="size-[836px]" />
      <ArabicBg positionClass="-translate-y-1/2 left-[-292px] top-1/2" sizeClass="size-[840px]" />
      <ArabicBg positionClass="-translate-y-1/2 left-[896px] top-1/2" sizeClass="size-[830px]" />

      {/* Centre content */}
      <div className="content-stretch flex flex-col gap-[33px] items-center relative shrink-0 w-[615px] pt-[40px]">
        {/* Platform logo illustration */}
        <div className="h-[365.975px] relative shrink-0 w-[429.061px]">
          <img
            alt="شعار منصة حافظ"
            className="absolute block inset-0 max-w-none size-full"
            src={IMAGES.heroLogo}
          />
        </div>

        {/* Headline */}
        <h1
          dir="auto"
          className="
            font-['Almarai:Regular'] not-italic
            text-[48px] text-center text-white leading-[normal]
            whitespace-pre-wrap
          "
        >
          <span className="block">منصة ذكية لإدارة حلقات</span>
          <span className="block">{` القرآن`}</span>
        </h1>

        {/* CTA */}
        <Button variant="gold" size="md">
          متابعة
        </Button>
      </div>
    </section>
  );
}
