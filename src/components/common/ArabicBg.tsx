import { IMAGES } from '../../constants/images';

interface ArabicBgProps {
  /** Tailwind class for absolute positioning, e.g. "left-0 top-0" */
  positionClass?: string;
  /** Tailwind size classes, defaults to size-full */
  sizeClass?: string;
  /** Tailwind opacity class, defaults to opacity-3 */
  opacityClass?: string;
}

/**
 * Decorative Arabic-calligraphy background image used in multiple sections.
 * Extracted into its own tiny component to avoid 20+ identical JSX blocks.
 */
export default function ArabicBg({
  positionClass = 'inset-0',
  sizeClass = 'size-full',
  opacityClass = 'opacity-3',
}: ArabicBgProps) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={`absolute max-w-none object-cover pointer-events-none ${sizeClass} ${opacityClass} ${positionClass}`}
      src={IMAGES.arabicBg}
    />
  );
}
