import { useState, useRef, useEffect } from "react";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "aya",
    name: "آية",
    role: "طالبة طب",
    quote:
      "ماشاء الله ربي يبارك فيكم، كي نشوفو حلم راهو يتحقق قدام أعيننا وبمواصفات أفضل مما تخيلنا... شكرا لاهتمامكم بأدق تفاصيل المشروع.",
  },
  {
    id: "basma",
    name: "بسمة",
    role: "طالبة طب",
    quote:
      "شكرا جزيلا للقائمين بالعمل وكل من شارك فيه من قريب او بعيد، ربي يتقبل منكم ويبارك لكم في حياتكم وصحتكم ويجزيكم خير الجزاء، فعلا عمل متقن ربي يحفظكم.",
  },
  {
    id: "anfal",
    name: "انفال",
    role: "طالبة طب",
    quote:
      "ماشاءالله بوركتم وجزاكم الله كل خير و ربي يتقبل منكم ان شاءلله 🤲🏻 عمل متقون بزاف جميل يعطيكم الصحة.",
  },
  {
    id: "olfat",
    name: "الفت",
    role: "طالبة طب",
    quote:
      "لى كل القائمين على تجهيز الموقع ،جزاكم الله عنا خير الجزاء الموقع ماشاء الله تبارك الرحمان فاق توقعاتنا وبإذن الله سيكون نقلة تغيير للأفضل في مشروعنا.",
  },
];

/**
 * Testimonials / User Reviews section matching Figma node 298:68
 * With card design matching Figma node 312:121
 * With infinite marching cards marquee loop and pause-on-hover.
 */
