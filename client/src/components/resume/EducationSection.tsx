import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, FileText, ExternalLink } from "lucide-react";
import { GlassElement } from "../glass/GlassElement";

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  type: "education" | "certificate" | "publication";
  link?: string;
}

const educationData: EducationItem[] = [
  {
    title: "Ciência da Computação",
    institution: "Universidade Vila Velha (UVV)",
    period: "2019 - 2024 (concluído)",
    description: "Foco em desenvolvimento de software e sistemas distribuídos. Principais disciplinas incluem Estruturas de Dados, Programação Orientada a Objetos, Banco de Dados, Engenharia de Software, e Padrões de desenvolvimento.",
    type: "education"
  },
  {
    title: "React Native: Desenvolva APPs Nativas",
    institution: "Udemy",
    period: "2024",
    description: "Certificação em desenvolvimento de aplicações nativas para Android e iOS",
    type: "certificate",
    link: "https://www.udemy.com/certificate/UC-fe6669fa-71df-4273-a006-5ae0f4118b51/"
  },
  {
    title: "Scrum Fundamentals Certified",
    institution: "Scrum Institute",
    period: "2024",
    description: "Certificação em metodologias ágeis e gerenciamento de projetos",
    type: "certificate",
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-GabrielCordeiroDeCarvalho-1092249.pdf"
  },
  {
    title: "VREnergy: A simulator for critical operating procedures",
    institution: "SVR '24: 26th Symposium on Virtual and Augmented Reality",
    period: "2024",
    description: "Artigo publicado sobre simulador de procedimentos críticos em subestações elétricas",
    type: "publication",
    link: "https://dl.acm.org/doi/10.1145/3691573.3691601"
  },
  {
    title: "Optimizing Industrial Processes through Digital Twin Simulation",
    institution: "SVR '23: 25th Symposium on Virtual and Augmented Reality",
    period: "2023",
    description: "Artigo sobre otimização de processos industriais através de simulação de gêmeos digitais",
    type: "publication",
    link: "https://dl.acm.org/doi/10.1145/3625008.3625015/"
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "education": return GraduationCap;
    case "certificate": return Award;
    case "publication": return FileText;
    default: return GraduationCap;
  }
};

const getColor = (type: string) => {
  switch (type) {
    case "education": return "text-blue-400";
    case "certificate": return "text-green-400";
    case "publication": return "text-purple-400";
    default: return "text-blue-400";
  }
};

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 px-6">
      {/* Background Glass Effect */}
      <div className="absolute top-40 left-20">
        <GlassElement
          width={160}
          height={160}
          radius={80}
          depth={5}
          blur={2}
          chromaticAberration={3}
          className="animate-pulse delay-1000"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Formação & Conquistas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Educação acadêmica, certificações profissionais e publicações científicas
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((item, index) => {
            const IconComponent = getIcon(item.type);
            const iconColor = getColor(item.type);
            
            return (
              <Card 
                key={index} 
                className="bg-card/10 backdrop-blur-sm border-primary/20 hover-elevate"
                data-testid={`card-education-${item.type}-${index}`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white flex items-center gap-3 mb-2">
                        <IconComponent className={`w-6 h-6 ${iconColor}`} />
                        {item.title}
                      </CardTitle>
                      <div className="space-y-1">
                        <p className="text-gray-300 font-medium">{item.institution}</p>
                        <p className="text-primary text-sm">{item.period}</p>
                      </div>
                    </div>
                    {item.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(item.link, "_blank")}
                        className="border-primary/50 text-primary hover:bg-primary hover:text-white"
                        data-testid={`button-link-${item.type}-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    <Badge 
                      variant="secondary"
                      className={`bg-${item.type === 'education' ? 'blue' : item.type === 'certificate' ? 'green' : 'purple'}-500/10 text-${item.type === 'education' ? 'blue' : item.type === 'certificate' ? 'green' : 'purple'}-400 border-${item.type === 'education' ? 'blue' : item.type === 'certificate' ? 'green' : 'purple'}-400/20`}
                    >
                      {item.type === 'education' ? 'Formação' : item.type === 'certificate' ? 'Certificado' : 'Publicação'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}