import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aximushvac.com"),
  title: {
    default: "Aximus HVAC | VRV/VRF Service Specialists | California",
    template: "%s | Aximus HVAC",
  },
  description:
    "Commercial VRV/VRF installation, repair, and maintenance across California. 4-hour response, transparent documentation, Daikin and Mitsubishi certified technicians.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aximus HVAC",
    url: "https://aximushvac.com",
    images: [
      {
        url: "/images/home/hero.webp",
        width: 1200,
        height: 900,
        alt: "Aximus HVAC — Commercial VRV/VRF service specialists in California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/home/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
