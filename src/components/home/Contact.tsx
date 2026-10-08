import ArabicBg from '../common/ArabicBg';

interface ContactCardData {
  id: string;
  title: string;
  href: string;
  icon: 'email' | 'whatsapp' | 'instagram';
}

const contactCards: ContactCardData[] = [
  {
    id: 'email',
    title: 'عبر الإيميل',
    href: 'mailto:info@mnst_hafez.com',
    icon: 'email',
  },
  {
    id: 'whatsapp',
    title: 'عبر واتساب',
    href: 'https://wa.me/213780280208',
    icon: 'whatsapp',
  },
  {
    id: 'instagram',
    title: 'عبر انستاغرام',
    href: 'https://instagram.com',
    icon: 'instagram',
  },
];

function ContactChannelCard({ card }: { card: ContactCardData }) {
  return (
    <div className="relative group drop-shadow-[0px_3px_16.75px_rgba(0,0,0,0.18)]">
      {/* ── Background rotated card layer matching Figma node 201:1303 ── */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[186px] items-center justify-center left-[calc(50%-0.84px)] top-[calc(50%+0.27px)] w-[284px] pointer-events-none">
        <div className="rotate-4 transition-transform duration-300 group-hover:rotate-6">
          <div className="bg-[#1a5a81] border-[#cab178] border-[2.27px] border-solid h-[167px] rounded-[27px] w-[273px] shadow-md" />
        </div>
      </div>

      {/* ── Foreground white card matching Figma node 201:1304 ── */}
      <div
        className="
          relative bg-white rounded-[24px] overflow-hidden
          w-[284px] min-h-[175px] py-5 px-5
          flex flex-col items-center justify-between gap-3
          drop-shadow-[0px_8.46px_6.35px_rgba(0,0,0,0.1)]
          transition-transform duration-300 group-hover:-translate-y-1.5
        "
      >
        {/* Arabic Calligraphy Background Watermarks */}
        <ArabicBg
          positionClass="left-[-20px] top-[-20px]"
          sizeClass="size-[150px]"
          opacityClass="opacity-5"
        />
        <ArabicBg
          positionClass="right-[-20px] bottom-[-20px]"
          sizeClass="size-[150px]"
          opacityClass="opacity-5"
        />

        {/* Channel Icon */}
        <div className="size-[52px] rounded-full flex items-center justify-center text-[#1a5a81] relative z-10">
          {card.icon === 'email' && (
            <svg className="size-11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          )}
          {card.icon === 'whatsapp' && (
            <svg className="size-11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-3.26-1.34-5.35-4.66-5.51-4.88-.16-.22-1.33-1.77-1.33-3.37 0-1.6 1.05-2.28 1.43-2.62.16-.14.36-.2.52-.2.12 0 .24.01.35.01.34.02.5.04.73.57.28.67.97 2.37 1.06 2.54.09.17.15.37.03.59-.11.23-.17.37-.34.56-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.35.89 1.47 1.91 2.38 1.32 1.17 2.43 1.54 2.78 1.71.35.17.55.15.76-.09.21-.24.89-1.04 1.13-1.4.24-.35.48-.29.81-.17.33.12 2.09.99 2.45 1.17.36.17.6.26.69.41.09.15.09.89-.15 1.56z" />
            </svg>
          )}
          {card.icon === 'instagram' && (
            <svg className="size-11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h3
          dir="auto"
          className="font-['Almarai:Bold'] not-italic text-[20px] text-[#333] text-center whitespace-nowrap m-0 leading-normal relative z-10"
        >
          {card.title}
        </h3>

        {/* Action Button matching Figma node 201:1313 */}
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-[#1a5a81] hover:bg-[#154e70] active:scale-95
            transition-all duration-200
            px-5 py-1.5 rounded-[999px]
            cursor-pointer no-underline
            shadow-sm hover:shadow-md
            flex items-center justify-center relative z-10
          "
        >
          <span className="font-['Almarai:Regular'] text-[12px] text-white whitespace-nowrap leading-none">
            المزيد
          </span>
        </a>
      </div>
    </div>
  );
}

/**
 * Contact section — "تواصل معنا"
 * Corresponds to Figma desktop node 196:518 ("Contact / 6 /").
 * Features 3 stylized communication channel cards (Email, WhatsApp, Instagram).
 */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="تواصل معنا"
      className="
        bg-white flex flex-col gap-10 md:gap-[50px] items-center overflow-clip
        pb-16 md:pb-[80px] pt-12 md:pt-[70px] px-4 md:px-[80px]
        relative w-full max-w-[1440px] mx-auto
      "
      dir="rtl"
    >
      {/* ── Section Header matching Figma node 196:557 ── */}
      <div className="flex flex-col gap-2.5 items-center justify-center text-center max-w-[600px] w-full">
        <p className="font-['Almarai:Regular'] text-[18px] md:text-[20px] text-black leading-normal m-0" dir="auto">
          نحن هنا للاستماع إليك
        </p>

        <h2
          dir="auto"
          className="
            font-['Almarai:Bold'] text-[36px] sm:text-[44px] md:text-[48px]
            text-[#1a5a81] leading-tight m-0 tracking-[-0.48px]
          "
        >
          تواصل معنا:
        </h2>

        <p className="font-['Tajawal:Regular'] text-[17px] md:text-[20px] text-black leading-relaxed m-0" dir="auto">
          شارك احتياجاتك سنقدم لك حلولاً مخصصة
        </p>
      </div>

      {/* ── 3 Communication Channel Cards matching Figma node 201:1235 ── */}
      <div className="flex flex-wrap gap-10 md:gap-[45px] items-center justify-center w-full pt-4">
        {contactCards.map((card) => (
          <ContactChannelCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
