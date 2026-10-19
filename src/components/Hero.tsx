import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_gold_sculptural_1792384188159.jpg';

interface HeroProps {
  onExploreVision: () => void;
  onGetEarlyAccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVision, onGetEarlyAccess }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Ambient Radial Golden Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-gradient-to-b from-[#C6A15B]/15 via-[#C6A15B]/5 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-[#EBD38D]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Top Floating Pill Badge - Highlighting COMING SOON */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-4 py-1.5 text-xs font-medium text-[#EBD38D] backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#C6A15B] animate-pulse" />
            <span className="tracking-[0.2em] uppercase text-[11px] font-semibold text-[#EBD38D]">
              COMING SOON · AN UPCOMING SHREYAS GROUP VENTURE
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A0A0A0] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span className="text-[#EBD38D]">COMING SOON</span>
            <span className="text-[#888888]">·</span>
            <span className="text-[#A0A0A0] font-normal">PRE-LAUNCH PREVIEW</span>
          </div>
        </div>

        {/* Hero Bento Layout */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headlines & Actions */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold uppercase leading-[0.93] tracking-[-0.04em] text-white"
                style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
              >
                <span className="block">YOUR IMAGINATION.</span>
                <span className="block text-[#E8E4DC]">YOUR GOLD.</span>
                <span className="block gold-gradient-text drop-shadow-[0_4px_24px_rgba(198,161,91,0.25)]">
                  YOUR DESIGN.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg sm:text-xl font-normal leading-relaxed text-[#C0BCB5]">
                “Jewellery should feel like you. Discover a new way to imagine gold designs
                inspired by your style, your traditions and your story.”
              </p>

              <p className="mt-3 text-xs text-[#EBD38D] font-medium tracking-wide">
                * An upcoming venture in preparation under Shreyas Group. Coming soon.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onGetEarlyAccess}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] px-8 py-4 text-xs font-bold tracking-wider text-[#090909] shadow-lg shadow-[#C6A15B]/20 transition-all duration-300 hover:shadow-[#C6A15B]/35 hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>GET EARLY ACCESS (COMING SOON)</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreVision}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#161616]/80 px-7 py-4 text-xs font-semibold tracking-wider text-[#E8E4DC] backdrop-blur-md transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#1E1E1E] hover:text-white active:scale-[0.98]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>EXPLORE OUR VISION</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 text-[#C6A15B]" />
              </button>
            </div>

            {/* Trust Matrix Strip */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888888]">Craft & Purity</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-white">22K BIS Hallmarked</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888888]">Personalisation</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-white">Bespoke Design Concepting</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888888]">Local Trust</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-white">Independent Jewelers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Gold Visual in Rounded Framer Bento */}
          <div className="relative lg:col-span-5 flex flex-col">
            <div className="group relative h-full min-h-[460px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
              <img
                src={heroImage}
                alt="Sculptural Indian 22k gold necklace crafted with filigree textures on dark stone"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Gradient scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-[#090909]/20 to-transparent pointer-events-none" />

              {/* Floating Framer Badge Top-Right */}
              <div className="absolute top-4 right-4 rounded-xl border border-white/10 bg-[#121212]/80 px-3 py-1.5 backdrop-blur-md text-[10px] tracking-widest text-[#EBD38D] font-mono">
                COMING SOON · 22K SOLID GOLD
              </div>

              {/* Floating Glass Caption Bottom */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#121212]/85 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs text-[#A0A0A0] mb-1.5">
                  <span className="uppercase tracking-widest text-[11px] font-semibold text-white">
                    Sculptural Temple Choker
                  </span>
                  <span className="font-mono text-[#C6A15B] text-xs font-semibold">
                    BIS 916 Pure Gold
                  </span>
                </div>
                <p className="text-xs text-[#B8B4AC] leading-relaxed">
                  Bespoke conceptual form reinterpreting temple jali geometry with lightweight modern ergonomics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
