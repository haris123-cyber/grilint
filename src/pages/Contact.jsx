import { useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export default function ContactPage() {
  const [budget, setBudget] = useState(null);
  const [sent, setSent] = useState(false);

  return (
    <PageLayout showTransition={false}>
      <PageHero
        eyebrow="[ 04 — Say hi ]"
        title={
          <>
            <span className="block">LOWKEY</span>
            <span className="block pl-[8vw] md:pl-[14vw] text-mint font-sans font-light">
              excited.
            </span>
          </>
        }
        intro="Drop the brief, the half-idea or the panic. We reply within one business day from whichever timezone is awake."
      />

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-1 md:col-span-5 space-y-10">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-mint mb-3">Direct line</p>
              <a
                href="mailto:hi@gritink.studio"
                className="block text-2xl sm:text-3xl md:text-4xl text-display hover:text-mint transition break-all"
              >
                hi@gritink.studio
              </a>
              <a
                href="tel:+12125550144"
                className="block mt-2 text-lg text-foreground/70 hover:text-mint transition"
              >
                +1 (212) 555-0144
              </a>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-xs uppercase tracking-[0.3em] text-mint mb-3">Studios</p>
              <ul className="space-y-3 text-foreground/80">
                <li>
                  <span className="text-display text-2xl">Brooklyn</span>
                  <br />
                  <span className="text-sm text-foreground/60">68 Jay St, NY 11201</span>
                </li>
                <li>
                  <span className="text-display text-2xl">Lisbon</span>
                  <br />
                  <span className="text-sm text-foreground/60">R. de São Paulo 12, 1200-427</span>
                </li>
                <li>
                  <span className="text-display text-2xl">Bangalore</span>
                  <br />
                  <span className="text-sm text-foreground/60">Indiranagar 100ft Rd, 560038</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-xs uppercase tracking-[0.3em] text-mint mb-3">Social</p>
              <div className="flex flex-wrap gap-2.5">
                {["Instagram", "Behance", "LinkedIn", "Read.cv"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-full border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:border-mint hover:text-mint transition"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="col-span-1 md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card/60 backdrop-blur border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Field label="Your name" placeholder="What do we call you?" />
                <Field label="Company" placeholder="Where do you ship from?" />
              </div>
              <Field label="Email" type="email" placeholder="you@brand.co" />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2">
                  Project budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {["< $10k", "$10–25k", "$25–60k", "$60k+"].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition ${budget === b ? "border-mint bg-mint text-primary-foreground" : "border-border hover:border-mint hover:text-mint"}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2">
                  What are you trying to make happen?
                </label>
                <textarea
                  rows={5}
                  placeholder="The messy version is fine."
                  className="w-full bg-background/60 border border-border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:border-mint transition resize-none"
                />
              </div>
              <button
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-mint text-primary-foreground py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold hover:bg-accent hover:scale-[1.02] transition disabled:opacity-60"
              >
                {sent ? "Got it — we'll be in touch ✓" : "Send it →"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background/60 border border-border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:border-mint transition"
      />
    </div>
  );
}
