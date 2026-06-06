import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  category?: string;
  // Replace imageSrc with actual product image path, e.g. "/images/pyaaz-kachori.jpg"
  imageSrc?: string;
  imageAlt?: string;
  orderHref?: string;
}

export default function ProductCard({
  name,
  description,
  price,
  category,
  imageSrc,
  imageAlt,
  orderHref = "/order",
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift border border-[#f0ebe3]">
      {/* Product image — replace imageSrc with actual image */}
      <div className="h-48 bg-[#F5EFE6] flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={imageAlt || name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center text-[#8B1A1A] opacity-40">
            <div className="text-5xl mb-2">🍱</div>
            <div className="text-xs" style={{ fontFamily: "-apple-system, sans-serif" }}>Image coming soon</div>
          </div>
        )}
      </div>

      <div className="p-5">
        {category && (
          <span className="text-xs uppercase tracking-widest text-[#D4872A] font-semibold" style={{ fontFamily: "-apple-system, sans-serif" }}>
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-[#1a1a1a] mt-1 mb-1" style={{ fontFamily: "Georgia, serif" }}>
          {name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontFamily: "-apple-system, sans-serif" }}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          {/* Replace price placeholder with actual pricing */}
          <span className="text-[#8B1A1A] font-bold text-base" style={{ fontFamily: "-apple-system, sans-serif" }}>
            {price || "₹ --"}
          </span>
          <Link
            href={orderHref}
            className="bg-[#8B1A1A] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#6B1414] transition-colors"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
