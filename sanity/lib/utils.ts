import imageUrlBuilder from "@sanity/image-url";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "@/sanity/lib/api";

const imageBuilder = imageUrlBuilder({
  projectId,
  dataset,
});

export const generateImageUrl = ({
  image,
}: {
  image: SanityImageObject;
}): typeof imageBuilder => {
  return imageBuilder.image(image).auto("format").fit("max");
};
