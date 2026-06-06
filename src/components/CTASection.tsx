import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  headline,
  subtext,
  primaryCTA = { label: "Order Now", href: "/order" },
  secondaryCTA,
  dark = false,
}: CTASectionProps) {
  return (
    <section
      className={`py-20 px-4 text-center ${dark ? "bg-[#1a1a1a] text-white" : "bg-[#8B1A1A] text-white"}`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
          {headline}
        </h2>
        {subtext && (
          <p className="text-base opacity-80 mb-8 leading-relaxed" style={{ fontFamily: "-apple-system, sans-serif" }}>
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="bg-white text-[#8B1A1A] px-8 py-3.5 rounded-full font-semibold hover:bg-[#FAF7F2] transition-colors text-sm"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#8B1A1A] transition-colors text-sm"
              style={{ fontFamily: "-apple-system, sans-serif" }}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
