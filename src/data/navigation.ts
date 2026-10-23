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
  { id: 'facebook', label: 'فيسبوك', href: '#', icon: IMAGES.socialFacebook },
  { id: 'instagram', label: 'إنستغرام', href: '#', icon: IMAGES.socialInstagram },
  { id: 'x', label: 'X', href: '#', icon: IMAGES.socialX },
  { id: 'linkedin', label: 'لينكد إن', href: '#', icon: IMAGES.socialLinkedIn },
  { id: 'youtube', label: 'يوتيوب', href: '#', icon: IMAGES.socialYoutube },
];

export const footerQuickLinks = [
  { id: 'about', label: 'من نحن', href: '#about' },
  { id: 'fatwas', label: 'فتاوى', href: '#fatwas' },
  { id: 'library', label: 'مكتبة الوسائط', href: '#library' },
  { id: 'news', label: 'أخبارنا وفعالياتنا', href: '#news' },
  { id: 'contact', label: 'اتصل بنا', href: '#contact' },
];
