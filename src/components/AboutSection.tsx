import { Laptop, Languages, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Tech & Digital Marketing",
      description: "Proficient in Microsoft 365, Google Ads, Meta Business Suite, and design tools",
    },
    {
      icon: Languages,
      title: "Bilingual Professional",
      description: "Native Portuguese speaker with fluent and proficient English (B2 certified)",
    },
    {
      icon: Target,
      title: "Academy Founder",
      description: "Founded and direct Open Mind Academy AO, a hybrid English academy",
    },
    {
      icon: Heart,
      title: "Leadership & Teaching",
      description: "Experience as Deputy Academic Director, Course Coordinator, and Teacher",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Two Worlds, One Vision
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing{" "}
                <span className="text-foreground font-medium">
                  Informática de Gestão
                </span>{" "}
                (IT Management), while also serving as the{" "}
                <span className="text-foreground font-medium">
                  Founder and General Director of Open Mind Academy AO
                </span>
                , a hybrid English academy I established in December 2023.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience as{" "}
                <span className="text-foreground font-medium">
                  Deputy Academic Director
                </span>{" "}
                at Academia do Futuro and as an English teacher at multiple institutions,
                I've developed strong leadership, communication, and pedagogical skills.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I combine technical expertise in digital marketing, campaign management,
                and design tools with excellent public speaking, youth leadership, and
                strategic thinking abilities.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
                  style={{ animationDelay: `${index * 100}ms` }}
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
