import { IMAGES } from '../../constants/images';

/**
 * About section — platform description with illustration.
 * Corresponds to the "منصة ذكية" area below the hero.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="من نحن"
      className="
        content-center flex flex-wrap gap-[10px] items-center justify-center
        pb-[10px] pt-[100px] px-[60px]
        relative w-full
      "
      dir="rtl"
    >
      {/* Illustration */}
      <div className="h-[309px] relative shrink-0 w-[406.536px]">
        <img
          alt="رسم توضيحي لمنصة حافظ"
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.aboutIllustration}
        />
      </div>

      {/* Text content */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[50px] items-end min-w-[350px] relative">

        {/* Section badge */}
        <div className="flex items-center justify-end relative shrink-0">
          <div className="h-[53px] relative shrink-0 w-[227px]">
            <img alt="" aria-hidden="true" className="absolute block inset-0 max-w-none size-full" src={IMAGES.sectionBarLeft} />
          </div>
          <div className="h-[53px] relative shrink-0 w-[9px]">
            <img alt="" aria-hidden="true" className="absolute block inset-0 max-w-none size-full" src={IMAGES.sectionBarShort} />
          </div>
          <p
            dir="auto"
            className="
              -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2
              font-['Almarai:Bold'] not-italic text-[24px] text-center text-white
              whitespace-nowrap leading-none
            "
          >
            منصة ذكية
          </p>
        </div>

        {/* Body text */}
        <div
          className="
            font-['Almarai:Regular'] not-italic text-[24px] text-right
            flex flex-col gap-[30px] items-start w-full
          "
        >
          <div className="flex flex-col justify-center min-w-[350px] text-black w-full">
            <p className="leading-[32px] mb-0" dir="auto">
              من خلال منصة حافظ، نسعى إلى جعل رحلة حفظ القرآن الكريم ومراجعته أكثر سهولة وتنظيمًا
              واستمرارية. توفر المنصة بيئة تساعد المستخدمين على تنظيم الحفظ، متابعة التقدم، وتطوير
              عادة يومية ثابتة مع كتاب الله.
            </p>
            <p className="leading-[32px]" dir="auto">
              نؤمن أن الاستمرار هو أساس النجاح في رحلة الحفظ، لذلك صُممت حافظ لتساعدك على تنظيم
              وقتك، متابعة إنجازاتك، وتذكّرك بمهام الحفظ والمراجعة، بما يتناسب مع أهدافك ومستواك.
            </p>
          </div>

          <div className="flex flex-col justify-center text-[#1a5a81] w-full">
            <p className="leading-[32px]" dir="auto">
              حافظ ليست مجرد أداة لتنظيم الحفظ، بل رفيق في رحلة القرآن، يساعدك على بناء عادة
              مستدامة، متابعة تقدمك، والاستمرار بخطوات ثابتة نحو إتقان ما حفظت.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
