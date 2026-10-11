import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { rolesDetailsData, type RoleDetail } from "../data/rolesData";
import { IMAGES } from "../constants/images";

interface RoleDetailsProps {
  initialRoleId?: string;
}

interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function RoleDetails({
  initialRoleId = "student",
}: RoleDetailsProps) {
  const role: RoleDetail =
    rolesDetailsData[initialRoleId] ?? rolesDetailsData.student ?? rolesDetailsData.supervisor;

  // 9 Slides matching the 9 pagination dots in Figma node 225:37
  const slides: SlideItem[] = [
    {
      id: "slide-1",
      title: "إدارة المهام",
      subtitle: "متابعة المهام اليومية للحفظ والمراجعة",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-2",
      title: "المصحف الإلكتروني والتلاوة",
      subtitle: "مصحف ملون بأحكام التجويد مع استماع لكبار القراء",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-3",
      title: "جدول الورد اليومي",
      subtitle: "خطة حفظ ومراجعة دقيقة ومحدثة يومياً",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-4",
      title: "لوحة الشرف والأوسمة",
      subtitle: "ميداليات تشجيعية وتنافس إيجابي بين الحفاظ",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-5",
      title: "سجل الإنجاز والشهادات",
      subtitle: "توثيق رسمي للاختبارات والإجازات القرآنية",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-6",
      title: "الحلقات التفاعلية",
      subtitle: "حضور مباشر وتسميع صوتي تفاعلي مع المعلم",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-7",
      title: "الاختبار الذاتي التجريبي",
      subtitle: "إخفاء الآيات وتأكيد الحفظ قبل التسميع",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-8",
      title: "إدارة المهام",
      subtitle: "متابعة المهام اليومية للحفظ والمراجعة",
      image: IMAGES.gallerySlide,
    },
    {
      id: "slide-9",
      title: "التقارير اليومية والشهرية",
      subtitle: "إحصائيات تفصيلية لمعدل الحفظ والالتزام التراكمي",
      image: IMAGES.gallerySlide,
    },
  ];

  // In Figma node 225:37, dot #7 (index 7) was active by default
  const [activeSlideIndex, setActiveSlideIndex] = useState(7);

  // Automatically scroll to the top of the page when this detail view mounts or role changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [initialRoleId]);

  const scrollToPreview = () => {
    document.getElementById("system-preview")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 3 Feature Cards matching Figma node 225:202
  const featureCards = [
    {
      title: `دور ${role.title}`,
      description:
        role.features?.[0]?.description ??
        "هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري",
    },
    {
      title: `دور ${role.title}`,
      description:
        role.features?.[1]?.description ??
        "هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري",
    },
    {
      title: `دور ${role.title}`,
      description:
        role.features?.[2]?.description ??
        "هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري",
    },
  ];

  const currentSlide = slides[activeSlideIndex] ?? slides[0];

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white text-[#303030]"
      dir="rtl"
    >
      <Navbar activePage="roles" />

      <main className="pt-[95px] flex flex-col items-center w-full">
        {/* ─── Hero Section (Figma node 240:66) ─── */}
        <section
          className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[153px] pt-10 sm:pt-16 lg:pt-[100px] pb-12 lg:pb-[60px]"
          data-node-id="240:66"
        >
          {/* RTL flex-row: Child 1 (Text) is on the RIGHT, Child 2 (Image) is on the LEFT */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Title & Description Text (on the RIGHT in RTL) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="w-full lg:max-w-[751px] flex flex-col items-start text-right"
              data-node-id="240:69"
            >
              <h1
                className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.3] lg:leading-[73.3px] m-0 mb-4 sm:mb-6 text-right whitespace-normal"
                data-node-id="240:73"
              >
                دور {role.title} في منصة حافظ
              </h1>

              <p
                className="font-['Almarai:Regular'] text-[#666666] text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed lg:leading-[51px] text-right m-0"
                data-node-id="240:75"
              >
                {role.heroSubtitle && role.heroSubtitle.length > 50
                  ? role.heroSubtitle
                  : "هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محطتي الكويت، والحمدي، ويعتبر آية في الفن المعماري"}
              </p>
            </motion.div>

            {/* Character Illustration with Organic Arch Background (on the LEFT in RTL) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[383px] h-[360px] sm:h-[424px] flex items-center justify-center shrink-0"
              data-node-id="240:68"
            >
              {/* Organic curved arch shape (Figma Rectangle 39633 rotated 180) */}
              <div
                className="absolute w-[300px] sm:w-[364px] h-[280px] sm:h-[335px] -left-2 sm:-left-3 top-[60px] sm:top-[85px] rotate-180 pointer-events-none select-none z-0"
                data-node-id="240:67"
              >
                <img
                  src={IMAGES.roleHeroArch}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain block drop-shadow-sm"
                />
              </div>

              {/* Character Illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
                <img
                  src={role.bookCover}
                  alt={`دور ${role.title}`}
                  className="max-h-[380px] sm:max-h-[424px] w-auto max-w-[110%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── First Pill Button & Subtitle (Figma node 240:57) ─── */}
        <section
          className="w-full flex flex-col items-center gap-[10px] px-4 pt-4 sm:pt-6"
          data-node-id="240:57"
        >
          <button
            type="button"
            onClick={scrollToPreview}
            className="group relative bg-[#1a5a81] hover:bg-[#154e70] active:scale-95 flex items-center gap-[7px] px-[27px] py-[8.5px] rounded-full text-white font-['Almarai:Bold'] font-bold text-[14px] leading-none shadow-[0px_8.5px_12.7px_-2.5px_rgba(0,0,0,0.1),0px_3.4px_5.1px_-3.4px_rgba(0,0,0,0.1)] transition-all cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#cab178]"
            data-node-id="240:58"
          >
            <svg
              className="size-[13.5px] transition-transform group-hover:rotate-90 duration-200"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1v12M1 7h12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>صور من النظام</span>
          </button>

          <div
            className="font-['Almarai:Regular'] text-[#666666] text-[15px] sm:text-[20px] text-center max-w-[670px] leading-normal mt-2"
            data-node-id="240:65"
          >
            <p className="m-0 mb-1">
              استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية، والتقارير المتاحة
            </p>
            <p className="m-0">
              لـ {role.title} في منصة حافظ.
            </p>
          </div>
        </section>

        {/* ─── Three Cards (Figma node 225:202) ─── */}
        <section
          className="w-full max-w-[1440px] px-4 sm:px-6 pt-10 sm:pt-14"
          data-node-id="225:202"
        >
          <div className="flex flex-wrap items-center justify-center gap-[20px] lg:gap-[30px] w-full">
            {featureCards.map((card, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white w-full sm:w-[324px] min-h-[160px] p-[20px] rounded-[20px] shadow-[0px_0px_10.6px_0px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_20px_0px_rgba(26,90,129,0.18)] transition-all duration-300 flex flex-col justify-between"
                data-node-id={`card-${idx}`}
              >
                <div className="flex items-center justify-between w-full pb-[8.3px]">
                  <h3 className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[20px] leading-[29.2px] m-0">
                    {card.title}
                  </h3>
                  <div
                    className="size-[14px] rounded-full bg-[#cab178] shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Almarai:Regular'] text-[#666666] text-[12px] leading-[20.3px] text-right m-0 line-clamp-4">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ─── Slanted Ribbon Section Title (Figma node 249:172) ─── */}
        <section
          className="w-full flex items-center justify-center pt-14 sm:pt-20 select-none"
          data-node-id="249:172"
        >
          <div className="relative inline-grid place-items-start leading-[0]">
            {/* Background gold tilted & skewed ribbon */}
            <div
              className="row-start-1 col-start-1 w-[320px] sm:w-[411px] h-[52px] sm:h-[63px] flex items-center justify-center"
              data-node-id="249:173"
            >
              <div className="w-[316px] sm:w-[410.8px] h-[45px] sm:h-[52.3px] bg-[#cab178] -rotate-[1.5deg] -skew-x-[2.05deg] rounded-sm" />
            </div>

            {/* Foreground dark blue ribbon banner */}
            <div
              className="row-start-1 col-start-1 w-[316px] sm:w-[410.4px] h-[45px] sm:h-[52.4px] bg-[#1a5a81] mt-[5.15px] mr-[0.36px] flex items-center justify-center px-[5.5px] rounded-sm shadow-md"
              data-node-id="249:174"
            >
              <h2
                className="font-['Almarai:Bold'] font-bold text-white text-[20px] sm:text-[24px] leading-[32.8px] m-0 text-center whitespace-nowrap"
                data-node-id="249:175"
              >
                صور من النظام
              </h2>
            </div>
          </div>
        </section>

        {/* ─── Second Pill Button & Subtitle (Figma node 225:253) ─── */}
        <section
          className="w-full flex flex-col items-center gap-[10px] px-4 pt-6 sm:pt-10"
          data-node-id="225:253"
        >
          <button
            type="button"
            onClick={scrollToPreview}
            className="group relative bg-[#1a5a81] hover:bg-[#154e70] active:scale-95 flex items-center gap-[7px] px-[27px] py-[8.5px] rounded-full text-white font-['Almarai:Bold'] font-bold text-[14px] leading-none shadow-[0px_8.5px_12.7px_-2.5px_rgba(0,0,0,0.1),0px_3.4px_5.1px_-3.4px_rgba(0,0,0,0.1)] transition-all cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#cab178]"
            data-node-id="225:254"
          >
            <svg
              className="size-[13.5px] transition-transform group-hover:rotate-90 duration-200"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 1v12M1 7h12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>صور من النظام</span>
          </button>

          <div
            className="font-['Almarai:Regular'] text-[#666666] text-[15px] sm:text-[20px] text-center max-w-[670px] leading-normal mt-2"
            data-node-id="225:261"
          >
            <p className="m-0 mb-1">
              استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية، والتقارير المتاحة
            </p>
            <p className="m-0">
              لـ {role.title} في منصة حافظ.
            </p>
          </div>
        </section>

        {/* ─── System Showcase Carousel (Figma node 225:235) ─── */}
        <section
          id="system-preview"
          className="w-full max-w-[1440px] px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24 flex flex-col items-center gap-8 sm:gap-12 scroll-mt-28"
          data-node-id="225:235"
        >
          {/* Main Screenshot Container */}
          <div
            className="relative w-full max-w-[666px] flex items-center justify-center group"
            data-node-id="225:236"
          >
            {/* Previous Arrow */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="الشريحة السابقة"
              className="absolute -right-4 sm:-right-12 z-20 size-10 rounded-full bg-white/90 hover:bg-white text-[#1a5a81] shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5a81]"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="الشريحة التالية"
              className="absolute -left-4 sm:-left-12 z-20 size-10 rounded-full bg-white/90 hover:bg-white text-[#1a5a81] shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5a81]"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-[16px] overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.12)] border border-[#e8ecee] bg-[#f9fafb]"
                data-node-id="225:239"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-auto max-h-[444px] object-contain block mx-auto pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Titles below screenshot */}
          <div
            className="flex flex-col items-center text-center gap-[10px]"
            data-node-id="236:60"
          >
            <h3
              className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[20px] sm:text-[24px] leading-normal m-0"
              data-node-id="236:61"
            >
              {currentSlide.title}
            </h3>
            <p
              className="font-['Almarai:Regular'] text-[#666666] text-[16px] sm:text-[20px] leading-normal m-0"
              data-node-id="236:63"
            >
              {currentSlide.subtitle}
            </p>
          </div>

          {/* 9 Pagination Dots (Figma node 225:242) */}
          <div
            className="flex items-center justify-center gap-[13px]"
            data-node-id="225:242"
          >
            {slides.map((_, idx) => {
              const isActive = activeSlideIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-[13px] rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-[41.8px] bg-[#1a5a81] shadow-sm"
                      : "w-[13px] bg-[#97bacf] hover:bg-[#1a5a81]/70"
                  }`}
                  aria-label={`الانتقال إلى الشريحة ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  data-node-id={`dot-${idx}`}
                />
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
