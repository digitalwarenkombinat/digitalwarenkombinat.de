import { defaultLocale } from "@i18n/i18n"
import slugify from "@sindresorhus/slugify"

export default function getPagePath(
  locale: string,
  directories: Array<string>,
  slug: string,
  addLeadingSlash = true
) {
  const leadingSlash = addLeadingSlash ? "/" : ""
  const localePath = locale === defaultLocale ? "" : `${locale}/`
  let directoryPath = ""
  directories.map((dir) => (directoryPath += `${slugify(dir)}/`))
  const slugifiedString = `${slugify(slug)}`
  return `${leadingSlash}${localePath}${directoryPath}${slugifiedString}`
}
