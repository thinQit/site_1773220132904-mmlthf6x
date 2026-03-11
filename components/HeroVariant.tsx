"use client";

import { cn } from "@/lib/utils";

interface HeroVariantProps {
  variant?: "spotlight" | "lamp" | "beams" | "waves" | "starfield" | "gradient-blob";
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function HeroVariant({
  variant = "gradient-blob",
  title = "Inner Page Hero",
  subtitle = "Reusable hero section for campaigns and landing pages.",
  children,
}: Partial<HeroVariantProps>) {
  const backgrounds: Record<string, string> = {
    spotlight: "bg-[radial-gradient(circle_at_center,rgba(255,46,0,0.28),transparent_60%)]",
    lamp: "bg-[radial-gradient(circle_at_top,rgba(255,46,0,0.35),transparent_55%)]",
    beams: "bg-[linear-gradient(120deg,rgba(255,46,0,0.15),transparent_30%,rgba(255,46,0,0.08)_70%,transparent)]",
    waves: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,46,0,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_35%)]",
    starfield: "bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:20px_20px]",
    "gradient-blob": "bg-[radial-gradient(circle_at_25%_20%,rgba(255,46,0,0.3),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,46,0,0.2),transparent_40%)]",
  };

  return (
    <section className={cn("relative overflow-hidden bg-[#111111] py-20", backgrounds[variant])}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-6xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-white/80">{subtitle}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
