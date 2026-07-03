import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Vidio({ videoSrc }) {
  const outerRef   = useRef(null); // scrollable tall container
  const stickyRef  = useRef(null); // sticky viewport-height panel
  const phoneRef   = useRef(null); // GSAP transform target (3-D rotations / scale / opacity)
  const morphRef   = useRef(null); // GSAP morph target (width / aspectRatio / borderRadius)
  const glowRef    = useRef(null);
  const headerRef  = useRef(null);
  const islandRef  = useRef(null); // Dynamic Island – fades out during morph
  const homeBarRef = useRef(null); // Home bar – fades out during morph
  const buttonsRef = useRef(null); // Side buttons wrapper – fades out during morph

  useEffect(() => {
    const outer = outerRef.current;
    const phone = phoneRef.current;
    const morph = morphRef.current;
    if (!outer || !phone || !morph) return;

    // ── Initial states ──
    gsap.set(phone,         { scale: 0.72, y: 140, opacity: 0, rotateY: -25 });
    gsap.set(headerRef.current, { opacity: 0, y: 40 });

    // Morph starts as a phone
    gsap.set(morph, {
      width: "clamp(190px, 26vw, 330px)",
      height: "auto",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end:   "bottom bottom",
          scrub: 1.4,
        },
      });

      // ── Step 1 (0 → 0.22): Fade in + rise ──
      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }, 0)
        .to(phone, { scale: 1, y: 0, opacity: 1, rotateY: 0, duration: 0.22, ease: "power3.out" }, 0)
        .to(glowRef.current,  { opacity: 1, duration: 0.2 }, 0);

      // ── Step 2 (0.22 → 0.52): 360° Y-rotation ──
      tl.to(phone, { rotateY: 360, duration: 0.3, ease: "none" }, 0.22);

      // ── Step 3 (0.52 → 0.7): Zoom in + slight tilt ──
      tl.to(phone, { scale: 1.18, rotateY: 415, rotateX: 7, duration: 0.18, ease: "power2.inOut" }, 0.52);

      // ── Step 4 (0.7 → 0.84): Straighten + hold ──
      tl.to(phone, { rotateY: 360, rotateX: 0, scale: 1.06, duration: 0.14, ease: "power2.out" }, 0.7);

      // ── Step 5 (0.84 → 1.0): Phone → Tablet morph ──
      // Fade header + phone UI details (island / buttons / home bar)
      tl.to(headerRef.current,  { opacity: 0, y: -30, duration: 0.06 }, 0.84);
      tl.to(islandRef.current,  { opacity: 0, duration: 0.08 }, 0.84);
      tl.to(buttonsRef.current, { opacity: 0, duration: 0.06 }, 0.84);
      tl.to(homeBarRef.current, { opacity: 0, duration: 0.06 }, 0.84);

      // Animate the outer wrapper from phone proportions to tablet proportions
      tl.to(morph, {
        width:       "min(72vw, 860px)",     // tablet width
        height:      "min(52vw, 640px)",     // tablet height (landscape)
        borderRadius: "24px",               // tablet uses a smaller radius
        duration: 0.12,
        ease: "power2.inOut",
      }, 0.86);

      // Scale the phone wrapper back to 1.0 so the morph dimensions are true
      tl.to(phone, { scale: 1, rotateY: 0, rotateX: 0, duration: 0.08, ease: "power2.out" }, 0.86);

      // Hold tablet briefly (0.94 → 0.97), then fade out
      tl.to(phone, { opacity: 0, y: -40, duration: 0.06, ease: "power2.in" }, 0.95);

    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    /* Tall scrollable container — 5× viewport height for extra morph room */
    <div ref={outerRef} style={{ height: "500vh" }} className="relative">

      {/* ── Sticky full-screen panel ── */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, #071410 0%, #040d0b 50%, #000000 100%)",
          perspective: "1100px",
        }}
      >
        {/* Ambient glows */}
        <div ref={glowRef} className="absolute inset-0 pointer-events-none opacity-0">
          <div
            className="absolute rounded-full"
            style={{
              width: "60vw", height: "60vw",
              top: "5%", left: "20%",
              background: "rgba(100,255,190,0.08)",
              filter: "blur(160px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "35vw", height: "35vw",
              bottom: "0", right: "8%",
              background: "rgba(80,160,255,0.05)",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* Header */}
        <div
          ref={headerRef}
          className="absolute top-0 left-0 w-full px-6 md:px-10 pt-14 md:pt-20 z-20 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.4em] text-mint/70 mb-3 font-mono">
              [ Studio Reel · 2026 ]
            </p>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
              One minute,
              <br />
              <span className="text-mint font-space-grotesk font-light">
                a lot of receipts.
              </span>
            </h2>
          </div>
        </div>

        {/* ── Device wrapper (3-D transforms live here) ── */}
        <div
          ref={phoneRef}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*
            Morph shell — its width/height/borderRadius are tweened by GSAP.
            It starts as a phone (tall 9:19.5), morphs to a tablet (landscape).
          */}
          <div
            ref={morphRef}
            style={{
              width:        "clamp(190px, 26vw, 330px)",
              height:       "auto",
              aspectRatio:  "9 / 19.5",   // phone portrait – overridden by explicit height during morph
              position:     "relative",
              flexShrink:   0,
              background:   "linear-gradient(145deg, #1c1c1e 0%, #080808 40%, #131313 100%)",
              borderRadius: "clamp(26px, 6%, 46px)",
              border:       "1px solid rgba(255,255,255,0.07)",
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.04),
                0 40px 90px rgba(0,0,0,0.85),
                0 10px 30px rgba(0,0,0,0.6),
                inset 0 1px 0 rgba(255,255,255,0.09),
                inset 0 -1px 0 rgba(255,255,255,0.02)
              `,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "box-shadow 0.4s",
            }}
          >
            {/* Gloss reflection */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[inherit] z-10"
              style={{
                background:
                  "linear-gradient(130deg, rgba(255,255,255,0.08) 0%, transparent 55%, rgba(255,255,255,0.02) 100%)",
              }}
            />

            {/* Side buttons (phone-only UI, fades during morph) */}
            <div ref={buttonsRef} className="absolute inset-0 pointer-events-none">
              {/* Left volume */}
              {[["22%", "8%"], ["33%", "12%"], ["47%", "12%"]].map(([top, h], i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: "-3px", top, width: 3, height: h,
                    background: "#1a1a1a",
                    borderRadius: "2px 0 0 2px",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                />
              ))}
              {/* Right power */}
              <div
                className="absolute"
                style={{
                  right: "-3px", top: "28%", width: 3, height: "16%",
                  background: "#1a1a1a",
                  borderRadius: "0 2px 2px 0",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Screen */}
            <div
              className="relative flex-1 mx-[4%] mt-[2%] mb-[1%] overflow-hidden"
              style={{
                borderRadius: "inherit",
                background: "#000",
                boxShadow: "inset 0 0 24px rgba(0,0,0,0.9)",
              }}
            >
              {/* Dynamic Island */}
              <div
                ref={islandRef}
                className="absolute z-10 flex items-center justify-between"
                style={{
                  top: "clamp(6px, 2.5%, 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "clamp(65px, 27%, 100px)",
                  height: "clamp(18px, 3.5%, 28px)",
                  background: "#000",
                  borderRadius: "999px",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                  padding: "0 7px",
                }}
              >
                <div style={{ width: 5, height: 5, background: "#0e0e0e", borderRadius: "50%", boxShadow: "inset 0 0 2px rgba(255,255,255,0.08)" }} />
                <div style={{ width: 7, height: 7, background: "#040404", borderRadius: "50%", boxShadow: "0 0 5px rgba(80,140,255,0.25)" }} />
              </div>

              {/* Video — single element, never remounted */}
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Screen glass shimmer */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.015) 100%)",
                }}
              />
            </div>

            {/* Home bar */}
            <div ref={homeBarRef} className="flex justify-center pb-[3%]">
              <div style={{ width: "28%", height: 4, background: "rgba(255,255,255,0.18)", borderRadius: 2 }} />
            </div>
          </div>

          {/* Floor shadow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-10%",
              left: "10%",
              right: "10%",
              height: "8%",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)",
              filter: "blur(14px)",
            }}
          />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 font-mono">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-mint/50 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
