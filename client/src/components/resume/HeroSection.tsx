import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassElement } from "../glass/GlassElement";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Glass Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <GlassElement
          width={300}
          height={300}
          radius={50}
          depth={12}
          blur={3}
          chromaticAberration={7}
          className="absolute top-20 -right-20 animate-pulse"
        />
        <GlassElement
          width={250}
          height={250}
          radius={125}
          depth={8}
          blur={2}
          chromaticAberration={3}
          className="absolute bottom-40 -left-10 animate-pulse delay-1000"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Main Info */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Gabriel Cordeiro
            <span className="block text-primary text-3xl md:text-4xl font-normal">
              de Carvalho
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor com experiência em projetos Mobile e Web, especializado em 
            <span className="text-primary font-semibold"> C#, Java, Python</span> e 
            frameworks <span className="text-primary font-semibold">.NET, Angular, React, Unity</span>
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Vila Velha, ES</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+55 (27) 99312-2222</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>gcordeirocarvalho97@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open("https://github.com/gabcordeiro", "_blank")}
            data-testid="button-github"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white backdrop-blur-sm"
            onClick={() => window.open("https://www.linkedin.com/in/gabriel-cordeiro-a2a1351bb/", "_blank")}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="backdrop-blur-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-contact"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contato
          </Button>
        </div>

        {/* Personal Info */}
        <div className="pt-8 text-gray-400 text-sm">
          <p>Brasileiro • Solteiro • 28 Anos</p>
        </div>
      </div>
    </section>
  );
}