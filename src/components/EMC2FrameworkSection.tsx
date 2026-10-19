import React from 'react';
import { Sparkles, Tv, Clapperboard, Star } from 'lucide-react';

export const EMC2FrameworkSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · THE SHREYAS GROUP ADVANTAGE</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            OUR CORE PHILOSOPHY.
            <span className="block gold-gradient-text">EXPERIENCE · MEDIA · CONTENT · CELEBRATION.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            This upcoming jewellery venture unites Shreyas Group’s media reach, creative storytelling, and cultural connection to create a memorable customer journey.
          </p>
          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Proposed venture in pre-launch preparation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Experience */}
          <div className="rounded-3xl border border-[#C6A15B]/30 bg-[#161410] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-2xl font-mono font-bold text-[#EBD38D]">E</span>
                <Sparkles className="h-5 w-5 text-[#C6A15B]" />
              </div>
              <h3
                className="text-xl font-bold uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Experience
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
                Give customers an active role in creating their own gold jewellery rather than merely selecting static counter pieces. The bespoke design studio becomes a compelling reason to visit the showroom.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#EBD38D]">
              In-Store Co-Creation
            </div>
          </div>

          {/* Card 2: Media */}
          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-2xl font-mono font-bold text-white">M</span>
                <Tv className="h-5 w-5 text-[#C6A15B]" />
              </div>
              <h3
                className="text-xl font-bold uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Media
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
                Regional television, digital marketing, state-wide social channels, and outdoor advertising executed centrally under Shreyas Group’s media network.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#888888]">
              Centralized Marketing
            </div>
          </div>

          {/* Card 3: Content */}
          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-2xl font-mono font-bold text-white">C</span>
                <Clapperboard className="h-5 w-5 text-[#C6A15B]" />
              </div>
              <h3
                className="text-xl font-bold uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Content
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
                Deep emotional campaigns: “Your Mother's Gold. Your Daughter's Design.” Celebrating wedding blessings, personal milestones, and the redesign of inherited gold across generations.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#888888]">
              Emotional Storytelling
            </div>
          </div>

          {/* Card 4: Celebrities */}
          <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-2xl font-mono font-bold text-white">C²</span>
                <Star className="h-5 w-5 text-[#C6A15B]" />
              </div>
              <h3
                className="text-xl font-bold uppercase text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Celebrities
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C0BCB5] leading-relaxed">
                Leveraging Shreyas Group’s unmatched access to South Indian and national cinema icons, regional brand ambassadors, and culturally resonant launch campaigns to drive store footfalls.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#888888]">
              Star Power Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
