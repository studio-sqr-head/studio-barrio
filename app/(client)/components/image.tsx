import NextImage from "next/image";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

import { generateImageUrl } from "@/sanity/lib/utils";

export interface SanityImageProps {
  image?: SanityImageObject;
  alt?: string;
}

export function Image({ image, alt = "Cover image" }: SanityImageProps) {
  if (!image) {
    return null;
  }
  const img = generateImageUrl({ image });
  const imageUrl = img?.url();
  const blurImageUrl = img?.blur(20).url();

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: "100%", aspectRatio: "16/9", height: "auto" }}
    >
      {imageUrl && (
        <NextImage
          draggable={false}
          alt={alt}
          fill={true}
          src={imageUrl}
          placeholder="blur"
          className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
          blurDataURL={blurImageUrl}
        />
      )}
    </div>
  );
}
