import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";
import { GlassElement } from "../glass/GlassElement";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor de Realidade Virtual",
    company: "Bolsa em Realidade Virtual VALE - UVV",
    period: "2021 – 2025",
    description: "Desenvolvimento de processos em Realidade Virtual, utilizando C#, para treinamentos voltados a atividades de risco.",
    technologies: ["C#", "Unity3D", "Realidade Virtual", "Treinamentos"]
  },
  {
    title: "Desenvolvedor Flutter",
    company: "Jade Autistic (Estágio)",
    period: "01/24 – 08/24",
    description: "Criação de aplicações mobile em Flutter e frameworks como Firebase, com foco em acessibilidade e experiência do usuário.",
    technologies: ["Flutter", "Firebase", "Mobile", "Acessibilidade", "UX"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 px-6">
      {/* Background Glass Effect */}
      <div className="absolute top-40 right-10">
        <GlassElement
          width={200}
          height={200}
          radius={30}
          depth={6}
          blur={2}
          chromaticAberration={4}
          className="animate-pulse delay-500"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiências Profissionais
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Projetos em desenvolvimento de software e realidade virtual
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/10 backdrop-blur-sm border-primary/20 hover-elevate" data-testid={`card-experience-${index}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}