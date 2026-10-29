import { userTypes } from "../../data/users";
import type { UserType } from "../../data/users";
import SectionTitle from "../common/SectionTitle";
import ArabicBg from "../common/ArabicBg";

// ─── User Card ────────────────────────────────────────────────────────────────

function UserCard({ user }: { user: UserType }) {
  return (
    <div
      className="
        group drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        hover:drop-shadow-[0px_16px_20px_rgba(26,90,129,0.15)]
        transition-all duration-300
        flex flex-col items-center
        pb-[45px] pt-[8.463px]
        relative rounded-[24px] w-[283.5px]
        overflow-visible select-none cursor-default
      "
      aria-label={user.title}
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
            alt={user.title}
            className="absolute h-full max-w-none pointer-events-none rounded-[10.155px] transition-transform duration-300 group-hover:scale-103"
            style={{
              left: user.coverOffsetX ?? "-7.65%",
              top: user.coverOffsetY ?? "5.8%",
              width: user.coverScale ?? "120%",
            }}
            src={user.bookCover}
          />
        </div>

        <div className="flex flex-col items-start pt-[16.925px] w-[242.879px] mx-auto">
          <div className="flex flex-col items-center w-full">
            <h3
              dir="auto"
              className="font-['Almarai:Bold'] not-italic text-[20px] text-[#333] text-center leading-[23.696px] whitespace-nowrap m-0 mb-1"
            >
              {user.title}
            </h3>
            <p
              dir="auto"
              className="font-['Almarai:Regular'] not-italic text-[12px] text-[#666] text-center leading-relaxed m-0"
            >
              {user.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pill badge matching Figma Desktop - 7: متوفر حاليا / قريبا */}
      <div className="-translate-x-1/2 absolute bottom-[-15px] left-1/2 z-10 pointer-events-none">
        <span
          className={`
            flex items-center justify-center
            px-[26px] py-[7px] rounded-[9999px]
            transition-all duration-200 shadow-md border-0
            font-['Almarai:Bold'] font-bold not-italic text-[13px] text-white leading-none whitespace-nowrap
            ${user.available ? "bg-[#1a5a81]" : "bg-[#1a5a81]/85"}
          `}
        >
          {user.status}
        </span>
      </div>
    </div>
  );
}

// ─── Users Section ────────────────────────────────────────────────────────────

export default function Users() {
  return (
    <section
      id="roles"
      aria-label="الأدوار في النظام"
      className="
        bg-white flex flex-col gap-8 md:gap-10 items-center
        pb-16 md:pb-[60px] pt-12 md:pt-[90px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
        overflow-x-clip
      "
    >
      <SectionTitle
        title="منظومة واحدة لكل الأدوار"
        subtitle="واجهات مخصصة لكل مستخدم تلبي احتياجات المشرف، المعلم، الطالب، وولي الأمر بتجربة سلسة ومتكاملة."
      />

      <div className="w-full flex flex-col items-center relative min-h-[320px] mt-2">
        <div className="flex flex-wrap gap-8 sm:gap-6 md:gap-[20px] items-center justify-center w-full">
          {userTypes.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}
