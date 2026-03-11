"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock3, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactDetailsProps {
  address?: string;
  phone?: string;
  email?: string;
}

export default function ContactDetails({
  address = "2417 South Lamar Blvd, Austin, TX 78704",
  phone = "(512) 555-0148",
  email = "hello@ironpeakfitness.com",
}: Partial<ContactDetailsProps>) {
  return (
    <div className="space-y-4 rounded-xl border border-white/10 bg-[#161616] p-6 text-white">
      <p className="flex gap-2 text-sm"><MapPin className="h-4 w-4 text-[#FF2E00]" /> {address}</p>
      <p className="flex gap-2 text-sm"><Clock3 className="h-4 w-4 text-[#FF2E00]" /> Mon–Fri 5 AM–10 PM, Sat–Sun 7 AM–8 PM</p>
      <p className="flex gap-2 text-sm"><CarFront className="h-4 w-4 text-[#FF2E00]" /> Free onsite parking + overflow lot behind building</p>
      <p className="flex gap-2 text-sm"><Phone className="h-4 w-4 text-[#FF2E00]" /> {phone}</p>
      <p className="flex gap-2 text-sm"><Mail className="h-4 w-4 text-[#FF2E00]" /> {email}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild className="bg-[#FF2E00] text-white hover:bg-[#e02800]"><Link href="tel:+15125550148">Call Now</Link></Button>
        <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
          <Link href="https://maps.google.com/?q=2417+South+Lamar+Blvd+Austin+TX" target="_blank">Open Map</Link>
        </Button>
      </div>
    </div>
  );
}
