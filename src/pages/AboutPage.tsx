import React, { useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Heart,
  Store,
  Layers,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import heroImg from '../assets/images/hero_gold_sculptural_1792384188159.jpg';
import retailCraftImg from '../assets/images/retail_craft_partner_1792384190315.jpg';

interface AboutPageProps {
  onNavigateHome: (hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'About Us | SHREYAS SWARNA.AI — Coming Soon';
    return () => {
      document.title = 'SHREYAS SWARNA.AI — Coming Soon | Personalised Gold Design';
    };
  }, []);

  return (
    <div className="bg-[#090909] text-[#F5F2EB] min-h-screen">
      {/* Back to Home Breadcrumb Nav */}
      <div className="border-b border-white/5 bg-[#121212]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigateHome()}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/40">
              COMING SOON
            </span>
            <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider hidden sm:inline">
              AN UPCOMING SHREYAS GROUP INITIATIVE
            </span>
          </div>
        </div>
      </div>

      {/* STRATEGIC BLUEPRINT HERO */}
      <section className="relative py-16 lg:py-24 border-b border-white/5 bg-[#090909] overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-[450px] w-[450px] rounded-full bg-[#C6A15B]/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold">
              <Sparkles className="h-3 w-3 text-[#C6A15B]" />
              <span>COMING SOON · PRE-LAUNCH VISION</span>
            </span>
            <span className="text-xs text-[#888888] font-mono">
              Proposed by Gandra Srinivas Rao | Founder, Shreyas Group
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h1
                className="text-4xl sm:text-6xl lg:text-[4.4rem] font-bold uppercase leading-[0.95] tracking-[-0.035em] text-white"
                style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
              >
                <span>A NEW ERA OF</span>
                <span className="block gold-gradient-text">PERSONALISED GOLD JEWELLERY.</span>
              </h1>

              <div className="mt-6 p-5 rounded-2xl border-l-2 border-[#C6A15B] bg-[#14120E]">
                <p className="text-base sm:text-lg font-medium text-[#EBD38D] leading-relaxed">
                  “Transform traditional jewellery stores across India's Tier-2 and Tier-3 markets into culturally celebrated, nationally branded gold jewellery destinations—empowering customers to co-create bespoke heirlooms with master craftsmanship.”
                </p>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#C0BCB5]">
                Our vision is to build a nationwide personalised jewellery design and retail partnership network, where Shreyas provides the brand strength, custom design experience, and exclusive collections, while established jewellers provide showroom infrastructure, gold procurement, master craftsmanship, and multi-generational trust.
              </p>

              <p className="mt-3 text-xs text-[#EBD38D] font-mono">
                * An upcoming initiative in preparation under Shreyas Group.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-[#141414] p-3 shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#090909]">
                  <img
                    src={heroImg}
                    alt="Artistic Indian gold jewellery piece with sculptural lines"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
                <div className="p-4 text-xs text-[#888888] flex items-center justify-between">
                  <span>Founder's Vision · Coming Soon</span>
                  <span className="font-mono text-[#EBD38D]">Shreyas Group</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE BUSINESS OPPORTUNITY & MARKET TIMING */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[#0C0C0C]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              01 // MARKET LANDSCAPE · COMING SOON
            </span>
            <h2
              className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ₹7.31 LAKH CRORE MARKET OPPORTUNITY.
            </h2>
            <p className="mt-4 text-base text-[#C0BCB5]">
              India's gems & jewellery market was valued at ₹7.31 lakh crore in Jan 2026 (IBEF), projected to grow to ₹11.18 lakh crore by 2030.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 shadow-xl">
              <span className="text-xs font-mono text-[#EBD38D] uppercase">Proposition 01</span>
              <h3 className="mt-3 text-xl font-bold uppercase text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Personalised Lightweight Gold
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Elevated gold prices are accelerating consumer demand for lighter-weight, design-forward jewellery that younger generations can wear daily.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 shadow-xl">
              <span className="text-xs font-mono text-[#EBD38D] uppercase">Proposition 02</span>
              <h3 className="mt-3 text-xl font-bold uppercase text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Redesigning Inherited Gold
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                “Your Mother's Gold. Your Daughter's Design.” Helping families exchange unworn ancestral gold into modern personalised heirlooms.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 shadow-xl">
              <span className="text-xs font-mono text-[#EBD38D] uppercase">Proposition 03</span>
              <h3 className="mt-3 text-xl font-bold uppercase text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Modern In-Store Experience
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                Empowering independent jewellers with national advertising and personalised design capabilities rather than forcing them into high-capital competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BUSINESS PRINCIPLE */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090909]">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            02 // THE PARTNERSHIP ADVANTAGE · COMING SOON
          </span>

          <h2
            className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SHREYAS OWNS THE BRAND & DESIGN STUDIO.
            <span className="block text-[#EBD38D]">PARTNERS OWN THE STORES & GOLD.</span>
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#C0BCB5]">
            <p>
              The advantage is that Shreyas does not initially need to invest hundreds of crores in gold inventory, showroom properties or manufacturing facilities.
            </p>
            <p>
              Instead, its principal investment is in brand development, design craftsmanship, and distribution partnerships. This creates the foundation for a sustainable expansion model across India.
            </p>
            <div className="rounded-2xl border-l-2 border-[#C6A15B] bg-[#141414] p-6 text-white font-medium italic">
              “Service builds reputation. Ownership builds legacy.”
              <span className="block mt-2 text-xs text-[#888888] font-normal not-italic">
                — Gandra Srinivas Rao
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MULTI-YEAR STRATEGIC ROADMAP */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[#0C0C0C]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              03 // GROWTH TIMELINE · COMING SOON
            </span>
            <h2
              className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              PHASED EXPANSION STRATEGY.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-[#C6A15B]/30 bg-[#161410] p-7 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#EBD38D] font-bold">
                PHASE 1 (Oct 2026 – Mar 2027)
              </span>
              <h3 className="mt-2 text-lg font-bold text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Validation Pilot · Coming Soon
              </h3>
              <p className="mt-3 text-xs text-[#C0BCB5] leading-relaxed">
                5–10 stores in Telangana & Andhra Pradesh cluster (Tier 2/3 towns supported by Hyderabad operational centre). Prove repeatable customer orders.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-7 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#888888] font-bold">
                PHASE 2 (Apr – Dec 2027)
              </span>
              <h3 className="mt-2 text-lg font-bold text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Commercial Launch
              </h3>
              <p className="mt-3 text-xs text-[#C0BCB5] leading-relaxed">
                Scale to 25–50 partner stores, launch regional-language design assistance (Telugu, Hindi), integrate regional celebrity endorsements.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-7 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#888888] font-bold">
                3-YEAR STRATEGY (2027–2029)
              </span>
              <h3 className="mt-2 text-lg font-bold text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Distribution Scale
              </h3>
              <p className="mt-3 text-xs text-[#C0BCB5] leading-relaxed">
                100–200 stores across southern and central states, launch 5 proprietary owned collections, establish multi-region artisan workshops.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-7 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#888888] font-bold">
                5-YEAR STRATEGY (2030–2031)
              </span>
              <h3 className="mt-2 text-lg font-bold text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                National Scale
              </h3>
              <p className="mt-3 text-xs text-[#C0BCB5] leading-relaxed">
                250–500 stores, national celebrity ambassador campaigns, and exclusive jewellery design collections across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FIVE CRITICAL DECISION METRICS (PILOT KPIS) */}
      <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              04 // PRE-LAUNCH BENCHMARKS · COMING SOON
            </span>
            <h2
              className="mt-3 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              OUR QUALITY COMMITMENTS.
            </h2>
            <p className="mt-3 text-xs text-[#888888]">
              “The business should not scale until the data demonstrates that retailers and customers benefit.”
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-center">
              <span className="text-2xl font-bold text-[#EBD38D] font-mono">25</span>
              <p className="mt-2 text-xs font-semibold text-white">Custom Orders</p>
              <p className="text-[10px] text-[#888888]">Monthly per store target</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-center">
              <span className="text-2xl font-bold text-[#EBD38D] font-mono">20-25%</span>
              <p className="mt-2 text-xs font-semibold text-white">Design Conversion</p>
              <p className="text-[10px] text-[#888888]">Concept to crafted piece</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-center">
              <span className="text-2xl font-bold text-[#EBD38D] font-mono">≥95%</span>
              <p className="mt-2 text-xs font-semibold text-white">On-Time Handover</p>
              <p className="text-[10px] text-[#888888]">5–10 day cycle</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-center">
              <span className="text-2xl font-bold text-[#EBD38D] font-mono">100%</span>
              <p className="mt-2 text-xs font-semibold text-white">BIS Hallmarked</p>
              <p className="text-[10px] text-[#888888]">With HUID verification</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 text-center col-span-2 md:col-span-1">
              <span className="text-2xl font-bold text-[#EBD38D] font-mono">+ROI</span>
              <p className="mt-2 text-xs font-semibold text-white">Store Profitability</p>
              <p className="text-[10px] text-[#888888]">Positive net contribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 lg:py-28 bg-[#121212] text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/40 mb-4">
            COMING SOON · PRE-LAUNCH ENQUIRY
          </span>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            BE PART OF INDIA'S NEXT GOLD CHAPTER.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] max-w-xl mx-auto">
            Whether you are an independent jewellery retailer, master goldsmith workshop, or customer wanting early access, connect with us on WhatsApp.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => onNavigateHome('contact')}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] px-8 py-4 text-xs font-bold tracking-wider text-[#090909] transition-all hover:shadow-lg hover:shadow-[#C6A15B]/25 active:scale-95"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>CONNECT WITH FOUNDER'S OFFICE · COMING SOON</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
