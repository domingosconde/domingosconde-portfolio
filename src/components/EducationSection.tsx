import { Calendar, MapPin } from "lucide-react";
import fendaTundavalaLogo from "@/assets/logos/fendatundavala.png";

const EducationSection = () => {
  const education = [
    {
      degree: "High School - Intermediate Course in Computer Science Management",
      institution: "Complexo Escolar Privado de Intercâmbio Cultural Angola e China FENDA DA TUNDAVALA - Faixa e Rota",
      location: "Angola",
      period: "Ongoing",
      description:
        "Developing skills in management, business administration, and organizational leadership with a focus on computer science.",
      current: true,
      logo: fendaTundavalaLogo,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Academic Background
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={item.degree}
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
                          Currently Studying
                        </span>
                      )}

                      {/* Institution Logo */}
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 overflow-hidden bg-white border border-border">
                        <img 
                          src={item.logo} 
                          alt={`${item.institution} logo`}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-foreground font-medium mb-3">
                        {item.institution}
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

export default EducationSection;
