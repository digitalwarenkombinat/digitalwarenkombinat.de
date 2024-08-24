import type { LocalizedText } from '@src/types.ts'

export type PersonData = {
  name: string
  mail: string
  content: LocalizedText
  description: LocalizedText
  image?: string
}

export const peopleData: PersonData[] = [
  {
    name: 'Anne Mühlich',
    mail: 'info@digitalwarenkombinat.de',
    description: {
      de: 'Westslawistin, Europäistin, Digitalhumanistin',
      en: 'Western Slavist, Europeanist, Digital Humanist',
    },
    content: {
      de: 'Geboren in der Oberlausitz, einer Region in Mitteleuropa, die durch eine wechselvolle Geschichte geprägt ist, habe ich mich früh für die Nachbarländer Polen und Tschechien sowie unsere gemeinsamen Wurzeln interessiert. Neben einem Studium der Westslawistik, der European Studies und längeren Aufenthalten in Polen habe ich mich jahrelang in der internationalen Jugendbildung engagiert. Der Zufall brachte mich 2018 zum Kulturhackathon Coding da Vinci, wo ich mich kreativ ausprobieren und neues dazulernen konnte. Gemeinsam mit Gerd entwickele ich seitdem Ideen, wie man digitalisierte Sammlungen spielerisch und ästhetisch ansprechend aufbereiten kann, um sie für neue Zielgruppen zu öffnen. Daraus entstand das Digitalwarenkombinat. Seit unserem Projekt GLAMorous Europe beschäftige ich mich außerdem mit den unzähligen Möglichkeiten, die Wikidata, Wikimedia Commons und andere Bereiche des Wikiversums für unsere Open-Source-Projekte bieten. Nebenbei arbeite ich aktuell im Veranstaltungsbereich eines Leipziger Museums.',
      en: 'Born in Upper Lusatia, a region in Central Europe marked by a varied history, I became interested in the neighboring countries of Poland and the Czech Republic and our common roots at an early age. In addition to studying Western Slavic Studies, European Studies, and extended stays in Poland, I was involved in international youth education for many years. In 2018, coincidence brought me to the Coding da Vinci cultural hackathon, where I was able to try out my creativity and learn something new. Together with Gerd, I have since been developing ideas on how to prepare digitized collections in a playful and aesthetically pleasing way to open them up to new target groups. This resulted in the Digitalwarenkombinat. Since our GLAMorous Europe project, I am additionally exploring the endless possibilities that Wikidata, Wikimedia Commons and other parts of the Wikiverse offer for our open source projects. Currently I also work in the events department of a museum in Leipzig.',
    },
    image: '/src/assets/anne.webp',
  },
  {
    name: 'Gerd Müller',
    mail: 'info@digitalwarenkombinat.de',
    description: {
      de: 'Software-Architekt, Kulturenthusiast, Open Source-Liebhaber',
      en: 'Software Architect, Culture Enthusiast, Open Source Lover',
    },
    content: {
      de: 'Aufgewachsen im Leipziger Umland begeisterte ich mich bereits in meiner Jugend für die Möglichkeiten, die Softwareentwicklung und Digitalisierung bieten. Mein Diplom im Bereich Informatik erwarb ich 2011 an der Berufsakademie Leipzig. Seit mehr als 10 Jahren betreue ich als Entwickler, Architekt, Ausbilder und Scrum-Master digitale Projekte. Durch Freunde erfuhr ich 2018 vom Kulturhackathon Coding da Vinci, in dessen Rahmen ich meine Fähigkeiten in einem kreativen und vielseitigen Umfeld erweitern und ausprobieren konnte. Gemeinsam mit Anne baue ich diese gewonnenen Erfahrungen und Ansätze stetig aus und machen sie somit für zukünftige Projekte nutzbar – dafür gibt es das Digitalwarenkombinat. Unsere Projekte stelle ich regelmäßig auf internationalen Konferenzen und Tagungen vor. Darüber hinaus bin ich als Anwendungsentwickler in einer Leipziger Bibliothek tätig.',
      en: "Growing up in the Leipzig area, I was already enthusiastic about the possibilities offered by software development and digitization in my youth. I earned my diploma in computer science at the Leipzig University of Cooperative Education in 2011. For more than 10 years, I have been managing digital projects as a developer, architect, trainer and Scrum master. Through friends, I learned about the Coding da Vinci cultural hackathon in 2018, in the context of which I was expanding and trying out my skills in a creative and diverse environment. Together with Anne, I am constantly building on the experience and approaches I have gained and making them usable for future projects - that's what Digitalwarenkombinat is for. I regularly present our projects at international conferences and meetings. Additonally I work at the moment as an application developer in a library in Leipzig.",
    },
    image: '/src/assets/gerd.webp',
  },
]
