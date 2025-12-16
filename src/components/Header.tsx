import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Holiday Sale', href: '/holiday-sale' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Collections', href: '/collections' },
  { label: 'Gifts', href: '/gifts' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        🎄 Holiday Sale: Up to 50% Off + Free Shipping on Orders $100+ | Code: <span className="font-bold">HOLIDAY20</span>
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="font-serif text-2xl font-bold text-foreground">
              <span className="text-gradient-holiday">NOIR</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex p-2 text-foreground/80 hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2 text-foreground/80 hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button 
                className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`py-2 text-sm uppercase tracking-wider font-medium ${
                    isActive(link.href) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Link to="/email-template" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground text-sm">
                  Email Template
                </Link>
                <Link to="/ad-mockups" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground text-sm">
                  Ad Mockups
                </Link>
              </div>
              <Button variant="holiday" className="mt-2" asChild>
                <Link to="/holiday-sale" onClick={() => setIsMobileMenuOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
