"use client";

import { useState, type FormEvent } from "react";
import { BRAND } from "@/lib/constants";

/**
 * Contact form — posts to /api/contact, which sends via Resend.
 * Service param can be pre-selected via ?service=defender-shield etc;
 * the parent page reads searchParams and passes it as `defaultService`.
 *
 * Lead-only positioning: this form is for free-consultation requests, not
 * payments. The Defender Shield path uses the same form with a different
 * pre-selected service.
 */

const SERVICES = [
  { value: "roofing", label: "Roofing — replacement, repair, inspection" },
  { value: "gutter", label: "Gutters — installation, replacement, cleaning, repair" },
  { value: "windows", label: "Windows — replacement" },
  { value: "storm-damage", label: "Storm damage / insurance claim" },
  { value: "defender-shield", label: "The Defender Shield (annual plan)" },
  { value: "other", label: "Something else" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || `Submission failed (${res.status})`);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-green-200 bg-green-50 p-6"
        role="status"
        aria-live="polite"
      >
        <h3
          className="text-lg font-semibold"
          style={{ color: BRAND.colors.navy }}
        >
          Thanks — we&apos;ve got it.
        </h3>
        <p className="mt-2 text-sm text-gray-700">
          A team member will reach out within one business day. If your situation
          is urgent (active leak, storm damage, safety concern), please call us
          at (608) 925-3576 — we triage phone calls ahead of email.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        label="Address (optional)"
        name="address"
        autoComplete="street-address"
      />

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold"
          style={{ color: BRAND.colors.navy }}
        >
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService ?? ""}
          required
          className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="" disabled>
            Pick the service that best fits…
          </option>
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold"
          style={{ color: BRAND.colors.navy }}
        >
          Tell us a bit about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          placeholder="Roof age, current symptoms, recent storm exposure, anything else useful."
        />
      </div>

      {/* Honeypot — bots will fill this; real users won't see it. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage ||
            "We couldn't send your message. Try again, or call (608) 925-3576."}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white disabled:opacity-60"
        style={{ backgroundColor: BRAND.colors.green }}
      >
        {submitting ? "Sending…" : "Request a Free Estimate"}
      </button>
      <p className="text-xs text-gray-500">
        We&apos;ll respond within one business day. No spam, no automated
        sales sequences — a real person will reach out.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold"
        style={{ color: BRAND.colors.navy }}
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
    </div>
  );
}
