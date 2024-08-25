import type { LocalizedText } from '@src/types.ts'

export type FocusData = {
  id: string
  name: LocalizedText
  description: LocalizedText
  image?: string
}

export const areaData: FocusData[] = [
  {
    id: 'Open Source',
    name: {
      de: 'Open Source Lösungen',
      en: 'Open Source Solutions',
    },
    description: {
      de: 'Open-Source-Software ermöglicht es, dass jede interessierte Person den Quellcode weiterentwickeln kann. Dadurch gewinnen GLAMs an Unabhängigkeit von teurer, proprietärer Software und restriktiven Lizenzverträgen. Zudem wird durch die Offenlegung des Quellcodes Transparenz und Sicherheit gefördert, da dieser öffentlich einsehbar und überprüfbar ist. Die hohe Anpassungsfähigkeit und Wiederverwendbarkeit von Open-Source-Software führt zu langfristiger Kosteneffizienz und erlaubt es GLAMs, nachhaltige und maßgeschneiderte Lösungen zu implementieren.',
      en: 'Open source software makes it possible for any interested person to further develop the source code. As a result, GLAMs gain independence from expensive, proprietary software and restrictive license agreements. In addition, the disclosure of the source code fosters transparency and security, as it is publicly accessible and verifiable. The high adaptability and reusability of open source software leads to long-term cost efficiency and allows GLAMs to implement sustainable and customized solutions.',
    },
  },
  {
    id: 'Progressive Web Apps',
    name: {
      de: 'Progressive Web Apps',
      en: 'Progressive Web Apps',
    },
    description: {
      de: 'Progressive Web-Apps (PWA) sind Anwendungen, die direkt über den Browser genutzt werden. Sie kombinieren die Vorteile von nativen Apps, wie einfache Erstellung, Wartung und Auffindbarkeit, mit zusätzlichen Features wie Offline-Funktionalität, schnellen Ladezeiten und automatischen Updates. PWAs sind plattformübergreifend einsetzbar und bieten eine nahtlose Nutzungserfahrung auf sowohl Desktop- als auch mobilen Geräten, was ihre Reichweite und Benutzerfreundlichkeit erheblich steigert.',
      en: 'Progressive web apps (PWA) are applications that are used directly via the browser. They combine the advantages of native apps, such as easy creation, maintenance and discoverability, with additional features such as offline functionality, fast loading times and automatic updates. PWAs work across platforms and offer a seamless user experience on both desktop and mobile devices, significantly increasing their reach and usability.',
    },
  },
  {
    id: 'State of the Art Development',
    name: {
      de: 'State of the Art Development',
      en: 'State of the Art Development',
    },
    description: {
      de: 'Wir arbeiten kontinuierlich mit den neuesten technologischen Standards und integrieren innovative Technologien in unsere Projekte. Dadurch gewährleisten wir, dass unsere Entwicklungen stets auf dem aktuellen Stand sind. Dies ermöglicht es uns, effiziente und leistungsstarke Lösungen zu schaffen, die sowohl benutzerfreundlich als auch zukunftssicher sind. Der Einsatz modernster Tools und Methoden erlaubt uns, flexibel auf Veränderungen zu reagieren und kreative Ansätze umzusetzen. Unsere Produkte überzeugen durch verbesserte Sicherheit, hohe Skalierbarkeit und optimale Performance.',
      en: 'We continuously work with the latest technological standards and integrate innovative technologies into our projects. This ensures that our developments are always up to date. This enables us to create efficient and powerful solutions that are both user-friendly and future-proof. The use of state-of-the-art tools and methods allows us to react flexibly to changes and implement creative approaches. Our products provide improved security, high scalability and optimum performance.',
    },
  },
  {
    id: 'Eco-friendliness',
    name: {
      de: 'Umweltfreundlichkeit',
      en: 'Eco-friendliness',
    },
    description: {
      de: 'Wir entwickeln unsere Web-Anwendungen und Websites mit schlankem Code und einem Fokus auf minimalen Speicherplatzbedarf. Für alle Projekte setzen wir auf grünes Hosting bei Greensta. Diese Maßnahmen tragen zur Reduzierung des Energieverbrauchs und der CO2-Emissionen bei. Durch die Optimierung unserer Softwarelösungen fördern wir einen verantwortungsvollen Umgang mit Ressourcen. Unsere Kunden profitieren von Websites und Anwendungen, die sich durch kurze Ladezeiten und hohe Kosteneffizienz auszeichnen.',
      en: 'We develop our web applications and websites with lean code and a focus on minimal storage space requirements. For all projects we rely on green hosting at Greensta. These measures help to reduce energy consumption and CO2 emissions. By optimizing our software solutions, we promote the responsible use of resources. Our customers benefit from websites and applications that are characterized by short loading times and high cost efficiency.',
    },
  },
]
