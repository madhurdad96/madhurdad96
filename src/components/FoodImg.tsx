"use client";

interface FoodImgProps {
  src: string;
  alt: string;
  fallbackEmoji?: string;
  fallbackText?: string;
  className?: string;
  containerClassName?: string;
}

export default function FoodImg({
  src,
  alt,
  fallbackEmoji = "🍽️",
  fallbackText,
  className = "w-full h-full object-cover",
  containerClassName = "w-full h-full",
}: FoodImgProps) {
  return (
    <div className={`${containerClassName} relative`}>
      <img
        src={src}
        alt={alt}
        className={`${className} absolute inset-0 group-hover:scale-105 transition-transform duration-700`}
        style={{ objectFit: "cover" }}
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.opacity = "0";
          const fb = el.nextElementSibling as HTMLElement;
          if (fb) fb.style.opacity = "1";
        }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
        style={{ opacity: 0, transition: "opacity 0.3s" }}
      >
        <div className="text-5xl mb-2 opacity-20">{fallbackEmoji}</div>
        {fallbackText && (
          <div className="text-xs font-sans text-white/20">{fallbackText}</div>
        )}
      </div>
    </div>
  );
}
