import { ArrowDown, Code, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-soft delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full border border-primary/20 mb-8 opacity-0 animate-fade-up">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-accent-foreground text-sm font-medium">
              Estudante de Gestão & Professor de Inglês
            </span>
            <BookOpen className="w-4 h-4 text-primary" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-accent-foreground mb-6 opacity-0 animate-fade-up delay-100">
            Olá, eu sou o
            <span className="block text-gradient mt-2">Domingos Conde</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-200 leading-relaxed">
            Unindo a{" "}
            <span className="text-primary font-medium">tecnologia</span> e a{" "}
            <span className="text-primary font-medium">educação</span>.
            Fundador da Open Mind Academy AO, com experiência em Gestão e Ensino de Inglês.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <a
              href="#about"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:glow-primary hover:scale-105"
            >
              Saber Mais
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-accent-foreground/20 text-accent-foreground rounded-lg font-medium transition-all duration-300 hover:bg-accent-foreground/10"
            >
              Entrar em Contacto
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-accent-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Deslizar</span>
            <ArrowDown className="w-5 h-5 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
