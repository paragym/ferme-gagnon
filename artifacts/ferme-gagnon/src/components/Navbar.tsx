import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", key: "nav.home" },
    { href: "/races", key: "nav.races" },
    { href: "/recettes", key: "nav.recettes" },
    { href: "/blogue", key: "nav.blogue" },
    { href: "/faq", key: "nav.faq" },
    { href: "/ressources", key: "nav.ressources" },
    { href: "/boutique", key: "nav.boutique" },
    { href: "/la-ferme", key: "nav.laFerme" },
    { href: "/contact", key: "nav.contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#003087] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="font-medium tracking-wider uppercase">{t("hero.badge")}</span>
        <div className="flex items-center gap-3">
          <a href="tel:4508352443" className="hover:text-[#C8102E] transition-colors font-medium">{t("contact.phone")}</a>
          <button
            data-testid="lang-toggle-fr"
            onClick={() => setLang("fr")}
            className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-all ${lang === "fr" ? "bg-white text-[#003087]" : "hover:bg-white/20"}`}
          >
            FR
          </button>
          <button
            data-testid="lang-toggle-en"
            onClick={() => setLang("en")}
            className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-all ${lang === "en" ? "bg-white text-[#003087]" : "hover:bg-white/20"}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Logo center */}
      <div className="flex justify-center items-center py-4 border-b border-border">
        <Link href="/" data-testid="logo-link">
          <Logo size={110} />
        </Link>
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex justify-center gap-0 bg-white">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-testid={`nav-link-${link.key}`}
            className={`px-4 py-3 text-xs font-semibold tracking-widest uppercase transition-colors border-b-2 ${
              isActive(link.href)
                ? "border-[#C8102E] text-[#C8102E]"
                : "border-transparent text-[#003087] hover:text-[#C8102E] hover:border-[#C8102E]/30"
            }`}
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <span className="text-sm font-bold text-[#003087] uppercase tracking-wider">Menu</span>
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-[#003087]"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-border flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              data-testid={`mobile-nav-${link.key}`}
              className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase border-l-4 ${
                isActive(link.href)
                  ? "border-[#C8102E] text-[#C8102E] bg-red-50"
                  : "border-transparent text-[#003087] hover:border-[#C8102E] hover:bg-gray-50"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
