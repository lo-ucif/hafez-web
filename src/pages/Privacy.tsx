import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import { IMAGES } from "../constants/images";
import { useNavigation } from "../context/NavigationContext";

interface TocItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const tocItems: TocItem[] = [
  {
    id: "introduction",
    title: "1. المقدمة والالتزام العام",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "data-collected",
    title: "2. البيانات التي نقوم بجمعها",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "how-we-use",
    title: "3. كيفية استخدام البيانات ومعالجتها",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: "data-sharing",
    title: "4. مشاركة البيانات والإفصاح عنها",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    id: "storage-security",
    title: "5. تخزين البيانات وأمن المعلومات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "cookies-tracking",
    title: "6. ملفات تعريف الارتباط وتقنيات التتبع",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
        <circle cx="16" cy="15.5" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "user-rights",
    title: "7. حقوق المستخدمين والتحكم بالبيانات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m19 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "children-privacy",
    title: "8. خصوصية الطلاب والأطفال القُصّر",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "updates",
    title: "9. التعديلات على سياسة الخصوصية",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    id: "contact-dpo",
    title: "10. التواصل ومسؤول حماية البيانات",
    icon: (
      <svg className="size-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Privacy() {
  const { navigateTo } = useNavigation();
  const [activeTocId, setActiveTocId] = useState<string>("introduction");

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
      <SEO
        title="سياسة الخصوصية | منصة حافظ"
        description="سياسة الخصوصية وأمن البيانات وحماية سرية حفظة القرآن والطلاب والمعلمين في منصة حافظ لإدارة الحلقات القرآنية."
        canonicalPath="/privacy"
      />
      {/* ── Same Navbar from Home page ── */}
      <Navbar />

      {/* ── Hero Banner matching Home Page Style (#1a5a81 + Calligraphy Watermark) ── */}
      <section
        className="
          bg-[#1a5a81] relative w-full overflow-hidden
          flex flex-col items-center justify-center
          pt-[110px] sm:pt-[130px] md:pt-[150px] pb-12 sm:pb-16 md:pb-20
        "
        aria-label="بانر سياسة الخصوصية"
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
            className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-['Tajawal'] mb-4 sm:mb-6"
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
              className="hover:text-[#cab178] transition-colors cursor-pointer no-underline text-inherit"
            >
              الرئيسية
            </a>
            <span className="text-[#cab178]">/</span>
            <span className="text-white font-medium">سياسة الخصوصية</span>
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
            سياسة الخصوصية
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              font-['Tajawal'] font-normal text-white/90
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[1.7] max-w-2xl mt-4 mb-0
            "
          >
            التزامنا الراسخ بحفظ خصوصية وأمن بيانات حفظة القرآن الكريم والطلاب والمعلمين والمؤسسات القرآنية الشريكة.
          </motion.p>
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
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                    فهرس سياسة الخصوصية
                  </h2>
                  <span className="text-xs bg-[#1a5a81]/10 text-[#1a5a81] font-bold px-2 py-0.5 rounded-full">
                    10 أقسام
                  </span>
                </div>

                <nav className="flex flex-col gap-1" aria-label="فهرس سياسة الخصوصية">
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
                      خصوصيتك هي أمانتنا
                    </p>
                    <p className="font-['Tajawal'] text-xs text-gray-600 m-0 leading-relaxed">
                      نحن لا نبيع أو نؤجر أي بيانات شخصية لأطراف ثالثة إطلاقاً.
                    </p>
                    <a
                      href="/#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("home", "#contact");
                      }}
                      className="mt-2.5 text-xs text-[#cab178] hover:text-[#b39962] font-bold flex items-center gap-1 cursor-pointer no-underline"
                    >
                      <span>تواصل مع مسؤول الخصوصية</span>
                      <span>←</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Main Privacy Articles (Left in RTL) ── */}
            <article className="lg:col-span-8 xl:col-span-8.5 order-2 flex flex-col gap-10 text-gray-800">
              
              {/* Introduction Card */}
              <div className="bg-gradient-to-r from-[#1a5a81]/5 to-[#cab178]/10 border border-[#1a5a81]/15 rounded-2xl p-6 sm:p-7">
                <h3 className="font-['Almarai'] font-bold text-xl text-[#1a5a81] mb-2">
                  بيان حماية خصوصية بيانات منصة حافظ
                </h3>
                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تُدرك منصة حافظ حساسية وأهمية البيانات التعليمية والشخصية التي يعهد بها إلينا الطلاب، المعلمون، أولياء الأمور، وإدارات الجمعيات والمدارس القرآنية. نوضح في هذه الوثيقة بوضوح وشفافية أنواع البيانات التي نجمعها، وسبل معالجتها، والتدابير الأمنية المتبعة لحمايتها.
                </p>
              </div>

              {/* ── Section 1: Introduction ── */}
              <section id="introduction" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    المقدمة والالتزام العام
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تنطبق سياسة الخصوصية هذه على جميع زوار ومستخدمي منصة حافظ، بما في ذلك الموقع الإلكتروني وتطبيقات الويب والخدمات السحابية المرتبطة بإدارة ومتابعة الحلقات القرآنية.
                </p>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  باستخدامك لمنصة حافظ، فإنك تؤكد موافقتك على الممارسات والإجراءات الموضحة في هذه السياسة. ونحن نلتزم بالتقيد بالقوانين والتشريعات المحلية والدولية المنظمة لحماية البيانات الرقمية والخصوصية الفردية.
                </p>
              </section>

              {/* ── Section 2: Data Collected ── */}
              <section id="data-collected" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    البيانات التي نقوم بجمعها
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نقوم بجمع البيانات الضرورية فقط لتمكين تقديم خدمات المتابعة القرآنية وإدارة الحلقات بكفاءة واحترافية:
                </p>

                <ul className="space-y-2.5 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">بيانات الحساب الشخصي:</strong> الاسم الكامل، رقم الهاتف، البريد الإلكتروني، والدور التعليمي (مشرف، مدير، معلم، طالب، ولي أمر).
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">البيانات التعليمية والقرآنية:</strong> سجلات الحفظ والمراجعة، درجات التقييم والتسميع، نسب الحضور والغياب، الملاحظات التوجيهية من المعلمين.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">بيانات المدرسة أو الجمعية:</strong> اسم المؤسسة القرآنية، الفروع، الحلقات، والمشرفين التابعين لها.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">البيانات التقنية التشغيلية:</strong> عنوان IP، نوع المتصفح، نظام التشغيل، وأوقات تسجيل الدخول لضمان أمان الحسابات وتفادي الدخول غير المصرح به.
                  </li>
                </ul>
              </section>

              {/* ── Section 3: How We Use Data ── */}
              <section id="how-we-use" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    كيفية استخدام البيانات ومعالجتها
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نستخدم البيانات المجمعة حصراً للأغراض التعليمية والإدارية المشروعة، وتشمل:
                </p>

                <ul className="space-y-2 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>تسهيل إدارة جداول الحلقات القرآنية وتوزيع الطلاب وتحديد مسارات الحفظ.</li>
                  <li>إصدار تقارير الإنجاز الدورية لأولياء الأمور والمشرفين لمتابعة تطور الحفظ.</li>
                  <li>توفير قنوات تواصل سريعة وفعالة بين المعلمين وأولياء الأمور (مثل تنبيهات واتساب والرسائل).</li>
                  <li>تأمين الحسابات ومراقبة الأنشطة المشبوهة وحماية البنية التحتية للمنصة من الاختراق.</li>
                  <li>تطوير ميزات النظام وتحديث خوارزميات التقييم بناءً على الاحتياجات الفعلية للمدارس.</li>
                </ul>
              </section>

              {/* ── Section 4: Data Sharing ── */}
              <section id="data-sharing" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    مشاركة البيانات والإفصاح عنها
                  </h2>
                </div>

                <div className="bg-emerald-50/70 border-r-4 border-emerald-500/80 p-4 rounded-xl my-2">
                  <p className="font-['Almarai'] font-bold text-sm text-emerald-900 m-0 mb-1">
                    مبدأ السرية التامة:
                  </p>
                  <p className="font-['Tajawal'] text-sm text-emerald-800 m-0">
                    منصة حافظ لا تبيع، ولا تؤجر، ولا تُتاجر ببيانات المستخدمين أو بيانات الطلاب لأي طرف ثالث أو لأي وكالة إعلانية على الإطلاق.
                  </p>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  لا يتم الإفصاح عن البيانات إلا في الحالات المحددة التالية:
                </p>

                <ul className="space-y-2 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>
                    <strong>داخل المؤسسة القرآنية ذاتها:</strong> مشاركة بيانات الطالب مع معلمه المباشر وإدارة المدرسة المصرح لها.
                  </li>
                  <li>
                    <strong>مزودو الخدمات السحابية الموثوقون:</strong> شركات الاستضافة السحابية الآمنة التي تعمل وفق عقود سرية واتفاقيات معالجة بيانات صارمة (DPA).
                  </li>
                  <li>
                    <strong>الامتثال للأنظمة والقوانين:</strong> عند تلقي طلب قضائي رسمي وملزم صادر عن جهات إنفاذ القانون المختصة بموجب اللوائح والأنظمة المعمول بها.
                  </li>
                </ul>
              </section>

              {/* ── Section 5: Data Storage & Security ── */}
              <section id="storage-security" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    5
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    تخزين البيانات وأمن المعلومات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  نطبق في منصة حافظ حزمة متكاملة من التدابير الأمنية والتقنية القياسية لحماية البيانات من الوصول غير المصرح به أو التعديل أو الإتلاف:
                </p>

                <ul className="space-y-2.5 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">التشفير التام (End-to-End Encryption):</strong> تشفير كافة البيانات أثناء النقل عبر بروتوكولات HTTPS / TLS المشفرة بأعلى الدرجات.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">التخزين المشفر وقواعد البيانات المعزولة:</strong> تشفير البيانات الحساسة وكلمات المرور باستخدام خوارزميات التجزئة المتقدمة.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">النسخ الاحتياطي التلقائي:</strong> إنشاء نسخ احتياطية دورية ومعزولة جغرافياً لضمان استرجاع البيانات في حالات الطوارئ دون أي فقدان.
                  </li>
                  <li>
                    <strong className="text-gray-900 font-['Almarai']">صلاحيات الوصول المقيدة (RBAC):</strong> تطبيق سياسة منح أدنى الصلاحيات، حيث لا يملك حق الاطلاع على البيانات إلا الكادر المخوّل رسمياً.
                  </li>
                </ul>
              </section>

              {/* ── Section 6: Cookies ── */}
              <section id="cookies-tracking" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    6
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    ملفات تعريف الارتباط وتقنيات التتبع
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  تستخدم منصتنا ملفات تعريف الارتباط الأساسية للحفاظ على جلسات تسجيل الدخول، وتذكر تفضيلات اللغة والواجهة، وضمان سرعة تحميل الصفحات. يمكنك التحكم في إعدادات ملفات تعريف الارتباط عبر متصفحك، مع العلم أن تعطيلها قد يؤثر على أداء بعض ميزات المنصة.
                </p>
              </section>

              {/* ── Section 7: User Rights ── */}
              <section id="user-rights" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    7
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    حقوق المستخدمين والتحكم بالبيانات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  وفقاً للأنظمة واللوائح المعتمدة لحماية البيانات الشخصية، يتمتع كل مستخدم بالحقوق التالية:
                </p>

                <ul className="space-y-2 pr-5 list-disc font-['Tajawal'] text-[15.5px] text-gray-700 leading-[1.7]">
                  <li><strong>حق الوصول والاطلاع:</strong> طلب نسخة من بياناتك الشخصية وسجلاتك المحفوظة على المنصة.</li>
                  <li><strong>حق التصحيح والتعديل:</strong> تعديل أو تصحيح أي معلومات غير دقيقة في ملفك الشخصي أو ملفات أبنائك.</li>
                  <li><strong>حق حذف البيانات (الحق في النسيان):</strong> طلب حذف حسابك وبياناتك نهائياً عند انتهاء اشتراكك أو رغبتك في ذلك.</li>
                  <li><strong>حق تصدير ونقل البيانات:</strong> طلب استخراج سجلات الحفظ والتقارير بصيغ رقمية قياسية (PDF أو Excel).</li>
                </ul>
              </section>

              {/* ── Section 8: Children's Privacy ── */}
              <section id="children-privacy" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    8
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    خصوصية الطلاب والأطفال القُصّر
                  </h2>
                </div>

                <div className="bg-[#cab178]/10 border-r-4 border-[#cab178] p-4 rounded-xl my-2">
                  <p className="font-['Almarai'] font-bold text-sm text-[#8c743e] m-0 mb-1">
                    عناية فائقة ببيانات الناشئة:
                  </p>
                  <p className="font-['Tajawal'] text-sm text-gray-800 m-0">
                    نظراً لأن العديد من حفظة القرآن هم من الطلاب والأطفال، فإننا نلزم إدارات المدارس والحلقات بالحصول على موافقة أولياء الأمور قبل تسجيل بيانات الطلاب، ولا نطلب إلا البيانات التعليمية الأساسية.
                  </p>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  يحق لولي الأمر في أي وقت مراجعة حساب طفله والاطلاع على تقدمه القرآني أو طلب تعديل بياناته والتواصل المباشر مع إدارة الحلقة.
                </p>
              </section>

              {/* ── Section 9: Updates to Policy ── */}
              <section id="updates" className="scroll-mt-28 flex flex-col gap-3.5 pb-8 border-b border-gray-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    9
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    التعديلات على سياسة الخصوصية
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  قد نقوم بتحديث سياسة الخصوصية هذه دورياً لتتواكب مع أي تطورات تقنية أو تعديلات تنظيمية وقانونية. سنقوم بنشر أي تحديثات على هذه الصفحة مع تعديل تاريخ "آخر تحديث". يُعد استمرارك في استخدام المنصة بعد نشر التعديلات موافقة على النسخة المحدثة.
                </p>
              </section>

              {/* ── Section 10: Contact DPO ── */}
              <section id="contact-dpo" className="scroll-mt-28 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="size-8 rounded-lg bg-[#1a5a81]/10 text-[#1a5a81] flex items-center justify-center font-bold text-sm shrink-0">
                    10
                  </span>
                  <h2 className="font-['Almarai'] font-bold text-2xl text-[#1a5a81] m-0">
                    التواصل ومسؤول حماية البيانات
                  </h2>
                </div>

                <p className="font-['Tajawal'] text-[16px] text-gray-700 leading-[1.8] m-0">
                  إذا كانت لديك أي استفسارات أو ملاحظات أو رغبة في ممارسة حقوقك المتعلقة ببياناتك الشخصية، يُسعدنا تواصلك مع فريق الخصوصية وحماية البيانات في منصة حافظ عبر الوسائل التالية:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="border border-gray-200/80 rounded-xl p-4 bg-gray-50/50">
                    <p className="font-['Almarai'] font-bold text-sm text-[#1a5a81] m-0 mb-1">
                      البريد الإلكتروني للخصوصية:
                    </p>
                    <p className="font-['Tajawal'] text-sm text-gray-600 m-0" dir="ltr">
                      privacy@hafez.app
                    </p>
                  </div>
                  <div className="border border-gray-200/80 rounded-xl p-4 bg-gray-50/50">
                    <p className="font-['Almarai'] font-bold text-sm text-[#1a5a81] m-0 mb-1">
                      الدعم الفني عبر واتساب:
                    </p>
                    <a
                      href="/#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("home", "#contact");
                      }}
                      className="font-['Tajawal'] text-sm text-[#cab178] hover:underline font-bold no-underline"
                    >
                      التواصل الفوري مع الدعم الفني
                    </a>
                  </div>
                </div>
              </section>

              {/* Bottom Actions Card */}
              <div className="bg-[#1a5a81] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md mt-6">
                <div className="text-right">
                  <h4 className="font-['Almarai'] font-bold text-xl text-white mb-2">
                    حماية بيانتك وبيانات طلابك أولويتنا القصوى
                  </h4>
                  <p className="font-['Tajawal'] text-sm sm:text-base text-white/85 m-0 max-w-lg">
                    انضم الآن للمنصة الأكثر أماناً وموثوقية في إدارة الحلقات القرآنية على مستوى العالم الإسلامي.
                  </p>
                </div>

                <a
                  href="/#offers"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("home", "#offers");
                  }}
                  className="
                    bg-[#cab178] hover:bg-[#b89e67] text-white
                    font-['Almarai'] font-bold text-[16px]
                    px-6 py-3 rounded-lg shadow-sm
                    transition-all duration-200 cursor-pointer whitespace-nowrap
                    hover:scale-105 active:scale-95 no-underline inline-block
                  "
                >
                  طلب نسخة تجريبية
                </a>
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

