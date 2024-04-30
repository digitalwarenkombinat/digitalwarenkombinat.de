export type Locale = 'de' | 'en' | string

interface Fallback {
  [key: string]: string
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string
  }
}

export const defaultLocale: string = 'de'
export const locales = ['de', 'en']
export const fallback: Fallback = {
  en: 'de',
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
  blog: {
    de: 'blog',
    en: 'blog',
  },
  projects: {
    de: 'projects',
    en: 'projects',
  },
}
export const directoryNames: PathNames = {
  // Define the path for the tag pages (tags list, posts per tag).
  tags: {
    de: 'tag',
    en: 'tag',
  },
  // Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
  people: {
    de: 'about',
    en: 'about',
  },
  // Define the path for focus's detail pages. Should arguably be the same as the locale's Focus page's slug.
  focus: {
    de: 'focus',
    en: 'focus',
  },
}
