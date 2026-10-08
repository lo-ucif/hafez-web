import { IMAGES } from '../constants/images';

export interface InstitutionItem {
  id: string;
  title: string;
  image: string;
}

export const institutions: InstitutionItem[] = [
  {
    id: 'associations',
    title: 'جمعيات و مؤسسات',
    image: IMAGES.bookCoverPrimary, // imgBookCover4
  },
  {
    id: 'school',
    title: 'مدرسة قرأنية',
    image: IMAGES.bookCoverMiddle, // imgBookCover5
  },
  {
    id: 'mosque',
    title: 'مسجد',
    image: IMAGES.bookCoverHigh, // imgBookCover6
  },
];
