import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ShreyasGroupSection } from '../components/ShreyasGroupSection';

interface ShreyasGroupPageProps {
  onNavigateHome: (hash?: string) => void;
}

export const ShreyasGroupPage: React.FC<ShreyasGroupPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'The Shreyas Legacy & Ecosystem | SHREYAS SWARNA.AI — Shreyas Group';
    return () => {
      document.title = 'SHREYAS SWARNA.AI — Coming Soon | Personalised Gold Jewellery Design';
    };
  }, []);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#E8E4DC] bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigateHome()}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#555555] hover:text-[#0D1829] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#A9894A] border border-[#C6A15B]/40">
              SHREYAS GROUP
            </span>
            <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider hidden sm:inline">
              EXPLORING INFINITY
            </span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <ShreyasGroupSection
        isStandalonePage={true}
        onContactClick={() => onNavigateHome('contact')}
      />
    </div>
  );
};
