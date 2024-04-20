import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale] : string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	siteDescription: {
		de: 'Vereint digitale Welten gestalten',
		en: 'Shaping digital worlds together',
	},
	skipLink: {
		de: 'Zum Inhalt springen',
		en: 'Skip to content',
	},
	pageTranslationsAvailableIn: {
		de: 'Diese Seite gibt es auch auf',
		en: 'This page is also available in',
	},
	en: {
		de: 'englisch',
		en: 'English',
	},
	de: {
		de: 'deutsch',
		en: 'German',
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
		en: "Posts about",
	},
	personProfilePageDescription: {
		de: 'Profil von',
		en: "Profile of",
	},
	pageNotFoundHeading: {
		de: 'Seite nicht gefunden',
		en: 'Page not found',
	},
	pageNotFoundBody: {
		de: '404!',
		en: '404!',
	},
};
