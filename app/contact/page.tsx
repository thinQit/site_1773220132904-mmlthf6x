export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import ContactForm from "@/components/ContactForm"
import ContactDetails from "@/components/ContactDetails"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section id="contact-form" className="animate-fade-in-up py-20 md:py-28">
            <ContactForm
              headline="Contact Iron Peak Fitness"
              subheadline="We typically respond within 1 business day."
              contactInfo={[
                { icon: "MapPin", label: "Address", value: "1717 S Lamar Blvd, Austin, TX 78704" },
                { icon: "Phone", label: "Phone", value: "(512) 555-0199" },
                { icon: "Mail", label: "Email", value: "hello@ironpeakfitness.com" },
              ]}
            />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="animate-fade-in-up bg-muted py-20 md:py-28">
            <ContactDetails />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
