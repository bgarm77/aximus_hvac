import type { Metadata } from "next";
import Link from "next/link";

const PHONE_DISPLAY = "(800) 555-1234";
const PHONE_HREF = "tel:+18005551234";
const PRIVACY_EMAIL = "privacy@aximushvac.com";
const SITE_URL = "https://aximushvac.com";
const LAST_UPDATED = "April 12, 2026";
const COMPANY = "Aximus HVAC Solutions, Inc.";

export const metadata: Metadata = {
  title: "Privacy Policy | Aximus HVAC | California",
  description:
    "How Aximus HVAC Solutions, Inc. collects, uses, and protects personal information. CCPA rights for California residents, cookie policy, and contact details.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Aximus HVAC",
    description:
      "Privacy policy and California Consumer Privacy Act (CCPA) rights for Aximus HVAC Solutions, Inc.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${SITE_URL}/privacy-policy`,
  name: "Privacy Policy",
  description:
    "Privacy policy for Aximus HVAC Solutions, Inc., including CCPA rights for California residents.",
  dateModified: "2026-04-12",
  publisher: {
    "@type": "HVACBusiness",
    name: COMPANY,
    url: SITE_URL,
    telephone: "+1-800-555-1234",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      {/* 1. HERO */}
      <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
            Legal
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-navy leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            This policy explains what information {COMPANY} collects, how we use it, and the
            rights you have under California law.
          </p>
          <p className="mt-4 text-sm text-text-secondary">
            <strong>Last updated:</strong> {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* 2. BODY */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Intro */}
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              {COMPANY} (&ldquo;Aximus,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates aximushvac.com and provides commercial VRV/VRF HVAC
              services across California. We respect your privacy and only collect the
              information we need to deliver and improve our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Information We Collect
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>We collect information you give us directly and information collected automatically when you use our site.</p>
              <h3 className="text-lg font-semibold text-brand-navy mt-6">Information you provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details: name, company, email, phone number, and property address submitted through our contact form or by phone.</li>
                <li>Service details: building type, equipment make and model, service history, and notes you share when requesting a quote or assessment.</li>
                <li>Correspondence: emails, text messages, and call records related to your service request.</li>
              </ul>
              <h3 className="text-lg font-semibold text-brand-navy mt-6">Information collected automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device and browser data: IP address, browser type, operating system, and referring URL.</li>
                <li>Usage data: pages viewed, time on page, and links clicked.</li>
                <li>Cookies and similar technologies (see Cookies section below).</li>
              </ul>
            </div>
          </div>

          {/* How We Use It */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              How We Use It
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your service requests, quote requests, and questions.</li>
                <li>Schedule, dispatch, and document HVAC service at your site.</li>
                <li>Send service reports, maintenance reminders, and invoices.</li>
                <li>Improve our website, content, and customer experience.</li>
                <li>Comply with legal, tax, warranty, and regulatory obligations.</li>
                <li>Prevent fraud and protect our team and clients.</li>
              </ul>
              <p>
                We do not sell your personal information. We do not share it with third parties
                for their own marketing purposes. We share it only with service providers who
                help us operate the business (for example, form processing, email delivery, and
                analytics), and only to the extent needed to perform those services.
              </p>
            </div>
          </div>

          {/* CCPA Rights */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Your California Privacy Rights (CCPA)
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Under the California Consumer Privacy Act (CCPA) and the California Privacy
                Rights Act (CPRA), California residents have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to know.</strong> Request the categories and specific pieces of personal information we have collected about you in the past 12 months.
                </li>
                <li>
                  <strong>Right to delete.</strong> Request deletion of personal information we collected from you, subject to legal exceptions.
                </li>
                <li>
                  <strong>Right to correct.</strong> Request correction of inaccurate personal information.
                </li>
                <li>
                  <strong>Right to opt out of sale or sharing.</strong> We do not sell or share personal information for cross-context behavioral advertising. There is nothing to opt out of.
                </li>
                <li>
                  <strong>Right to limit use of sensitive personal information.</strong> We do not use or disclose sensitive personal information beyond what is needed to deliver our services.
                </li>
                <li>
                  <strong>Right to non-discrimination.</strong> We will not deny service, charge different prices, or provide different service quality because you exercised a CCPA right.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="text-brand-blue font-semibold hover:text-brand-navy"
                >
                  {PRIVACY_EMAIL}
                </a>{" "}
                or call {PHONE_DISPLAY}. We will verify your identity before responding and aim
                to reply within 45 days as required by law. You may use an authorized agent; we
                will ask for written permission and verify the agent&apos;s identity.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Cookies</h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>
                We use cookies and similar technologies to make the site work, remember your
                preferences, and measure traffic. The cookies we use fall into three categories:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Strictly necessary.</strong> Required for core site features like form submission and security.
                </li>
                <li>
                  <strong>Analytics.</strong> Help us understand which pages are useful and where visitors get stuck. Data is aggregated and does not identify individuals.
                </li>
                <li>
                  <strong>Functional.</strong> Remember preferences like which forms you have already submitted.
                </li>
              </ul>
              <p>
                You can disable cookies in your browser settings. If you do, some parts of the
                site may not work as intended. We do not use cookies for cross-site advertising.
              </p>
            </div>
          </div>

          {/* Data Retention & Security */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Data Retention and Security
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>
                We keep personal information only as long as needed for the purposes described
                here or as required by law (for example, tax and warranty records). We use
                reasonable administrative, technical, and physical safeguards to protect your
                information. No system is perfectly secure, so we cannot guarantee absolute
                security.
              </p>
            </div>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Changes to This Policy
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>
                We may update this policy from time to time. When we do, we will revise the
                &ldquo;Last updated&rdquo; date at the top of the page. Material changes will be
                highlighted on the site or communicated directly where appropriate.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Contact for Privacy Inquiries
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
              <p>
                For questions about this policy or to exercise your California privacy rights,
                reach us at:
              </p>
              <div className="bg-white border border-card-border rounded-2xl p-6">
                <p className="font-semibold text-brand-navy">{COMPANY}</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="text-brand-blue font-semibold hover:text-brand-navy"
                  >
                    {PRIVACY_EMAIL}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={PHONE_HREF}
                    className="text-brand-blue font-semibold hover:text-brand-navy"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>State: California, USA</p>
              </div>
              <p>
                Prefer a form? Use our{" "}
                <Link
                  href="/contact"
                  className="text-brand-blue font-semibold hover:text-brand-navy"
                >
                  contact page
                </Link>
                . For company background, see{" "}
                <Link
                  href="/about"
                  className="text-brand-blue font-semibold hover:text-brand-navy"
                >
                  About Aximus
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
