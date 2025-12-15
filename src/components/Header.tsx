import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';

const navLinks = [
  { label: 'Holiday Sale', href: '#' },
  { label: 'New Arrivals', href: '#' },
  { label: 'Collections', href: '#' },
  { label: 'Gifts', href: '#' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a href="/" className="font-serif text-2xl font-bold text-foreground">
              <span className="text-gradient-holiday">LUXE</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {link.label}
                </a>
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
              <button className="relative p-2 text-foreground/80 hover:text-primary transition-colors">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  3
                </span>
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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground py-2 text-sm uppercase tracking-wider font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="holiday" className="mt-2">
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
