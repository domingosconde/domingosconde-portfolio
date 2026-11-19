import { Calendar, ExternalLink, MapPin } from "lucide-react";
import fendaTundavalaLogo from "@/assets/logos/fendatundavala.png";
import pmiAsset from "@/assets/courses/pmi.jpg.asset.json";
import nasaLogo from "@/assets/certifications/nasa.png.asset.json";
import ggpenLogo from "@/assets/certifications/ggpen.png.asset.json";
import sumolLogo from "@/assets/certifications/sumol.png.asset.json";
import sumolAcademiaLogo from "@/assets/certifications/sumol-academia-digital.png.asset.json";
import nasaCertificate from "@/assets/certifications/nasa-space-apps-challenge-2026.pdf.asset.json";
import sumolCertificate from "@/assets/certifications/sumol-academia-digital-2026.pdf.asset.json";

const certifications = [
  {
    title: "SUMOL Academia Digital: 3rd Edition",
    issuer: "SUMOL",
    date: "November 17, 2026",
    detail: "Certificate of participation in a digital creativity workshop at Hotel Continental Horizonte in Luanda, Angola.",
    file: sumolCertificate.url,
    logos: [
      { src: sumolLogo.url, alt: "SUMOL logo" },
      { src: sumolAcademiaLogo.url, alt: "SUMOL Academia Digital logo" },
    ],
  },
  {
    title: "NASA Space Apps Challenge: Calumbo",
    issuer: "NASA Space Apps Challenge",
    date: "November 14–15, 2026",
    detail: "Galactic Problem Solver certificate for participation in the 2026 global hackathon, which tackles challenges on Earth and in space.",
    file: nasaCertificate.url,
    logos: [
      { src: nasaLogo.url, alt: "NASA logo" },
      { src: ggpenLogo.url, alt: "GGPEN logo" },
    ],
  },
  {
    title: "Project Management Foundations: Integration",
    issuer: "PMI Registered Education Provider, LinkedIn Learning",
    date: "January 2024",
    detail: "Project Integration Management. 0.50 PDUs or contact hours. Provider ID 4101.",
    file: "/certificates/PMI-Project-Integration-Management-Domingos-Conde.pdf",
    logos: [{ src: pmiAsset.url, alt: "Project Management Institute logo" }],
  },
];

const EducationSection = () => {
  const education = [
    {
      degree: "High School Diploma in Computer Science Management",
      institution: "Complexo Escolar Privado de Intercâmbio Cultural Angola e China FENDA DA TUNDAVALA - Faixa e Rota",
      location: "Luanda, Angola",
      period: "Final Year, 13th Grade",
      description:
        "Completing the final year of a programme that combines business administration, organisational management, and information technology. The curriculum includes system configuration, hardware maintenance, and digital tools for management.",
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

          {/* Certifications */}
          <div className="mt-20 animate-on-scroll">
            <div className="text-center mb-10">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                Credentials
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                Certifications
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <article
                  key={cert.title}
                  className="group flex flex-col p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant"
                >
                  <div className="flex gap-2 mb-4">
                    {cert.logos.map((logo) => (
                      <div key={logo.alt} className="w-16 h-14 rounded-lg bg-primary-foreground border border-border overflow-hidden">
                        <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain p-1.5" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-3">{cert.detail}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-5">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${cert.title}`}
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                    >
                      View certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
