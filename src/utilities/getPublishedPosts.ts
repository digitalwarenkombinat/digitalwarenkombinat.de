import { getCollection } from "astro:content"
import { getLocaleFromUrl } from "@i18n/utilities"

export default async function getPublishedPosts(
  locale: string,
  collection: "blog" | "projects",
  sort = "reverseChronological"
) {
  let posts = await getCollection(collection)
  if (locale !== "") {
    posts = posts.filter((entry) => getLocaleFromUrl(entry.slug) === locale)
  }
  if (sort === "reverseChronological") {
    posts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  }
  return posts
}
