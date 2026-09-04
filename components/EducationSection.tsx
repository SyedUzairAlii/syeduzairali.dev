import {
  HiOutlineAcademicCap,
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";

const education = [
  {
    type: "Bachelor's Degree",
    institution: "ILMA University",
    formerName: "Formerly Institute of Business & Technology (IBT)",
    qualification: "Bachelor of Science in Information Technology",
    period: "2014 — 2018",
    grade: "Grade A",
    description:
      "Completed my four-year bachelor's degree in Information Technology, building a strong foundation in computer science, software development, and problem solving.",
    icon: HiOutlineAcademicCap,
  },
  {
    type: "Professional Certification",
    institution: "Saylani Mass I.T. Training",
    qualification: "Certified Web & Mobile App Development",
    period: "2018",
    grade: "Grade A",
    description:
      "Completed professional Web & Mobile App Development training focused on practical software development and MERN-stack technologies.",
    icon: HiOutlineCodeBracketSquare,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full scroll-mt-20 bg-[#E8F0F2]">
      <div className="mx-auto max-w-[1328px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Heading */}
        <div className="max-w-[720px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#0F766E]" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Education & Training
            </p>
          </div>

          <h2 className="mt-6 text-[40px] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B132B] sm:text-[48px] lg:text-[54px]">
            Education that built
            <span className="block bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] bg-clip-text pb-1 text-transparent">
              the foundation.
            </span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#64748B]">
            My formal education in Information Technology was complemented by
            hands-on professional training in web and mobile application
            development.
          </p>
        </div>

        {/* Education cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.institution}
                className="group relative overflow-hidden rounded-[26px] border border-[#CBD8DB] bg-white/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9CBDB7] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:p-8"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#D5E1E3] bg-[#F5F9F9] text-[24px] text-[#0F766E]">
                    <Icon />
                  </div>

                  <span className="rounded-full border border-[#D8E3E5] bg-[#F8FBFC] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#64748B]">
                    {item.type}
                  </span>
                </div>

                {/* Institution */}
                <div className="mt-7">
                  <h3 className="text-[25px] font-bold tracking-[-0.025em] text-[#0B132B]">
                    {item.institution}
                  </h3>

                  {item.formerName && (
                    <p className="mt-1 text-sm text-[#94A3B8]">
                      {item.formerName}
                    </p>
                  )}

                  <p className="mt-4 text-[17px] font-semibold leading-7 text-[#1D4ED8]">
                    {item.qualification}
                  </p>
                </div>

                {/* Metadata */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-medium text-[#475569]">
                    {item.period}
                  </span>

                  <span className="text-[#CBD5E1]">•</span>

                  <span className="font-semibold text-[#0F766E]">
                    {item.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 border-t border-[#E2E8EA] pt-6 text-[15px] leading-7 text-[#64748B]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
