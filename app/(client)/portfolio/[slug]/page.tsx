import groq from "groq";
import { Image } from "next-sanity/image";
import { PortableText } from "@portabletext/react";

import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";
import { generateImageUrl } from "@/sanity/lib/utils";
import { Chip } from "@/app/components/chip";
import { ProjectCard } from "@/app/components/project-card";

export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`*[_type == "project" && defined(slug.current)]{"slug": slug.current}`,
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const [project] = await Promise.all([
    sanityFetch<ProjectI>({ query: projectQuery, params }),
  ]);
  const { category, title, body, images } = project ?? {};

  return (
    <div className="container">
      <div className="mb-24">
        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <div className="flex mb-4">
              {category?.map(({ title }) => (
                <span key={title} className="mr-2">
                  <Chip key={title} label={title} />
                </span>
              ))}
            </div>

            <PortableText value={body} />
          </div>

          <div>
            {images?.map(({ alt, asset }) => {
              const src = generateImageUrl(asset?._ref as string);
              return (
                <Image
                  key={asset?._key}
                  src={src}
                  alt={alt ?? ""}
                  width={1000}
                  height={600}
                  className="mb-4 rounded-md"
                />
              );
            })}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Similar Projects</h2>

      <div className="grid sm:grid-cols-3 gap-8">
        {project?.relatedProjects?.map(
          ({ _id, title, mainImage, slug, preview }) => {
            const src = generateImageUrl(mainImage?.asset?._ref as string);
            return (
              <div key={_id}>
                <ProjectCard
                  alt={mainImage?.alt ?? ""}
                  title={title}
                  category={category}
                  link={{
                    href: `/portfolio/${slug.current}`,
                    linkText: "View Case",
                  }}
                  imageSrc={src}
                  preview={preview}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
