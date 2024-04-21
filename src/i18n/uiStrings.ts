import type { Locale } from "./i18n"

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    de: "Vereint digitale Welten gestalten",
    en: "Shaping digital worlds together",
  },
  en: {
    de: "English",
    en: "English",
  },
  de: {
    de: "German",
    en: "German",
  },
  title: {
    de: "Wir sind das",
    en: "We are",
  },
  subtitle: {
    de: "Digitalwarenkombinat",
    en: "Digitalwarenkombinat",
  },
  description: {
    de: "Wir entwickeln Open-Source-Webanwendungen für Museen, Galerien, Archive und Bibliotheken (GLAMs), um deren digitalisierte Sammlungen erfahrbar zu machen.",
    en: "The Digitalwarenkombinat (DIWAKO) is dedicated to the creative use of open cultural data and develops web applications and merchandise for and with GLAM institutions under the motto „Shaping digital worlds together“. We are committed to the sustainable use of open cultural data and support museums, galleries, archives and libraries in opening up digitally to the whole society.",
  },
  primaryAction: {
    de: "Schreib uns!",
    en: "Email us!",
  },
  about: {
    de: "Über uns",
    en: "About us",
  },
  tagHeadingSingular: {
    de: "Thema",
    en: "Tag",
  },
  tagHeadingPlural: {
    de: "Themen",
    en: "Tags",
  },
  postsPerTagPageDescription: {
    de: "Posts zum Thema",
    en: "Posts about",
  },
  personProfilePageDescription: {
    de: "Profil von",
    en: "Profile of",
  },
  pageNotFoundHeading: {
    de: "Seite nicht gefunden",
    en: "Page not found",
  },
  pageNotFoundBody: {
    de: "404!",
    en: "404!",
  },
}
