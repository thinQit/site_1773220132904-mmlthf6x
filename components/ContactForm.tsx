'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import React, { useRef } from 'react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = 'Contact Us',
  subheadline = 'Have a question about classes, memberships, or personal coaching? Send us a message.',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const iconMap: Record<string, React.ElementType> = { Mail, MapPin, Phone, Sparkles };

  const formRef = useRef<HTMLFormElement | null>(null);

  // Basic fallback for demo: "submit" opens mailto
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(formRef.current!);
    const fullName = data.get('fullName') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const interest = data.get('interest') || '';
    const preferredTime = data.get('preferredTime') || '';
    const message = data.get('message') || '';

    // Fallback: open mailto with key fields
    const mailtoRecipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@ironpeakfitness.com';
    const subject = encodeURIComponent(`Inquiry from ${fullName} (${interest})`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nPreferred contact time: ${preferredTime}\n\n${message}`
    );
    window.open(`mailto:${mailtoRecipient}?subject=${subject}&body=${body}`, '_blank');
  }

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="rounded-xl border border-border bg-card">
            <CardContent className="p-6">
              <form
                className="space-y-4"
                ref={formRef}
                autoComplete="on"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-foreground">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    placeholder="Jordan Smith"
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    placeholder="jordan@email.com"
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    placeholder="(512) 555-0123"
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="mb-1 block text-sm font-medium text-foreground">
                    I’m interested in<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select option
                    </option>
                    <option value="Free intro session">Free intro session</option>
                    <option value="Membership">Membership</option>
                    <option value="Personal training">Personal training</option>
                    <option value="Group classes">Group classes</option>
                    <option value="Corporate wellness">Corporate wellness</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredTime" className="mb-1 block text-sm font-medium text-foreground">
                    Best time to reach me
                  </label>
                  <select
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    id="preferredTime"
                    name="preferredTime"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Morning">Morning</option>
                    <option value="Midday">Midday</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    id="message"
                    name="message"
                    placeholder="My goals are fat loss and strength. I can train 3 days/week—what plan do you recommend?"
                    rows={5}
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to receive communication from Iron Peak Fitness. You can opt out anytime.
                </p>
                <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-6">
              {contactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || Sparkles;
                return (
                  <div key={i} className="flex items-start gap-4">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                    <div>
                      <p className="font-semibold uppercase text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
