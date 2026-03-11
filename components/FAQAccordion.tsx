"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({
  items = [
    { question: "Do you offer trial memberships?", answer: "Yes. New members can claim a free 7-day trial with full class access." },
    { question: "Are beginners welcome?", answer: "Absolutely. Every class has scalable options and coach support." },
    { question: "Can I freeze my membership?", answer: "Yes, memberships can be frozen for up to 60 days per year." },
  ],
}: Partial<FAQAccordionProps>) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.question} className="rounded-xl border border-white/10 bg-[#161616] text-white">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between p-4 text-left"
          >
            <span className="font-bold uppercase tracking-wide">{item.question}</span>
            <ChevronDown className={cn("h-4 w-4 transition", open === i && "rotate-180")} />
          </button>
          {open === i ? <div className="px-4 pb-4 text-sm text-white/80">{item.answer}</div> : null}
        </div>
      ))}
    </div>
  );
}
