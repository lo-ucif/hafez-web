import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  /** Optional phone number with country code (e.g. "213XXXXXXXXX" or "966XXXXXXXXX") */
  phoneNumber?: string;
  /** Optional pre-filled message sent to WhatsApp */
  message?: string;
  /** Optional extra Tailwind CSS classes */
  className?: string;
}

/**
 * Floating WhatsApp button fixed in the bottom-right corner of the screen.
 * - Default: compact circle displaying only the WhatsApp icon.
 * - On hover: expands smoothly into a pill shape showing the WhatsApp icon + "WhatsApp" label.
 */
export default function WhatsAppButton({
  phoneNumber = "",
  message = "",
  className = "",
}: WhatsAppButtonProps) {
  // Construct wa.me link with optional phone and encoded text
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const baseHref = cleanPhone ? `https://wa.me/${cleanPhone}` : "https://wa.me/";
  const finalHref = message
    ? `${baseHref}?text=${encodeURIComponent(message)}`
    : baseHref;

  return (
    <motion.a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب (WhatsApp)"
      dir="ltr"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
      className={`
        fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
        flex items-center justify-center
        bg-[#25D366] hover:bg-[#20ba5a] text-white
        h-[52px] sm:h-[56px] min-w-[52px] sm:min-w-[56px]
        px-[14px] sm:px-[15px]
        rounded-full
        shadow-[0_4px_16px_rgba(0,0,0,0.18)]
        hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)]
        hover:scale-105
        transition-all duration-300 ease-in-out
        select-none cursor-pointer no-underline
        group
        ${className}
      `}
    >
      {/* WhatsApp Official SVG Icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-[24px] sm:size-[26px] shrink-0 transition-transform duration-300 group-hover:rotate-[-6deg]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.67 20.27 9.74 20.27 11.91C20.27 16.46 16.58 20.15 12.04 20.15ZM16.55 14.43C16.3 14.31 15.08 13.71 14.85 13.62C14.62 13.54 14.46 13.5 14.29 13.75C14.13 14 13.65 14.57 13.5 14.74C13.36 14.9 13.21 14.93 12.96 14.8C12.71 14.68 11.91 14.41 10.96 13.57C10.22 12.91 9.72 12.1 9.58 11.85C9.43 11.6 9.56 11.47 9.69 11.35C9.8 11.24 9.93 11.07 10.06 10.92C10.18 10.33 10.35 10.19 10.29 10.06C10.22 9.94 9.73 8.73 9.52 8.24C9.32 7.75 9.12 7.82 8.97 7.81C8.83 7.8 8.66 7.8 8.5 7.8C8.33 7.8 8.07 7.86 7.84 8.11C7.61 8.36 6.97 8.96 6.97 10.18C6.97 11.41 7.86 12.59 7.99 12.76C8.11 12.92 9.75 15.45 12.25 16.53C12.84 16.79 13.3 16.94 13.66 17.06C14.26 17.25 14.8 17.22 15.23 17.16C15.71 17.09 16.71 16.55 16.92 15.98C17.13 15.4 17.13 14.91 17.06 14.8C17 14.7 16.8 14.55 16.55 14.43Z"
        />
      </svg>

      {/* WhatsApp Text - appears smoothly on hover */}
      <span
        className="
          max-w-0 opacity-0 overflow-hidden whitespace-nowrap
          group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 sm:group-hover:ml-2.5
          transition-all duration-300 ease-in-out
          font-sans font-semibold text-[15px] sm:text-[16px] leading-none text-white antialiased
        "
      >
        WhatsApp
      </span>
    </motion.a>
  );
}
