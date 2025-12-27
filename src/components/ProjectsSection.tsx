import { ExternalLink, School, Users, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Open Mind Academy AO",
      description: "Academia de inglês híbrida que fundei e dirijo. Oferecemos cursos presenciais e online para estudantes de todos os níveis.",
      icon: School,
      tags: ["Educação", "Liderança", "Gestão"],
      link: null,
      featured: true,
    },
    {
      title: "Formação de Professores",
      description: "Desenvolvimento de programas de formação pedagógica para professores de inglês, incluindo metodologias ESL.",
      icon: Users,
      tags: ["Pedagogia", "ESL", "Formação"],
      link: null,
      featured: false,
    },
    {
      title: "Marketing Digital",
      description: "Gestão de campanhas publicitárias no Google Ads e Meta Business Suite para instituições educacionais.",
      icon: Globe,
      tags: ["Google Ads", "Meta Ads", "SEO"],
      link: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Projectos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Trabalhos em Destaque
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Iniciativas e projectos que desenvolvi ao longo da minha carreira
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Destaque
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    Ver Projecto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
