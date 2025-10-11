import { Brain, Users, Lightbulb, Target, Zap, Code } from "lucide-react"

export const skills = [
  { icon: Brain, label: "Beet Farming & Agriculture", description: "Superior beet cultivation techniques since 1980" },
  { icon: Code, label: "Paper Sales Excellence", description: "Creator of the Schrute Sales Methodology" },
  {
    icon: Users,
    label: "Assistant Regional Management",
    description: "15+ years of assistant (to the) regional manager experience",
  },
  { icon: Lightbulb, label: "Survival Training", description: "Teaching office workers essential wilderness skills" },
  { icon: Target, label: "German Heritage Advocacy", description: "Preserving Pennsylvania Dutch traditions" },
  {
    icon: Zap,
    label: "Bear Defense Strategy",
    description: "Turning office threats into structured survival protocols",
  },
]

export const achievements = [
  { number: "1000+", label: "Beets Harvested" },
  { number: "15+", label: "Years at Dunder Mifflin" },
  { number: "1980", label: "Started Farming" },
  { number: "100%", label: "Bear Attack Survival Rate" },
]

export const careerTimeline = [
  {
    id: "1",
    title: "Beet Farm Foundation",
    date: "1980-1995",
    description: "Established Schrute Farms as premier beet operation",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Paper Sales Entry",
    date: "1995-2005",
    description: "Joined Dunder Mifflin Scranton as top salesman",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Assistant (to the) Regional Manager",
    date: "2005-2010",
    description: "Promoted to assistant regional manager position",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Survival Training Pioneer",
    date: "2010-2015",
    description: "Developed comprehensive office survival protocols",
    status: "completed" as const,
  },
  {
    id: "5",
    title: "Agritorism Innovation Scheme",
    date: "2015-2020",
    description: "Transformed Schrute Farms into premier bed & breakfast",
    status: "completed" as const,
  },
  {
    id: "6",
    title: "Regional Manager",
    date: "2020-Present",
    description: "Finally achieved rightful position as Regional Manager",
    status: "current" as const,
  },
]
