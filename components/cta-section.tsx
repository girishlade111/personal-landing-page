import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative text-center">
        <Badge className="mb-6">Get in Touch</Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
          Ready to start your
          <span className="block gradient-text">next project?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base font-medium px-8 py-6 group">
            <Mail className="mr-2 h-5 w-5" />
            hello@example.com
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-medium px-8 py-6"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  )
}