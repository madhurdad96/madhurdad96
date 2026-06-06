import Link from "next/link";
import CTASection from "@/components/CTASection";

const orderChannels = [
  {
    name: "Order Directly",
    description: "Best prices. Direct support. Fresh delivery promise. No platform markup.",
    icon: "🌐",
    cta: "Order on Paitruk",
    href: "https://paitruk.dotpe.in",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "WhatsApp Order",
    description: "Talk to us directly, customise your order, get confirmation instantly.",
    icon: "💬",
    cta: "Order on WhatsApp",
    // Replace with actual WhatsApp number
    href: "https://wa.me/91XXXXXXXXXX?text=Hi%20Paitruk!%20I%27d%20like%20to%20place%20an%20order.",
    badge: "Fastest",
  },
  {
    name: "Swiggy",
    description: "Order on Swiggy for quick delivery. Standard platform pricing.",
    icon: "🟠",
    cta: "Order on Swiggy",
    // Replace with your actual Swiggy restaurant link
    href: "https://swiggy.com",
    badge: null,
  },
  {
    name: "Zomato",
    description: "Order on Zomato. Available in select Mumbai areas.",
    icon: "🔴",
    cta: "Order on Zomato",
    // Replace with your actual Zomato restaurant link
    href: "https://zomato.com",
    badge: null,
  },
];

const benefits = [
  { emoji: "💰", title: "Better Prices", body: "Direct orders skip the platform commission, which means savings for you." },
  { emoji: "🤝", title: "Personal Support", body: "Talk to us directly. Customise your order. Get updates in real time." },
  { emoji: "🌿", title: "Fresher Food", body: "We prepare orders fresh on confirmation — not sitting in a shelf." },
  { emoji: "📦", title: "Bulk Friendly", body: "For large orders, WhatsApp or website ordering is always better than apps." },
];

export default function OrderPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-24 px-4 bg-[#FAF7F2] text-center">
        <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
          Order Online
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-5" style={{ fontFamily: "Georgia, serif" }}>
          How would you like to order?
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto" style={{ fontFamily: "-apple-system, sans-serif" }}>
          Multiple ways to get Paitruk delivered to your door. For the best experience — and price — order directly.
        </p>
      </section>

      {/* ─── ORDER CHANNELS ─── */}
      <section className="py-4 pb-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {orderChannels.map((channel) => (
            <div
              key={channel.name}
              className={`rounded-2xl p-7 border flex flex-col ${
                channel.highlight
                  ? "border-[#8B1A1A] bg-[#8B1A1A] text-white"
                  : "border-[#f0ebe3] bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{channel.icon}</span>
                {channel.badge && (
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      channel.highlight ? "bg-white text-[#8B1A1A]" : "bg-[#D4872A] text-white"
                    }`}
                    style={{ fontFamily: "-apple-system, sans-serif" }}
                  >
                    {channel.badge}
                  </span>
                )}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {channel.name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 flex-1 ${channel.highlight ? "text-white/80" : "text-gray-500"}`}
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                {channel.description}
              </p>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-colors ${
                  channel.highlight
                    ? "bg-white text-[#8B1A1A] hover:bg-[#FAF7F2]"
                    : "bg-[#8B1A1A] text-white hover:bg-[#6B1414]"
                }`}
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                {channel.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY DIRECT ─── */}
      <section className="py-20 px-4 bg-[#F5EFE6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Why Order Direct?
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              Skip the middleman.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ emoji, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#f0ebe3]">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-base" style={{ fontFamily: "Georgia, serif" }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "-apple-system, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BULK CTA ─── */}
      <section className="py-14 px-4 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Need more than 10 items?
          </h2>
          <p className="text-gray-400 mb-6 text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>
            For corporate orders, bulk snack boxes, or festive gifting — talk to us directly for the best deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/corporate"
              className="bg-[#8B1A1A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#6B1414] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Corporate Orders
            </Link>
            <Link
              href="/gifting"
              className="border border-white text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              Festive Gifting
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Freshly made. Properly packed. Delivered across Mumbai."
        primaryCTA={{ label: "Order on Paitruk", href: "https://paitruk.dotpe.in" }}
        secondaryCTA={{ label: "View Menu", href: "/menu" }}
      />
    </>
  );
}
