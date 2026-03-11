export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import FeaturesGrid from "@/components/FeaturesGrid"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function TermsPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <FeaturesGrid
              headline="Key terms"
              subheadline="This website provides information about services and scheduling."
              features={[
                {
                  icon: "HeartPulse",
                  title: "No medical advice",
                  description:
                    "Website content is informational only and not medical advice. Consult a healthcare professional before starting a new exercise program.",
                },
                {
                  icon: "CalendarClock",
                  title: "Scheduling and availability",
                  description:
                    "Class times and coach assignments may change. Booking is always subject to availability and class capacity.",
                },
                {
                  icon: "AlertTriangle",
                  title: "Liability",
                  description:
                    "Training involves inherent risk. Participation in classes or personal training is at your own risk and subject to signed in-gym waivers.",
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
