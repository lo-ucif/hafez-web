import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { userTypes } from "../../data/users";
import type { UserType } from "../../data/users";
import { IMAGES } from "../../constants/images";
import SectionTitle from "../common/SectionTitle";
import ArabicBg from "../common/ArabicBg";
import UserRoleExpandedPanel from "./UserRoleExpandedPanel";

const gridContainerMotion = {
  initial: { opacity: 0, scale: 0.96, y: 24 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 16,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const cardGridMotion = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.28, ease: "easeIn" },
  },
};

const cardItemMotion = {
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
  onExpand,
}: {
  user: UserType;
  index: number;
  onExpand: (id: string) => void;
}) {
  return (
    <motion.article
      layout
      variants={cardItemMotion}
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
        <motion.button
          type="button"
          onClick={() => onExpand(user.id)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="
            bg-[#1a5a81] flex gap-[7px] items-center
            px-[27px] py-[8.5px] rounded-[9999px]
            cursor-pointer hover:bg-[#154e70]
            transition-colors duration-200 shadow-md border-0
          "
          aria-label={`المزيد عن ${user.title}`}
          aria-expanded={false}
        >
          <img alt="" aria-hidden="true" className="size-[14px]" src={IMAGES.plusIcon} />
          <span className="font-['Almarai:Bold'] not-italic text-[12px] text-white leading-none">المزيد</span>
        </motion.button>
      </div>
    </motion.article>
  );
}

// ─── Users Section ────────────────────────────────────────────────────────────

export default function Users() {
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  const handleExpand = (roleId: string) => {
    setExpandedRoleId(roleId);
  };

  const handleClose = () => {
    setExpandedRoleId(null);
  };

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
        <AnimatePresence mode="wait" initial={false}>
          {expandedRoleId ? (
            <motion.div
              key="expanded-panel"
              className="w-full flex justify-center"
              variants={gridContainerMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UserRoleExpandedPanel roleId={expandedRoleId} onClose={handleClose} />
            </motion.div>
          ) : (
            <motion.div
              key="cards-grid"
              className="w-full overflow-hidden"
              variants={gridContainerMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                variants={cardGridMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-wrap gap-8 sm:gap-6 md:gap-[20px] items-center justify-center w-full"
              >
                {userTypes.map((user, index) => (
                  <UserCard key={user.id} user={user} index={index} onExpand={handleExpand} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
