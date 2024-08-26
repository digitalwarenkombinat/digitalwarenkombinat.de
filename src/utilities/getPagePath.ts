import { defaultLocale } from '@i18n/i18n'
import slugify from '@sindresorhus/slugify'

export default function getPagePath(
  locale: string,
  directories: string[],
  slug: string,
  addLeadingSlash = true,
): string {
  const leadingSlash = addLeadingSlash ? '/' : ''
  const localePath = locale === defaultLocale ? '' : `${locale}/`

  const directoryPath = directories.map((dir) => `${slugify(dir)}/`).join('')

  const slugifiedString = slugify(slug)

  return `${leadingSlash}${localePath}${directoryPath}${slugifiedString}`
}
