import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import heritageImg from '../assets/images/showcase_heritage_1792384188513.jpg';
import everydayImg from '../assets/images/showcase_everyday_1792384189928.jpg';
import signatureImg from '../assets/images/showcase_signature_1792384190500.jpg';
import heroImg from '../assets/images/hero_gold_sculptural_1792384188159.jpg';
import retailCraftImg from '../assets/images/retail_craft_partner_1792384190315.jpg';

interface CollectionsSectionProps {
  onSelectCollection: (name: string) => void;
}

const collections = [
  {
    id: 'heritage',
    title: 'Shreyas Heritage Collection',
    tagline: 'Regional Craftsmanship & Temple Motifs',
    description:
      'Masterpieces rooted in timeless Indian goldsmithing traditions—reinterpreting intricate nakshi repoussé, antique temple jali, and sacred temple iconography into modern wearable weight classes.',
    highlight: '22K Solid Gold · Traditional Nakshi & Filigree',
    image: heritageImg,
  },
  {
    id: 'signature',
    title: 'Shreyas Signature Collection',
    tagline: 'Contemporary Lightweight Fine Gold',
    description:
      'Refined, lightweight-inspired personal gold jewellery crafted for daily elegance, modern celebrations, and effortless layering. Designed to make pure gold a companion for daily living.',
    highlight: '18K & 22K Solid Gold · Satin & High Mirror Polish',
    image: everydayImg,
  },
  {
    id: 'wedding',
    title: 'Shreyas Wedding Collection',
    tagline: 'Customisable Bridal & Heirloom Ensembles',
    description:
      'Bridal choker sets, harams, and vanki pieces co-designed with brides to seamlessly complement wedding silks, personal silhouettes, and auspicious family traditions without catalogue compromises.',
    highlight: '22K BIS Hallmarked · Custom Gram Weight Feasibility',
    image: heroImg,
  },
  {
    id: 'legacy',
    title: 'Shreyas Legacy Collection',
    tagline: '“Your Mother’s Gold. Your Daughter’s Design.”',
    description:
      'A deeply emotional proposition: transforming inherited, unworn family gold into fresh contemporary designs while preserving the sacred emotional value and metal memories for the next generation.',
    highlight: 'Gold Exchange & Redesign Protocol · 100% Certified Purity',
    image: signatureImg,
  },
  {
    id: 'celebrity',
    title: 'Shreyas Celebrity Collection',
    tagline: 'Exclusively Licensed Icon Ensembles',
    description:
      'Celebrity-associated and film-industry inspired signature motifs, leveraging Shreyas Group’s unmatched entertainment pedigree and cultural star power across regional and national media.',
    highlight: 'Exclusive Design IP · Limited Authorized Retail Drops',
    image: retailCraftImg,
  },
];

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · CURATED SIGNATURE COLLECTIONS</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            FIVE EXCLUSIVE CURATED COLLECTIONS.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            “Jewellery crafted to celebrate heritage and personal expression.”
            Explore our upcoming signature design families, created exclusively for our authorized retail network.
          </p>

          <p className="mt-2 text-xs text-[#EBD38D] font-mono">
            * Upcoming design collections in preparation under Shreyas Group.
          </p>
        </div>

        {/* 5 Collections Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((coll, idx) => (
            <div
              key={coll.id}
              className={`group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] overflow-hidden transition-all duration-300 hover:border-[#C6A15B]/50 hover:bg-[#161616] shadow-xl ${
                idx === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090909]">
                <img
                  src={coll.image}
                  alt={coll.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-[#141414]/90 px-3 py-1.5 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#EBD38D]">
                  COLLECTION 0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-[#C6A15B]">
                  {coll.highlight}
                </div>
              </div>

              <div className="p-7 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#888888] font-mono block">
                    {coll.tagline}
                  </span>
                  <h3
                    className="mt-2 text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#EBD38D] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {coll.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#C0BCB5] leading-relaxed">
                    {coll.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCollection(coll.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white hover:text-[#C6A15B] transition-colors uppercase"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <span>CUSTOMISE THIS COLLECTION</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#C6A15B]" />
                  </button>

                  <span className="text-[10px] font-mono text-[#888888]">Owned IP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
