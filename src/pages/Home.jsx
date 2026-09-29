import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Leaf,
  HeartPulse,
  Truck,
  Utensils,
  Moon,
  Droplets,
  Apple,
  Award,
  ShieldCheck,
  UserCheck,
  Star,
  Users,
  Package,
  Quote,
  Plus,
} from "lucide-react";
import { useState } from "react";

// ==================== IMAGE IMPORTS ====================
import productImg from "../imgs/0.jpeg";
import doctorImg from "../imgs/doctor.png";

// ==================== WHATSAPP ====================
const WHATSAPP_NUMBER = "923194832686"; // 03194832686
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ==================== DATA ==================== */
const stats = [
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: Package, value: "10,000+", label: "Orders Delivered" },
  { icon: Award, value: "100%", label: "Natural Herbal" },
];

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    text: "Carefully selected natural ingredients sourced from trusted suppliers.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    text: "100% herbal formula with no harmful additives or chemicals.",
  },
  {
    icon: UserCheck,
    title: "Professional Guidance",
    text: "Expert advice from Dr. Rubina, an experienced nutritionist.",
  },
  {
    icon: HeartPulse,
    title: "Healthy Lifestyle",
    text: "Support for balanced daily habits, energy and wellness.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Free delivery all over Pakistan with reliable courier service.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    text: "Customer-focused support with satisfaction guarantee.",
  },
];

const habits = [
  [Apple, "Fresh Fruits", "Daily fruits for vitamins"],
  [Utensils, "Healthy Diet", "Balanced meals every day"],
  [Truck, "Exercise", "Regular physical activity"],
  [Droplets, "Water Intake", "Stay hydrated all day"],
  [HeartPulse, "Wellness", "Mental & physical health"],
  [Moon, "Good Sleep", "7-8 hours quality rest"],
];

const doctorPoints = [
  "Qualified MBBS Doctor",
  "Certified Nutritionist",
  "Diet & Lifestyle Expert",
  "Personal Consultation",
];

