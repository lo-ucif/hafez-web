import { IMAGES } from '../constants/images';

export interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  bookCover: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'primary',
    title: 'المدرسة الابتدائية',
    description: 'هبطت بنا الطائرة حيث مطار الكويت ',
    price: 'DA 49900 / سنويا',
    originalPrice: '1000 دج',
    discount: 'خصم 20%',
    bookCover: IMAGES.bookCoverUniversity, // imgBookCover7
  },
  {
    id: 'middle',
    title: 'المدرسة المتوسطة',
    description: 'هبطت بنا الطائرة حيث مطار الكويت ',
    price: 'DA 49900 / سنويا',
    originalPrice: '1000 دج',
    discount: 'خصم 20%',
    bookCover: IMAGES.bookCoverUniversity, // imgBookCover7
  },
  {
    id: 'high',
    title: 'المدرسة الثانوية',
    description: 'هبطت بنا الطائرة حيث مطار الكويت ',
    price: 'DA 49900 / سنويا',
    originalPrice: '1000 دج',
    discount: 'خصم 20%',
    bookCover: IMAGES.bookCoverUniversity, // imgBookCover7
  },
  {
    id: 'university',
    title: 'المدرسة الجامعية',
    description: 'هبطت بنا الطائرة حيث مطار الكويت ',
    price: 'DA 49900 / سنويا',
    originalPrice: '1000 دج',
    discount: 'خصم 20%',
    bookCover: IMAGES.bookCoverUniversity, // imgBookCover7
  },
];

export interface AdditionalService {
  id: string;
  title: string;
  price: string;
  features: string[];
}

export const additionalServices: AdditionalService[] = [
  {
    id: 'maqraa-1',
    title: 'المقرأة الإلكترونية',
    price: 'DA 49900 / سنويا',
    features: ['حلقات افتراضية', 'وقت غير محدود', 'غرف فردية وجماعية'],
  },
  {
    id: 'maqraa-2',
    title: 'المقرأة الإلكترونية',
    price: 'DA 49900 / سنويا',
    features: ['حلقات افتراضية', 'وقت غير محدود', 'غرف فردية وجماعية'],
  },
  {
    id: 'maqraa-3',
    title: 'المقرأة الإلكترونية',
    price: 'DA 49900 / سنويا',
    features: ['حلقات افتراضية', 'وقت غير محدود', 'غرف فردية وجماعية'],
  },
  {
    id: 'maqraa-4',
    title: 'المقرأة الإلكترونية',
    price: 'DA 49900 / سنويا',
    features: ['حلقات افتراضية', 'وقت غير محدود', 'غرف فردية وجماعية'],
  },
];
