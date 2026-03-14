import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#maison", label: "La Maison" },
  { href: "#galerie", label: "Galerie" },
  { href: "#environs", label: "Les Environs" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a
          href="#accueil"
          onClick={(e) => handleClick(e, "#accueil")}
          className="font-serif text-2xl font-semibold text-primary tracking-wide"
        >
          Le Clos de Joux
        </a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary text-muted-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
