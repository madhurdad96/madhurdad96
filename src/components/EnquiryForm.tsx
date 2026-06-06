"use client";
import { useState } from "react";

interface EnquiryFormProps {
  title?: string;
  subtitle?: string;
  type?: "general" | "corporate" | "gifting";
}

export default function EnquiryForm({
  title = "Send an Enquiry",
  subtitle = "We'll get back to you within a few hours.",
  type = "general",
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your form submission service (Formspree, Google Forms, etc.)
    // Example: fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(form) })
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-[#f0ebe3]">
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "Georgia, serif" }}>
          Thank you!
        </h3>
        <p className="text-gray-500 text-sm" style={{ fontFamily: "-apple-system, sans-serif" }}>
          We&apos;ve received your enquiry and will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-[#f0ebe3] shadow-sm">
      <h3 className="text-xl font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: "-apple-system, sans-serif" }}>
        {subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "-apple-system, sans-serif" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone *</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
          />
        </div>

        {(type === "corporate" || type === "gifting") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                {type === "corporate" ? "Company Name" : "Organisation"}
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder={type === "corporate" ? "Your company" : "Company / Event name"}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">
                Quantity / No. of Boxes
              </label>
              <input
                type="number"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                placeholder="e.g. 50"
                min="10"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Message</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us what you need…"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#8B1A1A] text-white py-3.5 rounded-full font-semibold hover:bg-[#6B1414] transition-colors text-sm"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}
