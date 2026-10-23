import { motion } from "framer-motion";

interface SectionTitleProps {
  /** The text label rendered inside the pill badge */
  title: string;
  /** Optional subtitle or description text rendered below the badge */
  subtitle?: string;
  /** Optional extra Tailwind classes on the wrapper */
  className?: string;
}

/**
 * Reusable section-title pill badge that matches Figma node 240:57:
 * Dark blue rounded capsule with drop shadow and optional descriptive snippet.
 */
export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`content-stretch flex flex-col gap-[10px] items-center relative shrink-0 cursor-default select-none ${className}`}
      data-node-id="240:57"
    >
      {/* Pill Badge matching Figma node 240:58 */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="
          bg-[#1a5a81] content-stretch flex gap-[9.3px] items-center
          px-[32px] sm:px-[37.31px] py-[10px] sm:py-[11.66px]
          relative rounded-[11658px] rounded-full shrink-0
          shadow-[0px_11.659px_17.489px_-3.498px_rgba(0,0,0,0.1),0px_4.664px_6.996px_-4.664px_rgba(0,0,0,0.1)]
          transition-shadow duration-300
        "
        data-node-id="240:58"
        data-name="Button"
      >
        <div
          className="content-stretch flex flex-col items-center relative shrink-0"
          data-node-id="240:62"
          data-name="Container"
        >
          <span
            dir="auto"
            className="
              font-['Almarai:Bold'] font-bold text-white
              text-[18px] sm:text-[19.288px] text-center
              whitespace-nowrap leading-[23.319px] m-0
            "
            data-node-id="240:63"
          >
            {title}
          </span>
        </div>
      </motion.div>

      {/* Subtitle / Description Snippet matching Figma node 240:64 */}
      {subtitle && (
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full max-w-[670px] px-4"
          data-node-id="240:64"
          data-name="Description/Snippet"
        >
          <p
            dir="auto"
            className="
              font-['Almarai:Regular'] text-[#666666]
              text-[16px] sm:text-[18px] md:text-[20px] text-center
              leading-relaxed m-0
            "
            data-node-id="240:65"
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
