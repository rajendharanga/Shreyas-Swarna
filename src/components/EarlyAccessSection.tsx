import React from 'react';
import { ArrowDown, Sparkles, Store } from 'lucide-react';

interface EarlyAccessSectionProps {
  onSelectCustomerPath: () => void;
  onSelectPartnerPath: () => void;
}

export const EarlyAccessSection: React.FC<EarlyAccessSectionProps> = ({
  onSelectCustomerPath,
  onSelectPartnerPath,
}) => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · PRE-LAUNCH ACCESS</span>
          </div>
          <h2
            className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            SOMETHING PERSONAL IS TAKING SHAPE.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            “Be among the first to experience SHREYAS SWARNA.AI. Connect with our team to express your interest as a customer or retail partner before launch.”
          </p>
          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * An upcoming initiative in preparation under Shreyas Group.
          </p>
        </div>

        {/* Two Choice Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Path 1: Customer */}
          <div
            onClick={onSelectCustomerPath}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-[#141414] p-8 sm:p-12 transition-all duration-300 hover:border-[#C6A15B]/60 hover:bg-[#181818] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#888888]">
                  PATHWAY 01 // INDIVIDUALS
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                  <Sparkles className="h-5 w-5 text-[#C6A15B]" />
                </div>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                I'M INTERESTED IN JEWELLERY
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                Connect with our team to explore personalised gold concepts, milestone commissions,
                and receive priority notification when our customer platform opens.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold tracking-wider text-white uppercase">
              <span className="group-hover:text-[#EBD38D] transition-colors">EXPLORE CUSTOMER ACCESS</span>
              <ArrowDown className="h-4 w-4 text-[#C6A15B] transition-transform group-hover:translate-y-1" />
            </div>
          </div>

          {/* Path 2: Retailer */}
          <div
            onClick={onSelectPartnerPath}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-[#141414] p-8 sm:p-12 transition-all duration-300 hover:border-[#C6A15B]/60 hover:bg-[#181818] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#888888]">
                  PATHWAY 02 // JEWELLERS
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 text-[#EBD38D] group-hover:bg-[#C6A15B]/20 transition-colors">
                  <Store className="h-5 w-5 text-[#C6A15B]" />
                </div>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                I'M INTERESTED IN PARTNERING
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                Explore becoming an authorized retail showroom or manufacturing partner in our
                expanding network across India.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold tracking-wider text-white uppercase">
              <span className="group-hover:text-[#EBD38D] transition-colors">EXPLORE RETAIL PARTNERSHIP</span>
              <ArrowDown className="h-4 w-4 text-[#C6A15B] transition-transform group-hover:translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
