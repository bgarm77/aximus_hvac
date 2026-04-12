"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

const serviceTypes = [
  "VRV/VRF Installation",
  "VRV/VRF Repair",
  "VRV/VRF Maintenance (PMA)",
  "Emergency VRF Repair",
  "Commissioning",
  "Property Portfolio Service",
  "Other / Not Sure Yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New VRF Assessment Request — Aximus HVAC");
    formData.append("from_name", "Aximus HVAC Website");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message ?? "Submission failed. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call us at (800) 555-1234.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-card-border bg-white p-8"
      >
        <h3 className="text-xl font-semibold text-navy">
          Request received. We&apos;ll be in touch within one business day.
        </h3>
        <p className="mt-3 text-text-secondary leading-relaxed">
          A VRF specialist will review your request and reply with next steps —
          usually a short scoping call, then a free site assessment. If your
          system is down right now, call{" "}
          <a href="tel:+18005551234" className="text-blue font-semibold">
            (800) 555-1234
          </a>{" "}
          for 4-hour emergency response.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-card-border bg-white p-6 sm:p-8 space-y-5"
      noValidate
    >
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-navy"
          >
            Company / Building
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
            placeholder="Acme Property Group"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-navy"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
            placeholder="(949) 555-0123"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service_type"
          className="block text-sm font-semibold text-navy"
        >
          Service Type
        </label>
        <select
          id="service_type"
          name="service_type"
          required
          defaultValue=""
          className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-sky"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceTypes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full rounded-xl border border-border-control bg-white px-3 py-2 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
          placeholder="Tell us about your system (Daikin VRV IV, Mitsubishi City Multi, etc.), building size, and what you need."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-text-secondary">
          We respond within one business day. Emergency? Call{" "}
          <a
            href="tel:+18005551234"
            className="text-blue font-semibold hover:text-navy"
          >
            (800) 555-1234
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-blue text-white text-sm font-semibold hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Request Free Assessment"}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
