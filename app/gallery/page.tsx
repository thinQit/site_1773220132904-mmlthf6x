export const dynamic = 'force-dynamic';

import HeroVariant from "@/components/HeroVariant"
import TransformationGalleryGrid from "@/components/TransformationGalleryGrid"
import CTASparkles from "@/components/CTASparkles"
import SiteContainer from "@/components/SiteContainer"
import ScrollReveal from "@/components/ScrollReveal"

export default function GalleryPage() {
  return (
    <main>
      <HeroVariant />
      <SiteContainer>
        <ScrollReveal>
          <section className="animate-fade-in-up py-20 md:py-28">
            <TransformationGalleryGrid />
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
