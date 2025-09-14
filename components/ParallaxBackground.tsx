"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const parallaxElement = document.getElementById("parallax-bg");

    const handleScroll = () => {
      if (parallaxElement) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Negative for upward movement

        // Find the BulkOrdersSection to stop parallax before it
        const bulkOrdersSection = document.getElementById("bulk-orders");

        if (bulkOrdersSection) {
          const bulkOrdersTop = bulkOrdersSection.offsetTop;
          const windowHeight = window.innerHeight;

          // Hide parallax when we're close to the bulk orders section
          if (scrolled + windowHeight > bulkOrdersTop - 100) {
            setShouldHide(true);
          } else {
            setShouldHide(false);
            parallaxElement.style.transform = `translate3d(0, ${rate}px, 0)`;
          }
        } else {
          // Fallback if bulk orders section not found
          parallaxElement.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
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
      className={`fixed top-0 left-0 w-full h-[110vh] transition-opacity duration-500 ${
        shouldHide ? "opacity-0" : "opacity-100"
      }`}
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
