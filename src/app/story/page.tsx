import CTASection from "@/components/CTASection";

export default function StoryPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-24 px-4 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Paitruk was born from a craving
            <br />
            <span className="text-[#8B1A1A]">Mumbai couldn&apos;t satisfy.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "-apple-system, sans-serif" }}>
            A Rajasthani family. A small Mumbai kitchen. An uncompromising belief in authentic flavour.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER SECTION ─── */}
      <section className="py-16 px-4 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder photo — replace with actual image */}
          <div className="h-[400px] lg:h-[500px] rounded-3xl bg-[#e8d9c4] flex items-center justify-center">
            <div className="text-center text-[#8B1A1A] opacity-30">
              <div className="text-8xl mb-4">👨‍🍳</div>
              <div className="text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>
                Founder photo here
                <br />(800×1000px recommended)
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Started from a small kitchen.
            </h2>
            {/* Replace the paragraphs below with the founder's actual story */}
            <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: "-apple-system, sans-serif" }}>
              <p>
                Growing up in Rajasthan, food was never just sustenance. Every meal was a ritual — the smell of baatis baking in the sun, the sound of ghee sizzling in a heavy iron pan, the warmth of churma on a winter morning.
              </p>
              <p>
                When I moved to Mumbai, I searched for that taste everywhere. What I found was disappointment — watered-down versions, shortcut recipes, food that looked Rajasthani but felt foreign.
              </p>
              <p>
                So I started making it myself. From my kitchen. For friends, neighbours, and eventually strangers who felt the same craving.
              </p>
              <p>
                That kitchen became Paitruk.
              </p>
            </div>

            {/* Founder name — replace with actual name */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8B1A1A] flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
                P
              </div>
              <div style={{ fontFamily: "-apple-system, sans-serif" }}>
                <div className="font-semibold text-[#1a1a1a]">[Founder Name]</div>
                <div className="text-sm text-gray-500">Founder, Paitruk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY PAITRUK ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              Why Paitruk exists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🌾",
                title: "Real Ingredients",
                body: "No compromises. Pure desi ghee, stone-ground atta, hand-picked spices. The same quality your grandmother would approve.",
              },
              {
                emoji: "🤝",
                title: "Consistency You Can Trust",
                body: "Every kachori, every sweet, every achaar is made with the same recipe, the same care, every single time. Your trust is our standard.",
              },
              {
                emoji: "❤️",
                title: "Authenticity Over Shortcuts",
                body: "We bake baatis the long way. We slow-cook dal for hours. We don't rush food. Rajasthan doesn't rush food.",
              },
            ].map(({ emoji, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-[#f0ebe3] text-center">
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-3" style={{ fontFamily: "Georgia, serif" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-20 px-4 bg-[#8B1A1A] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4" style={{ fontFamily: "-apple-system, sans-serif" }}>Our Mission</p>
          <blockquote className="text-3xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            &ldquo;To put Rajasthan back on the map through food.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
              The Journey
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-2" style={{ fontFamily: "Georgia, serif" }}>
              How we got here
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { year: "Year 1", event: "Started from a home kitchen in Mumbai. First customers were friends and family." },
              { year: "Year 2", event: "Word spread. Orders grew. First corporate snack box order — 25 boxes for a Bandra startup." },
              { year: "Year 3", event: "2,500+ monthly orders. 45% repeat customer rate. Festive gifting launched." },
              { year: "Today", event: "Delivering authentic Rajasthani food across Mumbai — and just getting started." },
            ].map(({ year, event }) => (
              <div key={year} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-sm font-bold text-[#8B1A1A]" style={{ fontFamily: "-apple-system, sans-serif" }}>{year}</span>
                </div>
                <div className="w-px bg-[#e8e0d5] self-stretch relative">
                  <div className="w-3 h-3 rounded-full bg-[#8B1A1A] absolute -left-1.5 top-1" />
                </div>
                <p className="text-gray-600 leading-relaxed pt-0.5" style={{ fontFamily: "-apple-system, sans-serif" }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Taste Paitruk for yourself."
        subtext="Made for offices, homes, festivals, and every craving in between."
        primaryCTA={{ label: "Order Now", href: "https://paitruk.dotpe.in" }}
        secondaryCTA={{ label: "View Our Menu", href: "/menu" }}
      />
    </>
  );
}
