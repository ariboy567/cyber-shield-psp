import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Loader2, User } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (authError) {
          if (authError.status === 429) {
            throw new Error("Muitas tentativas. Por favor, aguarda uns minutos antes de tentar novamente.");
          }
          throw authError;
        }

        if (authData.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .update({ 
              full_name: fullName,
              role: 'citizen'
            })
            .eq('id', authData.user.id);

          if (profileError) {
            toast.error(`Conta criada, mas erro ao atualizar perfil: ${profileError.message}`);
          } else {
            toast.success("Conta criada com sucesso!");
          }
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        toast.success("Bem-vindo de volta!");
      }

      setIsOpen(false);
      navigate("/denuncias");
    } catch (error: any) {
      toast.error(error.message || "Ocorreu um erro na autenticação.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/denuncias'
        }
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "Erro ao conectar com o Google");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-card border-border p-8">
        <DialogHeader className="space-y-3 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="h-6 w-6" />
          </div>
          <DialogTitle className="font-display text-3xl tracking-wide uppercase">
            {isSignUp ? "Criar Conta" : "Entrar no Escudo"}
          </DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            {isSignUp 
              ? "Regista-te para começares a submeter as tuas denúncias de forma segura."
              : "Acede ao teu painel seguro para acompanhar as tuas denúncias."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleAuth} className="space-y-6 mt-4">
          <div className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Nome Completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="fullName" 
                    placeholder="O teu nome" 
                    className="bg-background border-border pl-10 focus:ring-primary"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email"
                  placeholder="exemplo@email.com" 
                  className="bg-background border-border pl-10 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pass" className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Palavra-passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="pass" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-background border-border pl-10 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground font-body font-bold hover:scale-[1.02] transition-transform"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isSignUp ? "A criar conta..." : "A entrar..."}
              </>
            ) : (
              isSignUp ? "Criar Conta" : "Aceder ao Painel"
            )}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Ou continuar com</span>
            </div>
          </div>

          <Button 
            type="button" 
            variant="outline" 
            onClick={handleGoogleLogin}
            className="w-full border-border bg-background font-body text-sm hover:bg-muted"
          >
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Google
          </Button>

          <p className="text-center font-body text-xs text-muted-foreground">
            {isSignUp ? (
              <>
                Já tens conta?{" "}
                <span 
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Entrar aqui
                </span>
              </>
            ) : (
              <>
                Ainda não tens conta?{" "}
                <span 
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Regista-te agora
                </span>
              </>
            )}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
