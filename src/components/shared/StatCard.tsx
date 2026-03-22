import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  children?: ReactNode;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 shadow-psp transition-transform hover:scale-[1.02]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-pale">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="font-display text-3xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export default StatCard;
