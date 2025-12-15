import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export const UrgencyBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground">
                Flash Sale: Extra 20% Off
              </h3>
              <p className="text-primary-foreground/80">
                Use code <span className="font-bold text-secondary">HOLIDAY20</span> at checkout. Limited time only!
              </p>
            </div>
          </div>

          {/* Right CTA */}
          <Button 
            variant="gold" 
            size="xl" 
            className="whitespace-nowrap"
          >
            Claim Your Code
          </Button>
        </div>
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
    </section>
  );
};
