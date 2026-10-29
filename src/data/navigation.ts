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
  { id: 'institutions', label: 'من يستعمل النظام', href: '#institutions' },
  { id: 'organisations', label: 'هيئات تستعمل النّظام', href: '#organisations' },
  { id: 'gallery', label: 'معرض النظام', href: '#gallery' },
  { id: 'testimonials', label: 'اراء المستخدمين', href: '#testimonials' },
];
