import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Content Security Policy. Kept pragmatic because:
// - Microsoft Clarity injects an inline bootstrap script in layout.tsx
// - 17 JSON-LD blocks use dangerouslySetInnerHTML
// - Next.js streams inline RSC payload scripts
// So 'unsafe-inline' stays for script-src. Dev adds 'unsafe-eval' for HMR.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://www.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https://www.google-analytics.com https://*.clarity.ms https://*.google.com https://*.gstatic.com https://*.googleusercontent.com",
  "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://*.google-analytics.com https://*.clarity.ms https://c.bing.com",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
