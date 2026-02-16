import logoFortti from "@/assets/logo-fortti.png";
import link1 from "@/assets/link-1.png";
import link2 from "@/assets/link-2.png";
import link3 from "@/assets/link-3.png";
import link4 from "@/assets/link-4.png";
import link5 from "@/assets/link-5.png";
import link6 from "@/assets/link-6.png";
import link7 from "@/assets/link-7.png";

const links = [
  { id: 1, image: link1, url: "https://wa.me/", alt: "Fique 100% protegido" },
  { id: 2, image: link2, url: "https://wa.me/", alt: "Proteja seu maquinário" },
  { id: 3, image: link3, url: "https://wa.me/", alt: "Seguro de vida" },
  { id: 4, image: link4, url: "https://wa.me/", alt: "Proteja a conquista da família" },
  { id: 5, image: link5, url: "https://wa.me/", alt: "Consórcio e Financiamento" },
  { id: 6, image: link6, url: "https://wa.me/", alt: "Seguro safra" },
  { id: 7, image: link7, url: "https://wa.me/", alt: "Outros serviços" },
];

const Index = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center py-10 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 8%), hsl(0 0% 4%))" }}
    >
      {/* Profile */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        <img
          src={logoFortti}
          alt="Fortti Seguros"
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <h1 className="text-xl font-bold tracking-wide" style={{ color: "hsl(43 96% 56%)" }}>
          Seu Nome
        </h1>
        <p className="text-sm mt-1" style={{ color: "hsl(43 96% 56% / 0.6)" }}>
          @seuusuario
        </p>
      </div>

      {/* Image Links */}
      <div className="relative z-10 flex flex-col gap-4 w-full max-w-lg">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            
          >
            <img
              src={link.image}
              alt={link.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      <p className="relative z-10 mt-10 text-sm font-semibold" style={{ color: "hsl(43 96% 56% / 0.7)" }}>
        Fortti Seguros
      </p>
    </div>
  );
};

export default Index;
