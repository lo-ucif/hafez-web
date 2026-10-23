import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

/**
 * Contact section matching Figma node 312:78 ("section 12").
 * Features top SectionTitle pill badge, 2-column layout (text on right, form card on left in RTL),
 * and clean styled form controls with validation.
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
      className="bg-[#fefefe] w-full py-[40px] md:py-[60px] px-4 sm:px-8 lg:px-[100px] flex flex-col gap-[30px] md:gap-[40px] items-center justify-center relative overflow-hidden"
      dir="rtl"
      data-node-id="312:78"
      data-name="section 12"
    >
      {/* Top Section Title Pill Badge matching Figma node 312:138 - 312:142 */}
      <SectionTitle title="تواصل معنا" />

      {/* Main 2-column Content matching Figma node 312:79 */}
      <div
        className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[60px]"
        data-node-id="312:79"
      >
        {/* ── 1. Text Section matching Figma node 312:101 (Right side in RTL) ── */}
        <div
          className="w-full lg:w-[488px] flex flex-col gap-6 sm:gap-[30px] lg:gap-[40px] items-start text-right shrink-0"
          data-node-id="312:101"
        >
          <h2
            className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[36px] sm:text-[48px] lg:text-[60px] tracking-[-0.6px] leading-[1.2] m-0"
            dir="auto"
            data-node-id="312:102"
          >
            تواصل معنا:
          </h2>

          <p
            className="font-['Changa:Medium'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.48] text-[rgba(0,0,0,0.6)] m-0"
            dir="auto"
            data-node-id="312:103"
          >
            هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟ اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
          </p>
        </div>

        {/* ── 2. Form Card matching Figma node 312:80 (Left side in RTL) ── */}
        <div
          className="bg-white w-full max-w-[601px] rounded-[30px] shadow-[0px_0px_31.9px_0px_rgba(0,0,0,0.06)] px-6 sm:px-[30px] py-[35px] sm:py-[40px] flex flex-col gap-[20px] relative shrink-0"
          data-node-id="312:80"
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
                <h4 className="font-['Almarai:Bold'] text-[24px] text-gray-800 m-0">
                  تم استلام رسالتك بنجاح!
                </h4>
                <p className="font-['Changa'] text-[16px] text-gray-600 max-w-md m-0 leading-relaxed">
                  شكراً لتواصلك معنا. سنقوم بالرد عليك عبر البريد الإلكتروني أو الهاتف في أقرب وقت.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-[6px] bg-[#1a5a81] hover:bg-[#154e70] text-white font-['Changa:SemiBold'] text-[18px] transition-colors cursor-pointer shadow-md"
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
                {/* الاسم الكامل matching Figma node 312:81 */}
                <div className="h-[60px] relative w-full" data-node-id="312:81">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* البريد الالكتروني matching Figma node 312:84 */}
                <div className="h-[60px] relative w-full" data-node-id="312:84">
                  <input
                    type="email"
                    required
                    placeholder="البريد الالكتروني"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* رقم الهاتف matching Figma node 312:87 */}
                <div className="h-[60px] relative w-full" data-node-id="312:87">
                  <input
                    type="tel"
                    required
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الموضوع matching Figma node 312:90 */}
                <div className="h-[60px] relative w-full" data-node-id="312:90">
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الرسالة matching Figma node 312:93 */}
                <div className="h-[165px] relative w-full" data-node-id="312:93">
                  <textarea
                    required
                    placeholder="الرسالة"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] p-[18px] font-['Changa:Regular'] text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/60 transition-colors resize-none text-right"
                    dir="auto"
                  />
                </div>

                {/* أوافق على الشروط وسياسة الخصوصية matching Figma node 312:96 */}
                <div
                  className="flex items-center gap-2.5 pt-1 w-full justify-start"
                  data-node-id="312:96"
                >
                  <input
                    type="checkbox"
                    id="contact-terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="size-[20px] rounded-[3px] border-[#a4a4a4] border-[1.5px] accent-[#1a5a81] cursor-pointer"
                  />
                  <label
                    htmlFor="contact-terms"
                    className="font-['Changa'] font-light text-[15px] sm:text-[16px] text-[#303030] cursor-pointer select-none leading-none"
                    data-node-id="312:98"
                  >
                    أوافق على الشروط وسياسة الخصوصية
                  </label>
                </div>

                {/* زر الإرسال matching Figma node 312:99 */}
                <div className="flex justify-center pt-2 w-full">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    data-node-id="312:99"
                    className="bg-[#1a5a81] hover:bg-[#154e70] h-[51px] w-[199.57px] rounded-[6px] text-white font-['Changa:SemiBold'] font-semibold text-[22px] sm:text-[24px] flex items-center justify-center transition-all cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "..." : "ارسل الان"}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
