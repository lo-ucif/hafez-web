import { motion } from "framer-motion";
import { IMAGES } from "../../constants/images";

const socialLinks = [
  {
    id: "whatsapp",
    label: "واتساب",
    href: "https://wa.me/",
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
          d="M17.472 14.382C17.18 14.236 15.748 13.53 15.482 13.433C15.215 13.336 15.021 13.287 14.827 13.579C14.633 13.871 14.075 14.526 13.905 14.721C13.735 14.915 13.565 14.939 13.274 14.793C12.983 14.647 12.046 14.34 10.934 13.349C10.068 12.578 9.483 11.626 9.313 11.334C9.143 11.042 9.295 10.884 9.441 10.739C9.572 10.608 9.733 10.398 9.879 10.228C10.024 10.058 10.073 9.936 10.17 9.742C10.267 9.547 10.218 9.377 10.145 9.231C10.073 9.085 9.49 7.651 9.247 7.067C9.011 6.498 8.772 6.576 8.592 6.567L8.034 6.558C7.84 6.558 7.524 6.631 7.257 6.923C6.99 7.215 6.237 7.92 6.237 9.354C6.237 10.789 7.281 12.174 7.427 12.369C7.573 12.563 9.479 15.503 12.404 16.764C13.1 17.065 13.644 17.245 14.067 17.379C14.767 17.602 15.405 17.57 15.909 17.495C16.471 17.411 17.64 16.787 17.883 16.106C18.126 15.425 18.126 14.841 18.053 14.721C17.98 14.6 17.763 14.528 17.472 14.382ZM12.043 21.75C10.323 21.75 8.718 21.288 7.327 20.463L3 21.6L4.161 17.378C3.218 15.918 2.667 14.178 2.667 12.308C2.667 7.172 6.871 2.992 12.046 2.992C14.551 2.994 16.902 3.972 18.671 5.746C20.44 7.521 21.415 9.878 21.413 12.385C21.41 17.524 17.209 21.75 12.043 21.75Z"
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

const quickLinks = [
  { id: "about", label: "عن المنصة", href: "#home" },
  { id: "features", label: "مميزات النظام", href: "#features" },
  { id: "roles", label: "الأدوار في النظام", href: "#roles" },
  { id: "gallery", label: "معرض النظام", href: "#gallery" },
  { id: "testimonials", label: "آراء المستخدمين", href: "#testimonials" },
  { id: "contact", label: "تواصل معنا", href: "#contact" },
];

/**
 * Site Footer matching Figma node 196:572 ("Footer / 1 /")
 */
export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-[#1a5a81] relative w-full overflow-hidden flex flex-col items-center px-6 md:px-[40px] py-12 md:py-[60px]"
      data-node-id="196:572"
      data-name="Footer / 1 /"
    >
      {/* Decorative Arabic Calligraphy Watermark matching Figma node 279:512 */}
      <div
        className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[1953px] top-[-822.17px] pointer-events-none z-0"
        data-node-id="279:512"
        data-name="خلفية الحروف العربية2 1"
        aria-hidden="true"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover opacity-[0.04] pointer-events-none size-full"
          src={IMAGES.arabicBg}
        />
      </div>

      <div
        className="flex flex-col gap-10 md:gap-[40px] items-center justify-center max-w-[1280px] w-full relative z-10"
        data-node-id="196:589"
        data-name="Container"
      >
        {/* Top 3 Columns Row matching Figma node 201:1376 */}
        <div
          className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[40px] items-start justify-between w-full"
          data-node-id="201:1376"
          data-name="Links"
        >
          {/* Column 1 (Right in RTL): Hafez Logo matching Figma node 201:1414 */}
          <div
            className="flex items-center justify-start w-full md:w-auto shrink-0"
            data-node-id="201:1414"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-[180px] sm:h-[210px] md:h-[235.42px] w-[210px] sm:w-[245px] md:w-[276px] relative cursor-pointer"
            >
              <img
                alt="شعار حافظ"
                className="absolute block inset-0 max-w-none size-full object-contain"
                src={IMAGES.heroLogo}
              />
            </motion.div>
          </div>

          {/* Column 2 (Middle in RTL): Social Links "تابعنا" matching Figma node 201:1377 */}
          <div
            className="flex flex-col gap-[16px] items-start w-full sm:w-[260px] md:w-[300px] shrink-0"
            data-node-id="201:1377"
            data-name="Column"
          >
            <h4
              className="font-['Tajawal:Bold'] font-bold text-white text-[18px] leading-[1.5] text-right w-full m-0"
              data-node-id="201:1378"
            >
              تابعنا
            </h4>

            <div
              className="flex flex-col items-start w-full"
              data-node-id="201:1379"
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
                    flex gap-[12px] items-center justify-start py-[8px] w-full
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

          {/* Column 3 (Left in RTL): Quick Links "روابط سريعة" matching Figma node 201:1395 */}
          <div
            className="flex flex-col gap-[16px] items-start w-full sm:w-[260px] md:w-[300px] shrink-0"
            data-node-id="201:1395"
            data-name="Column"
          >
            <h4
              className="font-['Tajawal:Bold'] font-bold text-white text-[18px] leading-[1.5] text-right w-full m-0"
              data-node-id="201:1396"
            >
              روابط سريعة
            </h4>

            <div
              className="flex flex-col items-start w-full"
              data-node-id="201:1397"
              data-name="Footer Links"
            >
              {quickLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
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

        {/* Bottom Credits & Copyright Row matching Figma node 196:666 */}
        <div
          className="flex flex-col gap-[32px] items-start w-full"
          data-node-id="196:666"
          data-name="Credits"
        >
          {/* Divider line matching Figma node 196:667 */}
          <div
            className="w-full border-t border-white/20 shrink-0"
            data-node-id="196:667"
            data-name="Divider"
          />

          {/* Row matching Figma node 196:668 */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full text-white"
            data-node-id="196:668"
            data-name="Row"
          >
            {/* Right in RTL: "© 2026 منصة حافظ. جميع الحقوق محفوظة" */}
            <p
              className="font-['Tajawal:Regular'] text-[16px] leading-[1.5] m-0 text-white/90"
              data-node-id="196:670"
            >
              © 2026 منصة حافظ. جميع الحقوق محفوظة
            </p>

            {/* Left in RTL: "من إنجاز منصة حافظ" */}
            <p
              className="font-['Tajawal:Bold'] font-bold text-[17px] leading-[1.5] m-0 text-white"
              data-node-id="196:669"
            >
              من إنجاز منصة حافظ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
