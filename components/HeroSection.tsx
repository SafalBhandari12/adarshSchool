"use client";

import PillNav from "./PillNav";

export default function HeroSection() {
  return (
    <section id='home' className='relative h-screen'>
      {/* Navigation Bar */}
      <PillNav
        logo='/next.svg'
        logoAlt='Adarsh School Dress Logo'
        items={[
          { label: "About", href: "#about" },
          { label: "Products", href: "#products" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref='#home'
        className='custom-nav'
        ease='power2.easeOut'
        baseColor='#ffffff'
        pillColor='#000000'
        hoveredPillTextColor='#000000'
        pillTextColor='#ffffff'
      />

      {/* Hero Content - Center */}
      <div className='absolute inset-0 flex items-center justify-center text-center px-4'>
        <div className='max-w-4xl mx-auto'>
          <img
            src='/images/heroText.png'
            alt='Crafting Excellence, Inspiring Confidence'
            className='w-full max-w-3xl mx-auto h-auto drop-shadow-xl'
            style={{
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
