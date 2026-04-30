import HorizontalTimeline from "@/components/horizontal-timeline"
import { careerTimeline } from "@/data/portfolio-data"

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From beet farmer to regional manager. A path that proves superior genetics and work ethic always prevail
          </p>
        </div>
        <HorizontalTimeline events={careerTimeline} />
      </div>
    </section>
  )
}
