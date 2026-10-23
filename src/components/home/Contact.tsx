import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="bg-[#fefefe] w-full py-[50px] md:py-[80px] px-4 sm:px-8 lg:px-[100px] flex justify-center items-center overflow-hidden"
      dir="rtl"
    >
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[60px]">
        {/* ── Text Section matching Figma node 298:81 (Right side in RTL) ── */}
        <div className="w-full lg:w-[488px] flex flex-col gap-6 sm:gap-[30px] lg:gap-[36px] items-start text-right">
          <h2
            className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[40px] sm:text-[50px] lg:text-[60px] tracking-[-0.6px] leading-[1.2] m-0"
            dir="auto"
          >
            تواصل معنا:
          </h2>

          <p
            className="font-['Changa'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.48] text-black/60 m-0"
            dir="auto"
          >
            هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟ اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
          </p>
        </div>

        {/* ── Form Card matching Figma node 298:83 (Left side in RTL) ── */}
        <div className="bg-white w-full max-w-[560px] rounded-[30px] shadow-[0px_0px_31.9px_0px_rgba(0,0,0,0.06)] px-6 sm:px-[35px] py-[35px] sm:py-[40px] flex flex-col gap-[20px] relative shrink-0">
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
                className="flex flex-col gap-[18px] w-full"
              >
                {/* الاسم الكامل */}
                <div className="h-[54px] sm:h-[58px] relative w-full">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/50 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* البريد الالكتروني */}
                <div className="h-[54px] sm:h-[58px] relative w-full">
                  <input
                    type="email"
                    required
                    placeholder="البريد الالكتروني"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/50 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* رقم الهاتف */}
                <div className="h-[54px] sm:h-[58px] relative w-full">
                  <input
                    type="tel"
                    required
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/50 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الموضوع */}
                <div className="h-[54px] sm:h-[58px] relative w-full">
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] px-[20px] font-['Changa:Regular'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/50 transition-colors text-right"
                    dir="auto"
                  />
                </div>

                {/* الرسالة */}
                <div className="h-[140px] sm:h-[155px] relative w-full">
                  <textarea
                    required
                    placeholder="الرسالة"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-full bg-white border border-[#0a142f]/30 focus:border-[#1a5a81] focus:ring-1 focus:ring-[#1a5a81] focus:outline-none rounded-[5px] p-[16px] sm:p-[18px] font-['Changa:Regular'] text-[15px] sm:text-[16px] text-[#0a142f] placeholder:text-[#0a142f]/50 transition-colors resize-none text-right"
                    dir="auto"
                  />
                </div>

                {/* أوافق على الشروط وسياسة الخصوصية (المربع على اليمين والنص بجانبه) */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contact-terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="size-[18px] rounded-[3px] border-[#a4a4a4] border-[1.5px] accent-[#1a5a81] cursor-pointer"
                  />
                  <label
                    htmlFor="contact-terms"
                    className="font-['Changa'] font-light text-[14px] sm:text-[15px] text-[#0a142f]/70 cursor-pointer select-none leading-none"
                  >
                    أوافق على الشروط وسياسة الخصوصية
                  </label>
                </div>

                {/* زر الإرسال matching Figma node 298:99 */}
                <div className="flex justify-center pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#1a5a81] hover:bg-[#154e70] h-[48px] sm:h-[51px] w-[180px] sm:w-[199px] rounded-[6px] text-white font-['Changa:SemiBold'] font-semibold text-[20px] sm:text-[22px] flex items-center justify-center transition-all cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
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
