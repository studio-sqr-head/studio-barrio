import { defineType } from "sanity";
import { type PortableTextBlock } from "next-sanity";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { Slug } from "sanity";

import { categoryTypeDefinition, type CategoryI } from "./category";

export interface ImageI extends SanityImageObject {
  alt: string;
}

export interface LinkI {
  href: string;
  linkText: string;
}

export interface ProjectI {
  _id: string;
  title: string;
  slug: Slug;
  preview: PortableTextBlock[];
  mainImage: ImageI;
  images: ImageI[];
  category: CategoryI[];
  publishedAt: string;
  body: PortableTextBlock[];
  link: LinkI;
  relatedProjects: ProjectI[];
}

export const projectTypeDefinition = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "preview",
      title: "Preview",
      type: "array",
      of: [{ type: "block" }],
      description:
        "A preview of the project, used in the project list. (max 500 characters)",
      validation(rule) {
        rule?.max;
        return (
          rule.required() &&
          rule
            .required()
            .min(10)
            .max(500)
            .warning("Preview should be between 10 and 509 characters")
        );
      },
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],

      options: {
        hotspot: true, // Enables the selection of a focus area on the image
      },
      validation: (Rule) =>
        Rule.required()
          .error("Main image is required")
          .warning("Should have an alt attribute."),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: categoryTypeDefinition.name } }],
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description:
        "The date the project was published to my portfolio. (not the date of the project itself).",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      description: "The main content of the project.",
      of: [{ type: "block" }],
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "link",
      title: "Link",
      type: "object",
      description: "Link to the project external page",
      fields: [
        {
          name: "href",
          title: "URL",
          type: "url",
          description: "Link to the project external page",
          validation(rule) {
            return rule.required();
          },
        },
        {
          name: "linkText",
          title: "Link text",
          type: "string",
          description: "Text to display for the link",
          validation(rule) {
            return rule.required();
          },
        },
      ],
      validation(rule) {
        return rule.required();
      },
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
});
