import { Code2, Database, Globe, Users, MessageSquare, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Microsoft 365 (Word, Excel, PowerPoint)", level: 90, icon: Code2 },
    { name: "Digital Marketing (SEO, Google Ads, Meta)", level: 85, icon: Globe },
    { name: "Design Tools (Canva, InShot, CapCut)", level: 80, icon: Database },
  ];

  const softSkills = [
    { name: "Public Speaking & Oratory", level: 95, icon: MessageSquare },
    { name: "Youth Leadership", level: 90, icon: Users },
    { name: "Persuasion & Negotiation", level: 85, icon: Lightbulb },
  ];

  const SkillBar = ({
    skill,
  }: {
    skill: { name: string; level: number; icon: React.ElementType };
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <skill.icon className="w-5 h-5 text-primary" />
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Skills & Abilities
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
                {technicalSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="space-y-6 bg-card p-8 rounded-xl border border-border">
                {softSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h4 className="text-lg font-medium text-foreground mb-6">
              Also Familiar With
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "English (B2 Certified)",
                "Portuguese (Native)",
                "Google Ads",
                "Facebook & Instagram Ads",
                "Video Editing",
                "Critical Thinking",
                "Content Strategy",
                "Team Coordination",
                "Pedagogy",
                "Music & Vocal Techniques",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
