import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: () => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { addItem } = useCart();
  const discountPercent = Math.round((1 - product.salePrice / product.originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.salePrice,
      originalPrice: product.originalPrice,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

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
          <Button variant="holiday" size="icon" className="rounded-full w-12 h-12" onClick={handleAddToCart}>
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Button variant="glass" size="icon" className="rounded-full w-12 h-12" onClick={onQuickView}>
            <Eye className="w-5 h-5" />
          </Button>
          <Button 
            variant="glass" 
            size="icon" 
            className="rounded-full w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              toast.success('Added to wishlist');
            }}
          >
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
