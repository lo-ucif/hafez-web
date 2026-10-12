import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { rolesDetailsData, type RoleDetail } from "../data/rolesData";
import { IMAGES } from "../constants/images";
import SectionTitle from "../components/common/SectionTitle";

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
    rolesDetailsData[initialRoleId] ??
    rolesDetailsData.student ??
    rolesDetailsData.supervisor;

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
          <div className="flex flex-col lg:flex-row  items-center justify-between gap-10 lg:gap-14">
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
                className="absolute w-[300px] sm:w-[364px] h-[280px] sm:h-[335px] -left-1 sm:-left-3 top-[60px] sm:top-[85px] rotate-180 pointer-events-none select-none z-0"
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
          <div className="relative inline-grid place-items-start leading-[0]">
            {/* Foreground dark blue ribbon banner */}
            <div
              className="row-start-1 z-20 col-start-1 w-[316px] sm:w-[410.4px] h-[45px] sm:h-[52.4px] bg-[#1a5a81] mt-[5.15px] mr-[0.36px] flex items-center justify-center px-[5.5px] rounded-sm shadow-md"
              data-node-id="249:174"
            >
              <h2
                className="font-['Almarai']  text-white text-[16px] sm:text-[24px] leading-[32.8px] m-0 text-center whitespace-nowrap"
                data-node-id="249:175"
              >
                صور من النظام
              </h2>
            </div>
            {/* Background gold tilted & skewed ribbon */}
            <div
              className="row-start-1 col-start-1 w-[320px] sm:w-[411px] h-[52px] sm:h-[63px] flex items-center justify-center"
              data-node-id="249:173"
            >
              <div className="w-[316px] sm:w-[410.8px] h-[45px] sm:h-[52.3px] bg-[#cab178] -rotate-[1.5deg] -skew-x-[2.05deg] rounded-sm" />
            </div>
          </div>

          <div
            className="font-['Almarai:Regular'] text-[#666666] text-[15px] sm:text-[20px] text-center max-w-[670px] leading-normal mt-2"
            data-node-id="240:65"
          >
            <p className="m-0 mb-1">
              استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية،
              والتقارير المتاحة
            </p>
            <p className="m-0">لـ {role.title} في منصة حافظ.</p>
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
                className="bg-white w-full sm:w-[324px] h-fit md:min-h-[140px] p-[20px] rounded-[20px] shadow-[0px_0px_10.6px_0px_rgba(0,0,0,0.25)] hover:shadow-[0px_8px_20px_0px_rgba(26,90,129,0.18)] transition-all duration-300 flex flex-col "
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
            {/* Foreground dark blue ribbon banner */}
            <div
              className="row-start-1 z-20 col-start-1 w-[316px] sm:w-[410.4px] h-[45px] sm:h-[52.4px] bg-[#1a5a81] mt-[5.15px] mr-[0.36px] flex items-center justify-center px-[5.5px] rounded-sm shadow-md"
              data-node-id="249:174"
            >
              <h2
                className="font-['Almarai']  text-white text-[16px] sm:text-[24px] leading-[32.8px] m-0 text-center whitespace-nowrap"
                data-node-id="249:175"
              >
                صور من النظام
              </h2>
            </div>
            {/* Background gold tilted & skewed ribbon */}
            <div
              className="row-start-1 col-start-1 w-[320px] sm:w-[411px] h-[52px] sm:h-[63px] flex items-center justify-center"
              data-node-id="249:173"
            >
              <div className="w-[316px] sm:w-[410.8px] h-[45px] sm:h-[52.3px] bg-[#cab178] -rotate-[1.5deg] -skew-x-[2.05deg] rounded-sm" />
            </div>
          </div>
        </section>
        {/* ─── Second Pill Button & Subtitle (Figma node 225:253) ─── */}
        <section
          className="w-full flex flex-col items-center gap-[10px] px-4 pt-6 sm:pt-10"
          data-node-id="225:253"
        >
          <div
            className="font-['Almarai:Regular'] text-[#666666] text-[15px] sm:text-[20px] text-center max-w-[670px] leading-normal mt-2"
            data-node-id="225:261"
          >
            <p className="m-0 mb-1">
              استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية،
              والتقارير المتاحة
            </p>
            <p className="m-0">لـ {role.title} في منصة حافظ.</p>
          </div>
        </section>
        {/* ─── System Showcase Carousel (Figma node 225:235) ─── */}
        ```tsx
        <section
          id="gallery"
          aria-label="صور من النظام"
          className="
    bg-white flex flex-col gap-8 md:gap-[60px] items-center overflow-clip
    pb-12 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
    relative w-full max-w-[1440px] mx-auto scroll-mt-28
  "
        >
          <SectionTitle title="صور من النظام" />

          {/* حاوية معرض الصور */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
      flex gap-2 sm:gap-4 md:gap-[84px]
      items-center justify-center relative
      w-full max-w-[1034px]
    "
          >
            {/* زر الصورة السابقة */}
            <motion.button
              type="button"
              onClick={handlePrevSlide}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.88 }}
              aria-label="الشريحة السابقة"
              className="
        flex items-center justify-center
        size-[28px] sm:size-[36px] md:size-[54px]
        cursor-pointer opacity-80 hover:opacity-100
        transition-opacity shrink-0
      "
            >
              <div
                className="
          flex-none rotate-270
          size-[21px] sm:size-[30px] md:size-[54px]
          relative
        "
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="absolute block inset-0 max-w-none size-full"
                  src={IMAGES.galleryArrowRight}
                />
              </div>
            </motion.button>

            {/* الصورة الحالية */}
            <div
              className="
        w-[258px] sm:w-[380px] md:w-[666px]
        aspect-[666/444]
        relative rounded-[8px] sm:rounded-[12px]
        overflow-hidden shadow-lg bg-gray-100 shrink-0
      "
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 object-contain size-full"
                />
              </AnimatePresence>
            </div>

            {/* زر الصورة التالية */}
            <motion.button
              type="button"
              onClick={handleNextSlide}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.88 }}
              aria-label="الشريحة التالية"
              className="
                            flex items-center justify-center
                            size-[28px] sm:size-[36px] md:size-[54px]
                            cursor-pointer opacity-80 hover:opacity-100
                            transition-opacity shrink-0
                          "
            >
              <div
                className="
                              -rotate-270 flex-none
                              size-[21px] sm:size-[30px] md:size-[54px]
                              relative
                            "
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="absolute block inset-0 max-w-none size-full"
                  src={IMAGES.galleryArrowLeft}
                />
              </div>
            </motion.button>
          </motion.div>

          {/* عنوان ووصف الصورة الحالية */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`description-${currentSlide.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4 max-w-xl"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1a5a81]">
                {currentSlide.title}
              </h3>

              <p className="mt-2 text-sm md:text-base text-gray-600">
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* مؤشرات الصور */}
          <div
            className="flex gap-1.5 sm:gap-2 md:gap-[13px] items-center"
            role="tablist"
            aria-label="مؤشرات الشرائح"
          >
            {slides.map((slide, index) => {
              const isActive = activeSlideIndex === index;

              return (
                <motion.button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`الشريحة ${index + 1}: ${slide.title}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`
            transition-all duration-300 rounded-full
            cursor-pointer p-0 border-none shrink-0
            ${
              isActive
                ? "bg-[#1a5a81] h-[6.7px] md:h-[13px] w-[21px] md:w-[42px]"
                : "bg-[#97bacf] size-[6.7px] md:size-[13px] hover:bg-[#78a5bf]"
            }
          `}
                />
              );
            })}
          </div>
        </section>
        ```
      </main>

      <Footer />
    </div>
  );
}
