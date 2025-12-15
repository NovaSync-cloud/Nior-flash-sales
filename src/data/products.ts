import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

export interface Product {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  badge?: string;
  description?: string;
  collection?: 'holiday' | 'new-arrivals' | 'gifts' | 'bestsellers';
  tags?: string[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Luxury Timepiece',
    category: 'Watches',
    originalPrice: 899,
    salePrice: 449,
    image: product1,
    badge: 'Best Seller',
    description: 'An exquisite timepiece crafted with precision. Features sapphire crystal, Swiss movement, and genuine leather strap.',
    collection: 'bestsellers',
    tags: ['watches', 'accessories', 'luxury'],
  },
  {
    id: 2,
    name: 'Designer Leather Bag',
    category: 'Accessories',
    originalPrice: 650,
    salePrice: 325,
    image: product2,
    badge: 'New Arrival',
    description: 'Premium Italian leather handbag with gold-tone hardware. Spacious interior with multiple compartments.',
    collection: 'new-arrivals',
    tags: ['bags', 'accessories', 'leather'],
  },
  {
    id: 3,
    name: 'Elite Headphones',
    category: 'Electronics',
    originalPrice: 599,
    salePrice: 299,
    image: product3,
    description: 'Studio-quality wireless headphones with active noise cancellation. 40-hour battery life.',
    collection: 'bestsellers',
    tags: ['electronics', 'audio', 'wireless'],
  },
  {
    id: 4,
    name: 'Signature Fragrance',
    category: 'Beauty',
    originalPrice: 280,
    salePrice: 140,
    image: product4,
    badge: 'Limited Edition',
    description: 'An enchanting blend of bergamot, jasmine, and sandalwood. Perfect for the holiday season.',
    collection: 'gifts',
    tags: ['beauty', 'fragrance', 'gift'],
  },
  {
    id: 5,
    name: 'Cashmere Sweater',
    category: 'Apparel',
    originalPrice: 450,
    salePrice: 225,
    image: product1,
    badge: 'Holiday Special',
    description: 'Ultra-soft 100% cashmere sweater in a classic silhouette. Perfect layering piece for winter.',
    collection: 'holiday',
    tags: ['clothing', 'winter', 'cashmere'],
  },
  {
    id: 6,
    name: 'Diamond Pendant',
    category: 'Jewelry',
    originalPrice: 1200,
    salePrice: 600,
    image: product2,
    badge: 'Gift Pick',
    description: 'Stunning solitaire diamond pendant on 18k white gold chain. Certified conflict-free diamond.',
    collection: 'gifts',
    tags: ['jewelry', 'diamond', 'gift'],
  },
  {
    id: 7,
    name: 'Smart Home Speaker',
    category: 'Electronics',
    originalPrice: 399,
    salePrice: 199,
    image: product3,
    badge: 'New',
    description: 'Premium smart speaker with room-filling sound and voice assistant. Works with all smart home devices.',
    collection: 'new-arrivals',
    tags: ['electronics', 'smart home', 'speaker'],
  },
  {
    id: 8,
    name: 'Artisan Candle Set',
    category: 'Home',
    originalPrice: 120,
    salePrice: 60,
    image: product4,
    badge: 'Holiday Exclusive',
    description: 'Set of 3 hand-poured soy candles in festive scents: Pine Forest, Cinnamon Spice, and Winter Berry.',
    collection: 'holiday',
    tags: ['home', 'candles', 'holiday'],
  },
  {
    id: 9,
    name: 'Silk Scarf Collection',
    category: 'Accessories',
    originalPrice: 280,
    salePrice: 140,
    image: product1,
    description: 'Luxurious hand-rolled silk scarf featuring original artwork. Each piece is a work of art.',
    collection: 'new-arrivals',
    tags: ['accessories', 'silk', 'fashion'],
  },
  {
    id: 10,
    name: 'Premium Wine Set',
    category: 'Gifts',
    originalPrice: 350,
    salePrice: 175,
    image: product2,
    badge: 'Perfect Gift',
    description: 'Curated selection of 3 premium wines from renowned vineyards, presented in an elegant gift box.',
    collection: 'gifts',
    tags: ['wine', 'gift', 'gourmet'],
  },
  {
    id: 11,
    name: 'Leather Journal',
    category: 'Stationery',
    originalPrice: 95,
    salePrice: 47,
    image: product3,
    description: 'Hand-stitched leather journal with acid-free cotton pages. Perfect for writers and artists.',
    collection: 'gifts',
    tags: ['stationery', 'leather', 'gift'],
  },
  {
    id: 12,
    name: 'Velvet Throw Blanket',
    category: 'Home',
    originalPrice: 180,
    salePrice: 90,
    image: product4,
    badge: 'Cozy Essential',
    description: 'Ultra-plush velvet throw in rich jewel tones. Adds instant luxury to any room.',
    collection: 'holiday',
    tags: ['home', 'blanket', 'cozy'],
  },
];

export const getProductsByCollection = (collection: string) => 
  allProducts.filter(p => p.collection === collection);

export const getNewArrivals = () => 
  allProducts.filter(p => p.collection === 'new-arrivals' || p.badge?.includes('New'));

export const getGiftItems = () => 
  allProducts.filter(p => p.collection === 'gifts' || p.tags?.includes('gift'));

export const getHolidayItems = () => 
  allProducts.filter(p => p.collection === 'holiday' || p.tags?.includes('holiday'));
