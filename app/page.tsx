"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TimelineSection from "@/components/timeline-section"
import SkillsSection from "@/components/skills-section"
import ThreeTierSection from "@/components/three-tier-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <ThreeTierSection />
      <CTASection />
      <Footer />
    </div>
  )
}
