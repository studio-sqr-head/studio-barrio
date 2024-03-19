import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Barrio Portfolio",
  description: "A portfolio of projects for Studio Barrio",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col">{children}</div>;
}
