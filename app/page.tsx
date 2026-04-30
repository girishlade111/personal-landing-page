"use client"
import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main style={{ paddingTop: "80px", padding: "40px" }}>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}