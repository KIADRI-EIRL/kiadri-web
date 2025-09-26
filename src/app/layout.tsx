// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kiadri | Confianza que sana",
  description:
    "Educación digital y salud femenina con la guía de un ginecólogo obstetra.",
  metadataBase: new URL("https://kiadri.com"),
  openGraph: {
    title: "Kiadri",
    description: "Confianza que sana",
    url: "https://kiadri.com",
    siteName: "Kiadri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiadri",
    description: "Confianza que sana",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
