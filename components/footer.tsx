import { Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  const navGroups = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Process", href: "#process" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Email", href: "mailto:hello@example.com" },
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "Twitter", href: "#" },
      ],
    },
  ]

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 dot-pattern opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-base tracking-tight">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Designing and building digital experiences that combine craft, performance, and clarity.
            </p>
            <div className="flex gap-2 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card/40 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Crafted with care.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
