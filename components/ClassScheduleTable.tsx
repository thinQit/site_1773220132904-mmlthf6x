"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ClassItem {
  name: string;
  time: string;
  coach: string;
  intensity: string;
  duration: string;
  spots: number;
}

interface ClassScheduleTableProps {
  schedule?: Record<string, ClassItem[]>;
}

export default function ClassScheduleTable({
  schedule = {
    Monday: [
      { name: "HIIT Blast", time: "6:00 AM", coach: "Coach Maya", intensity: "High", duration: "45 min", spots: 6 },
      { name: "Power Yoga", time: "12:00 PM", coach: "Coach Eliana", intensity: "Moderate", duration: "50 min", spots: 9 },
    ],
    Tuesday: [
      { name: "Spin Burn", time: "7:00 AM", coach: "Coach Jordan", intensity: "High", duration: "40 min", spots: 4 },
      { name: "Boxing Fundamentals", time: "6:30 PM", coach: "Coach Rex", intensity: "High", duration: "60 min", spots: 7 },
    ],
    Wednesday: [
      { name: "Strength Circuit", time: "5:30 PM", coach: "Coach Theo", intensity: "High", duration: "55 min", spots: 5 },
    ],
  },
}: Partial<ClassScheduleTableProps>) {
  const days = Object.keys(schedule);
  const [activeDay, setActiveDay] = useState(days[0] || "Monday");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => setActiveDay(day)}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-bold uppercase tracking-wide transition",
              activeDay === day
                ? "border-[#FF2E00] bg-[#FF2E00] text-white"
                : "border-white/20 bg-white/5 text-white/80 hover:border-white/40"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {(schedule[activeDay] || []).map((item, idx) => (
          <Card key={item.name + idx} className="rounded-xl border-white/10 bg-[#161616] p-4 text-white">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="font-['Anton'] text-2xl uppercase">{item.name}</p>
                <p className="text-sm text-white/70">{item.time} • {item.coach}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase">
                <span className="rounded-md bg-white/10 px-2 py-1">{item.intensity}</span>
                <span className="rounded-md bg-white/10 px-2 py-1">{item.duration}</span>
                <span className="rounded-md bg-[#FF2E00] px-2 py-1 text-white">{item.spots} spots left</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
