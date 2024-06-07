export type ShopItemData = {
  name: string
  project: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  price: {
    [key: string]: string
  }
  image?: string
}

export const shopData: ShopItemData[] = [
  {
    name: 'Postkarten',
    project: {
      de: 'GLAMorous Europe',
      en: 'GLAMorous Europe',
    },
    description: {
      de: 'versch. Motive',
      en: 'versch. Motive',
    },
    price: {
      de: 'ab 2,50€ pro Stück',
      en: 'ab 2,50€ pro Stück',
    },
    image: '/src/assets/shop1.webp',
  },
  {
    name: 'Postkarten',
    project: {
      de: 'Plantala',
      en: 'Plantala',
    },
    description: {
      de: 'versch. Motive',
      en: 'versch. Motive',
    },
    price: {
      de: 'ab 2,50€ pro Stück',
      en: 'ab 2,50€ pro Stück',
    },
    image: '/src/assets/shop2.webp',
  },
  {
    name: 'Ausmalbögen',
    project: {
      de: 'Plantala',
      en: 'Plantala',
    },
    description: {
      de: 'versch. Motive',
      en: 'versch. Motive',
    },
    price: {
      de: 'ab 1,50€ pro Stück',
      en: 'ab 1,50€ pro Stück',
    },
    image: '/src/assets/shop3.webp',
  },
]
