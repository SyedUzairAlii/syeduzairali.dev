const highlights = [
  {
    value: "6+",
    label: "Years building production software",
  },
  {
    value: "Frontend Engineering",
    label: "My strongest technical focus",
  },
  {
    value: "End-to-End Ownership",
    label: "From requirements to production",
  },
  {
    value: "Adaptable",
    label: "Quick to understand new products, codebases & workflows",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-20 bg-[#F7F4EE]">
      <div className="mx-auto max-w-[1328px] px-6 py-24 lg:px-12 lg:py-32">
        {/* Main About Content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Heading */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#0F766E]" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                About Me
              </p>
            </div>

            {/* Heading */}
            <h4 className="mt-6 max-w-[580px] text-[42px] font-bold leading-[1.03] tracking-[-0.045em] text-[#0B132B] sm:text-[52px] lg:text-[58px]">
              <span className="block">From product ideas</span>

              <span className="mt-1 block bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] bg-clip-text text-transparent">
                to reliable software.
              </span>
            </h4>

            {/* Small supporting line */}
            <div className="mt-8 h-px max-w-[120px] bg-[#0F766E]/30" />
          </div>

          {/* Story */}
          <div className="max-w-[690px]">
            <p className="text-[20px] leading-8 text-[#334155]">
              I&apos;m a Software Engineer with 6+ years of professional
              experience building and supporting production web and mobile
              applications. My strongest background is in frontend engineering,
              but throughout my career I&apos;ve also worked across backend
              systems, mobile applications, testing, releases, and production
              support.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-[#64748B]">
              I enjoy working beyond just implementing a UI. I like
              understanding the problem, collaborating with product and design,
              thinking through edge cases, building the solution, testing it,
              reviewing the result, and seeing it through to production.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-[#64748B]">
              My earlier experience in Quality Assurance shaped the way I
              approach engineering today — with a strong focus on product
              quality, user experience, reliability, and attention to detail.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-[#64748B]">
              I&apos;m especially comfortable joining established products and
              codebases, learning how they work, and taking ownership of
              features that need to be improved, extended, or shipped reliably.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.value}
              className="group rounded-[22px] border border-[#DED8CE] bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9EBBB3] hover:bg-white hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]"
            >
              <div className="text-xl font-bold text-[#0B132B] transition-colors duration-300 group-hover:text-[#0F766E]">
                {highlight.value}
              </div>

              <div className="mt-2 text-sm leading-5 text-[#64748B]">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
