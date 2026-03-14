import Layout from "@/components/Layout";
import { Star, Users, Bath, BedDouble, Home, Mail, Phone, MapPin, Calendar, Clock, Info, Castle, Wine, Mountain, Footprints, Waves, Church, ShoppingBag, Train, Flame, Wifi, Car, Tv, WashingMachine, Baby, UtensilsCrossed } from "lucide-react";
import houseFront from "@/assets/house-front.png";
import poolArea from "@/assets/pool-area.jpeg";
import terrace from "@/assets/terrace.jpeg";
import interior from "@/assets/interior.jpeg";
import poolNight from "@/assets/pool-night.png";
import bedroom1 from "@/assets/bedroom1.png";
import bedroom2 from "@/assets/bedroom2.png";
import bedroom3 from "@/assets/bedroom3.png";
import bedroom4 from "@/assets/bedroom4.png";
import courtyard from "@/assets/courtyard.png";
import courtyardWide from "@/assets/courtyard-wide.png";
import diningRoom from "@/assets/dining-room.png";
import livingRoom2 from "@/assets/living-room-2.png";
import fireplaceDetail from "@/assets/fireplace-detail.png";
import kitchenIsland from "@/assets/kitchen-island.png";
import laundry from "@/assets/laundry.png";
import bathroomAttic from "@/assets/bathroom-attic.png";
import bathroomGrey from "@/assets/bathroom-grey.png";
import bathroomModern from "@/assets/bathroom-modern.png";

const photos = [
  { src: houseFront, alt: "Façade de la maison" },
  { src: courtyardWide, alt: "Grande cour intérieure" },
  { src: courtyard, alt: "Cour et terrasse" },
  { src: terrace, alt: "Terrasse couverte" },
  { src: poolArea, alt: "Espace piscine de jour" },
  { src: poolNight, alt: "Piscine de nuit" },
  { src: interior, alt: "Salon intérieur" },
  { src: livingRoom2, alt: "Coin salon confortable" },
  { src: fireplaceDetail, alt: "Poêle à bois moderne" },
  { src: diningRoom, alt: "Salle à manger spacieuse" },
  { src: kitchenIsland, alt: "Cuisine moderne équipée" },
  { src: bedroom1, alt: "Chambre 1" },
  { src: bedroom2, alt: "Chambre 2" },
  { src: bedroom3, alt: "Chambre 3" },
  { src: bedroom4, alt: "Chambre 4 — Combles" },
  { src: bathroomModern, alt: "Salle de bain moderne" },
  { src: bathroomGrey, alt: "Salle de bain tons gris" },
  { src: bathroomAttic, alt: "Salle de bain sous combles" },
  { src: laundry, alt: "Espace buanderie" },
];

const amenities = [
  { icon: BedDouble, label: "4 chambres — 6 lits" },
  { icon: Bath, label: "3 salles de bain" },
  { icon: Flame, label: "Poêle à bois" },
  { icon: Wifi, label: "Wifi" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Waves, label: "Piscine 5×2 m" },
  { icon: Tv, label: "Télévision" },
  { icon: WashingMachine, label: "Lave-linge & sèche-linge" },
  { icon: Baby, label: "Lit bébé & chaises hautes" },
  { icon: UtensilsCrossed, label: "Cuisine équipée" },
];

const places = [
  { icon: Castle, name: "Noyers-sur-Serein", time: "15 min", desc: "L'un des Plus Beaux Villages de France, avec ses ruelles pavées, maisons à colombages et galeries d'art." },
  { icon: Church, name: "Vézelay", time: "25 min", desc: "Son abbaye majestueuse classée à l'UNESCO offre une vue imprenable sur la vallée du Morvan." },
  { icon: Wine, name: "Chablis", time: "20 min", desc: "Dégustez les célèbres vins blancs de Bourgogne dans l'un des nombreux domaines viticoles." },
  { icon: Mountain, name: "Montréal", time: "20 min", desc: "Un charmant village bourguignon, idéal pour une escapade à la découverte de ses maisons typiques." },
  { icon: Castle, name: "Château de Bazoches", time: "35 min", desc: "Ancienne demeure de Vauban perchée sur les hauteurs du Morvan, avec une vue imprenable sur Vézelay." },
  { icon: Waves, name: "La rivière du Serein", time: "À proximité", desc: "Une belle alternative pour une baignade en pleine nature." },
  { icon: Footprints, name: "Randonnées & balades", time: "Tout autour", desc: "De nombreux sentiers offrent des panoramas magnifiques sur la campagne environnante." },
  { icon: Church, name: "Auxerre", time: "30 min", desc: "Explorez le charme médiéval d'Auxerre, entre cathédrale majestueuse et bords de l'Yonne pittoresques." },
];

