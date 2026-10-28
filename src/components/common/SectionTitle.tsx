import { motion } from "framer-motion";

interface SectionTitleProps {
  /** The text label rendered as the section title */
  title: string;
  /** Optional subtitle or description text rendered below the gold accent line */
  subtitle?: string;
  /** Optional extra Tailwind classes on the wrapper */
  className?: string;
  /** Optional inverted color mode for dark backgrounds (default: false) */
  inverted?: boolean;
  /** Optional heading level HTML tag (default: 'h2') */
  as?: "h1" | "h2" | "h3";
}

/**
 * Reusable section title matching Figma node 236:60:
 * - Prominent deep brand blue (#1a5a81) heading in Almarai font (or white when inverted)
 * - Centered golden accent bar (#cab178) directly below the title
 * - Optional refined descriptive subtitle (#666666) below the accent line
 */
export default function SectionTitle({
  title,
  subtitle,
  className = "",
  inverted = false,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center text-center relative shrink-0 cursor-default select-none ${className}`}
      data-node-id="236:60"
    >
      {/* Title matching Figma node 236:60 */}
      <Component
        dir="auto"
        className={`
          font-['Almarai'] font-bold
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[40px]
          leading-tight sm:leading-tight md:leading-[1.25]
          m-0 tracking-tight
          ${inverted ? "text-white" : "text-[#1a5a81]"}
        `}
      >
        {title}
      </Component>

      {/* Gold underline accent matching Figma node 236:60 */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="
          h-[3.8px] sm:h-[4.2px] w-[75px] sm:w-[92px]
          bg-[#cab178] rounded-full
          mt-2.5 sm:mt-3
          origin-center shrink-0
        "
        aria-hidden="true"
      />

      {/* Subtitle / Description */}
      {subtitle && (
        <div className="mt-3.5 sm:mt-4 max-w-[720px] px-4 w-full">
          <p
            dir="auto"
            className={`
              font-['Almarai'] font-normal
              text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px]
              leading-relaxed sm:leading-[1.7]
              m-0
              ${inverted ? "text-white/85" : "text-[#666666]"}
            `}
          >
            {subtitle}
          </p>
        </div>
      )}
    </motion.div>
  );
}
