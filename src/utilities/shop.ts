import { directoryNames } from '@i18n/i18n'
import slugify from '@sindresorhus/slugify'
import { shopData, type ShopItemData } from '@src/shop'
import getPagePath from '@src/utilities/getPagePath'

export interface ShopItem extends ShopItemData {
  name: string
  id: string
}

export const shop = shopData.map((items) => ({
  ...items,
  id: slugify(items.name),
}))

export const getFocusPath = (
  locale: string,
  id: string,
  addLeadingSlash = true,
) => {
  const directories = [directoryNames.focus[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}
