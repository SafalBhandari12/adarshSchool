"use client";

import { useEffect } from "react";

export default function ParallaxBackground() {
  useEffect(() => {
    const parallaxElement = document.getElementById("parallax-bg");

    const handleScroll = () => {
      if (parallaxElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Negative for upward movement
        parallaxElement.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id='parallax-bg'
      className='fixed top-0 left-0 w-full h-[110vh]'
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        zIndex: -10,
        willChange: "transform",
      }}
    />
  );
}
