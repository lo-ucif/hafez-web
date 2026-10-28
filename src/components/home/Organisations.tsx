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

      {/* Partner Logos matching Figma node 196:464 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-[32px] md:gap-[40px] relative shrink-0 w-full z-10"
        data-node-id="196:464"
      >
        {/* Right (in RTL): نادي الطبيب الحافظ - كلية الطب قسنطينة */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="h-[52px] sm:h-[60px] md:h-[65px] w-auto max-w-[200px] relative shrink-0 cursor-pointer flex items-center justify-center"
          data-node-id="375:81"
          data-name="Cover-الطبيب-الحافظ_2-removebg-preview 2"
        >
          <img
            alt="شعار نادي الطبيب الحافظ - كلية الطب قسنطينة"
            className="h-full w-auto object-contain block select-none drop-shadow-sm pointer-events-none"
            src={IMAGES.orgTabibHafez}
          />
        </motion.div>

        {/* Center: Vertical Golden Divider */}
        <div
          className="h-[46px] sm:h-[54px] md:h-[60px] w-[2px] bg-[#cab178] rounded-full shrink-0 self-center"
          data-node-id="196:472"
          aria-hidden="true"
        />

        {/* Left (in RTL): نادي شفاء (Shifaa Club) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="h-[68px] sm:h-[78px] md:h-[88px] w-auto max-w-[170px] relative shrink-0 cursor-pointer flex items-center justify-center"
          data-node-id="375:62"
          data-name="logo 3"
        >
          <img
            alt="شعار نادي شفاء - Shifaa Club"
            className="h-full w-auto object-contain block select-none drop-shadow-sm pointer-events-none"
            src={IMAGES.orgShifaaLogo}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
