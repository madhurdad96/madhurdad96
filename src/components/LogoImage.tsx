"use client";

export default function LogoImage({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <>
      <img
        src="/images/logo.png"
        alt="Paitruk पैत्रक"
        className={className}
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.style.display = "none";
          const fb = el.nextElementSibling as HTMLElement;
          if (fb) fb.style.display = "block";
        }}
      />
      <span
        className="hidden font-serif text-2xl text-[#FAF7F0] font-bold"
        style={{ display: "none" }}
      >
        Paitruk
      </span>
    </>
  );
}
