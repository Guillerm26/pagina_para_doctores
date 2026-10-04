import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Olga Cruz | Fonoaudióloga en Neiva y Garzón, Huila",
  description:
    "Fonoaudióloga especialista en exámenes auditivos neonatales. Atención en Neiva y Garzón, Huila.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

