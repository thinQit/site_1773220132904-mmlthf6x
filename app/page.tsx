export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora"
import ClassScheduleTable from "@/components/ClassScheduleTable"
import SectionHeader from "@/components/SectionHeader"
import TrainerCard from "@/components/TrainerCard"
import MembershipTierCard from "@/components/MembershipTierCard"
import TransformationGalleryGrid from "@/components/TransformationGalleryGrid"
import StatsCounter from "@/components/StatsCounter"
import CTASparkles from "@/components/CTASparkles"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"

export default function HomePage() {
  return (
    <main>
      <AceternityHeroAurora />
      <SiteContainer>
        <ScrollReveal>
          <section id="classes" className="animate-fade-in-up py-20 md:py-28">
            <SectionHeader title="Class Schedule" subtitle="Mix HIIT, yoga, spinning, boxing, and strength in a plan that fits your week." />
            <ClassScheduleTable />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="trainers" className="animate-fade-in-up bg-muted py-20 md:py-28">
            <SectionHeader title="Meet Our Coaches" subtitle="Certified, form-focused, and committed to your progress." />
            <TrainerCard />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="pricing" className="animate-fade-in-up py-20 md:py-28">
            <SectionHeader title="Membership Tiers" subtitle="Flexible memberships that adapt to your training goals and schedule." />
            <MembershipTierCard />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="transformations" className="animate-fade-in-up bg-muted py-20 md:py-28">
            <SectionHeader title="Transformation Gallery" subtitle="Real members. Real results. See the power of consistent training." />
            <TransformationGalleryGrid />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="stats" className="animate-fade-in-up py-20 md:py-28">
            <StatsCounter />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="animate-fade-in-up bg-muted py-20 md:py-28">
            <CTASparkles />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="testimonials" className="animate-fade-in-up py-20 md:py-28">
            <TestimonialsAnimated
              headline="Austin members who found their peak"
              subheadline="From first-time gym-goers to experienced athletes—our community shows up."
              testimonials={[
                {
                  quote:
                    "I’ve tried big-box gyms for years. Iron Peak is different—coaches actually coach. I’m stronger, my back feels better, and I’m consistent for the first time.",
                  name: "Samantha W.",
                  designation: "Unlimited Member",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
                },
                {
                  quote:
                    "The personal training sessions keep me accountable and the classes make it fun. In 3 months I hit a deadlift PR and my energy is way up.",
                  name: "Devin M.",
                  designation: "Peak + PT Member",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
                },
                {
                  quote:
                    "The mix of HIIT and recovery yoga is perfect. I feel athletic again, and the community is welcoming even if you’re starting from zero.",
                  name: "Lena G.",
                  designation: "Yoga + HIIT Regular",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
                },
              ]}
              autoplay
            />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
