import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"

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
    <section className="py-16 px-6 lg:px-10 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 text-[11px]">How I Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            A process that
            <span className="block gradient-text">delivers results</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Three phases to transform your ideas into reality, with clear communication at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="relative group p-5 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {index + 1}
                </div>

                <h3 className="text-base font-bold font-heading mb-2">{tier.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{tier.description}</p>

                <ul className="space-y-2">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {index < tiers.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}