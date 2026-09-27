import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

// ==================== IMAGE IMPORTS ====================
import doctorImg from "../imgs/doctor.png";

const services = [
  {
    title: "Nutrition Consultancy",
    desc: "Personalized nutrition conversations and practical guidance.",
  },
  {
    title: "Herbal Products",
    desc: "Selected herbal wellness products with clear usage information.",
  },
  {
    title: "Diet Planning",
    desc: "Simple, sustainable meal and lifestyle planning.",
  },
  {
    title: "Wellness Support",
    desc: "Customer support for questions, product information and inquiries.",
  },
];

const checkPoints = [
  "Nutrition consultancy",
  "Diet planning",
  "Herbal wellness products",
  "Lifestyle support",
];

export default function About() {
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
          <span className="inline-block uppercase tracking-[2px] text-[11px]
                           font-bold text-gold">
            About Weight Loss by Rubina
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl
                         leading-[1.1] my-4 max-w-3xl">
            Natural wellness, guided by professional nutrition.
          </h1>
          <p className="text-sage/90 max-w-xl text-base md:text-lg">
            Learn about Dr. Robina, our philosophy and services behind
            Weight Loss by Rubina.
          </p>
        </div>
      </section>

      {/* ==================== MEET THE DOCTOR ==================== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Doctor Photo — Image */}
          <div
            className="animate-fade-up min-h-[360px] md:min-h-[500px] rounded-3xl
                       shadow-card relative overflow-hidden"
          >
            <img
              src={doctorImg}
              alt="Dr. Robina — MBBS, Nutritionist"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Doctor Info */}
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Meet the Doctor
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Dr. Robina
            </h2>
            <h3 className="text-gold-dark font-semibold text-base md:text-lg mb-4">
              MBBS • Nutritionist • Dietitian
            </h3>
            <p className="text-muted leading-relaxed">
              Weight Loss by Rubina is built around a practical approach to
              healthy living: better food choices, consistent movement,
              hydration, sleep and informed professional guidance.
            </p>

            <div className="grid gap-3 my-7">
              {checkPoints.map((point, i) => (
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
              to="/contact"
              className="inline-flex items-center gap-2
                         bg-green text-white font-semibold
                         px-6 py-3 rounded-full
                         transition-all duration-300
                         hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-glow"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="w-[min(1120px,92%)] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px]
                             font-bold text-gold">
              Our Services
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl
                           leading-tight my-3 text-green-dark">
              Support for your everyday wellness journey
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group relative bg-white rounded-2xl p-7
                           shadow-soft transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-bold text-lg md:text-xl text-green-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ArrowRight
                  size={18}
                  className="text-green transition-all duration-300
                             group-hover:translate-x-1.5 group-hover:text-gold"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}