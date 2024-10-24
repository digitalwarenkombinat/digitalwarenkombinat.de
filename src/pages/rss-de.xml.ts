import type { APIContext } from 'astro'
import MarkdownIt from 'markdown-it'
import type { RSSFeedItem } from '@astrojs/rss'
import { getImage } from 'astro:assets'
import { getPostsToRenderInRSS } from '@utilities/getPostsToRenderInRSS'
import { parse as htmlParser } from 'node-html-parser'
import rss from '@astrojs/rss'
import { siteTitle } from '../consts'
import { uiStrings } from '@i18n/uiStrings'

// Create a Markdown parser instance
const markdownParser = new MarkdownIt()

// Load images dynamically from a specific folder
const imagesGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/*.{webp, svg}',
)

/**
 * Optimizes image URLs and internal links in the post's content.
 * @param {string} body - The post's body in HTML format.
 * @param {APIContext} context - The API context to access the site URL.
 * @returns {string} - The optimized HTML content with correct image URLs and internal links.
 */
async function optimizeContent(
  body: string,
  context: APIContext,
): Promise<string> {
  const html = htmlParser.parse(body)

  // Process all images
  const images = html.querySelectorAll('img')
  for (const img of images) {
    const src = img.getAttribute('src')

    if (src && src.startsWith('../')) {
      const relativePath = src.replace('../../', '')
      const imagePath = `/src/${relativePath}`

      const resolvedImage = await imagesGlob[imagePath]?.()?.then(
        (res) => res.default,
      )

      if (resolvedImage) {
        const optimizedImage = await getImage({ src: resolvedImage })
        img.setAttribute(
          'src',
          `${context.site}${optimizedImage.src.replace('/', '')}`,
        )
      }
    } else {
      throw new Error('Unsupported image source')
    }
  }

  // Process all internal links
  const links = html.querySelectorAll('a')
  for (const link of links) {
    const href = link.getAttribute('href')
    // Check if it's a relative link (starting with '/')
    if (href && href.startsWith('/')) {
      link.setAttribute('href', `${context.site}${href.replace('/', '')}`)
    }
  }

  return html.toString()
}

/**
 * Creates the RSS feed.
 * @param {APIContext} context - The API context.
 */
export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('Site not defined in context')
  }

  // Retrieve the posts to include in the RSS feed
  const postsToRender = await getPostsToRenderInRSS(context, 'de', 'blog')
  const feed: RSSFeedItem[] = []

  // Process each post
  for (const post of postsToRender) {
    // Convert markdown to HTML
    const bodyHtml = markdownParser.render(post.body)
    // Optimize image URLs and internal links in the HTML content
    const optimizedContent = await optimizeContent(bodyHtml, context)

    // Push the post information to the feed array
    feed.push({
      title: post.title || '',
      pubDate: post.pubDate || new Date(),
      link: post.link,
      content: optimizedContent,
      ...post,
    })
  }

  return rss({
    title: siteTitle,
    description: uiStrings.siteDescription.de,
    site: context.site,
    items: feed,
  })
}
