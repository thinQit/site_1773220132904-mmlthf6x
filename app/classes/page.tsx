export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import ClassTypeChips from "@/components/ClassTypeChips"
import ClassScheduleTable from "@/components/ClassScheduleTable"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function ClassesPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <ClassTypeChips />
            <ClassScheduleTable />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="animate-fade-in-up bg-muted py-20 md:py-28">
            <FAQAccordion />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <CTASparkles />
          </section>
        </ScrollReveal>
      </SiteContainer>
    </main>
  )
}
