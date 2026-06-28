import { FileSpreadsheet, Monitor, Code2, Globe, Users, MessageSquare, Clock, Eye, ShieldCheck, Lightbulb } from "lucide-react";

type Level = "Beginner" | "Intermediate" | "Advanced";

interface HardSkill {
  name: string;
  level: Level;
  years?: string;
  context: string;
  icon: React.ElementType;
}

interface SoftSkill {
  name: string;
  description: string;
  icon: React.ElementType;
}

const SkillsSection = () => {
  const hardSkills: HardSkill[] = [
    {
      name: "Microsoft Excel",
      level: "Advanced",
      years: "5+ years",
      context: "Daily use for student records, financial tracking and operational reporting at Open Mind Academy.",
      icon: FileSpreadsheet,
    },
    {
      name: "Microsoft 365 (Word, PowerPoint, Outlook)",
      level: "Advanced",
      years: "5+ years",
      context: "Documentation, institutional presentations and academic communication.",
      icon: Monitor,
    },
    {
      name: "Google Workspace",
      level: "Advanced",
      years: "4+ years",
      context: "Collaborative docs, shared drives and forms used across academy operations.",
      icon: Globe,
    },
    {
      name: "PC Hardware & Maintenance",
      level: "Intermediate",
      years: "3+ years",
      context: "Setup and troubleshooting of academy workstations and personal devices.",
      icon: Monitor,
    },
    {
      name: "HTML & CSS",
      level: "Intermediate",
      context: "Static pages and small layouts; foundation for ongoing web development studies.",
      icon: Code2,
    },
    {
      name: "C Programming Fundamentals",
      level: "Beginner",
      context: "Completed the 42 Piscine — pointers, memory, recursion and Unix basics.",
      icon: Code2,
    },
    {
      name: "Web Development Fundamentals",
      level: "Intermediate",
      context: "42 Discovery curriculum: HTTP, DOM, JavaScript basics and project structure.",
      icon: Globe,
    },
    {
      name: "Digital Automation & Social Media Management",
      level: "Intermediate",
      context: "Designing automation workflows and managing social channels for clients through Bee Core System.",
      icon: Globe,
    },
    {
      name: "Advertising Campaigns & Art Direction",
      level: "Intermediate",
      context: "Leading paid campaigns, visual identity and creative direction for LeyV Comercial's online supermarket.",
      icon: Lightbulb,
    },
  ];

  const softSkills: SoftSkill[] = [
    {
      name: "Administrative Organization",
      description:
        "Builds clear documentation structures and keeps records consistent across long-running operations.",
      icon: Users,
    },
    {
      name: "Conscientiousness & Attention to Detail",
      description:
        "High accuracy in data entry, reporting and review — a defining trait in day-to-day academy management.",
      icon: Eye,
    },
    {
      name: "Professional Communication",
      description:
        "Clear written and spoken exchanges with students, parents, partners and institutional contacts.",
      icon: MessageSquare,
    },
    {
      name: "Time Management",
      description:
        "Plans recurring tasks, anticipates deadlines and balances administrative load with project work.",
      icon: Clock,
    },
    {
      name: "Problem Solving",
      description:
        "Analytical approach to operational issues; breaks problems down before acting and documents the fix.",
      icon: Lightbulb,
    },
    {
      name: "Confidentiality & Professional Ethics",
      description:
        "Handles student data and internal information with discretion and a strong sense of responsibility.",
      icon: ShieldCheck,
    },
    {
      name: "Collaboration (42 Peer-to-Peer)",
      description:
        "Comfortable learning and building alongside peers, giving and receiving structured feedback.",
      icon: Users,
    },
  ];

  const levelStyles: Record<Level, string> = {
    Beginner: "bg-muted text-muted-foreground border-border",
    Intermediate: "bg-primary/10 text-primary border-primary/30",
    Advanced: "bg-primary text-primary-foreground border-primary",
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Skills & Competencies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A qualitative view of my technical toolkit and the behavioural traits I bring to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Hard Skills */}
            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {hardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap ${levelStyles[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    {skill.years && (
                      <p className="text-xs text-muted-foreground mb-1 ml-8">{skill.years}</p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed ml-8">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Behavioural Profile
                </h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-8">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Additional Context */}
          <div className="mt-16 animate-on-scroll">
            <h4 className="text-center text-lg font-medium text-foreground mb-6">
              Languages & Additional Context
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Portuguese — Native",
                "English — C1 Advanced",
                "Mandarin Chinese — HSK 1 (Beginner)",
                "Educational environments",
                "Digital file organization",
                "Strong adaptability to new software",
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
