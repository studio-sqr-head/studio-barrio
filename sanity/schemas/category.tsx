import { defineType } from "sanity";
import { type PortableTextBlock } from "next-sanity";

export interface CategoryI {
  _id: string;
  title: string;
  description: PortableTextBlock[];
}

export const categoryTypeDefinition = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
