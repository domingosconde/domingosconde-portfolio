import { ExternalLink, MapPin } from "lucide-react";
import openMindLogo from "@/assets/logos/openmindacademy.png";
import pixelShitzLogo from "@/assets/logos/pixelshitz.png";
import beeCoreLogo from "@/assets/logos/beecoresystem.png";
import leyvLogo from "@/assets/logos/leyvcomercial.jpg";
import nodusLogo from "@/assets/logos/nodus.png";
import shengtianAsset from "@/assets/logos/shengtian-ao.jpg.asset.json";

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
      title: "Shengtian AO",
      description: "An AI assistant I created to give small farmers practical access to agricultural guidance. It answers questions through WhatsApp and SMS, helping people in areas with limited internet coverage when an agronomist is not readily available.",
      image: shengtianAsset.url,
      icon: null,
      tags: ["Artificial Intelligence", "Agriculture", "WhatsApp", "SMS", "Social Impact"],
      link: null,
      featured: true,
    },
    {
      title: "LeyV Comercial",
      description: "An online supermarket startup where I serve as Manager and Partner. The store brings clothing, footwear, accessories, smartphones, computers, and other products together in one convenient place. I lead social media, advertising campaigns, and artistic direction.",
      image: leyvLogo,
      icon: null,
      tags: ["E-commerce", "Social Media", "Art Direction", "Startup"],
      link: null,
      featured: true,
    },
    {
      title: "Bee Core System",
      description: "A digital services brand I co-founded to help businesses and individuals automate routine work, manage social media, and build systems that support sustainable growth.",
      image: beeCoreLogo,
      icon: null,
      tags: ["Automation", "Social Media", "Digital Strategy"],
      link: null,
      featured: true,
    },
    {
      title: "Open Mind Academy AO",
      description: "A hybrid English academy that I founded and manage. I oversee student records, scheduling, documentation, internal coordination, and the daily learning experience.",
      image: openMindLogo,
      icon: null,
      tags: ["Education", "Administration", "Management"],
      link: null,
      featured: true,
    },
    {
      title: "PixelShitZ",
      description: "A t-shirt brand created for nerds, anime fans, developers, gamers, and geeks. I manage product design, e-commerce operations, inventory, and brand marketing.",
      image: pixelShitzLogo,
      icon: null,
      tags: ["E-commerce", "Fashion", "Geek Culture"],
      link: null,
      featured: true,
    },
    {
      title: "Comunidade NÓDUS English Speak",
      description: "A community initiative I co-founded to help young people speak English with confidence through guided practice, shared learning, and peer support. I serve as Co-Founder and Managing Director.",
      image: nodusLogo,
      icon: null,
      tags: ["Education", "Community", "Leadership", "English"],
      link: null,
      featured: true,
    },
    {
      title: "ClinEncontra",
      description: "My high school web project for mapping healthcare clinics across the Zango neighbourhoods in Luanda and gathering community needs through a structured assessment form. I led the scope, data model, and team coordination.",
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
               Selected initiatives where I have combined planning, leadership, technology, and practical delivery.
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
