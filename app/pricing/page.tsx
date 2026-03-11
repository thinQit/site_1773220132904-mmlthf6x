export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import MembershipTierCard from "@/components/MembershipTierCard"
import FAQAccordion from "@/components/FAQAccordion"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function PricingPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <MembershipTierCard />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="animate-fade-in-up bg-muted py-20 md:py-28">
            <FAQAccordion />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
