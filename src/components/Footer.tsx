import Link from "next/link";

const links = [
  { section: "Paitruk", items: [{ label: "Our Story", href: "/story" }, { label: "Menu", href: "/menu" }, { label: "Contact", href: "/contact" }] },
  { section: "Order", items: [{ label: "Order Online", href: "/order" }, { label: "Corporate Orders", href: "/corporate" }, { label: "Festive Gifting", href: "/gifting" }] },
  { section: "Contact", items: [
    { label: "+91 96106 12323", href: "https://wa.me/919610612323" },
    { label: "hello@paitruk.com", href: "mailto:hello@paitruk.com" },
    { label: "@paitruk.bombay", href: "https://instagram.com/paitruk.bombay" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] pt-16 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="text-[#1d1d1f] font-semibold text-base mb-1">Paitruk</div>
          <div className="text-[#6e6e73] text-sm mb-4">पैत्रक</div>
          <p className="text-[#6e6e73] text-[13px] leading-relaxed">
            Authentic Rajasthani vegetarian food, delivered across Mumbai.
          </p>
        </div>

        {links.map((col) => (
          <div key={col.section}>
            <div className="text-[#1d1d1f] text-[13px] font-semibold mb-4">{col.section}</div>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.label}>
                  {"href" in item && (item.href.startsWith("http") || item.href.startsWith("mailto")) ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors text-[13px]">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors text-[13px]">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-[#d2d2d7] flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-[#6e6e73] text-[12px]">Copyright © 2024 Paitruk. All rights reserved.</span>
        <span className="text-[#6e6e73] text-[12px]">Mumbai, Maharashtra</span>
      </div>
    </footer>
  );
}
