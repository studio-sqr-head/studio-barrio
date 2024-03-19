import { groq } from "next-sanity";

export const categoryFields = groq`
    title,
    description,
    color,
`;

export const projectFields = groq`
    _id,
    title,
    slug,
    preview,
    mainImage,
    body,
    publishedAt,
    images,
    link,
    category[]-> {
        ${categoryFields}
    },
    relatedProjects[]-> {
        _id,
        title,
        slug,
        mainImage,
        preview,
    }
`;

export const allProjectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
    ${projectFields}
}`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug] [0] {
    ${projectFields}
}`;
