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
