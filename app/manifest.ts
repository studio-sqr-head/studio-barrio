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
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF7C4D",
    start_url: "/portfolio",
    orientation: "portrait",
    id: "com.studiobarrio",
    lang: "en",
    display_override: ["standalone"],
  };
}
