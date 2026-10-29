import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";
import ArabicBg from "../common/ArabicBg";

/**
 * Organisations banner — dark blue stripe showing partner institutions using the system.
 * Matches Figma node 196:459 (hafez-logo design).
 */
export default function Organisations() {
  return (
    <section
      id="organisations"
      aria-label="هيئات تستعمل النّظام"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col gap-[30px] sm:gap-[40px] items-center justify-center
        px-[10px] py-[30px] sm:py-[40px]
      "
      data-node-id="196:459"
    >
      {/* Arabic calligraphy background matching Figma node 196:460 */}
      <ArabicBg
        positionClass="left-[-249px] top-[-677.68px]"
        sizeClass="size-[1983px]"
        opacityClass="opacity-[0.03]"
      />

      {/* Title with golden underline matching Figma node 196:461 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-[10px] items-center justify-center relative shrink-0 z-10"
        data-node-id="196:461"
      >
        <h2
          dir="auto"
          className="font-['Almarai'] font-normal text-[24px] sm:text-[28px] text-center text-white whitespace-nowrap leading-normal"
          data-node-id="196:462"
        >
          هيئات تستعمل النّظام
        </h2>
        <div
          className="h-[3.8px] w-[92px] bg-[#cab178] rounded-full shrink-0"
          data-node-id="196:463"
          aria-hidden="true"
        />
      </motion.div>

      {/* Desktop & Tablet: Static side-by-side logos matching Figma */}
      <div
        className="hidden sm:flex items-center justify-center gap-6 sm:gap-[32px] md:gap-[40px] relative shrink-0 w-full z-10"
        data-node-id="196:464"
      >
        {/* Right (in RTL): نادي الطبيب الحافظ - كلية الطب قسنطينة */}
        <div
          className="h-[52px] sm:h-[60px] md:h-[65px] w-auto max-w-[200px] relative shrink-0 flex items-center justify-center"
          data-node-id="375:81"
          data-name="Cover-الطبيب-الحافظ_2-removebg-preview 2"
        >
          <img
            alt="شعار نادي الطبيب الحافظ - كلية الطب قسنطينة"
            className="h-full w-auto object-contain block select-none drop-shadow-sm pointer-events-none"
            src={IMAGES.orgTabibHafez}
          />
        </div>

        {/* Center: Vertical Golden Divider */}
        <div
          className="h-[46px] sm:h-[54px] md:h-[60px] w-[2px] bg-[#cab178] rounded-full shrink-0 self-center"
          data-node-id="196:472"
          aria-hidden="true"
        />

        {/* Left (in RTL): نادي شفاء (Shifaa Club) */}
        <div
          className="h-[68px] sm:h-[78px] md:h-[88px] w-auto max-w-[170px] relative shrink-0 flex items-center justify-center"
          data-node-id="375:62"
          data-name="logo 3"
        >
          <img
            alt="شعار نادي شفاء - Shifaa Club"
            className="h-full w-auto object-contain block select-none drop-shadow-sm pointer-events-none"
            src={IMAGES.orgShifaaLogo}
          />
        </div>
      </div>

      {/* Mobile Mode: Infinite Loop Marquee (Right to Left) */}
      <div
        className="sm:hidden w-full overflow-hidden relative z-10 py-1 select-none"
        dir="ltr"
        aria-label="هيئات شريكة"
      >
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#1a5a81] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-[#1a5a81] to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center w-max gap-5 will-change-transform"
        >
          {[0, 1, 2, 3].map((setIndex) => (
            <div key={setIndex} className="flex items-center gap-5 shrink-0">
              <div className="h-[44px] w-auto max-w-[155px] flex items-center justify-center shrink-0">
                <img
                  alt="شعار نادي الطبيب الحافظ"
                  className="h-full w-auto object-contain block select-none"
                  src={IMAGES.orgTabibHafez}
                />
              </div>
              <div
                className="h-[34px] w-[2px] bg-[#cab178] rounded-full shrink-0"
                aria-hidden="true"
              />
              <div className="h-[54px] w-auto max-w-[125px] flex items-center justify-center shrink-0">
                <img
                  alt="شعار نادي شفاء"
                  className="h-full w-auto object-contain block select-none"
                  src={IMAGES.orgShifaaLogo}
                />
              </div>
              <div
                className="h-[34px] w-[2px] bg-[#cab178] rounded-full shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
