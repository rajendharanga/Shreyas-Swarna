import React, { useState } from 'react';
import { X, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#070707] text-[#A0A0A0] pt-24 pb-14 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Top Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/10">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
                <span>COMING SOON · PERSONALISED GOLD NETWORK</span>
              </div>

              {/* Oversized Brand Typography */}
              <h2
                className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SHREYAS SWARNA.AI
              </h2>

              <p className="mt-5 text-lg sm:text-xl text-[#C0BCB5] max-w-lg">
                “Your Imagination. Your Gold. Your Design.”
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2.5 text-xs text-[#888888]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/30">
                  COMING SOON
                </span>
                <span className="font-medium text-[#EBD38D]">
                  An upcoming venture in preparation under Shreyas Group.
                </span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-5 flex flex-col sm:flex-row sm:justify-end gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-5">
                  Navigation
                </h4>
                <ul className="space-y-3.5 text-sm text-[#A0A0A0]">
                  <li>
                    <button
                      onClick={() => onNavigate('/')}
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/', 'vision')}
                      className="hover:text-white transition-colors"
                    >
                      Our Vision
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/shreyas-group')}
                      className="text-[#EBD38D] hover:text-white transition-colors font-medium"
                    >
                      Shreyas Group &amp; Ecosystem
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/about')}
                      className="hover:text-white transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/', 'partner')}
                      className="hover:text-white transition-colors"
                    >
                      Partner With Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/', 'contact')}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-5">
                  Information
                </h4>
                <ul className="space-y-3.5 text-sm text-[#A0A0A0]">
                  <li>
                    <button
                      onClick={() => setPrivacyModalOpen(true)}
                      className="hover:text-white transition-colors text-left"
                    >
                      Privacy & Data
                    </button>
                  </li>
                  <li>
                    <span className="text-xs text-[#777777] block">
                      100% BIS Hallmarked Standards
                    </span>
                  </li>
                  <li>
                    <span className="text-xs text-[#777777] block">
                      Direct WhatsApp: +91 96669 65765
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
            <p>© 2026 SHREYAS SWARNA.AI. All rights reserved.</p>
            <p className="text-[#C6A15B] font-medium tracking-wide">
              An upcoming initiative under Shreyas Group.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] p-8 text-[#C0BCB5] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#C6A15B]" />
                <h3
                  className="text-lg font-bold text-white uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Privacy Policy & Data Notice
                </h3>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 text-[#777777] hover:text-white"
                aria-label="Close privacy notice"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <p>
                At <strong className="text-white">SHREYAS SWARNA.AI</strong> (an upcoming initiative under Shreyas Group), we respect your privacy and value the confidentiality of all personal jewellery design inquiries and retail partnership requests.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                1. Information We Collect
              </h4>
              <p>
                When submitting an inquiry or early-access request, we collect your full name, mobile number, optional email address, city/town, and any specific notes you provide.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                2. Use of Information
              </h4>
              <p>
                Your details are exclusively used to respond to your specific request, provide early-access notifications for platform milestones, or discuss retail and manufacturing partnership criteria. We do not sell or distribute personal information.
              </p>
              <h4 className="font-bold text-white uppercase text-xs tracking-wider">
                3. Direct WhatsApp Transmission
              </h4>
              <p>
                Enquiries initiated through our WhatsApp channel are handled directly by our concierge team at +91 96669 65765.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="rounded-xl bg-gradient-to-r from-[#EBD38D] to-[#C6A15B] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#090909] hover:brightness-110 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
