import NextImage from "next/image";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

import { generateImageUrl } from "@/sanity/lib/utils";

export interface SanityImageProps {
  image?: SanityImageObject;
  width?: number;
  height?: number;
  size?: string;
  alt?: string;
}

export function Image({
  image,
  width = 2000,
  height = 1500,
  size,
  alt = "Cover image",
}: SanityImageProps) {
  if (!image) {
    return null;
  }
  const img = generateImageUrl({ image })?.height(height).width(width);
  const imageUrl = img?.url();
  const blurImageUrl = img?.blur(20).url();

  return (
    <>
      {imageUrl && (
        <NextImage
          draggable={false}
          className="image"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          placeholder="blur"
          blurDataURL={blurImageUrl}
        />
      )}
    </>
  );
}
