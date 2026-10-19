import React from 'react';
import {
  Sparkles,
  Award,
  Film,
  Building2,
  Heart,
  Target,
  Send,
  Zap,
  Coffee,
  Building,
  Tv,
  Clapperboard,
  HandsHeart,
  Ticket,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface EcosystemItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  {
    id: 'shreyas-media',
    name: 'SHREYAS MEDIA',
    description: 'Movie Promotions & Entertainment Events',
    category: 'ENTERTAINMENT',
    icon: Sparkles,
  },
  {
    id: 'wassap-media',
    name: 'WASSAP MEDIA',
    description: 'Digital Media & Content Platforms',
    category: 'DIGITAL MEDIA',
    icon: Tv,
  },
  {
    id: 'shreyas-corporate-club',
    name: 'SHREYAS CORPORATE CLUB',
    description: 'Corporate Events & Engagement Platforms',
    category: 'CORPORATE',
    icon: Building2,
  },
  {
    id: 'shreyas-utsav',
    name: 'SHREYAS UTSAV',
    description: 'Wedding & Social Events',
    category: 'SOCIAL CELEBRATIONS',
    icon: Target,
  },
  {
    id: 'brande',
    name: 'BRANDE',
    description: 'Brand Consulting & Marketing Solutions',
    category: 'STRATEGY',
    icon: Send,
  },
  {
    id: 'brochill',
    name: 'BROCHILL',
    description: 'Digital Entertainment & Youth Content Platform',
    category: 'TECH & YOUTH',
    icon: Zap,
  },
  {
    id: 'deccan-chai',
    name: 'DECCAN CHAI FEEELINGS INDIA',
    description: 'Food & Beverage Brand',
    category: 'F&B',
    icon: Coffee,
  },
  {
    id: 'shreyas-future-city',
    name: 'SHREYAS FUTURE CITY DEVELOPERS / SHREYAS ONE CITY',
    description: 'Shreyas Realty & Landmark Communities',
    category: 'REALTY',
    icon: Building,
  },
  {
    id: 'shreyas-one',
    name: 'SHREYAS ONE',
    description: 'OOH Advertising & Mega Billboard Formats',
    category: 'OUTDOOR MEDIA',
    icon: Tv,
  },
  {
    id: 'good-cinema-group',
    name: 'GOOD CINEMA GROUP',
    description: 'Film Production & Content Creation',
    category: 'PRODUCTION',
    icon: Clapperboard,
  },
  {
    id: 'shreyas-impact-foundation',
    name: 'SHREYAS IMPACT FOUNDATION',
    description: 'CSR / Social Cause Initiatives across India',
    category: 'CSR / CAUSE',
    icon: Heart,
  },
  {
    id: 'shreyas-experiences',
    name: 'SHREYAS EXPERIENCES (IPS)',
    description:
      'Shreyas Live FilmySense, Khumbamela, Vijayawada Utsav, Visakha Utsav, Athreyapuram Utsav',
    category: 'MEGA EXPERIENCES',
    icon: Ticket,
  },
];

interface ShreyasGroupSectionProps {
  onContactClick?: () => void;
  isStandalonePage?: boolean;
}

