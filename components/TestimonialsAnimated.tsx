'use client';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = 'Member Success Stories',
  subheadline = 'Hear from athletes and everyday members who transformed their training.',
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials as TestimonialItem[]} autoplay={autoplay} />
      </div>
    </section>
  );
}
