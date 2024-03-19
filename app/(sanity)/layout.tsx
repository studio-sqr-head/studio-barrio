export const metadata = {
  title: "CMS Studio Barrio",
  description: "A CMS interrface for a portfolio of projects for Studio Barrio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
