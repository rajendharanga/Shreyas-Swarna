import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import heritageImg from '../assets/images/showcase_heritage_1792384188513.jpg';
import everydayImg from '../assets/images/showcase_everyday_1792384189928.jpg';
import signatureImg from '../assets/images/showcase_signature_1792384190500.jpg';
import heroImg from '../assets/images/hero_gold_sculptural_1792384188159.jpg';

interface ConceptStudioProps {
  onSelectConcept: (conceptName: string) => void;
}

interface ConceptItem {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  karat: string;
  finish: string;
  motifs: string;
  customerStory: string;
  estimatedWeight: string;
}

const concepts: ConceptItem[] = [
  {
    id: 'heritage',
    name: 'Temple Jali & Nakshi Medallion',
    category: 'Heritage Reimagined',
    image: heritageImg,
    alt: 'Heritage reimagined Indian gold pendant with temple jali motifs and emerald drop',
    karat: '22K Solid Gold (91.6% BIS Hallmarked)',
    finish: 'Antique Chased & High Polish',
    motifs: 'Temple Filigree, Floral Nakshi, Emerald Drop',
    customerStory:
      '“A medallion honoring traditional temple lattice work, reimagined in a lightweight circular frame suitable for celebrations and festive wear.”',
    estimatedWeight: '32 – 38 grams',
  },
  {
    id: 'everyday',
    name: 'Minimalist Fluid Pendant & Bangle',
    category: 'Everyday Gold',
    image: everydayImg,
    alt: 'Refined lightweight everyday gold circular pendant and geometric gold bangle',
    karat: '18K / 22K Solid Gold',
    finish: 'Satin Brushed with Polished Rim',
    motifs: 'Ergonomic Curves, Geometric Balance',
    customerStory:
      '“An organic, tactile gold circle on a delicate link chain, paired with a geometric six-sided slip-on bangle for everyday elegance.”',
    estimatedWeight: '16 – 22 grams',
  },
  {
    id: 'signature',
    name: 'Milestone Signet & Fluid Cuff',
    category: 'Your Signature',
    image: signatureImg,
    alt: 'Artisanal personalized gold signet ring and milestone engraved fluid gold cuff',
    karat: '22K Solid Gold',
    finish: 'Hammered Matte with Micro-Engraving',
    motifs: 'Family Tree Crest, Milestone Dates, Coordinates',
    customerStory:
      '“A bespoke heirloom ring engraved with family lineage and an open architectural gold cuff bearing wedding anniversary coordinates.”',
    estimatedWeight: '28 – 34 grams',
  },
  {
    id: 'sculptural',
    name: 'Sculptural Ergonomic Choker',
    category: 'Contemporary Statement',
    image: heroImg,
    alt: 'Sculptural 22k gold choker with intricate Indian nakshi craftsmanship',
    karat: '22K Pure Hallmarked Gold',
    finish: 'Granulation & Segmented Hinges',
    motifs: 'Interlocking Gold Arcs, Repoussé Detailing',
    customerStory:
      '“A dramatic neckpiece that hugs the collarbone seamlessly, combining antique temple repoussé motifs with modern comfortable wearability.”',
    estimatedWeight: '55 – 65 grams',
  },
];

export const ConceptStudio: React.FC<ConceptStudioProps> = ({ onSelectConcept }) => {
  const [activeId, setActiveId] = useState('heritage');
  const active = concepts.find((c) => c.id === activeId) || concepts[0];

  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
              <span>COMING SOON · BESPOKE DESIGN PREVIEW</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
            >
              HOW IMAGINATION TURNS INTO GOLD.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
              Explore how personal memories, celebrations, and traditions translate into timeless gold creations.
              Select a design to preview its craftsmanship details.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl border border-white/10 bg-[#141414]">
            {concepts.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeId === item.id
                    ? 'bg-gradient-to-r from-[#EBD38D] to-[#C6A15B] text-[#090909] shadow-md'
                    : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Showcase Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-white/10 bg-[#121212] p-6 lg:p-10 shadow-2xl">
          {/* Left Column: Visual Preview */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl border border-white/10 bg-[#090909] min-h-[380px]">
            <img
              src={active.image}
              alt={active.alt}
              className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-[#141414]/90 px-3 py-1.5 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#EBD38D]">
              COMING SOON // {active.id.toUpperCase()}
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#141414]/90 p-4 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-[#888888] block">Customer Story & Inspiration</span>
              <p className="mt-1 text-xs text-[#E8E4DC] italic leading-relaxed">
                {active.customerStory}
              </p>
            </div>
          </div>

          {/* Right Column: Craftsmanship & Purity Details */}
          <div className="lg:col-span-6 flex flex-col justify-between p-2 lg:p-4">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                  {active.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/30 bg-[#1B1914] px-3 py-1 text-[11px] font-mono text-[#EBD38D]">
                  <ShieldCheck className="h-3 w-3 text-[#C6A15B]" />
                  <span>100% BIS HALLMARKED</span>
                </span>
              </div>

              <h3
                className="mt-5 text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {active.name}
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#181818]">
                  <span className="text-xs uppercase tracking-wider text-[#888888]">Gold Purity</span>
                  <span className="text-sm font-semibold text-white">{active.karat}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#181818]">
                  <span className="text-xs uppercase tracking-wider text-[#888888]">Goldsmith Finish</span>
                  <span className="text-sm font-semibold text-white">{active.finish}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#181818]">
                  <span className="text-xs uppercase tracking-wider text-[#888888]">Traditional Motifs</span>
                  <span className="text-sm font-semibold text-white">{active.motifs}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#181818]">
                  <span className="text-xs uppercase tracking-wider text-[#888888]">Approx. Gold Weight</span>
                  <span className="text-sm font-mono text-[#C6A15B] font-semibold">{active.estimatedWeight}</span>
                </div>
              </div>
            </div>

            {/* Inquire on WhatsApp CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                onClick={() => onSelectConcept(active.name)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] to-[#C6A15B] px-6 py-3.5 text-xs font-bold tracking-wider text-[#090909] transition-all duration-200 hover:shadow-lg hover:shadow-[#C6A15B]/20 active:scale-95"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>EXPLORE THIS DESIGN IN ENQUIRY</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-[11px] text-[#888888] text-center sm:text-right">
                Coming Soon · Register pre-launch interest
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
