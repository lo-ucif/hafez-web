import { userTypes } from '../../data/users';
import type { UserType } from '../../data/users';
import { IMAGES } from '../../constants/images';
import SectionTitle from '../common/SectionTitle';
import ArabicBg from '../common/ArabicBg';

// ─── User Card ────────────────────────────────────────────────────────────────

function UserCard({ user }: { user: UserType }) {
  return (
    <article
      className="
        drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        flex flex-col items-center
        pb-[45px] pt-[8.463px]
        relative rounded-[24px] w-[283.5px]
        overflow-hidden
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

      {/* Book cover image */}
      <div className="h-[276.518px] relative rounded-[10.155px] w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.155px]">
          <img
            alt={`غلاف كتاب ${user.title}`}
            className="absolute h-full max-w-none"
            style={{
              left: user.coverOffsetX,
              top: user.coverOffsetY,
              width: user.coverScale,
            }}
            src={user.bookCover}
          />
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col items-start pt-[16.925px] w-[242.879px]">
        <div className="flex flex-col items-center w-full">
          <h3
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[20px] text-[#333] text-center leading-[23.696px] whitespace-nowrap"
          >
            {user.title}
          </h3>
          <p
            dir="auto"
            className="font-['Almarai:Regular'] not-italic text-[10.155px] text-[#666] text-center leading-[16.502px] whitespace-nowrap"
          >
            {user.description}
          </p>
        </div>
      </div>

      {/* "More" action button */}
      <div className="-translate-x-1/2 absolute bottom-[-14.92px] left-[calc(50%+0.28px)]">
        <button
          type="button"
          className="
            bg-[#1a5a81] flex gap-[6.77px] items-center
            px-[27.081px] py-[8.463px] rounded-[8461.84px]
            cursor-pointer hover:bg-[#154e70] transition-colors duration-200
          "
          aria-label={`المزيد عن ${user.title}`}
        >
          <img alt="" aria-hidden="true" className="size-[13.54px]" src={IMAGES.plusIcon} />
          <span className="font-['Almarai:Bold'] not-italic text-[11.848px] text-white leading-[16.925px]">
            المزيد
          </span>
        </button>
      </div>
    </article>
  );
}

// ─── Users Section ────────────────────────────────────────────────────────────

/**
 * System users section — "مستخدمو النظام" book-style cards.
 */
export default function Users() {
  return (
    <section
      id="users"
      aria-label="مستخدمو النظام"
      className="
        bg-white flex flex-col gap-[60px] items-center overflow-clip
        pb-[60px] pt-[100px] px-[10px]
        relative w-full
      "
    >
      <SectionTitle title="مستخدمو النظام" />

      <div className="content-center flex flex-wrap gap-[20px] items-center justify-center w-full">
        {userTypes.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}