const village = [
  { icon: ShoppingBag, label: "Boulangerie — pain frais chaque matin" },
  { icon: ShoppingBag, label: "Bar restaurant — Autour d'un verre" },
  { icon: ShoppingBag, label: "Épicerie Proxy — courses d'appoint" },
  { icon: ShoppingBag, label: "Distributeur de pizza" },
];

const reviews = [
  { name: "Chloé", text: "La maison est vraiment très agréable avec une très grande pièce de vie, la cuisine super bien équipée. Décoration et équipement de qualité !" },
  { name: "Bruno", text: "Excellent séjour au sein de ce logement très bien étudié pour une grande famille. Tout est propre. Accueil parfait." },
  { name: "Alicia", text: "Le lieu est très agréable, la maison est rénovée avec goût et tous les équipements utiles sont présents. Les extérieurs sont très bien pensés." },
  { name: "Maria Jesus", text: "Tout était merveilleux ! Toutes les pièces et les lits très confortables. Parfait pour aller avec un groupe d'amis ou en famille !" },
];

const Index = () => {
  return (
    <Layout>
      {/* ===== ACCUEIL ===== */}
      <section id="accueil" className="relative h-[85vh] overflow-hidden">
        <img src={houseFront} alt="Le Clos de Joux — Façade" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground mb-4 animate-fade-in">Le Clos de Joux</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Maison de charme avec piscine en Bourgogne
          </p>
          <a
            href="#maison"
            onClick={(e) => { e.preventDefault(); document.querySelector("#maison")?.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm uppercase tracking-widest font-medium hover:bg-burgundy-light transition-colors animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Découvrir
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: "10 voyageurs" },
              { icon: BedDouble, label: "4 chambres" },
              { icon: Bath, label: "3 salles de bain" },
              { icon: Star, label: "Note 5/5" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Une parenthèse de charme en Bourgogne</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Bienvenue au Clos de Joux, une demeure de caractère de 230 m², où le charme de l'ancien
            se mêle au confort moderne. Située dans le paisible village de Joux-la-Ville, cette maison
            en pierres apparentes et poutres anciennes vous invite à un séjour authentique et ressourçant,
            entre vignobles, nature et patrimoine bourguignon.
          </p>
        </div>
      </section>

      {/* ===== LA MAISON ===== */}
      <section id="maison" className="scroll-mt-20 py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">La Maison</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 mb-12">
            <p>
              Le Clos de Joux s'étend sur trois étages, offrant tout le confort nécessaire pour un séjour en famille ou entre amis.
              Au rez-de-chaussée, un double salon séjour spacieux avec cuisine ouverte, accès terrasse, véranda et cour.
            </p>
            <p>
              À l'étage, 3 chambres spacieuses avec deux lits doubles 180×200 cm et un lit double de 160×200 cm.
              Le dernier étage, ouvert avec ses poutres apparentes et son charme authentique, comprend 1 lit double 180 cm
              et 2 lits simples, idéal pour les enfants.
            </p>
            <p>
              Le salon, avec son poêle à bois, est un véritable cocon pour des soirées au coin du feu.
              La cuisine entièrement équipée vous permettra de préparer de délicieux repas autour de la grande table en bois.
            </p>
          </div>

          {/* Amenities */}
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">Équipements</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={20} />
                </div>
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Extérieur */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-foreground mb-4">Un extérieur propice à la détente</h3>
            <p className="text-muted-foreground leading-relaxed">
              Profitez d'une piscine 5×2 m parfaite pour se rafraîchir en été, d'un jardin arboré et d'un solarium
              où profiter d'un café le matin ou d'un verre de vin au coucher du soleil. Une atmosphère apaisante, idéale pour se ressourcer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALERIE ===== */}
      <section id="galerie" className="scroll-mt-20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Galerie Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? "h-full min-h-[400px]" : "aspect-[4/3]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl text-foreground text-center mb-12">Ce que disent nos voyageurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-background rounded-lg p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">"{review.text}"</p>
                <p className="font-medium text-foreground text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LES ENVIRONS ===== */}
      <section id="environs" className="scroll-mt-20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">Les Environs</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Un point de départ idéal pour explorer les richesses de la Bourgogne
          </p>

          {/* Village */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="font-serif text-2xl text-foreground mb-4 text-center">Joux-la-Ville</h3>
            <p className="text-muted-foreground text-center mb-6">
              Un petit village typique de Bourgogne avec toutes les commodités à deux minutes à pied.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {village.map((item, i) => (
                <div key={i} className="bg-card rounded-lg p-4 flex items-center gap-3">
                  <item.icon className="text-primary shrink-0" size={18} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Places */}
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">À découvrir aux alentours</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {places.map((place) => (
              <div key={place.name} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <place.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground">{place.name}</h4>
                    <span className="text-xs text-muted-foreground">{place.time}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>

          {/* Access */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-foreground mb-6">Accès & transports</h3>
            <p className="text-muted-foreground mb-8">À 7 minutes de la sortie d'autoroute A6</p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-5">
                <Train className="text-primary mx-auto mb-2" size={24} />
                <p className="font-medium text-foreground text-sm">2h15 de Paris</p>
                <p className="text-xs text-muted-foreground">en voiture</p>
              </div>
              <div className="bg-card rounded-lg p-5">
                <Train className="text-primary mx-auto mb-2" size={24} />
                <p className="font-medium text-foreground text-sm">2h30 de Lyon</p>
                <p className="text-xs text-muted-foreground">en voiture</p>
              </div>
              <div className="bg-card rounded-lg p-5">
                <MapPin className="text-primary mx-auto mb-2" size={24} />
                <p className="font-medium text-foreground text-sm">Gares proches</p>
                <p className="text-xs text-muted-foreground">Avallon, Auxerre, Tonnerre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="scroll-mt-20 py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Tarifs & Contact</h2>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-background rounded-lg p-6 text-center">
              <Users className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-medium text-foreground mb-1">Capacité</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 10 voyageurs</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <Calendar className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-medium text-foreground mb-1">Séjour minimum</h3>
              <p className="text-sm text-muted-foreground">Nous consulter</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <Clock className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-medium text-foreground mb-1">Arrivée / Départ</h3>
              <p className="text-sm text-muted-foreground">16h00 / 11h00</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <Info className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-medium text-foreground mb-1">Tarifs</h3>
              <p className="text-sm text-muted-foreground">Sur demande, selon la saison</p>
            </div>
          </div>

          {/* Contact details */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-foreground mb-4">Contactez-nous</h3>
            <p className="text-muted-foreground mb-8">
              Pour toute demande de réservation ou d'information, n'hésitez pas à nous contacter directement.
            </p>
            <div className="space-y-4">
              <a href="mailto:jouxlavillejhg@gmail.com" className="flex items-center justify-center gap-3 bg-background rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <Mail className="text-primary" size={22} />
                <span className="text-foreground font-medium">jouxlavillejhg@gmail.com</span>
              </a>
              <a href="tel:+33621883255" className="flex items-center justify-center gap-3 bg-background rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <Phone className="text-primary" size={22} />
                <span className="text-foreground font-medium">06 21 88 32 55</span>
              </a>
              <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-5 shadow-sm">
                <MapPin className="text-primary" size={22} />
                <span className="text-foreground font-medium">Joux-la-Ville, Bourgogne-Franche-Comté</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Localisation Le Clos de Joux"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.5!2d3.7266!3d47.5533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f17e5c8a9b1a3b%3A0x4e6a3c9b0f2d1e5a!2s44%20Grande%20Rue%2C%2089440%20Joux-la-Ville!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
