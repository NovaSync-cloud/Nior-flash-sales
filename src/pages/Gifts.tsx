import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { Button } from '@/components/ui/button';
import { getGiftItems, Product } from '@/data/products';
import { Gift, Heart, Star, Sparkles } from 'lucide-react';

const priceRanges = [
  { label: 'Under $50', max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $250', min: 100, max: 250 },
  { label: '$250+', min: 250 },
];

const Gifts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const products = getGiftItems();

  const filteredProducts = selectedRange
    ? products.filter(p => {
        const range = priceRanges.find(r => r.label === selectedRange);
        if (!range) return true;
        if (range.min && range.max) return p.salePrice >= range.min && p.salePrice < range.max;
        if (range.max) return p.salePrice < range.max;
        if (range.min) return p.salePrice >= range.min;
        return true;
      })
    : products;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 via-secondary/5 to-background overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl opacity-10">🎁</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-10">✨</div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-secondary uppercase tracking-widest font-medium mb-4">
              <Gift className="w-4 h-4" />
              Perfect Presents
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-4">
              Gift <span className="text-gradient-holiday">Guide</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Find the perfect gift for everyone on your list. Curated with love, wrapped with care.
            </p>
            
            {/* Price Range Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedRange(null)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedRange
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All Gifts
              </button>
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setSelectedRange(range.label)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRange === range.label
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Categories */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, label: 'For Her', color: 'text-pink-500' },
                { icon: Star, label: 'For Him', color: 'text-blue-500' },
                { icon: Sparkles, label: 'Luxury Picks', color: 'text-secondary' },
                { icon: Gift, label: 'Stocking Stuffers', color: 'text-primary' },
              ].map(({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-7 h-7 ${color}`} />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> gift ideas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
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

        {/* Gift Services Banner */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                🎀 Complimentary Gift Wrapping
              </h2>
              <p className="text-muted-foreground mb-6">
                Every order over $75 includes premium gift wrapping and a personalized message card.
              </p>
              <Button variant="holiday">Shop Gifts Now</Button>
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

export default Gifts;
