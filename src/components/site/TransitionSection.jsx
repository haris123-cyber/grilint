import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TransitionSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const chars = textRef.current.querySelectorAll(".char");
    
    gsap.fromTo(chars, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "top top",
          scrub: 1,
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full bg-ink text-foreground flex flex-col items-center justify-center overflow-hidden z-10 noise"
    >
      {/* Decorative Parallax Elements */}
      <div className="absolute top-[20%] left-[15%] w-16 h-16 rounded-full bg-mint/10 blur-xl pointer-events-none float-y" />
      <div className="absolute bottom-[25%] right-[20%] w-32 h-32 rounded-full bg-forest/20 blur-2xl pointer-events-none glow-pulse" />
      <div className="absolute top-[10%] right-[10%] text-mint/30 text-sm font-mono tracking-widest pointer-events-none spin-slow">
        [///]
      </div>
      
      {/* Main Content */}
      <div className="text-center z-10 flex flex-col items-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-mint mb-6 font-mono opacity-80">
          The next chapter
        </p>
        
        <h2 
          ref={textRef}
          className="text-display text-[15vw] md:text-[12vw] leading-none mb-4 flex flex-wrap justify-center gap-x-[2vw]"
        >
          <span className="flex overflow-hidden pb-4">
            {"READY".split("").map((char, i) => (
              <span key={i} className="char inline-block">{char}</span>
            ))}
          </span>
          <span className="flex overflow-hidden pb-4">
            {"TO".split("").map((char, i) => (
              <span key={i} className="char inline-block">{char}</span>
            ))}
          </span>
          <span className="flex overflow-hidden pb-4 text-mint font-space-grotesk font-light">
            {"SCALE?".split("").map((char, i) => (
              <span key={i} className="char inline-block">{char}</span>
            ))}
          </span>
        </h2>
        
        <p className="max-w-md text-foreground/60 text-sm md:text-base leading-relaxed px-6">
          You made it to the end. But for your brand, this is just the beginning. 
          Let's build something the internet won't ignore.
        </p>
      </div>
    </section>
  );
}
