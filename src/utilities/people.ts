import { type PersonData, peopleData } from '@src/people'
import { directoryNames } from '@i18n/i18n'
import getPagePath from '@src/utilities/getPagePath'
import slugify from '@sindresorhus/slugify'

export interface Person extends PersonData {
  name: string
  id: string
}

export const people = peopleData.map((person) => ({
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
