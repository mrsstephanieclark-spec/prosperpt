import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prosper PT & Wellness | Physical Therapy & Pelvic Health in Shelbyville, KY",
    template: "%s | Prosper PT & Wellness"
  },
  description: "Dr. Meg Raymer-Brown, Dr. Whitney Ensor, and Dr. Kim Wilson offer doctorate-level, 1-on-1 self-pay physical therapy, pelvic health, and performance coaching in Shelbyville, KY.",
  metadataBase: new URL("https://prosperptky.com"),
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="font-sans min-h-screen bg-cream text-primary flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
