import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, Instagram, Facebook, Chrome } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';

const AdMockups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <span className="text-sm text-secondary uppercase tracking-widest font-medium mb-4 block">
              Paid Media Assets
            </span>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Ad <span className="text-gradient-holiday">Mockups</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Scroll-stopping ad creatives optimized for Facebook, Instagram, and Google Ads.
            </p>
          </div>
        </section>

        {/* Instagram Story Ad */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <Instagram className="w-6 h-6 text-pink-500" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Instagram Story Ad (9:16)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="max-w-xs mx-auto">
                <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-3xl overflow-hidden aspect-[9/16] border border-border shadow-2xl">
                  {/* Story Progress */}
                  <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
                    <div className="flex-1 h-0.5 bg-white/50 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-white rounded-full" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-secondary text-xs uppercase tracking-widest mb-2">Holiday Sale</span>
                    <h3 className="font-serif text-4xl font-bold text-foreground mb-2">
                      <span className="text-primary">50%</span> OFF
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">Everything. Limited Time.</p>
                    
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-primary">
                      <img src={product1} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
                      <span className="text-secondary font-mono text-lg tracking-widest">HOLIDAY20</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">Swipe Up to Shop</p>
                  </div>

                  {/* Swipe Up Indicator */}
                  <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center animate-bounce">
                    <div className="w-8 h-8 border-l-2 border-b-2 border-white rotate-[-45deg]" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Dimensions: 1080 x 1920px</li>
                  <li>• Aspect Ratio: 9:16</li>
                  <li>• Format: MP4 or JPG</li>
                  <li>• Duration: 15 seconds max</li>
                </ul>
                <Button variant="holidayOutline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Asset
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Facebook Feed Ad */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <Facebook className="w-6 h-6 text-blue-500" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Facebook Feed Ad (1:1)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="max-w-md mx-auto">
                <div className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-border shadow-xl">
                  {/* Ad Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <div>
                      <p className="font-medium text-foreground text-sm">NOIR</p>
                      <p className="text-xs text-muted-foreground">Sponsored</p>
                    </div>
                  </div>
                  
                  {/* Ad Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/20">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <span className="text-secondary text-sm uppercase tracking-widest mb-3">🎄 Holiday Sale</span>
                      <h3 className="font-serif text-5xl font-bold text-foreground mb-3">
                        UP TO <span className="text-primary">50% OFF</span>
                      </h3>
                      <p className="text-muted-foreground mb-4">Premium Collection • Limited Time</p>
                      <div className="bg-secondary/20 rounded-lg px-6 py-2">
                        <span className="font-mono text-lg text-secondary tracking-widest">CODE: HOLIDAY20</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Shop the biggest sale of the year</p>
                    <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Dimensions: 1080 x 1080px</li>
                  <li>• Aspect Ratio: 1:1</li>
                  <li>• Format: JPG or PNG</li>
                  <li>• Text: Less than 20% of image</li>
                </ul>
                <Button variant="holidayOutline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Asset
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Google Display Ad */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <Chrome className="w-6 h-6 text-green-500" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Google Display Ad (300x250)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="max-w-xs mx-auto">
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] rounded-lg overflow-hidden border border-border shadow-xl" style={{ width: 300, height: 250 }}>
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <p className="font-serif text-lg font-bold text-foreground mb-1">NOIR</p>
                    <span className="text-secondary text-xs uppercase tracking-wider mb-2">Holiday Sale</span>
                    <h3 className="font-serif text-3xl font-bold mb-2">
                      <span className="text-primary">50%</span> OFF
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">Use: HOLIDAY20</p>
                    <button className="bg-primary text-primary-foreground font-bold px-6 py-2 rounded text-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Dimensions: 300 x 250px (Medium Rectangle)</li>
                  <li>• Format: JPG, PNG, or GIF</li>
                  <li>• Max file size: 150KB</li>
                  <li>• Animation: Max 30 seconds</li>
                </ul>
                <Button variant="holidayOutline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Asset
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <Chrome className="w-6 h-6 text-green-500" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Google Leaderboard (728x90)</h2>
            </div>
            <div className="overflow-x-auto pb-4">
              <div className="bg-gradient-to-r from-[#1a1a2e] via-primary/10 to-[#1a1a2e] rounded-lg border border-border shadow-xl" style={{ width: 728, height: 90 }}>
                <div className="h-full flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl font-bold text-foreground">NOIR</span>
                    <div className="h-8 w-px bg-border" />
                    <span className="text-secondary text-sm uppercase tracking-wider">Holiday Sale</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">50% OFF</span>
                      <p className="text-xs text-muted-foreground">Everything</p>
                    </div>
                    <div className="bg-secondary/20 rounded px-3 py-1">
                      <span className="font-mono text-sm text-secondary">HOLIDAY20</span>
                    </div>
                    <button className="bg-primary text-primary-foreground font-bold px-6 py-2 rounded text-sm">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="holidayOutline">
                <Download className="w-4 h-4 mr-2" />
                Download All Assets
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdMockups;
