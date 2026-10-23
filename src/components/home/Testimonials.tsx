import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
    const SPEED = 42; // pixels per second smooth movement

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
        {/* Soft edge gradient fades - reduced on mobile so cards stay crisp */}
        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-20 md:w-32 bg-gradient-to-r from-[#fefefe] via-[#fefefe]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-20 md:w-32 bg-gradient-to-l from-[#fefefe] via-[#fefefe]/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous animation line using requestAnimationFrame with seamless centering */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-4 sm:gap-6 md:gap-7 w-max px-4 sm:px-6 will-change-transform"
        >
          {marqueeList.map((item, idx) => {
            const uniqueKey = `${item.id}-${idx}`;
            const isCardActive = isCentered && activeCardKey === uniqueKey;

            return (
              <motion.article
                key={uniqueKey}
                whileHover={!isCardActive ? { y: -6, scale: 1.02 } : {}}
                onClick={(e) => handleCardClick(e, uniqueKey)}
                data-node-id="312:113"
                className={`
                  bg-white w-[82vw] max-w-[310px] sm:w-[320px] md:w-[340px]
                  min-h-[160px] sm:min-h-[175px] rounded-[18px] sm:rounded-[20px]
                  p-[16px] sm:p-[20px] cursor-pointer
                  shadow-[0px_2px_12px_rgba(0,0,0,0.08)] sm:shadow-[0px_0px_12px_rgba(0,0,0,0.12)]
                  hover:shadow-[0px_8px_24px_rgba(26,90,129,0.18)]
                  flex flex-col justify-between gap-[8px] sm:gap-[10px]
                  transition-all duration-300 shrink-0
                  ${
                    isCardActive
                      ? "scale-[1.03] ring-2 ring-[#cab178] shadow-[0px_8px_26px_rgba(202,177,120,0.38)]"
                      : "border border-transparent"
                  }
                `}
                dir="rtl"
                role="button"
                tabIndex={0}
                aria-pressed={isCardActive}
                aria-label={`رأي ${item.name}، انقر للتوسيط والإيقاف`}
              >
                {/* Content Section matching Figma node 312:114 */}
                <div className="flex flex-col items-end w-full gap-[6px] sm:gap-[8px]" data-node-id="312:114">
                  {/* Header: Name on Right, Quote SVG icon on Left matching Figma node 312:115 */}
                  <div className="flex items-center justify-between pb-[2px] sm:pb-[4px] w-full" data-node-id="312:115">
                    {/* Name: Figma node 312:118 (renders on the Right in RTL) */}
                    <h3
                      className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[29px] m-0"
                      data-node-id="312:118"
                    >
                      {item.name}
                    </h3>

                    {/* Figma node 317:331 - Golden Quote SVG icon (renders on the Left in RTL) */}
                    <div className="relative shrink-0 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" data-node-id="317:331" aria-hidden="true">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full block"
                      >
                        <path
                          d="M16.3532 24.5V15.8772C16.3532 9.2225 20.706 4.71217 26.8333 3.5L27.9942 6.0095C25.1568 7.07933 23.3333 10.2538 23.3333 12.8333H28V24.5H16.3532V24.5M0 24.5V15.8772C0 9.2225 4.37267 4.71217 10.5 3.5L11.662 6.0095C8.8235 7.07933 7 10.2538 7 12.8333H11.6468V24.5H0V24.5"
                          fill="#CAB178"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Description / Snippet: Figma node 312:120 */}
                  <div className="w-full" data-node-id="312:119">
                    <p
                      className="font-['Almarai:Regular'] text-[#666666] text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20.3px] text-right m-0"
                      data-node-id="312:120"
                    >
                      {item.quote}
                    </p>
                  </div>
                </div>

                {/* Role / Tag at bottom-left matching Figma node 315:164 */}
                <div className="flex justify-end w-full pt-1" data-node-id="315:164">
                  <span className="font-['Almarai:Regular'] text-[#caa778] text-[11.5px] sm:text-[12px] leading-[16px] block text-left">
                    {item.role}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
