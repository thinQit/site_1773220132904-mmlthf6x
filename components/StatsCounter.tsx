"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface StatsCounterProps {
  stats?: Stat[];
}

export default function StatsCounter({
  stats = [
    { label: "Active Members", value: 1800, suffix: "+" },
    { label: "Classes / Week", value: 85, suffix: "+" },
    { label: "Certified Coaches", value: 22, suffix: "" },
    { label: "Avg. Attendance", value: 96, suffix: "%" },
  ],
}: Partial<StatsCounterProps>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStart(true);
    }, { threshold: 0.25 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const startAt = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startAt) / duration, 1);
      setCounts(stats.map((s) => Math.floor(s.value * p)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, stats]);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={stat.label} className="rounded-xl border border-white/10 bg-[#161616] p-5 text-white">
          <p className="font-['Anton'] text-4xl text-[#FF2E00]">{counts[i]}{stat.suffix || ""}</p>
          <p className="mt-1 text-sm uppercase tracking-wide text-white/75">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
