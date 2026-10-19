import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import everydayImg from '../assets/images/showcase_everyday_1792384189928.jpg';

interface IntroSectionProps {
  onDiscoverStory: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="vision" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Huge Editorial Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
              <span>COMING SOON · THE VISION</span>
            </div>

            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.0]"
              style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
            >
              GOLD, MADE PERSONAL.
            </h2>

            <p className="mt-8 text-lg sm:text-xl font-normal leading-relaxed text-[#C0BCB5] max-w-2xl">
              “Some designs remind us of our roots. Some celebrate a special moment. Some tell
              a story only we understand. We're creating a new way to bring those ideas to life
              through personal jewellery design and trusted craftsmanship.”
            </p>

            <p className="mt-2 text-xs text-[#EBD38D] font-mono">
              * Upcoming venture in pre-launch preparation under Shreyas Group.
            </p>

            <div className="mt-10">
              <button
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-2 rounded-xl border border-[#C6A15B]/30 bg-[#161410] px-6 py-3.5 text-xs font-bold tracking-wider text-[#EBD38D] transition-all duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#090909]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Framer Glass Container with Jewelry Visual */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#090909]">
                <img
                  src={everydayImg}
                  alt="Refined everyday gold circular pendant and geometric bangle on linen"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#A0A0A0]">
                  <span className="text-white font-medium">Bespoke Everyday Collection</span>
                  <span className="font-mono text-[#C6A15B]">18K & 22K Solid Gold</span>
                </div>
              </div>

              <div className="p-4 text-xs text-[#888888] flex items-center justify-between">
                <span>Bridging heritage nakshi with contemporary life</span>
                <span className="text-[#C6A15B] font-mono">01 // VISION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
