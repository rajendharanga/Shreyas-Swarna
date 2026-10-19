import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Hero } from './components/Hero';
import { NetworkHeroSection } from './components/NetworkHeroSection';
import { IntroSection } from './components/IntroSection';
import { ThreePlatformsSection } from './components/ThreePlatformsSection';
import { JourneySection } from './components/JourneySection';
import { ConceptStudio } from './components/ConceptStudio';
import { CollectionsSection } from './components/CollectionsSection';
import { OfferingsSection } from './components/OfferingsSection';
import { PartnerSection } from './components/PartnerSection';
import { ShreyasGroupSection } from './components/ShreyasGroupSection';
import { EMC2FrameworkSection } from './components/EMC2FrameworkSection';
import { WhyUsSection } from './components/WhyUsSection';
import { EarlyAccessSection } from './components/EarlyAccessSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ShreyasGroupPage } from './pages/ShreyasGroupPage';
import { UserCategory } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/about' || path === '/shreyas-group') {
      return path;
    }
    return '/';
  });
  const [targetCategory, setTargetCategory] = useState<UserCategory>('Jewellery Customer');
  const [selectedConcept, setSelectedConcept] = useState<string | undefined>(undefined);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about' || path === '/shreyas-group') {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize canonical URL to https://shreyasswarna.ai/
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const suffix =
      currentPath === '/about'
        ? '/about'
        : currentPath === '/shreyas-group'
          ? '/shreyas-group'
          : '/';
    canonical.setAttribute('href', `https://shreyasswarna.ai${suffix}`);
  }, [currentPath]);

  const navigateTo = (path: string, hash?: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path + (hash ? `#${hash}` : ''));
    }
    setCurrentPath(path);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollTo = (hashId: string) => {
    if (currentPath !== '/') {
      navigateTo('/', hashId);
    } else {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCustomerPath = () => {
    setTargetCategory('Jewellery Customer');
    handleScrollTo('contact');
  };

  const handlePartnerPath = (modelType?: string) => {
    if (modelType === 'partner-b') {
      setTargetCategory('Retailer: Exclusive Showroom Partner');
    } else {
      setTargetCategory('Retailer: In-Store Design Studio');
    }
    handleScrollTo('contact');
  };

  const handleConceptSelected = (conceptName: string) => {
    setSelectedConcept(conceptName);
    setTargetCategory('Jewellery Customer');
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F2EB] flex flex-col selection:bg-[#C6A15B]/30 selection:text-white">
      {/* Top Floating Glassmorphism Navigation */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentPath === '/about' ? (
          <AboutPage onNavigateHome={(hash) => navigateTo('/', hash)} />
        ) : currentPath === '/shreyas-group' ? (
          <ShreyasGroupPage onNavigateHome={(hash) => navigateTo('/', hash)} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onExploreVision={() => handleScrollTo('network-vision')}
              onGetEarlyAccess={() => handleScrollTo('contact')}
            />

            {/* Continuous Infinite Marquee Ticker */}
            <MarqueeTicker />

            {/* BIGGER & BOLDER: India's Next-Generation AI-Powered Gold Jewellery Retail Network */}
            <NetworkHeroSection
              onExploreVision={() => handleScrollTo('platforms')}
              onPartnerClick={() => handlePartnerPath()}
            />

            {/* Introduction Section */}
            <IntroSection onDiscoverStory={() => navigateTo('/about')} />

            {/* Three Interconnected Pillars */}
            <ThreePlatformsSection
              onLearnMore={() => navigateTo('/about')}
              onPartnerClick={() => handleScrollTo('partner')}
            />

            {/* The 6-Step In-Store Customer Journey */}
            <JourneySection />

            {/* Interactive Concept Studio Preview */}
            <ConceptStudio onSelectConcept={handleConceptSelected} />

            {/* Five Exclusive Curated Collections */}
            <CollectionsSection onSelectCollection={handleConceptSelected} />

            {/* Core Offerings */}
            <OfferingsSection
              onExploreVision={() => handleScrollTo('platforms')}
              onGetEarlyAccess={handleCustomerPath}
              onBecomePartner={() => handlePartnerPath()}
            />

            {/* Retail Partnership Models */}
            <PartnerSection onPartnerClick={handlePartnerPath} />

            {/* DEDICATED SHREYAS GROUP SECTION: Legacy & Ecosystem */}
            <ShreyasGroupSection
              onContactClick={() => handleScrollTo('contact')}
            />

            {/* Shreyas Group Brand Philosophy */}
            <EMC2FrameworkSection />

            {/* Why SHREYAS SWARNA.AI */}
            <WhyUsSection />

            {/* Early Access Dual Pathways */}
            <EarlyAccessSection
              onSelectCustomerPath={handleCustomerPath}
              onSelectPartnerPath={() => handlePartnerPath()}
            />

            {/* Contact Form for Pre-Launch Enquiries */}
            <ContactSection
              initialCategory={targetCategory}
              prefilledDesignConcept={selectedConcept}
            />

            {/* FAQ Accordion Section */}
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
