"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */

import { PluginOptions, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import {} from "@/sanity/schemas";

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: [],
  },
  plugins: [structureTool()].filter(Boolean) as PluginOptions[],
});
