import HeroSection from "@/components/resume/HeroSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import SkillsSection from "@/components/resume/SkillsSection";
import EducationSection from "@/components/resume/EducationSection";
import ContactSection from "@/components/resume/ContactSection";
import backgroundImage from "@assets/stock_images/abstract_dark_gradie_5be5db71.jpg";

export default function Resume() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Dark Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 right-6 z-20">
        <div className="flex flex-col gap-2 bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-primary/20">
          {[
            { id: "hero", label: "Início" },
            { id: "experience", label: "Experiência" },
            { id: "skills", label: "Habilidades" },
            { id: "education", label: "Formação" },
            { id: "contact", label: "Contato" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "hero") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-3 py-2 text-sm text-white hover:text-primary hover:bg-white/10 rounded transition-colors"
              data-testid={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}