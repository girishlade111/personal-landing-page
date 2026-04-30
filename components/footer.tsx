import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.9 0.02 260) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.9 0.02 260) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 100%, #000 70%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 100%, #000 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Let&apos;s work together
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}