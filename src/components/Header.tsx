"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const nav = [
  { label: "Our Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Corporate", href: "/corporate" },
  { label: "Gifting", href: "/gifting" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-b border-[#d2d2d7]" : "bg-white/80 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Paitruk"
              className="h-8 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fb = e.currentTarget.nextElementSibling as HTMLElement;
                if (fb) fb.style.display = "block";
              }}
            />
            <span className="hidden text-[#1d1d1f] font-semibold text-lg tracking-tight">Paitruk</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-[#1d1d1f] hover:text-[#8B1A1A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B1A1A] text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-[#6B1414] transition-colors"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-[#1d1d1f]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect width="18" height="1.5" rx="0.75" fill="currentColor"
                style={{ transform: open ? "rotate(45deg) translateY(7.5px)" : "none", transformOrigin: "center", transition: "transform 0.2s" }} />
              <rect y="5.25" width="18" height="1.5" rx="0.75" fill="currentColor"
                style={{ opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
              <rect y="10.5" width="18" height="1.5" rx="0.75" fill="currentColor"
                style={{ transform: open ? "rotate(-45deg) translateY(-7.5px)" : "none", transformOrigin: "center", transition: "transform 0.2s" }} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#d2d2d7] bg-white px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-[#1d1d1f] border-b border-[#f5f5f7] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://paitruk.dotpe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-[#8B1A1A] text-white py-3 rounded-full text-[15px] font-medium"
            >
              Order Now
            </a>
          </div>
        )}
      </header>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#d2d2d7] px-6 py-3">
        <a
          href="https://paitruk.dotpe.in"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#8B1A1A] text-white py-3 rounded-full text-[15px] font-medium hover:bg-[#6B1414] transition-colors"
        >
          Order Now
        </a>
      </div>
    </>
  );
}
