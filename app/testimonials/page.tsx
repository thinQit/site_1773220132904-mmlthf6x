export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function TestimonialsPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <TestimonialsAnimated
              title="What members are saying"
              subtitle="Honest feedback from people training in the same city, with the same busy schedules."
              testimonials={[
                {
                  quote:
                    "I’ve tried big-box gyms for years. Iron Peak is different—coaches actually coach. I’m stronger, my back feels better, and I’m consistent for the first time.",
                  name: "Samantha W.",
                  designation: "Unlimited Member",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
                },
                {
                  quote:
                    "The personal training sessions keep me accountable and the classes make it fun. In 3 months I hit a deadlift PR and my energy is way up.",
                  name: "Devin M.",
                  designation: "Peak + PT Member",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
                },
                {
                  quote:
                    "The mix of HIIT and recovery yoga is perfect. I feel athletic again, and the community is welcoming even if you’re starting from zero.",
                  name: "Lena G.",
                  designation: "Yoga + HIIT Regular",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
                },
                {
                  quote:
                    "I was nervous to start, but the coaches gave me options for everything. After a month, I’m moving better and my stamina is noticeably higher.",
                  name: "Carlos T.",
                  designation: "Starter Member",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
                },
                {
                  quote:
                    "The spin classes are intense in the best way, and strength days keep me balanced. I love the programming—it feels intentional.",
                  name: "Hannah B.",
                  designation: "Spin + Strength",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
                },
              ]}
              autoplay
            />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="animate-fade-in-up bg-muted py-20 md:py-28">
            <CTASparkles />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
