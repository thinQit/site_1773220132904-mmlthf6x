"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";

interface AceternityHeroAuroraProps {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function AceternityHeroAurora({
  title = "Train Hard. Live Peak.",
  subtitle = "Austin’s high-energy gym for personal training, HIIT, yoga, spinning, and boxing.",
  primaryCtaLabel = "Claim Free Week",
  primaryCtaHref = "#contact",
  secondaryCtaLabel = "View Class Schedule",
  secondaryCtaHref = "#classes",
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="min-h-[80vh] bg-black">
      <section className="mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Iron Peak Fitness</p>
        <h1 className="max-w-4xl font-['Anton'] text-5xl uppercase leading-none text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="rounded-lg bg-[#FF2E00] px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-[#e02800]">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white/30 bg-transparent px-6 py-3 font-bold uppercase tracking-wide text-white hover:bg-white/10">
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </div>
      </section>
    </AuroraBackground>
  );
}
