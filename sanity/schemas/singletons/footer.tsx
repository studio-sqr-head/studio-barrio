import { defineArrayMember, defineField, defineType } from "sanity";

export interface FooterI {
  name: string;
  email: string;
  phone: string;
  kvk: string;
}

export const footerTypeDefinition = defineType({
  name: "footer",
  title: "Footer",
  description: "The content of the footer.",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the site owner.",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "The email of the site owner.",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "The phone number of the site owner.",
    }),
    defineField({
      name: "kvk",
      title: "KVK",
      type: "string",
      description: "The KVK number of the site owner.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
