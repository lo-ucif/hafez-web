import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";
import { navLinks } from "../../data/navigation";
import { WHATSAPP_LINK } from "../../constants/contact";

const socialLinks = [
  {
    id: "whatsapp",
    label: "واتساب",
    href: WHATSAPP_LINK,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[24px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.67 20.27 9.74 20.27 11.91C20.27 16.46 16.58 20.15 12.04 20.15ZM16.55 14.43C16.3 14.31 15.08 13.71 14.85 13.62C14.62 13.54 14.46 13.5 14.29 13.75C14.13 14 13.65 14.57 13.5 14.74C13.36 14.9 13.21 14.93 12.96 14.8C12.71 14.68 11.91 14.41 10.96 13.57C10.22 12.91 9.72 12.1 9.58 11.85C9.43 11.6 9.56 11.47 9.69 11.35C9.8 11.24 9.93 11.07 10.06 10.92C10.18 10.77 10.22 10.67 10.31 10.5C10.39 10.33 10.35 10.19 10.29 10.06C10.22 9.94 9.73 8.73 9.52 8.24C9.32 7.75 9.12 7.82 8.97 7.81C8.83 7.8 8.66 7.8 8.5 7.8C8.33 7.8 8.07 7.86 7.84 8.11C7.61 8.36 6.97 8.96 6.97 10.18C6.97 11.41 7.86 12.59 7.99 12.76C8.11 12.92 9.75 15.45 12.25 16.53C12.84 16.79 13.3 16.94 13.66 17.06C14.26 17.25 14.8 17.22 15.23 17.16C15.71 17.09 16.71 16.55 16.92 15.98C17.13 15.4 17.13 14.91 17.06 14.8C17 14.7 16.8 14.55 16.55 14.43Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "فيسبوك",
    href: "https://facebook.com",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[24px]"
      >
        <path
          d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "إنستغرام",
    href: "https://instagram.com",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[24px]"
      >
        <path
          d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "لينكد إن",
    href: "https://linkedin.com",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[24px]"
      >
        <path
          d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

/**
 * Site Footer matching Figma node 337:196 ("Footer / 1 /")
 */
export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-[#1a5a81] relative w-full overflow-hidden flex flex-col items-center px-6 md:px-[40px] py-12 md:py-[40px]"
      data-node-id="337:196"
      data-name="Footer / 1 /"
    >
      {/* Decorative Arabic Calligraphy Watermark matching Figma node 337:197 */}
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[1953px] top-[-822.17px] pointer-events-none z-0"
        data-node-id="337:197"
        data-name="خلفية الحروف العربية2 1"
        aria-hidden="true"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover opacity-[0.03] pointer-events-none size-full"
          src={IMAGES.arabicBg}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-10 md:gap-[40px] items-center justify-center max-w-[1280px] w-full relative z-10"
        data-node-id="337:198"
        data-name="Container"
      >
        {/* Top 3 Columns Row matching Figma node 337:199 */}
        <div
          className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[40px] items-start justify-between w-full"
          data-node-id="337:199"
          data-name="Links"
        >
          {/* Column 1 (Right in RTL): Hafez Logo + Newsletter Text matching Figma node 337:225 */}
          <div
            className="flex flex-col gap-[16px] items-start w-full md:w-[404px] shrink-0 text-right"
            data-node-id="337:225"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-[100px] w-[118px] relative shrink-0 cursor-pointer"
              data-node-id="337:226"
            >
              <img
                alt="شعار حافظ"
                className="block size-full object-contain object-right"
                src={IMAGES.footerLogo}
              />
            </motion.div>

            {/* Newsletter text */}
            <div
              className="flex flex-col gap-[12px] items-start w-full"
              data-node-id="337:242"
              data-name="Newsletter"
            >
              <p
                className="font-['Tajawal:Regular'] font-normal text-[18px] leading-[1.6] text-white text-right w-full m-0"
                data-node-id="337:277"
              >
                اشترك في نشرتنا لتصلك أحدث المبادرات المجتمعية والاستراتيجيات
                المؤسسية لجمعية الإرشاد والإصلاح
              </p>
              <div
                className="flex flex-col items-start w-full"
                data-node-id="337:278"
                data-name="Actions"
              >
                <p
                  className="font-['Tajawal:Regular'] text-[12px] leading-[1.6] text-white/70 text-right w-full m-0"
                  data-node-id="337:279"
                >
                  من خلال الاشتراك، أنت توافق على سياسة الخصوصية الخاصة بنا
                  وتوافق على تلقي التحديثات
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 (Middle in RTL): Social Links "تابعنا" matching Figma node 337:213 */}
          <div
            className="flex flex-col gap-[16px] items-start w-full sm:w-[220px] md:w-[260px] shrink-0"
            data-node-id="337:213"
            data-name="Column"
          >
            <h4
              className="font-['Tajawal:Bold'] font-bold text-white text-[18px] leading-[1.5] text-right w-full m-0"
              data-node-id="337:214"
            >
              تابعنا
            </h4>

            <div
              className="flex flex-col items-start w-full"
              data-node-id="337:215"
              data-name="Social Links"
            >
              {socialLinks.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: -4, color: "#cab178" }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex gap-[12px] items-center justify-start py-[8px]
                    text-white hover:text-[#cab178] no-underline transition-colors
                  "
                >
                  <div className="shrink-0 size-[24px]" aria-hidden="true">
                    {item.svg}
                  </div>
                  <span className="font-['Tajawal:Regular'] text-[16px] leading-[1.5] whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 3 (Left in RTL): Quick Links "روابط سريعة" matching Figma node 337:200 */}
          <div
            className="flex flex-col gap-[16px] items-start w-full sm:w-[220px] md:w-[260px] shrink-0"
            data-node-id="337:200"
            data-name="Column"
          >
            <h4
              className="font-['Tajawal:Bold'] font-bold text-white text-[18px] leading-[1.5] text-right w-full m-0"
              data-node-id="337:201"
            >
              روابط سريعة
            </h4>

            <div
              className="flex flex-col items-start w-full"
              data-node-id="337:202"
              data-name="Footer Links"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    const targetId = link.href.replace("#", "");
                    const el = document.getElementById(targetId);
                    if (el) {
                      e.preventDefault();
                      const headerHeight = window.innerWidth < 768 ? 60 : 90;
                      const currentScroll =
                        window.scrollY || window.pageYOffset || 0;
                      const targetY =
                        el.getBoundingClientRect().top +
                        currentScroll -
                        headerHeight;
                      window.scrollTo({
                        top: Math.max(0, targetY),
                        behavior: "smooth",
                      });
                      window.history.pushState(null, "", link.href);
                    }
                  }}
                  whileHover={{ x: -4, color: "#cab178" }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex items-center justify-start py-[8px] w-full
                    text-white/90 hover:text-[#cab178] no-underline transition-colors
                    font-['Tajawal:Regular'] text-[16px] leading-[1.5] text-right
                  "
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright Row matching Figma node 337:280 */}
        <div
          className="flex flex-col gap-[32px] items-start w-full"
          data-node-id="337:280"
          data-name="Credits"
        >
          {/* Divider line matching Figma node 337:281 */}
          <div
            className="w-full border-t border-white/20 shrink-0"
            data-node-id="337:281"
            data-name="Divider"
          />

          {/* Row matching Figma node 337:282 */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full text-white"
            data-node-id="337:282"
            data-name="Row"
          >
            {/* Right in RTL: "© 2026   منصة حافظ. جميع الحقوق محفوظة" */}
            <p
              className="font-['Tajawal:Regular'] text-[16px] leading-[1.5] m-0 text-white/90"
              data-node-id="337:284"
            >
              © 2026 منصة حافظ. جميع الحقوق محفوظة
            </p>

            {/* Left in RTL: الأحكام والشروط | سياسة الخصوصية */}
            <div
              className="flex items-center gap-2.5 sm:gap-3 text-white/75 font-['Tajawal:Regular'] text-[15px] sm:text-[16px] leading-[1.5]"
              data-node-id="337:283"
            >
              <span className="hover:text-white transition-colors cursor-pointer select-none">
                الأحكام والشروط
              </span>
              <span className="text-[#cab178] font-bold select-none text-[15px]" aria-hidden="true">
                |
              </span>
              <span className="hover:text-white transition-colors cursor-pointer select-none">
                سياسة الخصوصية
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
