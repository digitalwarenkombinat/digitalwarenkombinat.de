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
    de: 'Wir entwickeln Open-Source-Webanwendungen für Museen, Galerien, Archive, Bibliotheken (GLAMs) und andere Kulturinstitutionen, um digitalisierte Sammlungen erfahrbar und zugänglich zu machen. Wir erstellen außerdem Grafikprodukte, die aus unseren digitalen Projekten hervorgehen.',
    en: 'We develop open source web applications for museums, galleries, archives, libraries (GLAMs) and other cultural institutions to make digitized collections experienceable and accessible. We also create graphic design products based on our digital projects.',
  },
  primaryAction: {
    de: 'Schreib uns!',
    en: 'Email us!',
  },
  areaTitle: {
    de: 'Unsere Schwerpunkte',
    en: 'Our Focus',
  },
  areaSubtitle: {
    de: 'Was macht uns aus?',
    en: 'What defines us?',
  },
  projectTitle: {
    de: 'Unsere Projekte',
    en: 'Our Projects',
  },
  projectSubtitle: {
    de: 'Was tun wir?',
    en: 'What do we do?',
  },
  projectAllTitle: {
    de: 'Alle Projekte',
    en: 'All projects',
  },
  projectAllSubtitle: {
    de: 'Seit 2018 haben wir etliche Open-Source-Projekte mit offenen Kulturdaten realisiert. Einige dieser Webanwendungen, wie z.B. Plantala oder Demokratie Erleben entstanden im Rahmen des Coding da Vinci Kulturhackathons. Seit 2022 realisieren wir Projekte als Digtalwarenkombinat. Hier findet ihr alle unsere finalisierten und aktuellen Projekte.',
    en: 'Since 2018, we have implemented a number of open source projects with open cultural data. Some of these web applications, such as Plantala or Demokratie Erleben (Living Democracy), were created as part of the Coding da Vinci cultural hackathon. Since 2022 we have been realizing projects as Digtalwarenkombinat. Here you can find all our completed and ongoing projects.',
  },
  projectAllImageAltText: {
    de: 'Referenzbild für alle Projekte',
    en: 'Reference image for all projects',
  },
  projectLink: {
    de: 'Zu allen Projekten',
    en: 'All projects',
  },
  projectNext: {
    de: 'Weitere Projekte',
    en: 'View other projects',
  },
  shopTitle: {
    de: 'Unser Shop',
    en: 'Our Shop',
  },
  shopSubtitle: {
    de: 'Was habt ihr auf Lager?',
    en: 'What have you got in store?',
  },
  shopLinkText: {
    de: 'In unserem kleinen Web-Shop findet ihr GLAM-Merchandise und Schönes zu den einzelnen Projekten.',
    en: 'In our small web shop you will find GLAM merchandise and nice things connected with our individual projects.',
  },
  shopLink: {
    de: 'Zum Webshop',
    en: 'Go to webshop',
  },
  referencesTitle: {
    de: 'Unsere Referenzen',
    en: 'Our References',
  },
  referencesSubtitle: {
    de: 'Was sagen andere über uns?',
    en: 'What do others say about us?',
  },
  blogTitle: {
    de: 'Unser Blog',
    en: 'Our Blog',
  },
  blogSubtitle: {
    de: 'Was gibt es Neues?',
    en: 'What is new?',
  },
  blogLink: {
    de: 'Weiterlesen',
    en: 'Read more',
  },
  blogAllLink: {
    de: 'Alle Posts anzeigen',
    en: 'View all posts',
  },
  blogAllText: {
    de: 'Hier geht es zu unseren anderen Blogposts.',
    en: 'Click here to read our other blog posts.',
  },
  blogRelated: {
    de: 'Weitere Blogbeiträge',
    en: 'Other blog posts',
  },
  blogShop: {
    de: 'Produkte im Webshop',
    en: 'products in the webshop',
  },
  blogShopRelated: {
    de: 'Merchandise zum Projekt',
    en: 'Merchandise from the project',
  },
  postsPerTagPageDescription: {
    de: 'Posts zum Thema',
    en: 'Posts about',
  },
  updated: {
    de: 'zuletzt aktualisiert ',
    en: 'last updated on ',
  },
  from: {
    de: 'von ',
    en: 'from ',
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
