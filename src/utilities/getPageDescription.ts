export function truncateDescription(description: string): string {
  if (!description) {
    return ''
  }

  const maxWords = 22
  const maxChars = 150

  const words = description.split(' ')
  let truncatedDescription: string

  if (words.length > maxWords) {
    truncatedDescription = `${words.slice(0, maxWords).join(' ')} …`
  } else if (description.length > maxChars) {
    truncatedDescription = `${description.substring(0, maxChars)} …`
  } else {
    truncatedDescription = description
  }

  return truncatedDescription
}

export function getPostDescription(post: any): string {
  if (!post) {
    return ''
  }

  return truncateDescription(post.data.description)
}
