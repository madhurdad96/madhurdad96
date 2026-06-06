"use client";
import Link from "next/link";

/* ─── IMAGE GUIDE ───────────────────────────────────────────────────
   Save your food photos to public/images/ with these exact filenames:
   • snack-box.jpg   → the kachori + samosa tray with chutneys
   • dal-baati.jpg   → the dal baati churma thali
   • jalebi.jpg      → the jalebi plate
   • ghewar.jpg      → the malai ghewar with rose petal
   • founder.jpg     → Madhur Dad's founder photo
─────────────────────────────────────────────────────────────────── */

const highlights = [
  {
    img: "/images/snack-box.jpg",
    label: "Snack Box",
    tag: "Office · Gifting · Events",
    desc: "Crispy kachoris, samosas, and chutneys — packed fresh for every occasion.",
    href: "/corporate",
  },
  {
    img: "/images/dal-baati.jpg",
    label: "Dal Baati Churma",
    tag: "Rajasthan's Soul",
    desc: "Three dals, baked baatis, and sweet churma — the complete Rajasthani experience.",
    href: "/order",
  },
  {
    img: "/images/ghewar.jpg",
    label: "Malai Ghewar",
    tag: "Sweets · Gifting",
    desc: "Honeycomb pastry with dry fruits and a rose petal. Rajasthan on a plate.",
    href: "/menu",
  },
  {
    img: "/images/jalebi.jpg",
    label: "Jalebi",
    tag: "Sweets",
    desc: "Crisp, syrup-soaked spirals. Made fresh, served warm.",
    href: "/menu",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Andheri, Mumbai",
    review: "Dal Baati Churma brought tears to my eyes — it tasted exactly like my nani's kitchen in Jaipur. This is the real thing.",
    rating: 5,
  },
  {
    name: "Rohit Mehta",
    location: "HR Manager, Bandra",
    review: "Ordered 80 snack boxes for our Diwali celebration. Premium packaging, outstanding quality. Our team still talks about it.",
    rating: 5,
  },
  {
    name: "Ananya Verma",
    location: "Powai, Mumbai",
    review: "The Pyaaz Kachori is addictive. I've ordered every single weekend for three months. Paitruk is a household staple now.",
    rating: 5,
  },
];

const marqueeItems = [
  "Pyaaz Kachori", "Dal Baati Churma", "Malai Ghewar", "Jalebi",
  "Bikaneri Bhujia", "Besan Chakki", "Festive Gifting", "Corporate Snack Boxes",
  "Aam Papad Achaar", "Rajasthani Thali", "Kesaria Lassi", "Mawa Kachori",
];

