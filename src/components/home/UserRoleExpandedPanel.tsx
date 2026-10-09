import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/images";
import ArabicBg from "../common/ArabicBg";
import { rolesDetailsData } from "../../data/rolesData";

interface UserRoleExpandedPanelProps {
  roleId: string;
  onClose: () => void;
}

const panelMotion = {
  initial: { opacity: 0, scale: 0.94, y: 28 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 20,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 + i * 0.05, duration: 0.35 },
  }),
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};

export default function UserRoleExpandedPanel({ roleId, onClose }: UserRoleExpandedPanelProps) {
  const role = rolesDetailsData[roleId] ?? rolesDetailsData.supervisor;
  const highlightFeatures = role.features.slice(0, 3);
  const platformSlides = role.platformScreens;
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSlide(0);
    setDirection(0);
  }, [roleId]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const scrollToPlatform = () => {
    platformRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : platformSlides.length - 1));
  };

  const goNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev < platformSlides.length - 1 ? prev + 1 : 0));
  };

  const activeScreen = platformSlides[activeSlide];

  return (
    <motion.div
      key={roleId}
      role="dialog"
      aria-modal="true"
      aria-labelledby="expanded-role-title"
      variants={panelMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      className="
        relative flex flex-col gap-5 md:gap-8 items-center
        w-full max-w-[1150px] mx-auto
        py-8 md:py-[30px] px-4 md:px-5
        rounded-[32px] md:rounded-[74px] overflow-hidden
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

      <motion.div
        custom={0}
        variants={staggerItem}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex items-center justify-end w-full relative z-10 px-1"
      >
        <motion.button
          type="button"
          onClick={onClose}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            bg-[#1a5a81] flex gap-[7px] items-center
            px-5 py-[8.5px] rounded-full shadow-md
            cursor-pointer hover:bg-[#154e70] transition-colors border-0
          "
          aria-label="العودة إلى بطاقات المستخدمين"
        >
          <span className="font-['Almarai:Bold'] text-[14px] text-white leading-none">العودة</span>
          <svg className="w-[13px] h-[13px] text-white rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        custom={1}
        variants={staggerItem}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-end gap-8 lg:gap-10 w-full"
      >
        <div className="h-[320px] sm:h-[380px] lg:h-[424px] relative rounded-[9.242px] shrink-0 w-full max-w-[383px] overflow-hidden">
          <img
            src={role.bookCover}
            alt={`غلاف دور ${role.title}`}
            className="absolute h-full max-w-none rounded-[9.242px]"
            style={{
              left: role.coverOffsetX,
              top: role.coverOffsetY,
              width: role.coverScale,
            }}
          />
        </div>

        <div className="flex flex-col items-end justify-center text-right w-full lg:max-w-[751px] gap-4">
          <h2
            id="expanded-role-title"
            className="font-['Almarai:Bold'] text-[#1a5a81] text-3xl sm:text-4xl lg:text-[48px] leading-tight m-0 text-center lg:text-right w-full"
          >
            {role.heroHeadline}
          </h2>
          <p className="font-['Almarai:Regular'] text-[#666] text-base sm:text-lg lg:text-2xl leading-relaxed m-0">
            {role.heroSubtitle}
          </p>
        </div>
      </motion.div>

      <motion.div
        custom={2}
        variants={staggerItem}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex flex-wrap gap-5 md:gap-[30px] items-stretch justify-center w-full"
      >
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
              <h3 className="font-['Almarai:Bold'] text-[#1a5a81] text-[20px] m-0">{feature.title}</h3>
            </div>
            <p className="font-['Almarai:Regular'] text-[#666] text-xs leading-relaxed m-0">
              {feature.description}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.button
        type="button"
        custom={3}
        variants={staggerItem}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={scrollToPlatform}
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
      </motion.button>

      <motion.div
        ref={platformRef}
        custom={4}
        variants={staggerItem}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex flex-col gap-3 md:gap-[10px] items-center w-full pt-2 scroll-mt-24"
      >
        <div
          className="
            bg-[#1a5a81] flex gap-[7px] items-center
            px-[27px] py-[8.5px] rounded-full shadow-md
          "
          aria-hidden="true"
        >
          <img alt="" className="size-[14px]" src={IMAGES.plusIcon} />
          <span className="font-['Almarai:Bold'] text-[14px] text-white leading-none">صور من النظام</span>
        </div>

        <p className="font-['Almarai:Regular'] text-[#666] text-base md:text-xl text-center max-w-[670px] leading-normal m-0 px-2">
          استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية، والتقارير المتاحة
          <br className="hidden sm:block" />
          {" "}لـ {role.title} في منصة حافظ.
        </p>

        <div className="flex gap-4 sm:gap-8 md:gap-[84px] items-center justify-center w-full max-w-[1034px] mt-4 md:mt-6">
          <motion.button
            type="button"
            onClick={goPrev}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="الشاشة السابقة"
            className="flex items-center justify-center size-[28px] sm:size-[36px] md:size-[54px] cursor-pointer opacity-80 hover:opacity-100 shrink-0 border-0 bg-transparent p-0"
          >
            <div className="flex-none rotate-270 size-[21px] sm:size-[30px] md:size-[54px] relative">
              <img alt="" aria-hidden="true" className="absolute inset-0 size-full max-w-none" src={IMAGES.galleryArrowRight} />
            </div>
          </motion.button>

          <div className="w-[258px] sm:w-[380px] md:w-[666px] aspect-[666/444] relative rounded-[8px] sm:rounded-[12px] overflow-hidden shadow-lg bg-gray-100 shrink-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={`${roleId}-${activeSlide}`}
                src={IMAGES.gallerySlide}
                alt={activeScreen?.screenTitle ?? "لقطة من المنصة"}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="absolute inset-0 object-cover size-full"
              />
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            onClick={goNext}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="الشاشة التالية"
            className="flex items-center justify-center size-[28px] sm:size-[36px] md:size-[54px] cursor-pointer opacity-80 hover:opacity-100 shrink-0 border-0 bg-transparent p-0"
          >
            <div className="-rotate-270 flex-none size-[21px] sm:size-[30px] md:size-[54px] relative">
              <img alt="" aria-hidden="true" className="absolute inset-0 size-full max-w-none" src={IMAGES.galleryArrowLeft} />
            </div>
          </motion.button>
        </div>

        {activeScreen && (
          <p className="text-sm text-[#1a5a81] font-bold text-center m-0 px-4">{activeScreen.screenTitle}</p>
        )}

        <div className="flex gap-1.5 sm:gap-2 md:gap-[13px] items-center" role="tablist" aria-label="مؤشرات شرائح المنصة">
          {platformSlides.map((screen, index) => {
            const isActive = index === activeSlide;
            return (
              <motion.button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={screen.tabLabel}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => {
                  setDirection(index > activeSlide ? 1 : -1);
                  setActiveSlide(index);
                }}
                className={`
                  transition-all duration-300 rounded-[999px] cursor-pointer p-0 border-none shrink-0
                  ${isActive ? "bg-[#1a5a81] h-[6.7px] md:h-[13px] w-[21px] md:w-[42px]" : "bg-[#97bacf] size-[6.7px] md:size-[13px] hover:bg-[#78a5bf]"}
                `}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
