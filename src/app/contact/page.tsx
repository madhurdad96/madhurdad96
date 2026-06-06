import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="py-20 px-4 bg-[#FAF7F2] text-center">
        <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
          Say Hello
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mt-3 mb-5" style={{ fontFamily: "Georgia, serif" }}>
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto" style={{ fontFamily: "-apple-system, sans-serif" }}>
          For orders, corporate enquiries, bulk gifting, or just to say you loved the kachori — we&apos;re here.
        </p>
      </section>

      {/* ─── CONTACT GRID ─── */}
      <section className="py-4 pb-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: form */}
          <div>
            <EnquiryForm
              title="Send us a message"
              subtitle="We'll respond within a few hours. Guaranteed."
              type="general"
            />
          </div>

          {/* Right: contact info */}
          <div className="space-y-6">
            {/* WhatsApp — replace number */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3]">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: "-apple-system, sans-serif" }}>
                Fastest way to reach us. For orders, enquiries, or anything.
              </p>
              {/* Replace with actual WhatsApp number */}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20BD5A] transition-colors"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email — replace address */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3]">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>Email</h3>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: "-apple-system, sans-serif" }}>
                For bulk orders, partnerships, and formal enquiries.
              </p>
              {/* Replace with actual email */}
              <a href="mailto:hello@paitruk.com" className="text-[#8B1A1A] font-semibold text-sm underline" style={{ fontFamily: "-apple-system, sans-serif" }}>
                hello@paitruk.com
              </a>
            </div>

            {/* Location — replace address */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3]">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>Location</h3>
              <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: "-apple-system, sans-serif" }}>
                {/* Replace with actual address */}
                [Your full address, Mumbai, Maharashtra]
              </p>
              {/* Google Maps embed placeholder — replace src with actual embed URL from Google Maps */}
              <div className="h-40 bg-[#F5EFE6] rounded-xl flex items-center justify-center text-sm text-gray-400" style={{ fontFamily: "-apple-system, sans-serif" }}>
                <div className="text-center">
                  <div className="text-3xl mb-1">🗺️</div>
                  Google Maps embed here<br />
                  <span className="text-xs">(paste iframe from Google Maps)</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3]">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>Follow Paitruk</h3>
              <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: "-apple-system, sans-serif" }}>
                Stay updated with new dishes, festive specials, and behind-the-scenes.
              </p>
              {/* Replace href with actual Instagram profile */}
              <a
                href="https://instagram.com/paitruk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#D4872A] text-[#D4872A] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#D4872A] hover:text-white transition-colors"
                style={{ fontFamily: "-apple-system, sans-serif" }}
              >
                @paitruk on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
