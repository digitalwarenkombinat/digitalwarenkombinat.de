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
        path: "/focus",
        label: "Schwerpunkte",
      },
      {
        path: "/projects",
        label: "Projekte",
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
        path: "/en/focus",
        label: "Focus",
      },
      {
        path: "/en/projects",
        label: "Projects",
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
        path: "/en/legal",
        label: "Legal Notices",
      },
    ],
  },
}
