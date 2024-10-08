import { type ShopItemData, shopData } from '@src/shop'
import { directoryNames } from '@i18n/i18n'
import getPagePath from '@src/utilities/getPagePath'
import slugify from '@sindresorhus/slugify'

export interface ShopItem extends ShopItemData {
  name: string
  id: string
}

const generateShopItem = (shopItemData: ShopItemData): ShopItem => ({
  ...shopItemData,
  id: slugify(shopItemData.name),
})

export const shop = shopData.map(generateShopItem)

export const getShopItemPath = (
  locale: string,
  id: string,
  addLeadingSlash = true,
) => {
  const directories = [directoryNames.shopItem[locale]]
  return getPagePath(locale, directories, id, addLeadingSlash)
}
