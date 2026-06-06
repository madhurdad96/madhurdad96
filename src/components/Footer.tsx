import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-24 lg:pb-16" style={{ fontFamily: "-apple-system, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="text-[#8B1A1A] font-bold text-2xl mb-1" style={{ fontFamily: "Georgia, serif" }}>Paitruk</div>
          <div className="text-[#D4872A] text-sm mb-4" style={{ fontFamily: "Georgia, serif" }}>पैत्रक</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Authentic Rajasthani food, made with real ingredients and Rajasthani heart. Delivered across Mumbai.
          </p>
          {/* Replace with actual social links */}
          <div className="flex gap-4 mt-5">
            <a href="https://instagram.com/paitruk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4872A] transition-colors text-sm">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-[#D4872A] transition-colors text-sm">Facebook</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { label: "Home", href: "/" },
              { label: "Our Story", href: "/story" },
              { label: "Menu", href: "/menu" },
              { label: "Order Online", href: "/order" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { label: "Corporate Orders", href: "/corporate" },
              { label: "Festive Gifting", href: "/gifting" },
              { label: "Home Delivery", href: "/order" },
              { label: "Bulk Snack Boxes", href: "/corporate" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {/* Replace with actual address, phone, email */}
            <li>📍 Mumbai, Maharashtra</li>
            <li>
              <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-white transition-colors">
                📱 WhatsApp: +91 XXXX XXX XXX
              </a>
            </li>
            <li>
              <a href="mailto:hello@paitruk.com" className="hover:text-white transition-colors">
                ✉️ hello@paitruk.com
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-block bg-[#8B1A1A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#6B1414] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <span>© 2024 Paitruk. All rights reserved.</span>
        <span>Made with ❤️ for Rajasthan</span>
      </div>
    </footer>
  );
}
