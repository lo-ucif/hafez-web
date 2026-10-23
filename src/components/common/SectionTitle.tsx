import { IMAGES } from "../../constants/images";

interface SectionTitleProps {
  /** The text label rendered inside the decorated title bar */
  title: string;
  /** Optional extra Tailwind classes on the wrapper */
  className?: string;
}

/**
 * Reusable section-title badge that matches the Figma design:
 * two narrow coloured bars framing the title text over a wider bar.
 * Enhanced with Framer Motion scroll-reveal and subtle hover effect.
 */
export default function SectionTitle({
  title,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`content-stretch flex items-center justify-center relative shrink-0 cursor-default select-none ${className}`}
    >
      {/* Left gold narrow bar matching Figma node 196:260 */}
      <div className="h-[53px] relative shrink-0 w-[9px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarShort}
        />
      </div>

      {/* Main wide bar matching Figma node 196:261 */}
      <div className="h-[53px] relative shrink-0 w-[262px] bg-[#1a5a81] overflow-hidden flex items-center justify-center">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarLong}
        />
        {/* Repeating calligraphy watermark layer */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-repeat bg-center"
          style={{ backgroundImage: `url(${IMAGES.arabicBg})`, backgroundSize: "53px" }}
        />
        {/* Title text matching Figma node 196:263 */}
        <p
          dir="auto"
          className="
            -translate-x-1/2 -translate-y-1/2
            absolute left-1/2 top-1/2 z-10
            font-['Almarai:Bold'] font-bold not-italic
            text-[22px] sm:text-[24px] text-center text-white
            whitespace-nowrap leading-none m-0
          "
        >
          {title}
        </p>
      </div>

      {/* Right gold narrow bar matching Figma node 196:262 */}
      <div className="h-[53px] relative shrink-0 w-[9px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarShort}
        />
      </div>
    </div>
  );
}
