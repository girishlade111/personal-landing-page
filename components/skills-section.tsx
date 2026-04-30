import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/portfolio-data"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tighter leading-[1.05]">
            What I bring to
            <span className="block gradient-text">the table.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A diverse skill set built over years of solving complex problems and delivering results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-6 bg-card/50 backdrop-blur-sm border-border/60 hover:border-primary/40 hover:bg-card/80 transition-all duration-500"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-chart-2/10 border border-primary/20 group-hover:scale-105 transition-transform">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold font-heading mb-1.5 tracking-tight">{skill.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
