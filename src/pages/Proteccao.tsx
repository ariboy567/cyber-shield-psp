import { Shield, MessageSquareX, UserCheck, AlertCircle, Phone, ArrowLeft, Ban, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const cyberbullyingGuides = [
  {
    icon: MessageSquareX,
    title: "Ignora e não respondas",
    description: "Os agressores digitais procuram uma reação. Ao não responderes, retiras-lhes o poder. Mantém a calma e não entres no jogo deles.",
    tips: ["Não respondas a insultos", "Afasta-te do telemóvel ou computador por uns momentos"]
  },
  {
    icon: UserCheck,
    title: "Bloqueia o Agressor",
    description: "Usa as ferramentas das redes sociais (Instagram, TikTok, WhatsApp) para impedir que a pessoa te consiga contactar novamente.",
    tips: ["Bloqueia o perfil imediatamente", "Denuncia a conta na própria plataforma"]
  },
  {
    icon: Ban,
    title: "Guarda Provas",
    description: "Nunca apagues as mensagens ou comentários ofensivos. Tira screenshots de tudo. Estas provas são fundamentais para a PSP agir.",
    tips: ["Tira prints de conversas e comentários", "Guarda links de perfis ou publicações"]
  },
  {
    icon: Heart,
    title: "Pede Ajuda",
    description: "Não tens de passar por isto sozinho. Fala com os teus pais, um professor ou um amigo de confiança. E claro, fala com a PSP.",
    tips: ["Conta a um adulto em quem confies", "Usa o nosso canal de WhatsApp para apoio"]
  }
];

const Proteccao = () => {
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
            Combate ao Cyberbullying
          </p>
          <h1 className="font-display text-section mb-6">Como te defender do Cyberbullying</h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            O cyberbullying é crime e ninguém tem o direito de te humilhar ou ameaçar online. Segue estes passos fundamentais recomendados pela PSP para te protegeres e parares a agressão.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cyberbullyingGuides.map((guide, i) => (
            <div key={i} className="group rounded-md border border-border bg-card p-8 transition-all hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-6">
                <guide.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-4">{guide.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {guide.description}
              </p>
              <ul className="space-y-3">
                {guide.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-24 rounded-md border border-primary/20 bg-primary/5 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="font-display text-3xl mb-4">Estás a sofrer agora?</h2>
              <p className="font-body text-muted-foreground mb-0">
                Se te sentes ameaçado ou em perigo, a PSP pode ajudar-te a identificar o agressor e a parar o assédio. A tua denúncia é confidencial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
              >
                Falar com a PSP agora
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Proteccao;
