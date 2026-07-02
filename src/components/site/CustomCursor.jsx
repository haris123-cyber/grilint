import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let animationFrameId;

    const onMouseMove = (e) => {
      setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.tilt-hover') ||
        target.closest('.group') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    const animateOutline = () => {
      const ease = 0.15;
      outlineX += (mouseX - outlineX) * ease;
      outlineY += (mouseY - outlineY) * ease;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateOutline);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animateOutline);

    const style = document.createElement("style");
    style.innerHTML = `
      @media (pointer: fine) {
        * { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOutlineRef}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-mint rounded-full pointer-events-none z-[9998] hidden md:block ${
          !isVisible ? "opacity-0" : "opacity-50"
        } ${isHovering ? "scale-150 opacity-0" : "scale-100"} transition-all duration-300 ease-out`}
      />
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-mint rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block ${
          !isVisible ? "opacity-0" : "opacity-100"
        } ${isHovering ? "scale-[3] opacity-60" : "scale-100"}`}
      />

    </>
  );
}
