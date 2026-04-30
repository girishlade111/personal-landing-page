import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
            I don't have an MBA. I never worked at corporate headquarters.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            But I've trained <span className="text-primary font-semibold">1000's of office workers</span> in essential
            survival skills and superior sales techniques. I believe in hard work's power to transform businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Beet Farmer & Sales Warrior</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've been perfecting beet cultivation since 1980. What began as family tradition became obsession:
                planting, harvesting, selling and dominating the regional paper market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a superior salesman, I've seen how proper preparation and German work ethic create unstoppable
                success.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Survival Training Expert</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I don't just teach sales techniques. I teach preparedness and survival. My methods help employees
                survive both office politics and actual bear attacks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                There's no weakness here, just helping people become confident survivors, not just paper pushers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Belief */}
        <Card className="p-8 bg-primary/5 border-primary/20">
          <CardContent className="p-0 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4">My Core Belief</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Hard work and preparation create opportunity rather than waiting for it. I find that sweet spot where
              German efficiency amplifies American entrepreneurship. At Dunder Mifflin, I've guided thousands of clients
              through superior paper solutions, proving{" "}
              <span className="text-primary font-semibold">anyone can become a top performer</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
