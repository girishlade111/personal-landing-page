import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react"
import StudentGlobe from "@/components/globe-demo"
import { achievements } from "@/data/portfolio-data"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-secondary/4" />
      <div className="absolute top-16 right-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-secondary/6 rounded-full blur-[60px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full py-12">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <Badge className="text-[10px] font-medium px-2 py-0.5 tracking-wide uppercase">Available for work</Badge>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading leading-[1.2] tracking-tight">
                Designing
                <span className="block gradient-text">digital experiences</span>
                <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl">that connect</span>
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                Crafting elegant interfaces and building performant applications. 
                Let&apos;s transform your ideas into impactful digital products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button size="sm" className="text-xs font-medium px-4 py-2 group">
                <Mail className="mr-1.5 h-3 w-3" />
                Get in Touch
                <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs font-medium px-4 py-2"
              >
                <Linkedin className="mr-1.5 h-3 w-3" />
                LinkedIn
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-3 pt-1">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-0">
                  <div className="text-lg md:text-xl font-bold font-heading">{achievement.number}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-[280px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/12 to-secondary/12 rounded-full blur-xl" />
              <div className="relative glass-card rounded-xl p-4 h-full flex items-center justify-center">
                <StudentGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}