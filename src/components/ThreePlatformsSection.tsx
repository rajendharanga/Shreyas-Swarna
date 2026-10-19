import React from 'react';
import { Crown, Sparkles, Store, ShieldCheck, ArrowRight } from 'lucide-react';

interface ThreePlatformsSectionProps {
  onLearnMore: () => void;
  onPartnerClick: () => void;
}

export const ThreePlatformsSection: React.FC<ThreePlatformsSectionProps> = ({
  onLearnMore,
  onPartnerClick,
}) => {
  return (
    <section id="platforms" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · THE THREE PLATFORMS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            THREE INTERCONNECTED PLATFORMS.
            <span className="block gold-gradient-text">ONE ASSET-LIGHT REVOLUTION.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            “Shreyas owns the platform. Partners own the stores. Customers create the designs.”
            An upcoming venture transforming traditional jewellery retail across India's Tier-2 and Tier-3 markets without
            requiring Shreyas Group to finance gold inventory or real estate.
          </p>

          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Proposed venture in pre-launch preparation. Coming soon.
          </p>
        </div>

        {/* 3 Interconnected Platforms Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Platform 1 */}
          <div className="group rounded-3xl border border-white/10 bg-[#121212] p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#161616] shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C6A15B] font-semibold">
                  PLATFORM 01
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                  <Crown className="h-5 w-5 text-[#C6A15B]" />
                </div>
              </div>

              <span className="text-[11px] uppercase tracking-wider text-[#888888] font-mono">
                Ownership: Shreyas Group
              </span>
              <h3
                className="mt-2 text-2xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Shreyas Jewellery Brand
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                National brand identity, consumer trust, state-wide advertising,
                and celebrity integrations under Shreyas Group's established entertainment pedigree.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#888888] flex items-center justify-between">
              <span>National Advertising & IP</span>
              <span className="text-white font-mono">Coming Soon</span>
            </div>
          </div>

          {/* Platform 2 */}
          <div className="group rounded-3xl border border-[#C6A15B]/30 bg-[#14120E] p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#181611] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-28 w-28 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#EBD38D] font-semibold">
                  PLATFORM 02
                </span>
                <div className="p-2.5 rounded-xl bg-[#C6A15B]/20 text-[#EBD38D] transition-colors">
                  <Sparkles className="h-5 w-5 text-[#C6A15B]" />
                </div>
              </div>

              <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-mono">
                Ownership: Shreyas Group
              </span>
              <h3
                className="mt-2 text-2xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Shreyas Design Studio
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                Personalised voice and design preview (Telugu, English, Hindi), virtual try-on previews,
                live daily gold rate estimation, and master goldsmith feasibility checks.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#888888] flex items-center justify-between">
              <span>Personalised Design Preview</span>
              <span className="text-[#EBD38D] font-mono">Coming Soon</span>
            </div>
          </div>

          {/* Platform 3 */}
          <div className="group rounded-3xl border border-white/10 bg-[#121212] p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#161616] shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C6A15B] font-semibold">
                  PLATFORM 03
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                  <Store className="h-5 w-5 text-[#C6A15B]" />
                </div>
              </div>

              <span className="text-[11px] uppercase tracking-wider text-[#888888] font-mono">
                Ownership: Local Jewellery Partners
              </span>
              <h3
                className="mt-2 text-2xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Partner Jewellery Network
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                Independent jewellers providing established showrooms, gold procurement, local goldsmith
                relationships, billing, and trusted multi-generational community goodwill.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#888888] flex items-center justify-between">
              <span>Showroom & Gold Inventory</span>
              <span className="text-white font-mono">Partner Held</span>
            </div>
          </div>
        </div>

        {/* Strategic Doctrine Quote Box */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#141414] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B]">
              COMING SOON // PROPOSED VISION
            </span>
            <p
              className="mt-2 text-xl sm:text-2xl font-light italic text-[#F5F2EB] leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-serif-accent)' }}
            >
              “Service builds reputation. Ownership builds legacy.”
            </p>
            <p className="mt-2 text-xs text-[#888888]">
              — Gandra Srinivas Rao | Founder & Strategic Architect, Shreyas Group
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onPartnerClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] to-[#C6A15B] px-6 py-3.5 text-xs font-bold tracking-wider text-[#090909] transition-all hover:brightness-110"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>EXPLORE PARTNER MODELS</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
