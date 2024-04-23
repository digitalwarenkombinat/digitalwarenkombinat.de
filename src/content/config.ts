import { defineCollection, z } from "astro:content"

const contentCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    reference: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    previewImage: z.string().optional(),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).default(["other"]),
    canonicalURL: z.string().optional(),
  }),
})

export const collections = {
  blog: contentCollection,
  projects: contentCollection,
}
