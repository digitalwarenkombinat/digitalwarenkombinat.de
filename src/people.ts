export type PersonData = {
  name: string
  mail: string
  content: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  image?: string
}

export const peopleData: PersonData[] = [
  {
    name: "Anne Mühlich",
    mail: "info@digitalwarenkombinat.de",
    description: {
      de: "Westslawistin, Europäistin, Digitalhumanistin",
      en: "Western Slavist, Europeanist, Digital Humanist",
    },
    content: {
      de: "Geboren in der Oberlausitz, einer Region in Mitteleuropa, die durch eine wechselvolle Geschichte geprägt ist, habe ich mich früh für die Nachbarländer Polen und Tschechien sowie unsere gemeinsamen Wurzeln interessiert. Neben einem Studium der Westslawistik, der European Studies und längeren Aufenthalten in Polen habe ich mich jahrelang in der internationalen Jugendbildung engagiert. Der Zufall brachte mich 2018 zum Kulturhackathon Coding da Vinci, wo ich mich kreativ ausprobieren und neues dazulernen konnte. Gemeinsam mit Gerd entwickele ich seitdem Ideen, wie man digitalisierte Sammlungen spielerisch und ästhetisch ansprechend aufbereiten kann, um sie für neue Zielgruppen zu öffnen. Daraus entstand das Digitalwarenkombinat.",
      en: "Born in Upper Lusatia, a region in Central Europe marked by a varied history, I became interested in the neighboring countries of Poland and the Czech Republic and our common roots at an early age. In addition to studying Western Slavic Studies, European Studies, and extended stays in Poland, I was involved in international youth education for many years. In 2018, coincidence brought me to the Coding da Vinci cultural hackathon, where I was able to try out my creativity and learn something new. Together with Gerd, I have since been developing ideas on how to prepare digitized collections in a playful and aesthetically pleasing way to open them up to new target groups. This resulted in the Digitalwarenkombinat.",
    },
    image: "/assets/anne.webp",
  },
  {
    name: "Gerd Müller",
    mail: "info@digitalwarenkombinat.de",
    description: {
      de: "Software-Architekt, Kulturenthusiast, Open Source-Liebhaber",
      en: "Software Architect, Culture Enthusiast, Open Source Lover",
    },
    content: {
      de: "Aufgewachsen im Leipziger Umland begeisterte ich mich bereits in meiner Jugend für die Möglichkeiten, die Softwareentwicklung und Digitalisierung bieten. Mein Diplom im Bereich Informatik erwarb ich 2011 an der Berufsakademie Leipzig. Seit mehr als 10 Jahren betreue ich als Entwickler, Architekt und Ausbilder digitale Projekte. Daneben engagiere ich mich u.a. ehrenamtlich in verschiedenen Leipziger Vereinen. Durch Freunde erfuhr ich 2018 vom Kulturhackathon Coding da Vinci, in dessen Rahmen ich meine Fähigkeiten seitdem in einem kreativen und vielseitigen Umfeld erweitere und ausprobiere. Gemeinsam mit Anne möchte ich diese gewonnenen Erfahrungen und Ansätze vertiefen und in Zukunft nutzbar machen – dafür gibt es das Digitalwarenkombinat.",
      en: "Growing up in the Leipzig area, I was already enthusiastic about the possibilities offered by software development and digitization in my youth. I earned my diploma in computer science at the Leipzig University of Cooperative Education in 2011. For more than 10 years, I have been managing digital projects as a developer, architect and trainer. In addition, I am involved in various Leipzig associations on a voluntary basis. Through friends, I learned about the Coding da Vinci cultural hackathon in 2018, in the context of which I have been expanding and trying out my skills in a creative and diverse environment. Together with Anne, I would like to deepen these experiences and approaches and make them usable in the future - that's what Digitalwarenkombinat is for.",
    },
    image: "/assets/gerd.webp",
  },
]
