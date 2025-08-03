'use client';

import Header from '../components/Header';
import HomeHero from './HomeHero';
import FeaturedCarousel from './FeaturedCarousel';
import QuickFilters from './QuickFilters';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeHero />
        <FeaturedCarousel />
        <QuickFilters />
        <CTASection />
      </main>
    </div>
  );
}