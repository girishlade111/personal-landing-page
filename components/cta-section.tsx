import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ExternalLink } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">I don't just teach you how to sell paper.</h2>
        <p className="text-xl mb-8 opacity-90">I teach you how to think like a warrior.</p>
        <p className="text-2xl font-bold font-heading mb-8">Want to dominate your market? Let's talk.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
          >
            <Mail className="mr-2 h-5 w-5" />
            dwight@schrutefarms.com
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Visit Schrute Farms
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
