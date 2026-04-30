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
    <section className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">How I Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            A process that
            <span className="block gradient-text">delivers results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three phases to transform your ideas into reality, with clear communication at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="relative group p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold font-heading mb-3">{tier.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

                <ul className="space-y-3">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {index < tiers.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
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