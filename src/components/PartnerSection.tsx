import React from 'react';
import { ArrowUpRight, Store, Sparkles, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

interface PartnerSectionProps {
  onPartnerClick: (modelType?: string) => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onPartnerClick }) => {
  return (
    <section id="partner" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Store className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · RETAIL PARTNERSHIP ONBOARDING</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.98]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            TWO PARTNERSHIP FORMATS.
            <span className="block gold-gradient-text">YOUR STORE. A NEW OPPORTUNITY.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            “Instead of constructing new showrooms, Shreyas is creating a structured partnership programme
            for independent jewellery retailers across India's Tier-2 and Tier-3 markets.”
          </p>

          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Upcoming partnership programme in pre-launch planning under Shreyas Group.
          </p>
        </div>

        {/* Two Models Comparison Grid (Model A vs Model B) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* MODEL A: SHREYAS AI GOLD STUDIO */}
          <div className="rounded-3xl border border-[#C6A15B]/30 bg-[#14120E] p-8 lg:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EBD38D] font-bold">
                    MODEL A // COMING SOON · RECOMMENDED ENTRY
                  </span>
                  <h3
                    className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Shreyas Gold Design Studio
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#C6A15B]/20 text-[#EBD38D]">
                  <Sparkles className="h-6 w-6 text-[#C6A15B]" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#D8D4CC] leading-relaxed font-medium">
                A branded personalised gold design experience studio installed inside your existing showroom.
              </p>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#C0BCB5]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Keep Your Existing Store Name:</strong> Retain your trusted family identity and established customer goodwill.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Dedicated In-Store Experience:</strong> Branded as “SHREYAS SWARNA.AI — Personalised Gold Design Studio”.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Partner Control:</strong> You provide the premises, gold inventory, billing, and customer service.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Shreyas Contribution:</strong> Custom design counter, master goldsmith review pipeline, state-wide promotions, and celebrity pull.
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl border border-white/5 bg-[#1C1812] text-xs font-mono text-[#EBD38D]">
                <span>Commercial Term: 15% share of realised making/design charges + ₹8,000/mo platform subscription</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onPartnerClick('partner-a')}
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] to-[#C6A15B] py-4 text-xs font-bold tracking-wider text-[#090909] shadow-lg shadow-[#C6A15B]/20 transition-all hover:brightness-110 active:scale-[0.99]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>EXPRESS INTEREST IN IN-STORE STUDIO · COMING SOON</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* MODEL B: SHREYAS BRANDED JEWELLERY PARTNER */}
          <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 lg:p-12 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#888888] font-bold">
                    MODEL B // COMING SOON · ADVANCED AFFILIATION
                  </span>
                  <h3
                    className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Shreyas Branded Partner
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 text-[#EBD38D]">
                  <Building2 className="h-6 w-6 text-[#C6A15B]" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#D8D4CC] leading-relaxed font-medium">
                Transform your entire showroom into a flagship Shreyas-affiliated national destination.
              </p>

              <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#C0BCB5]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Co-Branded Signboard:</strong> “SHREYAS SWARNA.AI — Operated by [Your Store Name]”.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Whole Showroom Influence:</strong> Premium brand standards, central promotions, and approved customer service systems.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">National Ambassador Campaigns:</strong> Dedicated central celebrity media campaigns driving footfall to your location.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Stock Ownership Maintained:</strong> Partner continues owning inventory, real estate, and retail billing.
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl border border-white/5 bg-[#181818] text-xs font-mono text-[#A0A0A0]">
                <span>Commercial Term: 0.5% – 0.8% of eligible net jewellery sales for full brand licensing</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onPartnerClick('partner-b')}
                className="group w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 text-xs font-bold tracking-wider text-white hover:border-[#C6A15B] hover:text-[#EBD38D] transition-all"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>EXPLORE BRANDED SHOWROOM · COMING SOON</span>
                <ArrowUpRight className="h-4 w-4 text-[#C6A15B]" />
              </button>
            </div>
          </div>
        </div>

        {/* Strategic Founder Recommendation Note */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-[#121212] p-6 lg:p-8 flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-[#C6A15B] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
            <strong className="text-white">Founder's Strategic Recommendation:</strong> “Launch with Model A. Expand selectively into Model B. As an upcoming venture in preparation, Shreyas must first establish customer trust and unit profitability before expecting multi-generational jewellers to replace their family name. The Design Studio approach gives a practical, zero-inventory-risk way to enter the market and prove mutual commercial value.”
          </p>
        </div>
      </div>
    </section>
  );
};
