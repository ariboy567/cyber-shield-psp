import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como te Proteger", href: "/proteger" },
  { label: "Quizzes", href: "/quizzes" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Ajuda", href: "/ajuda" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-primary/40">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="hsl(224 85% 53%)" strokeWidth="2">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
              </svg>
            </div>
            <span className="font-display text-[22px] tracking-wide text-foreground">
              ESCUDO DIGITAL
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="rounded border border-border px-4 py-1.5 font-body text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              Entrar
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background pt-20">
          <nav className="container flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 font-display text-2xl tracking-wide text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center rounded border border-border py-3 font-body text-sm text-muted-foreground"
            >
              Entrar
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
