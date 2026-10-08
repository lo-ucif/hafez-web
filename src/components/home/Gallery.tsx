import { IMAGES } from '../../constants/images';
import SectionTitle from '../common/SectionTitle';

const TOTAL_DOTS = 7;
const ACTIVE_DOT_INDEX = 7; // 0-based index of the wide active dot

/**
 * Gallery section — "صور من النظام" image slider with arrow controls and dot indicators.
 */
export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-label="صور من النظام"
      className="
        bg-white flex flex-col gap-[60px] items-center overflow-clip
        pb-[60px] pt-[100px] px-[10px]
        relative w-full
      "
    >
      <SectionTitle title="صور من النظام" />

      {/* Slider */}
      <div className="flex gap-[84px] items-center justify-center relative w-full max-w-[1034px]">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="الشريحة السابقة"
          className="flex items-center justify-center size-[53.921px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="flex-none rotate-90 size-[53.921px] relative">
            <img alt="" aria-hidden="true" className="absolute block inset-0 max-w-none size-full" src={IMAGES.galleryArrowLeft} />
          </div>
        </button>

        {/* Main slide */}
        <div className="h-[444px] relative w-[666px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="لقطة من واجهة منصة حافظ"
              className="absolute h-[132.91%] left-0 max-w-none top-[0.01%] w-full"
              src={IMAGES.gallerySlide}
            />
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="الشريحة التالية"
          className="flex items-center justify-center size-[53.921px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
        >
          <div className="-rotate-90 flex-none size-[53.921px] relative">
            <img alt="" aria-hidden="true" className="absolute block inset-0 max-w-none size-full" src={IMAGES.galleryArrowRight} />
          </div>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-[13.053px] items-center" role="tablist" aria-label="مؤشرات الشرائح">
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
          <div
            key={i}
            role="tab"
            aria-selected={i === ACTIVE_DOT_INDEX - TOTAL_DOTS}
            className="bg-[#97bacf] rounded-[130.527px] size-[13.053px]"
          />
        ))}
        {/* Active (wider) dot */}
        <div
          role="tab"
          aria-selected={true}
          className="bg-[#1a5a81] h-[13.053px] rounded-[130.527px] w-[41.769px]"
        />
        <div
          role="tab"
          aria-selected={false}
          className="bg-[#97bacf] rounded-[130.527px] size-[13.053px]"
        />
      </div>
    </section>
  );
}
