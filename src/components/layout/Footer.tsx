import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                PSP<span className="text-primary-light"> Cyber</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma da Polícia de Segurança Pública para combate ao ciberbullying e promoção da cibersegurança.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Como te Proteger", href: "/proteger" },
                { label: "Como Agir", href: "/agir" },
                { label: "Quizzes", href: "/quizzes" },
                { label: "Comunidade", href: "/comunidade" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm">Apoio</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/ajuda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Preciso de Ajuda
              </Link>
              <a href="tel:112" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Emergência: 112
              </a>
              <a href="tel:800204204" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Linha de Apoio: 800 204 204
              </a>
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm">Contactos PSP</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> 218 111 000
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> contacto@psp.pt
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Lisboa, Portugal
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Polícia de Segurança Pública — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
