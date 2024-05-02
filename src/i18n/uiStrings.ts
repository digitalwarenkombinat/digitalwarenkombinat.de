import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    de: 'Vereint digitale Welten gestalten',
    en: 'Shaping digital worlds together',
  },
  en: {
    de: 'English',
    en: 'English',
  },
  de: {
    de: 'German',
    en: 'German',
  },
  title: {
    de: 'Wir sind das',
    en: 'We are',
  },
  subtitle: {
    de: 'Digitalwarenkombinat',
    en: 'Digitalwarenkombinat',
  },
  description: {
    de: 'Wir entwickeln Open-Source-Webanwendungen für Museen, Galerien, Archive und Bibliotheken (GLAMs), um deren digitalisierte Sammlungen erfahrbar zu machen.',
    en: 'The Digitalwarenkombinat (DIWAKO) is dedicated to the creative use of open cultural data and develops web applications and merchandise for and with GLAM institutions under the motto „Shaping digital worlds together“. We are committed to the sustainable use of open cultural data and support museums, galleries, archives and libraries in opening up digitally to the whole society.',
  },
  primaryAction: {
    de: 'Schreib uns!',
    en: 'Email us!',
  },
  areaTitle: {
    de: 'Unsere Schwerpunkte',
    en: 'Our focus',
  },
  areaSubtitle: {
    de: 'Was macht uns aus?',
    en: 'Was macht uns aus?',
  },
  projectTitle: {
    de: 'Unsere Projekte',
    en: 'Our projects',
  },
  projectSubtitle: {
    de: 'Was tun wir?',
    en: 'Was tun wir?',
  },
  projectAllTitle: {
    de: 'Alle Projekte',
    en: 'All Projects',
  },
  projectAllSubtitle: {
    de: 'Seit 2018 (und damit bereits vor der Gründung des Digitalwarenkombinats) haben wir etliche Open Source Projekte mit offenen Kulturdaten realisiert. Einige dieser Webanwendungen, wie z.B. Plantala oder Demokratie Erleben entstanden im Rahmen des Coding da Vinci Kulturhackathons.',
    en: 'Seit 2018 (und damit bereits vor der Gründung des Digitalwarenkombinats) haben wir etliche Open Source Projekte mit offenen Kulturdaten realisiert. Einige dieser Webanwendungen, wie z.B. Plantala oder Demokratie Erleben entstanden im Rahmen des Coding da Vinci Kulturhackathons.',
  },
  projectLink: {
    de: 'Zu allen Projekten',
    en: 'All Projects',
  },
  projectNext: {
    de: 'Weitere Projekte',
    en: 'View Next',
  },
  referencesTitle: {
    de: 'Unsere Referenzen',
    en: 'Our references',
  },
  referencesSubtitle: {
    de: 'Was sagen andere über uns?',
    en: 'Was sagen andere über uns?',
  },
  blogTitle: {
    de: 'Unser Blog',
    en: 'Our blog',
  },
  blogSubtitle: {
    de: 'Was gibt es neues?',
    en: 'Was gibt es neues?',
  },
  blogLink: {
    de: 'Weiterlesen',
    en: 'Weiterlesen',
  },
  blogAllLink: {
    de: 'Alle Posts anzeigen',
    en: 'View All Posts',
  },
  tagHeadingSingular: {
    de: 'Thema',
    en: 'Tag',
  },
  tagHeadingPlural: {
    de: 'Themen',
    en: 'Tags',
  },
  postsPerTagPageDescription: {
    de: 'Posts zum Thema',
    en: 'Posts about',
  },
  updated: {
    de: 'Zuletzt aktualisiert ',
    en: 'Last updated on ',
  },
  pageNotFoundHeading: {
    de: 'Seite nicht gefunden',
    en: 'Page not found',
  },
  pageNotFoundBody: {
    de: '404!',
    en: '404!',
  },
}
