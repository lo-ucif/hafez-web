import { IMAGES } from '../../constants/images';
import { institutions } from '../../data/institutions';
import ArabicBg from '../common/ArabicBg';

/**
 * Institutions / Organization users banner section.
 * Corresponds to the blue "مستخدمو النظام" section in Figma (node 173:521)
 * displaying cards for: جمعيات ومؤسسات, مدرسة قرآنية, مسجد.
 */
export default function Institutions() {
  return (
    <section
      aria-label="المؤسسات المستفيدة من النظام"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col gap-10 md:gap-[60px] items-center justify-center
        pb-14 md:pb-[100px] pt-12 md:pt-[80px] px-4 md:px-[10px]
      "
    >
      <ArabicBg positionClass="left-[-249px] top-[-677px]" sizeClass="size-[1983px]" opacityClass="opacity-3" />

      {/* Heading matching Figma node 173:523 */}
      <div className="flex flex-col gap-2.5 items-center justify-center relative z-10">
        <h2
          dir="auto"
          className="
            font-['Almarai:Regular'] not-italic text-[24px] md:text-[28px]
            text-center text-white whitespace-nowrap leading-normal m-0
          "
        >
          مستخدمو النظام
        </h2>
        <div className="h-0 relative w-[92px]">
          <div className="absolute inset-[-3.77px_0_0_0]">
            <img alt="" aria-hidden="true" className="block max-w-none size-full" src={IMAGES.navUnderline} />
          </div>
        </div>
      </div>

      {/* Cards list matching Figma node 173:526 */}
      <div className="flex flex-wrap gap-8 md:gap-[67px] items-center justify-center w-full relative z-10 max-w-[1440px] mx-auto">
        {institutions.map((item) => (
          <article
            key={item.id}
            className="
              drop-shadow-[0px_8.5px_6.3px_rgba(0,0,0,0.1)]
              bg-white/5 backdrop-blur-xs
              flex gap-[5px] items-center justify-center p-[10px]
              relative rounded-[8px] transition-transform duration-200 hover:-translate-y-1
            "
          >
            {/* Gold tag badge positioned on top right */}
            <div
              className="
                absolute bg-[#cab178] border-[#cab178] border-[0.7px]
                flex flex-col items-center justify-center
                right-4 top-4 z-20 overflow-hidden px-4 py-2 rounded-sm shadow-md
              "
            >
              <span className="font-['Almarai:Bold'] text-[16px] sm:text-[18px] md:text-[20px] text-white whitespace-nowrap leading-normal">
                {item.title}
              </span>
            </div>

            {/* Institution image */}
            <div className="h-[200px] sm:h-[222px] w-[280px] sm:w-[307px] relative rounded-[8px] overflow-hidden">
              <img
                alt={item.title}
                className="absolute inset-0 object-cover rounded-[8px] size-full pointer-events-none"
                src={item.image}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
