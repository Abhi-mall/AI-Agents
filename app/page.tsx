"use client";

import Script from "next/script";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Solutions from "@/app/components/Solution";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CaseStudies from "@/app/components/CaseStudies";
import CTABanner from "@/app/components/CTABanner";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <WhyChooseUs />
      <CaseStudies />
      <CTABanner />
      <Footer />

      {/* ElevenLabs Voice Agent */}
      <elevenlabs-convai agent-id="agent_4301k924wv47esbash1bb186nqwm"></elevenlabs-convai>

      {/* Load ElevenLabs Widget Script */}
     
    </>
  );
}
