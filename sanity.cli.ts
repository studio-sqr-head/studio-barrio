import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "@/sanity/lib/api";

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
});
