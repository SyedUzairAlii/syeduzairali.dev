const experiences = [
  {
    period: "Jan 2025 — Aug 2026",
    company: "Niche",
    role: "Associate Software Engineer",
    location: "Pittsburgh, PA, USA",
    workMode: "Remote",
    description:
      "Continued working on the product after Goodkind became part of Niche, with my role expanding from primarily frontend engineering into broader full-stack software development. Alongside React and TypeScript work, I increasingly contributed to backend APIs, business logic, data flows, testing, security, and production systems.",
    highlights: [
      "Built and maintained customer-facing features across campaign creation, messaging, reporting, audience management, inbox workflows, and video experiences.",
      "Expanded significantly into backend development using Node.js, TypeScript, Express.js, MongoDB, and Mongoose — working on REST APIs, controllers, services, validations, database operations, and business logic.",
      "Worked on backend workflows involving messaging, campaign launches, storyteller assignments, conversation handling, webhooks, email workflows, and data consistency across production systems.",
      "Improved application security and reliability through dependency upgrades, Snyk remediation, SOC-2 related fixes, safer application flows, and automated test coverage.",
      "Investigated production issues, supported frontend and backend releases, reviewed code, added tests, and collaborated closely with engineering, product, design, and QA through delivery.",
    ],
  },

  {
    period: "Jan 2023 — Jan 2025",
    company: "Goodkind",
    role: "Frontend Engineer",
    location: "Toronto, Canada",
    workMode: "Remote",
    description:
      "Moved into a fully focused frontend engineering role, building and supporting core product experiences across Goodkind's production platform.",
    highlights: [
      "Built major product experiences including campaign workflows, messaging and inbox functionality, video-related features, and reusable frontend components.",
      "Worked extensively with React, TypeScript, JavaScript, APIs, application state, and production frontend architecture.",
      "Contributed to Next.js applications, email workflows, third-party integrations, and backend-supported product features.",
      "Supported features throughout implementation, testing, code review, release, and production support.",
    ],
  },

  {
    period: "2021 — Dec 2022",
    company: "Goodkind",
    role: "QA Manager & Frontend Engineer",
    location: "Toronto, Canada",
    workMode: "Remote",
    description:
      "Took responsibility for software quality while continuing to contribute directly to frontend engineering and product development.",
    highlights: [
      "Managed QA responsibilities including feature validation, regression testing, release quality, bug investigation, and collaboration with the engineering team.",
      "Continued building frontend features and gradually expanded my engineering responsibilities across the web application.",
      "Built and contributed to Goodkind's Shopify application and its integration with the wider product ecosystem.",
      "Combined engineering and QA responsibilities, developing a strong focus on reliability, edge cases, user experience, and production quality.",
    ],
  },

  {
    period: "Dec 2019 — Dec 2020",
    company: "Goodkind",
    role: "React Native Developer",
    location: "Toronto, Canada",
    workMode: "Remote",
    description:
      "Joined Goodkind as a React Native developer and worked on the company's mobile application for iOS and Android.",
    highlights: [
      "Built and maintained features for Goodkind's React Native mobile application.",
      "Worked with mobile APIs, application state, UI implementation, debugging, and cross-platform behavior.",
      "Supported iOS and Android builds and contributed to preparing mobile releases for testing and distribution.",
      "Gained hands-on experience working on a production product within a collaborative software engineering team.",
    ],
  },
];
const earlierExperience = [
  {
    period: "Nov 2020 — Apr 2021",
    company: "BNG Labs",
    role: "React Native Developer · Part-Time",
    location: "Karachi, Pakistan",
    workMode: "On-site",
    description:
      "Worked onsite in Karachi alongside my Goodkind role, contributing to React Native mobile application development.",
  },
  {
    period: "Jan 2019 — Jul 2019",
    company: "Pana Cloud",
    location: "Clifton, Karachi, Pakistan",
    workMode: "On-site",
    role: "Frontend Developer · React.js",

    description:
      "Worked on React.js web applications and gained early professional experience building modern frontend interfaces.",
  },
  {
    period: "2019",
    company: "Fiverr",
    role: "Freelance Mobile App Developer",
    workMode: "Remote",
    description:
      "Started my software development career building React Native mobile applications for clients through Fiverr.",
    link: "https://www.fiverr.com/s/7jvEwgL",
  },
];
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      data-cursor-light
      className="w-full scroll-mt-20 bg-[#0B132B]"
    >
      <div className="mx-auto max-w-[1328px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#5EEAD4]" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
                Professional Experience
              </p>
            </div>

            <h2 className="mt-6 max-w-[470px] text-[40px] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[54px]">
              Experience built
              <span className="block bg-gradient-to-r from-[#93C5FD] to-[#5EEAD4] bg-clip-text text-transparent">
                in production.
              </span>
            </h2>

            <div className="mt-7 max-w-[500px] space-y-5">
              <p className="text-[16px] leading-7 text-[#AAB7CC]">
                My career started in 2019 building{" "}
                <span className="font-medium text-white">
                  React Native mobile applications
                </span>{" "}
                for freelance clients. I then moved into{" "}
                <span className="font-medium text-[#93C5FD]">
                  React.js web development
                </span>{" "}
                at Pana Cloud before joining Goodkind as a React Native
                Developer, working on a production mobile application for iOS
                and Android.
              </p>

              <p className="text-[16px] leading-7 text-[#8FA0B8]">
                Over the years, my responsibilities expanded into frontend
                engineering, QA leadership, backend development, and broader
                software engineering — with growing ownership across
                development, testing, releases, and production support.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-gradient-to-b from-[#5EEAD4] via-[#3B82F6]/50 to-transparent sm:block" />

              <div className="space-y-14">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.role}`}
                    className="relative sm:pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 hidden size-[15px] rounded-full border-[3px] border-[#0B132B] bg-[#5EEAD4] ring-1 ring-[#5EEAD4]/50 sm:block" />

                    <p className="text-sm font-medium tracking-wide text-[#7F91AD]">
                      {experience.period}
                    </p>

                    <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                      <h3 className="text-[27px] font-bold tracking-[-0.025em] text-white">
                        {experience.company}
                      </h3>

                      <span className="hidden text-[#53647F] sm:inline">/</span>

                      <p className="text-[16px] font-semibold text-[#93C5FD]">
                        {experience.role}
                      </p>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#7F91AD]">
                      <span>{experience.location}</span>

                      <span className="text-[#53647F]">•</span>

                      <span className="font-medium text-[#5EEAD4]">
                        {experience.workMode}
                      </span>
                    </div>

                    <p className="mt-5 max-w-[720px] text-[16px] leading-7 text-[#B8C4D6]">
                      {experience.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex max-w-[760px] gap-3 text-[15px] leading-7 text-[#8FA0B8]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[11px] size-1.5 shrink-0 rounded-full bg-[#5EEAD4]"
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 h-px w-full bg-white/[0.08]" />
                  </article>
                ))}
              </div>
            </div>

            {/* Earlier experience */}
            <div className="mt-16 sm:pl-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7F91AD]">
                Earlier Experience
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {earlierExperience.map((experience) => (
                  <div
                    key={`${experience.company}-${experience.role}`}
                    className="rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-5 transition-all duration-300 hover:border-[#5EEAD4]/30 hover:bg-white/[0.055]"
                  >
                    <p className="text-xs font-medium text-[#7F91AD]">
                      {experience.period}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <h4 className="font-semibold text-white">
                        {experience.company}
                      </h4>

                      {"link" in experience && experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${experience.company} profile`}
                          className="text-sm text-[#93C5FD] transition-colors hover:text-[#5EEAD4]"
                        >
                          ↗
                        </a>
                      )}
                    </div>

                    <p className="mt-1 text-sm font-medium text-[#93C5FD]">
                      {experience.role}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#7F91AD]">
                      {experience.location ? (
                        <>
                          <span>{experience.location}</span>

                          <span>•</span>
                        </>
                      ) : null}
                      <span className="font-medium text-[#5EEAD4]">
                        {experience.workMode}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#8FA0B8]">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
