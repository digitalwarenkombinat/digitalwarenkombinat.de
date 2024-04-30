export type FocusData = {
  name: string
  description: {
    [key: string]: string
  }
  image?: string
}

export const areaData: FocusData[] = [
  {
    name: 'Open Source Lösungen',
    description: {
      de: 'Open Source Software ...',
      en: 'Open Source Software ...',
    },
  },
  {
    name: 'Progressive Web Apps',
    description: {
      de: 'Progressive Web Apps ...',
      en: 'Progressive Web Apps ...',
    },
  },
  {
    name: 'State of the Art Development',
    description: {
      de: 'State of the Art Development ...',
      en: 'State of the Art Development ...',
    },
  },
  {
    name: 'Umweltfreundlichkeit',
    description: {
      de: 'Umweltfreundlichkeit ...',
      en: 'Umweltfreundlichkeit ...',
    },
  },
]
