import { Laptop, Languages, FileSpreadsheet, Wrench, Users, Rocket, Code2, Megaphone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Project & Operations Management",
      description: "Planning, coordinating teams, managing workflows, and delivering results on time",
    },
    {
      icon: Rocket,
      title: "Entrepreneurial Leadership",
      description: "Co-founder of Bee Core System and NÓDUS English Speak, founder of Open Mind Academy AO, PixelShirtZ, ST Virtual Studio, and Eposso, creator of Shengtian AO, and former partner at LeyV Comercial",
    },
    {
      icon: Users,
      title: "NGO Leadership",
      description: "Former director of IT, communication, and finance at Fundação ConstruÁfrica through September 2026",
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
      icon: Megaphone,
      title: "Brand & Community Building",
      description: "Social media management, brand identity, and growing engaged communities",
    },
    {
      icon: Code2,
      title: "Tech & Programming Foundations",
      description: "C programming and web development foundations through 42 Luanda, complemented by introductory robotics and prototyping workshops with ECS and Grupo Norte at NASA Space Apps Calumbo",
    },
    {
      icon: Languages,
      title: "Multilingual Professional",
      description: "Native Portuguese, Upper Intermediate English (B2), and learning Mandarin (HSK 1)",
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
                 with hands-on experience leading teams, improving operations, and coordinating technology projects. I am based in{" "}
                <span className="text-foreground font-medium">Luanda, Angola</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                 My work spans education, e-commerce, digital services, and social impact. I bring structure to ideas, clarify responsibilities, and help teams move from planning to consistent delivery.
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
