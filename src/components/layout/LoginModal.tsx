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
import { Lock, Mail, Loader2 } from "lucide-react";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular um login
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      navigate("/denuncias");
    }, 1500);
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
          <DialogTitle className="font-display text-3xl tracking-wide uppercase">Entrar no Escudo</DialogTitle>
          <DialogDescription className="font-body text-sm text-muted-foreground">
            Acede ao teu painel seguro para acompanhar as tuas denúncias.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email ou Utilizador
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  placeholder="exemplo@email.com" 
                  className="bg-background border-border pl-10 focus:ring-primary"
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
                A entrar...
              </>
            ) : (
              "Aceder ao Painel"
            )}
          </Button>

          <p className="text-center font-body text-xs text-muted-foreground">
            Ainda não tens conta? <span className="text-primary cursor-pointer hover:underline">Fala connosco via WhatsApp</span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
