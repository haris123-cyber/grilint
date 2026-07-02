import { Link } from "@tanstack/react-router";
import pline from "../../assets/pline.png";
import idia from "../../assets/idia.png";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-10 pt-24 pb-10 border-t border-border bg-forest/20 noise overflow-hidden">
      <h2 className="text-display text-[22vw] md:text-[16vw] leading-[0.85] text-mint mix-blend-screen">
        BIG VIBES.
        <br />
        <span className="text-foreground">BIGGER IDEAS.</span>
      </h2>
      {/* 3D Icon */}
      <img
        src={pline}
        alt=""
        className="
absolute
top-20
sm:top-20
md:top-16
lg:top-20
xl:top-24

right-10
sm:right-10
md:right-[300px]
lg:right-[260px]
xl:right-[520px]
2xl:right-[45%]

w-10
sm:w-10
md:w-15
lg:w-20 
xl:w-24
2xl:w-38

pointer-events-none
animate-float
"
      />
    

      <div className="mt-16 grid grid-cols-12 gap-6 text-sm">
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
        <div className="col-span-12 md:col-span-4 text-foreground/60">
          © {new Date().getFullYear()} GritInk Studio. All ideas reserved.
        </div>
      </div>
    </footer>
  );
}
