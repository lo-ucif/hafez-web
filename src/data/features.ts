import { IMAGES } from '../constants/images';

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'teachers',
    icon: IMAGES.featurePresentation,
    title: 'إدارة المعلمين',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
  {
    id: 'students',
    icon: IMAGES.featureStudents,
    title: 'إدارة الطلاب',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
  {
    id: 'circles',
    icon: IMAGES.featureCircles,
    title: 'إدارة الحلقات',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
  {
    id: 'attendance',
    icon: IMAGES.featureAttendance,
    title: 'الحضور',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
  {
    id: 'reports',
    icon: IMAGES.featureReports,
    title: 'التقارير و الاحصائيات',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
  {
    id: 'memorization',
    icon: IMAGES.featureMemorization,
    title: 'الحفظ و المراجعة',
    description:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي',
  },
];

export interface WhyItem {
  id: string;
  icon: string;
  label: string;
}

export const whyItems: WhyItem[] = [
  { id: 'management', icon: IMAGES.whyIconSettings, label: 'تسهيل الإدارة' },
  { id: 'data', icon: IMAGES.whyIconData, label: 'بيانات واضحة' },
  { id: 'tracking', icon: IMAGES.whyIconActivity, label: 'متابعة مستمرة' },
  { id: 'organization', icon: IMAGES.whyIconDashboard, label: 'تنظيم افضل' },
];
