import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pline from "../../assets/pline.png";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".footer-anim",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%", // Start animation when footer wrapper is partially in view
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="w-full h-screen px-6 md:px-10 pt-24 pb-10 border-t border-border bg-forest/20 noise overflow-hidden flex flex-col justify-between relative">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-display text-[22vw] md:text-[16vw] leading-[0.85] text-mint text-display text-7xl md:text-9xl leading-[0.8] tracking-tight uppercase font-bold text-foreground">
          BIG VIBES.
          <br />
          <span className="text-foreground">BIGGER IDEAS.</span>
        </h2>
      </div>

      {/* 3D Icon */}
      <img
        src={pline}
        alt=""
        className="
absolute
top-1/3
right-10
sm:right-10
md:right-[20%]
w-16
sm:w-20
md:w-32
pointer-events-none
animate-float
footer-anim
"
      />

      <div className="mt-auto grid grid-cols-12 gap-6 text-sm footer-anim">
        <div className="col-span-12 md:col-span-4">
          <p className="text-display text-2xl text-mint">GRITINK®</p>
          <p className="mt-2 text-foreground/70 max-w-xs">
            A digital studio for brands that refuse to whisper.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">Studio</p>
          <ul className="space-y-2 text-foreground/80">
            <li>
              <Link to="/work" className="hover:text-mint transition">
                Work
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-mint transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/studio" className="hover:text-mint transition">
                Studio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-mint transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">Social</p>
          <ul className="space-y-2 text-foreground/80">
            <li>
              <a href="#" className="hover:text-mint transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-mint transition">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-mint transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 text-foreground/60 flex items-end">
          © {new Date().getFullYear()} GritInk Studio. All ideas reserved.
        </div>
      </div>
    </footer>
  );
}
