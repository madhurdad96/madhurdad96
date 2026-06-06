interface TestimonialCardProps {
  name: string;
  location?: string;
  review: string;
  rating?: number;
}

export default function TestimonialCard({ name, location, review, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-[#f5f5f7] rounded-3xl p-8">
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#8B1A1A">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
          </svg>
        ))}
      </div>
      <p className="text-[#1d1d1f] text-[15px] leading-relaxed mb-6">&ldquo;{review}&rdquo;</p>
      <div>
        <div className="text-[#1d1d1f] text-[13px] font-semibold">{name}</div>
        {location && <div className="text-[#6e6e73] text-[12px]">{location}</div>}
      </div>
    </div>
  );
}
