import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Nutrition Consultancy",
  "Herbal Products",
  "Diet Planning",
  "Wellness Support",
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-sage/80 pt-16 pb-5 mt-auto">
      <div className="w-[min(1120px,92%)] mx-auto">

        {/* ==================== MAIN GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ---------- Brand ---------- */}
          <div className="animate-fade-up">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              {/* 🌿 Emoji Logo — NO CIRCLE (same as Navbar) */}
              <span
                className="text-[32px] leading-none
                           transition-all duration-300
                           group-hover:rotate-[-12deg] group-hover:scale-110"
              >
                🌿
              </span>

              {/* Brand Text */}
              <span className="flex flex-col leading-tight">
                <span className="text-[18px] font-extrabold text-white
                                 transition-colors duration-300 group-hover:text-gold">
                  Weight Loss
                </span>
                <span className="text-[13px] font-semibold text-gold tracking-wide">
                  by Dr Rubina
                </span>
              </span>
            </Link>

            <p className="text-sage/70 text-sm leading-relaxed max-w-xs">
              Natural herbal wellness and healthy lifestyle support with
              Dr. Rubina.
            </p>
          </div>

          {/* ---------- Quick Links ---------- */}
          <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
            <h4 className="text-white font-bold text-base mb-4 relative
                           after:absolute after:left-0 after:-bottom-1.5
                           after:w-10 after:h-0.5 after:bg-gold after:rounded-full">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 mt-5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sage/70 text-sm inline-block
                               transition-all duration-300
                               hover:text-gold hover:translate-x-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Services ---------- */}
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <h4 className="text-white font-bold text-base mb-4 relative
                           after:absolute after:left-0 after:-bottom-1.5
                           after:w-10 after:h-0.5 after:bg-gold after:rounded-full">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 mt-5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sage/70 text-sm transition-colors duration-300 hover:text-gold cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div className="animate-fade-up" style={{ animationDelay: "240ms" }}>
            <h4 className="text-white font-bold text-base mb-4 relative
                           after:absolute after:left-0 after:-bottom-1.5
                           after:w-10 after:h-0.5 after:bg-gold after:rounded-full">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 mt-5">

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/923194832686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sage/70 text-sm
                             transition-all duration-300
                             hover:text-gold hover:translate-x-1"
                >
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/5
                                   text-gold shrink-0">
                    <Phone size={14} />
                  </span>
                  WhatsApp: 0319-4832686
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:drrubina466@gmail.com"
                  className="flex items-center gap-2.5 text-sage/70 text-sm
                             transition-all duration-300
                             hover:text-gold hover:translate-x-1 break-all"
                >
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/5
                                   text-gold shrink-0">
                    <Mail size={14} />
                  </span>
                  drrubina466@gmail.com
                </a>
              </li>

              {/* Location */}
              <li>
                <span className="flex items-center gap-2.5 text-sage/70 text-sm">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/5
                                   text-gold shrink-0">
                    <MapPin size={14} />
                  </span>
                  Multan, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ==================== BOTTOM BAR ==================== */}
        <div className="border-t border-white/10 mt-12 pt-6
                        flex flex-col md:flex-row items-center justify-between
                        gap-4 text-sage/50 text-xs">
          <span>© 2026 Weight Loss by Dr Rubina. All rights reserved.</span>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-300 hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="transition-colors duration-300 hover:text-gold"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}