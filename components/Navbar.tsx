"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/app/icon.png";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Certifications",
    href: "#certifications",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B132B]">
      <nav className="mx-auto flex min-h-20 max-w-[1328px] items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3" aria-label="Go to top">
          <Image
            src={logo}
            alt="Syed Uzair Ali logo"
            width={44}
            height={44}
            priority
            className="size-11 rounded-xl"
          />

          <span className="text-[17px] font-semibold text-[#EAF2F4]">
            Syed Uzair Ali
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#C7D2E1] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#D9ECEE] px-[18px] py-[11px] text-sm font-semibold text-[#0B132B] transition duration-200 hover:bg-white"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/15 lg:hidden"
        >
          <span className="h-[2px] w-5 rounded-full bg-white" />
          <span className="h-[2px] w-5 rounded-full bg-white" />
          <span className="h-[2px] w-5 rounded-full bg-white" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B132B] px-6 pb-6 lg:hidden">
          <div className="mx-auto flex max-w-[1328px] flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#C7D2E1] transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-[#D9ECEE] px-4 py-3 text-center text-sm font-semibold text-[#0B132B]"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
