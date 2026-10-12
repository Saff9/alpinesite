"use client";

import { useState } from "react";
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

const SUBJECTS = [
  "Planning a trip",
  "Custom itinerary",
  "Group / corporate booking",
  "Existing booking",
  "Something else",
] as const;

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const emptyForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECTS[0],
  message: "",
};

interface ApiResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const setField = (field: keyof ContactFormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setStatus("idle");
    setSuccessMessage("");
    setGeneralError("");
    setFieldErrors({});
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setGeneralError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: form.phone.trim() || undefined,
        }),
      });
      const data = (await response.json()) as ApiResponse;

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setStatus("success");
      } else {
        setStatus("idle");
        setFieldErrors(data.fieldErrors ?? {});
        setGeneralError(
          data.message ?? "Something went wrong. Please try again in a moment.",
        );
      }
    } catch {
      setStatus("idle");
      setGeneralError(
        "Network hiccup, check your connection and try again, or WhatsApp us directly. That always gets through.",
      );
    }
  }

  const errorText = (field: string) =>
    fieldErrors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 text-sm text-destructive">
        {fieldErrors[field]}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-300 bg-green-50 p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700"
        >
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-semibold text-green-900">
          Message received
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-green-800">
          {successMessage}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 border-green-300 bg-white text-green-800 hover:bg-green-100 hover:text-green-900"
          onClick={resetForm}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border/80 bg-card p-6 shadow-xl hover:shadow-2xl transition-all duration-300 sm:p-8 md:p-10"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="contact-name">
            Name <span className="text-terracotta" aria-hidden="true">*</span>
          </Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => setField("name")(e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className="mt-2 h-11"
          />
          {errorText("name")}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="contact-email">
            Email <span className="text-terracotta" aria-hidden="true">*</span>
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => setField("email")(e.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            className="mt-2 h-11"
          />
          {errorText("email")}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="contact-phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setField("phone")(e.target.value)}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
            className="mt-2 h-11"
          />
          {errorText("phone")}
        </div>

        <div className="sm:col-span-1">
          <Label htmlFor="contact-subject">What&rsquo;s this about?</Label>
          <Select
            value={form.subject}
            onValueChange={(value) => setField("subject")(value)}
          >
            <SelectTrigger
              id="contact-subject"
              className="mt-2 h-11 w-full"
              aria-invalid={Boolean(fieldErrors.subject)}
            >
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errorText("subject")}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="contact-message">
            Your message <span className="text-terracotta" aria-hidden="true">*</span>
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            rows={6}
            value={form.message}
            onChange={(e) => setField("message")(e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
            className="mt-2 min-h-32"
          />
          {errorText("message")}
        </div>
      </div>

      {generalError && (
        <p
          className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          role="alert"
        >
          {generalError}
        </p>
      )}

      <div className="mt-6 flex flex-col items-center sm:items-start">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-[80%] max-w-sm border border-transparent bg-brand px-7 py-3 text-white shadow-md hover:bg-brand-deep sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
