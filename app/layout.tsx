// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import VoiceAgent from "./components/VoiceAgent";

export const metadata: Metadata = {
  title: "FoxAI Automation",
  description: "FoxAI - Your Ultimate AI Companion for Everything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* If you use next/script below, you don't need to put anything here */}
      </head>
      <body className="font-inter bg-[#F9FBFD] text-[#1B1F23]">
        {children}
        <VoiceAgent />
      </body>
    </html>
  );
}
