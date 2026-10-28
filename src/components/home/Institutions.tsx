import { institutions } from "../../data/institutions";
import SectionTitle from "../common/SectionTitle";

/**
 * Institutions / "من يستعمل النظام" section.
 * Matches Figma Desktop - 7 (node 196:177).
 * Features white background, SectionTitle, descriptive subtitle,
 * and 3 institution cards with crisp gold tag badges.
 */
export default function Institutions() {
  return (
    <section
      id="institutions"
      aria-label="من يستعمل النظام"
      className="
        bg-white relative w-full overflow-clip
        flex flex-col gap-8 md:gap-10 items-center justify-center
        pb-14 md:pb-[90px] pt-12 md:pt-[80px] px-4 md:px-[10px]
        max-w-[1440px] mx-auto
      "
    >
      {/* Heading matching Figma Desktop - 7 */}
      <SectionTitle
        title="من يستعمل النظام"
        subtitle="حلول تقنية مرنة مصممة خصيصاً لتناسب مختلف المؤسسات التعليمية والدعوية من المساجد إلى المدارس والمقارئ."
      />

      {/* Cards list matching Figma Desktop - 7 / node 196:421 */}
      <div className="flex flex-wrap gap-8 md:gap-[50px] lg:gap-[67px] items-center justify-center w-full relative z-10 max-w-[1280px] mx-auto mt-4">
        {institutions.map((item) => (
          <article
            key={item.id}
            className="
              group drop-shadow-[0px_9.042px_6.781px_rgba(0,0,0,0.1),0px_3.617px_2.712px_rgba(0,0,0,0.1)]
              hover:drop-shadow-[0px_16px_22px_rgba(26,90,129,0.15)]
              transition-all duration-300
              relative rounded-[9px]
              w-full max-w-[328px] h-[238px] shrink-0 cursor-pointer
              overflow-visible
            "
          >
            {/* Gold tag badge positioned top-right on the card matching Figma node 196:421 */}
            <div
              className="
                absolute bg-[#cab178] border-[#cab178] border-[0.766px] border-solid
                flex items-center justify-center
                right-[-12px] sm:right-[-16px] top-[11px] z-20 overflow-hidden
                px-[21px] py-[8px] rounded-[4px] shadow-md
              "
            >
              <span
                dir="auto"
                className="font-['Almarai:Bold'] text-[18px] md:text-[20px] text-white whitespace-nowrap leading-normal"
              >
                {item.title}
              </span>
            </div>

            {/* Institution image */}
            <div className="size-full relative rounded-[9px] overflow-hidden bg-slate-100">
              <img
                alt={item.title}
                className={`size-full object-cover ${item.objectPosition || "object-center"} rounded-[9px] pointer-events-none transition-transform duration-300 group-hover:scale-105`}
                src={item.image}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
