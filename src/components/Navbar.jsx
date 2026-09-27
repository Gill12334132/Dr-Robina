import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/product", "Product"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 animate-slide-down
        ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-card border-transparent"
            : "bg-cream/90 backdrop-blur-md border-gray-200/60"
        }`}
    >
      <div className="w-[min(1120px,92%)] mx-auto flex items-center justify-between h-[74px] md:h-16">

        {/* ==================== BRAND / LOGO ==================== */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 group"
        >
          {/* Leaf Emoji — NO CIRCLE */}
          <span
            className="text-[28px] md:text-[32px] leading-none
                       transition-all duration-300
                       group-hover:rotate-[-12deg] group-hover:scale-110"
          >
            🌿
          </span>

          {/* Brand Text */}
          <span className="flex flex-col leading-tight">
            <span className="text-[17px] md:text-[18px] font-extrabold text-green-dark
                             transition-colors duration-300 group-hover:text-gold-dark">
              Weight Loss
            </span>
            <span className="text-[12px] md:text-[13px] font-semibold text-gold-dark
                             tracking-wide">
              by  Dr Rubina
            </span>
          </span>
        </Link>

        {/* ==================== DESKTOP NAV ==================== */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors duration-300
                 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:bg-gold
                 after:transition-all after:duration-300 after:-translate-x-1/2
                 ${
                   isActive
                     ? "text-green after:w-2/3"
                     : "text-muted hover:text-green after:w-0 hover:after:w-2/3"
                 }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="bg-green text-white text-sm font-semibold px-5 py-2.5 rounded-full
                       shadow-sm transition-all duration-300
                       hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-glow"
          >
            Order / Inquiry
          </Link>
        </nav>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`md:hidden grid place-items-center w-10 h-10 rounded-lg border
                     transition-all duration-300
            ${
              open
                ? "bg-green text-white border-green"
                : "bg-transparent text-green border-green/20 hover:bg-sage"
            }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ==================== MOBILE NAV ==================== */}
      <nav
        className={`md:hidden flex flex-col gap-1 px-6 bg-white shadow-card
                    overflow-hidden transition-all duration-300 ease-out
          ${
            open
              ? "max-h-[600px] opacity-100 pb-6 pt-2"
              : "max-h-0 opacity-0 pb-0 pt-0"
          }`}
      >
        {links.map(([to, label], i) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            style={{ animationDelay: `${i * 80}ms` }}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg font-medium transition-all duration-300 animate-fade-up
               ${
                 isActive
                   ? "bg-sage text-green font-bold border-l-4 border-gold"
                   : "text-charcoal hover:bg-sage hover:text-green hover:translate-x-1"
               }`
            }
          >
            {label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          style={{ animationDelay: `${links.length * 80}ms` }}
          className="mt-2 bg-green text-white text-center font-semibold px-5 py-3 rounded-full
                     transition-all duration-300 hover:bg-green-dark animate-fade-up"
        >
          Order / Inquiry
        </Link>
      </nav>

      {/* ==================== MOBILE OVERLAY ==================== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 top-[74px] bg-green-dark/20 backdrop-blur-sm
                     animate-fade-in -z-10"
        />
      )}
    </header>
  );
}