"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

export function LastMinuteTripForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [interest, setInterest] = useState("Gulmarg Skiing & Snow Powder");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const messageText = `URGENT Last-Minute Trip Inquiry
Name: ${name}
Phone: ${phone}
Expected Arrival: ${arrivalDate}
Trip Interest: ${interest}`;

    const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      `Hello Alpine Club India!\n\n${messageText}`
    )}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: site.email,
          subject: `URGENT Last-Minute Trip: ${interest} - ${name}`,
          message: messageText,
        }),
      });
    } catch {
      // Continue to WhatsApp fallback
    }

    setWhatsappUrl(waLink);
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="py-6 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h4 className="font-heading text-lg font-bold text-neutral-900">
          Request Received
        </h4>
        <p className="text-xs text-neutral-600 font-poppins">
          Your urgent request has been emailed to our Gulmarg operations desk. You can also connect instantly on WhatsApp:
        </p>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba59] transition-all w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rahul Sharma"
          className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
            Expected Arrival
          </label>
          <input
            type="text"
            name="travel_date"
            required
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            placeholder="e.g. Tomorrow / 25 Oct"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-heading mb-1">
          Trip Interest
        </label>
        <select
          name="package_interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand focus:outline-none"
        >
          <option value="Gulmarg Skiing & Snow Powder">Gulmarg Skiing &amp; Snow Powder</option>
          <option value="Kashmir Valley Tour">Kashmir Valley (Srinagar, Gulmarg, Pahalgam)</option>
          <option value="Ladakh Mountain Trip">Ladakh &amp; Leh Short Circuit</option>
          <option value="Custom Urgent Trip">Other / Custom Quick Trip</option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-deep h-11 flex items-center justify-center gap-2 cursor-pointer"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Urgent Request
          </>
        )}
      </Button>
    </form>
  );
}
