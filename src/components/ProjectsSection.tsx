import { ExternalLink, MapPin, Palette, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import openMindLogo from "@/assets/logos/openmindacademy.png";
import pixelShirtzLogo from "@/assets/logos/pixelshirtz.png";
import beeCoreLogo from "@/assets/logos/beecoresystem.png";
import leyvLogo from "@/assets/logos/leyvcomercial.jpg";
import nodusLogo from "@/assets/logos/nodus.png";
import shengtianLogo from "@/assets/logos/shengtian-ao.jpg";
import stVirtualStudioLogo from "@/assets/logos/st-virtual-studio-logo.png.asset.json";
import epossoLogo from "@/assets/logos/eposso-logo.png.asset.json";

type Project = {
  title: string;
  description: string;
  image: string | null;
  icon: React.ElementType | null;
  tags: string[];
  period?: string;
  link: string | null;
  websiteComingSoon?: boolean;
  featured: boolean;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "ST Virtual Studio",
      description: "A creative digital studio I founded, focused on design, visual communication, and digital solutions for companies and brands. Services include graphic design and visual identity, web design and UX/UI, video editing and motion design, social media management, and paid traffic.",
      image: stVirtualStudioLogo.url,
      icon: null,
      tags: ["Creative Studio", "Graphic Design", "UX/UI", "Motion Design", "Social Media", "Paid Traffic"],
      period: "November 2026 - Present",
      link: null,
      websiteComingSoon: true,
      featured: true,
    },
    {
      title: "Eposso",
      description: "An online platform for mobile and web that I am founding to showcase beauty salons and aesthetics professionals in Huambo Province. Clients will be able to book appointments online, while salons manage their clients and schedules, a solution for both customers and businesses in the beauty sector.",
      image: epossoLogo.url,
      icon: null,
      tags: ["Beauty & Aesthetics", "Booking Platform", "Mobile and Web", "Huambo Province", "Startup"],
      period: "In Development",
      link: null,
      websiteComingSoon: true,
      featured: true,
    },
    {
      title: "Shengtian AO",
      description: "An AI assistant I created to give small farmers practical access to agricultural guidance. It answers questions through WhatsApp and SMS, helping people in areas with limited internet coverage when an agronomist is not readily available.",
      image: shengtianLogo,
      icon: null,
      tags: ["Artificial Intelligence", "Agriculture", "WhatsApp", "SMS", "Social Impact"],
      link: "https://shengtianao.lovable.app",
      featured: true,
    },
    {
      title: "LeyV Comercial",
      description: "An online supermarket startup where I served as Manager and Partner in 2026. The store brings clothing, footwear, accessories, smartphones, computers, and other products together in one convenient place. I led social media, advertising campaigns, and artistic direction.",
      image: leyvLogo,
      icon: null,
      tags: ["E-commerce", "Social Media", "Art Direction", "Startup"],
      period: "2026",
      link: null,
      websiteComingSoon: true,
      featured: false,
    },
    {
      title: "Bee Core System",
      description: "A digital services brand I co-founded to help businesses and individuals automate routine work, manage social media, and build systems that support sustainable growth.",
      image: beeCoreLogo,
      icon: null,
      tags: ["Automation", "Social Media", "Digital Strategy"],
      period: "May 2026 - Present",
      link: null,
      websiteComingSoon: true,
      featured: true,
    },
    {
      title: "Open Mind Academy AO",
      description: "A hybrid English academy that I founded and manage. I oversee student records, scheduling, documentation, internal coordination, and the daily learning experience.",
      image: openMindLogo,
      icon: null,
      tags: ["Education", "Administration", "Management"],
      link: "https://openmindacademyao.lovable.app",
      featured: true,
    },
    {
      title: "PixelShirtZ",
      description: "A t-shirt brand created for nerds, anime fans, developers, gamers, and geeks. I manage product design, e-commerce operations, inventory, and brand marketing.",
      image: pixelShirtzLogo,
      icon: null,
      tags: ["E-commerce", "Fashion", "Geek Culture"],
      link: null,
      websiteComingSoon: true,
      featured: true,
    },
    {
      title: "Comunidade NÓDUS English Speak",
      description: "A community initiative I co-founded to help young people speak English with confidence through guided practice, shared learning, and peer support. I serve as Co-Founder and Managing Director.",
      image: nodusLogo,
      icon: null,
      tags: ["Education", "Community", "Leadership", "English"],
      link: null,
      websiteComingSoon: true,
      featured: true,
    },
    {
      title: "ClinEncontra",
      description: "My high school web project for mapping healthcare clinics across the Zango neighbourhoods in Luanda and gathering community needs through a structured assessment form. I led the scope, data model, and team coordination.",
      image: null,
      icon: MapPin,
      tags: ["React", "TypeScript", "Tailwind", "Google Maps API", "Civic Tech"],
      link: null,
      websiteComingSoon: true,
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
                {project.period && (
                  <p className="text-primary text-sm font-medium mb-3">{project.period}</p>
                )}
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
                {project.link ? (
                  <Button asChild size="sm" variant="outline" className="h-8 px-2.5 text-xs">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                    >
                      Visit website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                ) : project.websiteComingSoon ? (
                  <p className="text-xs text-muted-foreground">Website link coming soon</p>
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