function FoodImage({ src, alt, fallbackEmoji, fallbackText }: {
  src: string; alt: string; fallbackEmoji: string; fallbackText: string;
}) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.display = "none";
          const fb = el.nextElementSibling as HTMLElement;
          if (fb) fb.style.removeProperty("display");
        }}
      />
      <div
        className="w-full h-full bg-[#1A1714] items-center justify-center text-center p-8"
        style={{ display: "none" }}
      >
        <div className="text-5xl mb-2 opacity-20">{fallbackEmoji}</div>
        <div className="text-xs font-sans text-white/20">{fallbackText}</div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#0D0B09]">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden jaali-bg">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#8B1A1A]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4872A]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A96E]">Rajasthan × Mumbai</span>
              <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up">
              <span className="text-[#FAF7F0]">Authentic</span>
              <br />
              <span className="text-[#8B1A1A]">Rajasthan,</span>
              <br />
              <span className="text-[#FAF7F0] italic">delivered.</span>
            </h1>

            <p className="font-sans text-[#FAF7F0]/60 text-base sm:text-lg leading-relaxed max-w-md mb-10 animate-fade-up delay-200">
              Kachoris, Dal Baati Churma, Ghewar, Jalebi — made with real ingredients and Rajasthani heart. Now across Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
              <a
                href="https://paitruk.dotpe.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B1A1A] hover:bg-[#A02020] text-white px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,26,26,0.5)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4872A] animate-pulse" />
                Order Now
              </a>
              <Link
                href="/corporate"
                className="inline-flex items-center justify-center border border-[#C9A96E]/30 text-[#C9A96E] hover:border-[#C9A96E] hover:text-[#FAF7F0] px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
              >
                Bulk & Corporate →
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 animate-fade-up delay-500">
              {["2,500+ monthly orders", "45% repeat customers", "100% vegetarian"].map((t) => (
                <span key={t} className="glass text-[#FAF7F0]/60 text-xs px-4 py-1.5 rounded-full font-sans tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] glow-maroon group">
              <FoodImage src="/images/dal-baati.jpg" alt="Dal Baati Churma — Paitruk" fallbackEmoji="🍲" fallbackText="Add dal-baati.jpg to public/images/" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <div className="font-serif text-xl text-[#FAF7F0] font-bold">Dal Baati Churma</div>
                <div className="font-sans text-[#C9A96E] text-[10px] tracking-widest uppercase mt-0.5">Rajasthan&apos;s Soul Dish</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3">
              <div className="font-sans text-xs text-[#C9A96E] mb-0.5 tracking-wide">Monthly Orders</div>
              <div className="font-serif text-2xl text-[#FAF7F0] font-bold">2,500+</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3">
              <div className="font-sans text-xs text-[#C9A96E] mb-0.5 tracking-wide">Repeat Customers</div>
              <div className="font-serif text-2xl text-[#FAF7F0] font-bold">45%</div>
            </div>
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C9A96E]/10 pointer-events-none" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FAF7F0]/30">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E]/50 to-transparent" />
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="border-y border-[#C9A96E]/10 bg-[#0D0B09] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-4">
              <span className="font-serif text-[#FAF7F0]/40 text-sm italic">{item}</span>
              <span className="text-[#C9A96E]/30 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ FOOD GRID ══ */}
      <section className="py-28 px-5 sm:px-8 jaali-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A96E]">What We Make</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF7F0] font-bold">
              Not just food.
              <br />
              <span className="text-[#8B1A1A] italic">A piece of Rajasthan.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative overflow-hidden rounded-2xl hover-lift cursor-pointer ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/9]" : "aspect-[3/4]"} bg-[#1A1714] flex`}>
                  <FoodImage src={item.img} alt={item.label} fallbackEmoji="🍽️" fallbackText={`Add ${item.img.split("/").pop()}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09] via-[#0D0B09]/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] mb-1">{item.tag}</span>
                    <h3 className="font-serif text-2xl text-[#FAF7F0] font-bold mb-2">{item.label}</h3>
                    <p className="font-sans text-[#FAF7F0]/60 text-xs leading-relaxed mb-4 max-w-xs">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[#C9A96E] text-xs font-semibold group-hover:gap-2 transition-all">
                      Order Now <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border border-[#C9A96E]/30 text-[#C9A96E] hover:border-[#C9A96E] hover:text-[#FAF7F0] px-8 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STORY TEASER (light) ══ */}
      <section className="py-28 px-5 sm:px-8 bg-[#FAF7F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 opacity-5 jaali-bg" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-[#F0E9DC] flex">
              <FoodImage src="/images/founder.jpg" alt="Madhur Dad — Founder, Paitruk" fallbackEmoji="👨‍🍳" fallbackText="Add founder.jpg to public/images/" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 max-w-[220px] shadow-xl">
              <p className="font-serif text-sm italic text-[#1a1a1a] leading-relaxed">
                &ldquo;To put Rajasthan back on the map through food.&rdquo;
              </p>
              <p className="font-sans text-xs text-[#8B1A1A] mt-2 font-semibold">— Madhur Dad, Founder</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#8B1A1A]/40" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8B1A1A]">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1a1a] font-bold leading-tight mb-6">
              Started from a small kitchen.
              <br />
              <span className="text-[#8B1A1A] italic">Built for Mumbai.</span>
            </h2>
            <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed mb-4">
              Mumbai moves fast. But Paitruk brings food that makes you pause — food that tastes like someone&apos;s grandmother made it, because they did.
            </p>
            <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed mb-8">
              Madhur Dad started Paitruk from a single belief: that Mumbai deserved authentic Rajasthani food made the right way. No shortcuts. No compromises. Just Rajasthan, on your doorstep.
            </p>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#FAF7F0] hover:bg-[#8B1A1A] px-7 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CORPORATE BANNER (dark) ══ */}
      <section className="relative py-28 px-5 sm:px-8 overflow-hidden jaali-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#8B1A1A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]/40" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A96E]">For Offices & Teams</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF7F0] font-bold leading-tight mb-5">
              Office snacks that people
              <span className="text-[#D4872A] italic"> actually remember.</span>
            </h2>
            <p className="font-sans text-[#FAF7F0]/50 text-base leading-relaxed mb-8 max-w-md">
              Freshly packed. Delivered across Mumbai. Built for bulk. MOQ: 10 boxes — custom packaging available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/corporate"
                className="inline-flex items-center justify-center gap-2 bg-[#8B1A1A] hover:bg-[#A02020] text-white px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,26,26,0.4)]"
              >
                Enquire for Corporate Orders
              </Link>
              <a
                href="https://wa.me/919610612323?text=Hi%20Paitruk!%20I%27d%20like%20to%20enquire%20about%20corporate%20snack%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#C9A96E]/30 text-[#C9A96E] hover:border-[#C9A96E] px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-[#1A1714] glow-maroon flex group">
            <FoodImage src="/images/snack-box.jpg" alt="Paitruk Corporate Snack Box" fallbackEmoji="📦" fallbackText="Add snack-box.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09]/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ══ FESTIVE GIFTING (light) ══ */}
      <section className="py-28 px-5 sm:px-8 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4872A]/40" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4872A]">Festive Gifting</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1a1a] font-bold leading-tight mb-5">
              Gift something
              <br />
              <span className="text-[#8B1A1A] italic">rooted in tradition.</span>
            </h2>
            <p className="font-sans text-[#1a1a1a]/60 text-base leading-relaxed mb-8 max-w-md">
              Premium Rajasthani gifting boxes — sweets, namkeen, achaar, ghewar — beautifully packaged for Diwali, Holi, weddings, and every celebration.
            </p>
            <Link
              href="/gifting"
              className="inline-flex items-center gap-2 bg-[#D4872A] hover:bg-[#b86e1a] text-white px-8 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
            >
              Explore Gifting Options →
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square bg-[#F0E9DC] flex group">
            <FoodImage src="/images/ghewar.jpg" alt="Malai Ghewar — Paitruk Festive Gifting" fallbackEmoji="🎂" fallbackText="Add ghewar.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0]/20 to-transparent pointer-events-none" />
            <div className="absolute top-5 right-5 glass-light rounded-xl px-4 py-2 text-center">
              <div className="font-sans text-[10px] uppercase tracking-wider text-[#8B1A1A]">Signature</div>
              <div className="font-serif text-sm font-bold text-[#1a1a1a]">Malai Ghewar</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS (dark) ══ */}
      <section className="py-28 px-5 sm:px-8 jaali-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C9A96E]">Loved Across Mumbai</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#FAF7F0] font-bold">What our customers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-7 hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#D4872A] text-sm">★</span>
                  ))}
                </div>
                <p className="font-serif text-[#FAF7F0]/80 text-base italic leading-relaxed mb-5">&ldquo;{t.review}&rdquo;</p>
                <div>
                  <div className="font-sans font-semibold text-sm text-[#FAF7F0]">{t.name}</div>
                  <div className="font-sans text-xs text-[#C9A96E] mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/paitruk.bombay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C9A96E]/30 text-[#C9A96E] hover:border-[#C9A96E] hover:text-[#FAF7F0] px-7 py-3 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Follow @paitruk.bombay on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative py-28 px-5 sm:px-8 bg-[#8B1A1A] overflow-hidden">
        <div className="absolute inset-0 jaali-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FAF7F0]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FAF7F0]/20" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FAF7F0]/60">Order Today</span>
            <div className="h-px w-12 bg-[#FAF7F0]/20" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-bold mb-6">
            Bring Paitruk home today.
          </h2>
          <p className="font-sans text-[#FAF7F0]/60 text-base mb-10 max-w-lg mx-auto leading-relaxed">
            Mumbai moves fast. Paitruk brings food that feels rooted. Order now — delivered fresh to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF7F0] text-[#8B1A1A] hover:bg-white px-10 py-4 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,247,240,0.3)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A] animate-pulse" />
              Order Now
            </a>
            <a
              href="https://wa.me/919610612323?text=Hi%20Paitruk!%20I%27d%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-[#FAF7F0]/30 text-[#FAF7F0] hover:border-[#FAF7F0] px-10 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
