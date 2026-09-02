"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/profile.jpg",
    alt: "Syed Uzair Ali",
    label: "Niche Office · Pittsburgh, PA",
    position: "object-[center_18%]",
  },
  {
    src: "/pittsburgh-skyline.jpg",
    alt: "Syed Uzair Ali with the Pittsburgh skyline",
    label: "Pittsburgh, PA",
    position: "object-center",
  },
  {
    src: "/niche-office.jpeg",
    alt: "Syed Uzair Ali outside the Niche office",
    label: "Niche · Pittsburgh, PA",
    position: "object-center",
  },
  {
    src: "/pittsburgh-street.png",
    alt: "Syed Uzair Ali in Pittsburgh",
    label: "Pittsburgh, PA",
    position: "object-center",
  },
];

const SLIDE_DURATION = 7000;

export default function PortraitSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative mx-auto w-full max-w-[460px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[460/610] overflow-hidden rounded-[34px] border border-[#B7C8D2] bg-[#DDE7EA]">
        {/* Rotating gradient */}
        <div
          className="
            absolute -inset-[50%]
            animate-[spin_20s_linear_infinite]
            bg-[conic-gradient(from_0deg,#CFE0F5,#5EEAD4,#93C5FD,#D8F2EC,#CFE0F5)]
            motion-reduce:animate-none
          "
        />

        {/* Soft overlay */}
        <div className="absolute inset-[2px] rounded-[32px] bg-[#E4EFF1]/30 backdrop-blur-[2px]" />

        {/* Slideshow */}
        <div className="absolute inset-[28px] overflow-hidden rounded-[28px] bg-[#DDE7EA]">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`
                object-cover
                ${slide.position}
                transition-all
                duration-1000
                ease-in-out
                ${
                  currentSlide === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.025] opacity-0"
                }
              `}
              sizes="(max-width: 1024px) 90vw, 402px"
            />
          ))}
        </div>

        {/* Dynamic location badge */}
        <div className="absolute bottom-[28px] left-[28px] z-10 flex items-center gap-2 rounded-full bg-white/95 px-[14px] py-[10px] shadow-sm backdrop-blur-md">
          <span className="size-2 rounded-full bg-[#2563EB]" />

          <span className="text-xs font-semibold text-[#334155]">
            {slides[currentSlide].label}
          </span>
        </div>

        {/* Slide navigation */}
        <div className="absolute bottom-[39px] right-[42px] z-10 flex items-center gap-[7px]">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              onClick={() => setCurrentSlide(index)}
              className={`
                h-2 rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "w-5 bg-[#2563EB]"
                    : "w-2 bg-white/80 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
