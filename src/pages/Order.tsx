import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import { IMAGES } from "../constants/images";
import { WHATSAPP_PHONE } from "../constants/contact";
import { useNavigation } from "../context/NavigationContext";
import emailjs from "@emailjs/browser";

// EmailJS credentials (for backup notification)
const EMAILJS_SERVICE_ID = "service_xzwa9op";
const EMAILJS_TEMPLATE_ID = "template_y0k2lnd";
const EMAILJS_PUBLIC_KEY = "lE79wZxISOlIUfSer";

const INSTITUTION_TYPES = [
  { id: "school", label: "مدرسة قرآنية", icon: "🏫" },
  { id: "mosque", label: "مسجد / حلقة قرآنية", icon: "🕌" },
  { id: "online", label: "مقرأة إلكترونية", icon: "💻" },
  { id: "association", label: "جمعية / مركز قرآني", icon: "🏛️" },
  { id: "other", label: "جهة أخرى", icon: "🌐" },
];

const STUDENT_RANGES = [
  "أقل من 50 طالباً",
  "من 50 إلى 150 طالباً",
  "من 150 إلى 300 طالب",
  "أكثر من 300 طالب",
];

export default function Order() {
  const { navigateTo } = useNavigation();

  const [formData, setFormData] = useState({
    institutionType: "مدرسة قرآنية",
    institutionName: "",
    managerName: "",
    phone: "",
    email: "",
    city: "",
    studentsCount: "من 50 إلى 150 طالباً",
    notes: "",
    agreeTerms: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.institutionName.trim()) {
      setErrorMessage("يرجى إدخال الاسم الكامل للمدرسة أو الجهة.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("يرجى إدخال رقم الهاتف.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("يرجى إدخال البريد الإلكتروني.");
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMessage("يرجى الموافقة على شروط التواصل.");
      return;
    }

    setIsSubmitting(true);

    // Build the WhatsApp formatted message
    const lines = [
      "السلام عليكم ورحمة الله وبركاته،",
      "أود طلب نسخة من نظام منصة حافظ بالبيانات التالية:",
      "",
      `📌 نوع الجهة: ${formData.institutionType}`,
      `🏫 اسم الجهة / المدرسة: ${formData.institutionName.trim()}`,
      formData.managerName.trim() ? `👤 اسم المسؤول: ${formData.managerName.trim()}` : null,
      `📞 رقم الهاتف: ${formData.phone.trim()}`,
      `✉️ البريد الإلكتروني: ${formData.email.trim()}`,
      formData.city.trim() ? `📍 المدينة / الولاية: ${formData.city.trim()}` : null,
      formData.studentsCount ? `👥 عدد الطلاب التقريبي: ${formData.studentsCount}` : null,
      formData.notes.trim() ? `📝 ملاحظات: ${formData.notes.trim()}` : null,
      "",
      "أرجو تزويدي بتفاصيل التفعيل وكيفية البدء، شكراً لكم.",
    ].filter(Boolean);

    const messageText = lines.join("\n");
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
    setGeneratedWhatsAppUrl(waUrl);

    // Also send backup record via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.managerName || formData.institutionName,
          name: formData.institutionName,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          phone: formData.phone,
          subject: `طلب نسخة جديدة - ${formData.institutionName} (${formData.institutionType})`,
          message: messageText,
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.warn("EmailJS notification skipped/failed:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Automatically open WhatsApp in a new tab/window
    window.open(waUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-[#fcfdfd] text-gray-800 flex flex-col font-['Almarai'] selection:bg-[#cab178] selection:text-white"
      dir="rtl"
    >
      <SEO
        title="طلب نسخة من نظام حافظ | منصة إدارة حلقات القرآن الكريم"
        description="املأ بيانات المدرسة أو الحلقة القرآنية لطلب نسختك من نظام حافظ الرقمي وإرسال الطلب فوراً عبر واتساب."
        canonicalPath="/order"
      />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero Banner (#1a5a81 + Calligraphy Watermark) ── */}
      <section
        className="
          bg-[#1a5a81] relative w-full overflow-hidden
          flex flex-col items-center justify-center
          pt-[110px] sm:pt-[130px] md:pt-[150px] pb-12 sm:pb-16 md:pb-20
        "
        aria-label="بانر طلب نسخة"
      >
        {/* Arabic Calligraphy Watermark */}
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[2100px] top-1/2 pointer-events-none z-0"
          aria-hidden="true"
        >
          <motion.img
            animate={{ scale: [1, 1.015, 1], rotate: [0, 0.8, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            alt=""
            className="absolute inset-0 max-w-none object-cover opacity-[0.035] pointer-events-none size-full select-none"
            src={IMAGES.arabicBg}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-['Tajawal'] mb-4 sm:mb-6"
          >
            <button
              onClick={() => navigateTo("home")}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
            >
              الرئيسية
            </button>
            <span className="text-[#cab178] font-bold">/</span>
            <span className="text-white font-medium">طلب نسخة</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Almarai'] font-bold text-white text-[28px] sm:text-[38px] md:text-[46px] leading-[1.2] m-0 mb-4 max-w-[850px]"
          >
            طلب نسخة من نظام حافظ
          </motion.h1>

          {/* Golden Underline Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[4px] w-[90px] sm:w-[120px] bg-[#cab178] rounded-full mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-['Almarai'] text-white/85 text-[15px] sm:text-[17px] md:text-[19px] leading-[1.7] max-w-[720px] m-0"
          >
            املأ بيانات مدرستك أو حلقتك القرآنية أدناه، وسيقوم النظام بتجهيز الرسالة كاملة وفتح محادثة واتساب لإرسالها فوراً إلى فريق المشروع.
          </motion.p>
        </div>
      </section>

      {/* ── Main Form Section ── */}
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-18">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ── Success Screen After Opening WhatsApp ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-[24px] shadow-[0px_10px_35px_rgba(0,0,0,0.06),0px_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12 text-center flex flex-col items-center gap-6"
            >
              {/* WhatsApp Icon Circle */}
              <div className="size-20 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shadow-inner">
                <svg className="size-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.67 20.27 9.74 20.27 11.91C20.27 16.46 16.58 20.15 12.04 20.15Z" />
                </svg>
              </div>

              <h2 className="font-['Almarai'] font-bold text-[24px] sm:text-[30px] text-[#1a5a81] m-0">
                تم تجهيز طلبك وفتح تطبيق واتساب!
              </h2>

              <p className="font-['Almarai'] text-[16px] sm:text-[18px] text-gray-600 max-w-lg leading-relaxed m-0">
                تمت كتابة كافة بيانات طلبك تلقائياً في خانة المراسلة على واتساب، يرجى الضغط على زر <strong>إرسال</strong> داخل واتساب لإتمام الطلب.
              </p>

              {/* Direct Re-open Button if browser blocked popup */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-[8px] font-bold text-[16px] sm:text-[18px] flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all no-underline"
                >
                  <span>فتح واتساب مجدداً</span>
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3.5 rounded-[8px] font-medium text-[15px] transition-colors border-0 cursor-pointer"
                >
                  تعديل البيانات أو تقديم طلب آخر
                </button>
              </div>
            </motion.div>
          ) : (
            /* ── Order Form Card ── */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white rounded-[24px] shadow-[0px_10px_35px_rgba(0,0,0,0.06),0px_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-10 md:p-12 relative"
            >
              <div className="flex items-center gap-3 pb-6 border-b border-gray-100 mb-8">
                <div className="size-11 rounded-[10px] bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-xl">
                  📋
                </div>
                <div>
                  <h2 className="font-['Almarai'] font-bold text-[20px] sm:text-[24px] text-[#1a5a81] m-0">
                    استمارة معلومات المدرسة والجهة القرآنية
                  </h2>
                  <p className="font-['Almarai'] text-[14px] sm:text-[15px] text-gray-500 m-0 mt-0.5">
                    البيانات المطلوبة لتهيئة وتخصيص نسختكم
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* 1. نوع المؤسسة */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-['Almarai'] font-bold text-[15px] sm:text-[16px] text-gray-800">
                    نوع الجهة القرآنية <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                    {INSTITUTION_TYPES.map((type) => {
                      const isSelected = formData.institutionType === type.label;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, institutionType: type.label })}
                          className={`
                            flex flex-col items-center justify-center gap-1.5 p-3 rounded-[10px] border transition-all cursor-pointer text-center
                            ${
                              isSelected
                                ? "border-[#1a5a81] bg-[#1a5a81]/8 text-[#1a5a81] font-bold shadow-sm"
                                : "border-gray-200 bg-gray-50/50 hover:bg-gray-100/70 text-gray-700"
                            }
                          `}
                        >
                          <span className="text-xl">{type.icon}</span>
                          <span className="font-['Almarai'] text-[13px] sm:text-[14px] leading-tight">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. الاسم الكامل للمدرسة + اسم المسؤول */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      الاسم الكامل للمدرسة أو المسجد <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: مدرسة الفرقان لتحفيظ القرآن"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      اسم المسؤول / الممثل
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: الشيخ أحمد بن محمد"
                      value={formData.managerName}
                      onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    />
                  </div>
                </div>

                {/* 3. رقم الهاتف + البريد الإلكتروني */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      رقم الهاتف (الواتساب) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@hafez.app"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    />
                  </div>
                </div>

                {/* 4. الولاية / المدينة + عدد الطلاب التقريبي */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      المدينة / الولاية
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: الجزائر العاصمة، قسنطينة، سطيف..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all text-right"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                      عدد الطلاب التقريبي
                    </label>
                    <select
                      value={formData.studentsCount}
                      onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                      className="w-full h-[50px] bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] px-4 font-['Almarai'] text-[15px] text-gray-800 transition-all text-right cursor-pointer"
                    >
                      {STUDENT_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. ملاحظات إضافية */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Almarai'] font-bold text-[14px] sm:text-[15px] text-gray-800">
                    ملاحظات أو استفسارات خاصة
                  </label>
                  <textarea
                    rows={3}
                    placeholder="أي متطلبات أو أسئلة إضافية ترغب بإخبارنا بها..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-[#CBD5E1] focus:border-[#1a5a81] focus:ring-2 focus:ring-[#1a5a81]/15 focus:outline-none rounded-[8px] p-4 font-['Almarai'] text-[15px] text-gray-800 placeholder:text-gray-400 transition-all resize-none text-right"
                  />
                </div>

                {/* 6. الموافقة والسياسة */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="order-agree"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="size-[18px] sm:size-[19px] rounded-[3px] border-[#CBD5E1] text-[#1a5a81] focus:ring-[#1a5a81] cursor-pointer accent-[#1a5a81]"
                  />
                  <label
                    htmlFor="order-agree"
                    className="font-['Almarai'] text-[13.5px] sm:text-[14.5px] text-gray-600 cursor-pointer select-none"
                  >
                    أوافق على الشروط وسياسة التواصل عبر واتساب لتجهيز النسخة وتزويدي ببيانات الدخول.
                  </label>
                </div>

                {/* رسالة الخطأ */}
                {errorMessage && (
                  <p className="font-['Almarai'] text-red-500 font-semibold text-[14px] m-0 text-right">
                    ⚠️ {errorMessage}
                  </p>
                )}

                {/* زر الإرسال عبر واتساب */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59]
                      text-white font-['Almarai'] font-bold text-[18px] sm:text-[20px]
                      h-[52px] sm:h-[56px] px-10 sm:px-14 rounded-[8px]
                      flex items-center justify-center gap-3
                      shadow-[0px_4px_16px_rgba(37,211,102,0.3)]
                      transition-all cursor-pointer border-0
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    <svg className="size-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.67 20.27 9.74 20.27 11.91C20.27 16.46 16.58 20.15 12.04 20.15Z" />
                    </svg>
                    <span>{isSubmitting ? "جاري التجهيز..." : "إرسال الطلب عبر واتساب"}</span>
                  </motion.button>

                  <p className="font-['Almarai'] text-gray-500 text-[13px] sm:text-[14px] m-0 text-center sm:text-left">
                    💡 سيتم فتح تطبيق واتساب مباشرة مع كتابة كافة البيانات تلقائياً، يكفيك فقط الضغط على إرسال.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

