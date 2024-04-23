import removeMd from "remove-markdown"

const getFirstSentence = (s: string): string => {
  const regexp = /(^.*?[a-z]{2,}[.!?]+)\s+\W*[A-Z]/gm
  const matches = s.matchAll(regexp)
  let result = ""
  for (const match of matches) {
    result = match[1]
    break
  }
  return result
}

export function truncateDescription(description: string): string {
  if (!description) return ""
  const maxNumberOfWords = 22
  let truncatedDescription: string
  if (description.split(" ").length > maxNumberOfWords) {
    truncatedDescription = `${description.split(" ").splice(0, maxNumberOfWords).join(" ")} …`
  }
  if (description.length > 150) truncatedDescription = `${description.substring(0, 150)} …`
  return truncatedDescription
}

export function getPageDescription(page: any): string {
  // Unlike for getPostDescription(), here we don't attempt to get the first sentence. The body may be to short for it.
  if (page) return typeof page.rawContent() === "undefined" ? "" : truncateDescription(removeMd(page.rawContent()))
  return ""
}

export function getPostDescription(post: any): string {
  if (post)
    return post.data.description
      ? truncateDescription(post.data.description)
      : truncateDescription(getFirstSentence(removeMd(post.body)))
  return ""
}
