import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { IMAGES } from "../constants/images";
import { useNavigation } from "../context/NavigationContext";

interface TocItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const tocItems: TocItem[] = [
  {
    id: "general-terms",
    title: "1. الشروط العامة والتعريفات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "cookies",
    title: "2. ملفات تعريف الارتباط (Cookies)",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
        <circle cx="16" cy="15.5" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="11" cy="17" r="1" fill="currentColor" />
        <circle cx="7" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "license",
    title: "3. الملكية الفكرية والتراخيص",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "hyperlinking",
    title: "4. الروابط التشعبية ومشاركة المحتوى",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: "iframes",
    title: "5. التضمين والإطارات (iFrames)",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M2 8h20" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="10" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "content-liability",
    title: "6. مسؤولية المحتوى والبيانات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "your-privacy",
    title: "7. الخصوصية وأمن المعلومات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "reservation-of-rights",
    title: "8. حفظ الحقوق والتعديلات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    id: "removal-of-links",
    title: "9. إزالة الروابط من الموقع",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
  },
  {
    id: "disclaimer",
    title: "10. إخلاء المسؤولية القانونية",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function Terms() {
  const { navigateTo } = useNavigation();
  const [activeTocId, setActiveTocId] = useState<string>("general-terms");

  // Scroll spy to highlight active TOC item in Arabic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            setActiveTocId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTocId(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#fcfdfd] text-gray-800 flex flex-col font-['Almarai'] selection:bg-[#cab178] selection:text-white"
      dir="rtl"
    >
      {/* ── Same Navbar from Home page ── */}
      <Navbar />

      {/* ── Hero Banner matching Home Page Style (#1a5a81 + Calligraphy Watermark) ── */}
      <section
        className="
          bg-[#1a5a81] relative w-full overflow-hidden
          flex flex-col items-center justify-center
          pt-[110px] sm:pt-[130px] md:pt-[150px] pb-12 sm:pb-16 md:pb-20
        "
        aria-label="بانر الشروط والأحكام"
      >
        {/* Arabic Calligraphy Watermark identical to Home Hero */}
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

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-['Tajawal'] mb-5"
          >
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className="hover:text-[#cab178] transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <span className="text-[#cab178]">/</span>
            <span className="text-white font-medium">الشروط والأحكام</span>
          </motion.div>

          {/* Golden Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              text-[#cab178] text-xs sm:text-sm font-semibold mb-4 shadow-sm
            "
          >
            <span className="size-2 rounded-full bg-[#cab178] animate-pulse" />
            <span>وثيقة تنظيمية رسمية • منصة حافظ</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              font-['Almarai'] font-bold
              text-[34px] sm:text-[46px] md:text-[56px] lg:text-[62px]
              leading-[1.18] text-white m-0 tracking-tight
              max-w-4xl
            "
          >
            الشروط والأحكام
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              font-['Tajawal'] font-normal text-white/90
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[1.7] max-w-2xl mt-4 mb-2
            "
          >
            القواعد والضوابط القانونية والتنظيمية المعتمدة لاستخدام منصة حافظ وخدماتها الرقمية لإدارة الحلقات والمدارس القرآنية.
          </motion.p>

          {/* Metadata badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/70 font-['Tajawal'] mt-4"
          >
            <div className="flex items-center gap-1.5">
              <svg className="size-4 text-[#cab178]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>آخر تحديث: 2026</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="size-4 text-[#cab178]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>سارية المفعول لجميع المشتركين</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Layout (Content + Table of Contents in RTL) ── */}
      <main className="flex-1 w-full bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ── Table of Contents (Sticky on Right in RTL) ── */}
            <aside className="lg:col-span-4 xl:col-span-3.5 order-1">
              <div className="sticky top-24 bg-[#f8fafc] border border-gray-200/80 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-gray-200">
                  <h2 className="font-['Almarai'] font-bold text-[17px] text-[#1a5a81] m-0 flex items-center gap-2">
                    <svg className="size-5 text-[#cab178]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    فهرس المحتويات
                  </h2>
                  <span className="text-xs bg-[#1a5a81]/10 text-[#1a5a81] font-bold px-2 py-0.5 rounded-full">
                    10 بنود
                  </span>
                </div>

                <nav className="flex flex-col gap-1" aria-label="فهرس الشروط والأحكام">
                  {tocItems.map((item) => {
                    const isActive = activeTocId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          flex items-center gap-2.5 w-full text-right px-3 py-2.5 rounded-xl
                          font-['Tajawal'] text-[14.5px] leading-snug transition-all duration-150 cursor-pointer
                          ${
                            isActive
                              ? "bg-[#1a5a81] text-white font-bold shadow-sm translate-x-[-3px]"
                              : "text-gray-700 hover:bg-gray-200/60 hover:text-[#1a5a81]"
                          }
                        `}
                      >
                        <span
                          className={`shrink-0 transition-colors ${
                            isActive ? "text-[#cab178]" : "text-gray-400"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Helpful Note box in sidebar */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="bg-[#1a5a81]/5 border border-[#1a5a81]/15 rounded-xl p-3.5 text-right">
                    <p className="font-['Almarai'] font-bold text-xs text-[#1a5a81] m-0 mb-1">
                      هل لديك استفسار قانوني؟
                    </p>
                    <p className="font-['Tajawal'] text-xs text-gray-600 m-0 leading-relaxed">
                      فريق الدعم القانوني لمنصة حافظ جاهز للإجابة على جميع تساؤلاتكم بكل سرور.
                    </p>
                    <button
                      type="button"
                      onClick={() => navigateTo("home", "#contact")}
                      className="mt-2.5 text-xs text-[#cab178] hover:text-[#b39962] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>تواصل مع الدعم الفني</span>
                      <span>←</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Main Terms Articles (Left in RTL) ── */}
            <article className="lg:col-span-8 xl:col-span-8.5 order-2 flex flex-col gap-10 text-gray-800">
              
              {/* Introduction Card */}
              <div className="bg-gradient-to-r from-[#1a5a81]/5 to-[#cab178]/10 border border-[#1a5a81]/15 rounded-2xl p-6 sm:p-7">
                <h3 className="font-['Almarai'] font-bold text-xl text-[#1a5a81] mb-2">
                  مرحباً بكم في منصة حافظ
                </h3>
                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تسعى منصة حافظ إلى تقديم بيئة تقنية متكاملة وموثوقة لإدارة وتيسير حلقات القرآن الكريم والمدارس والمجمعات القرآنية. تحدد هذه الوثيقة الشروط والبنود المنظمة لاستخدامك لمنصتنا وتطبيقاتها وخدماتها السحابية.
                </p>
              </div>

              {/* ── Section 1: General Terms ── */}
              <section id="general-terms" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    الشروط العامة والتعريفات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تحدد هذه الشروط والأحكام القواعد واللوائح التنظيمية الخاصة باستخدام منصة وموقع حافظ. بالوصول إلى المنصة أو تسجيل حساب أو استخدام أي من خدماتها الرقمية، فإنك تقر وتوافق صراحة على الالتزام الكامل بهذه الشروط والأحكام. إذا كنت لا توافق على أي بند من هذه البنود، يُرجى التوقف فوراً عن استخدام منصة حافظ.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تنطبق المصطلحات والتعريفات التالية على هذه الشروط والأحكام وبيان الخصوصية وكافة الاتفاقيات المنبثقة عنها:
                </p>

                <ul className="space-y-2.5 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">"المستخدم" أو "العميل" أو "أنت":</strong> يشير إلى أي فرد، معلم، طالب، ولي أمر، أو جهة إدارية تستخدم المنصة أو تصل إلى أي من أدواتها.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">"المنصة" أو "نحن" أو "لنا":</strong> تشير إلى إدارة منصة حافظ وفريق العمل المعتمد لإدارتها وتطويرها.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">"الخدمات":</strong> تشمل نظم إدارة الحلقات، التحفيظ، التقييم، إصدار التقارير، والاتصال بين أطراف العملية التعليمية عبر الويب أو التطبيقات.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">"الأطراف":</strong> تشير إلى المستخدم ومنصة حافظ معاً.
                  </li>
                </ul>
              </section>

              {/* ── Section 2: Cookies ── */}
              <section id="cookies" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    ملفات تعريف الارتباط (Cookies)
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نحن نوظف ملفات تعريف الارتباط وتقنيات التخزين المحلي لتحسين تجربة المستخدم وتقديم خدمات مستقرة وسريعة. بدخولك واستخدامك لمنصة حافظ، فإنك توافق على استخدام ملفات تعريف الارتباط بما يتوافق مع سياسة الخصوصية الخاصة بنا.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تساعدنا ملفات تعريف الارتباط في حفظ تفضيلات الجلسة، تسجيل الدخول الآمن للحسابات الإدارية وحسابات المعلمين والطلاب، وتحليل أداء المنصة البرمجي لتحسين وتطوير الميزات باستمرار.
                </p>
              </section>

              {/* ── Section 3: License ── */}
              <section id="license" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    حقوق الملكية الفكرية والتراخيص
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  ما لم يُنص على خلاف ذلك، تمتلك منصة حافظ والجهات المرخصة لها كامل حقوق الملكية الفكرية الخاصة بجميع المواد، الأكواد البرمجية، التصاميم، الواجهات، الهويات البصرية، والعلامات التجارية المنشورة على المنصة. جميع الحقوق الفكرية والتجارية محفوظة بالكامل.
                </p>

                <div className="bg-red-50/60 border-r-4 border-red-500/80 p-4 rounded-xl my-2">
                  <p className="font-['Almarai'] font-bold text-sm text-red-900 m-0 mb-1">
                    المحظورات والقيود:
                  </p>
                  <p className="font-['Tajawal'] text-sm text-red-800 m-0">
                    يُحظر تماماً على أي مستخدم أو طرف ثالث القيام بأي من الأفعال التالية دون تصريح خطي مسبق:
                  </p>
                </div>

                <ul className="space-y-2 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>إعادة نشر أو بيع أو تأجير أي مادة برمجية أو تقرير أو واجهة من واجهات منصة حافظ.</li>
                  <li>الهندسة العكسية، فك التشفير، أو محاولة استخراج الأكواد المصدرية لقواعد بيانات المنصة.</li>
                  <li>نسخ أو تكرار النماذج المخصصة للحلقات أو استغلالها تجارياً خارج نطاق الترخيص الممنوح.</li>
                  <li>إعادة توزيع محتويات المنصة دون إشارة صريحة وترخيص معتمد.</li>
                </ul>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0 pt-2">
                  تتيح المنصة للمعلمين والإداريين إدخال تقييمات، ملاحظات، وسجلات دراسية للطلاب. يلتزم المستخدم بأن تكون جميع البيانات المدخلة دقيقة ولا تنتهك أي حقوق قانونية أو خصوصية تخص الأفراد والجهات.
                </p>
              </section>

              {/* ── Section 4: Hyperlinking ── */}
              <section id="hyperlinking" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    الروابط التشعبية ومشاركة المحتوى
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  يجوز للمؤسسات التالية الارتباط بموقع منصة حافظ دون الحاجة إلى موافقة كتابية مسبقة، شريطة الالتزام بمعايير النزاهة والمصداقية:
                </p>

                <ul className="space-y-2 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>الوزارات، الهيئات، والجهات الرسمية المعنية بالشؤون الدينية والتعليمية.</li>
                  <li>محركات البحث العالمية وأدلة الويب المعتمدة.</li>
                  <li>الجمعيات الخيرية، والمراكز القرآنية، والمؤسسات الوقفية الشريكة.</li>
                  <li>وسائل الإعلام الموثوقة والمنصات التوعوية.</li>
                </ul>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0 pt-1">
                  يُشترط في أي رابط ألا يكون مضللاً بأي شكل من الأشكال، وألا يدّعي زيفاً رعاية المنصة أو اعتمادها لمنتجات أو خدمات دون اتفاق رسمي، وأن يوضع الرابط في سياق مفيد يخدم المستفيدين.
                </p>
              </section>

              {/* ── Section 5: iFrames ── */}
              <section id="iframes" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    5
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    التضمين والإطارات البرمجية (iFrames)
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  لا يجوز دون موافقة كتابية مسبقة وترخيص رسمي إنشاء إطارات (iFrames) حول أي صفحة من صفحات منصة حافظ أو استخدام أدوات تغير المظهر المرئي أو التجربة البصرية المعتمدة لمنصتنا.
                </p>
              </section>

              {/* ── Section 6: Content Liability ── */}
              <section id="content-liability" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    6
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    مسؤولية المحتوى والبيانات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  لا تتحمل منصة حافظ أدنى مسؤولية عن أي محتوى أو روابط خارجية تظهر على مواقع أخرى ترتبط بمنصتنا. يوافق المستخدم على تعويض وحماية منصة حافظ من أي مطالبات أو أضرار ناتجة عن إساءة استخدام الحسابات أو نشر بيانات غير صحيحة عبر حسابه.
                </p>
              </section>

              {/* ── Section 7: Your Privacy ── */}
              <section id="your-privacy" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    7
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    الخصوصية وأمن المعلومات
                  </h2>
                </div>

                <div className="bg-[#1a5a81]/5 border border-[#1a5a81]/20 rounded-2xl p-5 my-1">
                  <div className="flex items-start gap-3">
                    <span className="size-9 rounded-xl bg-[#cab178] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-['Almarai'] font-bold text-[17px] text-[#1a5a81] m-0 mb-1">
                        التزامنا بحماية بيانات القرآن الكريم والمستخدمين
                      </h4>
                      <p className="font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7] m-0">
                        تطبق منصة حافظ بروتوكولات تشفير متقدمة لحماية بيانات الطلاب والمدارس، ونلتزم التزاماً صارماً بعدم بيع أو مشاركة أي بيانات شخصية مع أطراف خارجية لأغراض تسويقية.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  يُرجى مراجعة وثيقة <strong>سياسة الخصوصية</strong> لمعرفة المزيد حول التدابير التقنية والتنظيمية التي نتخذها لحفظ سرية وأمان بياناتكم.
                </p>
              </section>

              {/* ── Section 8: Reservation of Rights ── */}
              <section id="reservation-of-rights" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    8
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    حفظ الحقوق والتعديلات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نحتفظ بالحق في مطالبة أي جهة أو موقع بإزالة أي رابط يشير إلى منصتنا في أي وقت، وتوافق على الاستجابة الفورية لمثل هذه الطلبات. كما نحتفظ بحق تعديل وتحديث هذه الشروط والأحكام وسياسات الاستخدام في أي وقت دون إشعار مسبق.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  إن استمرارك في استخدام منصة حافظ بعد نشر التحديثات يعني قبولك وموافقتك الضمنية على الالتزام بالشروط المعدلة.
                </p>
              </section>

              {/* ── Section 9: Removal of Links ── */}
              <section id="removal-of-links" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    9
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    إزالة الروابط والملاحظات من الموقع
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  إذا وجدت أي رابط أو محتوى غير لائق في منصتنا لأي سبب كان، فنحن نرحب بتواصلك معنا وإبلاغنا فوراً. سنقوم بالنظر في جميع البلاغات واتخاذ الإجراءات التقنية اللازمة على وجه السرعة.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نبذل قصارى جهدنا لضمان دقة وتكامل واستقرار البيانات على المنصة، ونعمل بصفة مستمرة على تحسين جودة وتوافر الخدمات لكافة المدارس القرآنية المشتركة.
                </p>
              </section>

              {/* ── Section 10: Disclaimer ── */}
              <section id="disclaimer" className="scroll-mt-28 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    10
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    إخلاء المسؤولية القانونية
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  إلى أقصى حد يسمح به القانون المعمول به، تُقدّم خدمات منصة حافظ "كما هي" دون ضمانات صريحة أو ضمنية تتجاوز ما تنص عليه الاتفاقيات المبرمة. لا يهدف هذا الإخلاء إلى الحد من أي مسؤوليات لا يجوز استبعادها بموجب القوانين النافذة.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تلتزم إدارة منصة حافظ بتقديم خدمة إلكترونية متطورة وموثوقة، مع تطبيق أفضل الممارسات التقنية لدعم مسيرة حفظ كتاب الله تعالى وتيسير مهام المعلمين والطلاب في كل مكان.
                </p>
              </section>

              {/* Bottom Actions Card */}
              <div className="bg-[#1a5a81] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md mt-6">
                <div className="text-right">
                  <h4 className="font-['Almarai'] font-bold text-xl text-white mb-2">
                    هل ترغب في البدء مع منصة حافظ؟
                  </h4>
                  <p className="font-['Tajawal'] text-sm sm:text-base text-white/85 m-0 max-w-lg">
                    انضم الآن لعشرات المدارس والحلقات القرآنية التي تنظم مسار تحفيظها بكل احترافية وسهولة.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigateTo("home", "#offers")}
                  className="
                    bg-[#cab178] hover:bg-[#b89e67] text-white
                    font-['Almarai'] font-bold text-[16px]
                    px-6 py-3 rounded-lg shadow-sm
                    transition-all duration-200 cursor-pointer whitespace-nowrap
                    hover:scale-105 active:scale-95
                  "
                >
                  طلب نسخة تجريبية
                </button>
              </div>

            </article>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
