import { Heart, ExternalLink } from "lucide-react";
import construAfricaLogo from "@/assets/logos/construafrica.jpg";
import nodusLogo from "@/assets/logos/nodus.png";

const NonProfitSection = () => {
  const organizations = [
    {
      name: "Comunidade NÓDUS English Speak",
      role: "Co-Founder & Managing Director",
      description:
        "A community initiative I co-founded to help young people speak English with greater confidence. We create a supportive environment through guided practice, shared learning, and peer support.",
      logo: nodusLogo,
      current: true,
    },
    {
      name: "Fundação ConstruÁfrica",
      role: "Director of IT & Communication / Finance",
      period: "2025 - September 2026",
      description:
        "An organisation focused on social development in Africa. I directed the IT and Communication department and the Finance department, managing digital infrastructure, communication planning, and financial operations.",
      logo: construAfricaLogo,
      current: false,
    },
  ];

  return (
    <section id="nonprofit" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Social Impact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Non-Profit Organizations
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
               Organisations where I apply leadership and operational skills to support lasting social impact.
            </p>
          </div>

          {/* Organizations Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizations.map((org, index) => (
              <div
                key={org.name}
                className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Current Badge */}
                {org.current && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    Active
                  </div>
                )}

                {/* Logo */}
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 overflow-hidden bg-white border border-border">
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Role */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {org.role}
                </span>

                {/* Name */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {org.name}
                </h3>
                {org.period && (
                  <p className="text-primary text-sm font-medium mb-3">{org.period}</p>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonProfitSection;
