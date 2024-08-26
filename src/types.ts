import type { InferEntrySchema } from 'astro:content'

export interface CommonFrontmatter {
  title?: string
  reference?: string
  description?: string
  image?: string
  previewImage?: string
  previewImageCredit?: string
  canonicalURL?: string
  file?: string
}

export type LocalizedText = {
  [languageKey: string]: string
}

export type PostProps = {
  id: string
  slug: string
  body: string
  collection: 'blog' | 'projects'
  data: InferEntrySchema<'blog' | 'projects'>
}
