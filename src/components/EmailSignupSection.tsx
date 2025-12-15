import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const EmailSignupSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the VIP List!",
        description: "Check your inbox for an exclusive 10% off code.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get <span className="text-gradient-holiday">Exclusive Access</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our VIP list and receive an extra 10% off your first order, plus early access to flash sales and new arrivals.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
            </div>
            <Button type="submit" variant="holiday" size="xl" className="group">
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Note */}
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              { icon: '🎁', text: 'Extra 10% Off' },
              { icon: '⚡', text: 'Early Access' },
              { icon: '💎', text: 'VIP Perks' },
            ].map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-2 text-muted-foreground">
                <span>{benefit.icon}</span>
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
