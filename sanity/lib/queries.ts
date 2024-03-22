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
    link {
        href,
        linkText,
    },
    category[]-> {
        ${categoryFields}
    },
    relatedProjects[]-> {
        _id,
        title,
        slug,
        mainImage,
        preview,
        link {
            href,
            linkText,
        },
    }
`;

export const allProjectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
    ${projectFields}
}`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug] [0] {
    ${projectFields}
}`;

export const metadataQuery = groq`*[_type == "metadata"] [0] {
    title,
    description,
    keywords,
    author,
    image,
    "ogImage": ogImage.asset->url,
}`;

export const headerQuery = groq`*[_type == "header"] [0] {
    title,
    description,
    navItems
}`;

export const footerQuery = groq`*[_type == "footer"] [0] {
    email,
    phone,
    kvk,
    name,
}`;
