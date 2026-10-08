import { IMAGES } from '../../constants/images';
import { socialLinks, footerQuickLinks } from '../../data/navigation';

/**
 * Site-wide Footer.
 * Sections: quick links, social links, newsletter subscription, copyright.
 * Fully responsive for mobile phone mode and desktop mode.
 */
export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        bg-[#15455e] relative w-full overflow-clip
        flex flex-col gap-12 md:gap-[80px] items-center
        pb-10 md:pb-[80px] pt-14 md:pt-[120px] px-4 sm:px-8 md:px-[40px]
      "
    >
      {/* Logo watermark top-right */}
      <div className="absolute h-[80px] sm:h-[110px] right-4 sm:right-[42px] top-4 sm:top-[25px] w-[95px] sm:w-[129px] opacity-80 pointer-events-none">
        <img
          alt="شعار حافظ"
          className="absolute block inset-0 max-w-none size-full object-contain"
          src={IMAGES.footerLogo}
        />
      </div>

      <div className="flex flex-col gap-10 md:gap-[80px] items-center justify-center max-w-[1280px] w-full relative z-10">
        {/* ── Main columns ── */}
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[40px] items-start justify-between w-full">

          {/* Social Links column */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full min-w-[260px]">
            <p className="font-['Tajawal:Bold'] text-[18px] text-white leading-[1.5] w-full m-0" dir="auto">
              تابعنا
            </p>
            <nav aria-label="روابط التواصل الاجتماعي" className="w-full">
              <ul className="flex flex-col items-end w-full list-none m-0 p-0">
                {socialLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      className="flex gap-3 items-center justify-end py-2 w-full no-underline text-white/90 hover:text-white hover:translate-x-[-2px] transition-all"
                      aria-label={link.label}
                    >
                      <span className="font-['Tajawal:Regular'] text-[15px] sm:text-[16px] leading-[1.5] whitespace-nowrap" dir="auto">
                        {link.label}
                      </span>
                      <img
                        src={link.icon}
                        alt={link.label}
                        className="size-[22px] sm:size-[24px] shrink-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links column */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full min-w-[260px]">
            <p className="font-['Tajawal:Bold'] text-[18px] text-white leading-[1.5] w-full m-0" dir="auto">
              روابط سريعة
            </p>
            <nav aria-label="روابط سريعة" className="w-full">
              <ul className="flex flex-col items-start w-full list-none m-0 p-0">
                {footerQuickLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      dir="auto"
                      className="
                        block py-2 w-full text-right
                        font-['Tajawal:Regular'] text-[15px] sm:text-[16px] text-white/90
                        hover:text-white hover:underline transition-all
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter column */}
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 items-start justify-center w-full min-w-[280px] max-w-[440px]">
            <p
              dir="auto"
              className="font-['Tajawal:Regular'] text-[16px] sm:text-[18px] text-white leading-relaxed text-right w-full m-0"
            >
              اشترك في نشرتنا لتصلك أحدث المبادرات المجتمعية والاستراتيجيات المؤسسية لجمعية الإرشاد والإصلاح
            </p>

            <div className="flex flex-col gap-3 items-end justify-center w-full">
              {/* Email form */}
              <form
                className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-end w-full"
                onSubmit={(e) => e.preventDefault()}
                aria-label="نموذج الاشتراك في النشرة"
              >
                <input
                  type="email"
                  dir="rtl"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="
                    bg-white/10 border border-white/20 rounded-[4px]
                    px-3 py-2 text-white
                    font-['Tajawal:Regular'] text-[15px] sm:text-[16px]
                    placeholder:text-white/60 text-right
                    outline-none focus:border-white/60 transition-colors flex-1
                  "
                />
                <button
                  type="submit"
                  className="
                    border border-white/30 rounded-[4px]
                    px-5 py-2
                    font-['Tajawal:Bold'] text-[15px] sm:text-[16px] text-white
                    whitespace-nowrap cursor-pointer
                    hover:bg-white/15 active:scale-95 transition-all
                  "
                >
                  اشترك الان
                </button>
              </form>
              <p
                dir="auto"
                className="font-['Tajawal:Regular'] text-[12px] text-white/70 leading-normal text-right w-full m-0"
              >
                من خلال الاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات
              </p>
            </div>
          </div>
        </div>

        {/* ── Credits / copyright bar ── */}
        <div className="flex flex-col gap-6 items-start w-full">
          {/* Divider */}
          <div className="h-0 w-full relative shrink-0">
            <div className="absolute inset-[-1px_0_0_0]">
              <img
                alt=""
                aria-hidden="true"
                className="block max-w-none size-full"
                src={IMAGES.footerDivider}
              />
            </div>
          </div>

          {/* Copyright row */}
          <div
            dir="auto"
            className="
              flex flex-col sm:flex-row gap-3 items-center justify-between
              text-white text-center sm:text-right w-full leading-normal
            "
          >
            <p className="font-['Tajawal:Bold'] text-[15px] sm:text-[17px] m-0" dir="auto">
              من إنجاز منصة حافظ
            </p>
            <p className="font-['Tajawal:Regular'] text-[14px] sm:text-[16px] text-white/80 m-0" dir="auto">
              © 2026 منصة حافظ. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
