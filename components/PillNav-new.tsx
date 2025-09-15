"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillDimensions, setPillDimensions] = useState<
    Array<{
      width: number;
      height: number;
      radius: number;
      deltaY: number;
    }>
  >([]);

  const pillRefs = useRef<Array<HTMLLIElement | null>>([]);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Calculate pill circle dimensions
  useEffect(() => {
    const calculateDimensions = () => {
      const newDimensions = pillRefs.current.map((pill) => {
        if (!pill) return { width: 0, height: 0, radius: 0, deltaY: 0 };

        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;

        return {
          width: D,
          height: D,
          radius: R,
          deltaY: delta,
        };
      });
      setPillDimensions(newDimensions);
    };

    calculateDimensions();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
      calculateDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  // Set up circle positions based on pill dimensions
  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      if (!circle || !pillDimensions[index]) return;

      const { width, height, deltaY } = pillDimensions[index];
      const originY = height - deltaY;

      circle.style.width = `${width}px`;
      circle.style.height = `${height}px`;
      circle.style.bottom = `-${deltaY}px`;
      circle.style.left = "50%";
      circle.style.transform = "translateX(-50%) scale(0)";
      circle.style.transformOrigin = `50% ${originY}px`;
      circle.style.transition =
        "transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });
  }, [pillDimensions]);

  const handlePillEnter = (index: number) => {
    setHoveredIndex(index);

    const circle = circleRefs.current[index];
    const pill = pillRefs.current[index];
    const label = pill?.querySelector(".pill-label") as HTMLElement;
    const hoverLabel = pill?.querySelector(".pill-label-hover") as HTMLElement;

    if (circle) {
      circle.style.transform = "translateX(-50%) scale(1.2)";
    }

    if (label && hoverLabel && pillDimensions[index]) {
      const { height } = pillDimensions[index];
      label.style.transform = `translateY(-${height + 8}px)`;
      hoverLabel.style.transform = "translateY(0px)";
      hoverLabel.style.opacity = "1";
    }
  };

  const handlePillLeave = (index: number) => {
    setHoveredIndex(null);

    const circle = circleRefs.current[index];
    const pill = pillRefs.current[index];
    const label = pill?.querySelector(".pill-label") as HTMLElement;
    const hoverLabel = pill?.querySelector(".pill-label-hover") as HTMLElement;

    if (circle) {
      circle.style.transform = "translateX(-50%) scale(0)";
    }

    if (label && hoverLabel && pillDimensions[index]) {
      const { height } = pillDimensions[index];
      label.style.transform = "translateY(0px)";
      hoverLabel.style.transform = `translateY(${height + 12}px)`;
      hoverLabel.style.opacity = "0";
    }
  };

  const handleLogoHover = (isEntering: boolean) => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    if (isEntering) {
      logoElement.style.transform = "scale(1.1)";
    } else {
      logoElement.style.transform = "scale(1)";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onMobileMenuClick) {
      onMobileMenuClick();
    }
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    ["--base"]: "transparent",
    ["--pill-bg"]: "transparent",
    ["--hover-text"]: "#D6A99D",
    ["--pill-text"]: "#D6A99D",
    ["--nav-h"]: "80px",
    ["--logo"]: "76px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  } as React.CSSProperties;

  return (
    <div className='absolute top-[1em] z-50 w-full left-0 flex justify-center'>
      <nav
        className={`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 ${className}`}
        aria-label='Primary'
        style={{
          ...cssVars,
          gap: "8px",
          minWidth: "0",
        }}
      >
        {/* Logo */}
        {isRouterLink(items?.[0]?.href) ? (
          <Link
            href={items[0].href}
            aria-label='Home'
            onMouseEnter={() => handleLogoHover(true)}
            onMouseLeave={() => handleLogoHover(false)}
            role='menuitem'
            ref={(el) => {
              logoRef.current = el;
            }}
            className='p-2 inline-flex items-center justify-center overflow-hidden transition-transform duration-300'
            style={{
              width: "var(--nav-h)",
              height: "var(--nav-h)",
              background: "var(--base, #000)",
              flexShrink: 0,
              flexGrow: 0,
              transform: "scale(1)",
            }}
          >
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className='object-cover block'
              style={{
                transform: "none",
                transition: "none",
              }}
              priority
            />
          </Link>
        ) : (
          <a
            href={items?.[0]?.href || "#"}
            aria-label='Home'
            onMouseEnter={() => handleLogoHover(true)}
            onMouseLeave={() => handleLogoHover(false)}
            ref={(el) => {
              logoRef.current = el;
            }}
            className='p-2 inline-flex items-center justify-center overflow-hidden transition-transform duration-300'
            style={{
              width: "var(--nav-h)",
              height: "var(--nav-h)",
              background: "var(--base, #000)",
              flexShrink: 0,
              flexGrow: 0,
              transform: "scale(1)",
            }}
          >
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className='object-cover block'
              style={{
                transform: "none",
                transition: "none",
              }}
              priority
            />
          </a>
        )}

        {/* Desktop Navigation Items */}
        <div
          ref={navItemsRef}
          className='relative items-center hidden md:flex ml-2'
          style={{
            height: "var(--nav-h)",
            background: "transparent",
            padding: "0px",
            width: "auto",
            minWidth: "0",
            flexShrink: 0,
          }}
        >
          <ul
            role='menubar'
            className='list-none flex items-stretch m-0 p-[3px] h-full'
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg, #fff)",
                color: "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className='hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none'
                    style={{
                      background: "var(--base, #000)",
                      willChange: "transform",
                      position: "absolute",
                      transform: "translateX(-50%) scale(0)",
                    }}
                    aria-hidden='true'
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span
                    className='pill-label relative z-[2] transition-transform duration-500 ease-out'
                    style={{
                      display: "block",
                      color: "inherit",
                      transform: "translateY(0px)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className='pill-label-hover absolute inset-0 flex items-center justify-center z-[2] transition-all duration-500 ease-out'
                    style={{
                      color: "var(--hover-text, #fff)",
                      transform: "translateY(100px)",
                      opacity: 0,
                    }}
                  >
                    {item.label}
                  </span>
                </>
              );

              return (
                <li
                  key={item.href}
                  ref={(el) => {
                    pillRefs.current[i] = el;
                  }}
                  className={`pill-item relative h-full flex items-center justify-center cursor-pointer ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    ...pillStyle,
                    borderRadius: "50px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 300ms ease-out",
                  }}
                  onMouseEnter={() => handlePillEnter(i)}
                  onMouseLeave={() => handlePillLeave(i)}
                  role='menuitem'
                  aria-label={item.ariaLabel || item.label}
                >
                  {isRouterLink(item.href) ? (
                    <Link
                      href={item.href}
                      className='w-full h-full flex items-center justify-center relative'
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        minWidth: "80px",
                      }}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className='w-full h-full flex items-center justify-center relative'
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        minWidth: "80px",
                      }}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          ref={hamburgerRef}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none'
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 40,
        }}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          {items.map((item, index) => (
            <div
              key={item.href}
              className={`transition-all duration-500 ease-out ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {isRouterLink(item.href) ? (
                <Link
                  href={item.href}
                  className='text-2xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className='text-2xl font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillNav;
