"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { HiOutlineMapPin } from "react-icons/hi2";

const contactLinks = [
  {
    label: "Email",
    value: "maazuzair3322@gmail.com",
    href: "mailto:maazuzair3322@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/syed-uzair-ali-a85764104/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View my code & projects",
    href: "https://github.com/SyedUzairAlii",
    icon: FaGithub,
  },
  {
    label: "Upwork",
    value: "View freelance profile",
    href: "https://www.upwork.com/freelancers/~016b15700a36b2be2f?mp_source=share",
    icon: FaUpwork,
  },
  {
    label: "Fiverr",
    value: "View client reviews",
    href: "https://www.fiverr.com/s/bk9KqeN",
    icon: SiFiverr,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-cursor-light
      className="w-full scroll-mt-20 bg-[#0B132B]"
    >
      <div className="mx-auto max-w-[1328px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#5EEAD4]" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
                Get In Touch
              </p>
            </div>

            {/* Increased line-height fixes clipped letters like g */}
            <h2 className="mt-6 max-w-[760px] text-[42px] font-bold leading-[1.12] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[62px]">
              Let&apos;s build something
              <span className="block pb-2 bg-gradient-to-r from-[#93C5FD] to-[#5EEAD4] bg-clip-text text-transparent">
                meaningful together.
              </span>
            </h2>

            <p className="mt-6 max-w-[640px] text-[17px] leading-8 text-[#AAB7CC]">
              I&apos;m open to software engineering opportunities where I can
              contribute to real products, solve meaningful problems, and
              continue growing across frontend and full-stack development.
            </p>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.06] px-4 py-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5EEAD4] opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#5EEAD4]" />
              </span>

              <span className="text-sm font-medium text-[#C9F7EF]">
                Open to software engineering opportunities
              </span>
            </div>

            {/* Main CTA */}
            <div className="mt-10">
              <a
                href="mailto:maazuair3322@gmail.com"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0B132B] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EAF2F4]"
              >
                <FaEnvelope className="text-[17px]" />
                Send me an email
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Location */}
            <div className="mt-10 flex items-start gap-3">
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#5EEAD4]">
                <HiOutlineMapPin className="text-lg" />
              </div>

              <div>
                <p className="text-sm text-[#7F91AD]">Based in</p>

                <p className="mt-1 font-medium text-white">Karachi, Pakistan</p>

                <p className="mt-1 text-sm leading-6 text-[#8FA0B8]">
                  Open to remote opportunities worldwide
                  <span className="block">
                    Willing to relocate for the right opportunity
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[28px] border border-white/[0.09] bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7F91AD]">
              Connect With Me
            </p>

            <div className="mt-6 divide-y divide-white/[0.08]">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    className="group flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {/* Icon */}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-[18px] text-[#93C5FD] transition-all duration-200 group-hover:border-[#5EEAD4]/30 group-hover:bg-[#5EEAD4]/[0.06] group-hover:text-[#5EEAD4]">
                        <Icon />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-sm text-[#7F91AD]">{item.label}</p>

                        <p className="mt-1 truncate font-medium text-white transition-colors duration-200 group-hover:text-[#5EEAD4]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 text-[#93C5FD] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5EEAD4]">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/[0.08] pt-7 text-sm text-[#71819A] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Syed Uzair Ali. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-fit font-medium text-[#93C5FD] transition-colors hover:text-[#5EEAD4]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
