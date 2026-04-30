import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import StudentGlobe from "@/components/globe-demo"
import { achievements } from "@/data/portfolio-data"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <Badge className="text-[11px] font-medium px-2.5 py-0.5">Available</Badge>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.15]">
                Building
                <span className="block gradient-text">Digital Experiences</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Passionate about creating beautiful, functional, and user-centered digital products that help businesses grow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="sm" className="text-sm font-medium px-5 py-2.5 group">
                <Mail className="mr-2 h-3.5 w-3.5" />
                Get in Touch
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm font-medium px-5 py-2.5"
              >
                <Linkedin className="mr-2 h-3.5 w-3.5" />
                LinkedIn
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-0.5">
                  <div className="text-xl md:text-2xl font-bold font-heading">{achievement.number}</div>
                  <div className="text-[11px] text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-2xl" />
              <div className="relative glass-card rounded-2xl p-6 h-full flex items-center justify-center">
                <StudentGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}