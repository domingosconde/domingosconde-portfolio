import { Calendar, MapPin } from "lucide-react";
import pixelShirtzLogo from "@/assets/logos/pixelshirtz.png";
import roseEnglishLogo from "@/assets/logos/roseenglish.jpg";
import openMindLogo from "@/assets/logos/openmindacademy.png";
import andreClassLogo from "@/assets/logos/andreclass.png";
import construAfricaLogo from "@/assets/logos/construafrica.jpg";
import nodusLogo from "@/assets/logos/nodus.png";
import beeCoreLogo from "@/assets/logos/beecoresystem.png";
import leyvLogo from "@/assets/logos/leyvcomercial.jpg";
import galpLogo from "@/assets/logos/galp.png.asset.json";
import asisLogo from "@/assets/logos/asis.png.asset.json";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  note?: string;
  tags?: string[];
  current: boolean;
  logo: string | null;
  logo2?: string | null;
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Agente Comercial Galp Energia (Call Center Seller / Outbound)",
      company: "Galp Energia via ASIS (Asisera Lda)",
      location: "Remote",
      period: "September 2026 - Present",
      description: "Remote outbound sales agent for Galp Energia, handling customer outreach, argumentation, and closing energy contracts on behalf of Galp through an authorized commercial partnership.",
      note: "Onboarding began in September 2026; outbound sales begin October 1, 2026.",
      tags: ["Sales", "Outbound", "Customer Communication", "Energy Sector"],
      current: true,
      logo: null,
    },
    {
      title: "Manager & Partner",
      company: "LeyV Comercial",
      location: "Angola",
      period: "2026",
      description: "I managed social media, advertising campaigns, and artistic direction for this online supermarket startup. As a partner, I worked with the founder on strategic decisions that shaped a digital store offering clothing, footwear, accessories, smartphones, computers, and more in one place.",
      current: false,
      logo: leyvLogo,
    },
    {
      title: "Co-Founder & Managing Director",
      company: "Bee Core System",
      location: "Angola",
      period: "May 2026 - Present",
      description: "I co-founded a brand dedicated to digital automation and social media management for companies and individuals. I lead strategy, service design, client onboarding, and automation workflows that help clients work efficiently and grow.",
      current: true,
      logo: beeCoreLogo,
    },
    {
      title: "Founder & Manager",
      company: "PixelShirtZ",
      location: "Luanda, Angola",
      period: "September 2025 - Present",
      description: "I founded and manage a t-shirt brand for nerds, anime fans, developers, gamers, and geeks. I oversee product design, e-commerce operations, inventory, and brand marketing.",
      current: true,
      logo: pixelShirtzLogo,
    },
    {
      title: "Director of IT & Communication / Finance",
      company: "Fundação ConstruÁfrica",
      location: "Angola",
      period: "2025 - September 2026",
      description: "I directed the IT and Communication department and the Finance department at this NGO. My responsibilities included digital infrastructure, internal communications, financial reporting, and organisational planning.",
      current: false,
      logo: construAfricaLogo,
    },
    {
      title: "Co-Founder & Managing Director",
      company: "Comunidade NÓDUS English Speak",
      location: "Angola",
      period: "2025 - Present",
      description: "I co-founded and manage a community initiative that helps young people speak English with confidence through guided practice, shared learning, and peer support.",
      current: true,
      logo: nodusLogo,
    },
    {
      title: "Co-Founder & Manager/Agent",
      company: "Sacamadesso Lirical",
      location: "Angola",
      period: "2025 - Present",
      description: "I co-founded and manage a community of local musicians working across rap, RnB, trap, pop, and Afrobeat. I handle documentation, social media, and artist coordination.",
      current: true,
      logo: null,
    },
    {
      title: "Online English Teacher",
      company: "Rose English School",
      location: "Remote",
      period: "March 2025 - October 2025",
      description: "I delivered online English classes, managed virtual classrooms and learning materials, followed student progress, and maintained organised digital records.",
      current: false,
      logo: roseEnglishLogo,
    },
    {
      title: "Founder & Administrative Manager",
      company: "Open Mind Academy AO",
      location: "Luanda, Angola",
      period: "December 2023 - Present",
      description: "I manage the daily operations of a hybrid English academy, including student records, schedules, documentation, team coordination, and service planning.",
      current: true,
      logo: openMindLogo,
    },
    {
      title: "Administrative Support & English Teacher",
      company: "André Class",
      location: "Luanda, Angola",
      period: "2022 - June 2024",
      description: "I supported administration while teaching English. I organised student information, schedules, and class materials, and helped coordinate communication between staff and students.",
      current: false,
      logo: andreClassLogo,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Professional Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={`${item.company}-${item.title}`}
                  className={`relative flex flex-col md:flex-row gap-8 animate-on-scroll ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10">
                    {item.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                      {/* Badge */}
                      {item.current && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                          Current Position
                        </span>
                      )}

                      {/* Company Logo */}
                      {item.logo ? (
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 overflow-hidden bg-white border border-border">
                          <img 
                            src={item.logo} 
                            alt={`${item.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-primary/10 border border-border">
                          <span className="text-primary font-bold text-lg">
                            {item.company.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>

                      {/* Company */}
                      <p className="text-foreground font-medium mb-3">
                        {item.company}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {item.note && (
                        <p className="text-muted-foreground text-sm leading-relaxed mt-3">{item.note}</p>
                      )}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
