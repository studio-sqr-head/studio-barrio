import groq from "groq";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";
import { generateImageUrl } from "@/sanity/lib/utils";
import { Chip } from "@/app/(client)/components/chip";
import { ListItem } from "@/app/(client)/components/list-item";
import { Image } from "@/app/(client)/components/image";

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

  if (!project?._id) {
    return notFound();
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex">
            {category?.map(({ _id, title }) => (
              <span key={`${_id}-${Math.random().toString(36).substring(7)}`}>
                <Chip key={title} label={title} />
              </span>
            ))}
          </div>

          <PortableText value={body} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {images?.map((image, key) => {
            return (
              <div className={`mb-4`} key={key}>
                <Image
                  alt={image.alt || "Project Image"}
                  image={image}
                  width={500}
                  height={400}
                  size="(min-width: 640px) 500px, 100vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-t border-gray-200 my-12" />

      <section>
        {project?.relatedProjects?.map(
          ({ _id, title, mainImage, slug, preview }) => {
            return (
              <div
                key={`${_id}-related-project`}
                className="flex flex-col gap-4"
              >
                <ListItem
                  cardImage={
                    <Image
                      image={mainImage}
                      alt={mainImage.alt}
                      width={300}
                      height={200}
                      size="30vw"
                    />
                  }
                  title={title}
                  category={category}
                  preview={preview}
                  href={`/portfolio/${slug.current}`}
                />
              </div>
            );
          }
        )}
      </section>
    </div>
  );
}
