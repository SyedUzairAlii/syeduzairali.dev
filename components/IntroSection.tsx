import PortraitSlideshow from "./PortraitSlideshow";
const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "React Native",
  "HTML5",
  "CSS3",
  "Git / GitHub",
];

const highlights = [
  {
    value: "6+",
    label: "Years Experience",
  },
  {
    value: "React",
    label: "Primary Focus",
  },
  {
    value: "Web + Mobile",
    label: "Production Apps",
  },
];

export default function IntroSection() {
  return (
    <main id="home" className="w-full bg-[#E4EFF1]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1328px] grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-12 lg:py-20">
        {/* Left Content */}
        <div className="flex max-w-[680px] flex-col items-start">
          {/* Availability */}
          <div className="flex items-center gap-2 rounded-full bg-[#D2E8E1] px-3 py-2">
            <span className="size-2 rounded-full bg-[#10B981]" />

            <span className="text-[11px] font-semibold tracking-[0.03em] text-[#047857] sm:text-xs">
              OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
            </span>
          </div>

          {/* Intro */}
          <p className="mt-7 text-lg font-medium text-[#64748B]">
            Hello, I&apos;m
          </p>

          <h1 className="mt-1 text-[48px] font-bold leading-[1.02] tracking-[-0.045em] text-[#0F172A] sm:text-[58px] lg:text-[68px]">
            Syed Uzair Ali
          </h1>

          {/* Roles */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[21px] font-semibold text-[#1D4ED8] sm:text-[26px]">
              Software Engineer
            </span>

            <span className="hidden size-1.5 rounded-full bg-[#94A3B8] sm:block" />

            <span className="text-[21px] font-semibold text-[#0F766E] sm:text-[26px]">
              MERN Stack Developer
            </span>
          </div>

          {/* Technology Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#C9D6DC] bg-white px-3 py-[7px] text-[13px] font-medium text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 max-w-[610px] text-[17px] leading-7 text-[#475569]">
            I build scalable web and mobile applications with React, TypeScript,
            and modern JavaScript, with hands-on experience across the MERN
            stack and a strong focus on product quality, performance, and
            reliable delivery.
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-[14px] bg-[#0B132B] px-5 py-[14px] text-[15px] font-semibold text-white transition duration-200 hover:bg-[#172554]"
            >
              View My Work →
            </a>

            <a
              href="https://github.com/SyedUzairAlii"
              target="_blank"
              rel="noreferrer"
              className="rounded-[14px] border border-[#B9CCD2] bg-[#EDF5F6] px-[18px] py-[14px] text-[15px] font-semibold text-[#0F172A] transition duration-200 hover:bg-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/syed-uzair-ali-a85764104/"
              target="_blank"
              rel="noreferrer"
              className="rounded-[14px] border border-[#B9CCD2] bg-[#EDF5F6] px-[18px] py-[14px] text-[15px] font-semibold text-[#0F172A] transition duration-200 hover:bg-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="relative aspect-[460/610] overflow-hidden rounded-[34px] border border-[#B7C8D2] bg-[#DDE7EA]">
            {/* Animated gradient background */}
            <div
              className="
      absolute -inset-[50%]
      animate-[spin_12s_linear_infinite]
      bg-[conic-gradient(from_0deg,#CFE0F5,#5EEAD4,#93C5FD,#D8F2EC,#CFE0F5)]
      motion-reduce:animate-none"
            />
            {/* Soft layer above rotating gradient */}
            <div className="absolute inset-[2px] rounded-[32px] bg-[#E4EFF1]/35 backdrop-blur-[2px]" />

            {/* Portrait Slideshow */}
            <PortraitSlideshow />
          </div>
        </div>
      </div>
    </main>
  );
}
