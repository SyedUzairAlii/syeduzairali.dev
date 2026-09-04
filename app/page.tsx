import AboutSection from "@/components/AboutSection";
import ClientFeedbackSection from "@/components/ClientFeedbackSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#D8E4E7]">
        <CustomCursor />

        <Navbar />

        <IntroSection />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ClientFeedbackSection />

        <EducationSection />

        <ContactSection />
      </div>
      <Analytics />
    </>
  );
}
