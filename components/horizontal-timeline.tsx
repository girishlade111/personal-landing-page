"use client"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Check } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  date: string
  description?: string
  status?: "completed" | "current" | "upcoming"
}

interface HorizontalTimelineProps {
  events?: TimelineEvent[]
  className?: string
}

const HorizontalTimeline = ({ events = [], className }: HorizontalTimelineProps) => {
  return (
    <div className={cn("w-full", className)}>
      <ScrollArea className="w-full">
        <div className="relative px-8 pt-10 pb-6 min-w-max">
          {/* Connecting rail */}
          <div className="absolute left-8 right-8 top-[5.25rem] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="flex items-start gap-0">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col items-center min-w-[220px] px-3 group">
                {/* Date pill */}
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground mb-3 px-2.5 py-1 rounded-full border border-border/60 bg-card/60">
                  {event.date}
                </div>

                {/* Dot */}
                <div className="relative flex items-center justify-center mb-5">
                  {event.status === "current" && (
                    <span className="absolute h-6 w-6 rounded-full bg-primary/30 animate-ping" />
                  )}
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-5 h-5 rounded-full border-2 z-10 transition-transform group-hover:scale-110",
                      event.status === "completed" && "border-primary bg-primary",
                      event.status === "current" && "border-primary bg-primary shadow-lg shadow-primary/50",
                      event.status === "upcoming" && "border-muted-foreground/40 bg-background",
                    )}
                  >
                    {event.status === "completed" && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
                    {event.status === "current" && <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
                  </div>
                </div>

                {/* Card */}
                <div className={cn(
                  "text-center max-w-[200px] px-3 py-3 rounded-xl border transition-all duration-300",
                  event.status === "current"
                    ? "border-primary/40 bg-primary/5"
                    : "border-transparent group-hover:border-border/60 group-hover:bg-card/40",
                )}>
                  <h3
                    className={cn(
                      "font-semibold mb-1 text-sm leading-tight tracking-tight",
                      event.status === "current" ? "text-primary" : "text-foreground",
                    )}
                  >
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default HorizontalTimeline
