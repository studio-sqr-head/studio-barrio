import type { Metadata } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery, metadataQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";
import { generateImageUrl } from "@/sanity/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const [project, metadata] = await Promise.all([
    sanityFetch<ProjectI>({ query: projectQuery, params }),
    sanityFetch<Metadata>({ query: metadataQuery }),
  ]);

  if (!project?._id || !metadata?.title) {
    return {
      title: "404",
      description: "Not found",
    };
  }

  return {
    openGraph: {
      title: `${metadata?.title} | ${project?.title}`,
      description: `Portfolio project: ${project?.title}. ${project?.preview?.[0]?.children?.[0]?.text}`,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${project?.slug.current}`,
      images: [
        {
          url: generateImageUrl({ image: project?.mainImage })?.url(),
          alt: project?.title,
        },
      ],
    },
  };
}

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
