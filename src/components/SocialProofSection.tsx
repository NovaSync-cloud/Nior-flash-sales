import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Verified Buyer',
    content: 'The quality exceeded my expectations. The packaging was beautiful and perfect for gifting. Will definitely be ordering again!',
    rating: 5,
    avatar: 'AC',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'VIP Member',
    content: 'Fast shipping and incredible customer service. The holiday deals are unmatched. My go-to for all premium gifts.',
    rating: 5,
    avatar: 'MT',
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Verified Buyer',
    content: 'Stunning products and the sale prices are amazing. I saved over $500 on my holiday shopping. Highly recommend!',
    rating: 5,
    avatar: 'SM',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '340%', label: 'Campaign ROI' },
  { value: '4.9', label: 'Average Rating' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-primary/20 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/90 leading-relaxed mb-6">{testimonial.content}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">{testimonial.avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export const SocialProofSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gradient-holiday mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-secondary uppercase tracking-widest font-medium">Customer Love</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-3">
            Trusted by <span className="text-gradient-gold">Thousands</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-50">
          {['Secure Checkout', 'Free Returns', 'Premium Quality', 'Fast Shipping'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-sm uppercase tracking-wider">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
