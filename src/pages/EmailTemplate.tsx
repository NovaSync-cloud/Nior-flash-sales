import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Copy, Check, Smartphone, Monitor } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const EmailTemplate = () => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const handleCopyHTML = () => {
    const htmlContent = document.getElementById('email-preview')?.innerHTML;
    if (htmlContent) {
      navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      toast.success('HTML copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 text-sm text-secondary uppercase tracking-widest font-medium mb-4">
              <Mail className="w-4 h-4" />
              Email Marketing
            </span>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Holiday Email <span className="text-gradient-holiday">Template</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Ready-to-use email template optimized for high open rates and click-through rates.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${viewMode === 'desktop' ? 'bg-background shadow-sm' : ''}`}
                >
                  <Monitor className="w-4 h-4" />
                  Desktop
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-background shadow-sm' : ''}`}
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile
                </button>
              </div>
              <Button variant="holidayOutline" onClick={handleCopyHTML}>
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy HTML'}
              </Button>
            </div>
          </div>
        </section>

        {/* Email Preview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className={`mx-auto transition-all duration-300 ${viewMode === 'mobile' ? 'max-w-sm' : 'max-w-2xl'}`}>
              <div id="email-preview" className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-2xl border border-border">
                {/* Email Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
                  <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-2">NOIR</h2>
                  <p className="text-primary-foreground/80 text-sm">Holiday Collection 2024</p>
                </div>

                {/* Main Content */}
                <div className="p-6 md:p-8">
                  {/* Hero */}
                  <div className="text-center mb-8">
                    <p className="text-secondary text-sm uppercase tracking-widest mb-2">✨ Exclusive Offer</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                      Up to <span className="text-primary">50% OFF</span>
                    </h1>
                    <p className="text-muted-foreground mb-6">
                      This holiday season, treat yourself or find the perfect gift. 
                      Limited time only - don't miss out!
                    </p>
                    <a 
                      href="#" 
                      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                    >
                      SHOP THE SALE →
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-8" />

                  {/* Featured Products */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-bold text-foreground text-center mb-6">Featured Picks</h3>
                    <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                      {[
                        { name: 'Luxury Timepiece', price: '$449', original: '$899' },
                        { name: 'Designer Bag', price: '$325', original: '$650' },
                      ].map((item, i) => (
                        <div key={i} className="bg-card rounded-lg p-4 border border-border text-center">
                          <div className="w-full h-32 bg-muted rounded-lg mb-3" />
                          <h4 className="font-medium text-foreground mb-2">{item.name}</h4>
                          <p className="text-primary font-bold">{item.price} <span className="text-muted-foreground line-through text-sm">{item.original}</span></p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6 text-center mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Use code at checkout:</p>
                    <p className="font-mono text-2xl font-bold text-secondary tracking-widest">HOLIDAY20</p>
                    <p className="text-sm text-muted-foreground mt-2">Extra 20% off your order!</p>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a 
                      href="#" 
                      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg transition-colors"
                    >
                      Shop Now
                    </a>
                    <p className="text-xs text-muted-foreground mt-4">
                      Offer ends December 31, 2024. Terms apply.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-muted/50 p-6 text-center border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us for exclusive updates
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                      <a key={social} href="#" className="text-xs text-muted-foreground hover:text-primary">
                        {social}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    © 2024 NOIR. All rights reserved.<br />
                    <a href="#" className="underline">Unsubscribe</a> | <a href="#" className="underline">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmailTemplate;
