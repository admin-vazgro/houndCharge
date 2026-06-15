import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import VisionSection from "@/components/VisionSection";
import ModelSection from "@/components/ModelSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InvestSection from "@/components/InvestSection";
import DashboardSection from "@/components/DashboardSection";
import WhySection from "@/components/WhySection";
import RoadmapSection from "@/components/RoadmapSection";
import EmotionalSection from "@/components/EmotionalSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <VisionSection />
      <ModelSection />
      <SolutionSection />
      <HowItWorksSection />
      <InvestSection />
      <DashboardSection />
      <WhySection />
      <RoadmapSection />
      <EmotionalSection />
      <MissionSection />
      <Footer />
    </main>
  );
}
