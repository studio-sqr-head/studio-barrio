import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Studio Barrio",
  description: "A portfolio of projects for Studio Barrio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-col min-h-screen p-6 max-w-6xl mx-auto bg-white w-full">
          <Header />
          <main className="flex-1 my-12">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
