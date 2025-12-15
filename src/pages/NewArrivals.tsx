import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { getNewArrivals, Product } from '@/data/products';
import { Sparkles } from 'lucide-react';

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products = getNewArrivals();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary)/0.2),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-secondary uppercase tracking-widest font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Fresh Drops
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-4">
              New <span className="text-gradient-holiday">Arrivals</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover the latest additions to our collection. Be the first to own these exclusive pieces.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
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

export default NewArrivals;
