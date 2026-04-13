import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEGIS - Ransomware Defense Platform",
  description:
    "Detect, simulate, and neutralize ransomware threats before they strike. AEGIS provides proactive monitoring, attack simulation, and automated defense mechanisms for enterprise security.",
};

export const viewport: Viewport = {
  themeColor: "#050B14",
  width: "device-width",
  initialScale: 1,
};

import { Spotlight } from "@/components/spotlight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} noise-overlay min-h-screen bg-background font-sans antialiased`}
      >
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
