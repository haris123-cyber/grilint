import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";


const work = [
  {
    img: project1,
    tag: "Brand · Web",
    title: "Halftone Coffee Co.",
    stat: "+312% DTC revenue",
    year: "2025",
  },
  {
    img: project2,
    tag: "Identity · Motion",
    title: "MINT Festival 2026",
    stat: "Sold out in 9 hours",
    year: "2026",
  },
  {
    img: project3,
    tag: "Product · Social",
    title: "Sourdrop App Launch",
    stat: "180k installs in week one",
    year: "2025",
  },
  {
    img: project4,
    tag: "Packaging · Retail",
    title: "Verdant Skincare",
    stat: "Sephora top-10 launch",
    year: "2024",
  },
  {
    img: project1,
    tag: "Performance",
    title: "Northbound Outdoor",
    stat: "4.2x blended ROAS",
    year: "2024",
  },
  {
    img: project2,
    tag: "Brand · Strategy",
    title: "Lumen Power Tools",
    stat: "Rebrand → IPO ready",
    year: "2024",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <PageHero
        eyebrow="[ 01 — Selected work ]"
        title={
          <>
            <span className="block">RECEIPTS,</span>
            <span className="block pl-[10vw] md:pl-[18vw] text-mint font-sans font-light">
              not promises.
            </span>
          </>
        }
        intro="Six years of brands that took the leap. Each engagement is built around the outcome — not the deck."
      />

      <section className="px-6 md:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {work.map((p, i) => (
            <Reveal key={p.title + i} delay={(i % 2) * 120} className={i % 2 ? "md:mt-16" : ""}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card tilt-hover">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] bg-background/60 backdrop-blur px-3 py-1 rounded-full border border-border">
                    {p.tag}
                  </span>
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                    {p.year}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-display text-3xl md:text-5xl group-hover:text-mint transition">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm text-mint/80">{p.stat}</p>
                  </div>
                  <span className="text-mint text-2xl translate-x-0 group-hover:translate-x-2 transition">
                    →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border pt-10">
          <p className="text-display text-4xl md:text-6xl">
            Got a brand that deserves the next slot?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3 text-primary-foreground text-sm uppercase tracking-[0.2em] font-semibold hover:scale-105 transition"
          >
            Pitch us →
          </Link>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
