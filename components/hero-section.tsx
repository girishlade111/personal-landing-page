import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin } from "lucide-react"
import StudentGlobe from "@/components/globe-demo"
import { achievements } from "@/data/portfolio-data"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-center h-full">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-sm font-medium">
                Regional Manager @ Dunder Mifflin Scranton
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Dwight K. Schrute
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
                Creator of the <span className="text-primary font-semibold">Schrute Sales Methodology</span>. Teaching
                office workers essential survival skills and superior beet farming techniques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Contact Assistant
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Schrute Farms Profile
              </Button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold font-heading text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1 h-full">
            <StudentGlobe />
          </div>
        </div>
      </div>
    </section>
  )
}
