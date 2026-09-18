import { Calendar, CheckCircle2, Circle, MapPin } from "lucide-react";
import luanda42Logo from "@/assets/logos/42luanda.png";
import confucioLogo from "@/assets/logos/confucio.png";
import harvardAsset from "@/assets/courses/harvard-university.jpg.asset.json";
import stanfordAsset from "@/assets/courses/stanford-university.jpg.asset.json";
import mitAsset from "@/assets/courses/mit.jpg.asset.json";
import googleAsset from "@/assets/courses/google.jpg.asset.json";
import googleAdsAsset from "@/assets/courses/google-ads.jpg.asset.json";
import metaAsset from "@/assets/courses/meta.jpg.asset.json";

type JourneyStatus = "completed" | "current" | "upcoming";

type Course = {
  title: string;
  institution: string;
  format: string;
  status: string;
  description: string;
  logos: string[];
  journey?: { label: string; status: JourneyStatus }[];
};

const courses: Course[] = [
  {
    title: "Admissions Journey in Software Engineering",
    institution: "42 Luanda",
    format: "Luanda, Angola",
    status: "Ongoing",
    description:
      "Competing for admission through an intensive peer learning process focused on problem solving, programming, and collaborative work. I completed Discovery Piscine Web and am currently taking Piscine C.",
    logos: [luanda42Logo],
    journey: [
      { label: "Discovery Piscine Web", status: "completed" },
      { label: "Piscine C", status: "current" },
      { label: "Student Selection", status: "upcoming" },
    ],
  },
  {
    title: "Mandarin Chinese, HSK 1",
    institution: "Instituto Confúcio at Universidade Agostinho Neto",
    format: "Luanda, Angola",
    status: "Ongoing",
    description:
      "Developing introductory speaking, reading, writing, and cultural knowledge in Mandarin Chinese.",
    logos: [confucioLogo],
  },
  {
    title: "CS50's Computer Science for Business",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Building a practical understanding of computer science concepts and how technology supports business decisions, products, and operations.",
    logos: [harvardAsset.url],
  },
  {
    title: "Careers in Media Technology",
    institution: "Stanford University via Kadenze",
    format: "Online",
    status: "Ongoing",
    description:
      "Exploring professional paths, production environments, and the technical skills used across modern media industries.",
    logos: [stanfordAsset.url],
  },
  {
    title: "Module 0: Introduction to Universal AI",
    institution: "Massachusetts Institute of Technology via MITx Online",
    format: "Online",
    status: "Ongoing",
    description:
      "Learning the foundations of artificial intelligence, its practical applications, and its wider impact on organisations and society.",
    logos: [mitAsset.url],
  },
  {
    title: "Google Ads Apps Certification",
    institution: "Google via Skillshop",
    format: "Online",
    status: "Ongoing",
    description:
      "Developing skills in app campaign planning, advertising objectives, audience reach, measurement, and performance improvement.",
    logos: [googleAsset.url, googleAdsAsset.url],
  },
  {
    title: "Meta Ad Policies for Content, Creative, and Targeting",
    institution: "Meta",
    format: "Online",
    status: "Ongoing",
    description:
      "Studying Meta advertising standards for compliant content, responsible creative work, and appropriate audience targeting.",
    logos: [metaAsset.url],
  },
];

const ProfessionalCoursesSection = () => {
  return (
    <section id="courses" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Continuous Learning
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Professional Courses
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Current learning focused on technology, business, digital advertising, media, and languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <article
                key={course.title}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors animate-on-scroll"
                style={{ transitionDelay: `${Math.min(index * 70, 280)}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3 min-h-14">
                    {course.logos.map((logo, logoIndex) => (
                      <div
                        key={`${course.title}-${logoIndex}`}
                        className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden bg-primary-foreground border border-border"
                      >
                        <img
                          src={logo}
                          alt={`${course.institution} logo`}
                          className={`w-full h-full object-contain ${course.title === "Careers in Media Technology" ? "p-0.5 scale-125" : "p-1.5"}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {course.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground leading-snug">
                  {course.title}
                </h3>
                <p className="text-foreground font-medium mt-2">{course.institution}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {course.format}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    In progress
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  {course.description}
                </p>

                {course.journey && (
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      Admissions progress
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {course.journey.map((step) => (
                        <div key={step.label} className="flex flex-col items-center gap-2 text-center">
                          {step.status === "completed" ? (
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          ) : step.status === "current" ? (
                            <div className="relative">
                              <Circle className="w-5 h-5 text-primary fill-primary/20" />
                              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                            </div>
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground/40" />
                          )}
                          <span className={`text-xs leading-tight ${step.status === "upcoming" ? "text-muted-foreground/60" : "text-foreground font-medium"}`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCoursesSection;