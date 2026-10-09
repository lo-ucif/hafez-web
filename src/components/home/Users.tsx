import { motion, type Variants } from "framer-motion";
import { userTypes } from "../../data/users";
import type { UserType } from "../../data/users";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";
import ArabicBg from "../common/ArabicBg";

const cardGridMotion: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const cardItemMotion: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// ─── User Card ────────────────────────────────────────────────────────────────

function UserCard({
  user,
}: {
  user: UserType;
}) {
  return (
    <motion.a
      href={`#/role/${user.id}`}
      layout
      variants={cardItemMotion}
      whileHover={{ y: -8 }}
      className="
        group drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        flex flex-col items-center
        pb-[45px] pt-[8.463px]
        relative rounded-[24px] w-[283.5px]
        overflow-visible no-underline
        focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#cab178]
      "
      aria-label={`عرض تفاصيل دور ${user.title}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.002) 0%, rgba(255,255,255,0.002) 100%), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)",
      }}
    >
      <ArabicBg
        positionClass="-translate-x-1/2 left-[calc(50%-0.25px)] top-[13px]"
        sizeClass="size-[283px]"
        opacityClass="opacity-6"
      />

      <div className="block w-full">
        <div className="h-[276.518px] relative rounded-[10.155px] w-full overflow-hidden">
          <img
            alt={`غلاف كتاب ${user.title}`}
            className="absolute h-full max-w-none pointer-events-none rounded-[10.155px] transition-transform duration-300 group-hover:scale-105"
            style={{
              left: user.coverOffsetX,
              top: user.coverOffsetY,
              width: user.coverScale,
            }}
            src={user.bookCover}
          />
        </div>

        <div className="flex flex-col items-start pt-[16.925px] w-[242.879px] mx-auto">
          <div className="flex flex-col items-center w-full">
            <h3
              dir="auto"
              className="font-['Almarai:Bold'] not-italic text-[20px] text-[#333] group-hover:text-[#1a5a81] transition-colors text-center leading-[23.696px] whitespace-nowrap m-0 mb-1"
            >
              {user.title}
            </h3>
            <p
              dir="auto"
              className="font-['Almarai:Regular'] not-italic text-[11px] text-[#666] text-center leading-relaxed m-0"
            >
              {user.description}
            </p>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 absolute bottom-[-15px] left-1/2 z-10">
        <span
          className="
            bg-[#1a5a81] flex gap-[7px] items-center
            px-[27px] py-[8.5px] rounded-[9999px]
            group-hover:bg-[#154e70]
            transition-colors duration-200 shadow-md border-0
          "
        >
          <img alt="" aria-hidden="true" className="size-[14px]" src={IMAGES.plusIcon} />
          <span className="font-['Almarai:Bold'] not-italic text-[12px] text-white leading-none">المزيد</span>
        </span>
      </div>
    </motion.a>
  );
}

// ─── Users Section ────────────────────────────────────────────────────────────

export default function Users() {
  return (
    <section
      id="users"
      aria-label="مستخدمو النظام"
      className="
        bg-white flex flex-col gap-12 md:gap-[60px] items-center
        pb-16 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
        overflow-x-clip
      "
    >
      <SectionTitle title="مستخدمو النظام" />

      <div className="w-full flex flex-col items-center relative min-h-[320px]">
        <motion.div
          variants={cardGridMotion}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-8 sm:gap-6 md:gap-[20px] items-center justify-center w-full"
        >
          {userTypes.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
