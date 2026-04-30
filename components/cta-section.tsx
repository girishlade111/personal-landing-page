import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[80px]" />

      <div className="max-w-3xl mx-auto relative text-center">
        <Badge className="mb-4 text-[11px]">Get in Touch</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
          Ready to start your
          <span className="block gradient-text">next project?</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="sm" className="text-sm font-medium px-6 py-2.5 group">
            <Mail className="mr-2 h-4 w-4" />
            hello@example.com
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="text-sm font-medium px-6 py-2.5"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  )
}