import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const products = [
  {
    name: "Pyaaz Kachori",
    description: "Crispy, golden, filled with a spiced onion mixture. Jaipur's most beloved snack — now in Mumbai.",
    category: "Kachoris & Snacks",
    price: "₹ --",
  },
  {
    name: "Dal Baati Churma",
    description: "The soul of Rajasthan. Baked baatis, slow-cooked dal, and sweet churma. A full meal in a bowl.",
    category: "Main Course",
    price: "₹ --",
  },
  {
    name: "Malai Ghewar",
    description: "A disc of pure indulgence — honeycomb pastry soaked in desi ghee and topped with cream.",
    category: "Sweets",
    price: "₹ --",
  },
  {
    name: "Premium Snack Box",
    description: "A curated selection of Rajasthani snacks — kachoris, namkeen, and more. Perfect for gifting.",
    category: "Snack Boxes",
    price: "₹ --",
  },
  {
    name: "Besan Chakki",
    description: "Melt-in-your-mouth besan fudge made with pure desi ghee and hand-rolled to perfection.",
    category: "Sweets",
    price: "₹ --",
  },
  {
    name: "Aam Papad Achaar",
    description: "Sun-dried, tangy, and deeply spiced mango pickle. The kind grandma made, now in a jar.",
    category: "Achaar",
    price: "₹ --",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Andheri, Mumbai",
    review:
      "Dal Baati Churma brought tears to my eyes — it reminded me of my nani's kitchen in Jaipur. This is the real thing.",
    rating: 5,
  },
  {
    name: "Rohit Mehta",
    location: "HR Manager, Bandra",
    review:
      "We ordered 80 snack boxes for our office Diwali celebration. Everyone loved it. The packaging was premium and the quality was outstanding.",
    rating: 5,
  },
  {
    name: "Ananya Verma",
    location: "Powai, Mumbai",
    review:
      "The Pyaaz Kachori is addictive. I've ordered every weekend for the past two months. Paitruk is now a household staple for us.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 pt-10 pb-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs uppercase tracking-widest text-[#D4872A] font-semibold mb-5"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Rajasthan&apos;s finest, now in Mumbai
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Authentic Rajasthan,
              <br />
              <span className="text-[#8B1A1A]">delivered across Mumbai.</span>
            </h1>

            <p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Kachoris, Dal Baati Churma, sweets, snack boxes, and festive
              gifting — made with real ingredients and Rajasthani heart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://paitruk.dotpe.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8B1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                Order Now
              </a>
              <Link
                href="/corporate"
                className="border-2 border-[#8B1A1A] text-[#8B1A1A] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#8B1A1A] hover:text-white transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                Enquire for Bulk Orders
              </Link>
            </div>
          </div>

          {/* Hero image — replace bg color div with actual <Image> once you have food photography */}
          <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden bg-[#F5EFE6] flex items-center justify-center">
            <div className="text-center text-[#8B1A1A] opacity-30">
              <div className="text-8xl mb-4">🫓</div>
              <div className="text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>
                Place premium food photo here
                <br />(1200×900px recommended)
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "-apple-system, sans-serif" }}>Monthly Orders</div>
              <div className="text-xl font-bold text-[#8B1A1A]" style={{ fontFamily: "Georgia, serif" }}>2,500+</div>
            </div>
            <div className="absolute top-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "-apple-system, sans-serif" }}>Repeat Customers</div>
              <div className="text-xl font-bold text-[#8B1A1A]" style={{ fontFamily: "Georgia, serif" }}>45%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-[#8B1A1A] text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: "2,500+", label: "Monthly Orders" },
            { stat: "45%", label: "Repeat Customers" },
            { stat: "100%", label: "Vegetarian" },
            { stat: "Mumbai-wide", label: "Delivery" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>{stat}</div>
              <div className="text-xs opacity-75 mt-1" style={{ fontFamily: "-apple-system, sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Our Specialities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              Not just food. A piece of Rajasthan.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block border-2 border-[#8B1A1A] text-[#8B1A1A] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#8B1A1A] hover:text-white transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STORY TEASER ─── */}
      <section className="py-20 px-4 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder photo — replace with actual image */}
          <div className="h-72 lg:h-96 rounded-3xl bg-[#e8d9c4] flex items-center justify-center">
            <div className="text-center text-[#8B1A1A] opacity-30">
              <div className="text-7xl mb-2">👨‍🍳</div>
              <div className="text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>Founder / kitchen photo here</div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-2 mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Started from a small kitchen. Built for Mumbai.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Paitruk was born from a simple belief — that Mumbai deserved authentic Rajasthani food made the right way, with the right ingredients, and with real care. Not shortcuts. Not compromises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 italic" style={{ fontFamily: "Georgia, serif" }}>
              &ldquo;To put Rajasthan back on the map through food.&rdquo;
            </p>
            <Link
              href="/story"
              className="inline-block bg-[#8B1A1A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE BANNER ─── */}
      <section className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              For Offices & Teams
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Office snacks that people actually remember.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Freshly packed. Delivered across Mumbai. Built for bulk. Minimum 10 boxes — custom sizes available.
            </p>
            <Link
              href="/corporate"
              className="inline-block bg-[#8B1A1A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Enquire for Corporate Orders
            </Link>
          </div>
          <div className="h-52 rounded-2xl bg-[#2a2a2a] flex items-center justify-center">
            {/* Replace with corporate snack box photo */}
            <div className="text-center text-white opacity-20">
              <div className="text-6xl mb-2">📦</div>
              <div className="text-xs" style={{ fontFamily: "-apple-system, sans-serif" }}>Corporate box photo here</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FESTIVE GIFTING BANNER ─── */}
      <section className="py-16 px-4 bg-[#FAF7F2] border-t border-b border-[#e8e0d5]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-52 rounded-2xl bg-[#e8d9c4] flex items-center justify-center order-2 md:order-1">
            {/* Replace with festive gifting photo */}
            <div className="text-center text-[#8B1A1A] opacity-30">
              <div className="text-6xl mb-2">🎁</div>
              <div className="text-xs" style={{ fontFamily: "-apple-system, sans-serif" }}>Festive gift box photo here</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Festive Gifting
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-2 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Gift something rooted in tradition.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Premium gifting boxes for Diwali, Holi, Raksha Bandhan, and every celebration in between. Sweets, namkeen, achaar, ghewar — beautifully packaged.
            </p>
            <Link
              href="/gifting"
              className="inline-block bg-[#D4872A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#b86e1a] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Explore Gifting Options
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Loved Across Mumbai
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              What our customers say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          {/* Replace href with actual Instagram profile URL */}
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/paitruk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#D4872A] text-[#D4872A] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#D4872A] hover:text-white transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Follow @paitruk on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTASection
        headline="Bring Paitruk home today."
        subtext="Mumbai moves fast. Paitruk brings food that feels rooted. Order now — delivered fresh to your doorstep."
        primaryCTA={{ label: "Order Now", href: "https://paitruk.dotpe.in" }}
        secondaryCTA={{ label: "WhatsApp Us", href: "https://wa.me/91XXXXXXXXXX" }}
      />
    </>
  );
}
