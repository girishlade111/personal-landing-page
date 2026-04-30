import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import StudentGlobe from "@/components/globe-demo"
import { achievements } from "@/data/portfolio-data"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                Available for projects
              </Badge>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] tracking-tight">
                Building
                <span className="block gradient-text">Digital Experiences</span>
                That Matter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl leading-relaxed text-balance">
                Passionate about creating beautiful, functional, and user-centered digital products that help businesses grow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group text-base font-medium px-6 py-3">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base font-medium px-6 py-3"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                    {achievement.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8 h-full flex items-center justify-center">
                <StudentGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}