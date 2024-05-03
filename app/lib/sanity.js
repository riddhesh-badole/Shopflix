import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient(
    {
        projectId:'8cq2g1go',
        dataset:'production',
        apiVersion:'2024-05-01',
        useCdn: true,
    }
);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
return builder.image(source);
}