
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";


// صور معرض منصة حافظ
const gallerySlides = [
  {
    image: IMAGES.gallerySlide1,
    title: "الصفحة الرئيسية",
    description: "الواجهة الرئيسية لمنصة حافظ",
  },
  {
    image: IMAGES.gallerySlide2,
    title: "إدارة الحفظ",
    description: "تنظيم حفظ القرآن الكريم ومراجعته",
  },
  {
    image: IMAGES.gallerySlide3,
    title: "متابعة التقدم",
    description: "متابعة تقدم المستخدم في الحفظ والمراجعة",
  },
  {
    image: IMAGES.gallerySlide4,
    title: "خطة الحفظ",
    description: "تنظيم خطة الحفظ اليومية",
  },
  {
    image: IMAGES.gallerySlide5,
    title: "المراجعة اليومية",
    description: "تنظيم جلسات مراجعة القرآن الكريم",
  },
  {
    image: IMAGES.gallerySlide6,
    title: "الإحصائيات",
    description: "عرض إحصائيات تقدم المستخدم",
  },
  {
    image: IMAGES.gallerySlide7,
    title: "إدارة المهام",
    description: "متابعة المهام اليومية للحفظ والمراجعة",
  },
  {
    image: IMAGES.gallerySlide8,
    title: "الملف الشخصي",
    description: "عرض معلومات المستخدم وإنجازاته",
  },
];

const TOTAL_SLIDES = gallerySlides.length;

export default function Gallery() {
  // الشريحة النشطة؛ تبدأ من الصورة السابعة إذا كانت موجودة
  const [currentSlide, setCurrentSlide] = useState(
    Math.min(6, gallerySlides.length - 1),
  );

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
        bg-white flex flex-col gap-8 md:gap-[60px] items-center overflow-clip
        pb-12 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
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
            w-[258px] sm:w-[380px] md:w-[666px]
            h-auto aspect-[666/444]
            relative rounded-[8px] sm:rounded-[12px]
            overflow-hidden shadow-lg bg-gray-100 shrink-0
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={currentSlide}
              src={activeSlide.image}
              alt={activeSlide.title}
              initial={{
                opacity: 0,
                scale: 0.98,
                x: direction * 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                x: direction * -30,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="absolute inset-0 object-cover size-full"
            />
          </AnimatePresence>
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
        className="text-center px-4 max-w-xl"
      >
        <h3 className="text-lg md:text-xl font-semibold text-[#1a5a81]">
          {activeSlide.title}
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600">
          {activeSlide.description}
        </p>
      </motion.div>

      {/* مؤشرات الصور */}
      <div
        className="flex gap-1.5 sm:gap-2 md:gap-[13px] items-center"
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
  );
}

