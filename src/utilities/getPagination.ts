import getPageNumbers from "@utilities/getPageNumbers"
import { pagination } from "../consts"

interface GetPaginationProps<T> {
  posts: T
  page: string | number
  isIndex?: boolean
}

const postsPerPage = pagination.postsPerPage

const getPagination = <T>({
  posts,
  page,
  isIndex = false,
}: GetPaginationProps<T[]>) => {
  const totalPagesArray = getPageNumbers(posts.length)
  const totalPages = totalPagesArray.length

  const currentPage = isIndex
    ? 1
    : page &&
        !Number.isNaN(Number(page)) &&
        totalPagesArray.includes(Number(page))
      ? Number(page)
      : 0

  const lastPost = isIndex ? postsPerPage : currentPage * postsPerPage
  const startPost = isIndex ? 0 : lastPost - postsPerPage
  const paginatedPosts = posts.slice(startPost, lastPost)

  return {
    totalPages,
    currentPage,
    paginatedPosts,
  }
}

export default getPagination
