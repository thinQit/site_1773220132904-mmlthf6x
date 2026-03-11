"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Clock3, Phone, Mail } from "lucide-react";

interface FooterProps {
  businessName?: string;
}

export default function Footer({ businessName = "Iron Peak Fitness" }: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <h3 className="font-heading text-2xl uppercase">{businessName}</h3>
          <p className="text-sm text-muted-foreground">Built for Austin athletes ready to level up.</p>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> 1717 S Lamar Blvd, Austin, TX 78704</p>
          <p className="flex items-start gap-2"><Clock3 className="mt-0.5 h-4 w-4 text-primary" /> Mon–Fri 5:30 AM–9:00 PM, Sat 7:00 AM–2:00 PM, Sun 8:00 AM–12:00 PM</p>
          <p className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> (512) 555-0199</p>
          <p className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@ironpeakfitness.com</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/classes" className="hover:text-primary">Class Schedule</Link></li>
            <li><Link href="/trainers" className="hover:text-primary">Trainers</Link></li>
            <li><Link href="/pricing" className="hover:text-primary">Membership</Link></li>
            <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link href="/contact#contact-form" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">Follow</h4>
          <div className="mb-4 flex gap-3">
            <Link href="https://instagram.com/ironpeakfitness" className="rounded-md border border-border p-2 hover:border-primary" target="_blank" rel="noopener"><Instagram className="h-4 w-4" /></Link>
            <Link href="https://youtube.com/@ironpeakfitness" className="rounded-md border border-border p-2 hover:border-primary" target="_blank" rel="noopener"><Facebook className="h-4 w-4" /></Link>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></p>
            <p><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
