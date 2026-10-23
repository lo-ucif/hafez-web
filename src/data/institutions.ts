import { IMAGES } from "../constants/images";

export interface InstitutionItem {
  id: string;
  title: string;
  image: string;
  objectPosition?: string;
}

export const institutions: InstitutionItem[] = [
  {
    id: "mosque",
    title: "مسجد",
    image: IMAGES.institutionMosque,
    objectPosition: "object-[center_42%]",
  },
  {
    id: "school",
    title: "مدرسة قرأنية",
    image: IMAGES.institutionSchool,
    objectPosition: "object-[center_35%]",
  },
  {
    id: "maqraa",
    title: "مقرأة الكترونية",
    image: IMAGES.institutionMaqraa,
    objectPosition: "object-center",
  },
];

