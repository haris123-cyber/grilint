import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export function PageLayout({ children }) {
  const mainRef = useRef(null);
  const contentAboveRef = useRef(null);
  const footerTriggerRef = useRef(null);

  useGSAP(
    () => {
      if (!footerTriggerRef.current) return;

      // 1. Scale down the content above when scrolling down to the footer
      gsap.to(contentAboveRef.current, {
        scale: 0.95,
        borderRadius: "40px",
        boxShadow: "0px 20px 50px rgba(0,0,0,0.5)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footerTriggerRef.current,
          start: "top bottom", // when footer starts revealing from the bottom
          end: "top top", // until footer is fully revealed
          scrub: true,
        },
      });
    },
    { scope: mainRef },
  );

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-background text-foreground overflow-x-clip relative z-0"
    >
      <Nav />
      <div
        ref={contentAboveRef}
        className="bg-background relative z-20 origin-bottom transform-gpu pb-10 shadow-2xl"
      >
        {children}
      </div>

      {/* Footer Reveal Wrapper */}
      <div
        ref={footerTriggerRef}
        className="relative z-0 h-screen w-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 left-0 w-full h-screen">
          <Footer />
        </div>
      </div>
    </main>
  );
}
