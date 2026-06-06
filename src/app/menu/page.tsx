import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";

const categories = [
  {
    id: "kachoris",
    name: "Kachoris & Snacks",
    emoji: "🥙",
    items: [
      { name: "Pyaaz Kachori", description: "Crispy pastry filled with spiced onions. Mumbai's most missed Jaipur snack.", price: "₹ --" },
      { name: "Mawa Kachori", description: "A sweet, rich kachori filled with khoya and dry fruits. Festive favourite.", price: "₹ --" },
      { name: "Samosa", description: "Classic triangular pastry with spiced potato filling. Made fresh, every batch.", price: "₹ --" },
    ],
  },
  {
    id: "dal-baati",
    name: "Dal Baati Churma",
    emoji: "🍲",
    items: [
      { name: "Dal Baati Churma (Full)", description: "3 baatis, two types of dal, churma, and ghee. The complete Rajasthani experience.", price: "₹ --" },
      { name: "Dal Baati Churma (Half)", description: "2 baatis, dal, churma, and ghee. Perfect for a solo meal.", price: "₹ --" },
    ],
  },
  {
    id: "thalis",
    name: "Thalis & Meals",
    emoji: "🍱",
    items: [
      { name: "Rajasthani Thali", description: "A full spread — baati, dal, gatte ki sabzi, ker sangri, raita, churma, and more.", price: "₹ --" },
      { name: "Mini Thali", description: "Curated smaller portion — ideal for a quick, satisfying lunch.", price: "₹ --" },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    emoji: "🍬",
    items: [
      { name: "Besan Chakki", description: "Melt-in-your-mouth besan fudge in pure desi ghee. A Rajasthani staple.", price: "₹ --" },
      { name: "Mawa Barfi", description: "Dense, creamy, and delicately sweet milk fudge.", price: "₹ --" },
      { name: "Sohan Halwa", description: "Translucent, chewy halwa with saffron and nuts. Agra meets Rajasthan.", price: "₹ --" },
      { name: "Balushahi", description: "Flaky, glazed pastry dunked in sugar syrup. India's doughnut.", price: "₹ --" },
    ],
  },
  {
    id: "ghewar",
    name: "Ghewar",
    emoji: "🎂",
    items: [
      { name: "Malai Ghewar", description: "Honeycomb pastry soaked in ghee, topped with thick malai cream.", price: "₹ --" },
      { name: "Rabdi Ghewar", description: "Classic ghewar poured with reduced saffron rabdi.", price: "₹ --" },
      { name: "Dry Fruit Ghewar", description: "Premium ghewar topped with a generous layer of pistachios and almonds.", price: "₹ --" },
    ],
  },
  {
    id: "snack-boxes",
    name: "Snack Boxes",
    emoji: "📦",
    items: [
      { name: "Classic Snack Box", description: "Pyaaz kachori, namkeen mix, and one sweet. Perfect for gifting or office snacking.", price: "₹ --" },
      { name: "Premium Gift Box", description: "Curated assortment — kachori, chakki, namkeen, and achaar in premium packaging.", price: "₹ --" },
      { name: "Corporate Snack Box", description: "Scalable, neatly packed — 10 to 500 boxes. MOQ: 10.", price: "₹ --" },
    ],
  },
  {
    id: "achaar",
    name: "Achaar",
    emoji: "🫙",
    items: [
      { name: "Aam Papad Achaar", description: "Sun-dried mango strips with Rajasthani spices. Tangy and addictive.", price: "₹ --" },
      { name: "Nimbu Achaar", description: "Whole lemons preserved with salt, red chilli, and mustard oil.", price: "₹ --" },
      { name: "Lahsun Achaar", description: "Garlic pickled in mustard oil with whole spices. Bold and pungent.", price: "₹ --" },
    ],
  },
  {
    id: "namkeen",
    name: "Namkeen",
    emoji: "🥜",
    items: [
      { name: "Bikaneri Bhujia", description: "Ultra-thin, crispy, perfectly spiced — the original and the best.", price: "₹ --" },
      { name: "Moong Dal Namkeen", description: "Roasted split moong with a light chilli kick. Hard to stop eating.", price: "₹ --" },
      { name: "Mix Namkeen", description: "A Rajasthani snack medley — sev, bhujia, peanuts, and fried lentils.", price: "₹ --" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    emoji: "🥛",
    items: [
      { name: "Masala Chaas", description: "Spiced buttermilk with roasted cumin, coriander, and mint. Cooling and refreshing.", price: "₹ --" },
      { name: "Kesaria Lassi", description: "Thick Rajasthani lassi with saffron, cardamom, and rose petals.", price: "₹ --" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2] text-center">
        <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
          What We Make
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-4" style={{ fontFamily: "Georgia, serif" }}>
          Our Menu
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto" style={{ fontFamily: "-apple-system, sans-serif" }}>
          Every item made fresh. Every recipe rooted in Rajasthan. Prices marked — replace the dashes below with actual pricing.
        </p>
      </section>

      {/* ─── CATEGORY NAV ─── */}
      <nav className="sticky top-16 z-30 bg-[#FAF7F2] border-b border-[#e8e0d5] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 py-3 whitespace-nowrap">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-[#e8e0d5] hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              {c.emoji} {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── CATEGORIES ─── */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-16 px-4 bg-[#FAF7F2] scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{cat.emoji}</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
                {cat.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <ProductCard key={item.name} {...item} category={cat.name} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to order?"
        subtext="Freshly made. Properly packed. Delivered across Mumbai."
        primaryCTA={{ label: "Order Now", href: "https://paitruk.dotpe.in" }}
        secondaryCTA={{ label: "Bulk / Corporate Orders", href: "/corporate" }}
      />
    </>
  );
}
