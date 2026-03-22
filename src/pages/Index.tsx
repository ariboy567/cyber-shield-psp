import { useEffect, useRef } from "react";
import { Shield, BookOpen, Users, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ShieldSVG from "@/components/ShieldSVG";

const WHATSAPP_URL = "https://wa.me/351999999999?text=Ol%C3%A1+PSP+preciso+de+ajuda";

const stats = [
  { number: "1 em 3", label: "jovens sofreu ciberbullying" },
  { number: "72%", label: "não pedem ajuda a ninguém" },
  { number: "24h", label: "A PSP responde em 24 horas" },
];

const paths = [
  {
    icon: Shield,
    title: "Preciso de ajuda",
    description: "Fala connosco agora pelo WhatsApp",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: BookOpen,
    title: "Quero aprender",
    description: "Quizzes e guias de cibersegurança",
    href: "/quiz",
    external: false,
  },
  {
    icon: Users,
    title: "Ver alertas PSP",
    description: "Publicações e recomendações da PSP",
    href: "/comunidade",
    external: false,
  },
];

const steps = [
  "Carregas no botão",
  "WhatsApp abre",
  "Respondes às perguntas",
  "PSP recebe e age",
];

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = sectionsRef.current?.querySelectorAll(".fade-section");
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain min-h-screen bg-background" ref={sectionsRef}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-16">
          {/* Left content */}
          <div className="flex-[3] space-y-8">
            <p className="font-body text-[13px] font-medium uppercase tracking-[0.3em] text-primary">
              PSP · Escudo Digital
            </p>

            <h1 className="font-display text-hero leading-[0.95]">
              <span className="block">SE ESTÁS</span>
              <span className="block">A PASSAR</span>
              <span className="block">POR ISTO —</span>
            </h1>

            <p className="max-w-md font-body text-xl text-muted-foreground leading-relaxed">
              Não estás sozinho. A PSP está aqui para te ajudar a combater o cyberbullying.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground glow-cobalt transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Preciso de Ajuda
              </a>
              <a
                href="#paths"
                className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                Saber mais
              </a>
            </div>
          </div>

          {/* Right — Shield */}
          <div className="hidden flex-[2] lg:flex items-center justify-center">
            <div className="w-full max-w-[380px]">
              <ShieldSVG />
            </div>
          </div>
        </div>

        {/* Cobalt ambient glow behind shield */}
        <div className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </section>

      {/* ─── STATS ─── */}
      <section className="fade-section py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-md border-l-2 border-l-primary bg-card p-8"
              >
                <span className="block font-display text-stat text-foreground">
                  {stat.number}
                </span>
                <span className="mt-2 block font-body text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE PATHS ─── */}
      <section id="paths" className="fade-section py-24 lg:py-32">
        <div className="container">
          <h2 className="font-display text-section mb-14">
            O que queres fazer agora?
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {paths.map((path, i) => {
              const Tag = path.external ? "a" : "a";
              const linkProps = path.external
                ? { href: path.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: path.href };

              return (
                <Tag
                  key={i}
                  {...linkProps}
                  className="group flex flex-col justify-between rounded-md border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:glow-cobalt-sm"
                >
                  <div>
                    <path.icon className="h-6 w-6 text-primary mb-6" />
                    <h3 className="font-display text-2xl tracking-wide mb-2 normal-case">{path.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{path.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-1 text-sm text-muted-foreground transition-all group-hover:text-primary group-hover:gap-2">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="fade-section py-24 lg:py-32">
        <div className="container">
          <h2 className="font-display text-section text-center mb-20">
            Como funciona a denúncia
          </h2>

          <div className="relative flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-0">
            {/* Connecting line */}
            <div className="absolute top-6 left-[10%] right-[10%] hidden h-px bg-border md:block" />

            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center md:flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xl text-primary">
                  {i + 1}
                </div>
                <span className="mt-4 max-w-[140px] font-body text-sm text-muted-foreground">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="fade-section py-24 lg:py-32">
        <div className="container text-center">
          <h2 className="font-display text-section mx-auto max-w-lg mb-10">
            Quando precisares, estaremos aqui.
          </h2>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground glow-cobalt transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a PSP agora
          </a>

          <p className="mt-6 font-body text-xs tracking-widest uppercase text-muted-foreground">
            Confidencial · Seguro · Gratuito
          </p>
        </div>
      </section>

      {/* Minimal footer line */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Polícia de Segurança Pública — Escudo Digital
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
