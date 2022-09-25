
import rss from "@astrojs/rss"

export const get = () =>
  rss({
    title: "Digitalwarenkombinat",
    description: "Digitalwarenkombinat",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.mdx"),
  })
