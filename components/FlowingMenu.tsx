"use client";

import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  React.useEffect(() => {
    // Add custom keyframes to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        from { transform: translateX(0%); }
        to { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='w-full h-full overflow-hidden'>
      <nav className='flex flex-col h-full m-0 p-0'>
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      {
        y: edge === "top" ? "101%" : "-101%",
      }
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className='text-[#D6A99D] uppercase font-bold text-[4vh] leading-[1.2] p-[1vh_1vw_0] tracking-wider'>
          {text}
        </span>
        <div
          className='w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[20px] bg-cover bg-center border-2 border-[#D6A99D] shadow-lg'
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div
      className='flex-1 relative overflow-hidden text-center border-b border-[#D6A99D] border-opacity-30'
      ref={itemRef}
    >
      <a
        className='flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-bold text-[#D6A99D] text-[4vh] hover:text-[#9A6F5D] focus:text-[#D6A99D] focus-visible:text-[#9A6F5D] transition-all duration-300 tracking-wider group'
        style={{
          fontFamily: "Playfair Display, serif",
          textShadow: "1px 1px 2px rgba(214, 169, 157, 0.3)",
        }}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className='mr-4'>{text}</span>
        <svg 
          className='w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' 
          fill='currentColor' 
          viewBox='0 0 20 20'
        >
          <path 
            fillRule='evenodd' 
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' 
            clipRule='evenodd'
          />
        </svg>
      </a>
      <div
        className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]'
        ref={marqueeRef}
      >
        <div className='h-full w-[200%] flex' ref={marqueeInnerRef}>
          <div className='flex items-center relative h-full w-[200%] will-change-transform animate-[marquee_15s_linear_infinite]'>
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
