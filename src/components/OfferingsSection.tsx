import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heritageImg from '../assets/images/showcase_heritage_1792384188513.jpg';
import signatureImg from '../assets/images/showcase_signature_1792384190500.jpg';
import retailCraftImg from '../assets/images/retail_craft_partner_1792384190315.jpg';

interface OfferingsSectionProps {
  onExploreVision: () => void;
  onGetEarlyAccess: () => void;
  onBecomePartner: () => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({
  onExploreVision,
  onGetEarlyAccess,
  onBecomePartner,
}) => {
  return (
    <section id="offerings" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <span className="h-2 w-2 rounded-full bg-[#C6A15B] animate-pulse" />
            <span>COMING SOON · WHAT WE ARE PREPARING</span>
          </div>
          <h2
            className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            A MORE PERSONAL WAY TO EXPERIENCE GOLD.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            Upcoming avenues designed to connect personal imagination with artisanal excellence.
          </p>
          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Proposed venture in pre-launch preparation. Coming soon.
          </p>
        </div>

        {/* 3 Large Framer Bento Blocks */}
        <div className="space-y-12 lg:space-y-16">
          {/* BLOCK 01 — DESIGN YOUR GOLD */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#181818]">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#090909] border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src={heritageImg}
                alt="Traditional temple gold pendant with contemporary jali work on ivory marble"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-[#121212]/80 px-3 py-1.5 backdrop-blur-md text-xs font-mono tracking-wider text-[#EBD38D]">
                BLOCK 01
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888]">Concept Phase</span>
                <h3
                  className="mt-2 text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DESIGN YOUR GOLD
                </h3>
                <p className="mt-6 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
                  “Have an idea in mind? Explore jewellery designs inspired by your taste, traditions
                  and imagination.”
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <button
                  onClick={onExploreVision}
                  className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-[#E8E4DC] hover:border-[#C6A15B] hover:text-[#EBD38D] transition-all uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>EXPLORE THE VISION</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#C6A15B]" />
                </button>
              </div>
            </div>
          </div>

          {/* BLOCK 02 — YOUR STORY, YOUR STYLE */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#181818]">
            <div className="lg:col-span-6 order-2 lg:order-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888]">Bespoke Milestones</span>
                <h3
                  className="mt-2 text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  YOUR STORY, YOUR STYLE
                </h3>
                <p className="mt-6 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
                  “From meaningful gifts to special celebrations, discover designs that reflect the
                  moments and people that matter to you.”
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <button
                  onClick={onGetEarlyAccess}
                  className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-[#E8E4DC] hover:border-[#C6A15B] hover:text-[#EBD38D] transition-all uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>GET EARLY ACCESS</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#C6A15B]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#090909] border-b lg:border-b-0 lg:border-l border-white/10">
              <img
                src={signatureImg}
                alt="Personalized bespoke milestone gold ring and fluid cuff"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-[#121212]/80 px-3 py-1.5 backdrop-blur-md text-xs font-mono tracking-wider text-[#EBD38D]">
                BLOCK 02
              </div>
            </div>
          </div>

          {/* BLOCK 03 — FOR JEWELLERY STORES */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#181818]">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#090909] border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src={retailCraftImg}
                alt="Jewellery showroom and master goldsmith workbench"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-[#121212]/80 px-3 py-1.5 backdrop-blur-md text-xs font-mono tracking-wider text-[#EBD38D]">
                BLOCK 03
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#888888]">Retail Network</span>
                <h3
                  className="mt-2 text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  FOR JEWELLERY STORES
                </h3>
                <p className="mt-6 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
                  “Bring a fresh jewellery experience to your customers. Join us as we build a
                  new network of jewellery partners.”
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <button
                  onClick={onBecomePartner}
                  className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-[#E8E4DC] hover:border-[#C6A15B] hover:text-[#EBD38D] transition-all uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>BECOME A PARTNER</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#C6A15B]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Note on upcoming availability */}
        <p className="mt-12 text-xs text-[#888888] text-center">
          * These offerings reflect upcoming services in preparation. Offerings are subject to technical verification and phased partner rollout.
        </p>
      </div>
    </section>
  );
};
