"use client";

import { useRef, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

const NAME_MAX = 100;
const COMPANY_MAX = 150;
const MESSAGE_MAX = 2000;
const RATE_LIMIT_MS = 10_000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const serviceTypes = [
  "VRV/VRF Installation",
  "VRV/VRF Repair",
  "VRV/VRF Maintenance (PMA)",
  "Emergency VRF Repair",
  "Commissioning",
  "Property Portfolio Service",
  "Other / Not Sure Yet",
];

function sanitize(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim();
}

function isValidUsPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [messageLength, setMessageLength] = useState(0);
  const lastSubmitRef = useRef<number>(0);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const now = Date.now();
    const elapsed = now - lastSubmitRef.current;
    if (lastSubmitRef.current > 0 && elapsed < RATE_LIMIT_MS) {
      const wait = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
      setStatus("error");
      setErrorMessage(`Please wait ${wait} seconds before submitting again.`);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if ((formData.get("botcheck") as string) ?? "") {
      setStatus("error");
      setErrorMessage("Submission blocked.");
      return;
    }

    const rawName = (formData.get("name") as string) ?? "";
    const rawCompany = (formData.get("company") as string) ?? "";
    const rawEmail = (formData.get("email") as string) ?? "";
    const rawPhone = (formData.get("phone") as string) ?? "";
    const rawService = (formData.get("service_type") as string) ?? "";
    const rawMessage = (formData.get("message") as string) ?? "";

    const name = sanitize(rawName).slice(0, NAME_MAX);
    const company = sanitize(rawCompany).slice(0, COMPANY_MAX);
    const email = sanitize(rawEmail);
    const phone = sanitize(rawPhone);
    const service = sanitize(rawService);
    const message = sanitize(rawMessage).slice(0, MESSAGE_MAX);

    if (!name) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isValidUsPhone(phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid US phone number.");
      return;
    }
    if (!serviceTypes.includes(service)) {
      setStatus("error");
      setErrorMessage("Please select a service type.");
      return;
    }
    if (!message) {
      setStatus("error");
      setErrorMessage("Please include a short message.");
      return;
    }

    setStatus("submitting");
    lastSubmitRef.current = now;

    const payload = new FormData();
    payload.append("access_key", ACCESS_KEY);
    payload.append("subject", "New VRF Assessment Request — Aximus HVAC");
    payload.append("from_name", "Aximus HVAC Website");
    payload.append("botcheck", "");
    payload.append("name", name);
    payload.append("company", company);
    payload.append("email", email);
    payload.append("phone", phone);
    payload.append("service_type", service);
    payload.append("message", message);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
        setMessageLength(0);
      } else {
        setStatus("error");
        setErrorMessage(data.message ?? "Submission failed. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call us at (000) 000-0000.");
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
          <a href="tel:+10000000000" className="text-blue font-semibold">
            (000) 000-0000
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
    >
      <div
        aria-hidden
        className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
      >
        <label htmlFor="botcheck">Leave this field empty</label>
        <input
          id="botcheck"
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy"
          >
            Name <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={NAME_MAX}
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
            maxLength={COMPANY_MAX}
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
            Email <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="mt-2 block w-full h-11 rounded-xl border border-border-control bg-white px-3 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy"
          >
            Phone <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={20}
            pattern="[\d\s().+\-]{10,20}"
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
          Service Type <span className="text-red-600" aria-hidden>*</span>
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
          Message <span className="text-red-600" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={MESSAGE_MAX}
          onChange={(e) => setMessageLength(e.target.value.length)}
          className="mt-2 block w-full rounded-xl border border-border-control bg-white px-3 py-2 text-sm text-navy placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-sky"
          placeholder="Tell us about your system (Daikin VRV IV, Mitsubishi City Multi, etc.), building size, and what you need."
        />
        <p className="mt-1 text-xs text-text-secondary text-right">
          {messageLength} / {MESSAGE_MAX}
        </p>
      </div>

      <p className="text-xs text-text-secondary">
        <span className="text-red-600" aria-hidden>*</span> Required fields
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-text-secondary">
          We respond within one business day. Emergency? Call{" "}
          <a
            href="tel:+10000000000"
            className="text-blue font-semibold hover:text-navy"
          >
            (000) 000-0000
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
