import { useState } from 'react';
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
    <div className="flex gap-3 items-center justify-end w-full">
      <p
        className={`
          font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] md:text-[20px] text-black text-right
          leading-[1.5] whitespace-nowrap m-0
          ${underline ? 'underline' : ''}
        `}
        dir="auto"
      >
        {text}
      </p>
      <img src={icon} alt={iconAlt} className="size-[22px] sm:size-[24px] shrink-0" />
    </div>
  );
}

/**
 * Contact section — contact form + contact info panel.
 * Responsive for mobile mode and desktop mode.
 */
export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      id="contact"
      aria-label="تواصل معنا"
      className="
        flex flex-col-reverse lg:flex-row flex-wrap gap-10 lg:gap-16 items-center justify-center
        overflow-clip px-4 sm:px-8 md:px-[60px] py-10 md:py-[50px]
        relative w-full max-w-[1440px] mx-auto
      "
      dir="rtl"
    >
      {/* ── Contact Form ── */}
      <div className="flex flex-1 flex-col gap-5 items-end justify-center w-full min-w-[280px] max-w-[620px]">
        <form
          className="flex flex-col gap-4 sm:gap-5 items-end w-full"
          onSubmit={(e) => e.preventDefault()}
          aria-label="نموذج التواصل"
          noValidate
        >
          {/* Row 1: First name + Last name */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
            <div className="flex flex-1 flex-col gap-1.5 items-end justify-center">
              <label htmlFor="firstName" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
                الاسم الأول
              </label>
              <input
                id="firstName"
                type="text"
                dir="rtl"
                placeholder="محمد"
                className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] h-[44px] w-full px-3 text-right text-[16px] outline-none transition-colors"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 items-end justify-center">
              <label htmlFor="lastName" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
                اسم العائلة
              </label>
              <input
                id="lastName"
                type="text"
                dir="rtl"
                placeholder="بن علي"
                className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] h-[44px] w-full px-3 text-right text-[16px] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
            <div className="flex flex-1 flex-col gap-1.5 items-end justify-center">
              <label htmlFor="email" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                dir="ltr"
                placeholder="example@domain.com"
                className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] h-[44px] w-full px-3 text-left text-[16px] outline-none transition-colors"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 items-end justify-center">
              <label htmlFor="phone" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
                رقم الهاتف
              </label>
              <input
                id="phone"
                type="tel"
                dir="ltr"
                placeholder="07 80 00 00 00"
                className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] h-[44px] w-full px-3 text-left text-[16px] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="flex flex-col gap-1.5 items-end w-full">
            <label htmlFor="subject" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
              موضوع التواصل
            </label>
            <div className="relative w-full">
              <select
                id="subject"
                dir="rtl"
                className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] h-[44px] w-full px-3 pl-8 text-right text-[16px] bg-white appearance-none outline-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>اختر الخدمة أو الاستفسار</option>
                <option value="demo">طلب نسخة تجريبية</option>
                <option value="support">الدعم الفني</option>
                <option value="partnership">شراكة وتعاون</option>
                <option value="other">استفسار عام</option>
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <img alt="" aria-hidden="true" className="size-[20px]" src={IMAGES.galleryArrowSelect} />
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-1.5 items-end w-full">
            <label htmlFor="message" className="font-['Tajawal:Regular'] not-italic text-[16px] sm:text-[18px] text-black text-right w-full">
              رسالة
            </label>
            <textarea
              id="message"
              rows={4}
              dir="rtl"
              placeholder="اكتب رسالتك هنا..."
              className="border border-black/40 focus:border-[#1a5a81] rounded-[4px] w-full p-3 text-right text-[16px] outline-none resize-none transition-colors"
            />
          </div>

          {/* Terms checkbox */}
          <div className="flex items-center gap-3 w-full py-1">
            <input
              id="terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="size-4.5 accent-[#1a5a81] rounded cursor-pointer"
            />
            <label htmlFor="terms" className="font-['Tajawal:Regular'] text-[15px] sm:text-[17px] text-black cursor-pointer select-none">
              أقبل شروط الموقع
            </label>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="rounded-[7px] w-full sm:w-auto px-8"
          >
            إرسال
          </Button>
        </form>
      </div>

      {/* ── Contact Info Panel ── */}
      <div className="flex flex-1 flex-col gap-4 sm:gap-6 items-end justify-center w-full max-w-[500px]">
        <p className="font-['Almarai:Regular'] text-[18px] sm:text-[22px] md:text-[24px] text-black text-right m-0">
          نحن هنا للاستماع إليك
        </p>

        <div className="flex flex-col gap-2 items-end text-right w-full">
          <h2 className="font-['Almarai:Bold'] text-[32px] sm:text-[42px] md:text-[50px] text-[#1a5a81] leading-tight m-0">
            تواصل معنا:
          </h2>
          <p className="font-['Tajawal:Regular'] text-[16px] sm:text-[18px] md:text-[20px] text-black/80 m-0">
            شارك احتياجاتك سنقدم لك حلولاً مخصصة
          </p>
        </div>

        <div className="flex flex-col gap-3.5 items-end py-2 w-full">
          <ContactInfoRow
            icon={IMAGES.iconMail}
            iconAlt="أيقونة البريد"
            text="info@mnst_hafez.com"
          />
          <ContactInfoRow
            icon={IMAGES.iconPhone}
            iconAlt="أيقونة الهاتف"
            text="07 802 802 08"
            underline
          />
          <ContactInfoRow
            icon={IMAGES.iconLocation}
            iconAlt="أيقونة الموقع"
            text="الجزائر العاصمة ، الجزائر"
          />
        </div>
      </div>
    </section>
  );
}
