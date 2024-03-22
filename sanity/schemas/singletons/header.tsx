import { defineArrayMember, defineField, defineType } from "sanity";

export interface HeaderI {
  title: string;
  description: string;
  navItems: { title: string; slug: string }[];
}

export const headerTypeDefinition = defineType({
  name: "header",
  title: "Header",
  description: "The content of the header.",
  type: "document",

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
      name: "navItems",
      title: "Navigation items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "string",
            }),
          ],
        }),
      ],
      description: "The navigation items of the site.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
});
