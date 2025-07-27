import CustomCursor from "@/components/CustomCursor";
import FloatingNav from "@/components/FloatingNav";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ParticleBackground />
      <FloatingNav />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">&copy; 2024 Cybersecurity Professional. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-[var(--cyber-green)] transition-colors magnetic-hover"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[var(--cyber-blue)] transition-colors magnetic-hover"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[var(--cyber-purple)] transition-colors magnetic-hover"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
