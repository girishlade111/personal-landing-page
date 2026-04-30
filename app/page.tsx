"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TimelineSection from "@/components/timeline-section"
import SkillsSection from "@/components/skills-section"
import ThreeTierSection from "@/components/three-tier-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider max-w-6xl mx-auto" />
        <AboutSection />
        <div className="section-divider max-w-6xl mx-auto" />
        <TimelineSection />
        <div className="section-divider max-w-6xl mx-auto" />
        <SkillsSection />
        <div className="section-divider max-w-6xl mx-auto" />
        <ThreeTierSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}