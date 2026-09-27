import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// ==================== IMAGE IMPORTS ====================
import img01 from "../imgs/0.jpeg";   // Product
import img02 from "../imgs/A.jpeg";   // Customers
import img03 from "../imgs/B.jpeg";   // Customers
import img04 from "../imgs/c.jpeg";   // Customers
import img05 from "../imgs/D.jpeg";   // Customers
import img06 from "../imgs/E.jpeg";   // Customers
import img07 from "../imgs/F.jpeg";   // Lifestyle
import img08 from "../imgs/G.jpeg";   // Lifestyle
import img09 from "../imgs/H.jpeg";   // Lifestyle
import img10 from "../imgs/I.jpeg";   // Lifestyle
import img11 from "../imgs/j.jpeg";   // Product
import img12 from "../imgs/K.jpeg";   // Product
import img13 from "../imgs/L.jpeg";   // Product
import img14 from "../imgs/M.jpeg";   // Product
import img15 from "../imgs/N.jpeg";   // Product

const galleryImages = [
  // -------- PRODUCT --------
  { src: img01, alt: "Weight Loss by Dr Rubina", category: "Product" },
  { src: img11, alt: "Herbal Product", category: "Product" },
  { src: img12, alt: "Product Showcase", category: "Product" },
  { src: img13, alt: "Premium Herbal Blend", category: "Product" },
  { src: img14, alt: "Weight Loss Herbal Blend", category: "Product" },
  { src: img15, alt: "Natural Herbal Formula", category: "Product" },

  // -------- LIFESTYLE --------
  { src: img07, alt: "Wellness Routine", category: "Lifestyle" },
  { src: img08, alt: "Healthy Lifestyle", category: "Lifestyle" },
  { src: img09, alt: "Wellness Support", category: "Lifestyle" },
  { src: img10, alt: "Healthy Habits", category: "Lifestyle" },

  // -------- CUSTOMERS --------
  { src: img02, alt: "Customer Journey", category: "Customers" },
  { src: img03, alt: "Weight Loss Journey", category: "Customers" },
  { src: img04, alt: "Dr Rubina Consultation", category: "Customers" },
  { src: img05, alt: "Happy Customer", category: "Customers" },
  { src: img06, alt: "Transformation Story", category: "Customers" },
];

const categories = ["All", "Product", "Lifestyle", "Customers"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="page">

      {/* ==================== PAGE HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-dark to-green
                          text-white py-16 md:py-20">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full
                        bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full
                        bg-green-light/20 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative animate-fade-up text-center">
          <span className="inline-block uppercase tracking-[2px] text-[11px]
                           font-bold text-gold">
            Our Gallery
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl
                         leading-[1.1] my-4 max-w-3xl mx-auto">
            Moments of Wellness &amp; Transformation
          </h1>
          <p className="text-sage/90 max-w-xl mx-auto text-base md:text-lg">
            Explore our products, herbal ingredients, and wellness journey
            through these moments captured by Weight Loss by Dr. Rubina.
          </p>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="w-[min(1120px,92%)] mx-auto">

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10
                          animate-fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 rounded-full text-sm font-semibold
                            transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-green text-white shadow-card"
                      : "bg-white text-charcoal hover:bg-sage border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, i) => (
              <button
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-2xl overflow-hidden
                           shadow-soft transition-all duration-300
                           hover:-translate-y-2 hover:shadow-card
                           animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t
                                from-green-dark/80 via-green-dark/20 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                                flex flex-col justify-end p-4 text-left">
                  <span className="text-gold text-[10px] font-extrabold
                                   uppercase tracking-wider">
                    {image.category}
                  </span>
                  <span className="text-white text-xs md:text-sm font-semibold">
                    {image.alt}
                  </span>
                </div>

                <span className="absolute top-3 right-3 grid place-items-center
                                 w-8 h-8 rounded-full bg-white/90 text-green
                                 opacity-0 group-hover:opacity-100
                                 transition-all duration-300
                                 group-hover:scale-110">
                  <ZoomIn size={16} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LIGHTBOX ==================== */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] bg-green-dark/95 backdrop-blur-md
                     flex items-center justify-center p-4
                     animate-fade-in cursor-zoom-out"
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
            className="absolute top-5 right-5 grid place-items-center
                       w-11 h-11 rounded-full bg-white/10 hover:bg-white/20
                       text-white transition-all duration-300
                       hover:rotate-90"
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl
                       overflow-hidden shadow-2xl animate-fade-up"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0
                            bg-gradient-to-t from-green-dark to-transparent
                            p-5 pt-12">
              <span className="text-gold text-[11px] font-extrabold
                               uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <div className="text-white text-base md:text-lg font-semibold">
                {selectedImage.alt}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden bg-green-dark text-white
                          py-16 md:py-20">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full
                        bg-gold/10 blur-3xl" />

        <div className="w-[min(1120px,92%)] mx-auto relative text-center animate-fade-up">
          <span className="inline-block uppercase tracking-[2px] text-[11px]
                           font-bold text-gold">
            Want to be Featured?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl
                         leading-tight mt-3 max-w-2xl mx-auto">
            Share your wellness journey with us.
          </h2>
          <p className="text-sage/85 max-w-lg mx-auto mt-4">
            Send us your story and photos — we would love to feature you in
            our gallery.
          </p>

          <a
            href="https://wa.me/923194832686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8
                       bg-gold text-charcoal font-bold
                       px-7 py-3.5 rounded-full
                       transition-all duration-300
                       hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-glow"
          >
            Send on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}