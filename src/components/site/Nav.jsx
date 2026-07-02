import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-[60] flex items-center justify-between transition-all duration-500 ${scrolled ? "px-5 md:px-8 py-3" : "px-6 md:px-10 py-5"
          } ${scrolled || open
            ? "backdrop-blur-md bg-background/70 border-b border-border"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={close}
          className="group flex items-center gap-1.5 text-foreground hover:text-mint transition-colors duration-300 text-display text-2xl tracking-wide z-[61]"
        >
          <span className="transition-all duration-300 group-hover:tracking-[0.15em]">GRITINK</span>
          <span className="text-foreground/50 text-xs align-top">®</span>
        </Link>

        {/* Right side: CTA + Hamburger */}
        <div className="flex items-center gap-4 z-[61]">
          <Link
            to="/contact"
            onClick={close}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-mint/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mint hover:bg-mint hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>

          {/* Hamburger button */}
          <button
            id="menu-toggle"
            suppressHydrationWarning
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex flex-col justify-center items-center w-10 h-10 rounded-full border border-border/60 hover:border-mint/50 transition-all duration-300 hover:bg-mint/5"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-[0.5px]" : "-translate-y-[3px]"
                }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 ease-in-out ${open ? "w-5 -rotate-45 -translate-y-[0.5px]" : "w-3 translate-y-[3px]"
                }`}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen backdrop ── */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-700 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={close}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-mint/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mint/4 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--color-mint) 1px, transparent 1px), linear-gradient(90deg, var(--color-mint) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Slide-in menu panel ── */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-[58] flex flex-col px-8 md:px-16 pt-28 pb-12 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Left accent line */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-mint/30 to-transparent transition-opacity duration-700 ${open ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Nav links */}
        <nav className="flex flex-col gap-1 overflow-y-auto flex-1 min-h-0 pr-4 no-scrollbar">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={close}
              activeProps={{ className: "text-mint" }}
              className={`group flex items-end gap-4 py-3 border-b border-border/30 text-foreground hover:text-mint transition-all duration-500 ease-out ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              style={{ transitionDelay: open ? `${i * 80 + 120}ms` : "0ms" }}
            >
              <span className="text-display text-8xl md:text-9xl leading-none tracking-tight group-hover:pl-2 transition-all duration-500">
                {l.label}
              </span>
              <span className="ml-auto text-mint opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 text-lg">
                ↗
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom row */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-end justify-end gap-6 transition-all duration-500 mt-6 shrink-0 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-mint font-mono">[ Get in touch ]</p>
            <a
              href="mailto:hi@gritink.studio"
              className="text-foreground/60 hover:text-mint transition text-sm"
            >
              hi@gritink.studio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
