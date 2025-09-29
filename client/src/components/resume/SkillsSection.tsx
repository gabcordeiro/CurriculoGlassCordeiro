import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Palette } from "lucide-react";
import { GlassElement } from "../glass/GlassElement";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens de Programação",
    icon: Code,
    skills: ["C#", "Java", "SQL", "Python", "JavaScript", "ABAP"],
    color: "text-blue-400"
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [".NET", "React Native", "Angular", "Unity3D", "Flutter"],
    color: "text-green-400"
  },
  {
    title: "Tecnologias",
    icon: Database,
    skills: ["SAP S/4HANA", "Tailwind CSS", "Redes Neurais", "YOLO v9", "FlutterFlow"],
    color: "text-purple-400"
  },
  {
    title: "Ferramentas & Banco de Dados",
    icon: Palette,
    skills: ["Kit Adobe", "Blender", "Firebase", "PostgreSQL", "Supabase"],
    color: "text-orange-400"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6">
      {/* Background Glass Effects */}
      <div className="absolute top-20 left-10">
        <GlassElement
          width={180}
          height={180}
          radius={20}
          depth={8}
          blur={3}
          chromaticAberration={2}
          className="animate-pulse delay-700"
        />
      </div>
      <div className="absolute bottom-20 right-20">
        <GlassElement
          width={220}
          height={220}
          radius={40}
          depth={10}
          blur={2}
          chromaticAberration={5}
          className="animate-pulse delay-300"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para desenvolver soluções completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/10 backdrop-blur-sm border-primary/20 hover-elevate"
                data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-3">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="bg-primary/5 text-white border-primary/30 hover:bg-primary/10 transition-colors"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s.#]/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
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