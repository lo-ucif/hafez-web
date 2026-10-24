import { motion } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import ArabicBg from '../common/ArabicBg';

/**
 * Organisations banner — dark blue stripe showing institutions using the system.
 * Matches Figma node 329:258.
 */
export default function Organisations() {
  return (
    <section
      aria-label="هيئات تستعمل النّظام"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col gap-[30px] sm:gap-[40px] items-center justify-center
        px-[10px] py-[35px] sm:py-[45px]
      "
      data-node-id="329:258"
    >
      <ArabicBg positionClass="left-[-249px] top-[-677.68px]" sizeClass="size-[1983px]" opacityClass="opacity-[0.04]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-[10px] items-center justify-center relative z-10"
        data-node-id="329:260"
      >
        <h2
          dir="auto"
          className="font-['Almarai'] font-normal not-italic text-[24px] sm:text-[28px] text-center text-white whitespace-nowrap leading-[normal] m-0"
          data-node-id="329:261"
        >
          هيئات تستعمل النّظام
        </h2>
        <div className="h-0 relative w-[92px]" data-node-id="329:262">
          <div className="absolute inset-[-3.77px_0_0_0]">
            <img alt="" aria-hidden="true" className="block max-w-none size-full" src={IMAGES.orgDividerLine} />
          </div>
        </div>
      </motion.div>

      {/* Logos row */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="content-center flex flex-wrap gap-y-[50px] items-center justify-center w-full relative z-10"
        data-node-id="329:263"
      >
        <motion.div
          whileHover={{ scale: 1.06, filter: 'drop-shadow(0 0 16px rgba(202,177,120,0.5))' }}
          whileTap={{ scale: 0.96 }}
          className="h-[75px] sm:h-[90px] md:h-[107px] w-auto max-w-[296px] relative shrink-0 cursor-pointer transition-transform duration-200"
          data-node-id="342:373"
          data-name="Cover-الطبيب-الحافظ"
        >
          <img
            alt="شعار نادي الطبيب الحافظ - كلية الطب قسنطينة"
            className="h-full w-auto object-contain block select-none drop-shadow-sm"
            src={IMAGES.orgTabibHafez}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

