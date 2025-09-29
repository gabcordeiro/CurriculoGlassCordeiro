import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { GlassElement } from "../glass/GlassElement";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (27) 99312-2222",
      href: "tel:+5527993122222",
      color: "text-green-400"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "gcordeirocarvalho97@gmail.com",
      href: "mailto:gcordeirocarvalho97@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Vila Velha, ES - Brasil",
      href: null,
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gabcordeiro",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gabriel-cordeiro-a2a1351bb/",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6">
      {/* Background Glass Effects */}
      <div className="absolute top-20 right-10">
        <GlassElement
          width={240}
          height={240}
          radius={60}
          depth={12}
          blur={4}
          chromaticAberration={6}
          className="animate-pulse delay-200"
        />
      </div>
      <div className="absolute bottom-40 left-20">
        <GlassElement
          width={180}
          height={180}
          radius={30}
          depth={8}
          blur={2}
          chromaticAberration={4}
          className="animate-pulse delay-800"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato para discutir oportunidades de colaboração
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div 
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    data-testid={`contact-${contact.label.toLowerCase()}`}
                  >
                    <IconComponent className={`w-6 h-6 ${contact.color}`} />
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </div>
                );

                return contact.href ? (
                  <a key={index} href={contact.href} className="block hover-elevate">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Social Links & Actions */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Conecte-se</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={`w-full justify-start gap-3 h-12 ${social.color} border-primary/30 text-white hover:text-white`}
                      onClick={() => window.open(social.href, "_blank")}
                      data-testid={`button-social-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className="w-5 h-5" />
                      {social.label}
                    </Button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-primary/20">
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                  onClick={() => console.log("Download CV clicked")}
                  data-testid="button-download-cv"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-primary/20">
          <p className="text-gray-400">
            Desenvolvido com React, TypeScript e Glass Morphism
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 Gabriel Cordeiro de Carvalho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}