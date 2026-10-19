import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Eye,
  Store,
  ChevronRight,
  Maximize2,
  Cpu,
  Gem,
  Award,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import heroImg from '../assets/images/hero_gold_sculptural_1792384188159.jpg';
import retailImg from '../assets/images/retail_craft_partner_1792384190315.jpg';

interface NetworkMode {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  metricLabel: string;
  metricValue: string;
  tag: string;
}

const NETWORK_MODES: NetworkMode[] = [
  {
    id: 'ai-studio',
    badge: 'PILLAR 01 · CLIENT EXPERIENCE',
    title: 'IN-STORE AI DESIGN STUDIO',
    subtitle: 'Conversational & Visual Co-Creation on Showroom Displays',
    description:
      'Customers describe an idea, upload a family heirloom sketch, or select traditional motifs. Our intelligent design engine generates high-definition, photorealistic 22K gold design concepts in seconds tailored to exact weight preferences.',
    details: [
      'Prompt, voice & sketch-to-gold rendering',
      'Instant customization of grams, karats & dimensions',
      'Culturally authentic Indian temple, modern & antique motifs',
      'Export ready for 3D structural casting',
    ],
    image: heroImg,
    metricLabel: 'Design Generation',
    metricValue: '< 15 Seconds',
    tag: 'Showroom Touchscreen Kiosk',
  },
  {
    id: 'virtual-tryon',
    badge: 'PILLAR 02 · REAL-TIME FITTING',
    title: 'INSTANT 3D CAD & VIRTUAL TRY-ON',
    subtitle: 'True-to-Scale Augmented Reality on Neck, Wrist & Hands',
    description:
      'Before a single gram of gold is cast, customers preview the piece in augmented reality with precise scale, drape, and reflections under natural showroom lighting.',
    details: [
      'Millimeter-accurate proportion calibration',
      'Real-time light bounce simulation on 22K yellow gold',
      'Automated CAD blueprint generation for casting houses',
      'Zero showroom inventory holding risk',
    ],
    image: retailImg,
    metricLabel: 'Customer Conversion',
    metricValue: '4.2x Industry Avg',
    tag: 'Zero Inventory Risk',
  },
  {
    id: 'master-goldsmith',
    badge: 'PILLAR 03 · ARTISAN PRECISION',
    title: 'MASTER GOLDSMITH CRAFTSMANSHIP',
    subtitle: 'Bridging Advanced AI Blueprints with Multi-Generational Karigars',
    description:
      'Every AI-generated concept is reviewed by master jewellery engineers for tensile strength, clasp durability, and stone setting before being handcrafted by seasoned Indian artisans.',
    details: [
      'Strict manufacturing feasibility verification',
      'Hand-finished by verified goldsmith clusters in Telangana & AP',
      'Preserves ancestral karigar traditions while increasing their income',
      'Turnaround in 5–10 business days',
    ],
    image: heroImg,
    metricLabel: 'On-Time Handover',
    metricValue: '≥ 95% Rate',
    tag: 'Verified Karigar Network',
  },
  {
    id: 'hallmarking',
    badge: 'PILLAR 04 · GOVERNMENT COMPLIANCE',
    title: '100% BIS HALLMARKED WITH HUID',
    subtitle: 'Certified Purity, Complete Transparency & Trusted Delivery',
    description:
      'Every completed jewellery piece undergoes rigorous assay testing and receives a government-certified BIS Hallmarked HUID laser stamp, guaranteeing 91.6% pure 22K solid gold with transparent buyback assurance.',
    details: [
      'Laser-etched 6-digit unique HUID hallmark',
      'Assay testing report delivered on customer smartphone',
      'Exchange mother’s old unworn gold for new bespoke heirlooms',
      'Full lifecycle certification in partner store',
    ],
    image: retailImg,
    metricLabel: 'Purity Standard',
    metricValue: '22K (916 BIS)',
    tag: 'Government Certified',
  },
];

interface NetworkHeroSectionProps {
  onExploreVision?: () => void;
  onPartnerClick?: () => void;
}

export const NetworkHeroSection: React.FC<NetworkHeroSectionProps> = ({
  onExploreVision,
  onPartnerClick,
}) => {
  const [activeTab, setActiveTab] = useState<string>('ai-studio');
  const activeMode = NETWORK_MODES.find((m) => m.id === activeTab) || NETWORK_MODES[0];

  return (
    <section
      id="network-vision"
      className="relative py-24 lg:py-36 border-y border-[#C6A15B]/30 bg-[#070707] text-[#F5F2EB] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#C6A15B]/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-48 right-10 h-[400px] w-[400px] rounded-full bg-[#C6A15B]/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Eyebrow & Main Big Bold Headline */}
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#161410] px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-[#EBD38D] font-bold shadow-lg mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · THE FLAGSHIP PLATFORM</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-white leading-[0.93]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            <span>INDIA&apos;S NEXT-GENERATION</span>
            <span className="block gold-gradient-text mt-2 sm:mt-3">
              AI-POWERED GOLD JEWELLERY
            </span>
            <span className="block text-white/95 mt-2 sm:mt-3">RETAIL NETWORK.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-[#C0BCB5] font-light max-w-3xl mx-auto leading-relaxed">
            Uniting artificial intelligence, trusted independent jewellers, and master goldsmiths
            to turn every Indian family’s imagination into hallmarked 22K gold heirlooms.
          </p>

          {/* Quick Pillar Navigation Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {NETWORK_MODES.map((mode, idx) => {
              const isSelected = mode.id === activeTab;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] text-[#090909] shadow-lg shadow-[#C6A15B]/25 scale-105'
                      : 'border border-white/10 bg-[#121212] text-[#A0A0A0] hover:border-[#C6A15B]/40 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="font-mono text-[10px] opacity-75">0{idx + 1}</span>
                  <span>{mode.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Big Bold Interactive Showcase Bento Box */}
        <div className="rounded-3xl border border-[#C6A15B]/40 bg-[#111111] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #C6A15B 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Deep Feature Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/40">
                  {activeMode.badge}
                </span>
                <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                  {activeMode.tag}
                </span>
              </div>

              <h3
                className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {activeMode.title}
              </h3>

              <h4 className="text-base sm:text-lg font-semibold text-[#EBD38D]">
                {activeMode.subtitle}
              </h4>

              <p className="text-sm sm:text-base text-[#C0BCB5] leading-relaxed">
                {activeMode.description}
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeMode.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-[#161616] p-3.5 text-xs text-[#E0DDD5]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Metric & CTA Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="block text-[11px] font-mono uppercase text-[#888888] tracking-wider">
                    {activeMode.metricLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#EBD38D] font-mono">
                    {activeMode.metricValue}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onPartnerClick}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#090909] shadow-md hover:scale-105 active:scale-95 transition-all"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <span>JOIN AS RETAIL PARTNER</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Rich Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/15 bg-[#181818] p-3.5 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl bg-[#090909] relative">
                  <img
                    src={activeMode.image}
                    alt={activeMode.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* On-image badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2 bg-[#090909]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <Cpu className="h-3.5 w-3.5 text-[#C6A15B]" />
                      <span className="font-mono text-[11px] text-[#EBD38D]">
                        AI ENGINE 2.4 READY
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#090909]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      <Award className="h-3.5 w-3.5 text-[#C6A15B]" />
                      <span className="font-mono text-[11px] text-white">BIS 916</span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip caption */}
                <div className="p-3.5 flex items-center justify-between text-xs text-[#888888]">
                  <span className="font-mono">Shreyas Swarna Retail Platform</span>
                  <span className="text-[#EBD38D] font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
