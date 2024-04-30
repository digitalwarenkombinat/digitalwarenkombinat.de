import { directoryNames } from '@i18n/i18n'
import slugify from '@sindresorhus/slugify'
import { type PersonData, peopleData } from '@src/people'
import getPagePath from '@src/utilities/getPagePath'

export interface Person extends PersonData {
  name: string
  id: string
}

export const people = peopleData.map(person => ({
  ...person,
  id: slugify(person.name),
}))

export const getPersonPath = (
  locale: string,
  id: string,
  addLeadingSlash = true,
) => {
  const directories = [directoryNames.people[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}
