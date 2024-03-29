import { Viewport, type Metadata } from "next";
import "@/styles/globals.css";
import { montserrat, arimo } from "@/styles/fonts";

import { Header } from "@/app/(client)/components/header";
import { Footer } from "@/app/(client)/components/footer";
import type { MetadataI } from "@/sanity/schemas";
import { metadataQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { generateImageUrl } from "@/sanity/lib/utils";
import { HeaderI, FooterI } from "@/sanity/schemas";
import { headerQuery, footerQuery } from "@/sanity/lib/queries";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF7C4D",
};
export async function generateMetadata(): Promise<Metadata> {
  const [metadata] = await Promise.all([
    sanityFetch<MetadataI>({ query: metadataQuery }),
  ]);
  const { ogImage, title, description, authors, keywords, category } =
    metadata ?? {};
  return {
    title,
    description,
    authors,
    keywords,
    category,
    twitter: {
      title,
      images: [
        {
          url: generateImageUrl({ image: ogImage })?.url(),
          alt: `A preview image for ${title}`,
        },
      ],
      creator: authors?.map((author) => author.name).join(", "),
      site: process.env.NEXT_PUBLIC_BASE_URL,
    },
    openGraph: {
      title,
      description: description,
      type: "website",
      url: process.env.NEXT_PUBLIC_BASE_URL,
      images: [
        {
          url: generateImageUrl({ image: ogImage })?.url(),
          alt: `A preview image for ${title}`,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([
    sanityFetch<HeaderI>({ query: headerQuery }),
    sanityFetch<FooterI>({ query: footerQuery }),
  ]);

  const { description, navItems, title } = header ?? {};
  const { email, kvk, name, phone } = footer ?? {};

  return (
    <html lang="en">
      <body className={`${arimo?.variable} ${montserrat?.variable}`}>
        <section className="flex flex-col min-h-screen w-full">
          <Header title={title} description={description} navItems={navItems} />
          <main className="flex-grow mx-auto max-w-7xl p-6 sm:p-8 lg:p-12">
            {children}
          </main>
          <Footer
            title={title}
            description={description}
            email={email}
            phone={phone}
            kvk={kvk}
            name={name}
          />
        </section>
      </body>
    </html>
  );
}
