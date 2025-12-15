import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { UrgencyBanner } from '@/components/UrgencyBanner';
import { EmailSignupSection } from '@/components/EmailSignupSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <UrgencyBanner />
        <SocialProofSection />
        <EmailSignupSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
