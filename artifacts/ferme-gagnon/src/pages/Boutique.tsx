import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const products = [
  {
    id: "quart-labrador",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&q=80",
    nameFR: "Quart de Labrador Bio",
    nameEN: "Quarter Organic Labrador",
    price: "28/kg",
    descFR: "Viande fraîche de Labrador Retriever biologique certifié Québec Vrai. Coupe au quart incluant l'épaule et la cuisse. Frais, jamais congelé.",
    descEN: "Fresh Québec Vrai certified organic Labrador Retriever meat. Quarter cut including shoulder and thigh. Fresh, never frozen.",
  },
  {
    id: "demi-husky",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80",
    nameFR: "Demi-Husky Sibérien",
    nameEN: "Half Siberian Husky",
    price: "95/demi",
    descFR: "La moitié complète d'un Husky Sibérien, idéale pour les familles. Goût prononcé, parfait pour les ragoûts et mijotés d'hiver québécois.",
    descEN: "The complete half of a Siberian Husky, ideal for families. Bold flavour, perfect for Quebec winter stews and slow-cooked dishes.",
  },
  {
    id: "entier-berger",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
    nameFR: "Entier — Chiot Berger Allemand",
    nameEN: "Whole — German Shepherd Puppy",
    price: "210/entier",
    descFR: "Pour les grandes tablées et les fêtes. Un chiot Berger Allemand complet, idéal pour le rôti de Noël des Gagnon. Livraison sous 48h.",
    descEN: "For large gatherings and celebrations. A complete German Shepherd puppy, ideal for the Gagnon Christmas roast. Delivery within 48h.",
  },
  {
    id: "os-bouillon",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80",
    nameFR: "Os à bouillon — Sélection",
    nameEN: "Bone Broth Selection",
    price: "12/kg",
    descFR: "Os de Labrador, Golden et Saint-Bernard pour des bouillons et fondues riches et savoureux. En quantité limitée selon la saison.",
    descEN: "Labrador, Golden and Saint Bernard bones for rich and flavourful broths and fondues. Limited quantity by season.",
  },
  {
    id: "foie-bouledogue",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
    nameFR: "Foie de Bouledogue",
    nameEN: "Bulldog Liver",
    price: "45/kg",
    descFR: "Spécialité de la maison et tradition des fêtes Gagnon depuis 1990. Foie de Bouledogue Français frais, idéal en terrine ou poêlé.",
    descEN: "House specialty and Gagnon holiday tradition since 1990. Fresh French Bulldog liver, ideal as terrine or pan-fried.",
  },
  {
    id: "saucisses-berger",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80",
    nameFR: "Saucisses artisanales de Berger",
    nameEN: "Artisan Shepherd Sausages",
    price: "18/500g",
    descFR: "Saucisses artisanales préparées à la ferme avec du Berger Allemand, assaisonnées aux herbes québécoises. Parfaites sur le BBQ l'été.",
    descEN: "Artisan sausages prepared on the farm with German Shepherd, seasoned with Quebec herbs. Perfect on the BBQ in summer.",
  },
];

export default function Boutique() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#003087] text-white py-20 px-6 text-center" data-testid="boutique-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-4"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="boutique-title"
        >
          {t("boutique.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-200 text-lg max-w-2xl mx-auto"
        >
          {t("boutique.subtitle")}
        </motion.p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:shadow-lg hover:border-[#003087] transition-all group"
                data-testid={`product-card-${p.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={lang === "fr" ? p.nameFR : p.nameEN}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#C8102E] text-white px-3 py-1">
                    <span className="text-sm font-black" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {t("boutique.cad")} ${p.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2
                    className="text-lg font-black text-[#003087] mb-3 leading-tight uppercase"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lang === "fr" ? p.nameFR : p.nameEN}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {lang === "fr" ? p.descFR : p.descEN}
                  </p>
                  <Link href="/contact">
                    <button
                      data-testid={`product-cta-${p.id}`}
                      className="w-full bg-[#003087] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#C8102E] transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      <Phone size={14} /> {t("boutique.contact")}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 bg-[#003087] text-white p-8 text-center"
          >
            <p className="text-sm text-blue-200">{t("boutique.note")}</p>
            <a href="tel:4508352443">
              <button
                data-testid="boutique-phone-btn"
                className="mt-4 inline-flex items-center gap-2 bg-[#C8102E] text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <Phone size={14} /> {t("contact.phone")}
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
