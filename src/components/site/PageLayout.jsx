import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { TransitionSection } from "./TransitionSection";

gsap.registerPlugin(ScrollTrigger);

export function PageLayout({ children, showTransition = true }) {
  const mainRef = useRef(null);
  const contentAboveRef = useRef(null);
  const transitionRef = useRef(null);

  useGSAP(() => {
    if (!transitionRef.current) return;

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
        {children}
      </div>

      {showTransition && (
        <div ref={transitionRef} className="relative z-10 bg-background">
          <TransitionSection />
        </div>
      )}

      {/* Footer Reveal Wrapper */}
      <div className="relative z-0 h-screen w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="fixed bottom-0 left-0 w-full h-screen">
          <Footer />
        </div>
      </div>
    </main>
  );
}
