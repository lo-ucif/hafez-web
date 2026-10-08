import { motion } from 'framer-motion';
import { IMAGES } from '../../constants/images';
import ArabicBg from '../common/ArabicBg';

/**
 * Organisations banner — dark blue stripe showing institutions using the system.
 */
export default function Organisations() {
  return (
    <section
      aria-label="هيئات تستعمل النّظام"
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex flex-col gap-[30px] items-center justify-center
        px-[10px] py-[30px]
      "
    >
      <ArabicBg positionClass="left-[-249px] top-[-677.68px]" sizeClass="size-[1983px]" />

      {/* Heading */}
      <motion.div
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-[10px] items-center justify-center relative z-10"
      >
        <p
          dir="auto"
          className="font-['Almarai:Regular'] not-italic text-[28px] text-center text-white whitespace-nowrap leading-[normal]"
        >
          هيئات تستعمل النّظام
        </p>
        <div className="h-0 relative w-[92px]">
          <div className="absolute inset-[-3.77px_0_0_0]">
            <img alt="" aria-hidden="true" className="block max-w-none size-full" src={IMAGES.orgDividerLine} />
          </div>
        </div>
      </motion.div>

      {/* Logos row */}
      <motion.div
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="content-center flex flex-wrap gap-[50px] items-center justify-center w-full relative z-10"
      >
        {/* Divider */}
        <div className="h-[106.298px] relative w-0">
          <div className="absolute inset-[-1.41%_-1.5px]">
            <img alt="" aria-hidden="true" className="block max-w-none size-full" src={IMAGES.orgDivider} />
          </div>
        </div>

        {/* Organisation logo placeholder */}
        <motion.div
          whileHover={{ scale: 1.15, filter: 'drop-shadow(0 0 12px rgba(202,177,120,0.4))' }}
          whileTap={{ scale: 0.95 }}
          className="h-[109.278px] relative w-[109.705px] cursor-pointer"
        >
          <img alt="شعار هيئة شريكة" className="absolute block inset-0 max-w-none size-full" src={IMAGES.orgLogo} />
        </motion.div>

        {/* Second divider */}
        <div className="h-[106.298px] relative w-0">
          <div className="absolute inset-[-1.41%_-1.5px]">
            <img alt="" aria-hidden="true" className="block max-w-none size-full" src={IMAGES.orgDivider} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

