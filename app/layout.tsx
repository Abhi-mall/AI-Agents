import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "MaxTern AI",
  description: "MaxTern AI - Your Ultimate AI Companion for Everything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter bg-[#F9FBFD] text-[#1B1F23]" >
        {children}
       
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </body>
    </html>
  );
}
