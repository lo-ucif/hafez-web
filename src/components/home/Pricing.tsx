import { pricingPlans } from '../../data/pricing';
import type { PricingPlan } from '../../data/pricing';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className="
        drop-shadow-[0px_8.463px_6.347px_rgba(0,0,0,0.1),0px_3.385px_2.539px_rgba(0,0,0,0.1)]
        flex flex-col gap-[5px] items-center justify-center
        pb-[10px] pt-[35px] px-[20.31px]
        relative
      "
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255,0.002) 0%, rgba(255,255,255,0.002) 100%), linear-gradient(90deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)',
      }}
    >
      {/* Discount badge */}
      {plan.discount && (
        <div className="absolute bg-[#1d5c82] flex flex-col items-end px-[19.776px] py-[6.592px] right-[1.15px] rounded-bl-[26.368px] top-[0.5px]">
          <span className="font-['Almarai:Bold'] not-italic text-[11.536px] text-white leading-[16.48px]">
            {plan.discount}
          </span>
        </div>
      )}

      {/* Book cover */}
      <div className="h-[221.438px] relative rounded-[8.132px] w-[194.5px]">
        <img
          alt={`غلاف كتاب ${plan.title}`}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.132px] size-full"
          src={plan.bookCover}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-[15px] items-center w-[243px]">
        <div className="flex flex-col gap-[10px] items-center">
          <h3 dir="auto" className="font-['Almarai:Bold'] not-italic text-[24px] text-[#333] text-center leading-[23.696px] whitespace-nowrap">
            {plan.title}
          </h3>
          <p dir="auto" className="font-['Almarai:Regular'] not-italic text-[16px] text-[#666] text-center leading-[16.502px]">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center w-full">
          <p dir="auto" className="font-['Almarai:Bold'] not-italic text-[20px] text-[#1a5a81] text-center leading-[23.696px] whitespace-nowrap">
            {plan.price}
          </p>
          {plan.originalPrice && (
            <p className="font-['Almarai:Regular'] not-italic text-[16px] text-[rgba(202,177,120,0.5)] text-center line-through leading-[26.368px] whitespace-nowrap">
              {plan.originalPrice}
            </p>
          )}
        </div>
      </div>

      <Button variant="primary" size="sm" className="rounded-[6px] mt-2">
        طلب نسخة
      </Button>
    </article>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────

/**
 * Pricing section — school-level plan cards.
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="العروض"
      className="
        bg-white flex flex-col gap-[60px] items-center overflow-clip
        pb-[60px] pt-[100px] px-[10px]
        relative w-full
      "
    >
      <SectionTitle title="العروض" />

      <div className="content-center flex flex-wrap gap-[20px] items-start justify-center w-full">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
