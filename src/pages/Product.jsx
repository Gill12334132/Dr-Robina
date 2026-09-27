import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Clock, ShieldCheck, Truck } from "lucide-react";

/* ==================== IMAGE IMPORTS ==================== */
import product500 from "../imgs/K.jpeg";
import product300 from "../imgs/L.jpeg";

/* ==================== INGREDIENTS ==================== */
const ingredients = [
  { name: "Psyllium Husk", icon: "🌾" },
  { name: "Green Tea Extract", icon: "🍵" },
  { name: "Fennel Seeds", icon: "🌱" },
  { name: "Carom Seeds", icon: "🌿" },
  { name: "Fenugreek", icon: "🌰" },
  { name: "Black Seed", icon: "🖤" },
  { name: "Ginger", icon: "🧄" },
  { name: "Cinnamon", icon: "🌳" },
  { name: "Lemon Peel", icon: "🍋" },
  { name: "Mint Leaves", icon: "🌱" },
];

/* ==================== STEPS ==================== */
const steps = [
  { n: "01", title: "Mix", desc: "Take one tablespoon of the blend." },
  { n: "02", title: "Warm Water", desc: "Mix with a glass of warm water." },
  { n: "03", title: "Drink", desc: "Consume once daily, preferably in the morning." },
  { n: "04", title: "Healthy Lifestyle", desc: "Pair with balanced diet and exercise." },
];

/* ==================== PRODUCTS ==================== */
const products = [
  {
    id: 1,
    weight: "500g",
    oldPrice: "3,399",
    price: "2,250",
    badge: "Best Seller",
    img: product500,
  },
  {
    id: 2,
    weight: "300g",
    oldPrice: "2,750",
    price: "1,850",
    badge: "Value Pack",
    img: product300,
  },
];

export default function Product() {
  return (
    <div className="page">

      {/* ==================== PAGE HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-dark to-green
                          text-white py-16 md:py-20">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full
                        bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full
                        bg-green-light/20 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative animate-fade-up">
          <span className="inline-flex items-center gap-2 uppercase tracking-[2px]
                           text-[11px] font-bold text-gold">
            <Leaf size={14} />
            Premium Herbal Blend
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl
                         leading-[1.1] my-4 max-w-3xl">
            Weight Loss Herbal Blend
          </h1>
          <p className="text-sage/90 max-w-xl text-base md:text-lg">
            Available in 500g &amp; 300g packs • In Stock
          </p>
        </div>
      </section>

      {/* ==================== PRODUCTS GRID ==================== */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >

                {/* Product Image Area */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.img}
                    alt={`Weight Loss Herbal Blend - ${product.weight}`}
                    className="w-full h-full object-cover
                               transition-transform duration-500
                               group-hover:scale-105"
                  />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-gold text-charcoal
                                   text-[11px] font-extrabold tracking-wider
                                   px-3 py-1.5 rounded-full">
                    {product.badge}
                  </span>

                  {/* Weight */}
                  <span className="absolute top-4 right-4 bg-green text-white
                                   text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.weight}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6 md:p-7">
                  <h3 className="font-display font-bold text-xl md:text-2xl
                                 text-green-dark mb-1">
                    Weight Loss Herbal Blend
                  </h3>
                  <p className="text-muted text-sm mb-5">
                    100% Natural • {product.weight} Pack
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-5">
                    <del className="text-gray-400 text-sm">
                      Rs. {product.oldPrice}
                    </del>
                    <strong className="text-2xl md:text-3xl text-green font-extrabold">
                      Rs. {product.price}
                    </strong>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/923194832686?text=Hi, I want to order Weight Loss by Rubina (${product.weight}) - Rs. ${product.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2
                                 bg-green text-white font-semibold
                                 px-5 py-3 rounded-full
                                 transition-all duration-300
                                 hover:bg-green-dark hover:-translate-y-0.5
                                 hover:shadow-glow"
                    >
                      Order on WhatsApp
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2
                                 border border-green/25 text-green font-semibold
                                 px-5 py-3 rounded-full
                                 transition-all duration-300
                                 hover:bg-green hover:text-white"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            {[
              { icon: Truck, text: "Free Delivery" },
              { icon: ShieldCheck, text: "100% Herbal" },
              { icon: Clock, text: "Fast Support" },
              { icon: Leaf, text: "Natural Blend" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white rounded-2xl p-4
                           shadow-soft animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid place-items-center w-9 h-9 rounded-lg
                                 bg-sage text-green shrink-0">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-bold text-charcoal">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INGREDIENTS ==================== */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="w-[min(1120px,92%)] mx-auto">

          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Key Ingredients
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Selected herbal ingredients
            </h2>
            <p className="text-muted">
              The blend includes the following carefully selected herbs.
            </p>
          </div>

          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ingredients.map(({ name, icon }, i) => (
              <div
                key={name}
                className="group bg-white rounded-2xl p-5 text-center
                           shadow-soft transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="block text-3xl md:text-4xl mb-2
                                 transition-transform duration-300
                                 group-hover:scale-125">
                  {icon}
                </span>
                <b className="text-[13px] font-bold text-charcoal leading-tight">
                  {name}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW TO USE ==================== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto">

          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              How to Use
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Simple steps to integrate it into your routine
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="group relative bg-white rounded-2xl p-6
                           shadow-soft transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Step Number */}
                <span className="text-xs font-extrabold text-gold tracking-widest">
                  {step.n}
                </span>

                {/* Icon Circle (Decorative) */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full
                                bg-sage/70 grid place-items-center
                                transition-all duration-300
                                group-hover:bg-green group-hover:text-white
                                text-green">
                  <span className="w-2.5 h-2.5 rounded-full bg-current" />
                </div>

                <h3 className="font-display font-bold text-xl text-green-dark
                               mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed m-0">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-10 bg-[#f5f0e5] border-l-4 border-gold
                          rounded-r-2xl p-5 md:p-6 animate-fade-up">
            <p className="text-[#5f594c] text-sm leading-relaxed m-0">
              <b className="text-charcoal">Important:</b> Please follow the
              directions on the product label. This product is not intended to
              diagnose, treat, cure, or prevent any disease. Consult a
              qualified healthcare professional before use, especially if you
              are pregnant, nursing, or taking medication. Results may vary
              based on individual lifestyle and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden bg-green-dark text-white
                          py-16 md:py-20">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full
                        bg-gold/10 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative
                        flex flex-col md:flex-row items-center
                        justify-between gap-8">
          <div className="animate-fade-up text-center md:text-left">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Ready to Order?
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight mt-3">
              Start your wellness journey today.
            </h2>
          </div>

          <a
            href="https://wa.me/923194832686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0
                       bg-gold text-charcoal font-bold
                       px-7 py-3.5 rounded-full
                       transition-all duration-300
                       hover:bg-gold-dark hover:-translate-y-0.5
                       hover:shadow-glow animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Order on WhatsApp <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}