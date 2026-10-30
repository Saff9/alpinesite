"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send, Lock } from "lucide-react";
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
import { packagesData } from "@/data/packages";
import { cn } from "@/lib/utils";
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
  const [selectedPackage, setSelectedPackage] = useState<string>("custom");
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

  const handlePackageSelect = (slug: string) => {
    setSelectedPackage(slug);
    if (slug === "custom") return;

    const pkg = packagesData.find((p) => p.slug === slug);
    if (!pkg) return;

    if (pkg.category === "ski-packages") {
      setDestination("kashmir");
      setActivity("skiing-snowboarding");
    } else if (
      pkg.region?.toLowerCase().includes("ladakh") ||
      pkg.title.toLowerCase().includes("ladakh")
    ) {
      setDestination("ladakh");
      setActivity("expeditions");
    } else if (
      pkg.region?.toLowerCase().includes("sikkim") ||
      pkg.title.toLowerCase().includes("sikkim")
    ) {
      setDestination("sikkim");
      setActivity("trekking");
    } else {
      setDestination("kashmir");
      setActivity("trekking");
    }

    if (
      pkg.duration.includes("10") ||
      pkg.duration.includes("11") ||
      pkg.duration.includes("14")
    ) {
      setDuration("10-plus-days");
    } else if (
      pkg.duration.includes("7") ||
      pkg.duration.includes("8") ||
      pkg.duration.includes("9")
    ) {
      setDuration("7-9-days");
    } else if (pkg.duration.includes("5") || pkg.duration.includes("6")) {
      setDuration("5-6-days");
    }
  };

  // Lock background scroll when modal is open and restore on close
  useEffect(() => {
    if (isModalOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyTouch = document.body.style.touchAction;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.touchAction = originalBodyTouch;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isModalOpen]);

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

      if (detail?.packageSlug) {
        handlePackageSelect(detail.packageSlug);
      } else {
        setSelectedPackage("custom");
      }

      if (detail?.destination) {
        setDestination(detail.destination);
      } else if (!detail?.packageSlug) {
        setDestination(ctx.destination);
      }

      if (detail?.activity) {
        setActivity(detail.activity);
      } else if (!detail?.packageSlug) {
        setActivity(ctx.activity);
      }

      if (detail?.title) {
        setCustomTitle(detail.title);
      } else {
        setCustomTitle(null);
      }

      if (!detail?.packageSlug) {
        setDuration(ctx.suggestedDuration);
      }
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

    const selectedPkg = packagesData.find((p) => p.slug === selectedPackage);
    const packageName = selectedPkg ? selectedPkg.title : "Custom Tailor-Made Itinerary";

    const selectedDestObj = DESTINATIONS.find((d) => d.value === destination);
    const destName = selectedDestObj ? selectedDestObj.label : destination;

    const selectedActObj = ACTIVITIES.find((a) => a.value === activity);
    const actName = selectedActObj ? selectedActObj.label : activity;

    const durationLabel =
      DURATION_OPTIONS.find((d) => d.value === duration)?.label || duration;
    const travelerLabel =
      TRAVELER_OPTIONS.find((t) => t.value === travelers)?.label || `${travelers} Travelers`;

    const messageSummary = `Custom Itinerary Request
Package: ${packageName}
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
          email: email.trim() || undefined,
          subject: `Itinerary Request: ${packageName} (${destName})`,
          message: messageSummary,
        }),
      });
    } catch {
      // Form proceeds to WhatsApp and email fallbacks
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto overscroll-contain"
    >
      {/* Backdrop */}
      <div
        onClick={() => setModalOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Card - Elegant Rectangle with Little Rounded Corners */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-neutral-300 bg-white p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[92vh] flex flex-col">
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Body with Smooth Scrolling & Gaps */}
        <div className="overflow-y-auto pr-1 pt-6 pb-2 flex-1 scroll-smooth overscroll-contain">
          {success ? (
            <div className="py-8 text-center space-y-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-600 bg-emerald-50 text-emerald-600">
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
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba59] transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Send via WhatsApp
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                    className="h-12 rounded-lg border-neutral-300 px-8 text-xs font-bold uppercase tracking-wider hover:bg-neutral-100"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Row 0: Select Specific Package or Custom Itinerary */}
              <div>
                <Label
                  htmlFor="package-select"
                  className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2.5"
                >
                  Select Package / Trip Option
                </Label>
                <Select value={selectedPackage} onValueChange={handlePackageSelect}>
                  <SelectTrigger
                    id="package-select"
                    className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-neutral-300 max-h-72">
                    <SelectItem
                      value="custom"
                      className="rounded-md py-2.5 text-xs font-bold text-brand cursor-pointer hover:bg-neutral-100"
                    >
                      ✨ Custom Tailor-Made Itinerary
                    </SelectItem>
                    <div className="px-2 py-1 text-[10px] uppercase font-bold text-brand border-t border-neutral-100 pt-2 tracking-wider">
                      Ski Packages
                    </div>
                    {packagesData
                      .filter((p) => p.category === "ski-packages")
                      .map((p) => (
                        <SelectItem key={p.slug} value={p.slug} className="rounded-md py-2 text-xs">
                          {p.title} {p.price ? `(${p.price})` : ""}
                        </SelectItem>
                      ))}
                    <div className="px-2 py-1 text-[10px] uppercase font-bold text-brand border-t border-neutral-100 pt-2 tracking-wider">
                      Summer Packages
                    </div>
                    {packagesData
                      .filter((p) => p.category === "summer-packages")
                      .map((p) => (
                        <SelectItem key={p.slug} value={p.slug} className="rounded-md py-2 text-xs">
                          {p.title}
                        </SelectItem>
                      ))}
                    <div className="px-2 py-1 text-[10px] uppercase font-bold text-brand border-t border-neutral-100 pt-2 tracking-wider">
                      Trekking Packages
                    </div>
                    {packagesData
                      .filter((p) => p.category === "trekking")
                      .map((p) => (
                        <SelectItem key={p.slug} value={p.slug} className="rounded-md py-2 text-xs">
                          {p.title}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Row 1: Destination & Activity (Locked for specific packages, fully customizable for custom itinerary) */}
              {(() => {
                const isPackageLocked = selectedPackage !== "custom";
                return (
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="destination"
                          className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center justify-between mb-2.5"
                        >
                          <span>Destination</span>
                          {isPackageLocked && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-normal text-neutral-500 lowercase tracking-normal">
                              <Lock className="h-3 w-3 text-neutral-400" /> locked for package
                            </span>
                          )}
                        </Label>
                        <Select
                          value={destination}
                          onValueChange={(val) => setDestination(val as DestinationOption)}
                          disabled={isPackageLocked}
                        >
                          <SelectTrigger
                            id="destination"
                            className={cn(
                              "h-12 rounded-lg text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand",
                              isPackageLocked
                                ? "border-neutral-200 bg-neutral-100/80 text-neutral-700 cursor-not-allowed opacity-90"
                                : "border-neutral-300 bg-white text-neutral-900"
                            )}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg border-neutral-300">
                            {DESTINATIONS.map((dest) => (
                              <SelectItem
                                key={dest.value}
                                value={dest.value}
                                className="rounded-md py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
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
                          className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center justify-between mb-2.5"
                        >
                          <span>Activity</span>
                          {isPackageLocked && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-normal text-neutral-500 lowercase tracking-normal">
                              <Lock className="h-3 w-3 text-neutral-400" /> locked for package
                            </span>
                          )}
                        </Label>
                        <Select
                          value={activity}
                          onValueChange={(val) => setActivity(val as ActivityOption)}
                          disabled={isPackageLocked}
                        >
                          <SelectTrigger
                            id="activity"
                            className={cn(
                              "h-12 rounded-lg text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand",
                              isPackageLocked
                                ? "border-neutral-200 bg-neutral-100/80 text-neutral-700 cursor-not-allowed opacity-90"
                                : "border-neutral-300 bg-white text-neutral-900"
                            )}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-lg border-neutral-300">
                            {ACTIVITIES.map((act) => (
                              <SelectItem
                                key={act.value}
                                value={act.value}
                                className="rounded-md py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
                              >
                                {act.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    {isPackageLocked && (
                      <p className="text-[11px] font-poppins text-neutral-500 pt-1">
                        Destination &amp; activity are pre-set for this package. Switch to{" "}
                        <button
                          type="button"
                          onClick={() => handlePackageSelect("custom")}
                          className="text-brand font-semibold underline hover:text-brand-deep cursor-pointer"
                        >
                          Custom Tailor-Made Itinerary
                        </button>{" "}
                        to select any combination.
                      </p>
                    )}
                  </div>
                );
              })()}

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
                      className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-neutral-300">
                      {DURATION_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="rounded-md py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
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
                      className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium focus:border-brand focus:ring-1 focus:ring-brand"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-neutral-300">
                      {TRAVELER_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="rounded-md py-2.5 text-xs font-medium cursor-pointer hover:bg-neutral-100"
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
                    className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-1 focus:ring-brand"
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
                    className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-1 focus:ring-brand"
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
                    className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-1 focus:ring-brand"
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
                    className="h-12 rounded-lg border-neutral-300 bg-white text-xs font-medium font-poppins focus:border-brand focus:ring-1 focus:ring-brand"
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
                  className="min-h-[100px] p-4 rounded-lg border-neutral-300 bg-white text-xs font-medium font-poppins resize-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>

              {/* Submit Button with Friendly Human Name */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-13 rounded-lg bg-brand font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-deep transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Planning Your Trip...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Plan My Trip
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
