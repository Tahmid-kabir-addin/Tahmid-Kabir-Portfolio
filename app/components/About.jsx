import Image from "next/image";
import TahmidImage from "../assets/images/Tahmid.jpg";

// Reusable decorative section title
function DecoTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-3" aria-hidden="true">
      <div className="h-px flex-1 max-w-[6rem] bg-[#D4AF37] opacity-50" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
      <div className="h-px flex-1 max-w-[6rem] bg-[#D4AF37] opacity-50" />
    </div>
  );
}

export default function About() {
  const competencies = [
    {
      label: "Complex Integrations",
      detail: "Stripe, PayPal, Klaviyo, WooCommerce",
      color: "#D4AF37",
    },
    {
      label: "System Architecture",
      detail: "Headless CMS, Microservices, REST/GraphQL",
      color: "#D4AF37",
    },
    {
      label: "Measurable Impact",
      detail: "60% faster load times · 99.9% uptime",
      color: "#D4AF37",
    },
  ];

  const problemSolving = [
    { platform: "Codeforces", stat: "600+ problems" },
    { platform: "LeetCode",   stat: "250+ problems" },
    { platform: "CodeChef",   stat: "3 Stars"        },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[#0A0A0A] overflow-hidden"
      style={{ scrollMarginTop: "5rem" }}
    >
      {/* Crosshatch background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      {/* Radial sunburst glow from center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-16">
        {/* Section heading */}
        <div className="text-center space-y-3">
          <DecoTitle />
          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            About
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Full-Stack Engineer
          </h2>
          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              "1+ Years Experience",
              "Currently at 79mplus",
              "CGPA: 3.95 / 4.00",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Image + Stats ── */}
          <div className="space-y-6">
            {/* Double-frame image */}
            <div className="relative">
              {/* Outer gold border */}
              <div className="border border-[#D4AF37]/50 p-2 relative">
                {/* Corner stepped decorations */}
                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]" aria-hidden="true" />
                <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]" aria-hidden="true" />
                <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]" aria-hidden="true" />
                <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]" aria-hidden="true" />
                {/* Inner dark border + image */}
                <div className="border-2 border-[#0A0A0A] overflow-hidden">
                  <Image
                    src={TahmidImage}
                    className="block w-full transition-all duration-700"
                    alt="Tahmid Kabir — Full-Stack Software Engineer"
                    width={1207}
                    height={929}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1+",  label: "Years Experience" },
                { value: "95+", label: "Lighthouse Score"  },
              ].map((m) => (
                <div
                  key={m.label}
                  className="deco-card p-5 text-center"
                >
                  <div
                    className="text-3xl text-[#D4AF37] mb-1"
                    style={{ fontFamily: "var(--font-marcellus)" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-[#888888] text-xs tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem-solving stats */}
            <div className="deco-card p-5 space-y-3">
              <h4
                className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Problem Solving
              </h4>
              {problemSolving.map((item) => (
                <div
                  key={item.platform}
                  className="flex justify-between items-center py-2 border-b border-[#D4AF37]/10 last:border-0"
                >
                  <span
                    className="text-[#F2F0E4] text-sm tracking-wider"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item.platform}
                  </span>
                  <span
                    className="text-[#888888] text-xs tracking-wider border border-[#D4AF37]/20 px-2 py-0.5"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {item.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio ── */}
          <div className="space-y-6">
            <p
              className="text-[#F2F0E4] text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Hello! I&apos;m{" "}
              <span className="text-[#D4AF37] font-semibold">
                Mir Md. Tahmid Kabir
              </span>
              , a Software Engineer who believes in{" "}
              <span className="text-[#D4AF37] font-semibold">engineering over just coding</span>.
              With over 1 year of professional experience, I focus on building systems
              that are secure, performant, and maintainable.
            </p>

            {/* Engineering Philosophy */}
            <div className="deco-card p-6 space-y-4">
              <h4
                className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Engineering Philosophy
              </h4>
              {[
                {
                  title: "Performance First",
                  body: "I optimize for the user. From 60% load time reductions to sub-second API responses, speed is a feature.",
                },
                {
                  title: "Security by Design",
                  body: "I integrate OWASP and PCI compliance from day one, not as an afterthought.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] flex-shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <p
                    className="text-sm text-[#888888] leading-relaxed"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    <span className="text-[#F2F0E4] font-semibold">{item.title}: </span>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Current Role */}
            <div
              className="deco-card p-6"
              style={{ borderLeft: "2px solid #D4AF37" }}
            >
              <h4
                className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Current Role
              </h4>
              <p
                className="text-[#F2F0E4] font-semibold mb-1"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Junior Software Engineer — 79mplus
              </p>
              <p
                className="text-[#888888] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                May 2025 – Present · Driving headless e-commerce development
                with US clients. Full lifecycle from design to deployment.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h4
                className="text-[#F2F0E4] text-xs tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Core Competencies
              </h4>
              {competencies.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-3 p-3 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors duration-300"
                >
                  <span
                    className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] flex-shrink-0 mt-1.5"
                    aria-hidden="true"
                  />
                  <span style={{ fontFamily: "var(--font-josefin)" }}>
                    <span className="text-[#D4AF37] text-sm font-semibold">{c.label}</span>
                    <span className="text-[#888888] text-sm"> — {c.detail}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="deco-card p-6">
              <h4
                className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-marcellus)" }}
              >
                Education
              </h4>
              <p
                className="text-[#F2F0E4] font-semibold text-sm"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                B.Sc in Computer Science & Engineering
              </p>
              <p
                className="text-[#888888] text-sm"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Shahjalal University of Science and Technology
              </p>
              <p
                className="text-[#D4AF37] text-sm font-semibold mt-1"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                CGPA: 3.95 / 4.00 · Graduating June 2025
              </p>
            </div>

            {/* Blockquote */}
            <blockquote
              className="relative pl-5 border-l-2 border-[#D4AF37]"
            >
              <p
                className="text-[#F2F0E4] italic text-sm leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                &ldquo;I don&apos;t just write code; I solve business problems with
                technology. My goal is to build software that is robust, scalable,
                and delivers real value to users.&rdquo;
              </p>
              <cite
                className="not-italic text-[#888888] text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Mir Md. Tahmid Kabir · Full-Stack Software Engineer
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