export default function Testimonials() {
  const [activeCardKey, setActiveCardKey] = useState<string | null>(null);
  const [isCentered, setIsCentered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const xPosRef = useRef(0);
  const isPausedRef = useRef(false);
  const isCenteredRef = useRef(false);
  const animFrameId = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Repeat items to ensure seamless infinite looping without gaps
  const marqueeList = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Calculate dynamic width of 1 full set of 4 cards
  const getSetWidth = () => {
    if (!trackRef.current) return 0;
    const cards = trackRef.current.children;
    if (cards.length < 5) return 0;
    const card0 = cards[0] as HTMLElement;
    const card4 = cards[4] as HTMLElement;
    return card4.offsetLeft - card0.offsetLeft;
  };

  useEffect(() => {
    isPausedRef.current = isCentered;
    isCenteredRef.current = isCentered;
  }, [isCentered]);

  useEffect(() => {
    const SPEED = 28; // gentle smooth movement

    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPausedRef.current && trackRef.current) {
        xPosRef.current -= SPEED * delta;

        const setWidth = getSetWidth();
        if (setWidth > 0 && xPosRef.current <= -setWidth) {
          xPosRef.current += setWidth;
        }

        trackRef.current.style.transform = `translateX(${xPosRef.current}px)`;
      }

      animFrameId.current = requestAnimationFrame(tick);
    };

    animFrameId.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLElement>, key: string) => {
    if (isCentered && activeCardKey === key) {
      // Clicked the currently centered card again: resume loop
      setIsCentered(false);
      isCenteredRef.current = false;
      setActiveCardKey(null);
      isPausedRef.current = false;
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
      return;
    }

    // Stop the loop and center the clicked card smoothly
    setIsCentered(true);
    isCenteredRef.current = true;
    setActiveCardKey(key);
    isPausedRef.current = true;

    if (!trackRef.current) return;

    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const screenCenter = window.innerWidth / 2;
    const diff = screenCenter - cardCenter;

    xPosRef.current += diff;

    // Keep within infinite range
    const setWidth = getSetWidth();
    if (setWidth > 0) {
      while (xPosRef.current > 0) xPosRef.current -= setWidth;
      while (xPosRef.current <= -setWidth * 2) xPosRef.current += setWidth;
    }

    trackRef.current.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
    trackRef.current.style.transform = `translateX(${xPosRef.current}px)`;

    setTimeout(() => {
      if (trackRef.current && !isCenteredRef.current) {
        trackRef.current.style.transition = "none";
      }
    }, 600);
  };

  const handleMouseEnter = () => {
    if (!isCenteredRef.current) {
      isPausedRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (!isCenteredRef.current) {
      isPausedRef.current = false;
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
    }
  };

  return (
    <section
      id="testimonials"
      aria-label="آراء المستخدمين"
      className="bg-[#fefefe] w-full py-10 sm:py-[60px] md:py-[75px] flex flex-col gap-6 sm:gap-10 items-center justify-center relative overflow-hidden"
      dir="rtl"
      data-node-id="298:68"
      data-name="section 11"
    >
      {/* Section Title Pill Badge & Subtitle */}
      <SectionTitle
        title="اراء المستخدمين"
        subtitle="انطباعات وتجارب حقيقية لطلبة حلقات القرآن الكريم حول أثر منصة حافظ في تنظيم حفظهم ومراجعتهم اليومية."
      />

      {/* Infinite Marching Cards Marquee Track */}
      <div
        className="w-full relative overflow-hidden py-4 sm:py-6 select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        dir="ltr"
      >
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-20 md:w-32 bg-gradient-to-r from-[#fefefe] via-[#fefefe]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-20 md:w-32 bg-gradient-to-l from-[#fefefe] via-[#fefefe]/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous animation line using requestAnimationFrame with seamless centering */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-5 sm:gap-7 md:gap-8 w-max px-4 sm:px-6 will-change-transform"
        >
          {marqueeList.map((item, idx) => {
            const uniqueKey = `${item.id}-${idx}`;
            const isCardActive = isCentered && activeCardKey === uniqueKey;
            const cleanQuote = item.quote.trim().replace(/^["“]|["”]$/g, "").trim().replace(/[.\s]+$/, "");

            return (
              <article
                key={uniqueKey}
                onClick={(e) => handleCardClick(e, uniqueKey)}
                data-node-id="312:121"
                className={`
                  bg-white w-[85vw] max-w-[336px] sm:w-[336px]
                  min-h-[190px] rounded-[20px] overflow-hidden cursor-pointer
                  shadow-[0px_0px_10.6px_0px_rgba(0,0,0,0.25)]
                  hover:shadow-[0px_6px_18px_rgba(26,90,129,0.18)]
                  transition-all duration-300 shrink-0 relative flex flex-col items-center pb-[20px]
                  ${
                    isCardActive
                      ? "ring-2 ring-[#cab178] shadow-[0px_6px_20px_rgba(202,177,120,0.3)]"
                      : "border border-transparent"
                  }
                `}
                dir="rtl"
                role="button"
                tabIndex={0}
                aria-pressed={isCardActive}
                aria-label={`رأي ${item.name}، انقر للتوسيط والإيقاف`}
              >
                {/* Top Blue Header Banner matching Figma node 380:97 */}
                <div
                  className="h-[69px] w-full relative overflow-hidden bg-[#1a5a81] shrink-0"
                  data-node-id="380:97"
                  data-name="Rectangle 39635"
                >
                  <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute bg-[#1a5a81] inset-0" />
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover opacity-10 size-full pointer-events-none"
                      src={IMAGES.testimonialBg}
                    />
                  </div>
                </div>

                {/* Floating Avatar matching Figma node 380:102 */}
                <div
                  className="absolute top-[28.8px] left-1/2 -translate-x-1/2 size-[65px] rounded-full border-[2.7px] border-solid border-white shadow-[0px_0.68px_1.35px_0px_rgba(0,0,0,0.05)] overflow-hidden bg-[#1a5a81] z-10 shrink-0"
                  data-node-id="380:102"
                  data-name="Eugenia Babajanyan"
                >
                  <img
                    alt={item.name}
                    className="size-full object-contain rounded-full pointer-events-none"
                    src={IMAGES.testimonialAvatar}
                  />
                </div>

                {/* Content Section matching Figma node 312:122 */}
                <div
                  className="flex flex-col items-center justify-center w-full px-[20px] pt-[30px] gap-[10px] text-center"
                  data-node-id="312:122"
                  data-name="ContentSection"
                >
                  {/* Heading: Name matching Figma node 312:123 */}
                  <div
                    className="flex flex-col items-center justify-center text-center w-full"
                    data-node-id="312:123"
                    data-name="Heading 1 - Title:margin"
                  >
                    <h3
                      className="font-bold text-[#1a5a81] text-[20px] leading-[29.2px] m-0 text-center"
                      data-node-id="315:157"
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Description / Snippet matching Figma node 312:127 */}
                  <div
                    className="w-full text-center"
                    data-node-id="312:127"
                    data-name="Description/Snippet"
                  >
                    <p
                      className="font-normal text-[#666666] text-[12px] leading-[20.3px] text-center m-0"
                      data-node-id="312:128"
                    >
                      <span>“{cleanQuote}” </span>
                      <span className="text-[#cab178] font-medium">{item.role}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
