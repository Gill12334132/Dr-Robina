import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

/* =========================================================
   CONTACT DATA
========================================================= */

const CONTACT = {
  phone1: "03194832686",
  phone2: "03194832686",
  email: "drrubina466@gmail.com",
  location: "Multan, Pakistan",
  whatsapp: "923194832686",
  whatsappDisplay: "03194832686",
  product: "Weight Loss by Rubina",
};

/* =========================================================
   GMAIL COMPOSE LINK
   Opens Gmail Compose in a new browser tab
========================================================= */

const EMAIL_SUBJECT = encodeURIComponent(`${CONTACT.product} Inquiry`);

const EMAIL_BODY = encodeURIComponent(
  `Hello,\n\n` +
  `I would like to know more about ${CONTACT.product}.\n\n` +
  `Name:\n` +
  `Phone:\n` +
  `City:\n\n` +
  `Message:\n\n` +
  `Thank you.`
);

const EMAIL_LINK =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(CONTACT.email)}` +
  `&su=${EMAIL_SUBJECT}` +
  `&body=${EMAIL_BODY}`;

/* =========================================================
   CONTACT COMPONENT
========================================================= */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    product: CONTACT.product,
    message: "",
  });

  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    const whatsappMessage = [
      `${CONTACT.product} Inquiry`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Product: ${form.product}`,
      "",
      `Message: ${form.message}`,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="page" id="contact">

      {/* ==================== PAGE HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-dark to-green text-white py-16 md:py-20">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-green-light/20 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative animate-fade-up">
          <span className="inline-block uppercase tracking-[2px] text-[11px] font-bold text-gold">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] my-4 max-w-3xl">
            Contact {CONTACT.product}
          </h1>
          <p className="text-sage/90 max-w-xl text-base md:text-lg">
            Send an inquiry and we'll get back to you through WhatsApp.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">

          {/* ==================== CONTACT INFO ==================== */}
          <div className="animate-fade-up">
            <span className="inline-block uppercase tracking-[2px] text-[11px] font-bold text-gold">
              Contact Information
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight my-3 text-green-dark">
              We're here to help
            </h2>
            <p className="text-muted mb-8">
              Reach out by phone, email or WhatsApp for product and wellness inquiries.
            </p>

            <div className="grid gap-3">

              {/* Phone */}
              <a
                href={`tel:${CONTACT.phone1.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-sage text-green shrink-0 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                  <Phone size={20} />
                </span>
                <span>
                  <b className="block text-[13px] text-charcoal font-bold">Phone</b>
                  <span className="text-muted text-sm">
                    {CONTACT.phone1}
                    <br />
                    {CONTACT.phone2}
                  </span>
                </span>
              </a>

              {/* Email — opens Gmail Compose */}
              <a
                href={EMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-sage text-green shrink-0 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                  <Mail size={20} />
                </span>
                <span className="min-w-0">
                  <b className="block text-[13px] text-charcoal font-bold">Email</b>
                  <span className="text-muted text-sm break-all">
                    {CONTACT.email}
                  </span>
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card group">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-sage text-green shrink-0 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                  <MapPin size={20} />
                </span>
                <span>
                  <b className="block text-[13px] text-charcoal font-bold">Location</b>
                  <span className="text-muted text-sm">{CONTACT.location}</span>
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-sage text-green shrink-0 transition-all duration-300 group-hover:bg-green group-hover:text-white">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <b className="block text-[13px] text-charcoal font-bold">WhatsApp</b>
                  <span className="text-muted text-sm">
                    {CONTACT.whatsappDisplay}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* ==================== CONTACT FORM ==================== */}
          <form
            onSubmit={submit}
            className="bg-white rounded-3xl p-7 md:p-9 shadow-card animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-green-dark">
              Send Us a Message
            </h2>
            <p className="text-muted mt-2 text-sm">
              Fill in the details and continue to WhatsApp.
            </p>

            <div className="grid gap-4 mt-6">

              {/* Name */}
              <label className="grid gap-2 text-[13px] font-bold text-charcoal">
                Full Name *
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none bg-[#fbfcf9] focus:border-green focus:ring-2 focus:ring-green/10 transition-all duration-200 font-normal"
                />
              </label>

              {/* Phone */}
              <label className="grid gap-2 text-[13px] font-bold text-charcoal">
                Phone Number *
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="03XX-XXXXXXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none bg-[#fbfcf9] focus:border-green focus:ring-2 focus:ring-green/10 transition-all duration-200 font-normal"
                />
              </label>

              {/* City + Product */}
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-2 text-[13px] font-bold text-charcoal">
                  City
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={update}
                    placeholder="Your city"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none bg-[#fbfcf9] focus:border-green focus:ring-2 focus:ring-green/10 transition-all duration-200 font-normal"
                  />
                </label>

                <label className="grid gap-2 text-[13px] font-bold text-charcoal">
                  Product Name
                  <input
                    type="text"
                    name="product"
                    value={form.product}
                    onChange={update}
                    placeholder={CONTACT.product}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none bg-[#fbfcf9] focus:border-green focus:ring-2 focus:ring-green/10 transition-all duration-200 font-normal"
                  />
                </label>
              </div>

              {/* Message */}
              <label className="grid gap-2 text-[13px] font-bold text-charcoal">
                Message *
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="How can we help?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none bg-[#fbfcf9] focus:border-green focus:ring-2 focus:ring-green/10 transition-all duration-200 font-normal min-h-[130px] resize-y"
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-bold px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-glow"
              >
                Order Now <Send size={16} />
              </button>

              {/* Success Message */}
              {sent && (
                <div className="bg-sage text-green-dark text-sm p-3.5 rounded-xl border border-green/20 animate-fade-in">
                  ✅ WhatsApp opened with your inquiry. Please press Send there.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}