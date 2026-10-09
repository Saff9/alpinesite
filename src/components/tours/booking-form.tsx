"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";
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
import { formatINR } from "@/data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldKey = "name" | "email" | "phone" | "travelDate" | "travelers" | "message";

type FieldErrors = Partial<Record<FieldKey, string>>;

interface BookingApiResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}

interface BookingFormProps {
  tourSlug: string;
  tourTitle: string;
  tourPrice: number;
}

const TRAVELLER_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1);

export function BookingForm({ tourSlug, tourTitle, tourPrice }: BookingFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [message, setMessage] = useState("");

  // Sync the "min" date attribute with the browser clock after mount, so SSR and
  // hydration always agree and the value is the traveller's actual today.
  const dateInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (dateInputRef.current) {
      dateInputRef.current.min = new Date().toISOString().split("T")[0];
    }
  }, []);

  const errorText = (key: FieldKey) =>
    fieldErrors[key] ? (
      <p id={`booking-${key}-error`} className="text-xs font-medium text-destructive">
        {fieldErrors[key]}
      </p>
    ) : null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    setGeneralError("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug,
          tourTitle,
          name,
          email,
          phone,
          travelDate,
          travelers: Number(travellers),
          message,
        }),
      });

      const data = (await response.json()) as BookingApiResponse;

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setStatus("success");
      } else {
        const errors: FieldErrors = {};
        if (data.fieldErrors) {
          for (const [key, value] of Object.entries(data.fieldErrors)) {
            errors[key as FieldKey] = value;
          }
        }
        setFieldErrors(errors);
        setGeneralError(data.message);
        setStatus("error");
      }
    } catch {
      setGeneralError(
        "Network hiccup on our side — please try again, or WhatsApp us and we'll sort it out in minutes.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40"
      >
        <div className="flex gap-3">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
              Enquiry received
            </p>
            <p className="mt-1 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
              {successMessage}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
              We&apos;ll call you on the number you shared to fine-tune dates, stays and
              pickups — nothing is charged until you say yes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={`Book ${tourTitle}`}>
      {status === "error" && generalError && (
        <p
          role="alert"
          className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm font-medium text-destructive"
        >
          {generalError}
        </p>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="booking-name">
            Your name <span className="text-terracotta">*</span>
          </Label>
          <Input
            id="booking-name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Aarav Mehta"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "booking-name-error" : undefined}
          />
          {errorText("name")}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-email">
            Email <span className="text-terracotta">*</span>
          </Label>
          <Input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "booking-email-error" : undefined}
          />
          {errorText("email")}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-phone">
            Phone / WhatsApp <span className="text-terracotta">*</span>
          </Label>
          <Input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 1234567890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "booking-phone-error" : undefined}
          />
          {errorText("phone")}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="booking-date">Travel date</Label>
            <Input
              id="booking-date"
              name="travelDate"
              type="date"
              ref={dateInputRef}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              aria-invalid={Boolean(fieldErrors.travelDate)}
              aria-describedby={fieldErrors.travelDate ? "booking-date-error" : undefined}
            />
            {errorText("travelDate")}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="booking-travellers">Travellers</Label>
            <Select value={travellers} onValueChange={setTravellers}>
              <SelectTrigger id="booking-travellers" className="h-9 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TRAVELLER_OPTIONS.map((count) => (
                  <SelectItem key={count} value={String(count)}>
                    {count} {count === 1 ? "traveller" : "travellers"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="booking-message">Anything we should know?</Label>
          <Textarea
            id="booking-message"
            name="message"
            placeholder="Honeymoon upgrades, veg meals, kids in the group, flexible dates…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "booking-message-error" : undefined}
          />
          {errorText("message")}
        </div>

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 w-full gap-2 bg-terracotta text-white hover:bg-terracotta-deep"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending enquiry…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send enquiry
            </>
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-pine" aria-hidden="true" />
          No advance payment · Reply within a few hours
        </p>

        <p className="text-center text-xs text-muted-foreground">
          Enquiry only — {formatINR(tourPrice)} per person, final quote after we talk.
        </p>
      </div>
    </form>
  );
}
