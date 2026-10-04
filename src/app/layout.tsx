import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Edward Polanía | Cirugía de nariz y cirugía facial en Neiva",
  description:
    "Rinoplastia, cirugía de senos nasales, blefaroplastia y otoplastia con el Dr. Edward Polanía en Neiva, Huila. Agenda tu valoración por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Figtree:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
