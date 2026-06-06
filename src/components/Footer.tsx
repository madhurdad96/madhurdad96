import Link from "next/link";
import LogoImage from "@/components/LogoImage";

export default function Footer() {
  return (
    <footer className="bg-[#0D0B09] border-t border-[#C9A96E]/10 pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4"><LogoImage className="h-10 w-auto" /></div>
          <p className="font-sans text-[#FAF7F0]/40 text-sm leading-relaxed mb-5">
            Authentic Rajasthani food, made with real ingredients and Rajasthani heart. Delivered across Mumbai.
          </p>
          <a href="https://instagram.com/paitruk.bombay" target="_blank" rel="noopener noreferrer"
            className="font-sans text-[#FAF7F0]/40 hover:text-[#D4872A] transition-colors text-xs tracking-wide">
            @paitruk.bombay
          </a>
        </div>

        <div>
          <h4 className="font-sans font-semibold mb-5 text-xs uppercase tracking-widest text-[#C9A96E]">Quick Links</h4>
          <ul className="space-y-3 font-sans text-sm text-[#FAF7F0]/40">
            {[["Home", "/"], ["Our Story", "/story"], ["Menu", "/menu"], ["Order Online", "/order"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-[#FAF7F0] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold mb-5 text-xs uppercase tracking-widest text-[#C9A96E]">Services</h4>
          <ul className="space-y-3 font-sans text-sm text-[#FAF7F0]/40">
            {[["Corporate Orders", "/corporate"], ["Festive Gifting", "/gifting"], ["Home Delivery", "/order"], ["Bulk Snack Boxes", "/corporate"]].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-[#FAF7F0] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold mb-5 text-xs uppercase tracking-widest text-[#C9A96E]">Contact</h4>
          <ul className="space-y-3 font-sans text-sm text-[#FAF7F0]/40">
            <li>📍 Mumbai, Maharashtra</li>
            <li><a href="https://wa.me/919610612323" className="hover:text-[#FAF7F0] transition-colors">📱 +91 96106 12323</a></li>
            <li><a href="mailto:hello@paitruk.com" className="hover:text-[#FAF7F0] transition-colors">✉️ hello@paitruk.com</a></li>
          </ul>
          <a
            href="https://paitruk.dotpe.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A02020] text-white px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-[#D4872A] animate-pulse" />
            Order Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-14 pt-6 border-t border-[#C9A96E]/10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-sans text-xs text-[#FAF7F0]/25">© 2024 Paitruk. All rights reserved.</span>
        <span className="font-serif text-xs text-[#C9A96E]/40 italic">Made with love for Rajasthan</span>
      </div>
    </footer>
  );
}
