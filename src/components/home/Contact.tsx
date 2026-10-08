import { IMAGES } from '../../constants/images';
import Button from '../common/Button';

interface ContactInfoRowProps {
  icon: string;
  iconAlt: string;
  text: string;
  underline?: boolean;
}

function ContactInfoRow({ icon, iconAlt, text, underline = false }: ContactInfoRowProps) {
  return (
    <div className="flex gap-[10px] items-center justify-end w-full">
      <p
        className={`
          font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right
          leading-[1.5] whitespace-nowrap
          ${underline ? 'underline' : ''}
        `}
        dir="auto"
      >
        {text}
      </p>
      <img src={icon} alt={iconAlt} className="size-[24px] shrink-0" />
    </div>
  );
}

/**
 * Contact section — contact form + contact info panel side by side.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="تواصل معنا"
      className="
        content-center flex flex-wrap gap-0 items-center justify-center
        overflow-clip px-[80px] py-[50px]
        relative w-full
      "
      dir="rtl"
    >
      {/* ── Contact Form ── */}
      <div className="flex flex-[1_0_0] flex-col gap-[21.224px] items-end justify-center min-w-[300px] relative">
        <form
          className="flex flex-col gap-[21.224px] items-end w-full"
          onSubmit={(e) => e.preventDefault()}
          aria-label="نموذج التواصل"
          noValidate
        >
          {/* Row 1: First name + Last name */}
          <div className="content-center flex flex-wrap gap-[21.224px] items-center justify-center w-full">
            <div className="flex flex-[1_0_0] flex-col gap-[7.075px] items-end justify-center min-w-[265px]">
              <label htmlFor="firstName" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
                الاسم الأول
              </label>
              <input
                id="firstName"
                type="text"
                dir="rtl"
                className="border-[0.884px] border-black border-solid flex-1 min-h-[42px] rounded-[3.537px] w-full px-3 outline-none focus:border-[#1a5a81] transition-colors"
              />
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[7.075px] items-end justify-center min-w-[265px]">
              <label htmlFor="lastName" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
                اسم العائلة
              </label>
              <input
                id="lastName"
                type="text"
                dir="rtl"
                className="border-[0.884px] border-black border-solid h-[42.449px] rounded-[3.537px] w-full px-3 outline-none focus:border-[#1a5a81] transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="content-center flex flex-wrap gap-[21.224px] items-center justify-center w-full">
            <div className="flex flex-[1_0_0] flex-col gap-[7.075px] items-end justify-center min-w-[265px]">
              <label htmlFor="email" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                dir="rtl"
                className="border-[0.884px] border-black border-solid h-[44.217px] rounded-[3.537px] w-full px-3 outline-none focus:border-[#1a5a81] transition-colors"
              />
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[7.075px] items-end justify-center min-w-[265px]">
              <label htmlFor="phone" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
                رقم الهاتف
              </label>
              <input
                id="phone"
                type="tel"
                dir="ltr"
                className="border-[0.884px] border-black border-solid h-[44.217px] rounded-[3.537px] w-full px-3 outline-none focus:border-[#1a5a81] transition-colors"
              />
            </div>
          </div>

          {/* Subject select */}
          <div className="flex flex-col gap-[7.075px] items-center justify-center min-w-[265px] w-full">
            <label htmlFor="subject" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
              موضوع التواصل
            </label>
            <select
              id="subject"
              dir="rtl"
              defaultValue=""
              className="border-[0.884px] border-black border-solid h-[58px] rounded-[3.537px] w-full px-[10.612px] font-['Tajawal:Regular'] text-[20px] outline-none focus:border-[#1a5a81] transition-colors bg-white"
            >
              <option value="" disabled>اختر موضوع التواصل</option>
              <option value="demo">طلب عرض تجريبي</option>
              <option value="pricing">الأسعار</option>
              <option value="support">الدعم الفني</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          {/* Message textarea */}
          <div className="flex flex-col gap-[7.075px] items-center justify-center min-w-[265px] w-full">
            <label htmlFor="message" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black text-right leading-[1.5] w-full">
              رسالة
            </label>
            <textarea
              id="message"
              dir="rtl"
              rows={5}
              className="border-[0.884px] border-black border-solid h-[159.184px] rounded-[3.537px] w-full px-3 py-2 resize-y font-['Tajawal:Regular'] text-[20px] outline-none focus:border-[#1a5a81] transition-colors"
            />
          </div>

          {/* Terms checkbox */}
          <div className="flex items-center justify-between py-[3px] w-full">
            <input
              id="terms"
              type="checkbox"
              className="border-[0.884px] border-black border-solid rounded-[1.769px] size-[16px] cursor-pointer accent-[#1a5a81]"
            />
            <label htmlFor="terms" className="font-['Tajawal:Regular'] not-italic text-[20px] text-black leading-[1.5] cursor-pointer">
              أقبل شروط الموقع
            </label>
          </div>

          <Button variant="primary" size="md" className="rounded-[7.075px] w-[86.667px] h-[41.565px]">
            إرسال
          </Button>
        </form>
      </div>

      {/* ── Contact Info Panel ── */}
      <div className="flex flex-[1_0_0] flex-col gap-[10px] items-end justify-center min-w-[300px] relative">
        <p
          dir="auto"
          className="font-['Almarai:Regular'] not-italic text-[24px] text-black text-right leading-[1.5] whitespace-nowrap"
        >
          نحن هنا للاستماع إليك
        </p>

        <div className="flex flex-col gap-[10px] items-end justify-center p-[10px] w-full">
          <h2
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[60px] text-[#1a5a81] text-right tracking-[-0.6px] leading-[1.2] whitespace-nowrap"
          >
            {`تواصل معنا: `}
          </h2>
          <p dir="auto" className="font-['Tajawal:Regular'] text-[20px] text-black leading-[1.5] min-w-full w-[min-content]">
            شارك احتياجاتك سنقدم لك حلولاً مخصصة
          </p>
        </div>

        <div className="flex flex-col gap-[10px] items-end py-[8px] w-full">
          <ContactInfoRow
            icon={IMAGES.iconMail}
            iconAlt="البريد الإلكتروني"
            text="info@mnst_hafez.com"
          />
          <ContactInfoRow
            icon={IMAGES.iconPhone}
            iconAlt="الهاتف"
            text="07 802 802 08"
            underline
          />
          <ContactInfoRow
            icon={IMAGES.iconLocation}
            iconAlt="الموقع"
            text={` الجزائر العاصمة ، الجزائر`}
          />
        </div>
      </div>
    </section>
  );
}
