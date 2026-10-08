import { IMAGES } from '../../constants/images';
import { socialLinks, footerQuickLinks } from '../../data/navigation';

/**
 * Site-wide Footer.
 * Sections: quick links, social links, newsletter subscription, copyright.
 */
export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        bg-[#15455e] relative w-full overflow-clip
        flex flex-col gap-[80px] items-center
        pb-[80px] pt-[120px] px-[40px]
      "
    >
      {/* Logo watermark top-right */}
      <div className="absolute h-[110.085px] right-[41.94px] top-[24.77px] w-[129.061px]">
        <img
          alt="شعار حافظ"
          className="absolute block inset-0 max-w-none size-full"
          src={IMAGES.footerLogo}
        />
      </div>

      <div className="flex flex-col gap-[80px] items-center justify-center max-w-[1280px] w-full relative">
        {/* ── Main columns ── */}
        <div className="content-center flex flex-wrap gap-[30px_40px] items-center justify-center w-full">

          {/* Social Links column */}
          <div className="flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[300px]">
            <p className="font-['Tajawal:Bold'] text-[18px] text-white leading-[1.5] w-full" dir="auto">
              تابعنا
            </p>
            <nav aria-label="روابط التواصل الاجتماعي">
              <ul className="flex flex-col items-end w-full list-none m-0 p-0">
                {socialLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      className="flex gap-[12px] items-center justify-end py-[8px] w-full no-underline hover:opacity-80 transition-opacity"
                      aria-label={link.label}
                    >
                      <span className="font-['Tajawal:Regular'] text-[16px] text-white leading-[1.5] whitespace-nowrap" dir="auto">
                        {link.label}
                      </span>
                      <img
                        src={link.icon}
                        alt={link.label}
                        className="size-[24px] shrink-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links column */}
          <div className="flex flex-[1_0_0] flex-col gap-[16px] items-end min-w-[300px] overflow-clip">
            <p className="font-['Tajawal:Bold'] text-[18px] text-white leading-[1.5] w-full" dir="auto">
              روابط سريعة
            </p>
            <nav aria-label="روابط سريعة">
              <ul className="flex flex-col items-start w-full list-none m-0 p-0">
                {footerQuickLinks.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      dir="auto"
                      className="
                        block py-[8px] w-full text-right
                        font-['Tajawal:Regular'] text-[16px] text-white leading-[1.5]
                        no-underline hover:underline transition-all
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
          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-w-[300px]">
            <p
              dir="auto"
              className="font-['Tajawal:Regular'] text-[18px] text-white leading-[1.5] text-right w-full"
            >
              اشترك في نشرتنا لتصلك أحدث المبادرات المجتمعية والاستراتيجيات المؤسسية لجمعية الإرشاد والإصلاح
            </p>

            <div className="flex flex-col gap-[12px] items-end justify-center w-full">
              {/* Email form */}
              <form
                className="content-center flex flex-wrap gap-[20px] items-center justify-end w-full"
                onSubmit={(e) => e.preventDefault()}
                aria-label="نموذج الاشتراك في النشرة"
              >
                <button
                  type="submit"
                  className="
                    border border-[rgba(255,255,255,0.2)] border-solid
                    px-[20px] py-[8px]
                    font-['Tajawal:Bold'] text-[18px] text-white leading-[1.5]
                    whitespace-nowrap cursor-pointer
                    hover:bg-white/10 transition-colors duration-200
                  "
                >
                  اشترك الان
                </button>
                <input
                  type="email"
                  dir="rtl"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="
                    bg-transparent border border-[rgba(255,255,255,0.2)] border-solid
                    flex-[1_0_0] min-w-px px-[12px] py-[8px]
                    font-['Tajawal:Regular'] text-[18px] text-[rgba(255,255,255,0.6)]
                    text-right leading-[1.5]
                    outline-none focus:border-white/50 transition-colors
                  "
                />
              </form>
              <p
                dir="auto"
                className="font-['Tajawal:Regular'] text-[12px] text-white leading-[1.5] text-right w-full"
              >
                من خلال الاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات
              </p>
            </div>
          </div>
        </div>

        {/* ── Credits / copyright bar ── */}
        <div className="flex flex-col gap-[32px] items-start w-full">
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
              content-center flex flex-wrap gap-y-[64px] items-center justify-between
              text-white w-full whitespace-pre leading-[1.5]
            "
          >
            <p className="font-['Tajawal:Bold'] text-[17px]" dir="auto">
              {`من إنجاز  منصة حافظ`}
            </p>
            <p className="font-['Tajawal:Regular'] text-[16px]" dir="auto">
              {`© 2026   منصة حافظ. جميع الحقوق محفوظة`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
