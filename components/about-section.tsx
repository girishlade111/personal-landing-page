import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Zap } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Maintainable, scalable architectures built to evolve with your business.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Interfaces with intent — accessible, considered, and delightful to use.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast experiences with measurable impact on real metrics.",
    },
  ]

  return (
    <section id="about" className="py-28 md:py-32 px-6 lg:px-12 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tighter leading-[1.05]">
            Crafting digital solutions
            <span className="block gradient-text">with precision.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            I&apos;m a full-stack builder dedicated to exceptional digital experiences.
            I transform ideas into elegant products that ship, scale, and stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden p-7 bg-card/50 backdrop-blur-sm border-border/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-0 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="relative overflow-hidden p-8 md:p-14 border-border/60 bg-gradient-to-br from-primary/[0.08] via-chart-2/[0.05] to-transparent">
          <div className="absolute inset-0 dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
          <CardContent className="p-0 text-center max-w-3xl mx-auto relative">
            <div className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-3">Philosophy</div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 tracking-tight">
              Great software starts with great empathy.
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Understand the user, iterate fast, never stop learning.
              Every project is a chance to build something that genuinely makes a difference.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
