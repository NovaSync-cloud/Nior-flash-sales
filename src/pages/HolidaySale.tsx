import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Button } from '@/components/ui/button';
import { getHolidayItems, allProducts, Product } from '@/data/products';
import { Flame, Percent, Clock, Zap } from 'lucide-react';

const HolidaySale = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const holidayProducts = getHolidayItems();
  const flashDeals = allProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative py-24 bg-gradient-to-b from-primary/20 via-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary mb-6">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Biggest Sale of the Year</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold text-foreground mb-4">
              Holiday <span className="text-gradient-holiday">SALE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Up to <span className="text-primary font-bold">50% OFF</span> everything + extra 20% with code <span className="font-bold text-secondary">HOLIDAY20</span>
            </p>
            
            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" /> Sale ends in:
              </p>
              <CountdownTimer targetDate={new Date('2025-12-31T23:59:59')} />
            </div>

            <Button variant="holiday" size="lg" className="text-lg px-8">
              Shop All Deals
            </Button>
          </div>
        </section>

        {/* Flash Deals */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Flash Deals</h2>
                  <p className="text-sm text-muted-foreground">Limited time offers - ends in 2 hours!</p>
                </div>
              </div>
              <Button variant="holidayOutline" size="sm">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashDeals.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-2 -right-2 z-10 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-bold">
                    FLASH
                  </div>
                  <ProductCard product={product} onQuickView={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Holiday Collection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm text-secondary uppercase tracking-widest font-medium">Festive Favorites</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Holiday <span className="text-gradient-holiday">Collection</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {holidayProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} onQuickView={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Percent className="w-8 h-8 text-primary-foreground" />
                  <span className="text-4xl font-bold text-primary-foreground">EXTRA 20% OFF</span>
                </div>
                <p className="text-primary-foreground/80">Use code HOLIDAY20 at checkout</p>
              </div>
              <Button variant="gold" size="lg">
                Claim Your Discount
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProductQuickView
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default HolidaySale;
