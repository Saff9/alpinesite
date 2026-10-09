"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ApiResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string | string[]>;
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const resetForm = () => {
    setEmail("");
    setStatus("idle");
    setSuccessMessage("");
    setFieldError("");
    setGeneralError("");
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFieldError("");
    setGeneralError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await response.json()) as ApiResponse;

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setStatus("success");
      } else {
        setStatus("idle");
        const apiFieldError = data.fieldErrors?.email;
        const emailError = Array.isArray(apiFieldError)
          ? (apiFieldError[0] ?? "")
          : (apiFieldError ?? "");
        setFieldError(emailError);
        if (!emailError) {
          setGeneralError(
            data.message ?? "Something went wrong. Please try again in a moment.",
          );
        }
      }
    } catch {
      setStatus("idle");
      setGeneralError(
        "Network hiccup. Check your connection and try again in a moment.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-4"
        role="status"
        aria-live="polite"
      >
        <MailCheck
          className="mt-0.5 h-5 w-5 shrink-0 text-neutral-300"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-medium leading-relaxed text-white">
            {successMessage}
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-1.5 text-xs text-neutral-400 underline underline-offset-2 transition-colors hover:text-white"
          >
            Use a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-2 sm:flex-row"
        aria-label="Subscribe to the Alpine Club India newsletter"
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldError) setFieldError("");
            }}
            aria-invalid={Boolean(fieldError)}
            aria-describedby={fieldError ? "newsletter-email-error" : undefined}
            className="h-11 rounded-xl border border-neutral-800 bg-neutral-900/90 px-4 text-white focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:border-neutral-600"
          />
          {fieldError && (
            <p
              id="newsletter-email-error"
              className="mt-1.5 text-xs font-medium text-amber-300"
            >
              {fieldError}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 shrink-0 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 px-6 font-heading text-xs font-bold uppercase tracking-wider border border-neutral-700 shadow-xs"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      {generalError && (
        <p
          className="mt-2 text-xs font-medium text-amber-300"
          role="status"
          aria-live="polite"
        >
          {generalError}
        </p>
      )}
      <p className="mt-2.5 text-xs text-neutral-500">
        One email a month. Unsubscribe anytime with no hassle.
      </p>
    </div>
  );
}
