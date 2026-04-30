import HorizontalTimeline from "@/components/horizontal-timeline"
import { careerTimeline } from "@/data/portfolio-data"

export default function TimelineSection() {
  return (
    <section id="experience" className="py-28 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tighter leading-[1.05]">
            A journey of
            <span className="block gradient-text">growth & impact.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A track record of shipping, learning, and delivering measurable results across roles and industries.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-2">
          <HorizontalTimeline events={careerTimeline} />
        </div>
      </div>
    </section>
  )
}
