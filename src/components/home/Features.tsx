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
        flex flex-col gap-6 md:gap-[34px] min-h-[290px] md:h-[311px] items-center justify-center
        pb-5 pt-6 px-4
        relative rounded-[24px] w-full max-w-[362px]
        overflow-hidden transition-transform duration-200 hover:-translate-y-1
      "
    >
      <ArabicBg positionClass="-translate-x-1/2 left-1/2 top-0" sizeClass="size-[308px]" opacityClass="opacity-6" />

      <img
        alt={feature.title}
        className="relative shrink-0 size-[75px] md:size-[90px] object-contain"
        src={feature.icon}
      />
      <h3
        dir="auto"
        className="
          font-['Almarai:Bold'] not-italic text-[20px] md:text-[24px] text-black text-center
          leading-normal m-0
        "
      >
        {feature.title}
      </h3>
      <p
        dir="auto"
        className="
          font-['Almarai:Regular'] not-italic text-[15px] md:text-[18px]
          text-[rgba(0,0,0,0.6)] text-center leading-relaxed
          m-0 max-w-[300px]
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
    <div className="flex flex-col gap-3 md:gap-[20px] items-center relative">
      <div className="relative size-[130px] sm:size-[140px] md:size-[153px] flex items-center justify-center">
        <img
          alt=""
          aria-hidden="true"
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.whyCircle}
        />
        <img
          alt=""
          aria-hidden="true"
          className="relative size-[50px] md:size-[60px] object-contain z-10"
          src={item.icon}
        />
      </div>

      <p
        dir="auto"
        className="
          font-['Almarai:Regular'] not-italic
          text-[17px] md:text-[20px] text-[#cab178] text-center
          whitespace-nowrap leading-normal m-0
        "
      >
        {item.label}
      </p>
    </div>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section
      id="features"
      aria-label="مميزات النظام"
      className="
        bg-white flex flex-col gap-12 md:gap-[60px] items-center overflow-clip
        pb-10 md:pb-[10px] pt-12 md:pt-[100px] px-4 sm:px-6 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      {/* Section Title */}
      <SectionTitle title="مميزات النظام" />

      {/* Introductory text matching Figma node 201:1021 */}
      <div className="flex flex-col gap-5 md:gap-7 items-center text-center max-w-[968px] mx-auto px-4">
        <p
          className="font-['Almarai:Regular'] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-[38px] text-black m-0"
          dir="auto"
        >
          من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم ومراجعته أكثر سهولة وتنظيمًا واستمرارية. توفر المنصة بيئة تساعد المستخدمين على تنظيم الحفظ، متابعة التقدم، وتطوير عادة يومية ثابتة مع كتاب الله. نؤمن أن الاستمرار هو أساس النجاح في رحلة الحفظ، لذلك صُممت حافظ لتساعدك على تنظيم وقتك، متابعة إنجازاتك، وتذكّرك بمهام الحفظ والمراجعة، بما يتناسب مع أهدافك ومستواك.
        </p>
        <p
          className="font-['Almarai:Bold'] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-[36px] text-[#1a5a81] m-0"
          dir="auto"
        >
          حافظ ليست مجرد أداة لتنظيم الحفظ، بل رفيق في رحلة القرآن، يساعدك على بناء عادة مستدامة، متابعة تقدمك، والاستمرار بخطوات ثابتة نحو إتقان ما حفظت.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="flex flex-wrap gap-5 md:gap-[21px] items-center justify-center w-full">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* "Why Hafez" subsection */}
      <div className="flex flex-col gap-8 md:gap-12 items-center w-full mt-6">
        <h2
          dir="auto"
          className="
            font-['Almarai:Regular'] not-italic
            text-[22px] md:text-[24px] text-[#cab178] text-center
            whitespace-nowrap leading-normal m-0
          "
        >
          لماذا حافظ
        </h2>

        {/* Circular icons */}
        <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-[80px] items-center justify-center w-full">
          {whyItems.map((item) => (
            <WhyHafezItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
