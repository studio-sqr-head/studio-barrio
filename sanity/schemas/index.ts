import { type ProjectI, projectTypeDefinition } from "@/sanity/schemas/project";
import {
  type CategoryI,
  categoryTypeDefinition,
} from "@/sanity/schemas/category";
import {
  type MetadataI,
  metadataTypeDefinition,
} from "@/sanity/schemas/singletons/metadata";
import {
  type HeaderI,
  headerTypeDefinition,
} from "@/sanity/schemas/singletons/header";
import {
  type FooterI,
  footerTypeDefinition,
} from "@/sanity/schemas/singletons/footer";

export const schemas = [
  projectTypeDefinition,
  categoryTypeDefinition,
  metadataTypeDefinition,
  headerTypeDefinition,
  footerTypeDefinition,
];

export type { ProjectI, CategoryI, MetadataI, HeaderI, FooterI };
