/**
 * Contact & WhatsApp configuration for Hafez Web.
 * Phone number: 0780280208 (Algeria +213: 213780280208)
 */
export const WHATSAPP_PHONE_RAW = "0780280208";
export const WHATSAPP_PHONE = "213780280208";
export const WHATSAPP_ORDER_MESSAGE = "السلام عليكم، أود طلب نسخة من نظام حافظ";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`;
export const WHATSAPP_ORDER_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_ORDER_MESSAGE
)}`;

