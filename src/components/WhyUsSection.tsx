import React from 'react';
import { Heart, Shield, Sparkles } from 'lucide-react';

const benefits = [
  {
    number: '01',
    title: 'MADE AROUND YOU',
    copy: '“Your taste. Your traditions. Your story.”',
    detail: 'Designed around your individual milestones, celebrations, and personal aesthetic rather than standard mass-production runs.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'ROOTED IN TRUST',
    copy: '“Bringing modern ideas together with experienced jewellery craftsmanship.”',
    detail: 'Partnering with respected independent jewellers who bring generations of goldsmithing mastery and certified hallmarked purity.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'A NEW WAY TO DISCOVER',
    copy: '“Making the journey from an idea to a personal design more engaging.”',
    detail: 'Empowering you to visualise, iterate and fall in love with your jewellery before it is physically crafted.',
    icon: Sparkles,
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · THE DIFFERENCE</span>
          </div>
          <h2
            className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            MORE THAN A JEWELLERY DESIGN.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            A meaningful union of personal sentiment, timeless gold, and trusted local jewellers.
          </p>
          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * An upcoming initiative in preparation under Shreyas Group.
          </p>
        </div>

        {/* 3 Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.number}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141414] p-8 lg:p-10 transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#181818] shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="text-sm font-mono font-bold text-[#C6A15B]">
                      {benefit.number}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-base font-medium text-[#EBD38D] leading-relaxed">
                    {benefit.copy}
                  </p>

                  <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#888888]">
                  PRINCIPLE {benefit.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
