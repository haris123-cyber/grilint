import { Link } from "react-router-dom";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";


const values = [
  {
    num: "01",
    title: "Strategy first, always",
    body: "Pretty doesn't pay rent. Every pixel ladders to a business outcome we agreed on day one.",
  },
  {
    num: "02",
    title: "Craft is the moat",
    body: "We obsess over kerning, easing curves and the last 5% nobody notices — until they do.",
  },
  {
    num: "03",
    title: "Speak plainly",
    body: "No agency jargon, no fake urgency. We tell you what's working and what we'd kill.",
  },
  {
    num: "04",
    title: "Ship, then sharpen",
    body: "Real feedback comes from real users. We launch faster and iterate harder than the big networks.",
  },
];

const team = [
  { name: "Maya Okafor", role: "Founder · ECD" },
  { name: "Diego Marín", role: "Head of Strategy" },
  { name: "Priya Raman", role: "Design Director" },
  { name: "Theo Lindqvist", role: "Tech Director" },
  { name: "Naomi Park", role: "Growth Lead" },
  { name: "Wes Bramble", role: "Motion Lead" },
];

const collabs = [
  "Halftone",
  "MINT FEST",
  "Sourdrop",
  "Verdant",
  "NORTHBOUND",
  "Lumen",
  "Paper&Pulp",
  "Atlas Co.",
  "Kindred",
  "Riot Studio",
  "Field Notes",
  "Outbound",
];

export default function StudioPage() {
  return (
    <PageLayout showTransition={false}>
      <PageHero
        eyebrow="[ 03 — The studio ]"
        title={
          <>
            <span className="block">22 HUMANS,</span>
            <span className="block pl-[8vw] md:pl-[14vw] text-mint font-sans font-light">
              three time zones.
            </span>
          </>
        }
        intro="Founded in Brooklyn in 2019, GritInk now runs out of Brooklyn, Lisbon and Bangalore. We're strategists, designers, engineers and editors who actually like Mondays."
      />

      <section className="px-6 md:px-10 py-20 grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 border-y border-border bg-ink/40">
        {[
          ["6 yrs", "Quietly building"],
          ["22", "People on payroll"],
          ["3", "Cities, one Slack"],
          ["94%", "Repeat clients"],
        ].map(([n, l], i) => (
          <Reveal key={l} delay={i * 100} className="col-span-1 md:col-span-3">
            <div className="text-display text-5xl md:text-7xl text-mint">{n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">{l}</div>
          </Reveal>
        ))}
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">
            [ Operating principles ]
          </p>
          <h2 className="text-display text-5xl md:text-7xl mb-16">
            Four rules
            <br />
            <span className="text-mint font-sans font-light">we don't break.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {values.map((v, i) => (
            <Reveal
              as="article"
              delay={i * 100}
              key={v.num}
              className="group bg-background p-8 md:p-12 hover:bg-forest/40 transition"
            >
              <span className="text-mint text-sm tracking-[0.2em]">{v.num}</span>
              <h3 className="text-display text-3xl md:text-5xl mt-6 mb-4 group-hover:text-mint transition">
                {v.title}
              </h3>
              <p className="text-foreground/70 max-w-xl">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-ink/40 border-y border-border overflow-hidden">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">[ The crew ]</p>
          <h2 className="text-display text-5xl md:text-7xl mb-16">People behind the work.</h2>
        </Reveal>
        <div className="flex overflow-hidden pb-8 -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="flex gap-6 marquee w-max hover:[animation-play-state:paused]">
            {[...team, ...team, ...team].map((m, i) => (
              <div key={m.name + i} className="shrink-0 w-[65vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw]">
                <div className="rounded-3xl border border-border bg-card/60 p-6 h-full tilt-hover">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-mint/40 via-forest/40 to-ink mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 noise" />
                    <div className="absolute bottom-3 right-3 size-8 rounded-full border border-mint/60 flex items-center justify-center text-mint text-xs">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <p className="text-display text-2xl">{m.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 overflow-hidden">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">[ In good company ]</p>
          <h2 className="text-display text-5xl md:text-7xl mb-12">
            Brands that <span className="text-mint">trust us</span> with the mic.
          </h2>
        </Reveal>
        <div className="relative -mx-6 md:-mx-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-4 md:gap-6 marquee w-max hover:[animation-play-state:paused] mb-4 md:mb-6">
            {[...collabs, ...collabs, ...collabs].map((name, i) => (
              <div
                key={`top-${i}`}
                className="shrink-0 w-[45vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] aspect-[2/1] md:aspect-[5/3] rounded-3xl bg-gradient-to-b from-card/80 to-card/20 border border-border flex items-center justify-center text-foreground/60 hover:text-mint hover:border-mint/50 transition-all duration-500"
              >
                <span className="text-display text-xl md:text-3xl tracking-wider">{name}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 md:gap-6 marquee w-max hover:[animation-play-state:paused] -ml-[22vw] sm:-ml-[17vw] md:-ml-[12vw] lg:-ml-[10vw]">
            {[...collabs, ...collabs, ...collabs].reverse().map((name, i) => (
              <div
                key={`bottom-${i}`}
                className="shrink-0 w-[45vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] aspect-[2/1] md:aspect-[5/3] rounded-3xl bg-gradient-to-b from-card/80 to-card/20 border border-border flex items-center justify-center text-foreground/60 hover:text-mint hover:border-mint/50 transition-all duration-500"
              >
                <span className="text-display text-xl md:text-3xl tracking-wider">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-display text-4xl md:text-6xl">Want to make something loud?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3 text-primary-foreground text-sm uppercase tracking-[0.2em] font-semibold hover:scale-105 transition"
          >
            Say hi →
          </Link>
        </Reveal>
      </section>

    </PageLayout>
  );
}
