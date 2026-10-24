import { IMAGES } from '../constants/images';

export interface NavLink {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'الرئيسية', href: '#home', isActive: true },
  { id: 'features', label: 'مميزات النظام', href: '#features' },
  { id: 'roles', label: 'الأدوار', href: '#roles' },
  { id: 'gallery', label: 'معرض النظام', href: '#gallery' },
  { id: 'offers', label: 'العروض', href: '#offers' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact' },
];

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { id: 'whatsapp', label: 'واتساب', href: 'https://wa.me/', icon: IMAGES.socialFacebook },
  { id: 'facebook', label: 'فيسبوك', href: '#', icon: IMAGES.socialFacebook },
  { id: 'instagram', label: 'إنستغرام', href: '#', icon: IMAGES.socialInstagram },
  { id: 'x', label: 'X', href: '#', icon: IMAGES.socialX },
  { id: 'linkedin', label: 'لينكد إن', href: '#', icon: IMAGES.socialLinkedIn },
  { id: 'youtube', label: 'يوتيوب', href: '#', icon: IMAGES.socialYoutube },
];

export const footerQuickLinks = [
  { id: 'about', label: 'عن المنصة', href: '#home' },
  { id: 'features', label: 'مميزات النظام', href: '#features' },
  { id: 'roles', label: 'الأدوار في النظام', href: '#roles' },
  { id: 'gallery', label: 'معرض النظام', href: '#gallery' },
  { id: 'testimonials', label: 'آراء المستخدمين', href: '#testimonials' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact' },
];
