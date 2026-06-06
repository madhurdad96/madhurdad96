import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Paitruk | Authentic Rajasthani Food in Mumbai",
  description:
    "Paitruk / पैत्रक — Premium Rajasthani vegetarian food delivered across Mumbai. Kachoris, Dal Baati Churma, Ghewar, Sweets, Namkeen, and Festive Gifting.",
  keywords:
    "Rajasthani food Mumbai, Dal Baati Churma, Pyaaz Kachori, Ghewar, corporate snack boxes Mumbai, festive gifting Mumbai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
