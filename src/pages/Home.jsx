import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroGlow from "@/assets/hero-glow.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import heroVideo from "../assets/hero-video.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionSection } from "@/components/site/TransitionSection";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    num: "01",
    title: "Brand Identity",
    body: "Logos, systems and stories with bite. Built to be remembered, not scrolled past.",
  },
  {
    num: "02",
    title: "Web & Product",
    body: "Sites that move fast, convert hard and look like nothing else in your category.",
  },
  {
    num: "03",
    title: "Performance Ads",
    body: "Paid social, search and programmatic that pulls weight on the spreadsheet.",
  },
  {
    num: "04",
    title: "Content & Social",
    body: "Daily creative that earns shares — not the kind that begs for them.",
  },
  {
    num: "05",
    title: "SEO & Growth",
    body: "Rank, retain, repeat. Technical SEO plus content engines that compound.",
  },
  {
    num: "06",
    title: "Motion & Film",
    body: "Short-form video, brand films and 3D moments tuned for the feed.",
  },
];

const projects = [
  {
    tag: "Brand · Web",
    title: "Halftone Coffee Co.",
    img: project1,
    span: "md:col-span-7 md:row-span-2",
    rotate: "-rotate-1",
  },
  {
    tag: "Identity",
    title: "MINT Festival 2026",
    img: project2,
    span: "md:col-span-5 md:row-span-2",
    rotate: "rotate-2",
  },
  {
    tag: "Social",
    title: "Sourdrop App Launch",
    img: project3,
    span: "md:col-span-6",
    rotate: "-rotate-2",
  },
  {
    tag: "Packaging",
    title: "Verdant Skincare",
    img: project4,
    span: "md:col-span-6",
    rotate: "rotate-1",
  },
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

export default function Index() {
  const mainRef = useRef(null);
  const contentAboveRef = useRef(null);
  const transitionRef = useRef(null);

  useGSAP(() => {
    // 1. Scale down the content above
    gsap.to(contentAboveRef.current, {
      scale: 0.95,
      borderRadius: "40px",
      boxShadow: "0px 20px 50px rgba(0,0,0,0.5)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: transitionRef.current,
        start: "top bottom", // when transition section hits bottom of viewport
        end: "top top",      // until it reaches the top
        scrub: true,
      }
    });

    // 2. Pin the transition section
    ScrollTrigger.create({
      trigger: transitionRef.current,
      start: "top top",
      end: "+=100%", // pin for 100vh
      pin: true,
      pinSpacing: true, // adds spacer so it stays pinned while scrolling
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="min-h-screen bg-background text-foreground overflow-x-clip relative z-0">
      <div ref={contentAboveRef} className="bg-background relative z-20 origin-bottom transform-gpu overflow-hidden pb-10 shadow-2xl">
        <Nav />
        <Hero />
        <ReelBlock />
        <Marquee />
        <Services />
        <Projects />
        <Collabs />
        <Contact />
      </div>

      <div ref={transitionRef} className="relative z-10 bg-background">
        <TransitionSection />
      </div>

      {/* Footer Reveal Wrapper */}
      <div className="relative z-0 h-screen w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="fixed bottom-0 left-0 w-full h-screen">
          <Footer />
        </div>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10 noise min-h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* Background Blob - perfectly centered to fill screen */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-[300vw] sm:w-[130vw] md:w-[120vw] lg:w-[100vw] aspect-square -translate-x-1/2 -translate-y-1/2 select-none flex items-center justify-center mix-blend-screen z-0">
        <img
          src={heroGlow}
          alt=""
          className="absolute w-full h-full object-cover opacity-80 spin-reverse-slow plasma-flow plasma-morph"
        />

        <img
          src={heroGlow}
          alt=""
          className="absolute w-full h-full object-cover opacity-60 spin-slow plasma-morph plasma-flow"
        />
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col justify-center mt-12 mb-10 md:mt-10 md:mb-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-start blur-in">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-mint mb-4 md:mb-6 font-mono">
            [ DIGITAL THINKING. REAL RESULTS. ]
          </p>

          <h1 className="text-display text-[18vw] md:text-[12vw] lg:text-[10vw] leading-[0.8] text-foreground">
            <span className="block">IDEAS</span>
            <span className="block pl-[8vw] pb-[2vw] md:pl-[5vw] text-mint font-space-grotesk font-light text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] tracking-normal">
              that ignite.
            </span>
            <span className="block">GROWTH</span>
            <span className="block pl-[16vw] md:pl-[12vw] text-mint font-space-grotesk font-light text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] tracking-normal">
              that lasts.
            </span>
          </h1>
        </div>
      </div>

      {/* Lower Elements positioned at the bottom of the section */}
      <div className="relative w-full max-w-7xl mx-auto z-10 mt-auto">
        <div className="grid grid-cols-12 gap-y-6">
          <div
            className="col-span-12 md:col-span-5 md:col-start-1 flex flex-col gap-6 md:gap-8 blur-in"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-base md:text-xl text-foreground/90 leading-relaxed font-sans">
              We help brands grow smarter <br className="hidden md:block" />
              with <span className="text-mint">strategy, creativity</span> & data.
            </p>
            <div className="flex">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 rounded-full border border-mint bg-transparent px-6 md:px-8 py-3 md:py-4 text-mint text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:bg-mint hover:text-primary-foreground transition"
              >
                Let's build something
                <span aria-hidden className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelBlock() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) setDevice("mobile");
      else if (window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let p = 0;
      if (rect.top <= 0) {
        const totalDistance = rect.height - windowHeight;
        p = Math.abs(rect.top) / totalDistance;
      }
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const getStartWidth = () => {
    if (device === "mobile") return "65vw";
    if (device === "tablet") return "50vw";
    return "40vw";
  };

  const getEndWidth = () => {
    if (device === "mobile") return "90vw";
    if (device === "tablet") return "80vw";
    return "75vw";
  };

  const getAspect = () => {
    if (device === "mobile") return 9 / 16;
    if (device === "tablet") return 4 / 3;
    return 16 / 9;
  };

  const getStartTop = () => {
    if (device === "mobile") return "25vh";
    if (device === "tablet") return "22vh";
    return "20vh";
  };

  return (
    <>
      <section ref={containerRef} className="relative h-[200vh] md:h-[250vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          {/* Header container */}
          <div
            className="absolute top-24 md:top-32 left-0 w-full px-6 md:px-10 z-30 pointer-events-none"
            style={{ opacity: Math.max(0, 1 - progress * 4) }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7">
                <p className="text-xs uppercase tracking-[0.3em] text-mint mb-3">
                  [ Studio reel · 2026 ]
                </p>
                <h2 className="text-display text-5xl md:text-7xl leading-[0.9]">
                  One minute,
                  <br />
                  <span className="text-mint font-space-grotesk font-light">
                    a lot of receipts.
                  </span>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-4 md:col-start-9 text-foreground/70 hidden md:block">
                Brands launched, campaigns shipped, and a few late-night ideas that actually worked.
                Press play.
              </div>
            </div>
          </div>

          {/* Glow behind video */}
          <div
            className="absolute inset-x-0 mx-auto rounded-full bg-mint/20 blur-[100px] pointer-events-none"
            style={{
              width: `calc(${getStartWidth()} * ${1 - progress} + ${getEndWidth()} * ${progress})`,
              height: `calc((${getStartWidth()} * ${1 - progress} + ${getEndWidth()} * ${progress}) / ${getAspect()})`,
              top: `calc(50% + ${getStartTop()} * ${1 - progress})`,
              transform: `translateY(-50%)`,
              opacity: 1 - progress,
            }}
          />

          {/* Video Container */}
          <div
            className="absolute inset-x-0 mx-auto overflow-hidden border-border z-20 flex items-center justify-center bg-mint/5"
            style={{
              width: `calc(${getStartWidth()} * ${1 - progress} + ${getEndWidth()} * ${progress})`,
              height: `calc((${getStartWidth()} * ${1 - progress} + ${getEndWidth()} * ${progress}) / ${getAspect()})`,
              top: `calc(50% + ${getStartTop()} * ${1 - progress})`,
              transform: `translateY(-50%)`,
              borderRadius: `calc(2rem * ${1 - progress})`,
              borderWidth: `${1 - progress}px`,
            }}
          >
            <div
              className="absolute inset-0 bg-mint/10 pointer-events-none transition-opacity duration-300"
              style={{ opacity: 1 - progress }}
            />
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Marquee() {
  const words = [
    "Strategy",
    "Brand",
    "Web",
    "Performance",
    "Content",
    "Motion",
  ];
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden bg-background border-y border-border/40">
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent" />
      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-24 bg-mint/8 blur-[80px] pointer-events-none rounded-full" />

      {/* Left & right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex items-center overflow-hidden py-6 md:py-8">
        <div className="flex gap-0 marquee whitespace-nowrap items-center">
          {row.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="text-display text-3xl md:text-5xl uppercase tracking-[0.15em] text-foreground/80 hover:text-mint transition-colors duration-300 cursor-default px-8 md:px-12">
                {w}
              </span>
              <span className="w-px h-5 md:h-7 bg-mint/30 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 md:px-10 py-24 md:py-36">
      <div className="grid grid-cols-12 gap-8 items-end mb-16">
        <div className="col-span-12 md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">[ 02 — What we do ]</p>
          <h2 className="text-display text-6xl md:text-8xl">
            Six rooms.
            <br />
            <span className="text-mint font-space-grotesk font-light">One workshop.</span>
          </h2>
        </div>
        <p className="col-span-12 md:col-span-4 md:col-start-9 text-foreground/70">
          We don't sell decks. We sell traction. Pick a room or knock down the walls — every
          engagement is built around the outcome you actually need.
        </p>
      </div>

      {/* Mobile Auto-scrolling Marquee */}
      <div className="md:hidden flex overflow-hidden border-y border-border -mx-6">
        <div className="flex marquee w-max hover:[animation-play-state:paused]">
          {[...services, ...services].map((s, i) => (
            <div
              key={s.num + i}
              className="shrink-0 w-[85vw] bg-background border-r border-border p-8 group hover:bg-forest/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-mint text-sm tracking-[0.2em]">{s.num}</span>
                <span
                  aria-hidden
                  className="text-mint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
                >
                  →
                </span>
              </div>
              <h3 className="text-display text-4xl mb-4 group-hover:text-mint transition">
                {s.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-px bg-border">
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
            <p className="text-foreground/70 leading-relaxed">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-36 bg-ink/40 border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">
            [ 03 — Selected work ]
          </p>
          <h2 className="text-display text-6xl md:text-8xl">
            Receipts,
            <br />
            <span className="text-mint  font-space-grotesk font-light">not promises.</span>
          </h2>
        </div>
        <Link
          to="/work"
          className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-5 py-3 text-xs uppercase tracking-[0.2em] hover:border-mint hover:text-mint transition w-fit"
        >
          Full case studies
          <span aria-hidden>↗</span>
        </Link>
      </div>

      {/* Mobile Auto-scrolling Staggered Marquee */}
      <div className="md:hidden flex overflow-hidden py-12 -mx-6 px-4">
        <div className="flex gap-4 marquee w-max hover:[animation-play-state:paused]">
          {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
            <div
              key={i}
              className={`shrink-0 w-[60vw] h-[280px] ${i % 2 === 0 ? "-mt-8 mb-8" : "mt-8 -mb-8"}`}
            >
              <Link
                to="/work"
                className={`group relative block h-full overflow-hidden rounded-2xl bg-card border border-border ${p.rotate} hover:rotate-0 transition-transform duration-500`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <span className="self-start text-[10px] uppercase tracking-[0.3em] bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-border">
                    {p.tag}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-display text-2xl">{p.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-12 md:auto-rows-[18rem] gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className={`${p.span}`}>
            <Link
              to="/work"
              className={`group relative block h-full overflow-hidden rounded-2xl bg-card border border-border ${p.rotate} hover:rotate-0 transition-transform duration-500`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <span className="self-start text-[10px] uppercase tracking-[0.3em] bg-background/60 backdrop-blur px-3 py-1 rounded-full border border-border">
                  {p.tag}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-display text-3xl md:text-5xl">{p.title}</h3>
                  <span className="text-mint text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition">
                    0{i + 1} / 04 →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Collabs() {
  const row1 = [...collabs.slice(0, 6), ...collabs.slice(0, 6), ...collabs.slice(0, 6), ...collabs.slice(0, 6)];
  const row2 = [...collabs.slice(6), ...collabs.slice(6), ...collabs.slice(6), ...collabs.slice(6)];

  return (
    <section id="studio" className="relative overflow-hidden bg-ink py-20 md:py-32">
      {/* Dotted world map background */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" className="text-foreground" />
            </pattern>
            <mask id="map-mask">
              {/* Simplified world map continental shapes */}
              {/* North America */}
              <ellipse cx="280" cy="200" rx="120" ry="100" fill="white" />
              <ellipse cx="250" cy="160" rx="80" ry="50" fill="white" />
              {/* South America */}
              <ellipse cx="320" cy="380" rx="60" ry="120" fill="white" />
              {/* Europe */}
              <ellipse cx="560" cy="170" rx="60" ry="60" fill="white" />
              <ellipse cx="530" cy="140" rx="40" ry="30" fill="white" />
              {/* Africa */}
              <ellipse cx="560" cy="320" rx="70" ry="110" fill="white" />
              {/* Asia */}
              <ellipse cx="750" cy="200" rx="150" ry="100" fill="white" />
              <ellipse cx="850" cy="160" rx="80" ry="60" fill="white" />
              <ellipse cx="700" cy="150" rx="60" ry="40" fill="white" />
              {/* Australia */}
              <ellipse cx="900" cy="400" rx="70" ry="50" fill="white" />
              {/* Southeast Asia / India */}
              <ellipse cx="780" cy="300" rx="50" ry="40" fill="white" />
              <ellipse cx="680" cy="280" rx="35" ry="40" fill="white" />
            </mask>
          </defs>
          <rect width="1200" height="600" fill="url(#dot-grid)" mask="url(#map-mask)" />
        </svg>
      </div>

      {/* Large background headings */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-display text-[14vw] md:text-[10vw] lg:text-[8vw] text-mint/[0.07] leading-none tracking-wider">
          GLOBAL
        </h2>
        <h2 className="text-display text-[14vw] md:text-[10vw] lg:text-[8vw] text-foreground/[0.04] leading-none tracking-wider -mt-2 md:-mt-4">
          CLIENTELES
        </h2>
      </div>

      {/* Section header */}
      <div className="relative z-10 px-6 md:px-10 mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">
              [ 04 — In good company ]
            </p>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
              Brands that{" "}
              <span className="text-mint">trust us</span>
              <br className="hidden md:block" />
              {" "}with the mic.
            </h2>
          </div>
          <p className="text-foreground/50 text-sm md:text-base max-w-xs leading-relaxed hidden md:block">
            From startups to global names — the brands we've helped grow louder.
          </p>
        </div>
      </div>

      {/* Marquee row 1 — scrolls left */}
      <div className="relative z-10 overflow-hidden mb-3 md:mb-4">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

        <div className="flex marquee w-max hover:[animation-play-state:paused]">
          {row1.map((name, i) => (
            <span key={`r1-${i}`} className="flex items-center shrink-0">
              <span className="text-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.08em] text-foreground/70 hover:text-mint transition-colors duration-300 cursor-default px-6 md:px-10">
                {name}
              </span>
              <span className="w-px h-6 md:h-9 bg-mint/25 shrink-0" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — scrolls right (reverse) */}
      <div className="relative z-10 overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-reverse w-max hover:[animation-play-state:paused]">
          {row2.map((name, i) => (
            <span key={`r2-${i}`} className="flex items-center shrink-0">
              <span className="text-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.08em] text-foreground/40 hover:text-mint transition-colors duration-300 cursor-default px-6 md:px-10">
                {name}
              </span>
              <span className="w-px h-6 md:h-9 bg-mint/15 shrink-0" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-36 noise">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-1 md:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] text-mint mb-4">[ 05 — Say hi ]</p>
          <h2 className="text-display text-6xl md:text-8xl leading-[0.85]">
            Lowkey
            <br />
            excited
            <br />
            to hear
            <br />
            <span className="text-mint font-space-grotesk font-light">from you.</span>
          </h2>
          <div className="mt-8 md:mt-10 space-y-3 text-foreground/80">
            <a
              href="mailto:hi@gritink.studio"
              className="block text-2xl md:text-3xl text-display hover:text-mint transition"
            >
              hi@gritink.studio
            </a>
            <p className="text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] text-foreground/60">
              Brooklyn · Lisbon · Bangalore
            </p>
          </div>
        </div>

        <form
          className="col-span-1 md:col-span-6 bg-card/60 backdrop-blur border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label="Your name" placeholder="What do we call you?" />
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
                  className="rounded-full border border-border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:border-mint hover:text-mint transition"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2">
              Tell us the messy version
            </label>
            <textarea
              rows={4}
              placeholder="What are you trying to make happen?"
              className="w-full bg-background/60 border border-border rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none focus:border-mint transition resize-none"
            />
          </div>
          <button className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-mint text-primary-foreground py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold hover:bg-accent hover:scale-[1.02] transition">
            Send it
            <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
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
