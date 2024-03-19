import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "@/sanity/lib/api";

export const generateImageUrl = (image: SanityImageSource) => {
  if (projectId === undefined || dataset === undefined) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET"
    );
  }
  const builder = imageUrlBuilder({
    projectId,
    dataset,
  });

  return builder.image(image).url();
};
