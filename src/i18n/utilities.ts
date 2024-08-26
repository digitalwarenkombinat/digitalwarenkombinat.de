import { defaultLocale, locales } from '@i18n/i18n'

export function getLocaleFromUrl(url: string): string {
  if (url === undefined) return undefined
  const parts = url.split('/').filter((el) => el !== '')
  let match = ''
  for (const part of parts) {
    if (locales.includes(part)) match = part
  }
  if (match) return match
  return defaultLocale
}

export function getLocalizedHref(locale: string, url: string): string {
  return locale === defaultLocale ? url : `/${locale}${url}`
}
