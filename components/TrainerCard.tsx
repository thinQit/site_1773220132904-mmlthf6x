"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface TrainerCardProps {
  name?: string;
  imageSrc?: string;
  specialties?: string[];
  certifications?: string[];
  signatureSession?: string;
}

export default function TrainerCard({
  name = "Coach Maya Torres",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
  specialties = ["HIIT", "Strength Conditioning"],
  certifications = ["NASM-CPT", "Precision Nutrition L1"],
  signatureSession = "Peak Power Intervals",
}: Partial<TrainerCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border-white/10 bg-[#161616] text-white">
      <Image src={imageSrc} alt={name} width={1200} height={800} unoptimized className="h-64 w-full object-cover" />
      <div className="space-y-4 p-5">
        <h3 className="font-['Anton'] text-3xl uppercase">{name}</h3>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#FF2E00]">Specialties</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {specialties.map((item) => (
              <span key={item} className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold uppercase">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#FF2E00]">Certifications</p>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            {certifications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/90"><span className="font-bold text-[#FF2E00]">Signature:</span> {signatureSession}</p>
      </div>
    </Card>
  );
}
