import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  category?: string;
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
  orderHref = "https://paitruk.dotpe.in",
}: ProductCardProps) {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl overflow-hidden group hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[4/3] bg-[#e8e8ed] overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt || name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-20">🍽️</div>
          </div>
        )}
      </div>
      <div className="p-6">
        {category && <p className="text-[#6e6e73] text-[11px] uppercase tracking-widest mb-1">{category}</p>}
        <h3 className="text-[#1d1d1f] text-[17px] font-semibold mb-1">{name}</h3>
        <p className="text-[#6e6e73] text-[13px] leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#1d1d1f] font-semibold text-[15px]">{price || "₹ —"}</span>
          <a
            href={orderHref}
            target={orderHref.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="bg-[#8B1A1A] text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-[#6B1414] transition-colors"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
