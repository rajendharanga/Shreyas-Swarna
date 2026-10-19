import React from 'react';
import { ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'SHARE YOUR IDEA',
    description: '“Tell us what you have in mind.”',
    detail: 'Whether it is an heirloom motif, a family memory, or a modern silhouette you’ve imagined.',
  },
  {
    number: '02',
    title: 'EXPLORE DESIGNS',
    description: '“Discover ideas inspired by your taste and story.”',
    detail: 'Visualise aesthetic variations, exploring detailing, proportions, and gold textures.',
  },
  {
    number: '03',
    title: 'REFINE YOUR FAVOURITE',
    description: '“Work towards a design that feels right for you.”',
    detail: 'Personalise the nuances until the concept feels entirely aligned with your personal identity.',
  },
  {
    number: '04',
    title: 'BRING IT TO LIFE',
    description: '“An approved jewellery partner can help validate the design and arrange its creation.”',
    detail: 'Experienced master jewellers assess structural feasibility and purity before craftsmanship begins.',
  },
];

export const ApproachSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            OUR APPROACH
          </span>
          <h2
            className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            FROM AN IDEA TO SOMETHING PERSONAL.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            A thoughtful, collaborative journey that honors the emotional meaning behind every gold creation.
          </p>
        </div>

        {/* 4 Large Clean Steps Grid (CreatorCut process style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] p-8 lg:p-10 transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#161616] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <span
                    className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-tighter group-hover:text-[#EBD38D] transition-colors"
                  >
                    {step.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />
                </div>

                <h3
                  className="mt-8 text-xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>

                <p className="mt-4 text-base font-medium text-[#EBD38D] leading-relaxed">
                  {step.description}
                </p>

                <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#888888]">
                PHASE {step.number} // 04
              </div>
            </div>
          ))}
        </div>

        {/* Master Goldsmith Verification Card */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#141414] p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl p-2.5 bg-[#1B1914] border border-[#C6A15B]/30 text-[#C6A15B] shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Technical Craftsmanship Verification
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#C0BCB5] max-w-3xl leading-relaxed">
                All concepts require physical technical verification by approved independent jewellery partners prior to fabrication to guarantee 100% certified hallmarked purity and lasting structural durability.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#EBD38D] whitespace-nowrap">
            Zero Compromise Quality
          </div>
        </div>
      </div>
    </section>
  );
};