const testimonials = [
  {
    name: "Ayesha K.",
    city: "Lahore",
    text: "Excellent product! I've been using it for 2 months and I feel more energetic. Delivery was fast too.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    city: "Karachi",
    text: "Dr. Rubina guided me very well. The herbal blend is natural and helped me with my wellness routine.",
    rating: 5,
  },
  {
    name: "Zainab M.",
    city: "Islamabad",
    text: "Great quality, reasonable price, and free delivery. Highly recommended for anyone starting their wellness journey.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What is Weight Loss Herbal Blend?",
    a: "It's a carefully prepared herbal blend made from 10+ natural ingredients including psyllium husk, green tea extract, fennel seeds, and more. It's designed to support your wellness routine alongside a balanced diet and regular exercise.",
  },
  {
    q: "How do I use this product?",
    a: "Take one tablespoon of the blend and mix it with a glass of warm water. Consume once daily, preferably in the morning. For best results, pair with a balanced diet and regular exercise.",
  },
  {
    q: "Is it safe to use?",
    a: "Our product is made from 100% natural herbal ingredients. However, we recommend consulting a healthcare professional before use, especially if you are pregnant, nursing, or taking medication.",
  },
  {
    q: "Do you offer delivery all over Pakistan?",
    a: "Yes! We offer FREE delivery all over Pakistan. Orders are typically delivered within 2-5 working days depending on your location.",
  },
  {
    q: "How can I place an order?",
    a: "You can order directly through WhatsApp by clicking the 'Order Now' button, or contact us through our Contact page. We'll confirm your order and guide you through the process.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-dark via-green to-green-dark
                          text-white py-20 md:py-28">
        {/* Decorative glows */}
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full
                        bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full
                        bg-green-light/20 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative grid md:grid-cols-[1.1fr_0.9fr]
                        gap-12 md:gap-16 items-center">

          {/* Hero Content */}
          <div className="animate-fade-up">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20
                            rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-sage/90">
                Trusted by 5,000+ customers
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl
                           leading-[1.08] my-5">
              Weight Loss
              <span className="block text-gold">by Dr Rubina</span>
            </h1>

            <p className="max-w-xl text-sage/90 text-base md:text-lg leading-relaxed">
              Natural herbal weight management and healthy lifestyle support
              designed to complement balanced nutrition and regular activity.
            </p>

            {/* Feature bullets */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-sage/85">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold" /> 100% Herbal
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold" /> Free Delivery
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold" /> Doctor Guided
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                           bg-gold text-charcoal font-bold
                           px-6 py-3.5 rounded-full
                           transition-all duration-300
                           hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-glow"
              >
                Order Now <ArrowRight size={17} />
              </a>
              <Link
                to="/product"
                className="inline-flex items-center gap-2
                           border border-white/40 text-white font-semibold
                           px-6 py-3.5 rounded-full
                           transition-all duration-300
                           hover:bg-white/10 hover:border-white"
              >
                View Product
              </Link>
            </div>
          </div>

          {/* Hero Card — Product Image */}
          <div className="animate-float">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5
                            shadow-card backdrop-blur-sm">
              <div className="min-h-[300px] md:min-h-[400px] rounded-2xl
                              overflow-hidden">
                <img
                  src={productImg}
                  alt="Weight Loss by Dr Rubina"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-between items-center px-1 pt-4 text-sm">
                <span className="text-sage/90 font-medium">Herbal Blend</span>
                <span className="text-sage/90 font-medium">500g</span>
                <strong className="text-gold text-base">Rs. 2,250</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MEET THE DOCTOR ==================== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Meet the Doctor
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Professional guidance for a healthier routine
            </h2>
            <p className="text-muted">
              Dr. Rubina combines nutrition knowledge with a holistic
              approach to everyday wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Doctor Photo — Image */}
            <div
              className="animate-fade-up min-h-[360px] md:min-h-[500px] rounded-3xl
                         shadow-card relative overflow-hidden"
            >
              <img
                src={doctorImg}
                alt="Dr. Rubina — MBBS, Nutritionist"
                className="w-full h-full object-cover object-top"
              />

              {/* Decorative badge */}
              <span className="absolute top-5 right-5 bg-gold text-charcoal
                               text-[11px] font-extrabold tracking-wider
                               px-3 py-1.5 rounded-full">
                CERTIFIED
              </span>
            </div>

            {/* Doctor Info */}
            <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
              <span className="inline-block uppercase tracking-[2px] text-[11px]
                               font-bold text-gold">
                Dr. Rubina
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl
                             leading-tight my-3 text-green-dark">
                MBBS • Nutritionist • Dietitian
              </h2>
              <p className="text-muted leading-relaxed">
                Dedicated to helping individuals build practical, sustainable
                habits around food, activity and lifestyle. Herbal products are
                presented as part of a broader healthy-living routine.
              </p>

              <div className="grid gap-3 my-7">
                {doctorPoints.map((point, i) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 font-semibold text-charcoal
                               animate-fade-up"
                    style={{ animationDelay: `${180 + i * 70}ms` }}
                  >
                    <span className="grid place-items-center w-7 h-7 rounded-full
                                     bg-sage text-green shrink-0">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-green font-bold
                           transition-all duration-300
                           hover:gap-3 hover:text-gold-dark"
              >
                Learn More About Dr. Rubina <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Wellness built around quality and consistency
            </h2>
            <p className="text-muted">
              Simple, customer-focused support for people working toward
              healthier daily habits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="group bg-white p-7 rounded-2xl shadow-soft
                           border border-transparent
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card hover:border-gold/20
                           animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-sage grid place-items-center
                                text-green transition-all duration-300
                                group-hover:bg-green group-hover:text-white
                                group-hover:rotate-[-8deg]">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg text-green-dark mt-4 mb-1.5">
                  {title}
                </h3>
                <p className="text-muted text-sm m-0 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT SHOWCASE ==================== */}
      <section className="py-20 md:py-24 bg-[#f1eadc]">
        <div className="w-[min(1120px,92%)] mx-auto grid md:grid-cols-2
                        gap-12 md:gap-16 items-center">

          {/* Product Image */}
          <div className="animate-fade-up rounded-3xl overflow-hidden shadow-card
                          min-h-[360px] md:min-h-[520px] relative">
            <img
              src={productImg}
              alt="Weight Loss Herbal Blend"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-5 left-5 bg-gold text-charcoal
                             text-[11px] font-extrabold tracking-wider
                             px-3 py-1.5 rounded-full">
              BEST SELLER
            </span>
          </div>

          {/* Product Info */}
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Our Featured Product
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Weight Loss Herbal Blend
            </h2>
            <p className="text-muted leading-relaxed">
              Carefully prepared from 10+ selected herbal ingredients and intended
              to be used alongside balanced nutrition and regular exercise.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm text-muted font-medium">
                4.9 (2,100+ reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 my-6">
              <del className="text-gray-500 text-base">Rs. 3,399</del>
              <strong className="text-3xl text-green font-extrabold">
                Rs. 2,250
              </strong>
              <span className="bg-gold/20 text-gold-dark text-xs font-bold
                               px-2.5 py-1 rounded-full">
                34% OFF
              </span>
            </div>

            <span className="inline-flex items-center gap-2 text-green text-xs font-extrabold
                             tracking-wider bg-sage px-3.5 py-2 rounded-full">
              <Truck size={14} />
              FREE DELIVERY ALL OVER PAKISTAN
            </span>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                           bg-green text-white font-bold
                           px-6 py-3.5 rounded-full
                           transition-all duration-300
                           hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-card"
              >
                Order Now <ArrowRight size={16} />
              </a>
              <Link
                to="/product"
                className="inline-flex items-center gap-2
                           border-2 border-green text-green font-bold
                           px-6 py-3 rounded-full
                           transition-all duration-300
                           hover:bg-green hover:text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HEALTHY HABITS ==================== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Healthy Lifestyle
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Small daily habits lead to big transformations.
            </h2>
            <p className="text-muted">
              Use practical lifestyle habits as the foundation of your wellness routine.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {habits.map(([Icon, label, desc], i) => (
              <div
                key={label}
                className="group bg-white border border-gray-100 rounded-2xl
                           py-6 px-3 text-center grid gap-2 justify-items-center
                           transition-all duration-300
                           hover:-translate-y-2 hover:border-gold/30 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="grid place-items-center w-12 h-12 rounded-full
                                 bg-sage text-green
                                 transition-all duration-300
                                 group-hover:bg-green group-hover:text-white
                                 group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <span className="text-[13px] font-bold text-charcoal">
                  {label}
                </span>
                <span className="text-[11px] text-muted leading-tight">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Customer Reviews
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              What our customers say
            </h2>
            <p className="text-muted">
              Real feedback from people using Weight Loss by Dr. Rubina.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="relative bg-white rounded-2xl p-6 md:p-7 shadow-soft
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Quote
                  size={32}
                  className="text-gold/30 absolute top-5 right-5"
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={15} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-charcoal leading-relaxed mb-5 text-sm md:text-base">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green to-green-light
                                  grid place-items-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-charcoal">{t.name}</div>
                    <div className="text-xs text-muted">{t.city}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-dark to-green
                          text-white py-16 md:py-24">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full
                        bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full
                        bg-gold/10 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative text-center animate-fade-up">
          <span className="inline-block uppercase tracking-[2px] text-[11px]
                           font-bold text-gold">
            Ready to Start?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl
                         leading-tight mt-3 max-w-2xl mx-auto">
            Start your wellness journey today.
          </h2>
          <p className="text-sage/85 max-w-lg mx-auto mt-4">
            Order now and get FREE delivery all over Pakistan.
            Consult Dr. Rubina for personalized guidance.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         bg-gold text-charcoal font-bold
                         px-7 py-3.5 rounded-full
                         transition-all duration-300
                         hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-glow"
            >
              Order Now <ArrowRight size={17} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2
                         border border-white/40 text-white font-semibold
                         px-7 py-3.5 rounded-full
                         transition-all duration-300
                         hover:bg-white/10 hover:border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}