import { motion } from 'framer-motion';
import { IMAGES } from '../../constants/images';

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
export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className={`flex items-center justify-end relative shrink-0 cursor-default select-none ${className}`}
    >
      {/* Left narrow bar */}
      <div className="h-[53px] relative shrink-0 w-[9px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarShort}
        />
      </div>

      {/* Main wide bar */}
      <div className="h-[53px] relative shrink-0 w-[262px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarLong}
        />
      </div>

      {/* Right narrow bar */}
      <div className="h-[53px] relative shrink-0 w-[9px]">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.sectionBarShort}
        />
      </div>

      {/* Title text – centered over all three bars */}
      <p
        dir="auto"
        className="
          -translate-x-1/2 -translate-y-1/2
          absolute left-1/2 top-1/2
          font-['Almarai:Bold'] not-italic
          text-[24px] text-center text-white
          whitespace-nowrap leading-none
        "
      >
        {title}
      </p>
    </motion.div>
  );
}

