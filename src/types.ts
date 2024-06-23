export interface CommonFrontmatter {
  title?: string
  reference?: string
  description?: string
  image?: string
  previewImage?: string
  canonicalURL?: string
  file?: string
}

export type LocalizedText = {
  [languageKey: string]: string
}
