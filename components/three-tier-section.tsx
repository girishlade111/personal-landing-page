import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const tiers = [
  {
    title: "Discovery",
    description: "Understanding your goals, challenges, and vision to build a solid foundation.",
    items: ["Requirements gathering", "Market research", "Technical planning", "Strategy outline"],
  },
  {
    title: "Development",
    description: "Building your solution with clean code, modern tools, and agile iteration.",
    items: ["Agile development", "Regular updates", "Quality testing", "Performance optimization"],
  },
  {
    title: "Delivery",
    description: "Launching your product with support to ensure smooth adoption and growth.",
    items: ["Deployment", "Documentation", "Training", "Ongoing support"],
  },
]

export default function ThreeTierSection() {
  return (
    <section id="process" className="py-28 md:py-32 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tighter leading-[1.05]">
            A process that
            <span className="block gradient-text">delivers results.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Three phases to transform your ideas into reality, with clear communication at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="relative group p-7 md:p-8 bg-card/50 backdrop-blur-sm border-border/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-500"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="font-mono text-xs text-muted-foreground tracking-widest">
                    STEP {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/10 border border-primary/20 flex items-center justify-center text-sm font-bold font-heading text-primary">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading mb-3 tracking-tight">{tier.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{tier.description}</p>

                <div className="h-px bg-border/60 mb-5" />

                <ul className="space-y-3">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
