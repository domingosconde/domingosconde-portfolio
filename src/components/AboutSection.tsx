import { Laptop, Languages, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Tech Enthusiast",
      description: "Passionate about Business Informatics and digital solutions",
    },
    {
      icon: Languages,
      title: "Language Expert",
      description: "Background in English Language Teaching methodologies",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on combining IT skills with communication abilities",
    },
    {
      icon: Heart,
      title: "People Person",
      description: "Love helping others learn and grow through technology",
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
                I'm currently a student of{" "}
                <span className="text-foreground font-medium">
                  Informática de Gestão
                </span>{" "}
                (Business Informatics), where I'm developing skills in programming,
                database management, and business systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My background in{" "}
                <span className="text-foreground font-medium">
                  English Language Teaching
                </span>{" "}
                has given me strong communication skills, patience, and the ability
                to explain complex concepts in simple terms – skills that translate
                perfectly into the tech world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This unique combination allows me to bridge the gap between
                technical teams and end-users, making me effective in roles that
                require both technical knowledge and interpersonal skills.
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
