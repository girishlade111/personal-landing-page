import HorizontalTimeline from "@/components/horizontal-timeline"
import { Badge } from "@/components/ui/badge"
import { careerTimeline } from "@/data/portfolio-data"

export default function TimelineSection() {
  return (
    <section className="py-16 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 text-[11px]">Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            My professional
            <span className="block gradient-text">journey</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            A track record of growth, learning, and delivering impact across different roles and industries.
          </p>
        </div>
        <HorizontalTimeline events={careerTimeline} />
      </div>
    </section>
  )
}