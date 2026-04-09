import { Laptop, Languages, FileSpreadsheet, Wrench } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Project & Operations Management",
      description: "Planning, coordinating teams, managing workflows, and delivering results on time",
    },
    {
      icon: FileSpreadsheet,
      title: "Data & Reporting",
      description: "Advanced Excel, data organization, reports, dashboards, and analysis",
    },
    {
      icon: Wrench,
      title: "IT Coordination & Support",
      description: "IT department management, system setup, troubleshooting, and digital platforms",
    },
    {
      icon: Languages,
      title: "Bilingual Professional",
      description: "Native Portuguese speaker with Upper Intermediate English (B2)",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Leadership Meets Technology
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
                I am a{" "}
                <span className="text-foreground font-medium">
                  Project Manager
                </span>{" "}
                with experience leading teams, managing operations, and coordinating IT departments. 
                Based in{" "}
                <span className="text-foreground font-medium">Calumbo Sede, Icolo e Bengo, Angola</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I manage multiple projects simultaneously — from founding an English academy 
                and a t-shirt brand to directing IT and finance departments at NGOs. 
                I thrive on turning ideas into structured, impactful outcomes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing a{" "}
                <span className="text-foreground font-medium">
                  High School Intermediate Course in Computer Science Management
                </span>{" "}
                at Complexo Escolar Privado FENDA DA TUNDAVALA - Faixa e Rota, combining 
                project management skills with solid technical knowledge.
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
