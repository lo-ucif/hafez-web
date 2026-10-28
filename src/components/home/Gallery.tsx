
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";


// صور معرض منصة حافظ - لقطات شاشة حقيقية من المنصة وبوابة الطالب
const gallerySlides = [
  {
    image: IMAGES.galleryDashboard,
    title: "لوحة تحكم الطالب (الرئيسية)",
    description: "واجهة متكاملة تتيح للطالب متابعة شريط تقدّم الحفظ الأسبوعي، مخطط تطور الصفحات، والوصول المباشر لكافة أدوات المنصة.",
  },
  {
    image: IMAGES.galleryAttendance,
    title: "إحصائيات المواظبة وتطور الحفظ",
    description: "رسم بياني لتطور الحفظ وعدد الصفحات، نقاط الحضور والغياب، وإحصائيات تفصيلية لمواظبة الطالب أسبوعياً وشهرياً.",
  },
  {
    image: IMAGES.galleryAchievements,
    title: "بطاقة الإنجازات القرآنية الذكية",
    description: "بطاقة رسمية معتمدة لكل طالب مع رمز QR للتحقق، معدل صفحات الحفظ، إتقان الأحكام، وسلسلة الحضور والتفوق.",
  },
  {
    image: IMAGES.galleryCircleSession,
    title: "إدارة الحلقة ومتابعة حضور الطلاب",
    description: "واجهة تفاعلية للمعلم لرصد حضور وغياب الطلاب في الحلقة، تدوين الملاحظات الفردية، وتوثيق تقييم الحفظ والتسميع.",
  },
  {
    image: IMAGES.galleryDailyReview,
    title: "جدول المراجعة اليومية والمهام القرآنية",
    description: "تنظيم ورد الحفظ والمراجعة اليومية للطالب مع تحديد الآيات المستهدفة، تاريخ وتوقيت الجلسة، ومتابعة نسبة الإنجاز.",
  },
  {
    image: IMAGES.galleryLeaderboard,
    title: "لوحة المتفوقين وتحفيز التنافس",
    description: "منصة تكريم أوائل الطلاب والمتفوقين في الحفظ والتسميع، تصنيف الحلقات بالنجوم، وتعزيز روح التنافس المحمود.",
  },
  {
    image: IMAGES.galleryNotifications,
    title: "إشعارات الحلقات وجلسات التسميع",
    description: "تنبيهات فورية بمواعيد الحلقات وجلسات المراجعة، تأكيد الحضور إلكترونياً، وتسهيل تواصل المعلم مع طلابه.",
  },
];

const TOTAL_SLIDES = gallerySlides.length;

export default function Gallery() {
  // الشريحة النشطة
  const [currentSlide, setCurrentSlide] = useState(0);

  // اتجاه حركة الصور
  const [direction, setDirection] = useState(0);

  // الانتقال إلى الصورة السابقة
  const handlePrev = () => {
    setDirection(-1);

    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : TOTAL_SLIDES - 1,
    );
  };

  // الانتقال إلى الصورة التالية
  const handleNext = () => {
    setDirection(1);

    setCurrentSlide((prev) =>
      prev < TOTAL_SLIDES - 1 ? prev + 1 : 0,
    );
  };

  // الانتقال إلى صورة محددة
  const handleSelectSlide = (index: number) => {
    if (index === currentSlide) return;

    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const activeSlide = gallerySlides[currentSlide];

  return (
    <section
      id="gallery"
      aria-label="صور من النظام"
      className="
        bg-white flex flex-col gap-6 md:gap-8 items-center overflow-clip
        pb-14 md:pb-[70px] pt-12 md:pt-[90px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      <SectionTitle
        title="صور من النظام"
        subtitle="استعراض حي ومفصل للواجهات التفاعلية، لوحات التحكم، والتقارير الذكية المتاحة لكافة المستخدمين في منصة حافظ."
      />

      {/* حاوية معرض الصور */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          flex gap-4 sm:gap-8 md:gap-[84px]
          items-center justify-center relative
          w-full max-w-[1034px]
        "
      >
        {/* زر الصورة السابقة */}
        <motion.button
          type="button"
          onClick={handlePrev}
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
            w-[280px] sm:w-[480px] md:w-[780px] lg:w-[860px]
            h-auto aspect-[1024/695]
            relative rounded-[12px] sm:rounded-[18px]
            overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-50 shrink-0
          "
        >
          {/* شريط الإطار العلوي */}
          <div className="absolute top-0 inset-x-0 h-6 sm:h-7 bg-[#f1f5f9] border-b border-gray-200/70 z-20 flex items-center px-3 gap-1.5 pointer-events-none" dir="ltr">
            <span className="size-2 rounded-full bg-red-400/80" />
            <span className="size-2 rounded-full bg-amber-400/80" />
            <span className="size-2 rounded-full bg-emerald-400/80" />
            <span className="mx-auto text-[10px] sm:text-[11px] text-gray-500 font-['Almarai'] truncate max-w-[320px] sm:max-w-[450px]" dir="rtl">
              منصة حافظ • {activeSlide.title}
            </span>
          </div>

          <div className="absolute inset-0 pt-6 sm:pt-7 overflow-hidden bg-[#eef3f6]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentSlide}
                src={activeSlide.image}
                alt={activeSlide.title}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  x: direction * 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  x: direction * -40,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                className="size-full object-contain sm:object-cover object-top"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* زر الصورة التالية */}
        <motion.button
          type="button"
          onClick={handleNext}
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
      <motion.div
        key={`description-${currentSlide}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center px-4 max-w-2xl"
      >
        <h3 className="text-lg md:text-xl font-semibold text-[#1a5a81] m-0">
          {activeSlide.title}
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed m-0">
          {activeSlide.description}
        </p>
      </motion.div>

      {/* مؤشرات الصور */}
      <div
        className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 items-center justify-center max-w-md"
        role="tablist"
        aria-label="مؤشرات الشرائح"
      >
        {gallerySlides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <motion.button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`الشريحة ${index + 1}: ${slide.title}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelectSlide(index)}
              className={`
                transition-all duration-300 rounded-[999px]
                cursor-pointer p-0 border-none shrink-0
                ${isActive
                  ? "bg-[#1a5a81] h-[7px] md:h-[11px] w-[22px] md:w-[36px]"
                  : "bg-[#97bacf] size-[7px] md:size-[11px] hover:bg-[#78a5bf]"
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
}

