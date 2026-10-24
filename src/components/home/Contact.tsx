import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";

/**
 * Contact section strictly matching Figma node 329:350 ("section 12").
 * Supports PC (desktop), tablet, and mobile with exact styling:
 * - Top pill badge "تواصل معنا"
 * - Soft light-blue polygonal background shape
 * - Left column: "تواصل معنا:", description, and cheerful robot mascot sending paper plane
 * - Right column: Elevated white form card with input borders, terms checkbox, and submit button
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agreeTerms: false,
    });
  };

  return (
    <section
      id="contact"
      aria-label="تواصل معنا"
      className="bg-[#fefefe] w-full py-10 sm:py-14 md:py-18 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center relative overflow-hidden"
      data-node-id="329:350"
      data-name="section 12"
    >
      {/* Background Decorative Polygonal Shape (Figma node 337:101) */}
      <div
        className="hidden md:block absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-[1440px] h-[640px] pointer-events-none z-0"
        data-node-id="337:101"
      >
        <div className="w-full h-full scale-x-[-1] opacity-90">
          <img
            alt=""
            aria-hidden="true"
            className="w-full h-full object-fill block select-none"
            src={IMAGES.contactBgShape}
          />
        </div>
      </div>

      {/* Top Section Title Pill Badge (Figma node 329:352) */}
      <div className="relative z-10 mb-8 sm:mb-12 md:mb-14">
        <SectionTitle title="تواصل معنا" />
      </div>

      {/* Main Container: LTR on Desktop for Left/Right column placement matching Figma node 329:356 */}
      <div
        dir="ltr"
        className="
          relative z-10 w-full max-w-[1240px]
          flex flex-col lg:flex-row items-center lg:items-start justify-between
          gap-8 sm:gap-10 lg:gap-8 xl:gap-12
        "
        data-node-id="329:356"
      >
        {/* ── Left Column: Text + Robot Mascot (Figma nodes 329:378 & 337:148) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          dir="rtl"
          className="
            flex flex-col items-center lg:items-start text-center lg:text-right
            w-full lg:max-w-[488px] shrink-0
            gap-6 sm:gap-8 lg:gap-10
            pt-2 lg:pt-6
          "
          data-node-id="329:378"
        >
          {/* Heading */}
          <h2
            className="font-['Almarai'] font-bold text-[#1a5a81] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] tracking-[-0.6px] leading-[1.2] m-0"
            dir="auto"
            data-node-id="329:379"
          >
            تواصل معنا:
          </h2>

          {/* Description */}
          <p
            className="font-['Almarai'] font-normal text-[17px] sm:text-[20px] md:text-[22px] lg:text-[25px] leading-[1.6] text-black/60 m-0 max-w-[488px]"
            dir="auto"
            data-node-id="329:380"
          >
            هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟ اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
          </p>

          {/* Robot Mascot Sending Paper Plane (Figma node 337:148) */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="
              relative shrink-0 select-none
              w-[220px] sm:w-[260px] md:w-[290px] lg:w-[316px]
              h-auto mt-2 lg:mt-4
            "
            data-node-id="337:148"
            data-name="Cheerful Robot Sending a Paper Plane"
          >
            <motion.img
              animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              alt="روبوت حافظ يرسل رسالة"
              className="w-full h-auto object-contain block drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
              src={IMAGES.contactRobot}
            />
          </motion.div>
        </motion.div>

        {/* ── Right Column: Form Card (Figma node 329:357) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          dir="rtl"
          className="
            bg-white w-full max-w-[601px] shrink-0
            rounded-[24px] sm:rounded-[30px]
            shadow-[0px_10px_40px_rgba(0,0,0,0.1),0px_0px_34px_rgba(0,0,0,0.08)]
            px-5 sm:px-8 md:px-[30px] py-7 sm:py-9 md:py-[40px]
            flex flex-col gap-5 sm:gap-[20px] relative
          "
          data-node-id="329:357"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <svg
                    className="size-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="font-['Almarai'] font-bold text-[24px] text-gray-800 m-0">
                  تم استلام رسالتك بنجاح!
                </h4>
                <p className="font-['Almarai'] text-[16px] text-gray-600 max-w-md m-0 leading-relaxed">
                  شكراً لتواصلك معنا. سنقوم بالرد عليك عبر البريد الإلكتروني أو الهاتف في أقرب وقت.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-[6px] bg-[#1a5a81] hover:bg-[#154e70] text-white font-['Almarai'] font-bold text-[18px] transition-colors cursor-pointer shadow-md"
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
                className="flex flex-col gap-4 sm:gap-[20px] w-full"
              >
                {/* الاسم الكامل (Figma node 329:358) */}
                <div className="h-[52px] sm:h-[60px] relative w-full" data-node-id="329:358">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/35 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-4 sm:px-[20px] font-['Almarai'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* البريد الالكتروني (Figma node 329:361) */}
                <div className="h-[52px] sm:h-[60px] relative w-full" data-node-id="329:361">
                  <input
                    type="email"
                    required
                    placeholder="البريد الالكتروني"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-4 sm:px-[20px] font-['Almarai'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* رقم الهاتف (Figma node 329:364) */}
                <div className="h-[52px] sm:h-[60px] relative w-full" data-node-id="329:364">
                  <input
                    type="tel"
                    required
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-4 sm:px-[20px] font-['Almarai'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الموضوع (Figma node 329:367) */}
                <div className="h-[52px] sm:h-[60px] relative w-full" data-node-id="329:367">
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-4 sm:px-[20px] font-['Almarai'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الرسالة (Figma node 329:370) */}
                <div className="h-[140px] sm:h-[165px] relative w-full" data-node-id="329:370">
                  <textarea
                    required
                    placeholder="الرسالة"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] p-4 sm:p-[18px] font-['Almarai'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors resize-none text-right"
                    dir="auto"
                  />
                </div>

                {/* أوافق على الشروط وسياسة الخصوصية (Figma node 329:373) */}
                <div
                  className="flex items-center gap-2.5 pt-1 w-full justify-start select-none"
                  data-node-id="329:373"
                >
                  <input
                    type="checkbox"
                    id="contact-terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="size-[19px] sm:size-[21px] rounded-[3px] border-[#a4a4a4] border-[1.5px] accent-[#1a5a81] cursor-pointer"
                  />
                  <label
                    htmlFor="contact-terms"
                    className="font-['Almarai'] font-normal text-[14px] sm:text-[16px] text-[#303030] cursor-pointer leading-none"
                    data-node-id="329:375"
                  >
                    أوافق على الشروط وسياسة الخصوصية
                  </label>
                </div>

                {/* زر الإرسال على اليمين (Figma node 329:376) */}
                <div className="flex justify-start pt-2 w-full">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    data-node-id="329:376"
                    className="bg-[#1a5a81] hover:bg-[#154e70] h-[48px] sm:h-[51px] w-full sm:w-[199.57px] rounded-[6px] text-white font-['Almarai'] font-bold text-[20px] sm:text-[22px] flex items-center justify-center transition-all cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "..." : "ارسل الان"}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
