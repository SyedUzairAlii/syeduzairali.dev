const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "My strongest engineering focus — building responsive, maintainable product experiences.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "Context API",
      "React Router",
      "Storybook",
      "SASS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Production backend experience supporting features across the MERN stack.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    number: "03",
    title: "Mobile",
    description:
      "Building and releasing cross-platform mobile applications for iOS and Android.",
    skills: [
      "React Native",
      "iOS",
      "Android",
      "TestFlight",
      "APK / IPA",
      "App Store",
      "Google Play",
    ],
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "Reliable delivery through testing, CI/CD, security work, and production ownership.",
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Snyk",
      "SOC 2",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full scroll-mt-20 bg-[#E8F0F2]">
      <div className="mx-auto max-w-[1328px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Heading */}
        <div className="max-w-[720px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#1D4ED8]" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">
              Skills & Technologies
            </p>
          </div>

          <h2 className="mt-6 text-[40px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B132B] sm:text-[48px] lg:text-[54px]">
            The tools I use to build
            <span className="block bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] bg-clip-text text-transparent">
              production software.
            </span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#64748B]">
            My experience spans frontend, backend, mobile development, testing,
            and production delivery — with frontend engineering remaining my
            strongest technical focus.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group relative overflow-hidden rounded-[26px] border border-[#C9D8DE] bg-white/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9DBDC0] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[24px] font-bold text-[#0B132B]">
                    {group.title}
                  </h3>

                  <p className="mt-2 max-w-[470px] text-sm leading-6 text-[#64748B]">
                    {group.description}
                  </p>
                </div>

                <span className="font-mono text-sm font-semibold text-[#94A3B8]">
                  {group.number}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#D4DFE3] bg-[#F8FBFC] px-3 py-[7px] text-[13px] font-medium text-[#475569] transition-colors duration-200 group-hover:bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
