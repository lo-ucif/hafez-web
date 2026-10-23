import { IMAGES } from '../constants/images';

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'circles',
    icon: IMAGES.featureCircles,
    title: 'إدارة الحلقات',
    description:
      'تنظيم وتوزيع حلقات التحفيظ بمرونة، وتحديد مواعيد الجلسات والخطط الدراسية لكل حلقة بكل سهولة.',
  },
  {
    id: 'students',
    icon: IMAGES.featureStudents,
    title: 'إدارة الطلاب',
    description:
      'تسجيل بيانات الطلاب ومتابعة تقدمهم القرآني، مستوياتهم، ومعدلات حفظهم ومراجعتهم الفردية.',
  },
  {
    id: 'teachers',
    icon: IMAGES.featurePresentation,
    title: 'إدارة المعلمين',
    description:
      'توزيع المعلمين على الحلقات، متابعة أدائهم وجداولهم، وتسهيل تواصلهم المباشر مع الطلاب وأولياء الأمور.',
  },
  {
    id: 'memorization',
    icon: IMAGES.featureMemorization,
    title: 'الحفظ و المراجعة',
    description:
      'خطط ذكية لتثبيت الحفظ الجديد وجدولة المراجعة التراكمية اليومية لضمان رسوخ الآيات في الصدور.',
  },
  {
    id: 'reports',
    icon: IMAGES.featureReports,
    title: 'التقارير و الاحصائيات',
    description:
      'مخططات بيانية وإحصائيات دورية دقيقة لقياس نسب الإنجاز ومستوى تطور الحلقات والطلاب بضغطة زر.',
  },
  {
    id: 'attendance',
    icon: IMAGES.featureAttendance,
    title: 'الحضور',
    description:
      'تسجيل إلكتروني فوري لحضور وغياب الطلاب والمعلمين مع إشعارات آلية وتنبيهات منتظمة للمتابعة.',
  },
];

export interface WhyItem {
  id: string;
  icon: string;
  label: string;
}

export const whyItems: WhyItem[] = [
  { id: 'organization', icon: IMAGES.whyIconDashboard, label: 'تنظيم افضل' },
  { id: 'tracking', icon: IMAGES.whyIconActivity, label: 'متابعة مستمرة' },
  { id: 'data', icon: IMAGES.whyIconData, label: 'بيانات واضحة' },
  { id: 'management', icon: IMAGES.whyIconSettings, label: 'تسهيل الإدارة' },
];
