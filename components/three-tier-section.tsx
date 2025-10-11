import { Brain, Target, Zap } from "lucide-react"

export default function ThreeTierSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading mb-6 text-white md:text-5xl">My Three Tier Approach</h2>
          <p className="text-xl text-muted-foreground">The magic isn't in sales tools, it's in the preparation.</p>
        </div>

        <div className="space-y-0 border border-border rounded-lg overflow-hidden">
          <div className="flex items-center p-6 border-b border-solid border-white">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Preparation First</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">Know Your Enemy</div>
              <div className="text-muted-foreground">Superior Intelligence</div>
            </div>
          </div>

          <div className="flex items-center p-6 border-b border-solid border-white">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Strategic Thinking</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">Battle Strategy</div>
              <div className="text-muted-foreground">Client Domination</div>
              <div className="text-muted-foreground">Market Structure</div>
            </div>
          </div>

          <div className="flex items-center p-6">
            <div className="flex items-center min-w-0 flex-1">
              <div className="p-3 bg-primary/10 rounded-lg mr-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold font-heading text-secondary-foreground">Execute With Precision</h3>
              </div>
            </div>
            <div className="ml-6 text-right">
              <div className="text-muted-foreground">German Efficiency</div>
              <div className="text-muted-foreground">Superior Execution</div>
              <div className="text-muted-foreground">Beet-Level Precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
