import { IMAGES } from '../../constants/images';
import { navLinks } from '../../data/navigation';
import Button from '../common/Button';
import ArabicBg from '../common/ArabicBg';

/**
 * Site-wide Navbar.
 * RTL layout (right-to-left) matching the Figma design.
 * Contains: logo, navigation links, auth buttons.
 */
export default function Navbar() {
  return (
    <header
      className="
        bg-[#1a5a81] relative w-full overflow-clip
        flex items-center justify-between
        h-[95.667px] px-[20px]
      "
    >
      {/* Auth buttons (LTR: rendered left side in RTL layout) */}
      <div className="flex items-center gap-[0]">
        {/* Login – transparent background, same colour as navbar */}
        <Button variant="primary" size="md">
          تسجيل الدخول
        </Button>
        {/* Register – white background */}
        <button
          type="button"
          className="
            bg-white text-[#1a5a81] cursor-pointer
            font-['Changa:SemiBold'] font-semibold
            text-[16px] leading-none
            px-[23px] py-[10px]
            transition-colors duration-200
            hover:bg-gray-100
          "
        >
          إنشاء حساب
        </button>
      </div>

      {/* Centre: nav links */}
      <nav aria-label="التنقل الرئيسي">
        <ul className="flex gap-[30px] items-center list-none m-0 p-0" dir="rtl">
          {navLinks.map((link) => (
            <li key={link.id} className="relative flex flex-col items-center gap-[5px]">
              <a
                href={link.href}
                dir="auto"
                className={`
                  font-['Almarai:Regular'] not-italic text-[20px] leading-[normal]
                  whitespace-nowrap no-underline transition-colors duration-200
                  hover:text-[#cab178]
                  ${link.isActive ? 'text-[#cab178]' : 'text-white'}
                `}
              >
                {link.label}
              </a>
              {link.isActive && (
                <span className="h-0 w-[30.27px] relative block">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-[-2.16px_0_0_0] block max-w-none size-full"
                    src={IMAGES.navUnderline}
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logo (right side for RTL) */}
      <a href="#home" aria-label="الصفحة الرئيسية" className="relative shrink-0 h-[56.75px] w-[66px]">
        <ArabicBg positionClass="inset-0" opacityClass="opacity-0" />
        <img
          alt=""
          aria-hidden="true"
          className="absolute h-[56.75px] left-[39.9px] top-0 w-[5.448px] max-w-none block"
          src={IMAGES.logoBarTop}
        />
        <img
          alt="شعار حافظ"
          className="absolute h-[41.612px] left-0 top-[8.15px] w-[37.218px] max-w-none block"
          src={IMAGES.logoPartHa}
        />
        <img
          alt=""
          aria-hidden="true"
          className="absolute h-[35.776px] left-[38.3px] top-[12.89px] w-[23.314px] max-w-none block"
          src={IMAGES.logoPartHin}
        />
        <img
          alt=""
          aria-hidden="true"
          className="absolute h-[19.551px] left-[40.81px] top-[29.03px] w-[25.722px] max-w-none block"
          src={IMAGES.logoBarBottom}
        />
      </a>
    </header>
  );
}
