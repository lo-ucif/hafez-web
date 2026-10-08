import { motion } from 'framer-motion';
import { additionalServices } from '../../data/pricing';
 import type { AdditionalService } from '../../data/pricing';
 import { IMAGES } from '../../constants/images';
 import SectionTitle from '../common/SectionTitle';
 import ArabicBg from '../common/ArabicBg';

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: AdditionalService; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -2, scale: 1.02 }}
      className="
        border-[#cab178] border-[3.501px] border-solid
        flex items-center justify-end
        relative
        overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow
      "
    >
      {/* Background image */}
      <div className="h-[292.321px] relative w-[229.306px]">
        <img
          alt=""
          aria-hidden="true"
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.servicesBg}
        />
      </div>

      <ArabicBg
        positionClass="-translate-x-1/2 left-[calc(50%-0.2px)] top-[-3.03px]"
        sizeClass="size-[291.921px]"
        opacityClass="opacity-6"
      />

      {/* Title */}
      <div className="-translate-x-1/2 absolute flex flex-col items-center justify-center left-1/2 pb-[28.007px] top-[24.11px]">
        <h3
          dir="auto"
          className="font-['Almarai:ExtraBold'] not-italic text-[20px] text-center text-white tracking-[0.5251px] whitespace-nowrap leading-[normal]"
        >
          {service.title}
        </h3>
      </div>

      {/* Price banner */}
      <div className="-translate-x-1/2 absolute h-[42.41px] left-[calc(50%-0.2px)] top-[77.49px] w-[209.651px]">
        <img alt="" aria-hidden="true" className="absolute block inset-0 max-w-none size-full" src={IMAGES.servicesPriceBg} />
      </div>
      <p
        dir="auto"
        className="-translate-x-1/2 -translate-y-1/2 absolute font-['Almarai:Bold'] not-italic text-[#1a5a81] text-[16px] text-center left-[calc(50%+0.11px)] top-[99px] whitespace-nowrap leading-[20.739px]"
      >
        {service.price}
      </p>

      {/* Feature list */}
      <ul className="absolute flex flex-col gap-[14.003px] items-start left-[50.76px] top-[143.14px] list-none m-0 p-0">
        {service.features.map((feat) => (
          <li key={feat}>
            <span className="font-['Almarai:Bold'] not-italic text-[16px] text-center text-white whitespace-nowrap leading-[24.506px]">
              {feat}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

// ─── Additional Services Section ──────────────────────────────────────────────

/**
 * Additional Services section — "الخدمات الإضافية" bordered cards.
 */
export default function AdditionalServices() {
  return (
    <section
      id="additional-services"
      aria-label="الخدمات الإضافية"
      className="
        bg-white flex flex-col gap-[60px] items-center overflow-clip
        pb-[60px] pt-[100px] px-[10px]
        relative w-full
      "
    >
      <SectionTitle title="الخدمات الإضافية" />

      <div className="content-center flex flex-wrap gap-[26.256px] items-center justify-center w-full">
        {additionalServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

