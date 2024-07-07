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
      de: 'Open-Source-Software bietet die Möglichkeit, von jedermann weiterentwickelt zu werden, wodurch GLAMs eine größere Unabhängigkeit von teurer proprietärer Software und einschränkenden Lizenzverträgen erlangen. Darüber hinaus fördert sie Transparenz und Sicherheit, da der Quellcode offen einsehbar und überprüfbar ist. Die Anpassungsfähigkeit und Wiederverwendbarkeit führen zu einer langfristigen Kosteneffizienz und ermöglichen GLAMs, nachhaltige Lösungen zu implementieren.',
      en: 'Open source software offers the opportunity to be developed by anyone, giving GLAMs greater independence from expensive proprietary software and restrictive licence agreements. It also promotes transparency and security, as the source code is openly visible and verifiable. Adaptability and re-usability lead to long-term cost efficiency and enable GLAMs to implement sustainable solutions.',
    },
  },
  {
    name: 'Progressive Web Apps',
    description: {
      de: 'Progressive Web-Apps (PWA) sind Apps, die über den Browser aufgerufen werden. Sie besitzen alle Vorteile von nativen Apps, darunter einfache Erstellung, Wartung und Auffindbarkeit. Zudem bieten PWAs Offline-Funktionalität, schnelle Ladezeiten und automatische Updates. Sie sind plattformübergreifend nutzbar und können somit sowohl auf Desktop- als auch auf mobilen Geräten verwendet werden, was die Reichweite und Benutzerfreundlichkeit erhöht.',
      en: 'Progressive web apps (PWA) are apps that are accessed via the browser. They have all the advantages of native apps, including easy creation, maintenance and discoverability. PWAs also offer offline functionality, fast loading times and automatic updates. They are platform-independent and can therefore be used on both desktop and mobile devices, which increases their reach and user-friendliness.',
    },
  },
  {
    name: 'State of the Art Development',
    description: {
      de: 'Wir arbeiten stets mit den neuesten technologischen Standards und integrieren innovative Technologien in unsere aktuellen Projekte. Dadurch bleiben unsere Entwicklungen immer auf dem neuesten Stand. Dies ermöglicht es uns, effizientere und leistungsfähigere Lösungen zu schaffen, die benutzerfreundlich und zukunftssicher sind. Durch den Einsatz modernster Tools und Methoden können wir flexibel auf Veränderungen reagieren und kreative Ansätze verwirklichen. Unsere Produkte zeichnen sich durch verbesserte Sicherheit, hohe Skalierbarkeit und optimale Performance aus.',
      en: 'We always work with the latest technological standards and integrate innovative technologies into our current projects. As a result, our developments are always up to date. This enables us to create more efficient and powerful solutions that are user-friendly and future-proof. By using the latest tools and methods, we can react flexibly to changes and realise creative approaches. Our products are characterised by improved security, high scalability and optimum performance.',
    },
  },
  {
    name: 'Umweltfreundlichkeit/Eco-friendliness',
    description: {
      de: 'Wir entwickeln unsere Web-Anwendungen und Websites mit schlankem Code und einem Fokus auf minimalen Speicherplatzbedarf. Für alle Projekte nutzen wir grünes Hosting von Greensta und verfügen über entsprechende Zertifizierungen. Diese umweltfreundlichen Maßnahmen reduzieren den Energieverbrauch und senken CO2-Emissionen. Durch die Optimierung unserer Softwarelösungen fördern wir Nachhaltigkeit und einen verantwortungsvollen Umgang mit Ressourcen. Unsere Kunden profitieren von Websites und Anwendungen, die sich durch eine kurze Ladezeit und eine hohe Kosteneffizienz auszeichnen.',
      en: 'We develop our web applications and websites with lean code and a focus on minimising storage space requirements. We use green hosting from Greensta for all projects and have the corresponding certifications. These environmentally friendly measures reduce energy consumption and lower CO2 emissions. By optimising our software solutions, we promote sustainability and the responsible use of resources. Our customers benefit from websites and applications that are characterised by short loading times and high cost efficiency.',
    },
  },
]
