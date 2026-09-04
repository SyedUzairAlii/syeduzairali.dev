"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Only use custom cursor on devices with a real mouse/pointer.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mouse = {
      x: 0,
      y: 0,
    };

    const followerPosition = {
      x: 0,
      y: 0,
    };

    let hasMoved = false;
    let animationFrameId = 0;

    const updateFollower = () => {
      if (hasMoved) {
        const speed = reducedMotion ? 1 : 0.14;

        followerPosition.x += (mouse.x - followerPosition.x) * speed;

        followerPosition.y += (mouse.y - followerPosition.y) * speed;

        follower.style.transform = `
          translate3d(
            ${followerPosition.x}px,
            ${followerPosition.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrameId = requestAnimationFrame(updateFollower);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // Actual </> cursor follows mouse immediately.
      cursor.style.transform = `
        translate3d(
          ${event.clientX}px,
          ${event.clientY}px,
          0
        )
        translate(-50%, -50%)
      `;

      // Prevent follower from animating from top-left
      // when the cursor first enters the page.
      if (!hasMoved) {
        followerPosition.x = event.clientX;
        followerPosition.y = event.clientY;

        follower.style.transform = `
          translate3d(
            ${event.clientX}px,
            ${event.clientY}px,
            0
          )
          translate(-50%, -50%)
        `;

        hasMoved = true;
      }

      cursor.style.opacity = "1";
      follower.style.opacity = "1";

      const target = event.target instanceof Element ? event.target : null;

      // Any parent with data-cursor-light will use
      // the white cursor.
      const isDarkSection = Boolean(target?.closest("[data-cursor-light]"));

      // Detect links/buttons/etc.
      const isInteractive = Boolean(
        target?.closest(
          [
            "a",
            "button",
            "[role='button']",
            "input",
            "textarea",
            "select",
            "[data-cursor-interactive]",
          ].join(","),
        ),
      );

      // Cursor color
      cursor.style.color = isDarkSection ? "#F8FAFC" : "#0B132B";

      // Follower styling
      if (isDarkSection) {
        follower.style.borderColor = "rgba(248, 250, 252, 0.75)";

        follower.style.backgroundColor = isInteractive
          ? "rgba(248, 250, 252, 0.08)"
          : "transparent";
      } else {
        follower.style.borderColor = isInteractive
          ? "rgba(15, 118, 110, 0.65)"
          : "rgba(11, 19, 43, 0.35)";

        follower.style.backgroundColor = isInteractive
          ? "rgba(15, 118, 110, 0.08)"
          : "transparent";
      }

      // Expand follower over clickable elements.
      if (isInteractive) {
        follower.style.width = "48px";
        follower.style.height = "48px";
      } else {
        follower.style.width = "36px";
        follower.style.height = "36px";
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      follower.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        cursor.style.opacity = "1";
        follower.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    animationFrameId = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Smooth trailing circle */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border opacity-0"
        style={{
          width: "36px",
          height: "36px",
          borderColor: "rgba(11, 19, 43, 0.35)",
          transition:
            "width 180ms ease, height 180ms ease, border-color 150ms ease, background-color 150ms ease, opacity 150ms ease",
          willChange: "transform",
        }}
      />

      {/* Actual developer cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] select-none font-mono text-[13px] font-bold opacity-0"
        style={{
          color: "#0B132B",
          transition: "color 150ms ease, opacity 150ms ease",
          willChange: "transform",
        }}
      >
        {"</>"}
      </div>
    </>
  );
}
