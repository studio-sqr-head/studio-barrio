import NextImage from "next/image";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

import { generateImageUrl } from "@/sanity/lib/utils";

export interface SanityImageProps {
  image?: SanityImageObject;
  alt?: string;
  sizes: string;
}

export function Image({ image, alt = "Cover image", sizes }: SanityImageProps) {
  if (!image) {
    return null;
  }
  const img = generateImageUrl({ image });
  const imageUrl = img?.url();
  const blurImageUrl = img?.blur(20).url();

  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {imageUrl && (
        <NextImage
          draggable={false}
          alt={alt}
          fill={true}
          src={imageUrl}
          sizes={sizes}
          placeholder="blur"
          className="sm:object-contain object-cover"
          blurDataURL={blurImageUrl}
        />
      )}
    </div>
  );
}
