"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */

import { PluginOptions, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { schemas } from "@/sanity/schemas";

const config = defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  plugins: [structureTool()].filter(Boolean) as PluginOptions[],
  schema: {
    types: [...schemas],
  },
});

export { config };
export type SanityValues = typeof config;
