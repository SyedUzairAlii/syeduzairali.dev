export default function IntroSection() {
  return (
    <section className="flex min-h-screen items-center bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-lg font-medium text-neutral-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Syed Uzair Ali
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-neutral-200 sm:text-3xl">
            Software Engineer | MERN Stack Developer
          </h2>

          <p className="mt-4 text-base font-medium text-neutral-400 sm:text-lg">
            React • TypeScript • Next.js • Node.js • React Native
          </p>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
            I build production web and mobile applications with a strong focus
            on React and modern frontend engineering, with hands-on experience
            across the full MERN stack.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-200 hover:bg-neutral-200"
            >
              View My Work
            </a>

            <a
              href="https://github.com/SyedUzairAlii"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-200 transition duration-200 hover:border-neutral-500 hover:bg-neutral-900"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/syed-uzair-ali-a85764104/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-200 transition duration-200 hover:border-neutral-500 hover:bg-neutral-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
