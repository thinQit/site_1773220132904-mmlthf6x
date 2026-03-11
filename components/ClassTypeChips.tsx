"use client";

import { cn } from "@/lib/utils";

interface ClassTypeChipsProps {
  selected?: string;
  onSelect?: (type: string) => void;
  types?: string[];
}

export default function ClassTypeChips({
  selected = "HIIT",
  onSelect = () => undefined,
  types = ["HIIT", "Yoga", "Spin", "Boxing", "Strength"],
}: Partial<ClassTypeChipsProps>) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onSelect(type)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition",
            selected === type
              ? "border-[#FF2E00] bg-[#FF2E00] text-white"
              : "border-white/20 bg-white/5 text-white/80 hover:border-white/40"
          )}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
