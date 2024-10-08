import type { PostProps } from '@src/types'

export function truncateDescription(description: string): string {
  if (!description) {
    return ''
  }

  const maxWords = 40
  const maxChars = 350

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

export function getPostDescription(post: PostProps): string {
  if (!post) {
    return ''
  }

  return truncateDescription(post.data.description)
}
