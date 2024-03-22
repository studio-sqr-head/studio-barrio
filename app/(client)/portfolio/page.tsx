import { sanityFetch } from "@/sanity/lib/fetch";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { ProjectI } from "@/sanity/schemas";
import { ListItem } from "@/app/(client)/components/list-item";
import { Image } from "@/app/(client)/components/image";

export default async function Portfolio() {
  const [projects] = await Promise.all([
    sanityFetch<ProjectI[]>({ query: allProjectsQuery }),
  ]);

  return (
    <div className="flex flex-col">
      <div className="grid sm:grid-cols-1 gap-12">
        {projects?.map(
          (
            {
              slug: { current: slug },
              _id,
              title,
              mainImage,
              preview,
              category,
            },
            index
          ) => {
            return (
              <div
                key={`${_id}-${Math.random().toString(36).substring(7)}`}
                className={`flex items-center ${
                  index < projects.length - 1
                    ? "border-b border-gray-200 pb-12"
                    : ""
                }`}
              >
                <ListItem
                  cardImage={<Image image={mainImage} alt={mainImage.alt} />}
                  title={title}
                  category={category}
                  preview={preview}
                  href={`/portfolio/${slug}`}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
