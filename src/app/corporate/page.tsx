import EnquiryForm from "@/components/EnquiryForm";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const useCases = [
  { emoji: "💼", label: "Team Meetings" },
  { emoji: "🎉", label: "Office Celebrations" },
  { emoji: "🎁", label: "Client Gifting" },
  { emoji: "🪔", label: "Festival Events" },
  { emoji: "🏢", label: "Society Functions" },
  { emoji: "🎓", label: "College Events" },
  { emoji: "💒", label: "Wedding Planning" },
  { emoji: "📅", label: "Monthly Snack Runs" },
];

const packages = [
  {
    name: "Starter Box",
    description: "Ideal for small teams and quick meetings.",
    contents: ["Pyaaz Kachori × 2", "Bikaneri Bhujia (100g)", "One sweet"],
    moq: "10 boxes",
    price: "₹ --",
  },
  {
    name: "Office Delight Box",
    description: "The most popular. Great variety, premium feel.",
    contents: ["Pyaaz Kachori × 2", "Mawa Kachori × 1", "Mix Namkeen (150g)", "Besan Chakki × 2"],
    moq: "20 boxes",
    price: "₹ --",
    highlight: true,
  },
  {
    name: "Premium Corporate Box",
    description: "For important clients and high-value events.",
    contents: ["Pyaaz + Mawa Kachori × 2 each", "Premium Namkeen (200g)", "2 sweets", "Achaar jar", "Premium packaging"],
    moq: "25 boxes",
    price: "₹ --",
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-24 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Corporate Orders
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Office snacks that people
              <br />
              <span className="text-[#D4872A]">actually remember.</span>
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Freshly packed. Delivered across Mumbai. Built for bulk.
              Minimum 10 boxes — custom sizes, custom packaging available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquiry"
                className="bg-[#8B1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                Send Enquiry
              </a>
              {/* Replace with your actual WhatsApp number */}
              <a
                href="https://wa.me/919610612323?text=Hi%20Paitruk!%20I%20want%20to%20enquire%20about%20corporate%20orders."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white hover:text-[#1a1a1a] transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Replace with actual product image */}
          <div className="h-72 lg:h-[400px] rounded-3xl bg-[#2a2a2a] flex items-center justify-center">
            <div className="text-center text-white opacity-20">
              <div className="text-8xl mb-3">📦</div>
              <div className="text-xs" style={{ fontFamily: "-apple-system, sans-serif" }}>Corporate snack box photo here</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-16 px-4 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8" style={{ fontFamily: "Georgia, serif" }}>
            Who orders from Paitruk?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {useCases.map(({ emoji, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-[#f0ebe3] text-center hover-lift">
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: "-apple-system, sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="py-20 px-4 bg-[#F5EFE6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Snack Box Options
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              Choose your box
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 border ${pkg.highlight ? "border-[#8B1A1A] bg-[#8B1A1A] text-white" : "border-[#f0ebe3] bg-white"}`}
              >
                {pkg.highlight && (
                  <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold block mb-2" style={{ fontFamily: "-apple-system, sans-serif" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.highlight ? "text-white/70" : "text-gray-500"}`} style={{ fontFamily: "-apple-system, sans-serif" }}>
                  {pkg.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {pkg.contents.map((c) => (
                    <li key={c} className={`text-sm flex gap-2 items-start ${pkg.highlight ? "text-white/90" : "text-gray-600"}`} style={{ fontFamily: "-apple-system, sans-serif" }}>
                      <span className="mt-0.5">✓</span> {c}
                    </li>
                  ))}
                </ul>
                <div className={`text-xs mb-1 ${pkg.highlight ? "text-white/60" : "text-gray-400"}`} style={{ fontFamily: "-apple-system, sans-serif" }}>MOQ: {pkg.moq}</div>
                {/* Replace price placeholder with actual pricing */}
                <div className={`text-xl font-bold mb-5 ${pkg.highlight ? "text-white" : "text-[#8B1A1A]"}`} style={{ fontFamily: "Georgia, serif" }}>
                  {pkg.price} / box
                </div>
                <a
                  href="#enquiry"
                  className={`block text-center px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? "bg-white text-[#8B1A1A] hover:bg-[#FAF7F2]"
                      : "bg-[#8B1A1A] text-white hover:bg-[#6B1414]"
                  }`}
                  style={{ fontFamily: "-apple-system, sans-serif" }}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section className="py-16 px-4 bg-[#FAF7F2] border-t border-[#e8e0d5]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { stat: "10+", label: "Minimum Order", sub: "Boxes per order" },
            { stat: "Mumbai", label: "Delivery Coverage", sub: "Pan-city delivery" },
            { stat: "Fresh", label: "Every Batch", sub: "No pre-made inventory" },
          ].map(({ stat, label, sub }) => (
            <div key={label} className="bg-white rounded-2xl p-8 border border-[#f0ebe3]">
              <div className="text-3xl font-bold text-[#8B1A1A] mb-1" style={{ fontFamily: "Georgia, serif" }}>{stat}</div>
              <div className="font-semibold text-[#1a1a1a] text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>{label}</div>
              <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "-apple-system, sans-serif" }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ENQUIRY FORM ─── */}
      <section id="enquiry" className="py-20 px-4 bg-[#F5EFE6] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <EnquiryForm
            title="Enquire for Corporate Orders"
            subtitle="Tell us how many boxes you need and we'll get back to you within a few hours."
            type="corporate"
          />
          <p className="text-center text-sm text-gray-500 mt-5" style={{ fontFamily: "-apple-system, sans-serif" }}>
            Prefer WhatsApp?{" "}
            {/* Replace with actual WhatsApp number */}
            <a href="https://wa.me/919610612323" className="text-[#8B1A1A] underline">Chat with us directly</a>
          </p>
        </div>
      </section>

      <CTASection
        headline="Freshly made. Properly packed. Delivered across Mumbai."
        primaryCTA={{ label: "Send Enquiry", href: "#enquiry" }}
        secondaryCTA={{ label: "View Menu", href: "/menu" }}
      />
    </>
  );
}
