import React from 'react';

const tickerItems = [
  'COMING SOON · AN UPCOMING VENTURE BY SHREYAS GROUP',
  "INDIA'S PERSONALISED GOLD NETWORK",
  'COMING SOON · PRE-LAUNCH ACCESS',
  '22K SOLID GOLD (BIS HALLMARKED)',
  'YOUR IMAGINATION. YOUR GOLD. YOUR DESIGN.',
  'COMING SOON · PRE-LAUNCH RETAIL PARTNERSHIPS',
  'INDEPENDENT JEWELLERY PARTNERS',
  'COMING SOON · REGISTER FOR EARLY ACCESS',
  'TRADITION MEETS PERSONALISED DESIGN',
  'CERTIFIED MASTER CRAFTSMANSHIP',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-[#0D0D0D] py-3.5">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#090909] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#090909] to-transparent" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-semibold tracking-[0.2em] text-[#A0A0A0]">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className={item.startsWith('COMING SOON') ? 'text-[#EBD38D] font-bold' : 'hover:text-white transition-colors'}>
              {item}
            </span>
            <span className="text-[#C6A15B] text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
