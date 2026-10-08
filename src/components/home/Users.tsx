import { motion } from 'framer-motion';
import { userTypes } from '../../data/users';
import type { UserType } from '../../data/users';
import { IMAGES } from '../../constants/images';
import SectionTitle from '../common/SectionTitle';
import ArabicBg from '../common/ArabicBg';

// ─── User Card ────────────────────────────────────────────────────────────────

function UserCard({ user, index }: { user: UserType; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="
        group drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        flex flex-col items-center
        pb-[45px] pt-[8.463px]
        relative rounded-[24px] w-[283.5px]
        overflow-visible
      "
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255,0.002) 0%, rgba(255,255,255,0.002) 100%), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)',
      }}
    >
      <ArabicBg
        positionClass="-translate-x-1/2 left-[calc(50%-0.25px)] top-[13px]"
        sizeClass="size-[283px]"
        opacityClass="opacity-6"
      />

      {/* Book cover image with hover scale */}
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

      {/* Title */}
      <div className="flex flex-col items-start pt-[16.925px] w-[242.879px]">
        <div className="flex flex-col items-center w-full">
          <h3
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[20px] text-[#333] text-center leading-[23.696px] whitespace-nowrap m-0 mb-1"
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

      {/* Action button – positioned overlapping bottom edge */}
      <div className="-translate-x-1/2 absolute bottom-[-15px] left-1/2 z-10">
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="
            bg-[#1a5a81] flex gap-[7px] items-center
            px-[27px] py-[8.5px] rounded-[9999px]
            cursor-pointer hover:bg-[#154e70]
            transition-colors duration-200 shadow-md
          "
          aria-label={`المزيد عن ${user.title}`}
        >
          <img alt="" aria-hidden="true" className="size-[14px]" src={IMAGES.plusIcon} />
          <span className="font-['Almarai:Bold'] not-italic text-[12px] text-white leading-none">
            المزيد
          </span>
        </motion.button>
      </div>
    </motion.article>
  );
}

// ─── Users Section ────────────────────────────────────────────────────────────

export default function Users() {
  return (
    <section
      id="users"
      aria-label="مستخدمو النظام"
      className="
        bg-white flex flex-col gap-12 md:gap-[60px] items-center overflow-clip
        pb-16 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      <SectionTitle title="مستخدمو النظام" />

      <div className="flex flex-wrap gap-8 sm:gap-6 md:gap-[20px] items-center justify-center w-full">
        {userTypes.map((user, index) => (
          <UserCard key={user.id} user={user} index={index} />
        ))}
      </div>
    </section>
  );
}

