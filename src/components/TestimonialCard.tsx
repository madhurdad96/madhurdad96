interface TestimonialCardProps {
  name: string;
  location?: string;
  review: string;
  rating?: number;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  location,
  review,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0ebe3]">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-[#D4872A] text-sm">★</span>
        ))}
      </div>
      <p className="text-[#1a1a1a] leading-relaxed mb-4 text-sm italic" style={{ fontFamily: "Georgia, serif" }}>
        &quot;{review}&quot;
      </p>
      <div style={{ fontFamily: "-apple-system, sans-serif" }}>
        <div className="font-semibold text-sm text-[#1a1a1a]">{name}</div>
        {location && <div className="text-xs text-gray-400">{location}</div>}
      </div>
    </div>
  );
}
