"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASparklesProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASparkles({
  title = "Ready to Hit Your Peak?",
  subtitle = "Join Iron Peak Fitness and get your first 7 days free.",
  ctaLabel = "Start Free Trial",
  ctaHref = "#contact",
}: Partial<CTASparklesProps>) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-black px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle,#FF2E00_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-3xl">
        <h3 className="font-['Anton'] text-4xl uppercase text-white md:text-6xl">{title}</h3>
        <p className="mt-4 text-white/80">{subtitle}</p>
        <Button asChild className="mt-8 rounded-lg bg-[#FF2E00] px-8 py-3 font-bold uppercase tracking-wide text-white hover:bg-[#e02800]">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
