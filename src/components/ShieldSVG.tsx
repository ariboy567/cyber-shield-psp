const ShieldSVG = () => (
  <svg
    viewBox="0 0 400 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Outer shield form — architectural lines */}
    <path
      d="M200 20 L360 100 L340 340 L200 460 L60 340 L40 100 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      opacity="0.3"
    />
    <path
      d="M200 50 L330 118 L314 320 L200 420 L86 320 L70 118 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      opacity="0.2"
    />

    {/* Inner structural lines */}
    <line x1="200" y1="20" x2="200" y2="460" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.15" />
    <line x1="40" y1="100" x2="360" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.12" />
    <line x1="60" y1="340" x2="340" y2="340" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.12" />

    {/* Diagonal cross-braces */}
    <line x1="200" y1="20" x2="60" y2="340" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.1" />
    <line x1="200" y1="20" x2="340" y2="340" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.1" />

    {/* Core shield — the bold one */}
    <path
      d="M200 80 L310 135 L298 310 L200 390 L102 310 L90 135 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="2.5"
      opacity="0.7"
    />

    {/* Inner chevron */}
    <path
      d="M200 160 L260 190 L252 280 L200 320 L148 280 L140 190 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      opacity="0.5"
    />

    {/* Central vertical accent */}
    <line x1="200" y1="140" x2="200" y2="350" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4" />

    {/* Horizontal bars inside */}
    <line x1="140" y1="220" x2="260" y2="220" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" />
    <line x1="155" y1="260" x2="245" y2="260" stroke="hsl(var(--primary))" strokeWidth="1.2" opacity="0.25" />

    {/* Corner nodes */}
    <circle cx="200" cy="80" r="3" fill="hsl(var(--primary))" opacity="0.6" />
    <circle cx="310" cy="135" r="2.5" fill="hsl(var(--primary))" opacity="0.4" />
    <circle cx="90" cy="135" r="2.5" fill="hsl(var(--primary))" opacity="0.4" />
    <circle cx="200" cy="390" r="3" fill="hsl(var(--primary))" opacity="0.6" />

    {/* Subtle outer echo lines */}
    <path
      d="M200 5 L375 90 L353 355 L200 475 L47 355 L25 90 Z"
      stroke="hsl(var(--primary))"
      strokeWidth="0.5"
      opacity="0.08"
      strokeDasharray="8 12"
    />
  </svg>
);

export default ShieldSVG;
