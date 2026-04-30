"use client"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
})

export default function StudentGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#1a1a2e",
    showAtmosphere: true,
    atmosphereColor: "#6366f1",
    atmosphereAltitude: 0.15,
    emissive: "#312e81",
    emissiveIntensity: 0.1,
    shininess: 0.1,
    polygonColor: "rgba(99, 102, 241, 0.3)",
    ambientLight: "#404040",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 40.7128, lng: -74.006 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    showGraticules: false,
    graticulesColor: "rgba(99, 102, 241, 0.3)",
    graticulesOpacity: 0.1,
  }

  const colors = ["#6366f1", "#818cf8", "#a5b4fc"]

  const connections = [
    { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3 },
    { startLat: 40.7128, startLng: -74.006, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.4 },
    { startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5 },
    { startLat: 40.7128, startLng: -74.006, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.4 },
    { startLat: 40.7128, startLng: -74.006, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.3 },
    { startLat: 40.7128, startLng: -74.006, endLat: 52.52, endLng: 13.405, arcAlt: 0.2 },
  ]

  const studentConnections = connections.map((conn, i) => ({
    order: Math.ceil((i + 1) / 2),
    ...conn,
    color: colors[i % colors.length],
  }))

  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full" />
      <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-b pointer-events-none select-none from-transparent to-background z-40" />
      <div className="absolute w-full -bottom-10 h-full z-10">
        <World data={studentConnections} globeConfig={globeConfig} />
      </div>
    </div>
  )
}