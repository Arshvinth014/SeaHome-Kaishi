import { HeroSection } from '../features/home/components/HeroSection';
import { PropertySections } from '../features/home/components/PropertySections';
import { InsightsAndTrust } from '../features/home/components/InsightsAndTrust';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <PropertySections />
      <InsightsAndTrust />
    </main>
  );
}
