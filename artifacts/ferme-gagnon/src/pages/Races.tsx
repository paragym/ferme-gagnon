import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const breeds = [
  {
    name: "Labrador Retriever",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
    flavorFR: "Saveur douce et délicate, idéale pour les rôtis dominicaux",
    flavorEN: "Mild and delicate flavour, ideal for Sunday roasts",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Berger Allemand",
    img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&q=80",
    flavorFR: "Viande maigre et musclée, parfaite en tartare ou charcuterie",
    flavorEN: "Lean and muscular meat, perfect for tartare or charcuterie",
    yieldFR: "Bon",
    yieldEN: "Good",
    availableFR: true,
  },
  {
    name: "Husky Sibérien",
    img: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=500&q=80",
    flavorFR: "Goût prononcé et fumé, idéal pour les ragoûts d'hiver québécois",
    flavorEN: "Bold, smoky flavour, ideal for Quebec winter stews",
    yieldFR: "Moyen",
    yieldEN: "Medium",
    availableFR: true,
  },
  {
    name: "Golden Retriever",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&q=80",
    flavorFR: "Tendresse incomparable, fondant au four avec des herbes de Provence",
    flavorEN: "Incomparably tender, melts in the oven with herbes de Provence",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Border Collie",
    img: "https://images.unsplash.com/photo-1503256207526-0d5523f31c93?w=500&q=80",
    flavorFR: "Viande ferme et athlétique, pour les amateurs de charcuterie artisanale",
    flavorEN: "Firm and athletic meat, for artisanal charcuterie lovers",
    yieldFR: "Moyen",
    yieldEN: "Medium",
    availableFR: false,
  },
  {
    name: "Malamute de l'Alaska",
    img: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=500&q=80",
    flavorFR: "Généreux et rustique, idéal pour les bouillons et fondues hivernales",
    flavorEN: "Generous and rustic, ideal for winter broths and fondues",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Akita Inu",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&q=80",
    flavorFR: "Viande noble au goût subtil umami, inspirée des traditions asiatiques",
    flavorEN: "Noble meat with subtle umami, inspired by Asian traditions",
    yieldFR: "Limité",
    yieldEN: "Limited",
    availableFR: false,
  },
  {
    name: "Saint-Bernard",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80",
    flavorFR: "Quantité généreuse, saveur douce et chaleureuse pour toute la famille",
    flavorEN: "Generous quantity, mild and warm flavour for the whole family",
    yieldFR: "Exceptionnel",
    yieldEN: "Exceptional",
    availableFR: true,
  },
];

export default function Races() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Header */}
      <section className="bg-[#003087] text-white py-20 px-6 text-center" data-testid="races-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-4"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="races-title"
        >
          {t("races.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-200 text-lg max-w-2xl mx-auto"
        >
          {t("races.subtitle")}
        </motion.p>
      </section>

      {/* Breeds grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {breeds.map((breed) => (
              <motion.div
                key={breed.name}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:border-[#003087] hover:shadow-md transition-all group"
                data-testid={`breed-card-${breed.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={breed.img}
                    alt={breed.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-base font-black text-[#003087] leading-tight"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {breed.name.toUpperCase()}
                    </h3>
                    <span
                      className={`text-xs font-bold px-2 py-1 flex-shrink-0 ml-2 ${
                        breed.availableFR
                          ? "bg-[#003087] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {breed.availableFR ? t("races.available") : t("races.order")}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t("races.flavor")}</span>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed italic">
                      {lang === "fr" ? breed.flavorFR : breed.flavorEN}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t("races.yield")}</span>
                    <p className="text-gray-600 text-xs mt-1 font-semibold">
                      {lang === "fr" ? breed.yieldFR : breed.yieldEN}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 text-center bg-[#003087] text-white py-12 px-6"
          >
            <p className="text-lg font-semibold mb-4">{t("races.cta")}</p>
            <a href="tel:4508352443">
              <button
                data-testid="races-phone-btn"
                className="inline-flex items-center gap-3 bg-[#C8102E] text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <Phone size={16} /> (450) 835-2443
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
