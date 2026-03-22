import { Shield, User, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const officers = [
  {
    name: "Agente Silva",
    role: "Especialista em Cibercrime",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200&h=200",
    dos: [
      "Guarda prints de todas as ofensas",
      "Bloqueia o agressor imediatamente",
      "Denuncia o perfil à rede social"
    ],
    donts: [
      "Nunca respondas a insultos",
      "Não partilhes passwords com amigos",
      "Não te vingues com mais violência"
    ]
  },
  {
    name: "Subintendente Santos",
    role: "Apoio à Vítima",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=200&h=200",
    dos: [
      "Fala com um adulto de confiança",
      "Mantém os teus perfis privados",
      "Reporta ameaças graves à PSP"
    ],
    donts: [
      "Não passes por isto sozinho",
      "Não acredites no que o agressor diz",
      "Não apagues as provas por vergonha"
    ]
  },
  {
    name: "Agente Ferreira",
    role: "Prevenção Escolar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    dos: [
      "Apoia amigos que sofram bullying",
      "Pensa antes de publicar fotos",
      "Ativa a verificação em dois passos"
    ],
    donts: [
      "Não sejas um espectador passivo",
      "Não partilhes boatos ou mentiras",
      "Não marques encontros com estranhos"
    ]
  }
];

const Comunidade = () => {
  return (
    <div className="grain min-h-screen bg-background">
      <Navbar />
      
      <main className="container pt-32 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar ao início
        </Link>

        <div className="max-w-3xl mb-16">
          <p className="font-body text-[13px] font-medium uppercase tracking-[0.3em] text-primary mb-4">
            Comunidade de Proteção
          </p>
          <h1 className="font-display text-section mb-6">Conselhos da PSP</h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Os nossos agentes estão aqui para te guiar. Aprende com quem lida todos os dias com a segurança digital e sabe como parar o cyberbullying.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {officers.map((officer, i) => (
            <div key={i} className="flex flex-col rounded-md border border-border bg-card overflow-hidden transition-all hover:border-primary/30">
              <div className="p-8 pb-0 flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full border-2 border-primary/20 p-1 mb-4">
                  <img 
                    src={officer.image} 
                    alt={officer.name} 
                    className="h-full w-full rounded-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-display text-2xl tracking-wide">{officer.name}</h3>
                <p className="font-body text-xs text-primary uppercase tracking-widest mt-1 mb-6">{officer.role}</p>
              </div>

              <div className="p-8 pt-0 space-y-8 mt-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-500 font-display text-sm uppercase tracking-widest">
                    <CheckCircle className="h-4 w-4" />
                    O que fazer
                  </div>
                  <ul className="space-y-3">
                    {officer.dos.map((item, j) => (
                      <li key={j} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500 font-display text-sm uppercase tracking-widest">
                    <XCircle className="h-4 w-4" />
                    O que NÃO fazer
                  </div>
                  <ul className="space-y-3">
                    {officer.donts.map((item, j) => (
                      <li key={j} className="font-body text-sm text-foreground/80 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 p-12 rounded-md border border-primary/20 bg-primary/5 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl mb-4">A PSP está contigo</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Não deixes que o cyberbullying controle a tua vida. Segue estas orientações e, se precisares, fala connosco.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
          >
            Falar com a PSP agora
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Comunidade;
