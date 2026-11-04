/**
 * Contact & WhatsApp configuration for Hafez Web.
 * Phone number: 0676244189 (Algeria +213: 213676244189)
 */
export const WHATSAPP_PHONE_RAW = "0676244189";
export const WHATSAPP_PHONE = "213676244189";
export const WHATSAPP_ORDER_MESSAGE = "السلام عليكم، أود طلب نسخة من نظام حافظ";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`;
export const WHATSAPP_ORDER_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_ORDER_MESSAGE
)}`;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61594639155388",
  instagram: "https://www.instagram.com/mnst_hafez?mdxt=MXBpYjhvdWI2ZG0yaA==",
  linkedin: "https://linkedin.com/company/mnsthafez",
  whatsapp: WHATSAPP_LINK,
};
