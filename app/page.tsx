const projects = [
  {
    title: "Coffee Personality Quiz",
    description:
      "A 6-question personality quiz that matches you with your perfect coffee. Built with Next.js, deployed on Vercel.",
    url: "https://quiz-project-opal-chi.vercel.app",
    tags: ["Next.js", "TypeScript", "Vercel"],
    color: "#ef4444",
    glow: "rgba(239,68,68,0.3)",
    emoji: "☕",
  },
  {
    title: "Basecamp Coffee Loyalty App",
    description:
      "A mobile loyalty points tracker with 3 tiers (Bronze, Silver, Gold), rewards catalog, purchase history, and QR code redemption.",
    url: "https://loyalty-app-ten.vercel.app",
    tags: ["Next.js", "TypeScript", "QR Code", "Vercel"],
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.3)",
    emoji: "🥇",
  },
];

const links = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/erik-seide/" },
  { label: "GitHub", url: "https://github.com/erikseide-crypto" },
  { label: "Email", url: "mailto:erik.seide@gmail.com" },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ededed",
        fontFamily: "var(--font-geist-sans), sans-serif",
        padding: "clamp(2rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      {/* Hero */}
      <section style={{ marginBottom: "5rem" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Available for work
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 10vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "1rem",
            color: "#ffffff",
          }}
        >
          Erik Seide
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.25rem)",
            color: "#888",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          Digital marketer building cool things on the web.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.1rem",
                borderRadius: "9999px",
                border: "1px solid #333",
                color: "#aaa",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid #1e1e1e",
                borderRadius: "16px",
                padding: "1.5rem",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{project.emoji}</span>
                  <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, margin: 0 }}>
                    {project.title}
                  </h3>
                </div>
                <span style={{ color: "#555", fontSize: "1rem", flexShrink: 0 }}>↗</span>
              </div>

              <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#161616",
                      border: "1px solid #2a2a2a",
                      borderRadius: "9999px",
                      padding: "0.2rem 0.65rem",
                      fontSize: "0.75rem",
                      color: "#666",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "5rem",
          paddingTop: "2rem",
          borderTop: "1px solid #1a1a1a",
          color: "#444",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} Erik Seide
      </footer>
    </main>
  );
}
