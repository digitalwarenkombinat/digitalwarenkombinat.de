import { directoryNames } from '@i18n/i18n'
import slugify from '@sindresorhus/slugify'
import { type FocusData, areaData } from '@src/area'
import getPagePath from '@src/utilities/getPagePath'

export interface Focus extends FocusData {
  name: string
  id: string
}

export const area = areaData.map((focus) => ({
  ...focus,
  id: slugify(focus.name),
}))

export const getFocusPath = (
  locale: string,
  id: string,
  addLeadingSlash = true,
) => {
  const directories = [directoryNames.focus[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}