import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Timepiece',
    category: 'Watches',
    originalPrice: 899,
    salePrice: 449,
    image: product1,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Designer Leather Bag',
    category: 'Accessories',
    originalPrice: 650,
    salePrice: 325,
    image: product2,
    badge: 'New Arrival',
  },
  {
    id: 3,
    name: 'Elite Headphones',
    category: 'Electronics',
    originalPrice: 599,
    salePrice: 299,
    image: product3,
  },
  {
    id: 4,
    name: 'Signature Fragrance',
    category: 'Beauty',
    originalPrice: 280,
    salePrice: 140,
    image: product4,
    badge: 'Limited Edition',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const discountPercent = Math.round((1 - product.salePrice / product.originalPrice) * 100);

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-elevated">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="holiday" size="icon" className="rounded-full w-12 h-12">
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Button variant="glass" size="icon" className="rounded-full w-12 h-12">
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded">
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-secondary-foreground">-{discountPercent}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">${product.salePrice}</span>
          <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-secondary uppercase tracking-widest font-medium">Featured Collection</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Holiday <span className="text-gradient-holiday">Bestsellers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curated selection of our most loved products, now with exclusive holiday savings.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="holidayOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
