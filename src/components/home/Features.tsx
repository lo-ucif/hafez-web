import { IMAGES } from '../../constants/images';
import { features, whyItems } from '../../data/features';
import type { Feature, WhyItem } from '../../data/features';
import SectionTitle from '../common/SectionTitle';
import ArabicBg from '../common/ArabicBg';

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article
      className="
        backdrop-blur-[34.87px] bg-white
        drop-shadow-[0px_2px_3px_rgba(0,0,0,0.12)]
        flex flex-col gap-[34px] h-[311px] items-center justify-center
        pb-[5px] pt-[26px] px-[10px]
        relative rounded-[24px] w-[362px]
        overflow-hidden
      "
    >
      <ArabicBg positionClass="-translate-x-1/2 left-1/2 top-0" sizeClass="size-[308px]" opacityClass="opacity-6" />

      <img
        alt={feature.title}
        className="relative shrink-0 size-[90px] object-contain"
        src={feature.icon}
      />
      <h3
        dir="auto"
        className="
          font-['Almarai:Bold'] not-italic text-[24px] text-black text-center
          leading-[13.948px] min-w-full w-[min-content]
        "
      >
        {feature.title}
      </h3>
      <p
        dir="auto"
        className="
          font-['Almarai:Regular'] not-italic text-[18px]
          text-[rgba(0,0,0,0.6)] text-center leading-[25.9px]
          h-[94px] min-w-full w-[min-content]
        "
      >
        {feature.description}
      </p>
    </article>
  );
}

// ─── Why Hafez Item ───────────────────────────────────────────────────────────

function WhyHafezItem({ item }: { item: WhyItem }) {
  return (
    <div className="flex flex-col gap-[20px] items-center relative">
      <div className="relative size-[153px]">
        <img
          alt=""
          aria-hidden="true"
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.whyCircle}
        />
        <img
          alt={item.label}
          className="absolute left-[47px] top-[47px] size-[60px] object-contain"
          src={item.icon}
        />
      </div>
      <p
        dir="auto"
        className="
          font-['Almarai:Regular'] not-italic text-[20px]
          text-[#cab178] text-center leading-[normal]
          whitespace-nowrap
        "
      >
        {item.label}
      </p>
    </div>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────

/**
 * Features section — "مميزات النظام" feature cards + "لماذا حافظ" circle icons.
 */
export default function Features() {
  return (
    <section
      id="features"
      aria-label="مميزات النظام"
      className="
        bg-white flex flex-col gap-[60px] items-center overflow-clip
        pb-[10px] pt-[100px] px-[10px]
        relative w-full
      "
    >
      <SectionTitle title="مميزات النظام" />

      {/* Feature cards grid */}
      <div className="content-center drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-wrap gap-[21px] items-center justify-center w-full">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* "Why Hafez" sub-heading */}
      <p
        dir="auto"
        className="font-['Almarai:Regular'] not-italic text-[24px] text-[#cab178] text-center leading-[normal] whitespace-nowrap"
      >
        لماذا حافظ
      </p>

      {/* Why Hafez items */}
      <div className="content-center flex flex-wrap gap-[80px] items-center justify-center w-full">
        {whyItems.map((item) => (
          <WhyHafezItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
