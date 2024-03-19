import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";
import { generateImageUrl } from "@/sanity/lib/utils";

import { ProjectCard } from "@/app/components/project-card";

export default async function Portfolio() {
  const [projects] = await Promise.all([
    sanityFetch<ProjectI[]>({ query: allProjectsQuery }),
  ]);

  return (
    <div className="flex flex-col">
      <ul className="grid sm:grid-cols-6 gap-12">
        {projects?.map(
          ({ slug, _id, title, mainImage, preview, category, link }, index) => {
            const src = generateImageUrl(mainImage?.asset?._ref as string);

            return (
              <li
                key={_id}
                className={`flex flex-col ${
                  index < 2 ? "sm:col-span-3" : "sm:col-span-2"
                } gap-4`}
              >
                <ProjectCard
                  imageSrc={src}
                  alt={mainImage?.alt ?? ""}
                  title={title}
                  category={category}
                  link={link}
                  preview={preview}
                />

                <div className="flex justify-start">
                  <Link href={`/portfolio/${slug.current}`}>
                    <button className="bg-orange-500 text-white px-3 py-2 rounded-md text-sm">
                      View Case
                    </button>
                  </Link>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
