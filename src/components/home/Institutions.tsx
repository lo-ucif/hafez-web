import { IMAGES } from '../../constants/images';
import { institutions } from '../../data/institutions';
import ArabicBg from '../common/ArabicBg';

/**
 * Institutions / Organization users banner section.
 * Corresponds to Figma desktop node 196:416.
 * Features 3 institution cards with crisp white cards, gold badges, and illustrations.
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

      {/* Heading matching Figma node 196:418 */}
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

      {/* Cards list matching Figma node 196:421 */}
      <div className="flex flex-wrap gap-8 md:gap-[67px] items-center justify-center w-full relative z-10 max-w-[1440px] mx-auto">
        {institutions.map((item) => (
          <article
            key={item.id}
            className="
              drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
              bg-white flex items-center justify-center p-[10px]
              relative rounded-[5px] transition-transform duration-200 hover:-translate-y-1
              w-full max-w-[327px] h-auto min-h-[242px] shrink-0
            "
          >
            {/* Gold tag badge positioned top-right on the card matching Figma node 196:423 */}
            <div
              className="
                absolute bg-[#cab178] border-[#cab178] border-[0.717px] border-solid
                flex items-center justify-center
                right-[10px] top-[10px] z-20 overflow-hidden
                px-[20px] py-[10px] shadow-sm
              "
            >
              <span
                dir="auto"
                className="font-['Almarai:Bold'] text-[17px] sm:text-[19px] md:text-[20px] text-white whitespace-nowrap leading-normal"
              >
                {item.title}
              </span>
            </div>

            {/* Institution image */}
            <div className="h-[210px] sm:h-[222px] w-[295px] sm:w-[307px] relative rounded-[8.132px] overflow-hidden">
              <img
                alt={item.title}
                className="absolute inset-0 object-cover rounded-[8.132px] size-full pointer-events-none"
                src={item.image}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
