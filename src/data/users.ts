import { IMAGES } from '../constants/images';

export interface UserType {
  id: string;
  title: string;
  description: string;
  bookCover: string;
  coverOffsetX: string;
  coverOffsetY: string;
  coverScale: string;
}

export const userTypes: UserType[] = [
  {
    id: 'parent',
    title: 'ولي الأمر',
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
    bookCover: IMAGES.bookCoverParent,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
  },
  {
    id: 'student',
    title: 'الطالب',
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
    bookCover: IMAGES.bookCoverStudent,
    coverOffsetX: '-15.38%',
    coverOffsetY: '4.64%',
    coverScale: '130.35%',
  },
  {
    id: 'teacher',
    title: 'المعلم',
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
    bookCover: IMAGES.bookCoverTeacher,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
  },
  {
    id: 'admin',
    title: 'المدير',
    description: 'هبطت بنا الطائرة حيث مطار الكويت الجديد، الذي يقع بين محبيتي الكويت، والحمدي، ويعتبر آية في الفن المعماري',
    bookCover: IMAGES.bookCoverAdmin,
    coverOffsetX: '-7.65%',
    coverOffsetY: '5.8%',
    coverScale: '120.54%',
  },
];
