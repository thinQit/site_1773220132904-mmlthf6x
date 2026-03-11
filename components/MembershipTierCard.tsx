"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MembershipTierCardProps {
  name?: string;
  price?: string;
  period?: string;
  features?: string[];
  popular?: boolean;
}

export default function MembershipTierCard({
  name = "Peak Unlimited",
  price = "$149",
  period = "/month",
  features = ["Unlimited group classes", "1 monthly personal training session", "Nutrition roadmap", "Recovery zone access"],
  popular = true,
}: Partial<MembershipTierCardProps>) {
  return (
    <Card className={cn("rounded-xl border bg-[#161616] p-6 text-white", popular ? "border-[#FF2E00]" : "border-white/10")}>
      {popular ? <span className="mb-4 inline-block rounded-full bg-[#FF2E00] px-3 py-1 text-xs font-bold uppercase">Most Popular</span> : null}
      <h3 className="font-['Anton'] text-3xl uppercase">{name}</h3>
      <p className="mt-2 text-4xl font-extrabold">{price}<span className="text-base font-medium text-white/70">{period}</span></p>
      <ul className="mt-5 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-white/85">
            <Check className="mt-0.5 h-4 w-4 text-[#FF2E00]" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full rounded-lg bg-[#FF2E00] font-bold uppercase tracking-wide text-white hover:bg-[#e02800]">
        Choose Plan
      </Button>
    </Card>
  );
}
