import { IMAGES } from '../constants/images';

export interface UserType {
  id: string;
  title: string;
  description: string;
  bookCover: string;
  coverOffsetX: string;
  coverOffsetY: string;
  coverScale: string;
  status: 'متوفر حاليا' | 'قريبا';
  available: boolean;
}

export const userTypes: UserType[] = [
  {
    id: 'supervisor',
    title: 'المشرف',
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
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
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
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
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
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
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
    bookCover: IMAGES.bookCoverParent,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
    status: 'قريبا',
    available: false,
  },
];
