import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { type PortableTextBlock } from "next-sanity";

import { Category } from "@/app/(client)/components/category";
import { Typography } from "./typography";

export const ListItem = ({
  title,
  category,
  preview,
  href,
  cardImage,
}: {
  title: string;
  category: { title: string }[];
  preview: PortableTextBlock[];
  cardImage: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="cursor-pointer flex sm:flex-row flex-col">
      <div className="mb-3 sm:mb-0 w-full sm:w-1/3 sm:mr-8 mr-0">
        {cardImage}
      </div>

      <div className="flex flex-col justify-center gap-1 sm:w-2/3 w-full">
        <Typography variant="custom" className="text-2xl">
          {title}
        </Typography>
        <div className="flex gap-1">
          {category.map(({ title }) => (
            <Category
              key={`${title}-${Math.random().toString(36).substring(7)}`}
              label={title}
            />
          ))}
        </div>

        <PortableText
          value={preview}
          components={{
            block: ({ children }) => <p className="text-sm">{children}</p>,
          }}
        />
      </div>
    </Link>
  );
};
