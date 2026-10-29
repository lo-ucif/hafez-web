import { IMAGES } from '../constants/images';

export interface UserType {
  id: string;
  title: string;
  description: string;
  bookCover: string;
  coverOffsetX?: string;
  coverOffsetY?: string;
  coverScale?: string;
  status: 'متوفر حاليا' | 'قريبا';
  available: boolean;
}

export const userTypes: UserType[] = [
  {
    id: 'supervisor',
    title: 'المشرف',
    description: 'إدارة شاملة لكافة الحلقات والمعلمين، متابعة سير العملية التعليمية بدقة، واستخراج تقارير إحصائية متقدمة لتقييم الأداء العام.',
    bookCover: IMAGES.bookCoverAdmin,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
    status: 'متوفر حاليا',
    available: true,
  },
  {
    id: 'teacher',
    title: 'المعلم',
    description: 'متابعة يومية لتسميع الطلاب، تسجيل الحفظ الجديد والمراجعة بدقة، رصد الحضور، وتدوين الملاحظات التوجيهية لتحفيز الطلاب.',
    bookCover: IMAGES.bookCoverTeacher,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
    status: 'متوفر حاليا',
    available: true,
  },
  {
    id: 'student',
    title: 'الطالب',
    description: 'خطة يومية واضحة للورد القرآني، متابعة تقدم الحفظ والتفوق عبر لوحة الصدارة، والاطلاع على مواعيد الحلقات بكل سهولة.',
    bookCover: IMAGES.bookCoverStudent,
    coverOffsetX: '-15.38%',
    coverOffsetY: '4.64%',
    coverScale: '130.35%',
    status: 'متوفر حاليا',
    available: true,
  },
  {
    id: 'parent',
    title: 'ولي الأمر',
    description: 'متابعة مستمرة لمسار حفظ الأبناء وسجل الحضور والغياب، مع الاطلاع المباشر على تقييم المعلم ومستوى التقدم القرآني.',
    bookCover: IMAGES.bookCoverParent,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
    status: 'قريبا',
    available: false,
  },
];
