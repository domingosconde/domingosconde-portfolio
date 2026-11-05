import { Calendar, CheckCircle2, Circle, MapPin, ExternalLink } from "lucide-react";
import luanda42Logo from "@/assets/logos/42luanda.png";
import confucioLogo from "@/assets/logos/confucio.png";
import harvardAsset from "@/assets/courses/harvard-university.jpg.asset.json";
import googleAsset from "@/assets/courses/google.jpg.asset.json";
import googleAdsAsset from "@/assets/courses/google-ads.jpg.asset.json";
import metaAsset from "@/assets/courses/meta.jpg.asset.json";
import pmiAsset from "@/assets/courses/pmi.jpg.asset.json";

type JourneyStatus = "completed" | "current" | "upcoming";

type Course = {
  title: string;
  institution: string;
  format: string;
  status: string;
  date?: string;
  description: string;
  logos: string[];
  journeyTitle?: string;
  journey?: { label: string; status: JourneyStatus }[];
  file?: string;
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
    journeyTitle: "Admissions progress",
    journey: [
      { label: "Discovery Piscine Web", status: "completed" },
      { label: "Piscine C", status: "current" },
      { label: "Student Selection", status: "upcoming" },
    ],
  },
  {
    title: "Mandarin Chinese",
    institution: "Instituto Confúcio at Universidade Agostinho Neto",
    format: "Luanda, Angola",
    status: "Ongoing",
    description:
      "Developing introductory speaking, reading, writing, and cultural knowledge in Mandarin Chinese, currently at HSK 1, and progressing along the official HSK level pathway.",
    logos: [confucioLogo],
    journeyTitle: "HSK pathway",
    journey: [
      { label: "HSK 1", status: "current" },
      { label: "HSK 2", status: "upcoming" },
      { label: "HSK 3", status: "upcoming" },
      { label: "HSK 4", status: "upcoming" },
      { label: "HSK 4+", status: "upcoming" },
    ],
  },
  {
    title: "CS50's Computer Science for Business",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Building a practical understanding of computer science concepts and how technology supports business decisions, products, and operations.",
    logos: [harvardAsset.url],
    journeyTitle: "Course weeks",
    journey: [
      { label: "Interpreting Information", status: "current" },
      { label: "Analyzing Algorithms", status: "upcoming" },
      { label: "Designing Data Structures", status: "upcoming" },
      { label: "Practicing Programming", status: "upcoming" },
      { label: "Awakening Artificial Intelligence", status: "upcoming" },
      { label: "Implementing the Internet", status: "upcoming" },
      { label: "Weaving the Web", status: "upcoming" },
      { label: "Deploying Databases", status: "upcoming" },
      { label: "Securing Systems", status: "upcoming" },
    ],
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Studying the concepts and algorithms behind modern artificial intelligence, including search, machine learning, neural networks, and natural language, through hands-on Python projects.",
    logos: [harvardAsset.url],
    journeyTitle: "Course weeks",
    journey: [
      { label: "Search", status: "current" },
      { label: "Knowledge", status: "upcoming" },
      { label: "Uncertainty", status: "upcoming" },
      { label: "Optimization", status: "upcoming" },
      { label: "Learning", status: "upcoming" },
      { label: "Neural Networks", status: "upcoming" },
      { label: "Language", status: "upcoming" },
    ],
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Learning to design and implement web applications with Python, JavaScript, and SQL, using frameworks such as Django and React, from database design to deployment.",
    logos: [harvardAsset.url],
    journeyTitle: "Course weeks",
    journey: [
      { label: "HTML, CSS", status: "current" },
      { label: "Git", status: "upcoming" },
      { label: "Python", status: "upcoming" },
      { label: "Django", status: "upcoming" },
      { label: "SQL, Models, and Migrations", status: "upcoming" },
      { label: "JavaScript", status: "upcoming" },
      { label: "User Interfaces", status: "upcoming" },
      { label: "Testing, CI/CD", status: "upcoming" },
      { label: "Scalability and Security", status: "upcoming" },
      { label: "Final Project", status: "upcoming" },
    ],
  },
  {
    title: "CS50's Introduction to Databases with SQL",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Learning how to create, read, update, and delete data with relational databases, model real world entities and relationships, and work with SQLite, PostgreSQL, and MySQL.",
    logos: [harvardAsset.url],
    journeyTitle: "Course weeks",
    journey: [
      { label: "Querying", status: "current" },
      { label: "Relating", status: "upcoming" },
      { label: "Designing", status: "upcoming" },
      { label: "Writing", status: "upcoming" },
      { label: "Viewing", status: "upcoming" },
      { label: "Optimizing", status: "upcoming" },
      { label: "Scaling", status: "upcoming" },
      { label: "Final Project", status: "upcoming" },
    ],
  },
  {
    title: "CS50's Mobile App Development with React Native",
    institution: "Harvard University",
    format: "Online",
    status: "Ongoing",
    description:
      "Learning mobile app development with React Native, from modern JavaScript and React fundamentals to navigation, data, Redux, performance, and deployment.",
    logos: [harvardAsset.url],
    journeyTitle: "Course weeks",
    journey: [
      { label: "Overview, JavaScript", status: "current" },
      { label: "JavaScript, ES6", status: "upcoming" },
      { label: "React, Props, State", status: "upcoming" },
      { label: "React Native", status: "upcoming" },
      { label: "Lists, User Input", status: "upcoming" },
      { label: "User Input, Debugging", status: "upcoming" },
      { label: "Navigation", status: "upcoming" },
      { label: "Data", status: "upcoming" },
      { label: "Expo Components", status: "upcoming" },
      { label: "Redux", status: "upcoming" },
      { label: "Async Redux, Tools", status: "upcoming" },
      { label: "Performance", status: "upcoming" },
      { label: "Deploying, Testing", status: "upcoming" },
    ],
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
    title: "Privacy and Data Protection Across Meta Technologies",
    institution: "Meta via Meta Blueprint",
    format: "Online",
    status: "Ongoing",
    description:
      "Studying privacy and data protection across Meta technologies, and how to create ads that follow Meta Advertising Standards.",
    logos: [metaAsset.url],
    journeyTitle: "Course lessons",
    journey: [
      { label: "Introduction to Privacy and Data Protection", status: "completed" },
      { label: "Meta Advertising Standards and Ad Review", status: "current" },
    ],
  },
  {
    title: "Project Management Foundations: Integration",
    institution: "PMI Registered Education Provider, LinkedIn Learning",
    format: "Online",
    status: "Completed",
    date: "January 2024",
    description:
      "Completed project integration management training, covering how to coordinate processes, people, and work across the project lifecycle. 0.50 PDUs or contact hours, Provider ID 4101.",
    logos: [pmiAsset.url],
    file: "/certificates/PMI-Project-Integration-Management-Domingos-Conde.pdf",
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
              Learning journey across technology, business, project management, digital advertising, and languages.
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
                          className="w-full h-full object-contain p-1.5"
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
                    {course.date ?? "In progress"}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  {course.description}
                </p>

                {course.journey && (
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      {course.journeyTitle ?? "Course stages"}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                      {course.journey.map((step) => (
                        <div key={step.label} className="flex items-center gap-1.5">
                          {step.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          ) : step.status === "current" ? (
                            <div className="relative shrink-0">
                              <Circle className="w-4 h-4 text-primary fill-primary/20" />
                              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                            </div>
                          ) : (
                            <Circle className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                          )}
                          <span
                            className={`text-[11px] leading-tight ${
                              step.status === "upcoming"
                                ? "text-muted-foreground/60"
                                : "text-foreground font-medium"
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {course.file && (
                  <div className="mt-6">
                    <a
                      href={course.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                    >
                      View certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
