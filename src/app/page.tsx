import Link from "next/link";

/*
  IMAGE FILENAMES — save to public/images/
  hero.jpg        → your best food shot (dal baati or snack box)
  snack-box.jpg   → kachori + samosa tray
  dal-baati.jpg   → dal baati churma thali
  ghewar.jpg      → malai ghewar with rose petal
  jalebi.jpg      → jalebi plate
  founder.jpg     → Madhur Dad photo
  logo.png        → पैत्रक logo
*/

const products = [
  { name: "Snack Box", tag: "Office · Events · Gifting", img: "/images/snack-box.jpg", href: "/corporate" },
  { name: "Dal Baati Churma", tag: "Rajasthan's Soul Dish", img: "/images/dal-baati.jpg", href: "/order" },
  { name: "Malai Ghewar", tag: "Sweets · Gifting", img: "/images/ghewar.jpg", href: "/menu" },
  { name: "Jalebi", tag: "Fresh Sweets", img: "/images/jalebi.jpg", href: "/menu" },
];

const stats = [
  { value: "2,500+", label: "Monthly Orders" },
  { value: "45%", label: "Repeat Customers" },
  { value: "100%", label: "Vegetarian" },
  { value: "Mumbai", label: "Wide Delivery" },
];

const testimonials = [
  { name: "Priya Sharma", location: "Andheri", review: "Dal Baati Churma brought tears to my eyes — it tasted exactly like my nani's kitchen in Jaipur. This is the real thing." },
  { name: "Rohit Mehta", location: "Bandra", review: "Ordered 80 snack boxes for our Diwali celebration. Premium packaging, outstanding quality. Our team still talks about it." },
  { name: "Ananya Verma", location: "Powai", review: "The Pyaaz Kachori is addictive. I've ordered every weekend for three months. Paitruk is a household staple now." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#6e6e73] text-[15px] mb-4">Rajasthan × Mumbai</p>
          <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6">
            Authentic Rajasthan,<br />
            <span className="text-[#8B1A1A]">delivered.</span>
          </h1>
          <p className="text-[19px] text-[#6e6e73] leading-relaxed max-w-xl mx-auto mb-10">
            Kachoris, Dal Baati Churma, Ghewar, and more — made with real ingredients, delivered fresh across Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B1A1A] text-white px-8 py-3.5 rounded-full text-[17px] font-medium hover:bg-[#6B1414] transition-colors"
            >
              Order Now
            </a>
            <Link
              href="/menu"
              className="bg-[#f5f5f7] text-[#1d1d1f] px-8 py-3.5 rounded-full text-[17px] font-medium hover:bg-[#e8e8ed] transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="px-6 pb-24 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#f5f5f7] aspect-[16/7]">
          <img
            src="/images/hero.jpg"
            alt="Paitruk food"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-t border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-[40px] font-semibold text-[#1d1d1f] tracking-tight">{value}</div>
              <div className="text-[#6e6e73] text-[13px] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] tracking-tight mb-4">
              What we make.
            </h2>
            <p className="text-[#6e6e73] text-[17px] max-w-lg mx-auto">
              Every dish rooted in Rajasthan. Every batch made fresh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="group block rounded-3xl overflow-hidden bg-[#f5f5f7] hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="px-7 py-5">
                  <p className="text-[#6e6e73] text-[12px] uppercase tracking-widest mb-1">{p.tag}</p>
                  <h3 className="text-[#1d1d1f] text-[19px] font-semibold">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="text-[#8B1A1A] text-[15px] font-medium hover:underline"
            >
              View full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-[#e8e8ed]">
            <img
              src="/images/founder.jpg"
              alt="Madhur Dad — Founder, Paitruk"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#6e6e73] text-[13px] uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-6">
              Started from a<br />small kitchen.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-4">
              Madhur Dad started Paitruk from a single belief — that Mumbai deserved authentic Rajasthani food made the right way. No shortcuts. No compromises.
            </p>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-10 italic">
              "To put Rajasthan back on the map through food."
            </p>
            <Link
              href="/story"
              className="text-[#8B1A1A] text-[15px] font-medium hover:underline"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORPORATE ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#6e6e73] text-[13px] uppercase tracking-widest mb-4">For Offices & Teams</p>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-6">
              Office snacks people<br />actually remember.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-10">
              Freshly packed snack boxes delivered across Mumbai. Minimum 10 boxes. Custom packaging available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/corporate"
                className="bg-[#8B1A1A] text-white px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#6B1414] transition-colors text-center"
              >
                Enquire Now
              </Link>
              <a
                href="https://wa.me/919610612323?text=Hi%20Paitruk!%20I%27d%20like%20to%20enquire%20about%20corporate%20snack%20boxes."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5f5f7] text-[#1d1d1f] px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#e8e8ed] transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#f5f5f7]">
            <img
              src="/images/snack-box.jpg"
              alt="Paitruk Snack Box"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── GIFTING ── */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden aspect-square bg-[#e8e8ed]">
            <img
              src="/images/ghewar.jpg"
              alt="Paitruk Festive Gifting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[#6e6e73] text-[13px] uppercase tracking-widest mb-4">Festive Gifting</p>
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] leading-tight tracking-tight mb-6">
              Gift something<br />worth remembering.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-10">
              Premium Rajasthani gifting boxes — sweets, namkeen, achaar, ghewar — for Diwali, weddings, and every celebration.
            </p>
            <Link
              href="/gifting"
              className="text-[#8B1A1A] text-[15px] font-medium hover:underline"
            >
              Explore gifting options →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[40px] sm:text-[48px] font-semibold text-[#1d1d1f] tracking-tight">
              Loved across Mumbai.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#8B1A1A">
                      <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1d1d1f] text-[15px] leading-relaxed mb-6">"{t.review}"</p>
                <div>
                  <div className="text-[#1d1d1f] text-[13px] font-semibold">{t.name}</div>
                  <div className="text-[#6e6e73] text-[12px]">{t.location}, Mumbai</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/paitruk.bombay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B1A1A] text-[15px] font-medium hover:underline"
            >
              Follow @paitruk.bombay →
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 bg-[#1d1d1f] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[40px] sm:text-[56px] font-semibold text-white leading-tight tracking-tight mb-6">
            Bring Paitruk<br />home today.
          </h2>
          <p className="text-white/60 text-[17px] mb-10">
            Freshly made. Delivered across Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1d1d1f] px-9 py-3.5 rounded-full text-[17px] font-medium hover:bg-[#f5f5f7] transition-colors"
            >
              Order Now
            </a>
            <a
              href="https://wa.me/919610612323?text=Hi%20Paitruk!%20I%27d%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-9 py-3.5 rounded-full text-[17px] font-medium hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
