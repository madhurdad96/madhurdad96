"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Corporate Orders", href: "/corporate" },
  { label: "Festive Gifting", href: "/gifting" },
  { label: "Order Online", href: "/order" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2] border-b border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo — place your logo file at public/images/logo.png */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Paitruk पैत्रक"
            className="h-10 w-auto"
            onError={(e) => {
              // Fallback text if logo image isn't present yet
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <span className="hidden items-center gap-2" aria-hidden="true">
            <span className="text-[#8B1A1A] font-bold text-2xl tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Paitruk</span>
            <span className="text-[#D4872A] text-sm hidden sm:block" style={{ fontFamily: "Georgia, serif" }}>पैत्रक</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#1a1a1a] hover:text-[#8B1A1A] transition-colors font-medium"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://paitruk.dotpe.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B1A1A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#6B1414] transition-colors"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            Order Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-[#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-current transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#e8e0d5] px-4 pb-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[#1a1a1a] hover:text-[#8B1A1A] font-medium border-b border-[#e8e0d5] last:border-0"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://paitruk.dotpe.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-[#8B1A1A] text-white px-5 py-3 rounded-full font-semibold hover:bg-[#6B1414] transition-colors"
          >
            Order Now
          </a>
        </div>
      )}

      {/* Sticky mobile order bar — shown on mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#8B1A1A] text-white text-center py-3 font-semibold text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>
        <a href="https://paitruk.dotpe.in" target="_blank" rel="noopener noreferrer" className="block">
          🛒 Order Now — Delivered Across Mumbai
        </a>
      </div>
    </header>
  );
}
