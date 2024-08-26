import type { APIContext } from 'astro'
import { getLocaleFromUrl } from '@i18n/utilities'
import getPublishedPosts from '@utilities/getPublishedPosts'
import { getRelativePostPath } from '@utilities/getPostPath'

export async function getPostsToRenderInRSS(
  _context: APIContext,
  locale: string,
  collection: 'blog',
) {
  const posts = (await getPublishedPosts(locale, collection))
    .slice(0, 50)
    .map((post) => ({
      ...post.data,
      link: getRelativePostPath(
        locale || getLocaleFromUrl(post.slug),
        collection,
        post.slug,
      ),
      body: post.body,
    }))
  return posts
}
