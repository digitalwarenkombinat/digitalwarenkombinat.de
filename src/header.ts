export type navigationItem = Readonly<{
  path: string
  label: string
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
  de: {
    items: [
      {
        path: "/",
        label: "Start",
      },
      {
        path: "/blog",
        label: "Blog",
      },
      {
        path: "/about",
        label: "Über uns",
      },
      {
        path: "/focus",
        label: "Schwerpunkte",
      },
      {
        path: "/legal",
        label: "Impressum",
      },
    ],
  },
  en: {
    items: [
      {
        path: "/en/",
        label: "Home",
      },
      {
        path: "/en/blog",
        label: "Blog",
      },
      {
        path: "/en/about",
        label: "About",
      },
      {
        path: "/en/focus",
        label: "Focus",
      },
      {
        path: "/en/legal",
        label: "Legal Notices",
      },
    ],
  },
}
