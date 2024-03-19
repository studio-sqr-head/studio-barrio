import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { type PortableTextBlock } from "next-sanity";

import { Chip } from "@/app/components/chip";

export const ProjectCard = ({
  imageSrc,
  alt,
  title,
  category,
  link,
  preview,
}: {
  imageSrc: string;
  alt: string;
  title: string;
  category: { title: string }[];
  link: { href: string; linkText: string };
  preview: PortableTextBlock[];
}) => {
  return (
    <div>
      <div className="mb-2 rounded-md">
        <Image
          src={imageSrc}
          alt={alt ?? ""}
          className="object-cover rounded-md h-64"
          width={600}
          height={400}
        />
      </div>

      <div className="mb-2 inline-flex justify-between align-middle">
        <h2 className="text-2xl font-bold mr-1">{title}</h2>

        <Link href={link ? link?.href : "/"} passHref replace>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>
      <div className="flex gap-1 mb-2">
        {category.map((cat) => (
          <Chip key={cat.title} label={cat.title} />
        ))}
      </div>

      <PortableText value={preview} />
    </div>
  );
};
