import { type ProjectI, projectTypeDefinition } from "./project";
import { type CategoryI, categoryTypeDefinition } from "./category";

export const schemas = [projectTypeDefinition, categoryTypeDefinition];

export type { ProjectI, CategoryI };
