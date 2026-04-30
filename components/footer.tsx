export default function Footer() {
  return (
    <footer className="relative py-16 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold font-heading text-primary mb-2">Dwight K. Schrute</h3>
          <p className="text-muted-foreground">Regional Manager & Beet Farmer</p>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-primary block duration-150">
            <span>About</span>
          </a>
          <a href="#expertise" className="text-muted-foreground hover:text-primary block duration-150">
            <span>Expertise</span>
          </a>
          <a href="#approach" className="text-muted-foreground hover:text-primary block duration-150">
            <span>Approach</span>
          </a>
          <a
            href="mailto:dwight@schrutefarms.com"
            className="text-muted-foreground hover:text-primary block duration-150"
          >
            <span>Contact</span>
          </a>
          <a
            href="https://www.schrutefarms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary block duration-150"
          >
            <span>Schrute Farms</span>
          </a>
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://www.schrutefarms.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schrute Farms"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path className="text-yellow-500"
                fill="currentColor"
                fillRule="evenodd"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
          <a
            href="mailto:dwight@schrutefarms.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path className="text-yellow-500"
                fill="currentColor"
                fillRule="evenodd"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
          </a>
        </div>

        <span className="block text-center text-sm text-yellow-400 font-semibold">
          © {new Date().getFullYear()} Dwight K. Schrute. Regional Manager, Beet Farmer & Creator of the Schrute Sales
          Methodology.
        </span>
      </div>
    </footer>
  )
}
