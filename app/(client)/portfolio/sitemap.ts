import { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects] = await Promise.all([
    sanityFetch<ProjectI[]>({ query: allProjectsQuery }),
  ]);

  return projects.map(({ slug: { current } }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${current}`,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));
}
