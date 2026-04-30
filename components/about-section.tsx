import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Crafting digital solutions
            <span className="block gradient-text">with precision</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a passionate developer dedicated to building exceptional digital experiences.
            With expertise across the full stack, I transform ideas into elegant, functional products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardContent className="p-0 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-heading mb-4">My Philosophy</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
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