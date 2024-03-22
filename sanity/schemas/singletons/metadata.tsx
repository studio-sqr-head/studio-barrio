import { RobotIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export interface MetadataI {
  title: string;
  description: string;
  authors: { name: string }[];
  keywords: string[];
  category: string;
  ogImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export const metadataTypeDefinition = defineType({
  name: "metadata",
  title: "Metadata",
  description: "Metadata for the site. Used for SEO and social sharing.",
  type: "document",
  icon: RobotIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the site.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A description of the site.",
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
          ],
        }),
      ],
      description: "The authors of the site.",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
      description: "Keywords for the site.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "The category of the site.",
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Metadata",
      };
    },
  },
});
