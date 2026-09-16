import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import NonProfitSection from "@/components/NonProfitSection";
import SkillsSection from "@/components/SkillsSection";
import ProfessionalCoursesSection from "@/components/ProfessionalCoursesSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <NonProfitSection />
      <SkillsSection />
      <ProfessionalCoursesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
