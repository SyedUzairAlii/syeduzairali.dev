import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}${site.image}`,
  jobTitle: "Software Engineer",
  description: site.description,
  sameAs: [
    "https://github.com/SyedUzairAlii",
    "https://www.linkedin.com/in/syed-uzair-ali-a85764104/",
    "https://www.upwork.com/freelancers/~016b15700a36b2be2f",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-[#D8E4E7]">
        <CustomCursor />

        <Navbar />

        <IntroSection />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        {/* <ClientFeedbackSection /> */}

        <EducationSection />

        <ContactSection />
      </div>
      <Analytics />
    </>
  );
}
