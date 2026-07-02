import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative px-6 md:px-10 pt-36 md:pt-44 pb-16 md:pb-24 noise overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-[40rem] rounded-full bg-mint/20 blur-3xl float-y"
      />

      <div className="relative grid grid-cols-12 gap-y-6">
        <Reveal className="col-span-12 md:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={120} as="div" className="col-span-12">
          <h1 className="text-display text-[14vw] md:text-[10vw] leading-[0.85]">{title}</h1>
        </Reveal>
        {intro ? (
          <Reveal delay={260} className="col-span-12 md:col-span-6 md:col-start-7 mt-6">
            <p className="text-lg text-foreground/75 leading-relaxed">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
