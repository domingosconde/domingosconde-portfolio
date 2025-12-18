import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Online English Teacher",
      company: "Rose English School",
      location: "Remote",
      period: "March 2025 - Present",
      description: "Teaching English online to students of various levels.",
      current: true,
    },
    {
      title: "Founder & General Director",
      company: "Open Mind Academy AO",
      location: "Angola",
      period: "December 2023 - Present",
      description: "Founded and currently direct a hybrid English academy, managing operations, curriculum development, and student engagement.",
      current: true,
    },
    {
      title: "Deputy Academic Director & Course Coordinator",
      company: "Academia do Futuro",
      location: "Calumbo, Angola",
      period: "September 2023 - June 2024",
      description: "Served as Deputy Academic Director, Course Coordinator, and taught English and Primary School classes.",
      current: false,
    },
    {
      title: "English Teacher",
      company: "André Class",
      location: "Angola",
      period: "2022 - August 2023",
      description: "Started as a trainee teacher and progressed to teaching English at the center where I first learned the language.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
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
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
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

                      {/* Icon */}
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>

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
