import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Lock, Eye, Database, Mail } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content:
      "When you contact us or place an order, we may collect your name, phone number, city, email address, and any message you send us. This information is used only to respond to your inquiry, process your order, and provide customer support.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "Your information is used strictly to communicate with you regarding your inquiries, orders, and wellness guidance. We may use your contact details to send order updates, delivery confirmations, or respond to support requests. We never sell or share your data with third parties for marketing purposes.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    content:
      "We take reasonable measures to protect your personal information. Your data is stored securely and accessed only by authorized personnel. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    icon: Mail,
    title: "Cookies & Analytics",
    content:
      "Our website may use basic cookies to improve user experience and understand how visitors interact with our content. You can disable cookies in your browser settings at any time without affecting your ability to browse our website.",
  },
];

export default function Privacy() {
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
            <ShieldCheck size={14} />
            Legal
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl
                         leading-[1.1] my-4 max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-sage/90 max-w-xl text-base md:text-lg">
            Your privacy matters to us. Learn how Weight Loss by Rubina
            collects, uses, and protects your personal information.
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
              This Privacy Policy describes how <b>Weight Loss by Rubina</b> handles
              the information you provide when using our website. By using this
              website, you agree to the practices described below.
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
              Questions About Your Privacy?
            </h2>
            <p className="text-sage/85 leading-relaxed mb-6">
              If you have any questions or concerns about how your information
              is handled, please contact us directly. We're happy to help.
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
                href="mailto:drrubina466@gmail.com"
                className="inline-flex items-center gap-2
                           border border-white/40 text-white font-semibold
                           px-6 py-3 rounded-full
                           transition-all duration-300
                           hover:bg-white/10 hover:border-white"
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}