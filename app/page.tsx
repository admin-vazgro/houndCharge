import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import VisionSection from "@/components/VisionSection";
import ModelSection from "@/components/ModelSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InvestSection from "@/components/InvestSection";
import ProjectsSection from "@/components/ProjectsSection";
import DashboardSection from "@/components/DashboardSection";
import WhySection from "@/components/WhySection";
import RoadmapSection from "@/components/RoadmapSection";
import EmotionalSection from "@/components/EmotionalSection";
import InvestorFormSection from "@/components/InvestorFormSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <VisionSection />
      <ModelSection />
      <SolutionSection />
      <HowItWorksSection />
      <InvestSection />
      <ProjectsSection />
      <DashboardSection />
      <WhySection />
      <RoadmapSection />
      <EmotionalSection />
      <InvestorFormSection />
      <MissionSection />
      <Footer />
    </main>
  );
}
