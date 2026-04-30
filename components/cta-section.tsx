import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-chart-2/[0.05] to-primary/[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px] animate-aurora" />
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative">
        <div className="relative rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Let&apos;s build something great</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tighter leading-[1.05]">
            Ready to start your
            <span className="block gradient-text">next project?</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="rounded-full text-sm font-medium px-7 h-12 group shadow-lg shadow-primary/20">
              <Mail className="mr-2 h-4 w-4" />
              hello@example.com
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-sm font-medium px-7 h-12 border-border/80 bg-card/40 backdrop-blur-sm"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
