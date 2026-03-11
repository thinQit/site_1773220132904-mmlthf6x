export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import FeaturesGrid from "@/components/FeaturesGrid"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function PrivacyPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <FeaturesGrid
              headline="Summary"
              subheadline="We collect only what we need to respond to your request."
              features={[
                {
                  icon: "Database",
                  title: "Information we collect",
                  description: "Contact details, inquiry messages, selected interests, and basic analytics when enabled.",
                },
                {
                  icon: "Shield",
                  title: "How we use it",
                  description: "To respond to inquiries, schedule sessions, improve site experience, and share requested services.",
                },
                {
                  icon: "Clock",
                  title: "Data retention",
                  description: "We retain inquiry data only as long as needed for follow-up and required recordkeeping.",
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
