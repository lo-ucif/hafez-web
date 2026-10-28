import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";

/**
 * Contact section strictly matching Figma node 329:350 ("section 12").
 * Supports PC (desktop), tablet, and mobile with exact styling:
 * - Top section title matching previous design (SectionTitle with gold accent line)
 * - Soft light-blue background (#EEF3F7)
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
      className="bg-[#EEF3F7] w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center relative overflow-hidden"
      data-node-id="329:350"
      data-name="section 12"
    >
      {/* Top Section Title matching previous design (Figma node 236:60) */}
      <div className="relative z-10 mb-8 sm:mb-12 md:mb-14">
        <SectionTitle title="تواصل معنا" />
      </div>

      {/* Main Container: LTR on Desktop for Left/Right column placement matching Figma node 329:356 */}
      <div
        dir="ltr"
        className="
          relative z-10 w-full max-w-[1200px]
          flex flex-col lg:flex-row items-center lg:items-start justify-between
          gap-10 sm:gap-12 lg:gap-8 xl:gap-14
        "
        data-node-id="329:356"
      >
        {/* ── Left Column: Text + Robot Mascot (Figma nodes 329:378 & 337:148) ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          dir="rtl"
          className="
            flex flex-col items-center lg:items-start text-center lg:text-right
            w-full lg:max-w-[480px] shrink-0
            gap-4 sm:gap-6
            pt-2 lg:pt-4
          "
          data-node-id="329:378"
        >
          {/* Heading */}
          {/* <h2
            className="font-['Almarai'] font-bold text-[#1a5a81] text-[34px] sm:text-[42px] md:text-[48px] tracking-tight leading-[1.2] m-0"
            dir="auto"
            data-node-id="329:379"
          >
            تواصل معنا:
          </h2> */}

          {/* Description */}
          <p
            className="font-['Almarai'] font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-gray-600 m-0 max-w-[460px]"
            dir="auto"
            data-node-id="329:380"
          >
            هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟ اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
          </p>

          {/* Robot Mascot Sending Paper Plane (Figma node 337:148) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="
              relative shrink-0 select-none
              w-[220px] sm:w-[260px] md:w-[290px] lg:w-[310px]
              h-auto mt-2 lg:mt-4 self-center lg:self-start
            "
            data-node-id="337:148"
            data-name="Cheerful Robot Sending a Paper Plane"
          >
            <motion.img
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              alt="روبوت حافظ يرسل رسالة"
              className="w-full h-auto object-contain block drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
              src={IMAGES.contactRobot}
            />
          </motion.div>
        </motion.div>

        {/* ── Right Column: Form Card (Figma node 329:357) ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          dir="rtl"
          className="
            bg-white w-full max-w-[560px] shrink-0
            rounded-[20px] sm:rounded-[24px]
            shadow-[0px_10px_35px_rgba(0,0,0,0.06),0px_2px_12px_rgba(0,0,0,0.04)]
            px-5 sm:px-8 py-6 sm:py-8
            flex flex-col gap-4 sm:gap-5 relative
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
                className="flex flex-col gap-3.5 sm:gap-4 w-full"
              >
                {/* الاسم الكامل (Figma node 329:358) */}
                <div className="h-[50px] sm:h-[54px] relative w-full" data-node-id="329:358">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[6px] px-4 font-['Almarai'] text-[15px] sm:text-[16px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    dir="auto"
                  />
                </div>

                {/* البريد الإلكتروني (Figma node 329:361) */}
                <div className="h-[50px] sm:h-[54px] relative w-full" data-node-id="329:361">
                  <input
                    type="email"
                    required
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[6px] px-4 font-['Almarai'] text-[15px] sm:text-[16px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    dir="auto"
                  />
                </div>

                {/* رقم الهاتف (Figma node 329:364) */}
                <div className="h-[50px] sm:h-[54px] relative w-full" data-node-id="329:364">
                  <input
                    type="tel"
                    required
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[6px] px-4 font-['Almarai'] text-[15px] sm:text-[16px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    dir="auto"
                  />
                </div>

                {/* الموضوع (Figma node 329:367) */}
                <div className="h-[50px] sm:h-[54px] relative w-full" data-node-id="329:367">
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[6px] px-4 font-['Almarai'] text-[15px] sm:text-[16px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    dir="auto"
                  />
                </div>

                {/* الرسالة (Figma node 329:370) */}
                <div className="h-[140px] sm:h-[160px] relative w-full" data-node-id="329:370">
                  <textarea
                    required
                    placeholder="الرسالة"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[6px] p-4 font-['Almarai'] text-[15px] sm:text-[16px] text-gray-800 placeholder:text-gray-400 transition-all resize-none text-right"
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
                    className="size-[18px] sm:size-[19px] rounded-[3px] border-[#CBD5E1] border text-[#1a5a81] focus:ring-[#1a5a81] cursor-pointer accent-[#1a5a81]"
                  />
                  <label
                    htmlFor="contact-terms"
                    className="font-['Almarai'] font-normal text-[13px] sm:text-[15px] text-gray-600 cursor-pointer select-none leading-none"
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-node-id="329:376"
                    className="bg-[#1a5a81] hover:bg-[#154a6b] h-[48px] sm:h-[50px] px-10 sm:px-12 rounded-[6px] text-white font-['Almarai'] font-bold text-[18px] sm:text-[20px] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
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
