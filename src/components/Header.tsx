import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(path, hash);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-3 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 px-5 sm:px-6 py-3.5 flex items-center justify-between gap-4 sm:gap-6 ${
          scrolled
            ? 'bg-[#121212]/95 border-white/10 shadow-2xl backdrop-blur-xl'
            : 'bg-[#121212]/75 border-white/5 backdrop-blur-md'
        }`}
      >
        {/* Brand Lockup with COMING SOON Badge */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-base sm:text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#EBD38D] via-[#C6A15B] to-[#A58226] text-[#090909] shadow-md shadow-[#C6A15B]/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="tracking-tight leading-tight">SHREYAS SWARNA.AI</span>
              <span className="text-[9px] uppercase tracking-widest text-[#C6A15B] font-mono leading-none">
                Shreyas Group
              </span>
            </div>
          </a>

          {/* Prominent COMING SOON indicator */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/40">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EBD38D] animate-pulse" />
            COMING SOON
          </span>
        </div>

        {/* Navigation Links - Human & Editorial */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#A0A0A0] lg:flex">
          <button
            onClick={() => handleNavClick('/')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-white ${
              currentPath === '/' ? 'text-white font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('/', 'vision')}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-white"
          >
            Our Vision
          </button>
          <button
            onClick={() => handleNavClick('/', 'platforms')}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-white"
          >
            Our Pillars
          </button>
          <button
            onClick={() => handleNavClick('/', 'partner')}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-white"
          >
            Partner With Us
          </button>
          <button
            onClick={() => handleNavClick('/', 'collections')}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-white"
          >
            Collections
          </button>
          <button
            onClick={() => handleNavClick('/shreyas-group')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-[#EBD38D] font-semibold flex items-center gap-1.5 ${
              currentPath === '/shreyas-group' ? 'text-[#EBD38D]' : 'text-white/90'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
            <span>Shreyas Group</span>
          </button>
          <button
            onClick={() => handleNavClick('/about')}
            className={`cursor-pointer whitespace-nowrap transition-colors hover:text-white ${
              currentPath === '/about' ? 'text-white font-semibold' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('/', 'contact')}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-white"
          >
            Contact
          </button>
        </nav>

        {/* Primary CTA */}
        <div className="hidden items-center gap-3 md:flex shrink-0">
          <button
            onClick={() => handleNavClick('/', 'contact')}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] px-5 py-2.5 text-xs font-bold tracking-wider text-[#090909] transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A15B]/25 hover:brightness-110 active:scale-95"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span>GET EARLY ACCESS</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#A0A0A0] hover:text-white lg:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#141414]/95 p-6 backdrop-blur-2xl lg:hidden shadow-2xl">
          <div className="mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-mono">
              Pre-Launch Navigation
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-[#C6A15B]/20 text-[#EBD38D] border border-[#C6A15B]/30">
              COMING SOON
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base font-medium text-[#A0A0A0]">
            <button
              onClick={() => handleNavClick('/')}
              className={`py-2 text-left transition-colors hover:text-white ${
                currentPath === '/' ? 'text-white font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/', 'vision')}
              className="py-2 text-left transition-colors hover:text-white"
            >
              Our Vision
            </button>
            <button
              onClick={() => handleNavClick('/', 'platforms')}
              className="py-2 text-left transition-colors hover:text-white"
            >
              Our Three Pillars
            </button>
            <button
              onClick={() => handleNavClick('/', 'partner')}
              className="py-2 text-left transition-colors hover:text-white"
            >
              Retail Partnership
            </button>
            <button
              onClick={() => handleNavClick('/', 'collections')}
              className="py-2 text-left transition-colors hover:text-white"
            >
              Curated Collections
            </button>
            <button
              onClick={() => handleNavClick('/shreyas-group')}
              className={`py-2 text-left transition-colors hover:text-[#EBD38D] font-bold flex items-center justify-between ${
                currentPath === '/shreyas-group' ? 'text-[#EBD38D]' : 'text-white'
              }`}
            >
              <span>The Shreyas Group &amp; Ecosystem</span>
              <span className="text-[10px] font-mono text-[#C6A15B] uppercase bg-[#C6A15B]/15 px-2 py-0.5 rounded-full">
                Legacy
              </span>
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className={`py-2 text-left transition-colors hover:text-white ${
                currentPath === '/about' ? 'text-white font-semibold' : ''
              }`}
            >
              About &amp; Vision
            </button>
            <button
              onClick={() => handleNavClick('/', 'contact')}
              className="py-2 text-left transition-colors hover:text-white"
            >
              Contact & Early Access
            </button>
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => handleNavClick('/', 'contact')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] py-3 text-xs font-bold tracking-wider text-[#090909]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>GET EARLY ACCESS · COMING SOON</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
