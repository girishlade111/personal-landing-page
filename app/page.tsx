"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}