import { IMAGES } from '../../constants/images';

/**
 * About section — platform description with illustration.
 * Corresponds to the "منصة ذكية" area below the hero.
 * Responsive for both mobile mode and desktop mode.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="من نحن"
      className="
        flex flex-col-reverse md:flex-row-reverse flex-wrap gap-8 md:gap-12 items-center justify-center
        pb-8 md:pb-[10px] pt-12 md:pt-[100px] px-5 sm:px-8 md:px-[60px]
        relative w-full max-w-[1440px] mx-auto
      "
      dir="rtl"
    >
      {/* Text content */}
      <div className="flex flex-1 flex-col gap-6 md:gap-[50px] items-start w-full min-w-[280px]">
        {/* Section badge matching Figma node 173:349 */}
        <div className="flex items-center justify-start relative shrink-0">
          <div className="h-[46px] md:h-[53px] relative shrink-0 w-[190px] md:w-[227px]">
            <img
              alt=""
              aria-hidden="true"
              className="absolute block inset-0 max-w-none size-full"
              src={IMAGES.sectionBarLeft}
            />
          </div>
          <div className="h-[46px] md:h-[53px] relative shrink-0 w-[8px] md:w-[9px]">
            <img
              alt=""
              aria-hidden="true"
              className="absolute block inset-0 max-w-none size-full"
              src={IMAGES.sectionBarShort}
            />
          </div>
          <p
            dir="auto"
            className="
              -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2
              font-['Almarai:Bold'] not-italic text-[20px] md:text-[24px] text-center text-white
              whitespace-nowrap leading-none
            "
          >
            منصة ذكية
          </p>
        </div>

        {/* Body text matching Figma */}
        <div className="font-['Almarai:Regular'] not-italic flex flex-col gap-5 md:gap-[30px] items-start w-full">
          <div className="flex flex-col justify-center text-black text-[16px] sm:text-[18px] md:text-[24px] leading-relaxed md:leading-[32px] w-full gap-4">
            <p className="m-0" dir="auto">
              من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم ومراجعته أكثر سهولة وتنظيمًا واستمرارية. توفر المنصة بيئة تساعد المستخدمين على تنظيم الحفظ، متابعة التقدم، وتطوير عادة يومية ثابتة مع كتاب الله.
            </p>
            <p className="m-0" dir="auto">
              نؤمن أن الاستمرار هو أساس النجاح في رحلة الحفظ، لذلك صُممت حافظ لتساعدك على تنظيم وقتك، متابعة إنجازاتك، وتذكّرك بمهام الحفظ والمراجعة، بما يتناسب مع أهدافك ومستواك.
            </p>
          </div>
          <div className="flex flex-col justify-center text-[#1a5a81] text-[16px] sm:text-[18px] md:text-[24px] leading-relaxed md:leading-[32px] w-full font-medium">
            <p className="m-0" dir="auto">
              حافظ ليست مجرد أداة لتنظيم الحفظ، بل رفيق في رحلة القرآن، يساعدك على بناء عادة مستدامة، متابعة تقدمك، والاستمرار بخطوات ثابتة نحو إتقان ما حفظت.
            </p>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-[220px] sm:w-[258px] md:w-[406px] h-auto aspect-[258/196] relative shrink-0">
        <img
          alt="رسم توضيحي لمنصة حافظ"
          className="block w-full h-full object-contain"
          src={IMAGES.aboutIllustration}
        />
      </div>
    </section>
  );
}
