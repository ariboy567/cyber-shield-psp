import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  gradient?: boolean;
}

const PageHero = ({ title, subtitle, children, gradient = false }: PageHeroProps) => {
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${
        gradient ? "bg-gradient-hero text-primary-foreground" : "bg-primary-pale"
      }`}
    >
      {gradient && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>
      )}
      <div className="container relative text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed animate-fade-in-up ${
              gradient ? "text-white/80" : "text-muted-foreground"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
