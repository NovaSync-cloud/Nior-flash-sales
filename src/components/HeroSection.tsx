import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import heroImage from '@/assets/hero-holiday.jpg';

export const HeroSection = () => {
  // Set target date to December 31st of current year
  const targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Holiday Sale" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Limited Time Offer
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up">
          Holiday
          <span className="block text-gradient-holiday">Sale Event</span>
        </h1>

        {/* Discount Badge */}
        <div className="inline-flex items-baseline gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary font-serif">50</span>
          <span className="text-3xl sm:text-4xl text-primary font-serif">%</span>
          <span className="text-xl sm:text-2xl text-muted-foreground uppercase tracking-wider ml-2">Off Everything</span>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Discover our exclusive holiday collection with premium gifts for everyone on your list. 
          Free shipping on orders over $100.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="holiday" size="xl">
            Shop Holiday Sale
          </Button>
          <Button variant="holidayOutline" size="xl">
            View Collections
          </Button>
        </div>

        {/* Countdown Timer */}
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Sale Ends In</p>
          <div className="flex justify-center">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
