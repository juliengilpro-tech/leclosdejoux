import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Le Clos de Joux</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Une demeure de caractère en Bourgogne, où le charme de l'ancien se mêle au confort moderne.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#maison", label: "La Maison" },
                { href: "#galerie", label: "Galerie" },
                { href: "#environs", label: "Les Environs" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80"><Mail size={16} /> jouxlavillejhg@gmail.com</li>
              <li className="flex items-center gap-2 text-primary-foreground/80"><Phone size={16} /> 06 21 88 32 55</li>
              <li className="flex items-center gap-2 text-primary-foreground/80"><MapPin size={16} /> Joux-la-Ville, Bourgogne</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-xs">
          © {new Date().getFullYear()} Le Clos de Joux — Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
