import { Link } from "react-router-dom";
import { Shield, BookOpen, Gamepad2, Users, AlertTriangle, TrendingUp, Heart, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import StatCard from "@/components/shared/StatCard";

const quickAccessCards = [
  {
    icon: Gamepad2,
    title: "Quizzes",
    description: "Testa os teus conhecimentos sobre segurança online",
    href: "/quizzes",
    color: "text-primary",
    bg: "bg-primary-pale",
  },
  {
    icon: Shield,
    title: "Como te Proteger",
    description: "Dicas práticas para te manteres seguro na internet",
    href: "/proteger",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: AlertTriangle,
    title: "Como Agir",
    description: "O que fazer se fores vítima de ciberbullying",
    href: "/agir",
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

const alerts = [
  {
    id: 1,
    title: "Cuidado com links suspeitos no Instagram",
    date: "20 Mar 2026",
    category: "Alerta",
  },
  {
    id: 2,
    title: "Como identificar perfis falsos no TikTok",
    date: "18 Mar 2026",
    category: "Dica",
  },
  {
    id: 3,
    title: "Nova campanha contra o ciberbullying nas escolas",
    date: "15 Mar 2026",
    category: "Notícia",
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <PageHero
        title="Não estás sozinho."
        subtitle="A PSP está aqui para te ajudar. Aprende a proteger-te online e, se precisares, fala connosco — em total confidencialidade."
        gradient
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-full" asChild>
            <a
              href="https://wa.me/351999999999?text=Ol%C3%A1+PSP+preciso+de+ajuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="h-5 w-5 mr-1" />
              Preciso de Ajuda
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 rounded-full border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            asChild
          >
            <Link to="/quizzes">
              <Gamepad2 className="h-5 w-5 mr-1" />
              Fazer um Quiz
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Quick access cards */}
      <section className="container py-16">
        <h2 className="text-center font-display text-2xl font-bold sm:text-3xl mb-10">
          Explora e aprende
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessCards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-psp transition-all hover:shadow-psp-lg hover:-translate-y-1"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
              </div>
              <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Explorar <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl mb-10">
            O nosso impacto
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={Users} value="2.500+" label="Jovens ajudados" />
            <StatCard icon={BookOpen} value="120+" label="Conteúdos educativos" />
            <StatCard icon={Gamepad2} value="8.000+" label="Quizzes completados" />
            <StatCard icon={TrendingUp} value="95%" label="Taxa de satisfação" />
          </div>
        </div>
      </section>

      {/* Alerts feed */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Alertas e dicas
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/comunidade">
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-pale">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold truncate">{alert.title}</h4>
                <p className="text-xs text-muted-foreground">{alert.date}</p>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                {alert.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Precisas de falar com alguém?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Não tenhas medo. A PSP está preparada para te ajudar de forma confidencial e segura.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="mt-8 text-base px-8 py-6 rounded-full bg-white/20 hover:bg-white/30 border border-white/20"
            asChild
          >
            <a
              href="https://wa.me/351999999999?text=Ol%C3%A1+PSP+preciso+de+ajuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="h-5 w-5 mr-1" />
              Preciso de Ajuda
            </a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
