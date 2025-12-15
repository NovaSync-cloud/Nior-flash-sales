import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { Button } from '@/components/ui/button';
import { allProducts, Product } from '@/data/products';
import { Grid3X3, LayoutList, Filter } from 'lucide-react';

const categories = ['All', 'Watches', 'Accessories', 'Electronics', 'Beauty', 'Apparel', 'Jewelry', 'Home'];

const Collections = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.salePrice - b.salePrice;
      case 'price-high':
        return b.salePrice - a.salePrice;
      case 'discount':
        return (b.originalPrice - b.salePrice) / b.originalPrice - (a.originalPrice - a.salePrice) / a.originalPrice;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-sm text-secondary uppercase tracking-widest font-medium mb-4 block">
              Explore Our Range
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-4">
              All <span className="text-gradient-holiday">Collections</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Browse our complete catalog of premium products, all at holiday-special prices.
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-sm rounded-full transition-all ${
                      selectedCategory === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              Showing <span className="text-foreground font-medium">{sortedProducts.length}</span> products
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
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

export default Collections;
