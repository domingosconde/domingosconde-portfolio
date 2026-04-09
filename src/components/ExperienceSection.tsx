import { Calendar, MapPin } from "lucide-react";
import pixelShitzLogo from "@/assets/logos/pixelshitz.png";
import roseEnglishLogo from "@/assets/logos/roseenglish.jpg";
import openMindLogo from "@/assets/logos/openmindacademy.png";
import andreClassLogo from "@/assets/logos/andreclass.png";
import construAfricaLogo from "@/assets/logos/construafrica.jpg";
import nodusLogo from "@/assets/logos/nodus.png";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder & Manager",
      company: "PixelShitZ",
      location: "Luanda, Angola",
      period: "September 2025 - Present",
      description: "Founded and manage a t-shirt brand for Nerds, Otakus, Devs, Gamers, and Geeks. Overseeing product design, e-commerce operations, inventory management, and brand marketing.",
      current: true,
      logo: pixelShitzLogo,
    },
    {
      title: "Director of IT & Communication / Finance",
      company: "Fundação ConstruÁfrica",
      location: "Angola",
      period: "2025 - Present",
      description: "Directing the IT & Communication department and the Finance department at this NGO. Managing digital infrastructure, internal communications, financial reporting, and organizational strategy.",
      current: true,
      logo: construAfricaLogo,
    },
    {
      title: "Founder",
      company: "Comunidade NÓDUS English Speak",
      location: "Angola",
      period: "2025 - Present",
      description: "Founded a community-driven NGO helping young people speak English with greater confidence through community-based learning, practice sessions, and peer support.",
      current: true,
      logo: nodusLogo,
    },
    {
      title: "Co-Founder & Manager/Agent",
      company: "Sacamadesso Lirical",
      location: "Angola",
      period: "2025 - Present",
      description: "Co-founded and manage a community of local musicians (Rap, RnB, Trap, Pop, Afrobeat). Handling paperwork, social media management, and artist coordination.",
      current: true,
      logo: null,
    },
    {
      title: "Online English Teacher",
      company: "Rose English School",
      location: "Remote",
      period: "March 2025 - October 2025",
      description: "Deliver online English classes using digital platforms. Manage virtual classrooms, student follow-up, and learning materials. Maintain organized digital records of student progress.",
      current: false,
      logo: roseEnglishLogo,
    },
    {
      title: "Founder & Administrative Manager",
      company: "Open Mind Academy AO",
      location: "Luanda, Angola",
      period: "December 2023 - Present",
      description: "Managed daily administrative operations of a hybrid English academy, including student records, scheduling, documentation, and internal coordination.",
      current: true,
      logo: openMindLogo,
    },
    {
      title: "Administrative Support & English Teacher",
      company: "André Class",
      location: "Luanda, Angola",
      period: "2022 - June 2024",
      description: "Provided administrative assistance alongside teaching responsibilities. Organized student information, schedules, and class materials. Supported internal communication and coordination between staff and students.",
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
