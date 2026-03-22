import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Shield, Bell, LogOut, ChevronRight, MessageSquare, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const mockDenuncias = [
  {
    id: "DEN-2024-001",
    status: "Em Análise",
    date: "20 de Março, 2024",
    platform: "Instagram",
    type: "Insultos Repetidos",
    description: "Comentários ofensivos e ameaças em publicações pessoais.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    icon: Clock
  },
  {
    id: "DEN-2024-002",
    status: "Resolvido",
    date: "15 de Março, 2024",
    platform: "WhatsApp",
    type: "Perfil Falso",
    description: "Criação de conta falsa com fotos e nome da vítima.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    icon: CheckCircle2
  },
  {
    id: "DEN-2024-003",
    status: "Aguardando Provas",
    date: "10 de Março, 2024",
    platform: "TikTok",
    type: "Chantagem",
    description: "Ameaça de divulgação de imagens privadas em troca de dinheiro.",
    color: "text-red-500",
    bg: "bg-red-500/10",
    icon: AlertCircle
  }
];

const Denuncias = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);

      // Buscar perfil real
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setProfile(profileData);
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="grain min-h-screen bg-background">
      <Navbar />
      
      <main className="container pt-32 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <p className="font-body text-[13px] font-medium uppercase tracking-[0.3em] text-primary mb-2">
              Painel do Cidadão {profile?.full_name ? `· ${profile.full_name}` : ""}
            </p>
            <h1 className="font-display text-section tracking-tight">As Minhas Denúncias</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:border-red-500/50 hover:text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Stats */}
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-md border border-border bg-card p-6">
              <h3 className="font-display text-lg mb-6 uppercase tracking-wider">Resumo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">Total</span>
                  <span className="font-display text-xl">03</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">Em curso</span>
                  <span className="font-display text-xl text-yellow-500">02</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">Resolvidas</span>
                  <span className="font-display text-xl text-green-500">01</span>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-primary/20 bg-primary/5 p-6">
              <h4 className="font-display text-sm mb-3 uppercase tracking-wider text-primary">Precisa de Ajuda?</h4>
              <p className="font-body text-xs text-muted-foreground mb-4 leading-relaxed">
                Se a sua situação se agravou ou precisa de apoio psicológico imediato, fale connosco.
              </p>
              <button className="w-full rounded bg-primary py-2 font-body text-xs font-bold text-primary-foreground hover:scale-[1.02] transition-transform">
                Chat Prioritário
              </button>
            </div>
          </div>

          {/* List of Reports */}
          <div className="lg:col-span-3 space-y-4">
            {mockDenuncias.map((denuncia) => (
              <div key={denuncia.id} className="group rounded-md border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`h-12 w-12 shrink-0 rounded-md ${denuncia.bg} ${denuncia.color} flex items-center justify-center`}>
                    <denuncia.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xl tracking-wide">{denuncia.type}</span>
                        <span className="font-body text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-background border border-border text-muted-foreground">
                          {denuncia.id}
                        </span>
                      </div>
                      <span className={`font-body text-xs font-bold uppercase tracking-widest ${denuncia.color}`}>
                        ● {denuncia.status}
                      </span>
                    </div>
                    
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {denuncia.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Plataforma: <span className="text-foreground">{denuncia.platform}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        Submetida: <span className="text-foreground">{denuncia.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 text-center">
              <p className="font-body text-xs text-muted-foreground">
                A carregar denúncias anteriores...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Denuncias;
