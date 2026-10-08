import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import ArabicBg from '../components/common/ArabicBg';
import { termsData } from '../data/terms';

/**
 * Terms and Conditions page — "الشروط والأحكام"
 * Corresponds to Figma node 105:1550.
 * Rendered as a separate page from the Home landing page.
 */
export default function Terms() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden font-['Almarai']" dir="rtl">
      <Navbar activePage="terms" />

      <main className="flex-1 w-full pt-[110px] md:pt-[150px] pb-16 md:pb-24 px-4 sm:px-6 md:px-8 relative">
        {/* Subtle Decorative Watermark */}
        <div className="absolute top-20 right-0 pointer-events-none opacity-20 overflow-hidden">
          <ArabicBg positionClass="relative" sizeClass="size-[500px]" opacityClass="opacity-5" />
        </div>

        <div className="w-full max-w-[980px] mx-auto flex flex-col items-center">
          {/* Section Title Badge matching Figma node 105:1550 */}
          <div className="mb-12 md:mb-16">
            <SectionTitle title="الشروط والأحكام" />
          </div>

          {/* Q&A List matching Figma node 105:1550 */}
          <div className="w-full flex flex-col gap-10 md:gap-12">
            {termsData.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                className="flex flex-col gap-3.5 text-right w-full"
              >
                {/* Question Title */}
                <h2
                  dir="auto"
                  className="
                    font-['Almarai:Bold'] font-bold
                    text-[20px] sm:text-[22px] md:text-[24px]
                    text-[#1a5a81] leading-tight m-0
                  "
                >
                  {item.question}
                </h2>

                {/* Answer Paragraph */}
                <p
                  dir="auto"
                  className="
                    font-['Almarai:Regular']
                    text-[16px] sm:text-[17px] md:text-[18px]
                    text-[#444] md:text-[#555]
                    leading-[30px] md:leading-[34px] m-0
                  "
                >
                  {item.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
