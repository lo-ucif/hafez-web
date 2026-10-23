import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "طلب نسخة تجريبية",
    message: "",
    agreeTerms: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "طلب نسخة تجريبية",
      message: "",
      agreeTerms: true,
    });
  };

  return (
    <section
      id="contact"
      aria-label="تواصل معنا"
      className="
        content-stretch flex items-start justify-center overflow-clip
        px-4 sm:px-8 md:px-[80px] py-[50px] md:py-[70px] relative shrink-0 w-full bg-white
      "
      dir="rtl"
    >
      {/* Huge calligraphy watermark text matching Figma node 276:236 */}
      <div
        className="
          absolute pointer-events-none select-none text-[rgba(0,0,0,0.03)]
          font-['Almarai:Bold'] text-[240px] sm:text-[360px] md:text-[532px]
          leading-none -bottom-10 left-10 md:left-[100px] z-0
        "
        dir="ltr"
        aria-hidden="true"
      >
        حافظ
      </div>

      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-12 lg:gap-[60px] items-start justify-between relative z-10">
        {/* ── Form Section matching Figma node 276:186 ── */}
        <div className="w-full lg:w-[600px] flex flex-col relative shrink-0">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-16 flex flex-col items-center justify-center text-center gap-4 bg-gray-50/60 p-8 rounded-[12px] border border-gray-200"
              >
                <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-['Almarai:Bold'] text-[24px] text-gray-800 m-0">
                  تم استلام رسالتك بنجاح!
                </h4>
                <p className="font-['Tajawal:Regular'] text-[16px] text-gray-600 max-w-md m-0">
                  شكراً لتواصلك معنا. سنقوم بالرد عليك عبر البريد الإلكتروني أو الهاتف في أقرب وقت.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-[8px] bg-[#1a5a81] text-white font-['Almarai:Bold'] text-[16px] hover:bg-[#154e70] transition-colors cursor-pointer"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-[20px] w-full"
              >
                {/* Inputs Row 1: First Name & Last Name matching Figma node 276:187 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] w-full">
                  {/* First Name */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="contact-fname"
                      className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                    >
                      الاسم الأول
                    </label>
                    <input
                      id="contact-fname"
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="
                        h-[48px] px-3.5 rounded-[4px] border border-black/40
                        focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                        font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all
                      "
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="contact-lname"
                      className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                    >
                      اسم العائلة
                    </label>
                    <input
                      id="contact-lname"
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="
                        h-[48px] px-3.5 rounded-[4px] border border-black/40
                        focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                        font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all
                      "
                    />
                  </div>
                </div>

                {/* Inputs Row 2: Email & Phone matching Figma node 276:196 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] w-full">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="contact-email"
                      className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="
                        h-[48px] px-3.5 rounded-[4px] border border-black/40 text-right
                        focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                        font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all
                      "
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label
                      htmlFor="contact-phone"
                      className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="
                        h-[48px] px-3.5 rounded-[4px] border border-black/40 text-right
                        focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                        font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all
                      "
                    />
                  </div>
                </div>

                {/* Row 3: Select subject matching Figma node 276:205 */}
                <div className="flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="contact-subject"
                    className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                  >
                    موضوع التواصل
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="
                      h-[43px] px-3.5 rounded-[4px] border border-black/40
                      focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                      font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all cursor-pointer
                    "
                  >
                    <option value="طلب نسخة تجريبية">طلب نسخة تجريبية</option>
                    <option value="استفسار عن الأسعار والميزات">استفسار عن الأسعار والميزات</option>
                    <option value="تسجيل مدرسة قرآنية">تسجيل مدرسة قرآنية</option>
                    <option value="تسجيل مقرأة إلكترونية">تسجيل مقرأة إلكترونية</option>
                    <option value="دعم فني ومساعدة">دعم فني ومساعدة</option>
                  </select>
                </div>

                {/* Row 4: Message textarea matching Figma node 276:210 */}
                <div className="flex flex-col gap-1.5 w-full">
                  <label
                    htmlFor="contact-message"
                    className="font-['Tajawal:Regular'] text-[18px] text-black text-right"
                  >
                    رسالة
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="
                      h-[180px] p-3.5 rounded-[4px] border border-black/40 resize-y
                      focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none
                      font-['Tajawal:Regular'] text-[16px] text-black bg-white transition-all
                    "
                  />
                </div>

                {/* Row 5: Checkbox matching Figma node 276:216 */}
                <div className="flex items-center gap-3 justify-start pt-1">
                  <input
                    type="checkbox"
                    id="contact-agree"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="size-[18px] rounded-[2px] border border-black accent-[#1a5a81] cursor-pointer"
                  />
                  <label
                    htmlFor="contact-agree"
                    className="font-['Tajawal:Regular'] text-[16px] text-black cursor-pointer select-none"
                  >
                    أقبل شروط الموقع
                  </label>
                </div>

                {/* Row 6: Submit Button matching Figma node 276:219 */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      bg-[#1a5a81] hover:bg-[#154e70] border border-white
                      h-[47px] w-[98px] rounded-[8px]
                      flex items-center justify-center
                      text-white font-['Almarai:Bold'] font-bold text-[18px]
                      cursor-pointer shadow-md transition-colors
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? "..." : "إرسال"}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* ── Info & Contact Details Section matching Figma node 276:221 ── */}
        <div className="w-full lg:w-[480px] flex flex-col gap-6 items-start text-right">
          <p className="font-['Almarai:Regular'] text-[24px] text-black leading-[1.5] m-0" dir="auto">
            نحن هنا للاستماع إليك
          </p>

          <div className="flex flex-col gap-2">
            <h2
              className="font-['Almarai:Bold'] font-bold text-[48px] sm:text-[60px] text-[#1a5a81] tracking-[-0.6px] leading-[1.2] m-0"
              dir="auto"
            >
              تواصل معنا:
            </h2>
            <p className="font-['Tajawal:Regular'] text-[18px] sm:text-[20px] text-black leading-[1.5] m-0" dir="auto">
              شارك احتياجاتك سنقدم لك حلولاً مخصصة
            </p>
          </div>

          <div className="flex flex-col gap-4 py-2 w-full">
            {/* Email Row matching Figma node 276:227 */}
            <div className="flex gap-3 items-center justify-start">
              <div className="size-[24px] shrink-0 text-[#1a5a81]">
                <img alt="" className="block size-full" src={IMAGES.iconMail} />
              </div>
              <a
                href="mailto:info@mnst_hafez.com"
                className="font-['Tajawal:Regular'] text-[18px] sm:text-[20px] text-black no-underline hover:text-[#1a5a81] transition-colors"
                dir="ltr"
              >
                info@mnst_hafez.com
              </a>
            </div>

            {/* Phone Row matching Figma node 276:230 */}
            <div className="flex gap-3 items-center justify-start">
              <div className="size-[24px] shrink-0 text-[#1a5a81]">
                <img alt="" className="block size-full" src={IMAGES.iconPhone} />
              </div>
              <a
                href="tel:0780280208"
                className="font-['Tajawal:Regular'] text-[18px] sm:text-[20px] text-black underline hover:text-[#1a5a81] transition-colors"
                dir="ltr"
              >
                07 802 802 08
              </a>
            </div>

            {/* Location Row matching Figma node 276:233 */}
            <div className="flex gap-3 items-center justify-start">
              <div className="size-[24px] shrink-0 text-[#1a5a81]">
                <img alt="" className="block size-full" src={IMAGES.iconLocation} />
              </div>
              <p className="font-['Tajawal:Regular'] text-[18px] sm:text-[20px] text-black m-0" dir="auto">
                الجزائر العاصمة ، الجزائر
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
