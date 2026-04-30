import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio-data"

export default function SkillsSection() {
  return (
    <section className="py-16 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/15 to-background" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 text-[11px]">Skills & Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            What I bring to
            <span className="block gradient-text">the table</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            A diverse skill set built over years of solving complex problems and delivering results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold font-heading mb-0.5">{skill.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
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