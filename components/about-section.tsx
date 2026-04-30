import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Zap } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, responsive applications that delight users.",
    },
  ]

  return (
    <section className="py-16 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-3 text-[11px]">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Crafting digital solutions
            <span className="block gradient-text">with precision</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I&apos;m a passionate developer dedicated to building exceptional digital experiences.
            With expertise across the full stack, I transform ideas into elegant, functional products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group p-5 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold font-heading mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 border-primary/20">
          <CardContent className="p-0 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold font-heading mb-2">My Philosophy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I believe great software comes from understanding users deeply, iterating quickly,
              and never stopping learning. Every project is an opportunity to create something
              that makes a difference.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}