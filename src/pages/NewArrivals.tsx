import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { Button } from '@/components/ui/button';
import { getNewArrivals, Product } from '@/data/products';
import { Sparkles, ArrowRight, TrendingUp, Clock, Star } from 'lucide-react';

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState('All New');
  const products = getNewArrivals();

  const filters = ['All New', 'This Week', 'Trending', 'Back in Stock'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner - Asymmetric design unique to this page */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_100%_0%,hsl(var(--secondary)/0.3),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--primary)/0.2),transparent_70%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Just Dropped</span>
                </div>
                <h1 className="font-serif text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
                  New <br />
                  <span className="text-gradient-holiday">Arrivals</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-md">
                  Be the first to discover our latest additions. Fresh styles, exclusive pieces, limited quantities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="holiday" size="lg">
                    Shop New In <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="holidayOutline" size="lg">
                    View Lookbook
                  </Button>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-3xl font-bold text-foreground">{products.length}</h3>
                  <p className="text-muted-foreground">New Items</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-secondary/50 transition-colors">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-serif text-3xl font-bold text-foreground">48h</h3>
                  <p className="text-muted-foreground">Early Access</p>
                </div>
                <div className="col-span-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-border rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Member Exclusive</p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">15% OFF New Arrivals</h3>
                  <p className="text-secondary font-mono mt-2">Code: NEWFOR15</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured New Product */}
        {products[0] && (
          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden group">
                  <img 
                    src={products[0].image} 
                    alt={products[0].name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    ✨ JUST IN
                  </div>
                </div>
                <div>
                  <span className="text-secondary uppercase tracking-widest text-sm font-medium">Featured Drop</span>
                  <h2 className="font-serif text-4xl font-bold text-foreground mt-3 mb-4">
                    {products[0].name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {products[0].description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                    <span className="text-muted-foreground text-sm ml-2">(New - Be First to Review)</span>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-primary">${products[0].salePrice}</span>
                    <span className="text-xl text-muted-foreground line-through">${products[0].originalPrice}</span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {Math.round((1 - products[0].salePrice / products[0].originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <Button 
                    variant="holiday" 
                    size="lg"
                    onClick={() => setSelectedProduct(products[0])}
                  >
                    Quick View
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">All New Arrivals</h2>
                <p className="text-muted-foreground mt-1">
                  {products.length} new items to explore
                </p>
              </div>
              <select className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <ProductCard product={product} onQuickView={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-secondary/20 via-background to-primary/20">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Get Early Access
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Be the first to know about new arrivals and exclusive drops. VIP members get 48-hour early access.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <Button variant="holiday">Subscribe</Button>
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
