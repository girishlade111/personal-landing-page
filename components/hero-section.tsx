import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react"
import StudentGlobe from "@/components/globe-demo"
import { achievements } from "@/data/portfolio-data"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden pt-32 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] animate-aurora" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-chart-2/15 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: "-6s" }} />
      <div className="noise" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                Available for new projects · 2026
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-heading leading-[1.02] tracking-tighter">
                Building
                <span className="block gradient-text pb-2">digital experiences</span>
                <span className="inline-flex items-center gap-3">
                  that
                  <span className="inline-flex items-center gap-2 px-4 py-1 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-3xl md:text-4xl lg:text-5xl">
                    <Sparkles className="h-6 w-6 md:h-7 md:w-7" />
                    matter
                  </span>
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-balance">
                I design and build elegant, performant products that solve real problems —
                from concept to launch, with a relentless focus on craft.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="group rounded-full text-sm font-medium px-7 h-12 shadow-lg shadow-primary/20">
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-sm font-medium px-7 h-12 border-border/80 bg-card/40 backdrop-blur-sm"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-background/40 backdrop-blur-sm p-5 hover:bg-card/60 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">
                    {achievement.number}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block relative animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-chart-2/20 to-transparent rounded-[2rem] blur-3xl animate-pulse-glow" />
              <div className="relative glass-card rounded-[2rem] p-6 h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <StudentGlobe />
              </div>
              {/* floating chips */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-lg animate-float">
                ✨ Currently shipping
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-lg animate-float" style={{ animationDelay: "-3s" }}>
                🌍 Remote · Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
