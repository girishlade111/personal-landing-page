"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TimelineSection from "@/components/timeline-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
      </main>
    </div>
  )
}