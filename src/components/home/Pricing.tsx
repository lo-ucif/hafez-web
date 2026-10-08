import { pricingPlans } from '../../data/pricing';
import type { PricingPlan } from '../../data/pricing';
import SectionTitle from '../common/SectionTitle';

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className="
        drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        flex flex-col gap-[5px] items-center justify-center
        pb-[20px] pt-[35px] px-[20px]
        relative rounded-[12px] bg-white
        w-full max-w-[280px] sm:max-w-[300px]
        transition-transform duration-200 hover:-translate-y-1
      "
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255,0.002) 0%, rgba(255,255,255,0.002) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
      }}
    >
      {/* Discount badge matching Figma node 173:553 */}
      {plan.discount && (
        <div className="absolute bg-[#1d5c82] flex flex-col items-end px-[20px] py-[6.5px] right-0 rounded-bl-[26px] top-0 z-10 shadow-sm">
          <span className="font-['Almarai:Bold'] not-italic text-[12px] text-white leading-normal">
            {plan.discount}
          </span>
        </div>
      )}

      {/* Book cover / mascot image */}
      <div className="h-[210px] sm:h-[221px] relative rounded-[8px] w-[185px] sm:w-[195px] overflow-hidden">
        <img
          alt={`غلاف باقة ${plan.title}`}
          className="absolute inset-0 object-contain pointer-events-none rounded-[8px] size-full"
          src={plan.bookCover}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 sm:gap-[15px] items-center w-full">
        <div className="flex flex-col gap-1 items-center">
          <h3
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[20px] sm:text-[24px] text-[#333] text-center leading-normal whitespace-nowrap m-0"
          >
            {plan.title}
          </h3>
          <p
            dir="auto"
            className="font-['Almarai:Regular'] not-italic text-[14px] sm:text-[16px] text-[#666] text-center leading-normal m-0"
          >
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center w-full">
          <p
            dir="auto"
            className="font-['Almarai:Bold'] not-italic text-[18px] sm:text-[20px] text-[#1a5a81] text-center leading-normal whitespace-nowrap m-0"
          >
            {plan.price}
          </p>
          {plan.originalPrice && (
            <p className="font-['Almarai:Regular'] not-italic text-[14px] sm:text-[16px] text-[rgba(202,177,120,0.7)] text-center line-through leading-normal whitespace-nowrap m-0">
              {plan.originalPrice}
            </p>
          )}
        </div>
      </div>

      {/* Action button */}
      <div className="mt-3 w-full flex justify-center">
        <button
          type="button"
          className="
            bg-[#1a5a81] text-white hover:bg-[#154e70] active:scale-95
            transition-all duration-200 cursor-pointer
            px-6 py-2.5 rounded-[6px] w-full max-w-[200px]
            font-['Almarai:Regular'] text-[16px] sm:text-[18px] text-center
            shadow-sm hover:shadow-md
          "
        >
          طلب نسخة
        </button>
      </div>
    </article>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────

/**
 * Pricing section — "عروض المنصة" plans matching Figma design.
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="عروض المنصة"
      className="
        bg-white flex flex-col gap-12 md:gap-[60px] items-center overflow-clip
        pb-14 md:pb-[60px] pt-12 md:pt-[100px] px-4 md:px-[10px]
        relative w-full max-w-[1440px] mx-auto
      "
    >
      <SectionTitle title="عروض المنصة" />

      {/* Grid of pricing cards */}
      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-[30px_60px] items-center justify-center w-full">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
