"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const followerPosition = useRef({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(
          ${event.clientX}px,
          ${event.clientY}px,
          0
        ) translate(-50%, -50%)`;
      }
    };

    const animateFollower = () => {
      const speed = 0.14;

      followerPosition.current.x +=
        (mousePosition.current.x - followerPosition.current.x) * speed;

      followerPosition.current.y +=
        (mousePosition.current.y - followerPosition.current.y) * speed;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(
          ${followerPosition.current.x}px,
          ${followerPosition.current.y}px,
          0
        ) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, [role='button'], input, textarea, select",
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* trailing circle */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          rounded-full
          border
          border-[#2563EB]/70
          transition-[width,height,background-color,border-color,opacity]
          duration-300
          lg:block
          ${
            isHovering
              ? "h-14 w-14 border-[#5EEAD4] bg-[#5EEAD4]/10"
              : "h-9 w-9"
          }
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* actual cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          select-none
          font-mono
          text-[12px]
          font-bold
          tracking-[-0.12em]
          transition-colors
          duration-200
          lg:block
          ${isHovering ? "text-[#0F766E]" : "text-[#0B132B]"}
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        {"</>"}
      </div>
    </>
  );
}
