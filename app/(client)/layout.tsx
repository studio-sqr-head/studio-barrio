import type { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  const [metadata] = await Promise.all([
    sanityFetch<MetadataI>({ query: metadataQuery }),
  ]);
  return {
    title: metadata?.title,
    description: metadata?.description,
    authors: metadata?.authors,
    keywords: metadata?.keywords,
    category: metadata?.category,
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      type: "website",
      url: process.env.NEXT_PUBLIC_BASE_URL,
      images: [
        {
          url: generateImageUrl({ image: metadata?.ogImage })?.url(),
          alt: metadata?.title,
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

          <main className="flex-grow mx-auto max-w-7xl p-8 lg:p-12">
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
