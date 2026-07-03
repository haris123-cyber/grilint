import { Link } from "react-router-dom";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";


const services = [
  {
    num: "01",
    title: "Brand Identity",
    body: "Logos, systems and stories with bite. Built to be remembered, not scrolled past.",
    bullets: [
      "Naming & verbal identity",
      "Logo & visual system",
      "Brand guidelines",
      "Launch toolkit",
    ],
  },
  {
    num: "02",
    title: "Web & Product",
    body: "Sites that move fast, convert hard and look like nothing else in your category.",
    bullets: ["Marketing sites", "E-commerce", "Webflow / Next / Astro", "Design systems"],
  },
  {
    num: "03",
    title: "Performance Ads",
    body: "Paid social, search and programmatic that pulls weight on the spreadsheet.",
    bullets: ["Meta & TikTok", "Google & YouTube", "Creative testing", "Attribution & MMM"],
  },
  {
    num: "04",
    title: "Content & Social",
    body: "Daily creative that earns shares — not the kind that begs for them.",
    bullets: ["Content sprints", "Always-on social", "Creator partnerships", "Editorial calendars"],
  },
  {
    num: "05",
    title: "SEO & Growth",
    body: "Rank, retain, repeat. Technical SEO plus content engines that compound.",
    bullets: ["Technical audits", "Programmatic SEO", "Lifecycle & CRM", "Conversion tests"],
  },
  {
    num: "06",
    title: "Motion & Film",
    body: "Short-form video, brand films and 3D moments tuned for the feed.",
    bullets: ["Brand films", "Reels & shorts", "3D & VFX", "Studio shoots"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "Two weeks of audits, interviews and category teardown. We surface the real opportunity, not the brief.",
  },
  {
    step: "02",
    title: "Design",
    body: "Strategy meets craft. We prototype brand, product or campaign directions and pressure-test them with your audience.",
  },
  {
    step: "03",
    title: "Ship",
    body: "Build, launch, measure. We hand off clean files, dashboards and playbooks so growth keeps compounding.",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout showTransition={false}>
      <PageHero
        eyebrow="[ 02 — What we do ]"
        title={
          <>
            <span className="block">SIX ROOMS,</span>
            <span className="block pl-[8vw] md:pl-[14vw] text-mint font-sans font-light">
              one workshop.
            </span>
          </>
        }
        intro="We don't sell decks. We sell traction. Pick a room or knock down the walls — every engagement is built around the outcome you actually need."
      />

      <section className="px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal
              as="article"
              delay={i * 80}
              key={s.num}
              className={`group relative bg-background p-8 md:p-10 hover:bg-forest/40 transition-all duration-500 ${i % 2 ? "md:translate-y-6" : ""}`}
            >
              <div className="flex items-start justify-between mb-10">
                <span className="text-mint text-sm tracking-[0.2em]">{s.num}</span>
                <span
                  aria-hidden
                  className="text-mint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
                >
                  →
                </span>
              </div>
              <h3 className="text-display text-4xl md:text-5xl mb-4 group-hover:text-mint transition">
                {s.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">{s.body}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-mint" /> {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-ink/40 border-y border-border">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">[ How we work ]</p>
          <h2 className="text-display text-5xl md:text-7xl mb-16">A three-step receipt.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 120}>
              <div className="rounded-3xl border border-border bg-card/60 p-8 h-full tilt-hover">
                <div className="text-mint text-display text-6xl mb-6">{p.step}</div>
                <h3 className="text-display text-3xl mb-3">{p.title}</h3>
                <p className="text-foreground/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-display text-4xl md:text-6xl">Ready to knock down a wall?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3 text-primary-foreground text-sm uppercase tracking-[0.2em] font-semibold hover:scale-105 transition"
          >
            Start a project →
          </Link>
        </Reveal>
      </section>

    </PageLayout>
  );
}
