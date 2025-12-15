import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { ProductQuickView } from '@/components/ProductQuickView';
import { allProducts, Product } from '@/data/products';

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products = allProducts.slice(0, 4);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm text-secondary uppercase tracking-widest font-medium">Featured Collection</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Holiday <span className="text-gradient-holiday">Bestsellers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curated selection of our most loved products, now with exclusive holiday savings.
          </p>
        </div>

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

        <div className="text-center mt-12">
          <Button variant="holidayOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>

      <ProductQuickView
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
