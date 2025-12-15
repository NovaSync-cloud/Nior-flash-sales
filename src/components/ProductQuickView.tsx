import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { ShoppingBag, Heart, Star, Minus, Plus, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  badge?: string;
  description?: string;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = [
  { name: 'Midnight Black', value: '#1a1a2e' },
  { name: 'Holiday Red', value: '#c41e3a' },
  { name: 'Champagne Gold', value: '#d4af37' },
  { name: 'Frost White', value: '#f5f5f5' },
];

export const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const discountPercent = Math.round((1 - product.salePrice / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.salePrice,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    }, quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Size: ${selectedSize} | Color: ${selectedColor} | Qty: ${quantity}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
        <DialogTitle className="sr-only">{product.name} Quick View</DialogTitle>
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded">
                {product.badge}
              </div>
            )}
            <div className="absolute top-4 right-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-secondary-foreground">-{discountPercent}%</span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h2>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-secondary fill-secondary' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.salePrice}</span>
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="px-2 py-1 bg-primary/20 text-primary text-sm font-medium rounded">
                  Save ${product.originalPrice - product.salePrice}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">
                {product.description || 'Elevate your style with this premium piece from our holiday collection. Crafted with exceptional quality and attention to detail.'}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Color: <span className="text-muted-foreground">{selectedColor}</span></p>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-primary scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Size</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border transition-all font-medium ${
                        selectedSize === size
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-green-500 flex items-center gap-1">
                    <Check className="w-4 h-4" /> In Stock
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="holiday" className="flex-1" size="lg" onClick={handleAddToCart}>
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="glass"
                  size="icon"
                  className="w-12 h-12"
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
                  }}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto text-secondary mb-1" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-secondary mb-1" />
                  <p className="text-xs text-muted-foreground">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-5 h-5 mx-auto text-secondary mb-1" />
                  <p className="text-xs text-muted-foreground">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
