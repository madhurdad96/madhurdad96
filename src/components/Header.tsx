"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Corporate", href: "/corporate" },
  { label: "Gifting", href: "/gifting" },
  { label: "Order", href: "/order" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0B09]/90 backdrop-blur-xl border-b border-[#C9A96E]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Place logo at public/images/logo.png */}
            <img
              src="/images/logo.png"
              alt="Paitruk पैत्रक"
              className="h-9 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fb = e.currentTarget.nextElementSibling as HTMLElement;
                if (fb) fb.style.display = "block";
              }}
            />
            <span
              className="hidden text-[#FAF7F0] font-bold text-xl tracking-tight group-hover:text-[#D4872A] transition-colors"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Paitruk
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#FAF7F0]/70 hover:text-[#D4872A] transition-colors tracking-wide font-sans"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#A02020] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,26,26,0.5)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4872A] animate-pulse" />
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-[#FAF7F0]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-px bg-current mb-1.5 transition-all origin-center" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "none" }} />
            <div className="w-5 h-px bg-current mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
            <div className="w-5 h-px bg-current transition-all origin-center" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[#0D0B09]/95 backdrop-blur-xl border-t border-[#C9A96E]/10 px-5 pt-4 pb-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[#FAF7F0]/80 hover:text-[#D4872A] font-medium border-b border-[#C9A96E]/10 last:border-0 tracking-wide text-sm"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-[#8B1A1A] text-white py-3.5 rounded-full font-semibold text-sm tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4872A] animate-pulse" />
              Order Now
            </a>
          </div>
        )}
      </header>

      {/* Sticky mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <a
          href="https://paitruk.dotpe.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#8B1A1A] text-white text-sm font-semibold py-4 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4872A] animate-pulse" />
          Order Now — Delivered Across Mumbai
        </a>
      </div>
    </>
  );
}
