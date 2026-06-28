import { ExternalLink, MapPin } from "lucide-react";
import openMindLogo from "@/assets/logos/openmindacademy.png";
import pixelShitzLogo from "@/assets/logos/pixelshitz.png";
import beeCoreLogo from "@/assets/logos/beecoresystem.png";
import leyvLogo from "@/assets/logos/leyvcomercial.jpg";

type Project = {
  title: string;
  description: string;
  image: string | null;
  icon: React.ElementType | null;
  tags: string[];
  link: string | null;
  featured: boolean;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "LeyV Comercial",
      description: "Online supermarket startup where I serve as Manager and Partner. A complete digital store offering variety, convenience, and agility — clothing, footwear, accessories, smartphones, computers and more, all in one place. I lead social media, ad campaigns, and artistic direction.",
      image: leyvLogo,
      icon: null,
      tags: ["E-commerce", "Social Media", "Art Direction", "Startup"],
      link: null,
      featured: true,
    },
    {
      title: "Bee Core System",
      description: "Brand dedicated to digital automation support and social media management for businesses and individuals. Tagline: \"Less effort, more systems. Digital solutions to automate and scale your business.\"",
      image: beeCoreLogo,
      icon: null,
      tags: ["Automation", "Social Media", "Digital Strategy"],
      link: null,
      featured: true,
    },
    {
      title: "Open Mind Academy AO",
      description: "Hybrid English academy that I founded and manage. Managing daily administrative operations including student records, scheduling, documentation, and internal coordination.",
      image: openMindLogo,
      icon: null,
      tags: ["Education", "Administration", "Management"],
      link: null,
      featured: true,
    },
    {
      title: "PixelShitZ",
      description: "A brand for selling t-shirts designed for Nerds, Otakus, Devs, Gamers, and Geeks. Managing product design, e-commerce operations, and brand marketing.",
      image: pixelShitzLogo,
      icon: null,
      tags: ["E-commerce", "Fashion", "Geek Culture"],
      link: null,
      featured: true,
    },
    {
      title: "Map of Clinics — Zango",
      description: "Academic project: a web platform that maps healthcare clinics across the Zango neighbourhoods in Luanda and collects community needs through a structured assessment form. Led scope, data model, and team coordination.",
      image: null,
      icon: MapPin,
      tags: ["React", "TypeScript", "Tailwind", "Google Maps API", "Civic Tech"],
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
              Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Initiatives and projects I have developed throughout my career
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
                    Featured
                  </div>
                )}

                {/* Logo Image or Icon */}
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 overflow-hidden bg-white">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : project.icon ? (
                    <project.icon className="w-10 h-10 text-primary" />
                  ) : null}
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
                    View Project
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
