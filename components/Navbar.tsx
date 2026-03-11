"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Dumbbell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText?: string;
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  logoText = "Iron Peak Fitness",
  items = [
    { label: "Classes", href: "/classes" },
    { label: "Trainers", href: "/trainers" },
    { label: "Membership", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLabel = "Start Free Trial",
  ctaHref = "/contact#contact-form",
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="h-5 w-5 text-primary" />
          <span className="font-heading text-xl uppercase tracking-wide">
            {logoText}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/90 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="rounded-lg px-5 py-2 font-bold uppercase tracking-wide"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-all md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:bg-card hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full rounded-lg font-bold uppercase tracking-wide">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
