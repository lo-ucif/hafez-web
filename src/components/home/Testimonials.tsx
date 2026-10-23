import { useState } from "react";
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
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items to ensure seamless infinite looping without gaps
  const marqueeList = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      aria-label="آراء المستخدمين"
      className="bg-[#fefefe] w-full py-14 sm:py-[60px] md:py-[75px] flex flex-col gap-10 items-center justify-center relative overflow-hidden"
      dir="rtl"
      data-node-id="298:68"
      data-name="section 11"
    >
      {/* Section Title Pill Badge & Subtitle matching Figma nodes 312:130 - 312:136 */}
      <SectionTitle
        title="اراء المستخدمين"
        subtitle="استعراض حي ومفصل لكيفية ظهور لوحة التحكم، الأدوات التفاعلية، والتقارير المتاحة لـ المشرف في منصة حافظ."
      />

      {/* Infinite Marching Cards Marquee Track */}
      <div
        className="w-full relative overflow-hidden py-4 cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        dir="ltr"
      >
        {/* Soft edge gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#fefefe] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#fefefe] to-transparent z-20 pointer-events-none" />

        {/* Continuous animation line */}
        <motion.div
          className="flex items-stretch gap-5 sm:gap-7 w-max px-4"
          animate={{
            x: isPaused ? undefined : ["0%", "-25%"],
          }}
          transition={{
            duration: 26,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeList.map((item, idx) => (
            <motion.article
              key={`${item.id}-${idx}`}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                bg-white w-[200px] sm:w-[330px] md:w-[320px]
                min-h-[15px] rounded-[20px] p-[20px] sm:p-[22px]
                shadow-[0px_4px_18px_rgba(0,0,0,0.07)]
                hover:shadow-[0px_12px_30px_rgba(26,90,129,0.15)]
                border border-gray-100/90
                flex flex-col justify-between
                transition-all duration-300 shrink-0
              "
              dir="rtl"
            >
              {/* Top row: Name on right, gold dot on left */}
              <div className="flex items-center justify-between pb-0 w-full border-b border-gray-100/70">
                <h3 className="font-['Almarai:Bold'] font-bold text-[#1a5a81] text-[19px] sm:text-[20px] m-0 leading-snug">
                  {item.name}
                </h3>
                <div
                  className="bg-[#cab178] rounded-full shrink-0 size-[14px] shadow-[0_0_8px_rgba(202,177,120,0.5)]"
                  aria-hidden="true"
                />
              </div>

              {/* Testimonial Quote */}
              <p className="font-['Almarai:Regular'] text-[#666666] text-[13px] sm:text-[13.5px] leading-[22px] text-right m-0 my-3 flex-1">
                {item.quote}
              </p>

              {/* Role / Tag */}
              <div className="pt-1 flex items-center justify-between">
                <span className="font-['Almarai:Regular'] text-[#caa778] text-[12px] sm:text-[13px] text-right block">
                  {item.role}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