export const ShreyasGroupSection: React.FC<ShreyasGroupSectionProps> = ({
  onContactClick,
  isStandalonePage = false,
}) => {
  return (
    <section
      id="shreyas-group"
      className={`relative ${
        isStandalonePage ? 'py-16 lg:py-24' : 'py-24 lg:py-36'
      } bg-[#F7F5F0] text-[#111111] overflow-hidden border-b border-[#E8E4DC]`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* ========================================================= */}
        {/* PART 1: THE SHREYAS LEGACY (FOUNDER CARD & LEADERSHIP)   */}
        {/* ========================================================= */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-6 rounded-full bg-[#C6A15B]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
              FOUNDER & CHAIRMAN · SHREYAS GROUP
            </span>
          </div>

          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0D1829]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE SHREYAS LEGACY
          </h2>

          <p className="mt-2 text-base sm:text-xl text-[#555555] max-w-2xl font-normal">
            A legacy of scale, trust, and multi-industry excellence across India and beyond.
          </p>
        </div>

        {/* Founder Card: Left Image + Right Story & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          {/* Founder Executive Picture */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-[#0E1524] shadow-2xl border-4 border-white">
              <img
                src="https://shreyasonecity.com/assets/36-BAa2tv36.png"
                alt="Gandra Srinivas Rao - Founder & Chairman, Shreyas Group"
                className="w-full h-auto object-cover object-top transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Founder Info & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3
                className="text-4xl sm:text-6xl font-black uppercase text-[#0D1829] leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>GANDRA</span>
                <span className="block text-[#C6A15B] mt-1">SRINIVAS RAO</span>
              </h3>
              <p className="mt-3 text-base sm:text-lg font-bold tracking-wider uppercase text-[#777777]">
                Founder & Chairman
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E4DC] bg-white p-6 sm:p-8 shadow-sm">
              <blockquote className="text-base sm:text-lg text-[#333333] leading-relaxed italic">
                “At Shreyas Group, our journey has always been guided by trust, vision, and
                excellence. Backed by over two decades of entrepreneurial leadership, Shreyas Swarna
                embodies our commitment to thoughtful planning, premium quality, and building an
                enduring brand that stands the test of time.”
              </blockquote>
            </div>

            {/* Shreyas Group Logo Display */}
            <div className="flex items-center justify-between pt-2">
              <div className="inline-block p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm">
                <img
                  src="https://shreyasonecity.com/assets/62-Czd0lff6.png"
                  alt="Shreyas Group - Exploring Infinity"
                  className="h-12 sm:h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0D1829] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#C6A15B] hover:text-[#090909] transition-all"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>CONNECT WITH LEADERSHIP</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navy / Dark Blue Metrics Banner (Exact Match to User Image 1) */}
        <div className="rounded-3xl bg-[#091529] p-8 sm:p-12 text-white shadow-2xl mb-24 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div
                className="text-4xl sm:text-6xl font-black text-[#EBD38D] font-mono tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                5000+
              </div>
              <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B0BCCC]">
                EVENTS EXECUTED
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div
                className="text-4xl sm:text-6xl font-black text-[#EBD38D] font-mono tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                2600+
              </div>
              <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B0BCCC]">
                MOVIE PROMOTIONAL CAMPAIGNS
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div
                className="text-4xl sm:text-6xl font-black text-[#EBD38D] font-mono tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                100B+
              </div>
              <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B0BCCC]">
                DIGITAL REACH GENERATED
              </p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div
                className="text-4xl sm:text-6xl font-black text-[#EBD38D] font-mono tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                10B+
              </div>
              <p className="mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#B0BCCC] leading-snug">
                AUDIENCE FOOTFALL ACROSS EXPERIENCES MULTI-CITY &amp; GLOBAL ENGAGEMENT PRESENCE
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: SHREYAS ECOSYSTEM (12 ENTITIES MATCHING IMAGE 2)  */}
        {/* ========================================================= */}
        <div className="rounded-[2.5rem] border border-[#E8E4DC] bg-white p-8 sm:p-14 lg:p-16 shadow-xl">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-2">
              DIVERSIFIED GROUP HOLDINGS
            </span>
            <div className="inline-block pb-3 border-b-2 border-[#C6A15B]">
              <h3
                className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0D1829]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SHREYAS ECOSYSTEM
              </h3>
            </div>
            <p className="mt-4 text-base text-[#666666] max-w-2xl">
              Powering India&apos;s entertainment, media, realty, culture, technology, and luxury
              lifestyle ventures for over twenty years.
            </p>
          </div>

          {/* 12 Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group flex items-start gap-4 rounded-2xl border border-[#EBE7DF] bg-[#FAF8F5] p-6 transition-all duration-300 hover:border-[#C6A15B] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8E4DC] bg-white text-[#C6A15B] shadow-sm group-hover:bg-[#C6A15B] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-mono uppercase text-[#A9894A] font-bold tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4
                      className="text-base font-bold uppercase tracking-tight text-[#0D1829] group-hover:text-[#C6A15B] transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Callout inside Ecosystem Container */}
          <div className="mt-12 pt-8 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/15 text-[#A9894A] border border-[#C6A15B]/30">
                COMING SOON
              </span>
              <p className="text-xs text-[#555555] font-medium">
                SHREYAS SWARNA.AI is the latest consumer luxury initiative by Shreyas Group.
              </p>
            </div>

            {onContactClick && (
              <button
                onClick={onContactClick}
                className="text-xs font-bold uppercase tracking-wider text-[#0D1829] hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>PARTNER WITH SHREYAS GROUP</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
