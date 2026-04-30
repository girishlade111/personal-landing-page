import HorizontalTimeline from "@/components/horizontal-timeline"
import { Badge } from "@/components/ui/badge"
import { careerTimeline } from "@/data/portfolio-data"

export default function TimelineSection() {
  return (
    <section className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            My professional
            <span className="block gradient-text">journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of growth, learning, and delivering impact across different roles and industries.
          </p>
        </div>
        <HorizontalTimeline events={careerTimeline} />
      </div>
    </section>
  )
}