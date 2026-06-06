import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({ headline, subtext, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-[#1d1d1f] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[40px] sm:text-[52px] font-semibold text-white leading-tight tracking-tight mb-5">
          {headline}
        </h2>
        {subtext && <p className="text-white/60 text-[17px] mb-10">{subtext}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              target={primaryCTA.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-white text-[#1d1d1f] px-9 py-3.5 rounded-full text-[17px] font-medium hover:bg-[#f5f5f7] transition-colors"
            >
              {primaryCTA.label}
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              target={secondaryCTA.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-9 py-3.5 rounded-full text-[17px] font-medium hover:bg-white/10 transition-colors"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
