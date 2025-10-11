import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Target, Users, Lightbulb } from "lucide-react"

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">Expertise & Focus Areas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building systems that make sense of chaos, turning survival instincts into structured business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Beet Farming - Large Card */}
          <Card className="bg-primary relative h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-5 lg:h-full">
            <CardContent className="flex h-full flex-col justify-end p-6 relative z-10">
              <h3 className="text-primary-foreground text-left text-xl font-bold mb-2">Beet Farming & Agriculture</h3>
              <p className="text-primary-foreground/80 text-sm">
                Superior beet cultivation techniques since 1980. Growing the future, one beet at a time.
              </p>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
          </Card>

          {/* Paper Sales - Medium Card */}
          <Card className="relative h-60 overflow-hidden rounded-3xl md:col-span-3 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-[400px] border-2 border-primary/20">
            <CardContent className="flex h-full flex-col justify-end p-6 relative z-10">
              <h3 className="text-left text-xl font-bold mb-2 text-white">Paper Sales Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Creator of Schrute Sales Methodology. Skip small talk, focus on domination.
              </p>
              <div className="absolute left-6 top-6 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80" />
          </Card>

          {/* Assistant Regional Management - Medium Card */}
          <Card className="relative h-60 overflow-hidden md:col-span-2 md:row-span-1 md:h-[190px] lg:col-span-3 lg:h-[190px] bg-muted rounded-3xl border-yellow-500 border-solid border opacity-100">
            <CardContent className="flex h-full flex-col justify-end p-6">
              <h3 className="text-left text-lg font-bold mb-2">Assistant Regional Management</h3>
              <p className="text-muted-foreground text-sm">
                15+ years of assistant (to the) regional manager experience
              </p>
              <div className="absolute left-6 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beets Harvested Stats */}
          <Card className="relative h-60 rounded-3xl md:col-span-2 md:row-span-1 md:h-[190px] lg:col-span-3 lg:h-[190px] border-yellow-500 border">
            <CardContent className="flex h-full flex-col items-center justify-center p-6">
              <div className="mb-3">
                <span className="text-4xl font-bold text-primary md:text-3xl lg:text-4xl">1000</span>
                <span className="align-top text-2xl font-bold text-primary md:text-xl lg:text-3xl">+</span>
              </div>
              <p className="text-muted-foreground text-center text-sm">Beets harvested & clients dominated</p>
            </CardContent>
          </Card>

          {/* Survival Training - Medium Card */}
          <Card className="bg-secondary relative h-60 overflow-hidden rounded-3xl md:col-span-2 md:row-span-1 md:h-[190px] lg:col-span-3 lg:h-[190px] border-yellow-500 border">
            <CardContent className="flex h-full flex-col justify-end p-6">
              <h3 className="text-secondary-foreground text-left text-lg font-bold mb-2">Survival Training</h3>
              <p className="text-secondary-foreground/80 text-sm">
                Teaching office workers essential wilderness skills
              </p>
              <div className="absolute left-6 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* German Heritage - Wide Card */}
          <Card className="relative h-60 overflow-hidden rounded-3xl md:col-span-4 md:row-span-1 md:h-[190px] lg:col-span-6 lg:h-[190px] border border-primary/30">
            <CardContent className="flex h-full flex-col justify-center p-6">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-left text-lg font-bold mb-1">German Heritage Advocacy</h3>
                  <p className="text-muted-foreground text-sm">
                    Preserving Pennsylvania Dutch traditions. German efficiency creates advantages previously unknown to
                    inferior bloodlines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
