import { Laptop, Languages, Target, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Tecnologia & Marketing Digital",
      description: "Proficiente em Microsoft 365, Google Ads, Meta Business Suite e ferramentas de design",
    },
    {
      icon: Languages,
      title: "Profissional Bilingue",
      description: "Falante nativo de Português com Inglês fluente e proficiente",
    },
    {
      icon: Target,
      title: "Fundador de Academia",
      description: "Fundei e dirijo a Open Mind Academy AO, uma academia de inglês híbrida",
    },
    {
      icon: Heart,
      title: "Liderança & Ensino",
      description: "Director Académico Adjunto, Coordenador de Cursos e Professor de Inglês Online",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Sobre Mim
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Dois Mundos, Uma Visão
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Photo & Text Content */}
            <div className="space-y-6 animate-on-scroll">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                    <img 
                      src={profilePhoto} 
                      alt="Domingos Conde" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou o{" "}
                <span className="text-foreground font-medium">
                  Fundador e Director Geral da Open Mind Academy AO
                </span>
                , uma academia de inglês híbrida que estabeleci em Dezembro de 2023. Actualmente 
                a frequentar estudos em <span className="text-foreground font-medium">Gestão</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com experiência como{" "}
                <span className="text-foreground font-medium">
                  Director Académico Adjunto
                </span>{" "}
                na Academia do Futuro e como Professor de Inglês Online na Rose English School,
                desenvolvi fortes competências de liderança, comunicação e pedagogia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combino conhecimentos técnicos em marketing digital, gestão de campanhas,
                HTML/CSS e ferramentas de design com excelentes capacidades de oratória, liderança juvenil e
                pensamento estratégico.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
