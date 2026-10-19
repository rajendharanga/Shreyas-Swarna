import React from 'react';
import { Mic, Sparkles, Eye, Calculator, ShoppingBag, ShieldCheck } from 'lucide-react';

const journeySteps = [
  {
    step: '01',
    title: 'Customer Describes The Jewellery',
    action: 'Voice or text in Telugu, English & regional languages',
    quote: '“I want a traditional Telugu gold necklace inspired by temple jewellery, with a modern design, weighing approximately 20 grams.”',
    icon: Mic,
  },
  {
    step: '02',
    title: 'Personalised Design Visualisation',
    action: 'Visual concepts in 3–5 minutes target',
    quote: 'Modify patterns, adjust approximate gold gram weight, change motifs, or add personalized initials & family heritage details.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: 'Virtual Jewellery Preview',
    action: 'Digital mannequin & try-on preview',
    quote: 'View the chosen necklace draped on virtual mannequins to assess proportions, neckline contour, and aesthetics.',
    icon: Eye,
  },
  {
    step: '04',
    title: 'Master Goldsmith Feasibility & Rate Check',
    action: 'Purity verification & live rate check',
    quote: 'An experienced jewellery master verifies craftsmanship feasibility and generates a provisional estimate based on daily gold rates and making charges.',
    icon: Calculator,
  },
  {
    step: '05',
    title: 'Order Confirmation',
    action: 'Placed directly at local partner store',
    quote: 'Review delivery milestones, hallmarked specifications, and confirmed price terms through your trusted local jeweller.',
    icon: ShoppingBag,
  },
  {
    step: '06',
    title: 'Crafted & BIS Hallmarked',
    action: '5–10 working days target delivery',
    quote: 'Fabricated by approved artisan workshops, inspected for 100% BIS Hallmarking with unique HUID verification, and handed over at the counter.',
    icon: ShieldCheck,
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · THE IN-STORE EXPERIENCE</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            PERSONALISED GOLD DESIGNS.
            <span className="block gold-gradient-text">THE 6-STEP IN-STORE JOURNEY.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            Imagine walking into an established jewellery showroom in a Tier-2 or Tier-3 city and co-creating your heirloom within minutes instead of flipping through standard paper catalogues.
          </p>

          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Proposed service in preparation under Shreyas Group.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {journeySteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#181818] shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                    <span className="text-3xl font-mono font-bold text-white group-hover:text-[#EBD38D] transition-colors">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                      <Icon className="h-5 w-5 text-[#C6A15B]" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6A15B] block mb-1">
                    {step.action}
                  </span>

                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
                    {step.quote}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#888888] flex items-center justify-between">
                  <span>Coming Soon · Step {step.step}</span>
                  <span className="text-[#EBD38D]">Planned Workflow</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Timeline Callout */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#121212] p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl p-2.5 bg-[#1B1914] border border-[#C6A15B]/30 text-[#C6A15B] shrink-0 mt-0.5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Upcoming Timeline: Instant Concept vs Physical Gold Delivery
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#C0BCB5] max-w-3xl leading-relaxed">
                “The design preview can be instant (3–5 minutes). The physical gold jewellery normally cannot.”
                Technical goldsmith validation takes 24–48 hours; standard customised jewellery delivery targets 5–10 working days, backed by 100% BIS Hallmarking.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#EBD38D] whitespace-nowrap">
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
};
