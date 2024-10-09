import type { Metadata } from "next";
import "./globals.css";
import { DMSans } from "@/lib/font";

export const metadata: Metadata = {
  title: "Sly Villafania",
  description: "A portfolio created by Sly Villafania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-nav scroll-smooth">
      <body
        className={`${DMSans.className} bg-sly-background text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
