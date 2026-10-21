"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { site } from "@/data/site";
import {
  getItineraryContextByPath,
  DESTINATIONS,
  ACTIVITIES,
  type DestinationOption,
  type ActivityOption,
  type ItineraryModalDetail,
} from "@/data/itinerary-context";

interface DynamicItineraryModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  pathname?: string;
}

const DURATION_OPTIONS = [
  { value: "3-4-days", label: "3 – 4 Days" },
  { value: "5-6-days", label: "5 – 6 Days" },
  { value: "7-9-days", label: "7 – 9 Days" },
  { value: "10-plus-days", label: "10+ Days" },
  { value: "custom-duration", label: "Custom Duration" },
];

const TRAVELER_OPTIONS = [
  { value: "1", label: "1 Traveler" },
  { value: "2", label: "2 Travelers" },
  { value: "3-5", label: "3 – 5 Travelers" },
  { value: "6-plus", label: "6+ Travelers" },
  { value: "custom-group", label: "Custom Group" },
];

export function DynamicItineraryModal({
  open: controlledOpen,
  onOpenChange,
  pathname = "",
}: DynamicItineraryModalProps) {
  const context = getItineraryContextByPath(pathname);

  // Internal open state for global event triggering
  const [internalOpen, setInternalOpen] = useState(false);
  const isModalOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setModalOpen = (state: boolean) => {
    setInternalOpen(state);
    onOpenChange?.(state);
  };

  // Form State
  const [customTitle, setCustomTitle] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState<DestinationOption>(context.destination);
  const [activity, setActivity] = useState<ActivityOption>(context.activity);
  const [duration, setDuration] = useState(context.suggestedDuration);
  const [travelers, setTravelers] = useState("2");
  const [travelDates, setTravelDates] = useState("");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // Sync with route context changes
  useEffect(() => {
    if (isModalOpen) {
      const ctx = getItineraryContextByPath(pathname);
      setDestination((prev) => prev || ctx.destination);
      setActivity((prev) => prev || ctx.activity);
      setDuration((prev) => prev || ctx.suggestedDuration);
      setSuccess(false);
      setWhatsappUrl(null);
    }
  }, [isModalOpen, pathname]);

  // Global event listener for any button across the entire website
  useEffect(() => {
    const handleGlobalOpen = (e: Event) => {
      const detail = (e as CustomEvent<ItineraryModalDetail | undefined>).detail;
      const ctx = getItineraryContextByPath(pathname);

      if (detail?.destination) {
        setDestination(detail.destination);
      } else {
        setDestination(ctx.destination);
      }

      if (detail?.activity) {
        setActivity(detail.activity);
      } else {
        setActivity(ctx.activity);
      }

      if (detail?.title) {
        setCustomTitle(detail.title);
      } else {
        setCustomTitle(null);
      }

      setDuration(ctx.suggestedDuration);
      setSuccess(false);
      setWhatsappUrl(null);
      setModalOpen(true);
    };

    window.addEventListener("open-itinerary-modal", handleGlobalOpen);
    return () => window.removeEventListener("open-itinerary-modal", handleGlobalOpen);
  }, [pathname]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const selectedDestObj = DESTINATIONS.find((d) => d.value === destination);
    const destName = selectedDestObj ? selectedDestObj.label : destination;

    const selectedActObj = ACTIVITIES.find((a) => a.value === activity);
    const actName = selectedActObj ? selectedActObj.label : activity;

    const durationLabel =
      DURATION_OPTIONS.find((d) => d.value === duration)?.label || duration;
    const travelerLabel =
      TRAVELER_OPTIONS.find((t) => t.value === travelers)?.label || `${travelers} Travelers`;

    const messageSummary = `Custom Itinerary Request
Name: ${name}
Phone: ${phone}
Email: ${email || "Not specified"}
Destination: ${destName}
Activity: ${actName}
Duration: ${durationLabel}
Travelers: ${travelerLabel}
Travel Dates: ${travelDates || "Flexible"}
Requirements & Notes: ${notes || "None"}`;

    const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      `Hello Alpine Club India!\n\n${messageSummary}`
    )}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          subject: `Itinerary Request: ${destName} - ${actName}`,
          message: messageSummary,
        }),
      });
    } catch {
      // WhatsApp fallback continues seamlessly
    }

    setWhatsappUrl(waLink);
    setSubmitting(false);
    setSuccess(true);
  };

  if (!isModalOpen) return null;

  const displayTitle = customTitle || context.title;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={() => setModalOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Card - Pure Rectangle & Generous Spacing */}
      <div className="relative w-full max-w-3xl rounded-none border border-neutral-300 bg-white p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-neutral-200 pb-5 shrink-0">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-neutral-950">
              {displayTitle}
            </h2>
            <p className="mt-1 font-poppins text-xs sm:text-sm text-neutral-600">
              Direct mountain coordination with certified local Himalayan guides.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            aria-label="Close dialog"
            className="flex h-9 w-9 items-center justify-center rounded-none border border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Body with Good Spacing & Gaps */}
        <div className="overflow-y-auto pr-1 pt-6 pb-2 flex-1">
          {success ? (
            <div className="py-8 text-center space-y-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-none border border-emerald-600 bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900">
                  Itinerary Request Prepared
                </h3>
                <p className="mx-auto max-w-lg font-poppins text-xs sm:text-sm text-neutral-600">
                  Your requirements are compiled. Connect directly with our lead mountain guide on WhatsApp for immediate confirmation and route details.
                </p>
              </div>
              {whatsappUrl && (
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-none bg-[#25D366] px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba59] transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Send via WhatsApp
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                    className="h-12 rounded-none border-neutral-300 px-8 text-xs font-bold uppercase tracking-wider hover:bg-neutral-100"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Row 1: Destination & Activity (Main only + Custom Itinerary) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="destination"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Destination
                  </Label>
                  <Select
                    value={destination}
                    onValueChange={(val) => setDestination(val as DestinationOption)}
                  >
                    <SelectTrigger
                      id="destination"
                      className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-0"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-neutral-300">
                      {DESTINATIONS.map((dest) => (
                        <SelectItem
                          key={dest.value}
                          value={dest.value}
                          className="rounded-none py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
                        >
                          {dest.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="activity"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Activity
                  </Label>
                  <Select
                    value={activity}
                    onValueChange={(val) => setActivity(val as ActivityOption)}
                  >
                    <SelectTrigger
                      id="activity"
                      className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-0"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-neutral-300">
                      {ACTIVITIES.map((act) => (
                        <SelectItem
                          key={act.value}
                          value={act.value}
                          className="rounded-none py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
                        >
                          {act.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 2: Duration, Group Size & Travel Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="duration"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Duration
                  </Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger
                      id="duration"
                      className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-0"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-neutral-300">
                      {DURATION_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="rounded-none py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="travelers"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Travelers
                  </Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger
                      id="travelers"
                      className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-0"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-neutral-300">
                      {TRAVELER_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="rounded-none py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="travelDates"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Travel Dates
                  </Label>
                  <Input
                    id="travelDates"
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-0"
                  />
                </div>
              </div>

              {/* Row 3: Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-0"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Phone / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-0"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-none border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-0"
                  />
                </div>
              </div>

              {/* Row 4: Custom Notes & Specific Requests */}
              <div>
                <Label
                  htmlFor="notes"
                  className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                >
                  Special Requirements
                </Label>
                <Textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px] p-4 rounded-none border-neutral-300 bg-white text-xs font-medium font-poppins resize-none focus:border-brand focus:ring-0"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-13 rounded-none bg-brand font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-deep transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Request Tailor-Made Itinerary
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
