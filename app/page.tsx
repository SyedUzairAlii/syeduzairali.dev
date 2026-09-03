import CustomCursor from "@/components/CustomCursor";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D8E4E7]">
      <CustomCursor />
      <Navbar />

      <IntroSection />
    </div>
  );
}
