import { useState } from 'react';
import { IMAGES } from '../../constants/images';
import SectionTitle from '../common/SectionTitle';

const TOTAL_SLIDES = 8;

/**
 * Gallery section — "صور من النظام" image slider.
 * Responsive: scales down arrow controls, slide preview, and dot indicators
 * to match Figma mobile phone mode (node 173:727) while remaining full-sized on desktop.
 */
export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(6); // Default active index (matching Figma design)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      aria-label="صور من النظام"
      className="
        bg-white flex flex-col gap-8 md:gap-[60px] items-center overflow-clip
        pb-12 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      <SectionTitle title="صور من النظام" />

      {/* Slider container */}
      <div className="flex gap-4 sm:gap-8 md:gap-[84px] items-center justify-center relative w-full max-w-[1034px]">
        {/* Previous arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="الشريحة السابقة"
          className="
            flex items-center justify-center
            size-[28px] sm:size-[36px] md:size-[54px]
            cursor-pointer opacity-80 hover:opacity-100 active:scale-90
            transition-all duration-200 shrink-0
          "
        >
          <div className="flex-none rotate-90 size-[21px] sm:size-[30px] md:size-[54px] relative">
            <img
              alt=""
              aria-hidden="true"
              className="absolute block inset-0 max-w-none size-full"
              src={IMAGES.galleryArrowLeft}
            />
          </div>
        </button>

        {/* Main slide display */}
        <div className="w-[258px] sm:w-[380px] md:w-[666px] h-auto aspect-[666/444] relative rounded-[8px] sm:rounded-[12px] overflow-hidden shadow-lg">
          <img
            alt={`لقطة ${currentSlide + 1} من واجهة منصة حافظ`}
            className="absolute inset-0 object-cover size-full transition-transform duration-300"
            src={IMAGES.gallerySlide}
          />
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="الشريحة التالية"
          className="
            flex items-center justify-center
            size-[28px] sm:size-[36px] md:size-[54px]
            cursor-pointer opacity-80 hover:opacity-100 active:scale-90
            transition-all duration-200 shrink-0
          "
        >
          <div className="-rotate-90 flex-none size-[21px] sm:size-[30px] md:size-[54px] relative">
            <img
              alt=""
              aria-hidden="true"
              className="absolute block inset-0 max-w-none size-full"
              src={IMAGES.galleryArrowRight}
            />
          </div>
        </button>
      </div>

      {/* Dot indicators matching Figma node 173:733 */}
      <div className="flex gap-1.5 sm:gap-2 md:gap-[13px] items-center" role="tablist" aria-label="مؤشرات الشرائح">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => {
          const isActive = i === currentSlide;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`الشريحة ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`
                transition-all duration-300 rounded-[999px] cursor-pointer p-0 border-none
                ${
                  isActive
                    ? 'bg-[#1a5a81] h-[6.7px] md:h-[13px] w-[21px] md:w-[42px]'
                    : 'bg-[#97bacf] size-[6.7px] md:size-[13px] hover:bg-[#78a5bf]'
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
}
