import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ArabicBg from "../components/common/ArabicBg";
import SectionTitle from "../components/common/SectionTitle";
import { rolesDetailsData, type RoleDetail } from "../data/rolesData";
import { IMAGES } from "../constants/images";

interface RoleDetailsProps {
  initialRoleId?: string;
}

export default function RoleDetails({
  initialRoleId = "supervisor",
}: RoleDetailsProps) {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(() => {
    return rolesDetailsData[initialRoleId] ? initialRoleId : "supervisor";
  });

  const [activeScreenTab, setActiveScreenTab] = useState<number>(0);

  // Scroll to top when changing role
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [selectedRoleId]);

  const currentRole: RoleDetail =
    rolesDetailsData[selectedRoleId] || rolesDetailsData.supervisor;

  const handleRoleSelect = (roleId: string) => {
    setSelectedRoleId(roleId);
    setActiveScreenTab(0);
    const hash = `#/role/${roleId}`;
    window.history.pushState(null, "", hash);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const handleBackToUsers = () => {
    window.location.hash = "#users";
  };

  const scrollToPlatformPreview = () => {
    document.getElementById("role-platform-preview")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const roleKeys = Object.keys(rolesDetailsData);
  const highlightFeatures = currentRole.features.slice(0, 3);

  return (
    <div
      className="min-h-screen bg-[#FDFCFB] text-gray-900 flex flex-col overflow-x-hidden font-['Almarai']"
      dir="rtl"
    >
      <Navbar activePage="roles" />

      <main className="flex-1 w-full pt-[90px] md:pt-[130px] pb-20 relative">
        {/* Subtle decorative Islamic watermark */}
{/* 
        <div className="flex items-center justify-end w-full relative z-10 px-1">
          <motion.button
            type="button"
            onClick={handleBackToUsers}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
                  bg-[#1a5a81] flex gap-[7px] items-center
                  px-5 py-[8.5px] rounded-full shadow-md
                  cursor-pointer hover:bg-[#154e70] transition-colors border-0
                "
            aria-label="إغلاق تفاصيل المستخدم والعودة إلى البطاقات"
          >
            <span className="font-['Almarai:Bold'] text-[14px] text-white leading-none">
              إغلاق التفاصيل
            </span>
            <svg
              className="w-[15px] h-[15px] text-white"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
            </svg>
          </motion.button>
        </div> */}
        <div className="absolute top-10 right-0 pointer-events-none opacity-20 overflow-hidden">
          <ArabicBg
            positionClass="relative"
            sizeClass="size-[550px]"
            opacityClass="opacity-10"
          />
        </div>
        <div className="absolute bottom-40 -left-20 pointer-events-none opacity-15 overflow-hidden">
          <ArabicBg
            positionClass="relative"
            sizeClass="size-[450px]"
            opacityClass="opacity-10"
          />
        </div>

        <div className="w-full max-w-[1240px] mx-auto px-1 sm:px-6 md:px-1 relative z-10 h-fit">
          {/* ── Expanded role card (Figma CardContainer) ── */}
          <div
            className="
              relative flex flex-col gap-5 md:gap-8 items-center
              py-10 md:py-1 px-8 md:px-1 mb-10 md:mb-12
              rounded-[32px] md:rounded-[74px] w-full overflow-hidden
              drop-shadow-[0px_26px_20px_rgba(0,0,0,0.08),0px_10px_8px_rgba(0,0,0,0.06)]
            "
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.002) 0%, rgba(255,255,255,0.002) 100%), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)",
            }}
          >
            <ArabicBg
              positionClass="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              sizeClass="size-[min(1453px,200vw)]"
              opacityClass="opacity-[0.08]"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-col lg:flex-row items-center justify-end gap-1 lg:gap-1 w-full max-w-287.5"
              >
                <div className="h-[320px] sm:h-[380px] lg:h-[424px] relative rounded-[9.242px] shrink-0 w-full max-w-95 overflow-hidden">
                  <img
                    src={currentRole.bookCover}
                    alt={`غلاف دور ${currentRole.title}`}
                    className="absolute h-full max-w-none rounded-[9.242px]"
                    style={{
                      left: currentRole.coverOffsetX,
                      top: currentRole.coverOffsetY,
                      width: currentRole.coverScale,
                    }}
                  />
                </div>

                <div className="flex flex-col items-end justify-center text-right w-full lg:max-w-[751px] gap-4">
                  <h1 className="font-['Almarai:Bold'] text-[#1a5a81] text-3xl sm:text-4xl lg:text-[48px] leading-tight m-0 text-center lg:text-right w-full">
                    {currentRole.heroHeadline}
                  </h1>
                  <p className="font-['Almarai:Regular'] text-[#666] text-base sm:text-lg lg:text-2xl leading-relaxed m-0">
                    {currentRole.heroSubtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* <div className="relative z-10 flex flex-wrap gap-5 md:gap-[30px] items-stretch justify-center w-full max-w-[1050px]">
              {highlightFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white flex flex-col min-h-[160px] w-full sm:w-[324px]
                    p-5 rounded-[20px] shadow-[0px_0px_10.6px_0px_rgba(0,0,0,0.25)]
                    text-right
                  "
                >
                  <div className="flex items-center justify-between pb-2 mb-1">
                    <span className="bg-[#cab178] rounded-full size-[14px] shrink-0" aria-hidden="true" />
                    <h3 className="font-['Almarai:Bold'] text-[#1a5a81] text-[20px] m-0">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-['Almarai:Regular'] text-[#666] text-xs leading-relaxed m-0">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div> */}

            {/* <motion.button
              type="button"
              onClick={scrollToPlatformPreview}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative z-10 bg-[#1a5a81] flex gap-[7px] items-center
                px-[27px] py-[8.5px] rounded-full shadow-md
                cursor-pointer hover:bg-[#154e70] transition-colors border-0
              "
            >
              <img alt="" aria-hidden="true" className="size-[14px]" src={IMAGES.plusIcon} />
              <span className="font-['Almarai:Bold'] text-[14px] text-white leading-none">المزيد</span>
            </motion.button> */}
          </div>

          {/* ── Role Switcher Tabs ── */}
          {/* <div className="mb-12">
            <div className="text-center mb-5">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                اختر مستخدم النظام لاستعراض دوره وصلاحياته
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 p-1.5 bg-gray-100/80 rounded-2xl max-w-2xl mx-auto border border-gray-200/60 shadow-inner">
              {roleKeys.map((key) => {
                const roleItem = rolesDetailsData[key];
                const isActive = key === selectedRoleId;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleRoleSelect(key)}
                    className={`
                      relative flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm md:text-base font-bold
                      transition-all duration-200 cursor-pointer flex items-center justify-center gap-2
                      ${
                        isActive
                          ? "bg-[#1a5a81] text-white shadow-md shadow-[#1a5a81]/25"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                      }
                    `}
                  >
                    <span>{roleItem.title}</span>
                    <span
                      className={`
                        text-[10px] px-1.5 py-0.5 rounded-md
                        ${isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"}
                      `}
                    >
                      {roleItem.roleType.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div> */}

          {/* ── Key Responsibilities & Capabilities Cards ── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <SectionTitle
                title={`المهام والصلاحيات الرئيسية لـ ${currentRole.title}`}
              />
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3">
                مجموعة متكاملة من الأدوات والخصائص البرمجية المصممة لتسهيل أداء{" "}
                {currentRole.title} بدقة وإتقان.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentRole.features.map((feature, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 25px -5px rgba(26,90,129,0.12), 0 8px 10px -6px rgba(26,90,129,0.08)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    backdrop-blur-[34.87px] bg-white
                    drop-shadow-[0px_2px_3px_rgba(0,0,0,0.12)]
                    flex flex-col gap-6 md:gap-[34px]
                    min-h-[290px] md:h-[311px]
                    items-center justify-center
                    pb-5 pt-6 px-4
                    relative rounded-[24px]
                    w-full overflow-hidden
                    cursor-pointer select-none
                  "
                >
                  {/* الخلفية الزخرفية */}
                  <ArabicBg
                    positionClass="-translate-x-1/2 left-1/2 top-0"
                    sizeClass="size-[308px]"
                    opacityClass="opacity-6"
                  />

                  {/* الأيقونة */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 0.3 }}
                    className=" relative z-10 shrink-0
                        size-[75px] md:size-[90px]
                        rounded-xl
                        bg-[#1a5a81]/8
                        text-[#1a5a81]
                        flex items-center justify-center
                        [&_svg]:size-10
                      "
                  >
                    <FeatureIcon name={feature.icon} />
                  </motion.div>

                  {/* العنوان */}
                  <h3
                    dir="auto"
                    className="relative z-10
                              font-['Almarai:Bold']
                              not-italic
                              text-[20px] md:text-[24px]
                              text-black text-center
                              leading-normal
                              m-0
                            "
                  >
                    {feature.title}
                  </h3>

                  {/* الوصف */}
                  <p
                    dir="auto"
                    className="relative z-10
                    font-['Almarai:Regular']
                    not-italic
                    text-[15px] md:text-[18px]
                    text-[rgba(0,0,0,0.6)]
                    text-center leading-relaxed
                    m-0 max-w-[300px]
                  "
                  >
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
            ```
          </section>

          {/* ── Workflow Steps: The Role Journey in Hafez ── */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <SectionTitle
                title={`دورة العمل اليومية لـ ${currentRole.title}`}
              />
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3">
                خطوات واضحة ومترابطة تحول الإجراءات التقليدية إلى تجربة رقمية
                ميسرة من البداية حتى الختمة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentRole.workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-3 text-right"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#cab178] font-mono">
                      {step.stepNumber}
                    </span>
                    <span className="size-2 rounded-full bg-[#1a5a81]" />
                  </div>
                  <h4 className="text-base font-bold text-gray-800 m-0">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed m-0">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Call to Action Banner ── */}
          <section className="bg-gradient-to-br from-[#1a5a81] to-[#15455E] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-center">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <ArabicBg
                positionClass="absolute top-0 right-0"
                sizeClass="size-[400px]"
                opacityClass="opacity-10"
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
              <span className="text-xs font-bold text-[#cab178] tracking-widest uppercase">
                منظومة حافظ لإدارة الحلقات القرآنية
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight m-0 text-white">
                هل ترغب في تجربة لوحة تحكم {currentRole.title} عملياً؟
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed m-0">
                احصل على عرض توضيحي حي للمنصة وتعرف على كيفية تيسير إدارة
                مجمعاتكم القرآنية ورفع مستوى إتقان طلابكم.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
                <a
                  href="#pricing"
                  className="
                    bg-[#cab178] hover:bg-[#bfa56a] text-white font-bold
                    px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl
                    no-underline text-base
                  "
                >
                  طلب نسخة تجريبية
                </a>

                <a
                  href="#contact"
                  className="
                    bg-white/10 hover:bg-white/20 text-white font-bold
                    px-6 py-3 rounded-xl transition-all border border-white/20
                    no-underline text-base
                  "
                >
                  تواصل مع فريق الدعم
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ─── UI Helper Icons ──────────────────────────────────────────────────────────

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "circles":
    case "virtual-circle":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18v-9h9" />
        </svg>
      );
    case "teachers":
    case "chat":
    case "teacher-talk":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "reports":
    case "progress-card":
    case "subscription":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "exams":
    case "certificate":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case "plans":
    case "schedule":
    case "attendance":
    case "attendance-track":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "alerts":
    case "live-notify":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "quran":
    case "recitation":
    case "self-test":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "rewards":
    case "gamification":
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return (
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
}

// ─── SUPERVISOR DASHBOARD MOCKUP ───────────────────────────────────────────────

function SupervisorDashboardMockup({ activeTab }: { activeTab: number }) {
  if (activeTab === 1) {
    // Screen: Circles Management
    return (
      <div className="flex flex-col gap-4 text-right">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div>
            <h4 className="text-base font-bold text-gray-800 m-0">
              قائمة الحلقات والمقارئ النشطة
            </h4>
            <span className="text-xs text-gray-500">
              24 حلقة موزعة على الفترات الصباحية والمسائية
            </span>
          </div>
          <button
            type="button"
            className="bg-[#1a5a81] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-default"
          >
            <span>+ إضافة حلقة جديدة</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right">
            <thead>
              <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                <th className="p-2.5 font-bold">اسم الحلقة</th>
                <th className="p-2.5 font-bold">المعلم المسؤول</th>
                <th className="p-2.5 font-bold">عدد الطلاب</th>
                <th className="p-2.5 font-bold">الفترة</th>
                <th className="p-2.5 font-bold">نسبة الالتزام</th>
                <th className="p-2.5 font-bold">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/80">
                <td className="p-2.5 font-bold text-[#1a5a81]">
                  حلقة الإمام الشاطبي
                </td>
                <td className="p-2.5 text-gray-700">الشيخ عثمان الخميس</td>
                <td className="p-2.5 font-semibold">18 طالباً</td>
                <td className="p-2.5 text-gray-600">عصراً (حضوري)</td>
                <td className="p-2.5">
                  <span className="text-emerald-600 font-bold">98%</span>
                </td>
                <td className="p-2.5">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    نشطة الآن
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/80">
                <td className="p-2.5 font-bold text-[#1a5a81]">
                  حلقة الإمام نافع (عن بعد)
                </td>
                <td className="p-2.5 text-gray-700">الشيخ عبد الله الحربي</td>
                <td className="p-2.5 font-semibold">15 طالباً</td>
                <td className="p-2.5 text-gray-600">مغرباً (افتراضي)</td>
                <td className="p-2.5">
                  <span className="text-emerald-600 font-bold">95%</span>
                </td>
                <td className="p-2.5">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    نشطة الآن
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/80">
                <td className="p-2.5 font-bold text-[#1a5a81]">
                  حلقة البراعم والأشبال
                </td>
                <td className="p-2.5 text-gray-700">أ. مصطفى الشامي</td>
                <td className="p-2.5 font-semibold">22 طالباً</td>
                <td className="p-2.5 text-gray-600">عصراً (حضوري)</td>
                <td className="p-2.5">
                  <span className="text-amber-600 font-bold">89%</span>
                </td>
                <td className="p-2.5">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    مكتملة
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/80">
                <td className="p-2.5 font-bold text-[#1a5a81]">
                  حلقة الإجازات والسند
                </td>
                <td className="p-2.5 text-gray-700">د. مصطفى إسماعيل</td>
                <td className="p-2.5 font-semibold">8 طلاب</td>
                <td className="p-2.5 text-gray-600">فجراً (حضوري)</td>
                <td className="p-2.5">
                  <span className="text-emerald-600 font-bold">100%</span>
                </td>
                <td className="p-2.5">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    ممتازة
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (activeTab === 2) {
    // Screen: Reports & Analytics
    return (
      <div className="flex flex-col gap-4 text-right">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div>
            <h4 className="text-base font-bold text-gray-800 m-0">
              التقارير التراكمية ومؤشرات الإنجاز
            </h4>
            <span className="text-xs text-gray-500">
              معدل التسميع لشهر رجب 1447هـ
            </span>
          </div>
          <div className="flex gap-2">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-md font-bold">
              تصدير PDF
            </span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2.5 py-1 rounded-md font-bold">
              Excel
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/70">
            <span className="text-xs text-gray-500 block mb-1">
              الصفحات المسمعة هذا الشهر
            </span>
            <span className="text-xl font-bold text-[#1a5a81]">
              14,820 صفحة
            </span>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div className="bg-[#1a5a81] h-1.5 rounded-full w-[85%]" />
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/70">
            <span className="text-xs text-gray-500 block mb-1">
              نسبة الحضور والالتزام
            </span>
            <span className="text-xl font-bold text-emerald-600">97.3%</span>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div className="bg-emerald-500 h-1.5 rounded-full w-[97%]" />
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/70">
            <span className="text-xs text-gray-500 block mb-1">
              الختمات المعتمدة
            </span>
            <span className="text-xl font-bold text-[#cab178]">12 ختمة</span>
            <span className="text-[10px] text-gray-400 mt-1 block">
              +4 قيد الاختبار النهائي
            </span>
          </div>
        </div>

        {/* Visual Graph Mockup */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
          <span className="text-xs font-bold text-gray-700 block mb-3">
            تطور وتيرة الحفظ والمراجعة خلال الأسابيع الأربعة الماضية
          </span>
          <div className="h-28 flex items-end justify-between gap-3 px-2 pt-2">
            {[
              { label: "الأسبوع 1", h: "60%", value: "3,200 ص" },
              { label: "الأسبوع 2", h: "75%", value: "3,850 ص" },
              { label: "الأسبوع 3", h: "90%", value: "4,120 ص" },
              { label: "الأسبوع 4", h: "95%", value: "4,650 ص" },
            ].map((bar, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-1.5"
              >
                <span className="text-[10px] font-bold text-[#1a5a81]">
                  {bar.value}
                </span>
                <div className="w-full bg-gray-200 rounded-t-md h-20 flex items-end">
                  <div
                    className="w-full bg-gradient-to-t from-[#1a5a81] to-[#257ba9] rounded-t-md transition-all duration-500"
                    style={{ height: bar.h }}
                  />
                </div>
                <span className="text-[10px] text-gray-500">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default: Overview Dashboard
  return (
    <div className="flex flex-col gap-4 text-right">
      {/* Top Quick Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex flex-col">
          <span className="text-[11px] text-blue-700 font-bold">
            الحلقات النشطة اليوم
          </span>
          <span className="text-2xl font-black text-[#1a5a81] mt-1">24</span>
          <span className="text-[10px] text-emerald-600 font-semibold mt-1">
            ● 100% عاملة
          </span>
        </div>
        <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-100 flex flex-col">
          <span className="text-[11px] text-amber-800 font-bold">
            الطلاب الحاضرون
          </span>
          <span className="text-2xl font-black text-[#8a7238] mt-1">598</span>
          <span className="text-[10px] text-gray-500 mt-1">
            من إجمالي 620 طالباً
          </span>
        </div>
        <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 flex flex-col">
          <span className="text-[11px] text-emerald-800 font-bold">
            جلسات التسميع المنجزة
          </span>
          <span className="text-2xl font-black text-emerald-700 mt-1">482</span>
          <span className="text-[10px] text-emerald-600 font-semibold mt-1">
            ↑ مستمر الآن
          </span>
        </div>
        <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 flex flex-col">
          <span className="text-[11px] text-purple-800 font-bold">
            تنبيهات واستئذانات
          </span>
          <span className="text-2xl font-black text-purple-700 mt-1">3</span>
          <span className="text-[10px] text-purple-600 mt-1">
            بحاجة للاعتماد
          </span>
        </div>
      </div>

      {/* Live Activity Stream */}
      <div className="border border-gray-100 rounded-xl p-3.5 bg-gray-50/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>سجل النشاط اللحظي للحلقات (مباشر)</span>
          </span>
          <span className="text-[10px] text-gray-400">تحديث تلقائي</span>
        </div>

        <div className="space-y-2">
          {[
            {
              time: "منذ دقيقتين",
              text: "أتم الطالب عبد الله أحمد تسميع سورة الكهف بتقدير ممتاز (حلقة الشاطبي)",
              tag: "تسميع جديد",
              color: "text-emerald-700 bg-emerald-50",
            },
            {
              time: "منذ 6 دقائق",
              text: "اعتمد الشيخ عثمان الخميس اختبار الجزء الخامس للطالب عمر فهد",
              tag: "اختبار جزء",
              color: "text-blue-700 bg-blue-50",
            },
            {
              time: "منذ 11 دقيقة",
              text: "تسجيل حضور 18 طالباً في حلقة الإمام نافع (عن بعد)",
              tag: "حضور وغياب",
              color: "text-amber-700 bg-amber-50",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 text-xs bg-white p-2.5 rounded-lg border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.color}`}
                >
                  {item.tag}
                </span>
                <span className="text-gray-700">{item.text}</span>
              </div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TEACHER DASHBOARD MOCKUP ─────────────────────────────────────────────────

function TeacherDashboardMockup({
  activeTab: _activeTab,
}: {
  activeTab: number;
}) {
  return (
    <div className="flex flex-col gap-4 text-right">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h4 className="text-base font-bold text-gray-800 m-0">
            جلسة التسميع اليومية • حلقة الشاطبي
          </h4>
          <span className="text-xs text-gray-500">
            الطالب الحالي: أنس عبد الرحمن • سورة يوسف (الآيات 1-20)
          </span>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
          جاري الاستماع
        </span>
      </div>

      {/* Recitation Score Card */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-gray-50 rounded-xl text-center">
          <span className="text-xs text-gray-500 block mb-1">الحفظ الجديد</span>
          <span className="text-xl font-bold text-[#1a5a81]">100 / 100</span>
          <span className="text-[10px] text-emerald-600 block mt-1">
            متقن بدون تردد
          </span>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl text-center">
          <span className="text-xs text-gray-500 block mb-1">
            أحكام التجويد
          </span>
          <span className="text-xl font-bold text-[#cab178]">95 / 100</span>
          <span className="text-[10px] text-gray-400 block mt-1">
            تنبيه على الإقلاب
          </span>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl text-center">
          <span className="text-xs text-gray-500 block mb-1">
            المراجعة الصغرى
          </span>
          <span className="text-xl font-bold text-emerald-600">ممتاز</span>
          <span className="text-[10px] text-gray-400 block mt-1">
            سورة هود كاملاً
          </span>
        </div>
      </div>

      {/* Interactive Quran Page Area */}
      <div className="p-4 bg-amber-50/40 rounded-xl border border-amber-200/50 flex flex-col items-center justify-center text-center">
        <span className="text-xs text-amber-800 font-bold mb-2">
          مصحف التقييم التفاعلي للمعلم
        </span>
        <p className="text-sm font-['Traditional_Arabic',serif] text-gray-800 max-w-md leading-loose">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الر تِلْكَ آيَاتُ الْكِتَابِ
          الْمُبِينِ • إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ
          تَعْقِلُونَ
        </p>
        <span className="text-[11px] text-gray-500 mt-2">
          (يمكن للمعلم النقر على أي كلمة لتسجيل خطأ الحفظ أو ملحوظة التجويد
          فورياً)
        </span>
      </div>
    </div>
  );
}

// ─── STUDENT DASHBOARD MOCKUP ─────────────────────────────────────────────────

function StudentDashboardMockup({
  activeTab: _activeTab,
}: {
  activeTab: number;
}) {
  return (
    <div className="flex flex-col gap-4 text-right">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h4 className="text-base font-bold text-gray-800 m-0">
            مرحباً عبد الله • وردك القرآني اليوم
          </h4>
          <span className="text-xs text-gray-500">
            سورة الكهف: من الآية 45 إلى الآية 60
          </span>
        </div>
        <span className="text-xs font-bold text-[#cab178] bg-[#cab178]/15 px-3 py-1 rounded-full">
          🔥 سلسلة 45 يوماً متواصلة
        </span>
      </div>

      <div className="p-4 bg-gradient-to-r from-[#1a5a81]/10 to-transparent rounded-xl border border-[#1a5a81]/20 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-600 block">
            نسبة إنجاز ورد اليوم
          </span>
          <span className="text-2xl font-black text-[#1a5a81]">75% مكتمل</span>
          <span className="text-xs text-gray-500 block mt-1">
            باقي مراجعة صفحتين قبل موعد الحلقة
          </span>
        </div>
        <div className="size-16 rounded-full border-4 border-[#1a5a81] border-t-[#cab178] flex items-center justify-center font-bold text-sm text-[#1a5a81]">
          75%
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
        <div className="p-2.5 bg-gray-50 rounded-lg text-center">
          <span className="text-gray-400 block text-[10px]">الوسام الأخير</span>
          <span className="font-bold text-gray-700">وسام إتقان التجويد ⭐</span>
        </div>
        <div className="p-2.5 bg-gray-50 rounded-lg text-center">
          <span className="text-gray-400 block text-[10px]">
            الترتيب على الحلقة
          </span>
          <span className="font-bold text-[#1a5a81]">المركز الثاني 🥈</span>
        </div>
        <div className="p-2.5 bg-gray-50 rounded-lg text-center">
          <span className="text-gray-400 block text-[10px]">
            الاستماع للقارئ
          </span>
          <span className="font-bold text-emerald-600">
            الشيخ الحصري (معلم)
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── PARENT DASHBOARD MOCKUP ──────────────────────────────────────────────────

function ParentDashboardMockup({
  activeTab: _activeTab,
}: {
  activeTab: number;
}) {
  return (
    <div className="flex flex-col gap-4 text-right">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h4 className="text-base font-bold text-gray-800 m-0">
            متابعة إنجاز الأبناء • اليوم
          </h4>
          <span className="text-xs text-gray-500">
            تم تحديث التقرير بعد انتهاء حلقة العصر
          </span>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
          إشعار فوري جديد
        </span>
      </div>

      <div className="p-3.5 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-[#1a5a81] text-white flex items-center justify-center font-bold text-xs">
              أ
            </span>
            <div>
              <span className="font-bold text-sm text-gray-800 block">
                أحمد (حلقة الإمام الشاطبي)
              </span>
              <span className="text-[11px] text-gray-500">
                المحفظ: الشيخ عثمان الخميس
              </span>
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-0.5 rounded-full">
            حفظ اليوم: ممتاز (10/10)
          </span>
        </div>
        <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg m-0">
          ملاحظة المعلم: "ما شاء الله، أتقن أحمد تسميع سورة مريم كاملاً اليوم مع
          انضباط عالٍ في أحكام المدود."
        </p>
      </div>

      <div className="p-3.5 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-[#cab178] text-[#15455E] flex items-center justify-center font-bold text-xs">
              ف
            </span>
            <div>
              <span className="font-bold text-sm text-gray-800 block">
                فاطمة (حلقة البراعم)
              </span>
              <span className="text-[11px] text-gray-500">
                المعلمة: أ. خديجة الأنصاري
              </span>
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-2.5 py-0.5 rounded-full">
            حفظ اليوم: ممتاز (10/10)
          </span>
        </div>
        <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg m-0">
          ملاحظة المعلمة: "حفظت جزء عم كاملاً، ومستعدة لاختبار الجزء القادم يوم
          الخميس بإذن الله."
        </p>
      </div>
    </div>
  );
}
