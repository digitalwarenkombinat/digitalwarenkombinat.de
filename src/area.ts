import type { LocalizedText } from '@src/types.ts'

export type FocusData = {
  name: string
  description: LocalizedText
  image?: string
}

export const areaData: FocusData[] = [
  {
    name: 'Open Source Lösungen',
    description: {
      de: 'Open-Source Software kann von jedem Menschen weiterentwickelt werden und ermöglicht GLAMs damit eine größere Unabhängigkeit von proprietärer Software und limitierenden Lizenzverträgen.',
      en: 'Open-Source Software kann von jedem Menschen weiterentwickelt werden und ermöglicht GLAMs damit eine größere Unabhängigkeit von proprietärer Software und limitierenden Lizenzverträgen.',
    },
  },
  {
    name: 'Progressive Web Apps',
    description: {
      de: 'Progressive Web-Apps (PWA) sind Apps, die über den Browser aufgerufen werden. Sie besitzen alle Vorteile von nativen Apps – müssen aber nicht erst installiert werden und sind einfacher zu erstellen, zu warten und aufzufinden.',
      en: 'Progressive Web-Apps (PWA) sind Apps, die über den Browser aufgerufen werden. Sie besitzen alle Vorteile von nativen Apps – müssen aber nicht erst installiert werden und sind einfacher zu erstellen, zu warten und aufzufinden.',
    },
  },
  {
    name: 'State of the Art Development',
    description: {
      de: 'Wir entwickeln nach dem aktuellen technologischen Standard und probieren neue Technologien gern im Rahmen unserer aktuellen Projekte aus. Somit sind unsere Projekte immer auf dem neuesten Stand.',
      en: 'Wir entwickeln nach dem aktuellen technologischen Standard und probieren neue Technologien gern im Rahmen unserer aktuellen Projekte aus. Somit sind unsere Projekte immer auf dem neuesten Stand.',
    },
  },
  {
    name: 'Umweltfreundlichkeit',
    description: {
      de: 'Wir entwickeln unsere Web-Anwendungen und Websites mit schlankem Code und mit dem Fokus auf geringen Speicherplatz. Zudem nutzen wir für alle Projekte und Websites grünes Hosting von Greensta und sind zertifiziert.',
      en: 'Wir entwickeln unsere Web-Anwendungen und Websites mit schlankem Code und mit dem Fokus auf geringen Speicherplatz. Zudem nutzen wir für alle Projekte und Websites grünes Hosting von Greensta und sind zertifiziert.',
    },
  },
]
