import EnquiryForm from "@/components/EnquiryForm";
import CTASection from "@/components/CTASection";

const giftBoxes = [
  {
    name: "Mithaas Box",
    description: "A curated selection of Rajasthani sweets — besan chakki, mawa barfi, balushahi, and sohan halwa.",
    contents: ["Besan Chakki (200g)", "Mawa Barfi (150g)", "Balushahi × 4", "Sohan Halwa (100g)"],
    suitable: "Diwali, Raksha Bandhan, Eid, Birthdays",
    price: "₹ --",
  },
  {
    name: "Namkeen Delight Box",
    description: "A savoury treat — Bikaneri Bhujia, moong dal, mix namkeen, and a mini kachori.",
    contents: ["Bikaneri Bhujia (200g)", "Moong Dal (100g)", "Mix Namkeen (100g)", "Pyaaz Kachori × 2"],
    suitable: "Corporate gifting, festivals, casual gifting",
    price: "₹ --",
    highlight: true,
  },
  {
    name: "Heritage Grand Box",
    description: "The premium gifting experience — a mix of sweets, namkeen, achaar, and ghewar in a gift-worthy box.",
    contents: ["Ghewar × 1", "Assorted Sweets (300g)", "Bikaneri Bhujia (200g)", "Achaar Jar", "Premium packaging + ribbon"],
    suitable: "Weddings, corporate, bulk client gifting",
    price: "₹ --",
  },
  {
    name: "Ghewar Special Box",
    description: "For when only the most iconic Rajasthani dessert will do. Seasonal availability.",
    contents: ["Malai Ghewar × 2", "Rabdi Ghewar × 1", "Dry Fruit Ghewar × 1", "Gift box included"],
    suitable: "Teej, Holi, Diwali, Weddings",
    price: "₹ --",
  },
];

const occasions = [
  { emoji: "🪔", label: "Diwali" },
  { emoji: "🎆", label: "Holi" },
  { emoji: "🪢", label: "Raksha Bandhan" },
  { emoji: "💒", label: "Weddings" },
  { emoji: "🎂", label: "Birthdays" },
  { emoji: "🏢", label: "Corporate" },
  { emoji: "🎓", label: "Graduation" },
  { emoji: "🙏", label: "Puja & Functions" },
];

export default function GiftingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-24 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Festive Gifting
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Gift something rooted
              <br />
              <span className="text-[#8B1A1A]">in tradition.</span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Premium Rajasthani gifting boxes — sweets, namkeen, achaar, ghewar — beautifully packaged and delivered across Mumbai. Custom packaging available for bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquiry"
                className="bg-[#8B1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                Enquire for Bulk Gifting
              </a>
              {/* Replace with actual WhatsApp number */}
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Paitruk!%20I%20want%20to%20enquire%20about%20festive%20gifting."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#8B1A1A] text-[#8B1A1A] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#8B1A1A] hover:text-white transition-colors text-center"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Replace with premium gifting photo */}
          <div className="h-72 lg:h-[400px] rounded-3xl bg-[#F5EFE6] flex items-center justify-center">
            <div className="text-center text-[#8B1A1A] opacity-30">
              <div className="text-8xl mb-3">🎁</div>
              <div className="text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>Festive gift box photo here</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OCCASIONS ─── */}
      <section className="py-14 px-4 bg-[#8B1A1A] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-white/60 mb-6 uppercase tracking-widest" style={{ fontFamily: "-apple-system, sans-serif" }}>Perfect for</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 text-center">
            {occasions.map(({ emoji, label }) => (
              <div key={label}>
                <div className="text-3xl mb-1">{emoji}</div>
                <div className="text-xs text-white/80" style={{ fontFamily: "-apple-system, sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GIFT BOXES ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Our Gift Boxes
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              A box full of Rajasthan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {giftBoxes.map((box) => (
              <div
                key={box.name}
                className={`rounded-2xl p-7 border ${box.highlight ? "border-[#D4872A] ring-1 ring-[#D4872A]" : "border-[#f0ebe3]"} bg-white`}
              >
                {box.highlight && (
                  <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold block mb-2" style={{ fontFamily: "-apple-system, sans-serif" }}>
                    Best Seller
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "Georgia, serif" }}>{box.name}</h3>
                <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "-apple-system, sans-serif" }}>{box.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {box.contents.map((c) => (
                    <li key={c} className="text-sm text-gray-600 flex gap-2 items-start" style={{ fontFamily: "-apple-system, sans-serif" }}>
                      <span className="text-[#D4872A] mt-0.5">✦</span> {c}
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-400 mb-3 italic" style={{ fontFamily: "-apple-system, sans-serif" }}>
                  Suitable for: {box.suitable}
                </div>

                <div className="flex items-center justify-between">
                  {/* Replace price placeholder */}
                  <span className="text-xl font-bold text-[#8B1A1A]" style={{ fontFamily: "Georgia, serif" }}>{box.price}</span>
                  <a
                    href="#enquiry"
                    className="bg-[#8B1A1A] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#6B1414] transition-colors"
                    style={{ fontFamily: "-apple-system, sans-serif" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOM PACKAGING ─── */}
      <section className="py-16 px-4 bg-[#F5EFE6]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🎀</div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Custom packaging available
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "-apple-system, sans-serif" }}>
            For bulk corporate gifting orders, we offer custom-branded packaging with your company name or logo. Minimum 50 boxes. Tell us what you need and we&apos;ll make it happen.
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-[#D4872A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#b86e1a] transition-colors"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            Request Custom Packaging
          </a>
        </div>
      </section>

      {/* ─── ENQUIRY FORM ─── */}
      <section id="enquiry" className="py-20 px-4 bg-[#FAF7F2] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <EnquiryForm
            title="Bulk Gifting Enquiry"
            subtitle="Tell us the occasion, quantity, and box preference — we'll come back to you quickly."
            type="gifting"
          />
          <p className="text-center text-sm text-gray-500 mt-5" style={{ fontFamily: "-apple-system, sans-serif" }}>
            Prefer a quick chat?{" "}
            {/* Replace with actual WhatsApp number */}
            <a href="https://wa.me/91XXXXXXXXXX" className="text-[#8B1A1A] underline">Message us on WhatsApp</a>
          </p>
        </div>
      </section>

      <CTASection
        headline="Make every festival feel like Rajasthan."
        subtext="Not just a gift box. A memory."
        primaryCTA={{ label: "Enquire Now", href: "#enquiry" }}
        secondaryCTA={{ label: "View Full Menu", href: "/menu" }}
      />
    </>
  );
}
