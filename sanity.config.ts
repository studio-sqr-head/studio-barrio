"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */

import { PluginOptions, defineConfig } from "sanity";
import { StructureBuilder, structureTool } from "sanity/structure";

import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { schemas } from "@/sanity/schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["metadata", "header", "footer"]);
const singletonStructure = ({
  S,
  id,
  title,
}: {
  S: StructureBuilder;
  id: string;
  title: string;
}) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(id).documentId(id));

const config = defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            singletonStructure({ S, id: "metadata", title: "Metadata" }),
            singletonStructure({ S, id: "header", title: "Header" }),
            singletonStructure({ S, id: "footer", title: "Footer" }),
            S.documentTypeListItem("project").title("Projects"),
          ]),
    }),
  ].filter(Boolean) as PluginOptions[],
  schema: {
    types: schemas,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export { config };
export type SanityValues = typeof config;
