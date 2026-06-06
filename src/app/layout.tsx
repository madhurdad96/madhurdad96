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
    "Rajasthani food Mumbai, Dal Baati Churma delivery, Pyaaz Kachori Mumbai, Ghewar, Rajasthani sweets, corporate snack boxes Mumbai, festive gifting Mumbai",
  openGraph: {
    title: "Paitruk | Authentic Rajasthani Food in Mumbai",
    description: "Not just snacks. A box full of Rajasthan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
