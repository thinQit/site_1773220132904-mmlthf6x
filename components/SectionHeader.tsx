"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title = "Section Title",
  subtitle = "Section subtitle goes here.",
  align = "left",
  className = "",
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2E00]">Iron Peak Fitness</p>
      <h2 className="mt-2 font-['Anton'] text-4xl uppercase leading-tight text-white md:text-5xl">{title}</h2>
      <div className={cn("mt-3 h-1 w-20 bg-[#FF2E00]", align === "center" && "mx-auto")} />
      <p className={cn("mt-4 max-w-2xl text-white/75", align === "center" && "mx-auto")}>{subtitle}</p>
    </div>
  );
}
