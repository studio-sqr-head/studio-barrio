import { MetadataRoute } from "next";

import type { MetadataI } from "@/sanity/schemas";
import { metadataQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const [metadata] = await Promise.all([
    sanityFetch<MetadataI>({ query: metadataQuery }),
  ]);

  const { description, title } = metadata ?? {};

  return {
    name: title ?? "Studio Barrio",
    short_name: title ?? "Studio Barrio",
    description:
      description ?? "Studio Barrio is a design UX studio based in Amsterdam.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  };
}
