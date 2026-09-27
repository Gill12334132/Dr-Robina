import { Link } from "react-router-dom";
import {
  FileText,
  ArrowRight,
  ShoppingBag,
  Truck,
  RotateCcw,
  AlertTriangle,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: ShoppingBag,
    title: "Orders & Acceptance",
    content:
      "By placing an order through our website or WhatsApp, you confirm that the information you provide is accurate and complete. We reserve the right to accept or decline any order based on product availability, delivery feasibility, or verification of details. Order confirmation will be sent via WhatsApp or phone call.",
  },
  {
    icon: Truck,
    title: "Pricing & Delivery",
    content:
      "All prices are listed in Pakistani Rupees (PKR) and are subject to change without prior notice. We offer free delivery all over Pakistan on all orders. Delivery time may vary from 2 to 5 working days depending on your location. Delays caused by courier services, weather conditions, or other unforeseen events are beyond our control.",
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    content:
      "Due to the nature of our herbal products and health safety regulations, we do not accept returns on opened or used products. If you receive a damaged, defective, or incorrect item, please contact us within 48 hours of delivery with photos, and we will arrange a replacement or refund after verification.",
  },
  {
    icon: AlertTriangle,
    title: "Product Use & Disclaimer",
    content:
      "Our herbal products are intended to support a healthy lifestyle and are not meant to diagnose, treat, cure, or prevent any disease. Results may vary from person to person depending on individual lifestyle, diet, and consistency. Please consult a qualified healthcare professional before use, especially if you are pregnant, nursing, or taking medication.",
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    content:
      "All content on this website — including text, images, logos, and product descriptions — is the property of Weight Loss by Rubina and is protected by applicable copyright laws. You may not reproduce, distribute, or use any content without prior written permission.",
  },
  {
    icon: Mail,
    title: "Contact & Updates",
    content:
      "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with a revised date. For any questions regarding these terms, please reach out to us via WhatsApp or email.",
  },
];

export default function Terms() {
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
            <FileText size={14} />
            Legal
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl
                         leading-[1.1] my-4 max-w-3xl">
            Terms &amp; Conditions
          </h1>
          <p className="text-sage/90 max-w-xl text-base md:text-lg">
            Please read these terms carefully before using our website or
            placing an order with Weight Loss by Rubina.
          </p>
        </div>
      </section>

      {/* ==================== CONTENT ==================== */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="w-[min(900px,92%)] mx-auto">

          {/* Intro Card */}
          <div className="bg-white rounded-2xl p-7 md:p-8 shadow-soft
                          border-l-4 border-gold animate-fade-up mb-8">
            <p className="text-charcoal leading-relaxed m-0">
              By accessing or using the <b>Weight Loss by Rubina</b> website,
              you agree to be bound by the following Terms &amp; Conditions.
              If you do not agree with any part of these terms, please
              discontinue use of the website.
            </p>
            <p className="text-muted text-sm mt-3 mb-0">
              <b>Last Updated:</b> January 2026
            </p>
          </div>

          {/* Sections */}
          <div className="grid gap-5">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.title}
                  className="group bg-white rounded-2xl p-6 md:p-7
                             shadow-soft transition-all duration-300
                             hover:-translate-y-1 hover:shadow-card
                             animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid place-items-center w-12 h-12 rounded-xl
                                     bg-sage text-green shrink-0
                                     transition-all duration-300
                                     group-hover:bg-green group-hover:text-white
                                     group-hover:rotate-[-8deg]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-xl md:text-2xl
                                     text-green-dark mb-2">
                        {section.title}
                      </h2>
                      <p className="text-muted leading-relaxed m-0 text-sm md:text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-gradient-to-br from-green-dark to-green
                          text-white rounded-2xl p-7 md:p-8 shadow-card
                          animate-fade-up">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
              Need Help or Have Questions?
            </h2>
            <p className="text-sage/85 leading-relaxed mb-6">
              If you have any questions about these Terms &amp; Conditions,
              our products, or your order, feel free to reach out. We're
              here to help.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2
                           bg-gold text-charcoal font-bold
                           px-6 py-3 rounded-full
                           transition-all duration-300
                           hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-glow"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923194832686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                           border border-white/40 text-white font-semibold
                           px-6 py-3 rounded-full
                           transition-all duration-300
                           hover:bg-white/10 hover:border-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Related Link */}
          <div className="text-center mt-8 text-muted text-sm animate-fade-up">
            Also read our{" "}
            <Link
              to="/privacy-policy"
              className="text-green font-bold hover:text-gold-dark transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}