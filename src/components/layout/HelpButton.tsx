import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/351999999999?text=Ol%C3%A1+PSP+preciso+de+ajuda";

const HelpButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-success px-5 py-3.5 font-display font-semibold text-sm text-success-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-gentle"
      aria-label="Preciso de Ajuda — Falar com a PSP via WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Preciso de Ajuda</span>
    </a>
  );
};

export default HelpButton;
