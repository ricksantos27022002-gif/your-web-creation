import { Instagram, Music, Youtube, MessageCircle, Twitter, Facebook, Globe, Sparkles } from "lucide-react";

const links = [
  { id: 1, title: "Instagram", url: "https://instagram.com", icon: Instagram },
  { id: 2, title: "TikTok", url: "https://tiktok.com", icon: Music },
  { id: 3, title: "YouTube", url: "https://youtube.com", icon: Youtube },
  { id: 4, title: "WhatsApp", url: "https://wa.me/", icon: MessageCircle },
  { id: 5, title: "Twitter / X", url: "https://x.com", icon: Twitter },
  { id: 6, title: "Facebook", url: "https://facebook.com", icon: Facebook },
  { id: 7, title: "Site", url: "https://seusite.com", icon: Globe },
];

const GoldenSparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full pointer-events-none animate-pulse"
    style={{
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      background: `radial-gradient(circle, hsl(43 96% 56%), hsl(43 96% 30%))`,
      boxShadow: "0 0 6px 2px hsl(43 96% 56% / 0.4)",
      ...style,
    }}
  />
);

const sparkles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  style: {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${2 + Math.random() * 3}s`,
  },
}));

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center py-12 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 8%), hsl(0 0% 4%))" }}
    >
      {/* Golden sparkles */}
      {sparkles.map((s) => (
        <GoldenSparkle key={s.id} style={s.style} />
      ))}

      {/* Profile area */}
      <div className="relative z-10 flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-4"
          style={{ borderColor: "hsl(43 96% 56%)", background: "hsl(0 0% 10%)" }}
        >
          <Sparkles className="w-10 h-10" style={{ color: "hsl(43 96% 56%)" }} />
        </div>
        <h1 className="text-2xl font-bold tracking-wide" style={{ color: "hsl(43 96% 56%)" }}>
          Seu Nome
        </h1>
        <p className="text-sm mt-1" style={{ color: "hsl(43 96% 56% / 0.6)" }}>
          @seuusuario
        </p>
      </div>

      {/* Links */}
      <div className="relative z-10 flex flex-col gap-4 w-full max-w-md">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "hsl(0 0% 10% / 0.8)",
                border: "1px solid hsl(43 96% 56% / 0.2)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(43 96% 56% / 0.6)";
                e.currentTarget.style.boxShadow = "0 0 20px hsl(43 96% 56% / 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(43 96% 56% / 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Numbered image placeholder */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(43 96% 56% / 0.15), hsl(43 96% 30% / 0.1))",
                  border: "1px solid hsl(43 96% 56% / 0.3)",
                  color: "hsl(43 96% 56%)",
                }}
              >
                {link.id}
              </div>

              <div className="flex-1">
                <span className="text-base font-semibold" style={{ color: "hsl(0 0% 95%)" }}>
                  {link.title}
                </span>
              </div>

              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "hsl(43 96% 56% / 0.7)" }}
              />
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <p className="relative z-10 mt-12 text-xs" style={{ color: "hsl(0 0% 40%)" }}>
        ✨ Feito com amor
      </p>
    </div>
  );
};

export default Index;
